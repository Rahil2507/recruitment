"use client"

import { signOut } from "next-auth/react"
 
export const logout = async () => {
   signOut()
}

// "use server"

// import { signOut } from "@/auth"

// export const logout = async () => {
//   await signOut()
// }