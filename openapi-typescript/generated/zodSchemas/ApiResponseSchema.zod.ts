import { z } from "zod";

export const ApiResponseSchema = z.object({
  code: z.number().int().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});
export type ApiResponseSchema = z.infer<typeof ApiResponseSchema>;
