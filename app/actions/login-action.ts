'use server'

import { redirect } from "next/navigation";
import { LoginSchema } from "../lib/schemas/login-schema"
import { cookies } from 'next/headers'

type actionStateType = {
    errors: object[];
}

export async function login(prevState:actionStateType ,formData:FormData){
    //console.log('login...', formData);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const result = LoginSchema.safeParse(loginData);
    if(!result.success){
        const errors = result.error.errors.map(error => {
            return {
                field: error.path[0],
                message: error.message
            }
        });

        return {
            errors
        }
    }

    const request = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           email: result.data.email,
           password: result.data.password
        }),
    })

    const response = await request.json();
    //console.log(response);
    //console.log(request);
    if(request.status === 404){
        return{
            errors: [{
                field: 'server',
                message: response.msg
            }]
        }
    }

    if(request.status === 401){ //wrong password
        return{
            errors: [{
                field: 'password',
                message: response.msg
            }]
        }
    }

    if(request.status === 403){ //not verified
        return{
            errors: [{
                field: 'server',
                message: response.msg
            }]
        }
    }

    const jwt = response.token;
    const cookieStore = await cookies()
    cookieStore.set('jwt', jwt, {
        name: 'AUTH_JWT',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30, // 30d duration,
        path: '/' //available in all routes
    });


    redirect('/admin')

    //this below is not necessary 'cause we redirect user out of the view before set cookie
    /*return{
        errors: []
    }*/
} 