"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SafariWindowProps {
  url?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function SafariWindow({ 
  url = "shop.outdoor-expert.fr", 
  children, 
  className,
  contentClassName 
}: SafariWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 bg-white",
        className
      )}
    >
      {/* Title bar - Safari style */}
      <div className="h-11 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center px-4 gap-3 border-b border-gray-200/60">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#28CA41] shadow-inner" />
        </div>
        
        {/* URL bar */}
        <div className="flex-1 max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-1.5 flex items-center gap-2 border border-gray-200/60 shadow-sm">
            {/* Lock icon */}
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-gray-600 font-medium truncate">{url}</span>
          </div>
        </div>
        
        {/* Spacer for balance */}
        <div className="w-14" />
      </div>
      
      {/* Content area */}
      <div className={cn("bg-white overflow-hidden", contentClassName)}>
        {children}
      </div>
    </motion.div>
  )
}

