import { z } from "zod";

import { MOTIVOS } from "@/lib/data";

const trampa = z.string().max(0).optional();

export const esquemaCancion = z.object({
  cancion: z.string().trim().min(2, "Escribe el nombre de la canción").max(120),
  artista: z.string().trim().max(120).optional(),
  nombre: z.string().trim().min(2, "Dinos cómo te llamas").max(80),
  ciudad: z.string().trim().max(80).optional(),
  dedicatoria: z.string().trim().max(500).optional(),
  sitioWeb: trampa,
});

export const esquemaOracion = z.object({
  nombre: z.string().trim().max(80).optional(),
  motivo: z.enum(MOTIVOS),
  peticion: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más para poder orar contigo")
    .max(1000),
  privado: z.boolean().default(false),
  sitioWeb: trampa,
});

export type DatosCancion = z.input<typeof esquemaCancion>;
export type DatosOracion = z.input<typeof esquemaOracion>;
