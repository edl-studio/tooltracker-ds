import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import { Spinner } from "../spinner/spinner"

const iconButtonVariants = cva(
  // Base styles for icon-only buttons
  "inline-flex items-center justify-center whitespace-nowrap ui-sm-medium transition-all disabled:cursor-not-allowed cursor-pointer box-border border border-transparent relative [&_.icon-sharp]:pointer-events-none [&_.icon-sharp]:shrink-0 active:scale-98 duration-200 ease-out focus-visible:outline-none before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-110 before:transition-all before:duration-200 before:ease-out focus-visible:before:opacity-100 focus-visible:before:scale-100 active:before:opacity-100 active:before:scale-100 disabled:transition-none disabled:active:scale-100 disabled:before:transition-none disabled:focus-visible:before:opacity-0 disabled:active:before:opacity-0",
  {
    variants: {
      variant: {
        // Primary icon button
        primary: [
          "bg-brand hover:bg-brand-hover active:bg-brand text-primary",
          "rounded-2xs",
          "disabled:bg-disabled-inverse disabled:text-disabled-inverse",
        ].join(" "),
        
        // Outlined icon button
        outline: [
          "bg-controls border-weak text-primary",
          "rounded-2xs",
          "hover:bg-controls-hover active:bg-controls",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
        
        // Ghost icon button
        ghost: [
          "bg-controls text-primary",
          "rounded-2xs",
          "hover:bg-controls-hover active:bg-controls",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
        
        // Destructive icon button
        destructive: [
          "bg-destructive-base hover:bg-destructive-base-hover active:bg-destructive-base text-white",
          "rounded-2xs",
          "disabled:bg-disabled disabled:text-disabled",
        ].join(" "),
      },
      size: {
        xs: "size-6 p-0", // Extra small: 24px
        sm: "size-8 p-0", // Small: 32px
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "sm",
    },
  }
)

// IconButton component specifically for icon-only buttons
function IconButton({
  className,
  variant = "outline",
  size = "sm",
  asChild = false,
  icon,
  loading = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  "aria-pressed": ariaPressed,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean
    icon: React.ReactNode
    loading?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // Determine spinner variant
  const getSpinnerVariant = () => {
    if (!loading) return "default"
    return "disabled"
  }

  return (
    <Comp
      data-slot="icon-button"
      className={cn(iconButtonVariants({ variant, size, className }))}
      disabled={loading || props.disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-pressed={ariaPressed}
      aria-busy={loading}
      {...props}
    >
      {/* Original content - hidden when loading but preserves space */}
      <div className={cn("flex items-center justify-center", loading ? "invisible" : "")}>
        {typeof icon === 'string' ? (
          <Icon className="size-4" aria-hidden="true">
            {icon}
          </Icon>
        ) : (
          <div className="size-4 flex items-center justify-center" aria-hidden="true">
            {React.cloneElement(icon as React.ReactElement<any>, {
              style: { fontSize: 16 }
            })}
          </div>
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

export { IconButton } 