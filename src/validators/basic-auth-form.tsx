import { z } from "zod";

export const UsernamePasswordSchema = z.object({
    username: z.string().min(2),
    password: z.string().min(8)
})