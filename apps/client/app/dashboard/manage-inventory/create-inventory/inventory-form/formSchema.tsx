import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().trim().max(50).optional(),
  quantity: z.coerce.number(),
});
