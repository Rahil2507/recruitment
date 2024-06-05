import * as z from "zod";

import { getPublicJob } from "@/data/job"
import { JobSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollUp from "@/components/common/scroll-up";

interface JobPageProps {
  params: {
    jobId: string
  }
}

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employerId: String
}

export default async function JobPage({params}: JobPageProps) {
  const jobData = await getPublicJob(params.jobId)
  const job: RetrievedJob = jobData as RetrievedJob;

  return (
    <div className="bg-gray-100 p-8 pt-24">
      <ScrollUp/>
      <div className="flex justify-end">
        <Link href={`${params.jobId}/${job.employerId}`}>
          <Button className="w-36">Apply</Button>
        </Link>
      </div>
      <div className=" bg-white shadow-lg my-4 rounded-xl overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <p className="text-gray-600 mb-2">Experience Required: {job.experience}</p>
          <p className="text-gray-600 mb-2">Designation: {job.designation}</p>
          <p className="text-gray-600 mb-2">Qualifications Required: {job.qualifications}</p>
          <p className="text-gray-600 mb-2">Skills Required: {job.skills}</p>
          <p className="text-gray-600 mb-2">Location: {job.location}</p>
          <p className="text-gray-600 mb-2">Description: {job.description}</p>
          <p className="text-gray-600 mb-2">Description: {job.employerId}</p>
        </div>
      </div>
    </div>
  )
}