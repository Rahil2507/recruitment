import * as z from "zod";

import { ContactSchema } from "@/schemas";
import { getContacts } from "@/data/contact";
import { AdminTable } from "@/components/tables/admin-table";
import { contactColumns } from "@/components/tables/contact-columns"
import ScrollUp from "@/components/common/scroll-up";
import { StatusType } from "@prisma/client";

interface RetrievedContacts extends z.infer<typeof ContactSchema> {
  id: string,
  createdAt: Date,
}

export default async function AdminContactsPage() {
  const contacts = await getContacts(StatusType.ACTIVE) as RetrievedContacts[];

  return (
    <div className=" bg-white p-10 rounded-xl">
      <ScrollUp/>
      <div className=" pb-6 border-b border-slate-300">
        <p className="text-2xl font-semibold">Messages List</p>
      </div>
      <AdminTable data={contacts} columns={contactColumns} link="contacts"/>
    </div>
  )
}