import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import { DropdownMenuItem } from "./dropdown-menu"

interface DropdownItemProps extends React.ComponentProps<typeof DropdownMenuItem> {
  icon?: React.ReactNode
  children: React.ReactNode
  disabled?: boolean
}

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  DropdownItemProps
>(({ className, icon, children, disabled, ...props }, ref) => {
  return (
    <DropdownMenuItem
      ref={ref}
      className={cn(className)}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <Icon className="size-4" aria-hidden="true">
          {icon}
        </Icon>
      )}
      <span className={cn(icon && "ml-2")}>
        {children}
      </span>
    </DropdownMenuItem>
  )
})

DropdownItem.displayName = "DropdownItem"

export { DropdownItem } 