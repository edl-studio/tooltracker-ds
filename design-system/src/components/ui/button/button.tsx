import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import { Spinner } from "../spinner/spinner"
import "./button.css"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "ui-sm-medium transition-all",
    "disabled:cursor-not-allowed cursor-pointer",
    "box-border border border-transparent relative",
    "[&_.icon-sharp]:pointer-events-none [&_.icon-sharp]:shrink-0",
    "active:scale-98 duration-200 ease-out",
    "focus-visible:outline-none",
    "before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-110 before:transition-all before:duration-200 before:ease-out",
    "focus-visible:before:opacity-100 focus-visible:before:scale-100",
    "active:before:opacity-100 active:before:scale-100",
    "disabled:transition-none disabled:active:scale-100",
    "disabled:before:transition-none disabled:focus-visible:before:opacity-0 disabled:active:before:opacity-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-brand hover:bg-brand-hover active:bg-brand text-primary",
          "rounded-2xs",
          "disabled:bg-disabled-inverse disabled:text-disabled-inverse",
        ].join(" "),
        outline: [
          "bg-controls border-weak text-primary",
          "rounded-2xs",
          "hover:bg-controls-hover active:bg-controls",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
        ghost: [
          "bg-controls text-primary",
          "rounded-2xs",
          "hover:bg-controls-hover active:bg-controls",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
        destructive: [
          "bg-destructive-base hover:bg-destructive-base-hover active:bg-destructive-base text-white",
          "rounded-2xs",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 py-1.5",
        lg: "h-10 px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  iconLeft,
  iconRight,
  children,
  loading = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  "aria-pressed": ariaPressed,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    loading?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // Determine the appropriate size based on icon presence
  let finalSize = size
  if (iconLeft && iconRight) {
    // Both icons - use default padding
    finalSize = "default"
  } else {
    // No icons or single icon - use provided size or default
    finalSize = size || "default"
  }

  // Generate custom padding classes for asymmetric padding when icons are present
  const getCustomPadding = () => {
    if (!iconLeft && !iconRight) {
      // No icons - use default padding from size variant
      return ""
    }
    
    if (iconLeft && iconRight) {
      // Both icons - use default padding
      return ""
    }
    
    // Single icon - apply asymmetric padding
    if (iconLeft && !iconRight) {
      // Left icon only - 12px left, 16px right
      return "pl-3 pr-4"
    }
    
    if (iconRight && !iconLeft) {
      // Right icon only - 16px left, 12px right
      return "pl-4 pr-3"
    }
    
    return ""
  }

  // Handle icon-only buttons (no text content)
  const isIconOnly = !children && (iconLeft || iconRight)
  
  // Auto-generate aria-label for icon-only buttons if not provided
  const finalAriaLabel = isIconOnly && !ariaLabel 
    ? `Button with ${iconLeft ? 'left' : 'right'} icon`
    : ariaLabel

  // Determine spinner variant - now just needs to know if it's loading
  const getSpinnerVariant = () => {
    if (!loading) return "default"
    return "disabled" // All loading spinners inherit button's text color
  }

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size: finalSize, className }),
        getCustomPadding()
      )}
      disabled={loading || props.disabled}
      aria-label={finalAriaLabel}
      aria-describedby={ariaDescribedby}
      aria-pressed={ariaPressed}
      aria-busy={loading}
      {...props}
    >
      {/* Original content - hidden when loading but preserves space */}
      <div className={cn("flex items-center gap-1", loading ? "invisible" : "")}>
      {iconLeft && (
        <Icon className="size-4" aria-hidden="true">
          {iconLeft}
        </Icon>
      )}
      {children}
      {iconRight && (
        <Icon className="size-4" aria-hidden="true">
          {iconRight}
        </Icon>
        )}
      </div>
      
      {/* Spinner - only visible when loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner 
            size="xs" 
            variant={getSpinnerVariant()}
            visible={true}
          />
        </div>
      )}
    </Comp>
  )
}

// Helper function to create button icons
const ButtonIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Icon className={cn("size-4", className)}>
    {children}
  </Icon>
)

export { Button, ButtonIcon, buttonVariants }
