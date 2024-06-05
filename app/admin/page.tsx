import Link from "next/link";

import ScrollUp from "@/components/common/scroll-up";
import { PieChart } from "@/components/dashboard/pie-chart";
import { getDashboardJobs } from "@/data/dashboard";
import { JobField } from "@prisma/client";
import { HalfDonut } from "@/components/dashboard/half-donut";

interface jobsAndApplicationsDataProps {
  field: JobField,
  jobs: number,
  applications: number,

}

export default async function AdminPage() {
  // const jobsAndApplicationsData = await getDashboardJobs() as jobsAndApplicationsDataProps[]

  const jobsAndApplicationsData = [
    { field: 'SALES', jobs: 2, applications: 2 },
    { field: 'MEDIA', jobs: 1, applications: 1 },
    { field: 'ENGINEERING', jobs: 1, applications: 0 },
    { field: 'FINANCE', jobs: 1, applications: 1 },
    { field: 'MANAGEMENT', jobs: 1, applications: 0 },
    { field: 'ENGINEERING', jobs: 2, applications: 3 },
    { field: 'ENGINEERING', jobs: 2, applications: 2 },
    { field: 'ENGINEERING', jobs: 2, applications: 3 },
    { field: 'ENGINEERING', jobs: 2, applications: 3 },
    { field: 'ENGINEERING', jobs: 2, applications: 3 },
    { field: 'ENGINEERING', jobs: 2, applications: 2 },
    { field: 'ENGINEERING', jobs: 2, applications: 2 },
    { field: 'ENGINEERING', jobs: 2, applications: 2 },
    { field: 'ENGINEERING', jobs: 2, applications: 2 },
    
  ]
  
  const jobsData: [string, number][]  = jobsAndApplicationsData.map(item => (
    [ item.field, item.jobs ]
));

  const applicationsData: {name: string, y: number}[] = jobsAndApplicationsData.map(item => ({
    name: item.field,
    y: item.applications,
  }));

  console.log(jobsData)

  
  return (
    <>
      <div className="bg-white p-10 rounded-xl ">
        <ScrollUp />
        <div className="flex justify-between pb-6 border-b mb-6 border-slate-300">
          <p className="text-2xl font-semibold">Employee</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center bg-pink-300">
          <figure className="">
          <HalfDonut data={jobsData} />
          </figure>
          <figure className=" h-[400px] w-[700px] flex col-span-2 bg-green-300">
          </figure>
          <figure className="">
            <PieChart data={applicationsData} />
          </figure>
          <figure className="">
            
          </figure>
        </div>
      </div>
    </>
  );
}
