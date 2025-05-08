import { z } from 'zod';

export const sessionSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
});
