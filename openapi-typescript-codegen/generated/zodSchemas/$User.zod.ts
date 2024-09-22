import { z } from "zod"

export const $User = z.any()
export type $User = z.infer<typeof $User>
