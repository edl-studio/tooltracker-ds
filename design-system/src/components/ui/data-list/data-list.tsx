"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import "./data-list.css"

interface DataListProps extends React.HTMLAttributes<HTMLDListElement> {
  orientation?: "horizontal" | "vertical"
  size?: "1" | "2" | "3"
}

const DataList = React.forwardRef<HTMLDListElement, DataListProps>(
  ({ className, orientation = "horizontal", size = "2", ...props }, ref) => (
    <dl
      ref={ref}
      className={cn(
        "data-list",
        orientation === "horizontal" && "data-list-horizontal",
        orientation === "vertical" && "data-list-vertical",
        `data-list-size-${size}`,
        className
      )}
      {...props}
    />
  )
)
DataList.displayName = "DataList"

interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
}

const DataListItem = React.forwardRef<HTMLDivElement, DataListItemProps>(
  ({ className, align = "start", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "data-list-item",
        `data-list-item-align-${align}`,
        className
      )}
      {...props}
    />
  )
)
DataListItem.displayName = "DataListItem"

interface DataListLabelProps extends React.HTMLAttributes<HTMLElement> {
  color?: "default" | "brand" | "success" | "warning" | "destructive"
  highContrast?: boolean
}

const DataListLabel = React.forwardRef<HTMLElement, DataListLabelProps>(
  ({ className, color = "default", highContrast = false, ...props }, ref) => (
    <dt
      ref={ref}
      className={cn(
        "data-list-label label-3xs-medium",
        `data-list-label-color-${color}`,
        highContrast && "data-list-label-high-contrast",
        className
      )}
      {...props}
    />
  )
)
DataListLabel.displayName = "DataListLabel"

const DataListValue = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <dd
    ref={ref}
    className={cn("data-list-value body-sm-regular", className)}
    {...props}
  />
))
DataListValue.displayName = "DataListValue"

export { DataList, DataListItem, DataListLabel, DataListValue } 