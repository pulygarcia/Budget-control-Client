'use server'

import { ForgotPasswordSchema } from "../lib/schemas/forgot-password-schema"

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function forgotPassword(prevState:ActionStateType ,formData:FormData){
    const rawData = formData.get('email');
    const result = ForgotPasswordSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: ''
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/forgot-password`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: rawData})
    })

    const response = await request.json();

    if(request.status === 404){
        return{
            errors: [response.msg],
            successMessage: ''
        }
    }

    return{
        errors: [],
        successMessage: response.msg
    }
} 