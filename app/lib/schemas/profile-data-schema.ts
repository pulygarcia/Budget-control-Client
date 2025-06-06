import { z } from "zod";

export const profileDataSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Invalid email' }),

    username: z
      .string()
      .nonempty({ message: 'Name is required' })
      .min(3, { message: 'Name must be at least 3 characters' })
  })
