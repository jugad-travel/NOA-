"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
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
    
    const { disabled, onClick, onMouseDown, onMouseUp, onFocus, onBlur } = props
    
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
