"use server"

import { signOut } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { clientCurrentUser } from "@/hooks/auth";
import { serverCurrentUser } from "@/lib/auth";
import { StatusType } from "@prisma/client";

export const validateAccount = async () => {
  const user = clientCurrentUser()
  const email = user.email as string

  const existingUser = await getUserByEmail(email)

  if (existingUser?.status === StatusType.DELETED) await signOut()
}