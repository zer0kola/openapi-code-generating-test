import { z } from "zod";

export const PetSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  category: z.any().optional(),
  photoUrls: z.array(z.any()).optional(),
  tags: z.array(z.any()).optional(),
  status: z.string().optional(),
});
export type PetSchema = z.infer<typeof PetSchema>;
