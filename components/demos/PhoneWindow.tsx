"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PhoneWindowProps {
  url?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function PhoneWindow({ 
  url = "shop.outdoor-expert.fr", 
  children, 
  className,
  contentClassName 
}: PhoneWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mx-auto rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-900 bg-gray-900",
        "max-w-[375px] w-full", // Taille standard d'un iPhone
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
      
      {/* Status bar */}
      <div className="h-8 bg-gray-900 flex items-center justify-between px-4 pt-1 text-white text-[10px] font-medium z-10 relative">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.778 8.222a7.966 7.966 0 01-1.293 1.293 3.75 3.75 0 001.433-2.906 3.75 3.75 0 00-2.906-1.433 7.966 7.966 0 01-1.293-1.293A3.75 3.75 0 0016.5 2.75a3.75 3.75 0 00-2.906 1.433 7.966 7.966 0 01-1.293-1.293A3.75 3.75 0 0010 2.75a3.75 3.75 0 00-2.906 1.433 7.966 7.966 0 01-1.293 1.293A3.75 3.75 0 003.5 2.75a3.75 3.75 0 00-2.906 1.433 7.966 7.966 0 01-1.293 1.293A3.75 3.75 0 000 6.5a3.75 3.75 0 001.433 2.906 7.966 7.966 0 011.293 1.293A3.75 3.75 0 003.5 11a3.75 3.75 0 002.906-1.433 7.966 7.966 0 011.293-1.293A3.75 3.75 0 0010 11a3.75 3.75 0 002.906-1.433 7.966 7.966 0 011.293-1.293A3.75 3.75 0 0016.5 11a3.75 3.75 0 002.906-1.433 7.966 7.966 0 011.293-1.293A3.75 3.75 0 0020 6.5a3.75 3.75 0 00-1.433-2.906z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Browser bar */}
      <div className="h-12 bg-gray-50 flex items-center px-3 gap-2 border-b border-gray-200">
        {/* Back button */}
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* URL bar */}
        <div className="flex-1">
          <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 border border-gray-200">
            <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[10px] text-gray-600 font-medium truncate">{url}</span>
          </div>
        </div>
        
        {/* Menu button */}
        <button className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      
      {/* Content area */}
      <div className={cn("bg-white overflow-hidden", contentClassName)}>
        {children}
      </div>
      
      {/* Home indicator */}
      <div className="h-1 bg-gray-900 flex items-center justify-center">
        <div className="w-32 h-1 bg-gray-400 rounded-full" />
      </div>
    </motion.div>
  )
}

