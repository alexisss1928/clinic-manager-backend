import { z } from 'zod';

export const createPatientSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  lastname: z.string().min(1, { message: 'El apellido es requerido' }),
  identification: z
    .string()
    .min(1, { message: 'La identificación es requerida' }),
  picture: z.string().optional(),
  reasonConsultation: z.string().optional(),
  personalHistory: z.string().optional(),
  familyHistory: z.string().optional(),
});
