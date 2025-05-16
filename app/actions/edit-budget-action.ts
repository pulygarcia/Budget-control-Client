'use server'

import { cookies } from 'next/headers'

import { budgetSchema } from "../lib/schemas/budget-schema";

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function editBudget(id:number ,prevState:ActionStateType ,formData:FormData){
    const rawData = {
        name: formData.get('name'),
        amount: Number(formData.get('amount'))
    }

    const result = budgetSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: '',
            finished: false
        }
    }

    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    if(!jwt){
        return {
            errors: ['Unauthorized'],
            successMessage: '',
            finished: false
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/budgets/${id}`, {
        method: 'PATCH',
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
            successMessage: '',
            finished: false
        }
    }



    return{
        errors:[],
        successMessage: response.msg,
        finished: true
    }
} 