"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// Data Table Structure
export type User = {
    createdon: string,
    name: string,
    status: "Lead" | "Active" | "Inactive",
    email: string,
    phone: string,
    service: string,
    scheduleon: string,
    type: "Public" | "Private" | "Draft" | "Disabled",
    id: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "createdon",
    header: "Created On",
    cell:({row})=>{
      const createdon=row.getValue("createdon");
      const format=new Date(createdon as string).toLocaleDateString(); // Date Format
      return <div className="font-medium">{format}</div>
    }
  },
  {
    accessorKey: "name",
    header: "Payer",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Payer Phone",
  },
  {
    accessorKey: "service",
    header: "Services",
  },
  {
    accessorKey: "scheduleon",
    header: "Scheduled On",
    cell:({row})=>{
      const scheduledon=row.getValue("scheduleon");
      const format=new Date(scheduledon as string).toLocaleDateString(); // Date Format
      return <div className="font-medium">{format}</div>
    }
  },
  {
    accessorKey: "type",
    header: "Service Type",
  },
]
