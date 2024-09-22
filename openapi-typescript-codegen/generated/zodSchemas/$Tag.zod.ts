import { z } from "zod"

export const $Tag = z.any()
export type $Tag = z.infer<typeof $Tag>
