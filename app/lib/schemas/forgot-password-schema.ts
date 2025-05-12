import {z} from 'zod'

export const ForgotPasswordSchema = z.string()
  .min(1, { message: 'Email cannot be empty' })
  .email({ message: 'Invalid Email' })