import { z } from "zod";

export const PetSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  category: z.any().optional(),
  photoUrls: z.array(z.string()),
  tags: z.array(z.any()).optional(),
  status: z
    .enum(["available", "pending", "sold"])
    .describe("pet status in the store")
    .optional(),
});
export type PetSchema = z.infer<typeof PetSchema>;
