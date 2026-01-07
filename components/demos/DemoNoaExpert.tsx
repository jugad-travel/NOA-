"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Star, Heart, Share2, Check, Sparkles, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { getProductById, noaConversations, formatPrice } from "@/lib/demo-data"

const suggestedQuestions = [
  "Compatible terre battue ?",
  "Imperméable ?",
  "Taille correcte ?",
]

export function DemoNoaExpert() {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(42)
  const [selectedColor, setSelectedColor] = React.useState(0)
  const [chatStep, setChatStep] = React.useState(0)
  const [addedToCart, setAddedToCart] = React.useState(false)
  
  const product = getProductById(noaConversations.expert.product)!
  const initials = product.brand.substring(0, 2).toUpperCase()
  
  // Auto-animate
  React.useEffect(() => {
    const timer1 = setTimeout(() => setChatStep(1), 1500) // Question clicked
    const timer2 = setTimeout(() => setChatStep(2), 2000) // Typing
    const timer3 = setTimeout(() => setChatStep(3), 3500) // Response
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])
  
  return (
    <SafariWindow url={`shop.outdoor-expert.fr/p/${product.id}`} className="w-full">
      <div className="h-[500px] overflow-hidden">
        {/* Breadcrumb */}
        <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-1 text-[10px] text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">Accueil</span>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-gray-900 cursor-pointer">Chaussures</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>
        
        <div className="flex h-[calc(100%-32px)]">
          {/* Left - Product Image */}
          <div className="w-1/2 p-4">
            <div 
              className="aspect-square rounded-2xl flex items-center justify-center text-4xl font-bold text-white relative"
              style={{ backgroundColor: product.colors[selectedColor]?.hex || "#6b7280" }}
            >
              {initials}
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.isBestSeller && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">
                    Best-seller
                  </span>
                )}
              </div>
              
              {/* Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {[0, 1, 2].map((idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "w-14 h-14 rounded-lg flex items-center justify-center text-xs font-bold text-white cursor-pointer transition-all",
                    idx === 0 ? "ring-2 ring-gray-900" : "opacity-60 hover:opacity-100"
                  )}
                  style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Product Info */}
          <div className="w-1/2 p-4 overflow-y-auto">
            {/* Header */}
            <div className="mb-3">
              <p className="text-xs text-gray-500">{product.brand}</p>
              <h1 className="text-lg font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-900">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({product.reviews} avis)</span>
              </div>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-medium">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
            
            {/* Color selection */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1.5">Couleur: <span className="text-gray-900 font-medium">{product.colors[selectedColor]?.name}</span></p>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(idx)}
                    className={cn(
                      "w-8 h-8 rounded-full transition-all",
                      selectedColor === idx ? "ring-2 ring-offset-2 ring-gray-900" : ""
                    )}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
            
            {/* Size selection */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1.5">Pointure</p>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-9 h-9 rounded-lg text-xs font-medium transition-all",
                      selectedSize === size
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to cart */}
            <button 
              onClick={() => setAddedToCart(true)}
              className={cn(
                "w-full h-10 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all",
                addedToCart 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-900 text-white hover:bg-gray-800"
              )}
            >
              {addedToCart ? (
                <>
                  <Check className="w-4 h-4" />
                  Ajouté au panier
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter au panier
                </>
              )}
            </button>
            
            {/* Guarantees */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Truck className="w-3 h-3" />
                <span>Livraison 48h</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <RotateCcw className="w-3 h-3" />
                <span>Retour 30j</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Shield className="w-3 h-3" />
                <span>Garantie 2 ans</span>
              </div>
            </div>
            
            {/* NOA Expert Section */}
            <div className="mt-4 bg-gray-50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-5 h-5 rounded-md bg-gray-900 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-gray-900">Questions fréquentes</span>
              </div>
              
              {/* Suggested questions */}
              <div className="space-y-1.5 mb-3">
                {suggestedQuestions.map((q, idx) => (
                  <motion.button
                    key={q}
                    animate={chatStep >= 1 && idx === 0 ? { scale: [1, 0.98, 1], backgroundColor: ["#f3f4f6", "#e5e7eb", "#e5e7eb"] } : {}}
                    className="w-full text-left text-[10px] px-2 py-1.5 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
              
              {/* Chat response */}
              <AnimatePresence>
                {chatStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2"
                  >
                    {/* Typing */}
                    {chatStep === 2 && (
                      <div className="bg-gray-900 rounded-lg px-2 py-1.5">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    )}
                    
                    {/* Response */}
                    {chatStep >= 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-gray-900 text-white rounded-lg px-2 py-1.5 text-[10px]"
                      >
                        {noaConversations.expert.noaResponse}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SafariWindow>
  )
}

