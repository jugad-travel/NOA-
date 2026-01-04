"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "light" | "glass" | "gradient"
  container?: boolean
  padding?: "sm" | "md" | "lg" | "xl"
  noise?: boolean
}

const paddingSizes = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
}

const variantStyles = {
  dark: "bg-dark-200 text-white",
  light: "bg-gray-50 text-dark-200",
  glass: "bg-white/5 backdrop-blur-xl text-white",
  gradient: "bg-gradient-to-b from-dark-200 to-dark-100 text-white",
}

export function Section({
  children,
  className,
  variant = "dark",
  container = true,
  padding = "lg",
  noise = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        paddingSizes[padding],
        noise && "noise-overlay",
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
}

