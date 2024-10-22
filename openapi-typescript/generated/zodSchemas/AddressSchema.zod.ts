import { z } from "zod";

export const AddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});
export type AddressSchema = z.infer<typeof AddressSchema>;
