import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
const AppliesTable = () => {
  return (
    <div>
      <Table>
  <TableCaption className="font-bold text-sm">A list of your recent Applied Job.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Job Role</TableHead>
      <TableHead>Company</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        [1,2,3,4,5].map((item,index)=><TableRow key={index}>
        <TableCell className="font-medium">30-09-2024</TableCell>
        <TableCell>MERN DEVELOPER</TableCell>
        <TableCell>Amazon</TableCell>
        <TableCell className="text-end absolute right-0 bg-black text-white rounded-full inline-block">Selected</TableCell>
      </TableRow>)
    }
  </TableBody>
</Table>

    </div>
  )
}

export default AppliesTable
