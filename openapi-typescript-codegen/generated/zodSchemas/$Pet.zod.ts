import { z } from "zod";

export const $Pet = z.object({
  id: z.number().int().optional(),
  category: z.any().optional(),
  name: z.string().optional(),
  photoUrls: z.array(z.any()).optional(),
  tags: z.array(z.any()).optional(),
  status: z.any().optional(),
});
export type $Pet = z.infer<typeof $Pet>;
