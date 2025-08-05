import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import "./radio.css"

// Radio Dot Icon using MUI
const RadioDotIcon = ({ className }: { className?: string }) => (
  <Icon 
    className={cn("text-static-black", className)}
    size={12}
  >
    radio_button_checked
  </Icon>
)

export interface RadioProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  className?: string
}

function Radio({
  className,
  ...props
}: RadioProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio"
      className={cn(
        // Base styles matching Figma design - circular instead of rounded-2xs
        "peer h-4 w-4 shrink-0 rounded-full",
        "box-border border",
        "bg-controls border-weak",
        
        // Unchecked state - design system background with gray border
        "bg-controls border-weak",
        
        // Checked state
        "data-[state=checked]:bg-brand data-[state=checked]:border-brand data-[state=checked]:border-0",
        
        // Disabled states based on background color
        "disabled:bg-disabled disabled:border-disabled",
        "disabled:data-[state=checked]:bg-disabled-inverse disabled:data-[state=checked]:border-disabled-inverse",
        
        // Disabled animations
        "disabled:transition-none disabled:active:scale-100",
        
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-indicator"
        className="flex items-center justify-center text-current transition-none p-0.5 w-full h-full radio-indicator"
      >
        <RadioDotIcon />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { Radio }