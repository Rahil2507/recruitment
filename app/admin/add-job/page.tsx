import ScrollUp from "@/components/common/scroll-up";
import { AddJobForm } from "@/components/forms/add-job-form";

export default async function AdminAddJobPage() {
  return (
    <div className=" bg-white p-10 rounded-xl">
      <ScrollUp />
      <div className=" pb-6 border-b border-slate-300">
        <p className="text-2xl font-semibold">Add a Job</p>
      </div>
      <div className="border border-gray-200 rounded-md p-4 my-10">
        <AddJobForm /> 
      </div>
    </div>
  )
}