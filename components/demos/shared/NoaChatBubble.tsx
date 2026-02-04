"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Message {
  type: "user" | "noa"
  text: string
}

interface NoaChatBubbleProps {
  isOpen?: boolean
  onToggle?: () => void
  messages?: Message[]
  isTyping?: boolean
  inputPlaceholder?: string
  className?: string
  children?: React.ReactNode
  variant?: "floating" | "inline" | "sidebar"
}

export function NoaChatBubble({
  isOpen = false,
  onToggle,
  messages = [],
  isTyping = false,
  inputPlaceholder = "Posez votre question...",
  className,
  children,
  variant = "floating",
}: NoaChatBubbleProps) {
  
  if (variant === "inline") {
    return (
      <div className={cn("bg-white rounded-xl border border-gray-200 overflow-hidden", className)}>
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center p-0 overflow-hidden">
            <Image 
              src="/images/Logo Parcel sans écriture.png"
              alt="PARCEL"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">PARCEL</p>
            <p className="text-[10px] text-gray-500">Assistant IA</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-gray-500">En ligne</span>
          </div>
        </div>
        
        {/* Messages */}
        <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={cn(
                "flex gap-2",
                msg.type === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.type === "noa" && (
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 p-0 overflow-hidden">
                  <Image 
                    src="/images/Logo Parcel sans écriture.png"
                    alt="PARCEL"
                    width={27}
                    height={27}
                    className="object-contain"
                  />
                </div>
              )}
              <div className={cn(
                "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                msg.type === "user"
                  ? "bg-gray-100 text-gray-700 rounded-tr-sm"
                  : "bg-gray-900 text-white rounded-tl-sm"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 p-1">
                <Image 
                  src="/images/Logo Parcel sans écriture.png"
                  alt="PARCEL"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-900 rounded-2xl rounded-tl-sm px-3 py-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
          
          {children}
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <input 
              type="text" 
              placeholder={inputPlaceholder}
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
              readOnly
            />
            <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  if (variant === "sidebar") {
    return (
      <div className={cn("bg-gray-50 rounded-xl p-4", className)}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center p-0 overflow-hidden">
            <Image 
              src="/images/Logo Parcel sans écriture.png"
              alt="PARCEL"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">PARCEL vous aide</p>
          </div>
        </div>
        
        {/* Messages */}
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className={cn(
                "rounded-xl px-3 py-2 text-sm",
                msg.type === "user"
                  ? "bg-white border border-gray-200 text-gray-700"
                  : "bg-gray-900 text-white"
              )}
            >
              {msg.text}
            </motion.div>
          ))}
          
          {isTyping && (
            <div className="bg-gray-900 rounded-xl px-3 py-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          
          {children}
        </div>
      </div>
    )
  }
  
  // Floating variant (default)
  return (
    <>
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className={cn(
          "fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 transition-colors",
          isOpen ? "bg-gray-200" : "bg-gray-900"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              "fixed bottom-20 right-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50",
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center p-1.5">
                <Image 
                  src="/images/Logo Parcel sans écriture.png"
                  alt="PARCEL"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">PARCEL</p>
                <p className="text-[10px] text-gray-500">Conseiller de vente IA</p>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-4 space-y-3 max-h-72 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-2",
                    msg.type === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.type === "noa" && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 p-0 overflow-hidden">
                      <Image 
                        src="/images/Logo Parcel sans écriture.png"
                        alt="PARCEL"
                        width={27}
                        height={27}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className={cn(
                    "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                    msg.type === "user"
                      ? "bg-gray-100 text-gray-700 rounded-tr-sm"
                      : "bg-gray-900 text-white rounded-tl-sm"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 p-0 overflow-hidden">
                    <Image 
                      src="/images/Logo Parcel sans écriture.png"
                      alt="PARCEL"
                      width={27}
                      height={27}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-gray-900 rounded-2xl rounded-tl-sm px-3 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              
              {children}
            </div>
            
            {/* Input */}
            <div className="p-3 border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                <input 
                  type="text" 
                  placeholder={inputPlaceholder}
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
                  readOnly
                />
                <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


