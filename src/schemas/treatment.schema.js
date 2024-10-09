import { z } from 'zod';

export const treatmentSchema = z.object({
  name: z.string({
    required_error: 'El nombre es requerido',
  }),
  price: z.string({
    required_error: 'El precio es requerido',
  }),
});
