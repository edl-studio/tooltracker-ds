import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"

// Use MUI icons to match our design system

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  interactive = true,
  disabled,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
  interactive?: boolean
  variant?: "default" | "success" | "warning" | "destructive"
}) {
  const variantStyles = {
    default: "border-weak",
    success: "border-success-base focus-within:border-success-base",
    warning: "border-warning-base focus-within:border-warning-base",
    destructive: "border-destructive-base focus-within:border-destructive-base",
  }

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      disabled={disabled}
      className={cn(
        "relative rounded-2xs w-full",
        "flex items-center justify-between",
        "box-border border border-solid",
        variantStyles[variant],
        "before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-105 before:transition-all before:duration-200 before:ease-out",
        "focus-within:before:opacity-100 focus-within:before:scale-100",
        "body-sm-regular",
        "text-primary",
        "data-[placeholder]:text-tertiary",
        "cursor-pointer",
        "outline-none",
        "disabled:cursor-not-allowed",
        "bg-controls",
        "pl-3 pr-2 py-2",
        "data-[size=default]:h-9",
        "data-[size=sm]:h-8",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_.icon-sharp]:!size-4",
        interactive && !disabled && "hover:bg-controls-hover transition-colors",
        disabled && "bg-disabled text-disabled disabled:before:transition-none disabled:focus-within:before:opacity-0 disabled:focus-within:before:scale-105 disabled:hover:bg-controls",
        className
      )}
      {...props}
    >
      <span className="flex-1 text-left truncate">{children}</span>
      <SelectPrimitive.Icon asChild>
        <Icon className="size-4 flex items-center justify-center leading-none shrink-0">unfold_more</Icon>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-container text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xs border border-weak",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        style={{
          width: 'var(--radix-select-trigger-width)',
          maxWidth: 'var(--radix-select-trigger-width)'
        }}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "py-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
          style={{
            width: 'var(--radix-select-trigger-width)',
            maxWidth: 'var(--radix-select-trigger-width)'
          }}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 label-3xs-medium", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-controls-hover focus:text-primary [&_svg:not([class*='text-'])]:text-tertiary relative flex w-full cursor-default items-center gap-2 rounded-2xs h-8 pr-8 pl-2 ui-sm-regular outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:!size-4 [&_.material-symbols-sharp]:!text-base *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
        className
      )}
      {...props}
    >
              <span className="absolute right-3 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Icon className="!size-4 text-primary">check</Icon>
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <div
      data-slot="select-separator"
      className={cn("bg-[var(--border-color-weak)] pointer-events-none my-1 h-px w-full", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <Icon className="size-4">expand_less</Icon>
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <Icon className="size-4">expand_more</Icon>
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
