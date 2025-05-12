'use server'

import { redirect } from "next/navigation"
import { tokenSchema } from "../lib/schemas/verify-token-schema"

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function resetPassword(prevState:ActionStateType ,formData:FormData){
    const rawData = formData.get('code');

    const result = tokenSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: ''
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/validate-token`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: rawData})
    })

    const response = await request.json();
    
    if(request.status === 403){
        return{
            errors: [response.msg],
            successMessage: ''
        }
    }

    redirect(`/auth/new-password/${rawData}`);
} 