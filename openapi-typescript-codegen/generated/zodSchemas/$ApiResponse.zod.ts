import { z } from "zod";

export const $ApiResponse = z.object({
  code: z.number().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});
export type $ApiResponse = z.infer<typeof $ApiResponse>;
