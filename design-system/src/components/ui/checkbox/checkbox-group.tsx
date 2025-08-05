import * as React from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"
import { Label } from "../label/label"

export interface CheckboxOption {
  id: string
  label: string
  value: string
  disabled?: boolean
  indeterminate?: boolean
}

export interface CheckboxGroupProps {
  className?: string
  options: CheckboxOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
}

function CheckboxGroup({
  className,
  options,
  value,
  defaultValue = [],
  onChange,
  disabled = false,
  orientation = "vertical",
}: CheckboxGroupProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(value || defaultValue)
  
  const currentValue = value !== undefined ? value : internalValue

  const handleChange = (optionValue: string, checked: boolean) => {
    const newValue = checked
      ? [...currentValue, optionValue]
      : currentValue.filter(v => v !== optionValue)
    
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  return (
    <div 
      className={cn(
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
      data-slot="checkbox-group"
    >
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Checkbox
            checked={currentValue.includes(option.value)}
            onCheckedChange={(checked) => 
              handleChange(option.value, checked === true)
            }
            disabled={disabled || option.disabled}
            indeterminate={option.indeterminate}
            id={option.id}
          />
          <Label
            htmlFor={option.id}
            styleVariant="default"
            className={cn(
              "cursor-pointer",
              (disabled || option.disabled) && "cursor-not-allowed"
            )}
          >
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  )
}

export { CheckboxGroup }