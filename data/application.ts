"use server"

import { db } from "@/lib/db";
import * as z from "zod";

import { ApplicationSchema } from "@/schemas";
import { serverCurrentUser } from "@/lib/auth";
import { StatusType, UserRole } from "@prisma/client";

export const addApplication = async (data: z.infer<typeof ApplicationSchema>, jobId: string, employerId: string) => {
  try {
    await db.application.create({
      data: {
        ...data,
        jobId,
        employerId
      },
    });
    
  } catch (error){
    console.log(error)
  }
}

export const getAdminApplications = async () => {
  try {
    const user = await serverCurrentUser()
    if (user.role === UserRole.OWNER) {
      const applications = await db.application.findMany({
        where: {
          status: StatusType.DELETED
        },
      });
      return applications
    } else {
      const applications = await db.application.findMany({
        where: {
          id: user.id,
          status: StatusType.DELETED
        },
      });
      return applications
    }
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const getApplication = async (id: string) => {
  try {
    const application = await db.application.findUnique({ 
      where: { id },
      include: {
        job: true
      }
     });
    return application

  } catch (error){
    console.log(error)
  }
};


export const deleteApplication = async (applicationId: string, employerId: string) => {
  try {
    const user = await serverCurrentUser()
    if (user?.role != UserRole.OWNER && user?.id !== employerId) return {error: "403 Forbidden"}

    await db.application.update({ 
      where: { 
        id: applicationId
       },
       data: {
        status: StatusType.DELETED
       }
     });

  } catch (error){
    console.log(error)
  }
};

export const recoverApplication = async (applicationId: string) => {
  try {
    await db.application.update({ 
      where: { 
        id: applicationId
       },
       data: {
        status: StatusType.ACTIVE
       }
     });

  } catch (error){
    console.log(error)
  }
};

