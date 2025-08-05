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
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
  FilterFn,
} from "@tanstack/react-table"

import { Button, IconButton } from "../button"
import { Checkbox } from "../checkbox/checkbox"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table"
import { Icon } from "../icon/icon"
import { Spinner } from "../spinner/spinner"
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined'
import "./data-table.css"

// Utility function to add selection column
function addSelectionColumn<TData>(columns: ColumnDef<TData, any>[]): ColumnDef<TData, any>[] {
  const selectionColumn: ColumnDef<TData, any> = {
    id: "select",
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected()
      const isSomeSelected = table.getIsSomePageRowsSelected()
      
      return (
        <div onClick={(e) => e.stopPropagation()}>
          <Checkbox
            checked={isAllSelected}
            indeterminate={isSomeSelected && !isAllSelected}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        </div>
      )
    },
    cell: ({ row }) => (
      <div onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    size: 48,
  }

  return [selectionColumn, ...columns]
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey?: string
  searchPlaceholder?: string
  showColumnToggle?: boolean
  showPagination?: boolean
  showBulkActions?: boolean
  bulkActions?: React.ReactNode
  filterKey?: string
  filterOptions?: { value: string; label: string }[]
  showRowActions?: boolean
  onRowClick?: (row: TData) => void
  onRowAction?: {
    onView?: (row: TData) => void
    onEdit?: (row: TData) => void
    onDelete?: (row: TData) => void
  }
  mobileCardRenderer?: (row: TData) => React.ReactNode
  mobileBreakpoint?: number
  isLoading?: boolean
  onSearchChange?: (query: string) => void
  onFilterChange?: (filters: string[]) => void
  searchValue?: string
  filterValue?: string[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  showColumnToggle = true,
  showPagination = true,
  showBulkActions = false,
  bulkActions,
  filterKey,
  filterOptions,
  showRowActions = false,
  onRowClick,
  onRowAction,
  mobileCardRenderer,
  mobileBreakpoint = 768,
  isLoading = false,
  onSearchChange,
  onFilterChange,
  searchValue,
  filterValue,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [columnsOpen, setColumnsOpen] = React.useState(false)
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([])
  const [rowActionOpen, setRowActionOpen] = React.useState<string | null>(null)
  const [bulkActionsVisible, setBulkActionsVisible] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  // Check for mobile breakpoint
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [mobileBreakpoint])

  // Add selection column if bulk actions are enabled
  const tableColumns = showBulkActions ? addSelectionColumn(columns) : columns

  const tableConfig = {
    data,
    columns: tableColumns,
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
  }

  if (showBulkActions) {
    Object.assign(tableConfig, {
      onRowSelectionChange: setRowSelection,
      enableRowSelection: true,
      state: {
        ...tableConfig.state,
        rowSelection,
      },
    })
  }

  const table = useReactTable(tableConfig)

  // Sync selectedFilters with external filterValue
  React.useEffect(() => {
    if (onFilterChange && filterValue) {
      setSelectedFilters(filterValue);
    }
  }, [filterValue, onFilterChange]);

  // Apply status filter (only if not using external filter handling)
  React.useEffect(() => {
    if (!onFilterChange && filterKey && selectedFilters.length > 0) {
      table.getColumn(filterKey)?.setFilterValue(selectedFilters)
    } else if (!onFilterChange && filterKey) {
      table.getColumn(filterKey)?.setFilterValue(undefined)
    }
  }, [selectedFilters, filterKey, table, onFilterChange])

  // Handle filter selection
  const handleFilterChange = (value: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const newFilters = checked 
        ? [...prev, value]
        : prev.filter(filter => filter !== value)
      
      // Use custom filter handler if provided, otherwise use internal table filtering
      if (onFilterChange) {
        onFilterChange(newFilters);
      } else if (filterKey) {
        // Ensure filter column is updated
        if (newFilters.length > 0) {
          table.getColumn(filterKey)?.setFilterValue(newFilters)
        } else {
          table.getColumn(filterKey)?.setFilterValue(undefined)
        }
      }
      
      return newFilters
    })
  }

  // Control bulk actions visibility with animation
  React.useEffect(() => {
    const hasSelectedRows = showBulkActions && table.getFilteredSelectedRowModel().rows.length > 0
    
    if (hasSelectedRows && !bulkActionsVisible) {
      setBulkActionsVisible(true)
    } else if (!hasSelectedRows && bulkActionsVisible) {
      // Delay hiding to allow exit animation
      const timer = setTimeout(() => {
        setBulkActionsVisible(false)
      }, 300) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [showBulkActions, table.getFilteredSelectedRowModel().rows.length, bulkActionsVisible])



  // Mobile card view renderer
  const renderMobileCards = () => {
    if (!mobileCardRenderer) return null
    
    if (isLoading) {
      return (
        <div className="space-y-3">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Spinner size="md" variant="brand" />
            <div className="text-sm text-secondary mt-3">Loading...</div>
          </div>
        </div>
      )
    }
    
    return (
      <div className="space-y-3">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => {
            return (
              <div
                key={row.id}
                className="relative rounded-2xs border border-weak bg-container hover:bg-flat transition-colors cursor-pointer"
                onClick={() => onRowClick?.(row.original)}
              >
                {mobileCardRenderer(row.original)}
                {showRowActions && (
                  <div className="absolute top-2 right-2" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu open={rowActionOpen === row.id} onOpenChange={(open) => setRowActionOpen(open ? row.id : null)}>
                      <DropdownMenuTrigger asChild>
                        <IconButton
                          variant="ghost"
                          size="sm"
                          icon="more_vert"
                          aria-label="Row actions"
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={(e) => {
                          e.stopPropagation()
                          onRowAction?.onView?.(row.original)
                          setRowActionOpen(null)
                        }}>
                          <Icon className="size-4" aria-hidden="true">visibility</Icon>
                          <span className="ml-2">View details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => {
                          e.stopPropagation()
                          onRowAction?.onEdit?.(row.original)
                          setRowActionOpen(null)
                        }}>
                          <Icon className="size-4" aria-hidden="true">edit</Icon>
                          <span className="ml-2">Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={(e) => {
                          e.stopPropagation()
                          onRowAction?.onDelete?.(row.original)
                          setRowActionOpen(null)
                        }}>
                          <Icon className="size-4" aria-hidden="true">delete</Icon>
                          <span className="ml-2">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            )
          })
        ) : (
          <div className="text-center py-12 text-secondary">
            No results.
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col">
      {/* Search, Filter, and Column Toggle */}
      <div className={`flex gap-2 py-4 ${
        isMobile ? 'items-center' : 'items-center'
      }`}>
        {searchKey && (
          <Input
            placeholder={searchPlaceholder}
            value={onSearchChange ? (searchValue ?? "") : ((table.getColumn(searchKey)?.getFilterValue() as string) ?? "")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (onSearchChange) {
                onSearchChange(event.target.value);
              } else {
                table.getColumn(searchKey)?.setFilterValue(event.target.value);
              }
            }}
            className={isMobile ? "flex-1" : "max-w-sm"}
          />
        )}
        <div className={isMobile ? "flex gap-2" : "contents"}>
          {filterKey && filterOptions && (
            <DropdownMenu open={filterOpen} onOpenChange={setFilterOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  iconLeft="filter_list"
                  data-state={(onFilterChange ? (filterValue?.length ?? 0) : selectedFilters.length) > 0 ? "active" : "inactive"}
                  className="data-[state=active]:border-brand data-[state=active]:pr-2 relative z-10"
                >
                  Filter
                  {(onFilterChange ? (filterValue?.length ?? 0) : selectedFilters.length) > 0 && (
                    <Badge variant="default" className="ml-2 h-5">
                      {onFilterChange ? (filterValue?.length ?? 0) : selectedFilters.length}
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
                    checked={onFilterChange ? (filterValue?.includes(option.value) ?? false) : selectedFilters.includes(option.value)}
                    onCheckedChange={(checked) => handleFilterChange(option.value, checked)}
                    onSelect={(e) => e.preventDefault()}
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {showColumnToggle && !isMobile && (
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
                <DropdownMenuLabel>Select columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
      </div>

      {/* Bulk Actions */}
      {bulkActionsVisible && (
        <div className={`fixed ${isMobile ? 'bottom-4 left-4 right-4' : 'bottom-4 left-1/2'} z-50 ${
          showBulkActions && table.getFilteredSelectedRowModel().rows.length > 0 
            ? 'bulk-actions-enter' 
            : 'bulk-actions-exit'
        }`}>
          <div className={`bg-container border border-weak rounded-2xs shadow-lg py-3 px-3 flex items-center gap-2 ${
            isMobile ? 'w-full' : 'min-w-[400px] mx-auto'
          }`}>
            <IconButton
              variant="ghost"
              size="xs"
              icon="close"
              onClick={() => table.toggleAllPageRowsSelected(false)}
              aria-label="Clear selection"
            />
            <div className="text-sm text-primary flex-1">
              {table.getFilteredSelectedRowModel().rows.length} selected
            </div>
            {bulkActions && (
              <div className={`flex items-center gap-2 ml-auto ${
                isMobile ? 'flex-col' : ''
              }`}>
                {bulkActions}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table or Mobile Cards */}
      {isMobile && mobileCardRenderer ? (
        renderMobileCards()
      ) : (
        <div className={isMobile ? "overflow-x-auto" : ""}>
          <Table className={isMobile ? "min-w-[600px]" : ""}>
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
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={tableColumns.length}
                    className="h-64 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Spinner size="md" variant="brand" />
                      <div className="text-sm text-secondary">Loading...</div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="group relative cursor-pointer hover:bg-flat"
                    onClick={() => onRowClick?.(row.original)}
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
                      <TableCell 
                        className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity ${
                          isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 data-[open=true]:opacity-100'
                        }`}
                        data-open={rowActionOpen === row.id}
                        onClick={(e) => e.stopPropagation()}
                      >
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
                            <DropdownMenuItem onClick={(e) => {
                              e.stopPropagation()
                              onRowAction?.onView?.(row.original)
                              setRowActionOpen(null)
                            }}>
                              <Icon className="size-4" aria-hidden="true">visibility</Icon>
                              <span className="ml-2">View details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => {
                              e.stopPropagation()
                              onRowAction?.onEdit?.(row.original)
                              setRowActionOpen(null)
                            }}>
                              <Icon className="size-4" aria-hidden="true">edit</Icon>
                              <span className="ml-2">Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={(e) => {
                              e.stopPropagation()
                              onRowAction?.onDelete?.(row.original)
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
                    colSpan={tableColumns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

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
              size="xs"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              icon="chevron_left"
              aria-label="Previous page"
            />
            <IconButton
              variant="outline"
              size="xs"
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