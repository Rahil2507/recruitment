"use server"

import { db } from "@/lib/db";
import * as z from "zod";

import { JobSchema } from "@/schemas";
import { serverCurrentRole, serverCurrentUser } from "@/lib/auth";
import { StatusType, UserRole } from "@prisma/client";

export const createJob = async (data: z.infer<typeof JobSchema>, employerId: string) => {
  try {
    await db.job.create({
      data: {
        ...data,
        employerId
      },
    });
    
  } catch (error){
    console.log(error)
  }
}

export const getPublicJobs = async () => {
  try {
    const jobs = await db.job.findMany({
      where: {
        status: StatusType.ACTIVE
      }
    });
    return jobs
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const getAdminJobs = async (Status: StatusType) => {
  try {
  const user = await serverCurrentUser()

  if (user?.role === UserRole.OWNER) {
    const jobs = await db.job.findMany({
      where: {
        status: Status
      },
      include: {
        employer: true, 
        applications: {
          where: {
            status: StatusType.ACTIVE
          },
          select: { 
            id: true
           }
        },
      },
      orderBy: { 
        createdAt: "asc"
      },
    });
    return jobs

  } else {
    const jobs = await db.job.findMany({
      where: {
        employerId: user?.id,
        status: Status
      },
      include: {
        employer: true, 
        applications: {
          where: {
            status: StatusType.ACTIVE
          },
          select: { 
            id: true
           }
        },
      },
      orderBy: {
        createdAt: "asc"
      },
    });
    return jobs
  }    
    
  } catch (error){
    console.log(error)
    return error
  }
};

export const getAdminEmployeeJobs = async (id: string, Status: StatusType) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return {error: "403 Forbidden"}

    const jobs = await db.job.findMany({
      where: {
        employerId: id,
        status: Status
      },
      include: {
        employer: true, 
        applications: {
          where: {
            status: StatusType.ACTIVE
          },
          select: { 
            id: true
          }
        },
      },
      orderBy: {
        createdAt: "asc"
      },
    });
    return jobs
    
  } catch (error){
    console.log(error)
    return error
  }
};


export const getPublicJob = async (id: string) => {
  try {
    const user = await db.job.findUnique({ 
      where: { 
        id,
        status: StatusType.ACTIVE
       },
     });
    return user
  } catch (error){
    console.log(error)
  }
};

export const getAdminJob = async (id: string) => {
  try {
    const user = await serverCurrentUser()
    
    const job = await db.job.findUnique({ 
      where: { id },
      include: {
        employer: true, 
        applications: {
          where: {
            NOT: {
              status: StatusType.DELETED,
            }
          },
        },
      },
     });

    if (user?.role != UserRole.OWNER && user?.id !== job?.employerId) return {error: "403 Forbidden"}
    
    return job

  } catch (error){
    console.log(error)
  }
};


export const updateJob = async (data: z.infer<typeof JobSchema>, id: string) => {
  try {
    await db.job.update({ 
      where: { 
        id: id
       },
      data
     });

  } catch (error){
    console.log(error)
  }
};


export const deleteJob = async (jobId: string, employerId: string) => {
  try {
    const user = await serverCurrentUser()
    if (user?.role != UserRole.OWNER && user?.id !== employerId) return {error: "403 Forbidden"}

    await db.job.update({ 
      where: { 
        id: jobId
       },
       data: {
        status: StatusType.DELETED
       }
    });

    await db.application.updateMany({ 
      where: { 
        jobId
      },
      data: {
        status: StatusType.DELETED
      }
    });

  } catch (error){
    console.log(error)
  }
};

export const recoverJob = async (jobId: string, employerId: string) => {
  try {
    const user = await serverCurrentUser()
    if (user?.role != UserRole.OWNER && user?.id !== employerId) return {error: "403 Forbidden"}

    await db.job.update({ 
      where: { 
        id: jobId
       },
       data: {
        status: StatusType.ACTIVE
       }
    });

    await db.application.updateMany({ 
      where: { 
        jobId
      },
      data: {
        status: StatusType.ACTIVE
      }
    });

  } catch (error){
    console.log(error)
  }
};

