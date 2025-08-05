"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../button"
import { Badge } from "../badge/badge"
import { DataTable } from "./data-table"
import { columns, data } from "./data-table-demo"

export function DataTableBulkDemo() {
  const handleBulkDelete = () => {
    console.log("Deleting selected rows")
    // Here you would typically make an API call to delete the selected items
    alert("Deleting selected items")
  }

  const handleBulkArchive = () => {
    console.log("Archiving selected rows")
    // Here you would typically archive the selected data
    alert("Archiving selected items")
  }

  const handleBulkEdit = () => {
    console.log("Editing selected rows")
    // Here you would typically open an edit modal or navigate to edit page
    alert("Editing selected items")
  }

  const bulkActions = (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleBulkArchive}
        iconLeft="archive"
      >
        Archive
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={handleBulkDelete}
        iconLeft="delete"
      >
        Delete
      </Button>
    </>
  )

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Filter names..."
        showBulkActions={true}
        bulkActions={bulkActions}
      />
    </div>
  )
} 