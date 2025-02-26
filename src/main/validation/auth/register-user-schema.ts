import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  age: z.number().min(18, 'The user should have at least 18 years old').max(150, 'Insert an valid age'),
  plan_id: z.number()
})