import { z } from "zod"

export const $Category = z.any()
export type $Category = z.infer<typeof $Category>
