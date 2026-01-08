"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "white" | "gray" | "gradient" | "gradient-soft"
  container?: boolean
  padding?: "sm" | "md" | "lg" | "xl"
}

const paddingSizes = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
}

const variantStyles = {
  white: "bg-white text-gray-700",
  gray: "bg-gray-50 text-gray-700",
  gradient: "bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange text-gray-700",
  "gradient-soft": "bg-gradient-to-b from-white to-gray-50 text-gray-700",
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({
  children,
  className,
  variant = "white",
  container = true,
  padding = "lg",
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        paddingSizes[padding],
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container relative z-10">{children}</div>
      ) : (
        <div className="relative z-10">{children}</div>
      )}
    </section>
  )
})
Section.displayName = "Section"
