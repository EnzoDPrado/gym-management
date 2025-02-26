import { z } from "zod";

export const loginUserSchema = z.object({
  mail: z.string().email(),
  password: z.string(),
})