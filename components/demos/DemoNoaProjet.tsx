"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, User, Menu, ChevronRight, MessageCircle, X, Send, Sparkles, ShoppingCart, Check } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { categories, getProductsByIds, noaConversations, formatPrice } from "@/lib/demo-data"

export function DemoNoaProjet() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [chatStep, setChatStep] = React.useState(0)
  const [addedProducts, setAddedProducts] = React.useState<string[]>([])
  
  // Auto-animate chat
  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsChatOpen(true), 1500)
    const timer2 = setTimeout(() => setChatStep(1), 2500) // User message
    const timer3 = setTimeout(() => setChatStep(2), 3500) // Typing
    const timer4 = setTimeout(() => setChatStep(3), 5000) // NOA response + products
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])
  
  const suggestedProducts = getProductsByIds(noaConversations.projet.suggestions)
  
  const handleAddToCart = (productId: string) => {
    if (!addedProducts.includes(productId)) {
      setAddedProducts([...addedProducts, productId])
    }
  }
  
  return (
    <SafariWindow url="shop.outdoor-expert.fr" className="w-full">
      <div className="relative h-[500px] overflow-hidden">
        {/* Mini Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white font-bold text-xs">OE</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">Outdoor Expert</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Chaussures</span>
            <span className="hover:text-gray-900 cursor-pointer">Sacs</span>
            <span className="hover:text-gray-900 cursor-pointer">Vêtements</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" />
            <User className="w-4 h-4 text-gray-400" />
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-gray-400" />
              {addedProducts.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gray-900 rounded-full text-[8px] text-white flex items-center justify-center">
                  {addedProducts.length}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Hero Banner */}
        <div className="relative h-32 bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
          <div className="absolute inset-0 flex items-center px-6">
            <div>
              <p className="text-white/70 text-xs mb-1">Nouvelle collection</p>
              <h1 className="text-white font-bold text-lg mb-2">Équipement Trek 2024</h1>
              <button className="text-xs bg-white text-gray-900 px-3 py-1.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Découvrir
              </button>
            </div>
          </div>
          {/* Mountain silhouette decoration */}
          <div className="absolute bottom-0 right-0 w-48 h-24 opacity-20">
            <svg viewBox="0 0 200 100" fill="white">
              <polygon points="0,100 50,40 80,70 120,20 160,60 200,30 200,100" />
            </svg>
          </div>
        </div>
        
        {/* Categories */}
        <div className="px-4 py-4">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Nos catégories</h2>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-3 text-center cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl mb-1 block">{cat.icon}</span>
                <p className="text-xs font-medium text-gray-900">{cat.name}</p>
                <p className="text-[10px] text-gray-500">{cat.productCount} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* NOA Chat Widget - Floating */}
        <AnimatePresence>
          {!isChatOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsChatOpen(true)}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gray-900 shadow-lg flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-4 right-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">NOA</p>
                    <p className="text-[10px] text-gray-500">Conseiller IA</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Chat Messages */}
              <div className="p-3 space-y-3 h-56 overflow-y-auto">
                {/* Welcome message */}
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-gray-700">
                    Bonjour ! Comment puis-je vous aider ?
                  </div>
                </div>
                
                {/* User message */}
                <AnimatePresence>
                  {chatStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 justify-end"
                    >
                      <div className="bg-gray-900 text-white rounded-2xl rounded-tr-sm px-3 py-2 text-xs">
                        {noaConversations.projet.userMessage}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Typing indicator */}
                <AnimatePresence>
                  {chatStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* NOA response with products */}
                <AnimatePresence>
                  {chatStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-gray-700">
                          {noaConversations.projet.noaResponse}
                        </div>
                      </div>
                      
                      {/* Product suggestions */}
                      <div className="space-y-2 ml-8">
                        {suggestedProducts.map((product, idx) => {
                          const initials = product.brand.substring(0, 2).toUpperCase()
                          const isAdded = addedProducts.includes(product.id)
                          
                          return (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.15 }}
                              className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-100"
                            >
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                                style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
                              >
                                {initials}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-medium text-gray-900 truncate">{product.name}</p>
                                <p className="text-[10px] text-gray-500">{formatPrice(product.price)}</p>
                              </div>
                              <button
                                onClick={() => handleAddToCart(product.id)}
                                className={cn(
                                  "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                  isAdded ? "bg-green-100" : "bg-gray-100 hover:bg-gray-200"
                                )}
                              >
                                {isAdded ? (
                                  <Check className="w-3 h-3 text-green-600" />
                                ) : (
                                  <ShoppingCart className="w-3 h-3 text-gray-600" />
                                )}
                              </button>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Chat Input */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                  <input 
                    type="text" 
                    placeholder="Posez votre question..."
                    className="flex-1 bg-transparent text-xs text-gray-700 placeholder:text-gray-400 outline-none"
                    readOnly
                  />
                  <button className="w-6 h-6 rounded-lg bg-gray-900 flex items-center justify-center">
                    <Send className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SafariWindow>
  )
}

