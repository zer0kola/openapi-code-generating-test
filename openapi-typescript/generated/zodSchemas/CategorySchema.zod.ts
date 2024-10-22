import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type CategorySchema = z.infer<typeof CategorySchema>;
