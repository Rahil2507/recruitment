// "use server"

// import { serverCurrentRole } from "@/lib/auth"
// import { UserRole } from "@prisma/client"

// export const admin = async () => {    // Extra
//   const role = await serverCurrentRole()

//   if (role === UserRole.OWNER) {
//     return { success: "Allowed" }
//   }

//   return { error: "Forbidden" }
// }