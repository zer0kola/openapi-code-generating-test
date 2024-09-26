import { z } from "zod";

export const $Tag = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type $Tag = z.infer<typeof $Tag>;
