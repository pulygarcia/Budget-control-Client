'use server'

import { newPasswordSchema } from "../lib/schemas/new-password-schema"
import { ParamValue } from "next/dist/server/request/params"

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function createNewPassword(token:ParamValue, prevState:ActionStateType ,formData:FormData){
    const rawData = {
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    }

    const result = newPasswordSchema.safeParse(rawData);

    if(!result.success){
        const errors = result.error.errors.map(error => error.message);

        return {
            errors,
            successMessage: ''
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/reset-password/${token}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({newPassword: rawData.password})
    })

    const response = await request.json();
    if(request.status === 500){
        return{
            errors: ['Has been an Error, please try again later'],
            successMessage: ''
        }
    }

    
    return {
        errors: [],
        successMessage: response.msg
    }
} 