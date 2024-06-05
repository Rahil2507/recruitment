"use server";

import { db } from "@/lib/db";
import * as z from "zod";

export const getDashboardJobs = async () => {
  try {
    const result: any = await db.$queryRaw`
        SELECT 
          "Job"."field" AS field,
          COUNT("Job"."id") AS jobs,
          COUNT("Application"."id") AS applications
        FROM "Job"
        LEFT JOIN "Application" ON "Job"."id" = "Application"."jobId"
        GROUP BY "Job"."field";
      `;

    const formattedResult = result.map((item: any) => ({
      field: item.field,
      jobs: Number(item.jobs),
      applications: Number(item.applications),
    }));

    return formattedResult;
  } catch (error) {
    console.log(error);
  }
};
