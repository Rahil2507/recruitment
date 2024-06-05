"use server"

import * as z from "zod";
import { AuthError } from "next-auth"

import { JobSchema } from "@/schemas";
import { createJob, updateJob } from "@/data/job";
import { serverCurrentUser } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const addJob = async (
    values: z.infer<typeof JobSchema>,
  ) => {
  const validatedFields = JobSchema.safeParse(values)
  if(!validatedFields.success) {
    return { error: "Invalid fields !" }
  }

  const data = validatedFields.data

  const user = await serverCurrentUser()
  if (!user?.id) {
    return { error: "User not logged in !" }
  }

  try {
    await createJob({...data}, user.id)
    return { success: "Job added." };
    
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

export const editJob = async (
    values: z.infer<typeof JobSchema>,
    employerId: string,
    jobId: string
  ) => {
  const validatedFields = JobSchema.safeParse(values)
  if(!validatedFields.success) {
    return { error: "Invalid fields !" }
  }

  const data = validatedFields.data

  const user = await serverCurrentUser()
  if (user?.role != UserRole.OWNER && user?.id !== employerId) return {error: "Not Allowed"}

  try {
    await updateJob({...data}, jobId)
    return { success: "Job added." };
    
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