"use server"

import { db } from "@/lib/db";

export const createUser = async (name: string, email: string, password: string) => {
  try {
    await db.user.create({
      data: {
        name,
        email,
        password
      },
    });

  } catch (error){
    console.log(error)
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user
  } catch (error){
    console.log(error)
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user
  } catch (error){
    console.log(error)
  }
};

