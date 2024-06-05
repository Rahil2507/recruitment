"use client"

import { ColumnDef } from "@tanstack/react-table"
import * as z from "zod";
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns';

import { JobSchema } from "@/schemas";
import { StatusType } from "@prisma/client";

interface RetrievedUser{
  id: string,
  email: string,
  createdAt: Date,
  name: string,
  role: string,
  jobs: { id: string; }[]

}
  
export const employeesColumns: ColumnDef<RetrievedUser>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
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
    accessorKey: 'jobs',
    header: 'Jobs Posted',
    cell: ({ row }) => {
      const jobsArray: {id: string}[] = row.getValue("jobs")
      return <p>{jobsArray.length}</p>
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
      const formattedDate = format(date, "dd/MM/yyyy hh:mm:a");


      return <div>{formattedDate}</div>
    }
  },
]