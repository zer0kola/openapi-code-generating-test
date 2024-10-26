import { z } from "zod";
import { AddressSchema } from "./AddressSchema.zod";

export const CustomerSchema = z.object({
  id: z.number().int().optional(),
  username: z.string().optional(),
  address: z.array(AddressSchema).optional(),
});
export type CustomerSchema = z.infer<typeof CustomerSchema>;
