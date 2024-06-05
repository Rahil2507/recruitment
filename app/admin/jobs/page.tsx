import * as z from "zod";

import { UserSchema, JobSchema } from "@/schemas";
import { jobColumns } from "@/components/tables/job-columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAdminJobs } from "@/data/job";
import ScrollUp from "@/components/common/scroll-up";
import { StatusType } from "@prisma/client";
import { AdminTable } from "@/components/tables/admin-table";

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employer: z.infer<typeof UserSchema>
}

export default async function AdminJobsPage() {
  const jobsData = await getAdminJobs(StatusType.ACTIVE);
  const jobs: RetrievedJob[] = jobsData as RetrievedJob[];
  
  return (
    <div className="bg-white p-10 rounded-xl ">
      <ScrollUp/>
      <div className="flex justify-between pb-5 border-b border-slate-300">
        <p className="text-2xl font-semibold">Jobs Posted</p>
        <Link href={`/admin/add-job`}>
          <Button>Create Job</Button>
        </Link>
      </div>
      <AdminTable data={jobs} columns={jobColumns} link="jobs" />
    </div>
  )
}