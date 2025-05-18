import type { UsernamePasswordSchema } from "@/validators/basic-auth-form";
import type { z } from "zod";

export type UsernamePasswordType = z.infer<typeof UsernamePasswordSchema>