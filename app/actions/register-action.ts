'use server'

import { registerSchema } from "../lib/schemas/registerSchema"

type actionStateType = {
    errors: object[];
    successMessage: string | null
}

export async function registerUser(prevState:actionStateType ,data:FormData){
    const rawData = {
        email: data.get('email'),
        name: data.get('name'),
        password: data.get('password'),
        password_confirmation: data.get('password_confirmation')
    }

    const result = registerSchema.safeParse(rawData);
    //console.log(result);
    
    if(!result.success){
        //return each error.message and correspondient field
        const errors = result.error.errors.map(error => {
            return {
                field: error.path[0],
                message: error.message
            }
        });
        
        return {
            errors,
            successMessage: ''
        }
    }

    //endpoint fetching
    const formData = result.data;

    const url = `${process.env.API_BASE_URL}/auth/register`;

    const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //send form data without pwd_confirm
            username: formData?.name,
            email: formData?.email,
            password: formData?.password,
        }),
    });

    const response = await request.json();

    if (request.status == 409) {
        //console.log(response.message);
        return {
            errors: [{
                field: 'server', //diference server error from form error to show in component
                message: response.error
            }],
            successMessage: '',
        };
    }


    return{
        errors: [], //return state again to the component
        successMessage: response.msg as string
    }
} 