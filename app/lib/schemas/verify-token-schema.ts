import { z } from "zod";

export const tokenSchema = z.string()
.nonempty({ message: 'Code is required' })
.min(6, { message: 'Code must be 6 characters' })