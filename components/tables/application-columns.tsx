"use client"

import { ColumnDef } from "@tanstack/react-table"
import * as z from "zod";
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns';


import { ApplicationSchema } from "@/schemas";

interface RetrievedApplication extends z.infer<typeof ApplicationSchema> {
  id: string;
  createdAt: Date;
  jobId: string
}

  
export const applicationColumns: ColumnDef<RetrievedApplication>[] = [
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
          name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      )
    }
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'jobId',
    header: 'Job Id'
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <button
          className="flex justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Applied At
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
]