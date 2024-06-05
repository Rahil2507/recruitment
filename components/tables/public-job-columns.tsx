"use client"

import { ColumnDef } from "@tanstack/react-table"
import * as z from "zod";
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns';


import { JobSchema } from "@/schemas";

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
}

  
export const publicJobColumns: ColumnDef<RetrievedJob>[] = [
  { accessorKey: 'id' },
  { accessorKey: 'title' },
  { accessorKey: 'field' },
  { accessorKey: 'createdAt' },
  { accessorKey: 'experience' },
  { accessorKey: 'skills' },
  { accessorKey: 'location' },
]