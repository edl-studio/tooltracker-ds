import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import SquareIcon from '@mui/icons-material/Square'

import { cn } from "@/lib/utils"
import "./badge.css"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-2xs box-border border border-weak bg-controls text-primary h-6 ui-2xs-medium w-fit whitespace-nowrap shrink-0 gap-1",
  {
    variants: {
      variant: {
        // Variants without icons
        default: "px-2",
        tealDark: "px-2",
        teal: "px-2",
        green: "px-2",
        olive: "px-2",
        yellow: "px-2",
        orange: "px-2",
        redOrange: "px-2",
        red: "px-2",
        // Variants with icons
        tealDarkIcon: "pl-1.5 pr-2",
        tealIcon: "pl-1.5 pr-2",
        greenIcon: "pl-1.5 pr-2",
        oliveIcon: "pl-1.5 pr-2",
        yellowIcon: "pl-1.5 pr-2",
        orangeIcon: "pl-1.5 pr-2",
        redOrangeIcon: "pl-1.5 pr-2",
        redIcon: "pl-1.5 pr-2",
      },
      interactive: {
        true: "transition-colors hover:bg-controls-hover relative focus-visible:outline-none before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-110 before:transition-all before:duration-200 before:ease-out focus-visible:before:opacity-100 focus-visible:before:scale-100 active:scale-98 duration-200 ease-out active:before:opacity-100 active:before:scale-100 cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
)

export interface BadgeProps extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> {
  asChild?: boolean
  interactive?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, interactive = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    
    // Check if this is an icon variant
    const isIconVariant = variant?.includes('Icon')
    
    // Get icon color based on variant
    const getIconColor = () => {
      if (!isIconVariant) return ""
      
      const colorMap = {
        tealDarkIcon: "text-[var(--color-dataviz-teal-dark)]",
        tealIcon: "text-[var(--color-dataviz-teal)]",
        greenIcon: "text-[var(--color-dataviz-green)]",
        oliveIcon: "text-[var(--color-dataviz-olive)]",
        yellowIcon: "text-[var(--color-dataviz-yellow)]",
        orangeIcon: "text-[var(--color-dataviz-orange)]",
        redOrangeIcon: "text-[var(--color-dataviz-red-orange)]",
        redIcon: "text-[var(--color-dataviz-red)]",
      }
      
      return colorMap[variant as keyof typeof colorMap] || ""
    }
    
    // When using asChild, we can't add the icon directly
    // The child element should handle its own content
    if (asChild) {
      return (
        <Comp
          ref={ref}
          data-slot="badge"
          className={cn(badgeVariants({ variant, interactive }), className)}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant, interactive }), className)}
        {...props}
      >
        {isIconVariant && (
          <SquareIcon 
            className={cn("w-2 h-2", getIconColor())} 
            aria-hidden="true"
          />
        )}
        {children}
      </Comp>
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants } 