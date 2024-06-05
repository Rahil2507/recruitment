"use server"

import * as z from "zod";
import { AuthError } from "next-auth"

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";
import { StatusType } from "@prisma/client";

export const login = async (
    values: z.infer<typeof LoginSchema>,
    callbackUrl: string | null,
  ) => {
  const validatedFields = LoginSchema.safeParse(values)
  if(!validatedFields.success) {
    return { error: "Invalid fields !" }
  }

  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" }
  }

  if (existingUser.status === StatusType.DELETED)
    return { error: "Account Banned" }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,    // Callback
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials !" }
        default:
          return { error: "Something went wrong" }
        }
      }
      throw error
  }
}