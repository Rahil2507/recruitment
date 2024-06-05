"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { createUser, getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { sendTwoFactorTokenEmail } from "@/lib/mail";
import { signIn } from "@/auth";

let otpCode = "123456";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const ownerEmail = process.env.OWNER_EMAIL || "";

  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields !" };
  }

  const { name, email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists !" };
  }

  if (code) {
    if (otpCode !== code) {
      return { error: "Invalid code !" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser(name, email, hashedPassword);
  } else {
    // const twoFactorToken = crypto.randomInt(100_000, 1_000_000).toString();

    // otpCode = twoFactorToken

    // await sendTwoFactorTokenEmail(
    //   ownerEmail,
    //   twoFactorToken
    // )

    return { twoFactor: true };
  }

  
  await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })

  return { success: "Successfully Registered." };
};
