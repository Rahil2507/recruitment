'use client'

import { useState } from 'react'

import {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'

import Image from 'next/image';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { MapPin } from 'lucide-react';

import Job1 from "@/public/job1.jpg"
import Job2 from "@/public/job2.jpg"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function PublicJobTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const router = useRouter()

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({id: false})

  const table = useReactTable({
    data,
    columns,
    enableHiding:true,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <>
      {/* Filters */}

      <div className="flex justify-between items-center h-[280px] sm:h-[400px] bg-gray-900 backdrop-blur-xl bg-white/20" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${Job1.src})`, backgroundSize: 'cover',}} id="heading">
        <div className="max-sm:px-4 sm:pl-20 min-w-1/2">
          <p className="text-gray-300 text-2xl sm:text-4xl font-bold py-4">Find Jobs</p>
          <p className="text-gray-400 max-sm:text-sm text-wrap">Get the perfect oppurtunity for yourself.</p>
          <div className='flex items-center justify-between my-4 sm:my-8'>
            <Input
              placeholder='Search by job title'
              value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
              onChange={event =>
                table.getColumn('title')?.setFilterValue(event.target.value)
              }
              className='px-4 sm:text-lg text-white w-64 sm:w-80 h-10'
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-end ">
          <Image src={Job2} className="h-[280px] sm:h-[400px] object-cover brightness-75 rounded-l-full" alt="office" style={{borderRadius: "5% 0% 0% 20% / 45% 0% 0% 50%"}} />
        </div>
      </div>


      {/* Table */}
      <div className='rounded-md border m-3 sm:m-10'>
        <Table className=''>
          <TableBody className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center m-2">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => {router.push(`/jobs/${row.getValue('id')}`)}}
                  className='rounded-xl p-4 my-2 sm:my-5 w-full sm:w-[95%] flex flex-col bg-slate-100 cursor-pointer hover:bg-slate-50 border-b-2 border-b-black'
                >
                  <TableCell className="truncate">
                    <p className='text-lg sm:text-2xl font-semibold truncate'>{row.getValue("title")}</p>
                    <p className='sm:text-lg text-gray-700 mb-2'>{row.getValue("field")}</p>
                    <p >Skills: {row.getValue("skills")}</p>
                    <p >Experience: {row.getValue("experience")}</p>
                  </TableCell>
                  <TableCell className='flex justify-between text-xs'>
                    <p>Posted on : {format(new Date(row.getValue('createdAt')), "dd/MM/yyyy")}                    </p>
                    <p className='flex'><MapPin className='h-4 w-4 text-gray-600 mr-2'/>{row.getValue("location")}</p>
                  </TableCell>

                </TableRow>
              ))
            ) : (
              <TableRow className='col-span-1 md:col-span-2 lg:col-span-3'>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center text-lg'
                >
                  No results.
                  { table.getColumn('title')?.getFilterValue() !== undefined &&
                    <p onClick={() => table.getColumn('title')?.setFilterValue(undefined)} className='text-sky-600 cursor-pointer hover:text-sky-400'>Show all Jobs</p>
                  }
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-end space-x-2 px-4 sm:px-10'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}