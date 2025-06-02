'use server'

import { cookies } from 'next/headers'

import { createExpenseSchema } from "../lib/schemas/budget-schema";

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function addExpense(id:string, prevState:ActionStateType ,formData:FormData){
    const rawData = {
        name: formData.get('name'),
        amount: Number(formData.get('amount'))
    }

    const result = createExpenseSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: ''
        }
    }

    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    if(!jwt){
        return {
            errors: ['Unauthorized'],
            successMessage: ''
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/budgets/${id}/expenses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({name: result.data.name, amount: result.data.amount}),
    });

    const response = await request.json();

    if(!request.ok){
        return {
            errors: [response.message],
            successMessage: ''
        }
    }


    return{
        errors:[],
        successMessage: response.msg
    }
} 