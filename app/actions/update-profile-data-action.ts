'use server'

import { cookies } from 'next/headers'

import { profileDataSchema } from '../lib/schemas/profile-data-schema'

type ActionStateType = {
    errors: string[],
    successMessage: string
}

export async function updateProfileData(prevState:ActionStateType ,formData:FormData){
    const rawData = {
        username: formData.get('username'),
        email: formData.get('email')
    }

    const result = profileDataSchema.safeParse(rawData);

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

    const request = await fetch(`${process.env.API_BASE_URL}/auth/user`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({username: result.data.username, email: result.data.email}),
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