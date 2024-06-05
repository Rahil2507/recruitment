import * as z from "zod";

import { deleteApplication, getApplication, recoverApplication } from "@/data/application"
import { ApplicationSchema, JobSchema, UserSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import ScrollUp from "@/components/common/scroll-up";
import DeleteButton from "@/components/common/delete-button";
import RecoverButton from "@/components/common/recover-button";
import { StatusType } from "@prisma/client";

interface ApplicationPageProps {
  params: {
    applicationId: string
    jobId: string
  }
}

interface RetrievedApplication extends z.infer<typeof ApplicationSchema> {
  id: string;
  createdAt: Date;
  employerId: string
  status: StatusType
}

export default async function AdminApplicationPage({params}: ApplicationPageProps) {
  const applicationData = await getApplication(params.applicationId)
  const application: RetrievedApplication = applicationData as RetrievedApplication

  const handleDelete = async () => {
    "use server"
    await deleteApplication(params.applicationId, application.employerId)
    redirect(`/admin/jobs/${params.jobId}`)
  }

  const handleRecover = async () => {
    "use server"
    await recoverApplication(params.applicationId)
    redirect(`/admin/jobs`)
  }

  return (
    <div className="bg-white w-full rounded-xl p-10">
      <ScrollUp />
        <div className="flex justify-between pb-5 border-b border-slate-300 mb-4">
          <p className="text-2xl font-semibold">Job Application</p>
          <div className="flex">

          {application.status === StatusType.ACTIVE 
            ? (<>
                <DeleteButton type="Application" action={handleDelete} />
                <Link href={`/admin/jobs/${params.jobId}`} className="ml-6">
                  <Button className="w-36">Back to Job</Button>
                </Link>
              </>)
            : <RecoverButton type="Application" action={handleRecover}/>
            }
          </div>
        </div>
        <div className="py-4">
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Name: </p>{application.name}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Email: </p>{application.email}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Phone No.: </p>{application.phone}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Resume: </p>{application.resume}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">LinkedIn: </p>{application.linkedin}</div>
        </div>
      </div>
  )
}