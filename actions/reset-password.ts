"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendTwoFactorTokenEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {   // Verify
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid email !" }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: "Email not found !" }
  }
  
  return { error: "Function incomplete" }

  return { success: "Reset email sent." }
}