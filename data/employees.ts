"use server"
import { db } from "@/lib/db";
import { serverCurrentRole, serverCurrentUser } from "@/lib/auth";
import { StatusType, UserRole } from "@prisma/client";

export const getAdminUsers = async (Status: StatusType) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return [{error: "403 Forbidden"}]
    
    const user = await db.user.findMany({ 
      where: { 
        role : UserRole.EMPLOYER,
        status: Status
      },
      include: {
        jobs: {
          where: {
            status: StatusType.ACTIVE
          },
          select: {
            id: true
          }
        },
      }
    });

    return user
  } catch (error){
    console.log(error)
  }
};

export const getAdminUser = async (id: string) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return [{error: "403 Forbidden"}]
    
    const user = await db.user.findUnique({ 
      where: { id }
     });
    return user
  } catch (error){
    console.log(error)
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await serverCurrentUser()
    if (user.role === UserRole.OWNER) {
    
      await db.user.update({ 
        where: { id },
        data: {
         status: StatusType.DELETED
        }
       });

       await db.job.updateMany({ 
        where: { 
          employerId: id
         },
         data: {
          employerId: user.id
         }
      });

       await db.application.updateMany({ 
        where: { 
          employerId: id
         },
         data: {
          employerId: user.id
         }
      });

    } else {
      const owner = await db.user.findFirst({
        where: {
          role: UserRole.OWNER
        }
      })

      if (!owner) return {error: "404 Not Found"}

      await db.user.update({ 
        where: { id },
        data: {
         status: StatusType.DELETED
        }
       });

       await db.job.updateMany({ 
        where: { 
          employerId: id
         },
         data: {
          employerId: owner.id
         }
      });

       await db.application.updateMany({ 
        where: { 
          employerId: id
         },
         data: {
          employerId: owner.id
         }
      });

    }


  } catch (error){
    console.log(error)
  }
};

export const recoverUser = async (id: string) => {
  try {
    const role = await serverCurrentRole()
    if (role != UserRole.OWNER)  return [{error: "403 Forbidden"}]
    
    await db.user.update({ 
      where: { id },
      data: {
       status: StatusType.ACTIVE
      }
     });
  } catch (error){
    console.log(error)
  }
};