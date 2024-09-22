import { z } from "zod"

export const $Order = z.any()
export type $Order = z.infer<typeof $Order>
