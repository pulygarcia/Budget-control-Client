import { z } from "zod";

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/\d/, "Password must contain at least one number.")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter."),

    password_confirmation: z
      .string()
      .nonempty({ message: 'Please confirm your password' }),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ['password_confirmation'],
  });
