import * as React from "react"
import { cn } from "@/lib/utils"
import "./label.css"

export interface LabelProps extends React.ComponentProps<"label"> {
  /** Optional layout variant */
  layout?: "vertical" | "horizontal"
  /** Optional color variant */
  variant?: "default" | "success" | "warning" | "destructive"
  /** Optional style variant */
  styleVariant?: "default" | "uppercase"
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, layout = "vertical", variant = "default", styleVariant = "uppercase", ...props }, ref) => {
    const variantStyles = {
      default: "text-[var(--text-color-secondary)]",
      success: "text-color-success",
      warning: "text-color-warning",
      destructive: "text-color-destructive",
    }

    const styleVariants = {
      default: "body-sm-regular",
      uppercase: "label-3xs-medium",
    }

    const labelClasses = cn(
      "text-left text-nowrap",
      styleVariants[styleVariant],
      variantStyles[variant],
      layout === "horizontal" ? "w-40" : "w-full",
      className
    )

    return (
      <label
        ref={ref}
        data-slot="label"
        data-style-variant={styleVariant}
        className={labelClasses}
        {...props}
      />
    )
  }
)

Label.displayName = "Label"

export { Label }
