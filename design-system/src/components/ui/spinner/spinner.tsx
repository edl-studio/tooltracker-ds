import * as React from "react"
import { cn } from "@/lib/utils"
import "./spinner.css"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant of the spinner */
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  /** Color variant of the spinner */
  variant?: "default" | "brand" | "success" | "warning" | "destructive" | "disabled" | "disabled-inverse"
  /** Whether the spinner is visible */
  visible?: boolean
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", variant = "default", visible = true, ...props }, ref) => {
    const sizeClasses = {
      xs: "size-4",
      sm: "size-6", 
      md: "size-8",
      lg: "size-12",
      xl: "size-16"
    }

    const variantClasses = {
      default: "text-secondary",
      brand: "text-brand",
      success: "text-success-base",
      warning: "text-warning-base", 
      destructive: "text-destructive-base",
      disabled: "text-current",
      "disabled-inverse": "text-current"
    }

    if (!visible) return null

    return (
      <div
        ref={ref}
        data-slot="spinner"
        className={cn(
          "inline-block",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner } 