import * as React from "react"
import { Icon } from "../icon/icon"
import { Avatar } from "../avatar/avatar"
import { IconButton } from "../button/icon-button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover"
import { cn } from "@/lib/utils"

// Use MUI icons to match our design system

interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
  render?: () => React.ReactNode // Custom render function for the option
  avatar?: {
    initials?: string
    icon?: string
    className?: string
  } // Avatar data for avatar content variant
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: string
  width?: string
  renderTrigger?: (selectedOption: ComboboxOption | undefined) => React.ReactNode // Custom trigger render function
  variant?: "default" | "ghost" // Trigger styling variant
  content?: "text" | "badge" | "avatar" // Content type for trigger and dropdown items
}

const Combobox = React.forwardRef<
  HTMLButtonElement,
  ComboboxProps
>(({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No option found.",
  disabled = false,
  className,
  width = "w-[200px]",
  renderTrigger,
  variant = "default",
  content = "text",
  ...props
}, ref) => {
  const [open, setOpen] = React.useState(false)

  const selectedOption = options.find((option) => option.value === value)

  // Let cmdk handle the filtering with the keywords prop

  const handleSelect = (optionValue: string) => {
    const newValue = optionValue === value ? "" : optionValue
    onValueChange?.(newValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          ref={ref}
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            // Base styles matching SelectTrigger
            "relative rounded-2xs w-full",
            "flex items-center justify-between",
            "box-border border border-solid",
            // Border styles based on variant
            variant === "ghost" 
              ? "border-transparent hover:border-weak" 
              : "border-weak",
            "before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-xs before:border-2 before:border-focus before:opacity-0 before:scale-105 before:transition-all before:duration-200 before:ease-out",
            "focus:before:opacity-100 focus:before:scale-100",
            "body-sm-regular",
            "text-primary",
            "cursor-pointer",
            "outline-none",
            "disabled:cursor-not-allowed",
            // Background styles based on variant
            variant === "ghost" 
              ? "bg-transparent hover:bg-controls" 
              : "bg-controls",
            // Padding styles based on content type
            content === "badge" || content === "avatar" ? "pl-1 pr-2 py-2" : "pl-3 pr-2 py-2",
            "h-9", // default height to match SelectTrigger
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_.icon-sharp]:!size-4",
            !disabled && variant !== "ghost" && "hover:bg-controls-hover transition-colors",
            variant === "ghost" && !disabled && "transition-colors",
            // Chevron hover effect for ghost variant
            variant === "ghost" && "[&:hover_.chevron-icon]:opacity-100",
            disabled && "bg-disabled text-disabled disabled:before:transition-none disabled:focus:before:opacity-0 disabled:focus:before:scale-105 disabled:hover:bg-controls",
            // Custom width and placeholder styling
            width,
            !selectedOption && "text-tertiary", // Match Select placeholder styling
            className
          )}
          {...props}
        >
          <span className="flex-1 text-left truncate">
            {renderTrigger && selectedOption ? renderTrigger(selectedOption) : 
             content === "avatar" && selectedOption?.avatar ? (
               <div className="flex items-center gap-2">
                 <Avatar 
                   size="xs" 
                   initials={selectedOption.avatar.initials}
                   icon={selectedOption.avatar.icon}
                   className={selectedOption.avatar.className}
                 />
                 <span className="text-sm truncate">{selectedOption.label}</span>
               </div>
             ) : content === "avatar" && !selectedOption ? (
               <div className="flex items-center gap-2">
                 <IconButton
                   size="xs"
                   variant="outline"
                   icon="add"
                   className="pointer-events-none border-weak bg-page hover:bg-page active:bg-page focus:bg-page hover:border-weak active:border-weak focus:border-weak"
                 />
                 <span className="text-sm text-tertiary">{placeholder}</span>
               </div>
             ) : (selectedOption ? selectedOption.label : placeholder)}
          </span>
          <Icon className={cn(
            "size-4 flex items-center justify-center leading-none shrink-0 transition-opacity chevron-icon",
            variant === "ghost" ? "opacity-0" : "opacity-100",
            // Hide chevron when showing add button for unassigned avatar content
            content === "avatar" && !selectedOption ? "hidden" : ""
          )}>unfold_more</Icon>
        </button>
      </PopoverTrigger>
                        <PopoverContent className={cn("p-0", width)} align="start">
        <Command>
          <CommandInput 
            placeholder={searchPlaceholder}
            className="h-8 py-0"
          />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="py-1">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  keywords={[option.label]}
                  disabled={option.disabled}
                  onSelect={handleSelect}
                                                className={cn(
                    "cursor-pointer h-8",
                    (content === "badge" && option.render) || (content === "avatar" && option.avatar) ? "pl-1 pr-2" : ""
                  )}
                >
                                                <div className="flex items-center justify-between w-full">
                                {option.render ? option.render() : 
                                 content === "avatar" && option.avatar ? (
                                   <div className="flex items-center gap-2">
                                     <Avatar 
                                       size="xs" 
                                       initials={option.avatar.initials}
                                       icon={option.avatar.icon}
                                       className={option.avatar.className}
                                     />
                                     <span className="text-sm truncate">{option.label}</span>
                                   </div>
                                 ) : option.label}
                                <Icon
                                  className={cn(
                                    "ml-2 h-4 w-4",
                                    value === option.value ? "opacity-100" : "opacity-0"
                                  )}
                                >
                                  check
                                </Icon>
                              </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
})

Combobox.displayName = "Combobox"

export { Combobox, type ComboboxOption, type ComboboxProps } 