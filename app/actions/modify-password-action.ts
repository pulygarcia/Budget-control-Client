'use server'

import { cookies } from 'next/headers'

import { modifyPasswordSchema } from '../lib/schemas/modify-password-schema'

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function modifyPassword(prevState:ActionStateType ,formData:FormData){
    const rawData = {
        currentPassword: formData.get('current_password'),
        newPassword: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }

    const result = modifyPasswordSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: '',
        }
    }

    const jwt = (await cookies()).get('AUTH_JWT')?.value;

    if(!jwt){
        return {
            errors: ['Unauthorized'],
            successMessage: '',
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({current_password: result.data.currentPassword, password: result.data.newPassword}),
    });

    const response = await request.json();

    if(!request.ok){
        return {
            errors: [response.message],
            successMessage: '',
        }
    }



    return{
        errors:[],
        successMessage: response.msg,
    }
} 