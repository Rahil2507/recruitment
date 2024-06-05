import * as z from "zod";
import { StatusType, UserRole } from "@prisma/client";

import ScrollUp from "@/components/common/scroll-up"
import { ApplicationSchema, ContactSchema, JobSchema, UserSchema } from "@/schemas";
import { getAdminUsers } from "@/data/employees"
import { getAdminJobs } from "@/data/job";
import { getAdminApplications } from "@/data/application";
import { getContacts } from "@/data/contact";

import { AdminTable } from "@/components/tables/admin-table"
import { employeesColumns } from "@/components/tables/employees-columns"
import { jobColumns } from "@/components/tables/job-columns";
import { applicationColumns } from "@/components/tables/application-columns";
import { contactColumns } from "@/components/tables/contact-columns";
import { serverCurrentRole, serverCurrentUser } from "@/lib/auth";

interface RetrievedUser extends z.infer<typeof UserSchema> {
  jobs: { id: string; }[]
}

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
  employer: z.infer<typeof UserSchema>
}

interface RetrievedApplication extends z.infer<typeof ApplicationSchema> {
  id: string;
  status: StatusType
  createdAt: Date;
  jobId: string
}

interface RetrievedContacts extends z.infer<typeof ContactSchema> {
  id: string,
  createdAt: Date,
}

  export default async function TrashPage() {
    const employees = await getAdminUsers(StatusType.DELETED) as  RetrievedUser[];
    const jobs = await getAdminJobs(StatusType.DELETED) as RetrievedJob[];
    const applications = await getAdminApplications() as RetrievedApplication[]
    const contacts = await getContacts(StatusType.DELETED) as RetrievedContacts[];

    const role = await serverCurrentRole()
    return (
      <>
        <ScrollUp/>

        <div className="bg-white p-10 rounded-xl">
          <div className="pb-6 border-b border-slate-300">
            <p className="text-2xl font-semibold">Trash Folder</p>
          </div>
        </div>

        {role === UserRole.OWNER &&
          <div className="bg-white p-10 rounded-xl mt-6">
            <div className="pb-6 border-b border-slate-300">
              <p className="text-2xl font-semibold">Removed Employees</p>
            </div>
            <AdminTable data={employees} columns={employeesColumns} link="employees"/>
          </div>
        }

        <div className="bg-white p-10 rounded-xl mt-6">
          <div className="pb-6 border-b border-slate-300">
            <p className="text-2xl font-semibold">Deleted Jobs</p>
          </div>
          <AdminTable data={jobs} columns={jobColumns} link="jobs"/>
        </div>

        <div className="bg-white w-full rounded-xl p-10 mt-6">
          <div className=" pb-6 border-b border-slate-300">
            <p className="text-2xl font-semibold">Deleted Applications</p>
          </div>
          <AdminTable data={applications} columns={applicationColumns} link="jobs/application"/>
        </div>

        {role === UserRole.OWNER &&
          <div className=" bg-white p-10 rounded-xl mt-6">
            <div className=" pb-6 border-b border-slate-300">
              <p className="text-2xl font-semibold">Deleted Messages</p>
            </div>
            <AdminTable data={contacts} columns={contactColumns} link="contacts"/>
          </div>
        }
      </>
    )
  }