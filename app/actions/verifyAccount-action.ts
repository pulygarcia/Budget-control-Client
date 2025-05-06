'use server'

import { tokenSchema } from "../lib/schemas/verify-token-schema"

type actionStateType = {
    errors: string[];
    successMessage: string | undefined
}

export async function verifyAccount(prevState:actionStateType ,formData:FormData){
    //console.log('Verifying', formData);
    const rawData = {
        code: formData.get('code'),
    }

    const result = tokenSchema.safeParse(rawData);
    if(!result.success){
        const errors = result.error.errors.map(error => error.message);
        return {
            errors,
            successMessage: ''
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           token: result.data.code
        }),
    })

    const response = await request.json();
    //console.log(response);

    if(request.status === 401){
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