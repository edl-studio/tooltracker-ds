import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"
import { Label } from "../label/label"
import { Radio } from "./radio"

export interface RadioOption {
  id: string
  label: string
  value: string
  disabled?: boolean
}

export interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  className?: string
  options?: RadioOption[]
  orientation?: "horizontal" | "vertical"
}

function RadioGroup({
  className,
  options,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(
        "flex gap-2",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
      {...props}
    >
      {options?.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Radio
            value={option.value}
            disabled={option.disabled}
            id={option.id}
          />
          <Label
            htmlFor={option.id}
            styleVariant="default"
            className={cn(
              "cursor-pointer",
              option.disabled && "cursor-not-allowed"
            )}
          >
            {option.label}
          </Label>
        </div>
      ))}
      {!options && props.children}
    </RadioGroupPrimitive.Root>
  )
}

export { RadioGroup }