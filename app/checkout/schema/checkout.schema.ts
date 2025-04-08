import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z
    .string()
    .min(1, { message: "El email es obligatorio" })
    .email({ message: "Email inválido" }),
  address: z.string().min(1, { message: "La dirección es obligatoria" }),
  city: z.string().min(1, { message: "La ciudad es obligatoria" }),
  postalCode: z.string().min(1, { message: "El código postal es obligatorio" }),
  phone: z.string().min(1, { message: "El teléfono es obligatorio" }),
});
