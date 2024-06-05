import * as z from "zod";
import Link from "next/link";

import { getAdminJob } from "@/data/job"
import { JobSchema, UserSchema } from "@/schemas";
import { serverCurrentUser } from "@/lib/auth";
import ScrollUp from "@/components/common/scroll-up";
import { EditJobForm } from "@/components/forms/edit-job-form";

interface JobPageProps {
  params: {
    jobId: string
  }
}

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employer: z.infer<typeof UserSchema>
}

export default async function AdminJobPage({params}: JobPageProps) {
  const jobData = await getAdminJob(params.jobId)
  const job: RetrievedJob = jobData as RetrievedJob;

  const user = await serverCurrentUser()

  

  return (
    <> 
      <div className="bg-white w-full rounded-xl p-10">
        <ScrollUp />
        <div className="flex justify-between pb-5 border-b border-slate-300 mb-4">
          <p className="text-2xl font-semibold">Job Details</p>
        </div>

        <div className="flex mb-4 font-semibold">
          <p className="mr-2">Uploaded By:</p>
          { user.id === job.employer.id
            ? <Link href={`/admin/employees/${job.employer.id}`} className="text-sky-500 hover:text-amber-400">You</Link>
            : <Link href={`/admin/employees/${job.employer.id}`} className="text-sky-500 hover:text-amber-400">{job.employer.name}</Link>
          }
        </div>

        <div className="border border-gray-200 rounded-md p-4 my-10">
          <EditJobForm jobData={job}/>
        </div>
      </div>
    </>
  )
}