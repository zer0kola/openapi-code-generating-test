import { z } from "zod"

export const $Pet = z.any()
export type $Pet = z.infer<typeof $Pet>
