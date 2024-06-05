import { ApplyJobForm } from "@/components/forms/apply-job-form";
import ScrollUp from "@/components/common/scroll-up";

interface JobPageProps {
  params: {
    jobId: string
    employerId: string
  }
}

export default async function JobApplyPage({params}: JobPageProps) {
  return (
    <div className="w-[50vw] mx-auto my-10">
      <ScrollUp/>
      <ApplyJobForm jobId={params.jobId} employerId={params.employerId} />
    </div>
  )
}