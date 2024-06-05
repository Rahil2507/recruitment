import * as z from "zod";
import { format } from 'date-fns';

import { ContactSchema } from "@/schemas";
import { deleteContact, getContactById, recoverContact } from "@/data/contact"
import ScrollUp from "@/components/common/scroll-up";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DeleteButton from "@/components/common/delete-button";
import { StatusType } from "@prisma/client";
import RecoverButton from "@/components/common/recover-button";


interface EmployeePageProps {
  params: {
    contactId: string
  }
}

interface RetrievedContacts extends z.infer<typeof ContactSchema> {
  id: string,
  createdAt: Date,
  status: StatusType
}


export default async function AdminEmployerPage({params}: EmployeePageProps) {
  const contact = await getContactById(params.contactId) as RetrievedContacts;

  const date = new Date(contact.createdAt)
  const formattedDate = format(date, "dd/MM/yyyy hh:mm:a");      

  const handleDelete = async () => {
    "use server"
    await deleteContact(params.contactId)
    redirect(`/admin/contacts`)
  }

  const handleRecover = async () => {
    "use server"
    await recoverContact(params.contactId)
    redirect(`/admin/contacts`)
  }

  return (
    <div className=" bg-white p-10 rounded-xl">
      <ScrollUp/>
      <div className="flex justify-between pb-5 border-b border-slate-300 mb-4">
        <p className="text-2xl font-semibold">Message</p>
        
        { contact.status === StatusType.ACTIVE 
          ? <DeleteButton type="Message" action={handleDelete} />
          : <RecoverButton type="Message" action={handleRecover} />
        }
        
      </div>

      <div>
        <div className="py-4">
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Date: </p>{formattedDate}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Name: </p>{contact.name}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Email: </p>{contact.email}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Phone: </p>{contact.phone}</div>
          <div className="text-gray-600 mb-2 flex"><p className="font-semibold text-black mr-4">Message: </p>{contact.message}</div>
        </div>
      </div>
    </div>
  )
}