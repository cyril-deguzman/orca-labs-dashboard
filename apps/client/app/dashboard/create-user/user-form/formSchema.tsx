import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().trim().max(50).optional(),
  email: z.string().email().endsWith('@orca.labs'),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Minimum of 6 characters' })
    .max(16, { message: 'Maximum of 16 characters only' }),
});
