//DATA ACCESS LAYER
import 'server-only'
 
import {cache} from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { sessionSchema } from '../schemas/session-schema'
 
export const verifySession = cache(async () => {
  const authToken = (await cookies()).get('AUTH_JWT')?.value

  if (!authToken) {
    redirect('/auth/login');
  }
 
  //console.log(authToken);

  const request = await fetch(`${process.env.API_BASE_URL}/auth/user`, {
    method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    })

    const session = await request.json();
    //console.log(session);

    const result = sessionSchema.safeParse(session);
    if(!result.success){
        redirect('/auth/login');
    }

    return{
        user: result.data,
        isAuth: true
    }
})