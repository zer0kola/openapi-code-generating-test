import { z } from "zod";

export const TagSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type TagSchema = z.infer<typeof TagSchema>;
