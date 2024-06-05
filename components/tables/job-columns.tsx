"use client"

import { ColumnDef } from "@tanstack/react-table"
import * as z from "zod";
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns';


import { ApplicationSchema, JobSchema } from "@/schemas";
import { StatusType } from "@prisma/client";


interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
}

  
export const jobColumns: ColumnDef<RetrievedJob>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <button
        className="flex justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      )
    }
  },
  {
    accessorKey: 'employer.name',
    header: 'Posted By'
  },
  {
    accessorKey: 'applications',
    header: 'Aplications',
    cell: ({ row }) => {
      const applicationsArray: z.infer<typeof ApplicationSchema>[] = row.getValue("applications")
      return <p>{applicationsArray.length}</p>
    }
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created At
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'))
      const formattedDate = format(date, "dd/MM/yyyy: hh.mm a");      


      return <div className=''>{formattedDate}</div>
    }
  },
]