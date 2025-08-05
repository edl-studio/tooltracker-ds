import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "../label/label"

export interface InputProps extends React.ComponentProps<"input"> {
  interactive?: boolean
  label?: string
  layout?: "vertical" | "horizontal"
  variant?: "default" | "success" | "warning" | "destructive"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, interactive = true, label, layout = "vertical", disabled, variant = "default", ...props }, ref) => {
    const inputWrapperClasses = cn(
      "box-border content-stretch flex gap-2 items-start justify-start min-h-px min-w-px p-0 relative rounded-2xs",
      layout === "horizontal" ? "flex-row items-center w-full" : "flex-col w-full",
      className
    )



    const variantStyles = {
      default: "border-weak",
      success: "border-success-base focus-within:border-success-base",
      warning: "border-warning-base focus-within:border-warning-base",
      destructive: "border-destructive-base focus-within:border-destructive-base",
    }

    const inputClasses = cn(
      "flex h-9 w-full rounded-2xs bg-controls px-3 py-2 text-sm text-primary",
      "box-border border border-solid",
      "placeholder:text-tertiary",
      variantStyles[variant],
      "before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-105 before:transition-all before:duration-200 before:ease-out",
      "focus-within:before:opacity-100 focus-within:before:scale-100",
      "bg-controls",
      interactive && !disabled && "hover:bg-controls-hover transition-colors",
      disabled && "bg-disabled text-disabled disabled:before:transition-none disabled:focus-within:before:opacity-0 disabled:focus-within:before:scale-105 disabled:hover:bg-controls"
    )

    const inputContentClasses = cn(
      "box-border content-stretch flex flex-row gap-2 items-center justify-start py-2 relative w-full",
      "body-sm-regular",
      "placeholder:text-tertiary",
      "text-primary"
    )

    return (
      <div className={inputWrapperClasses}>
        {label && (
          <Label
            layout={layout}
            styleVariant="uppercase"
            className={layout === "horizontal" ? "w-40" : "w-full"}
          >
            {label}
          </Label>
        )}
        <div className={layout === "horizontal" ? "flex-1" : "w-full"}>
          <div className="p-1 -m-1">
            <div 
              className={inputClasses}
              data-disabled={disabled}
            >
              <div className={inputContentClasses}>
                <input
                  type={type}
                  data-slot="input"
                  ref={ref}
                  disabled={disabled}
                  className={cn(
                    "w-full bg-transparent outline-none cursor-text disabled:cursor-not-allowed",
                    disabled ? "text-disabled" : "text-primary"
                  )}
                  {...props}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
