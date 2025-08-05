import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import "./checkbox.css"

// Check Icon using MUI
const CheckIcon = ({ disabled }: { disabled?: boolean }) => (
  <Icon 
    className={cn(
      disabled ? "text-[var(--text-color-disabled-inverse)]" : "text-primary"
    )}
    size={12}
  >
    check
  </Icon>
)

// Minus Icon for indeterminate state using custom SVG
const MinusIcon = ({ disabled }: { disabled?: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    className={cn(
      disabled ? "text-[var(--text-color-disabled-inverse)]" : "text-primary"
    )}
    style={{ display: 'block' }}
  >
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  indeterminate?: boolean
}

function Checkbox({
  className,
  indeterminate = false,
  disabled,
  ...props
}: CheckboxProps) {

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      disabled={disabled}
      className={cn(
        // Base styles matching Figma design
        "peer shrink-0 size-5 rounded-2xs border transition-all outline-none active:scale-95 duration-200 ease-out",
        "box-border border",

        // Unchecked state - design system background with gray border
        "bg-controls border-weak",
        
        // Checked and indeterminate states
        !disabled && "data-[state=checked]:bg-brand data-[state=checked]:border-brand data-[state=indeterminate]:bg-brand data-[state=indeterminate]:border-brand",
        
        // Disabled states - different for checked vs unchecked
        disabled && "data-[state=checked]:bg-disabled-inverse data-[state=checked]:border-disabled-inverse",
        disabled && "data-[state=indeterminate]:bg-disabled-inverse data-[state=indeterminate]:border-disabled-inverse",
        disabled && "data-[state=unchecked]:bg-disabled data-[state=unchecked]:border-weak data-[state=unchecked]:text-disabled",
        
        // Cursor states
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        
        // Disabled animations
        disabled && "disabled:transition-none disabled:active:scale-100",
        
        className
      )}
      {...props}
      data-state={indeterminate ? "indeterminate" : props.checked ? "checked" : "unchecked"}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none p-0.5 w-full h-full checkbox-indicator"
        forceMount={indeterminate ? true : undefined}
      >
        {indeterminate ? <MinusIcon disabled={disabled} /> : <CheckIcon disabled={disabled} />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
