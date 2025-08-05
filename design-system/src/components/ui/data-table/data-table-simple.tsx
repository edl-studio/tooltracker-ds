"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  FilterFn,
} from "@tanstack/react-table"

import { Button, IconButton } from "../button"
import { Badge } from "../badge/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu/dropdown-menu"
import { Input } from "../input/input"
import { Icon } from "../icon/icon"
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey?: string
  searchPlaceholder?: string
  showColumnToggle?: boolean
  showPagination?: boolean
  filterKey?: string
  filterOptions?: { value: string; label: string }[]
  showRowActions?: boolean
}

export function DataTableSimple<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  showColumnToggle = true,
  showPagination = true,
  filterKey,
  filterOptions,
  showRowActions = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [columnsOpen, setColumnsOpen] = React.useState(false)
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([])
  const [rowActionOpen, setRowActionOpen] = React.useState<string | null>(null)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    // Custom filter function for status column
    filterFns: {
      statusFilter: ((row, columnId, filterValue) => {
        if (!filterValue || filterValue.length === 0) return true
        const value = row.getValue(columnId)
        return filterValue.includes(value)
      }) as FilterFn<any>,
    },
  })

  // Apply status filter
  React.useEffect(() => {
    if (filterKey && selectedFilters.length > 0) {
      table.getColumn(filterKey)?.setFilterValue(selectedFilters)
    } else if (filterKey) {
      table.getColumn(filterKey)?.setFilterValue(undefined)
    }
  }, [selectedFilters, filterKey, table])

  // Handle filter selection
  const handleFilterChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters(prev => [...prev, value])
    } else {
      setSelectedFilters(prev => prev.filter(filter => filter !== value))
    }
  }

  return (
    <div className="w-full flex flex-col">
      {/* Search, Filter, and Column Toggle */}
      <div className="flex items-center gap-2 py-4">
        {searchKey && (
          <Input
            placeholder={searchPlaceholder}
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        {filterKey && filterOptions && (
          <DropdownMenu open={filterOpen} onOpenChange={setFilterOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                iconLeft="filter_list"
                className={selectedFilters.length > 0 ? "border-brand pr-2" : "pr-4"}
              >
                Filter
                {selectedFilters.length > 0 && (
                  <Badge variant="default" className="ml-2 h-5">
                    {selectedFilters.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterOptions.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option.value}
                  checked={selectedFilters.includes(option.value)}
                  onCheckedChange={(checked) => handleFilterChange(option.value, checked)}
                  onSelect={(e) => e.preventDefault()}
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {showColumnToggle && (
          <DropdownMenu open={columnsOpen} onOpenChange={setColumnsOpen}>
            <DropdownMenuTrigger asChild>
              <IconButton
                variant="outline"
                size="sm"
                className="ml-auto"
                icon={<ViewColumnOutlinedIcon />}
                aria-label="Toggle columns"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value: boolean) =>
                        column.toggleVisibility(!!value)
                      }
                      onSelect={(e) => e.preventDefault()}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Table */}
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead 
                      key={header.id} 
                      className={index === 0 ? "px-0" : ""}
                      data-column-id={header.id}
                      style={{ 
                        width: header.id === "select" 
                          ? `${header.getSize()}px` 
                          : `${header.getSize()}%` 
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="group relative"
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell 
                      key={cell.id} 
                      className={index === 0 ? "px-0" : ""}
                      data-column-id={cell.column.id}
                      style={{ 
                        width: cell.column.id === "select" 
                          ? `${cell.column.getSize()}px` 
                          : `${cell.column.getSize()}%` 
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  {showRowActions && (
                    <TableCell className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 data-[open=true]:opacity-100 transition-opacity" data-open={rowActionOpen === row.id}>
                      <DropdownMenu open={rowActionOpen === row.id} onOpenChange={(open) => setRowActionOpen(open ? row.id : null)}>
                        <DropdownMenuTrigger asChild>
                          <IconButton
                            variant="outline"
                            size="sm"
                            icon="more_vert"
                            aria-label="Row actions"
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => {
                            console.log("View details for:", row.original)
                            setRowActionOpen(null)
                          }}>
                            <Icon className="size-4" aria-hidden="true">visibility</Icon>
                            <span className="ml-2">View details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {
                            console.log("Edit for:", row.original)
                            setRowActionOpen(null)
                          }}>
                            <Icon className="size-4" aria-hidden="true">edit</Icon>
                            <span className="ml-2">Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => {
                            console.log("Delete for:", row.original)
                            setRowActionOpen(null)
                          }}>
                            <Icon className="size-4" aria-hidden="true">delete</Icon>
                            <span className="ml-2">Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))
                          ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex items-center justify-between space-x-2 py-4 border-t border-weak">
          <div className="text-sm text-secondary">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <IconButton
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              icon="chevron_left"
              aria-label="Previous page"
            />
            <IconButton
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              icon="chevron_right"
              aria-label="Next page"
            />
          </div>
        </div>
      )}
    </div>
  )
} 