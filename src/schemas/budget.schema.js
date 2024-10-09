import { z } from 'zod';

export const budgetItems = z.object({
  name: z.string({
    required_error: 'El nombre es requerido',
  }),
  price: z.number({
    required_error: 'El precio es requerido',
  }),
  quantity: z.number({
    required_error: 'La cantidad es requerida',
  }),
  observation: z.string().optional(),
});

export const budgetSchema = z.object({
  treatments: z.array(budgetItems).nonempty({
    message: "Can't be empty!",
  }),
});
