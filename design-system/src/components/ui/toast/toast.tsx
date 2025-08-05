"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--background-color-container)",
          "--normal-text": "var(--text-color-primary)",
          "--normal-border": "var(--border-color-weak)",
          "--success-bg": "var(--color-success-light)",
          "--success-text": "var(--color-success-strong)",
          "--success-border": "var(--color-success-base)",
          "--warning-bg": "var(--color-warning-light)",
          "--warning-text": "var(--color-warning-strong)",
          "--warning-border": "var(--color-warning-base)",
          "--error-bg": "var(--color-destructive-light)",
          "--error-text": "var(--color-destructive-strong)",
          "--error-border": "var(--color-destructive-base)",
        } as React.CSSProperties
      }
      closeButton={true}
      {...props}
    />
  )
}

export { Toaster } 