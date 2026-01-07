"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  id?: string
  onClick?: () => void
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, gradient = false, children, id, onClick }, ref) => {
    const baseStyles = "rounded-2xl p-6 transition-all duration-300"
    const defaultStyles = gradient 
      ? "bg-white border-2 border-transparent bg-clip-padding" 
      : "bg-white border border-gray-200"
    const hoverStyles = hover ? "hover:shadow-lg hover:border-gray-300 hover:-translate-y-1" : ""
    const clickableStyles = onClick ? "cursor-pointer" : ""
    
    if (hover) {
      return (
        <motion.div
          ref={ref}
          id={id}
          onClick={onClick}
          className={cn(baseStyles, defaultStyles, hoverStyles, clickableStyles, className)}
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
        className={cn(baseStyles, defaultStyles, hoverStyles, clickableStyles, className)}
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
    className={cn("text-xl font-semibold leading-none tracking-tight text-gray-900", className)}
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
    className={cn("text-sm text-gray-500", className)}
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
