import { z } from "zod"

export const $ApiResponse = z.any()
export type $ApiResponse = z.infer<typeof $ApiResponse>
