import { z } from "zod";

export const modifyPasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .nonempty({ message: 'Password is required' }),

    newPassword: z
      .string()
      .nonempty({ message: 'Please confirm your password' })
      .min(8, {message: 'New password should have at least 8 characters'}),

    password_confirmation: z
      .string()
      .nonempty({ message: 'Please confirm your password' })
  })
  .refine(data => data.newPassword === data.password_confirmation, {
    message: "Passwords don't match",
    path: ['password_confirmation'],
  });