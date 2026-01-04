"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  glass?: boolean
  id?: string
  onClick?: () => void
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = false, glass = false, children, id, onClick }, ref) => {
    const baseStyles = "rounded-2xl p-6 transition-all duration-300"
    const glassStyles = glass 
      ? "bg-white/5 backdrop-blur-xl border border-white/10" 
      : "bg-[#1A1A1A] border border-gray-800"
    const glowStyles = glow ? "card-glow" : ""
    const clickableStyles = onClick ? "cursor-pointer" : ""
    
    if (glow) {
      return (
        <motion.div
          ref={ref}
          id={id}
          onClick={onClick}
          className={cn(baseStyles, glassStyles, glowStyles, clickableStyles, className)}
          whileHover={{ y: -4 }}
        >
          {children}
        </motion.div>
      )
    }
    
    return (
      <div
        ref={ref}
        id={id}
        onClick={onClick}
        className={cn(baseStyles, glassStyles, glowStyles, clickableStyles, className)}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight text-white", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
