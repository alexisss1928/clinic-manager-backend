import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: 'El usuario es requerido',
  }),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'El email no tiene un formato valido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(4, {
      message: 'La contraseña debe tener al menos 6 caracteres',
    }),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(4),
});
