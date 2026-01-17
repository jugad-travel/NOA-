"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "white" | "gray" | "gradient" | "gradient-soft" | "dark"
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
  white: "bg-white text-gray-700",
  gray: "text-gray-700",
  gradient: "bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange text-gray-700",
  "gradient-soft": "bg-gradient-to-b from-white text-gray-700",
  dark: "bg-gray-900 text-white",
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({
  children,
  className,
  variant = "white",
  container = true,
  padding = "lg",
  noise = false,
  style,
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        paddingSizes[padding],
        noise && "before:absolute before:inset-0 before:opacity-[0.015] before:pointer-events-none before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCBpbi0ibm9pc2UiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')] before:bg-repeat",
        className
      )}
      style={{
        ...(variant === "gray" && { backgroundColor: "#fcf2f8" }),
        ...style,
      }}
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
