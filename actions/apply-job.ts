"use server"

import * as z from "zod";
import { AuthError } from "next-auth"

import { ApplicationSchema } from "@/schemas";
import { addApplication } from "@/data/application";

export const applyJob = async (
    values: z.infer<typeof ApplicationSchema>,
    jobId: string,
    employerId: string
  ) => {
  const validatedFields = ApplicationSchema.safeParse(values)
  if(!validatedFields.success) {
    return { error: "Invalid fields !" }
  }

  const data = validatedFields.data

  try {
    await addApplication({...data}, jobId, employerId)
    return { success: "Job Applied" };
    
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Something went wrong" }
    }
    throw error
  }
}