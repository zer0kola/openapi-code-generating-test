import { z } from "zod";

export const $Order = z.object({
  id: z.number().int().optional(),
  petId: z.number().int().optional(),
  quantity: z.number().optional(),
  shipDate: z.string().datetime({ offset: true }).optional(),
  status: z.any().optional(),
  complete: z.boolean().optional(),
});
export type $Order = z.infer<typeof $Order>;
