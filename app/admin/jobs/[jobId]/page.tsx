import * as z from "zod";
import Link from "next/link";

import { deleteJob, getAdminJob, recoverJob } from "@/data/job"
import { ApplicationSchema, JobSchema, UserSchema } from "@/schemas";
import { applicationColumns } from "@/components/tables/application-columns";
import { Button } from "@/components/ui/button";
import { serverCurrentUser } from "@/lib/auth";
import ScrollUp from "@/components/common/scroll-up";
import { StatusType } from "@prisma/client";
import { AdminTable } from "@/components/tables/admin-table";
import { redirect } from "next/navigation";
import DeleteButton from "@/components/common/delete-button";
import RecoverButton from "@/components/common/recover-button";

interface JobPageProps {
  params: {
    jobId: string
  }
}

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  applications: RetrievedApplication[]
  employer: z.infer<typeof UserSchema>
  status: StatusType
}

interface RetrievedApplication extends z.infer<typeof ApplicationSchema> {
  id: string;
  status: StatusType
  createdAt: Date;
  jobId: string
}

export default async function AdminJobPage({params}: JobPageProps) {
  const jobData = await getAdminJob(params.jobId)
  const job: RetrievedJob = jobData as RetrievedJob;
  const applications = job.applications

  const user = await serverCurrentUser()

  const handleDelete = async () => {
    "use server"
    await deleteJob(job.id, job.employer.id)
    redirect(`/admin/jobs/`)
  }
  const handleRecover = async () => {
    "use server"
    await recoverJob(job.id, job.employer.id)
    redirect(`/admin/jobs/`)
  }

  return (
    <> 
      <div className="bg-white w-full rounded-xl p-10 mb-6">
        <ScrollUp />
        <div className="flex justify-between pb-5 border-b border-slate-300 mb-8">
          <p className="text-2xl font-semibold">Job Details</p>
          <div className="flex">

            {job.status === StatusType.ACTIVE 
              ? (<>
                  <DeleteButton type="Job" action={handleDelete}/>
                  <Link href={`/admin/jobs/${params.jobId}/edit`} className="ml-6">
                    <Button className="w-36">Modify</Button>
                  </Link>
                </>)
              : <RecoverButton type="Job" action={handleRecover}/>
            }
          </div>
        </div>

        <div className="flex mb-4 font-semibold">
          <p className="mr-2">Uploaded By:</p>
          { user.id === job.employer.id
            ? <Link href={`/admin/employees/${job.employer.id}`} className="text-sky-500 hover:text-amber-400">You</Link>
            : <Link href={`/admin/employees/${job.employer.id}`} className="text-sky-500 hover:text-amber-400">{job.employer.name}</Link>
          }
        </div>

        <div className="">
          <h1 className="text-3xl font-semibold mb-4">{job.title}</h1>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Experience Required: </p>{job.experience}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Designation: </p>{job.designation}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Qualifications Required:</p>{ job.qualifications}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Skills Required:</p>{ job.skills}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Location: </p>{job.location}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Description: </p>{job.description}</div>
        </div>
      </div>

      <div className="bg-white w-full rounded-xl p-10">
        <div className=" pb-6 border-b border-slate-300">
          <p className="text-2xl font-semibold">Applications Recieved</p>
        </div>
        <AdminTable data={applications} columns={applicationColumns} link={`jobs/${params.jobId}`}/>
      </div>
    </>
  )
}