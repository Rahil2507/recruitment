import * as z from "zod";

import { UserSchema, JobSchema } from "@/schemas";
import { jobColumns } from "@/components/tables/job-columns";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAdminEmployeeJobs } from "@/data/job";
import { deleteUser, getAdminUser, recoverUser } from "@/data/employees";
import ScrollUp from "@/components/common/scroll-up";
import { StatusType, UserRole } from "@prisma/client";
import { redirect } from "next/navigation";
import { AdminTable } from "@/components/tables/admin-table";
import DeleteButton from "@/components/common/delete-button";
import RecoverButton from "@/components/common/recover-button";

interface EmployeePageProps {
  params: {
    employeeId: string
  }
}

interface RetrievedEmployee extends z.infer<typeof UserSchema> {
  status: StatusType
}

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employee: z.infer<typeof UserSchema>
}

export default async function AdminEmployerPage({params}: EmployeePageProps) {
  const employee = await getAdminUser(params.employeeId) as RetrievedEmployee
  const jobsData = await getAdminEmployeeJobs(params.employeeId, StatusType.ACTIVE);
  const jobs: RetrievedJob[] = jobsData as RetrievedJob[];

  const handleDelete = async () => {
    "use server"
    await deleteUser(params.employeeId)
    redirect(`/admin/employees`)
  }

  const handleRecover = async () => {
    "use server"
    await recoverUser(params.employeeId)
    redirect(`/admin/employees`)
  }

  return (
    <>
    <div className="bg-white p-10 rounded-xl ">
    <ScrollUp/>
      <div className="flex justify-between pb-5 border-b border-slate-300">
        <p className="text-2xl font-semibold">Employee</p>
        <div className="flex">

        {employee.status === StatusType.ACTIVE 
          ? (<>
              <DeleteButton type="Employee" action={handleDelete} />
              <Link href={`/admin/employees/${params.employeeId}/settings`} className="ml-6">
                <Button className="w-36">Modify</Button>
              </Link>
            </>)
          : <RecoverButton type="Employee" action={handleRecover}/>
            }

        </div>
      </div>
      <div className="py-4">
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Name: </p>{employee?.name}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Email: </p>{employee?.email}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4 w-12">Role: </p>
            {employee?.role === UserRole.OWNER ? "Owner" : "Employee"}
          </div>
      </div>
    </div>

    <div className="bg-white mt-6 p-10 rounded-xl ">
      <div className="pb-6 border-b border-slate-300">
        <p className="text-2xl font-semibold">Jobs Posted</p>
      </div>
      <AdminTable data={jobs} columns={jobColumns} link="jobs"/>
    </div>
    
    </>
  )
}