import { z } from 'zod';

export const budgetSchema = z.object({
  name: z
    .string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' })
    .min(1, { message: 'Name cannot be empty' })
    .trim()
    .refine(val => val.length > 0, { message: 'Name cannot be just spaces' }),

  amount: z
    .number({ required_error: 'Amount is required', invalid_type_error: 'Amount must be a number' })
    .min(1, { message: 'Amount must be at least 1' })
});

export const expenseSchema = z.object({
  name: z.string(),
  amount: z.string(),
  budgetId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const budgetAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.string(),
  userId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  expenses: z.array(expenseSchema).optional()
})


export type BudgetAPIResponse = z.infer<typeof budgetAPIResponseSchema>;
export type ExpenseAPIResponse = z.infer<typeof expenseSchema>;



