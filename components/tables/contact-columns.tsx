"use client"

import { ColumnDef } from "@tanstack/react-table"
import * as z from "zod";
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns';

import { ContactSchema } from "@/schemas";

interface RetrievedContacts extends z.infer<typeof ContactSchema> {
  id: string,
  createdAt: Date,
}
  
export const contactColumns: ColumnDef<RetrievedContacts>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <button
        className="flex justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Received At
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'))
      const formattedDate = format(date, "dd/MM/yyyy");      


      return <div className=''>{formattedDate}</div>
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      )
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'message',
    header: 'Message'
  },
]