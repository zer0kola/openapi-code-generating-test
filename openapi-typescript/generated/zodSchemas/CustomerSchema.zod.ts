import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.number().int().optional(),
  username: z.string().optional(),
  address: z.array(z.any()).optional(),
});
export type CustomerSchema = z.infer<typeof CustomerSchema>;
