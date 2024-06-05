"use server"

import { db } from "@/lib/db";

export  const jobNumbers = async () => {
  const nos= await db.job.count({
    where: {
      status: "DELETED"
    }
  })
  console.log(nos)
}