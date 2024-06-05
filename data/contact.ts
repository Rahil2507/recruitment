"use server"

import { db } from "@/lib/db";
import * as z from "zod";

import { ContactSchema } from "@/schemas";
import { serverCurrentRole } from "@/lib/auth";
import { StatusType, UserRole } from "@prisma/client";

export const addContact = async (data: z.infer<typeof ContactSchema>) => {
  try {
    await db.contact.create({
      data: {
        ...data,
      },
    });
    
  } catch (error){
    console.log(error)
  }
}

export const getContacts = async (StatusType: StatusType) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return {error: "403 Forbidden"}

    const contacts = await db.contact.findMany({
      where: {
        status: StatusType
      }
    });
    return contacts
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const getContactById = async (id: string) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return {error: "403 Forbidden"}

    const contact = await db.contact.findUnique({
      where: { id }
    });
    return contact
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const deleteContact = async (id: string) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return {error: "403 Forbidden"}

    await db.contact.update({
      where: { id },
      data: {
        status: StatusType.DELETED
      }
    });
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const recoverContact = async (id: string) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return {error: "403 Forbidden"}

    await db.contact.update({
      where: { id },
      data: {
        status: StatusType.ACTIVE
      }
    });
    
  } catch (error){
    console.log(error)
    return error
  }
};

