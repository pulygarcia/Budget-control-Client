import {z} from 'zod'

export const LoginSchema = z.object({
    email: z.string()
            .min(1, {message: 'Email cannot be empty'})
            .email( {message: 'Invalid Email'}),
    password: z.string()
            .min(1, {message: 'Password cannot be empty'})
})