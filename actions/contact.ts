"use server"

import * as z from "zod";

import { ContactSchema } from "@/schemas";
import { addContact } from "@/data/contact";

export const contact = async (
    values: z.infer<typeof ContactSchema>,
  ) => {
  const validatedFields = ContactSchema.safeParse(values)
  if(!validatedFields.success) {
    return { error: "Invalid fields !" }
  }

  let data = validatedFields.data

  if (!data.phone) {
    data = {...data, phone: "NA"}
  }

  try {
    await addContact({...data})
    return { success: "Message Sent" };
    
  } catch (error) {
      return { error: "Something went wrong" }
  }
}