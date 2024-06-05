import * as z from "zod";

import { employeesColumns } from "@/components/tables/employees-columns"
import { AdminTable } from "@/components/tables/admin-table"
import { getAdminUsers } from "@/data/employees"
import { UserSchema } from "@/schemas";
import ScrollUp from "@/components/common/scroll-up";
import { StatusType } from "@prisma/client";

interface RetrievedUser extends z.infer<typeof UserSchema> {
  jobs: { id: string; }[]}

export default async function AdminEmployersPage() {
  const employees = await getAdminUsers(StatusType.ACTIVE) as RetrievedUser[];

  return (
    <div className="bg-white p-10 rounded-xl">
      <ScrollUp/>
      <div className=" pb-6 border-b border-slate-300">
        <p className="text-2xl font-semibold">Employees List</p>
      </div>
      <AdminTable data={employees} columns={employeesColumns} link="employees"/>
    </div>
  )
}