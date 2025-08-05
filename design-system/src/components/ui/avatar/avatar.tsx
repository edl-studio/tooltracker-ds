import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "../icon/icon"
import { formatInitials } from "./avatar-utils"

const avatarVariants = cva(
  // Base styles using Tailwind utilities and design system classes
  "relative flex shrink-0 overflow-hidden rounded-2xs bg-brand",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10", 
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const avatarImageVariants = cva(
  "aspect-square h-full w-full object-cover"
)

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center rounded-2xs bg-brand text-primary select-none",
  {
    variants: {
      size: {
        xs: "body-xs-medium",
        sm: "body-sm-medium",
        md: "body-sm-medium",
        lg: "body-sm-medium",
        xl: "body-sm-medium",
        "2xl": "body-sm-medium",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string | React.ReactNode
  icon?: string
  initials?: string
}

const Avatar = React.forwardRef<
  HTMLDivElement,
  AvatarProps
>(({ className, size, src, alt, fallback, icon, initials, ...props }, ref) => {
  // Determine what to show in fallback
  const getFallbackContent = () => {
    if (icon) {
      return <Icon>{icon}</Icon>
    }
    if (initials) {
      return formatInitials(initials)
    }
    if (typeof fallback === "string") {
      return fallback
    }
    return fallback
  }

  // If no src is provided, render fallback content directly to avoid any flashing
  if (!src) {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        <div className={cn(avatarFallbackVariants({ size }))}>
          {getFallbackContent()}
        </div>
      </div>
    )
  }

  // If src is provided, use Radix's image loading mechanism with fallback
  return (
    <AvatarPrimitive.Root
      ref={ref as any}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      <AvatarPrimitive.Image
        className={cn(avatarImageVariants())}
        src={src}
        alt={alt}
      />
      <AvatarPrimitive.Fallback
        className={cn(avatarFallbackVariants({ size }))}
        delayMs={600}
      >
        {getFallbackContent()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

export { Avatar, avatarVariants } 