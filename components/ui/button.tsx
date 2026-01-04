"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF56E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#FFF56E] text-[#0F0F0F] hover:bg-[#FFF899] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_20px_rgba(255,245,110,0.15)]",
        secondary:
          "bg-[#1A1A1A] text-white border border-gray-700 hover:border-[#FFF56E]/50 hover:bg-[#141414]",
        ghost:
          "text-gray-400 hover:text-white hover:bg-white/5",
        outline:
          "border border-gray-600 text-white hover:border-[#FFF56E] hover:text-[#FFF56E]",
        link:
          "text-[#FFF56E] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
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
      
      x.set(distanceX * 0.2)
      y.set(distanceY * 0.2)
    }
    
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }
    
    // Extract only the native button props (remove magnetic and asChild)
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
            whileHover={{ scale: 1.02 }}
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
