"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary - clean black
        primary:
          "bg-gray-900 text-white hover:bg-gray-800",
        // Secondary - subtle outline
        secondary:
          "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
        // Outline - subtle border
        outline:
          "border-2 border-gray-200 text-gray-700 bg-white hover:border-gray-300 hover:bg-gray-50",
        // Ghost - minimal
        ghost:
          "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
        // White - for dark backgrounds
        white:
          "bg-white text-gray-700 hover:bg-gray-50 shadow-sm",
        // Link style
        link:
          "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-sm",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  magnetic?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = false, children, type = "button", ...props }, ref) => {
    const buttonRef = React.useRef<HTMLDivElement>(null)
    
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const springConfig = { damping: 15, stiffness: 150 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magnetic || !buttonRef.current) return
      
      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      x.set(distanceX * 0.15)
      y.set(distanceY * 0.15)
    }
    
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }
    
    const { disabled, onClick, onMouseDown, onMouseUp, onFocus, onBlur, ...restProps } = props
    
    if (magnetic) {
      return (
        <motion.div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          className="inline-block"
        >
          <motion.button
            ref={ref}
            type={type}
            disabled={disabled}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onFocus={onFocus}
            onBlur={onBlur}
            className={cn(buttonVariants({ variant, size, className }))}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.button>
        </motion.div>
      )
    }
    
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onFocus={onFocus}
        onBlur={onBlur}
        className={cn(buttonVariants({ variant, size, className }))}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
