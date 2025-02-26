import { z } from "zod";

export const deleteUserSchema = z.object({
  user_id: z.number()
})