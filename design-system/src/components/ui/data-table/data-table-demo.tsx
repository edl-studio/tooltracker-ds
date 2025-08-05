"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Icon } from "../icon/icon"
import { Button } from "../button"
import { Badge } from "../badge/badge"
import { DataTable } from "./data-table"
import { DataTableSimple } from "./data-table-simple"

// Sample data type
export type Payment = {
  id: string
  name: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  date: string
}

// Sample data
export const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "Ken Johnson",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
    date: "2024-01-15",
  },
  {
    id: "3u1reuv4",
    name: "Abe Wilson",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
    date: "2024-01-14",
  },
  {
    id: "derv1ws0",
    name: "Monserrat Smith",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
    date: "2024-01-13",
  },
  {
    id: "5kma53ae",
    name: "Silas Brown",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
    date: "2024-01-12",
  },
  {
    id: "bhqecj4p",
    name: "Carmella Davis",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
    date: "2024-01-11",
  },
]

// Column definitions
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: "statusFilter",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "success"
              ? "green"
              : status === "processing"
              ? "yellow"
              : status === "failed"
              ? "red"
              : "default"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      return <div className="text-secondary">{formatted}</div>
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            console.log("View payment:", payment.id)
          }}
          iconLeft="visibility"
        >
          View
        </Button>
      )
    },
  },
]

export function DataTableDemo() {
  const filterOptions = [
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "success", label: "Success" },
    { value: "failed", label: "Failed" },
  ]

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Filter names..."
        showBulkActions={false}
        filterKey="status"
        filterOptions={filterOptions}
        showRowActions={true}
      />
    </div>
  )
} 