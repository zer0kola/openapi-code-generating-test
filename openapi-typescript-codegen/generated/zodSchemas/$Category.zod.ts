import { z } from "zod";

export const $Category = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type $Category = z.infer<typeof $Category>;
