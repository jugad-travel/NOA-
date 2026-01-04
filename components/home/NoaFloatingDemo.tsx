"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Check, MessageCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    name: "Chaussures Trail Pro X",
    price: "149€",
    image: "🥾",
    category: "Chaussures",
  },
  {
    name: "Sac à dos 25L Ultra",
    price: "89€",
    image: "🎒",
    category: "Bagagerie",
  },
  {
    name: "Bâtons carbone légers",
    price: "79€",
    image: "🥢",
    category: "Accessoires",
  },
]

export function NoaFloatingDemo() {
  const [isTyping, setIsTyping] = React.useState(true)
  const [showResponse, setShowResponse] = React.useState(false)
  const [addedProducts, setAddedProducts] = React.useState<number[]>([])
  
  React.useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false)
      setShowResponse(true)
    }, 2000)
    
    return () => clearTimeout(typingTimer)
  }, [])
  
  const handleAddToCart = (index: number) => {
    if (!addedProducts.includes(index)) {
      setAddedProducts([...addedProducts, index])
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full" />
      
      {/* Main glass panel */}
      <div className="relative glass rounded-3xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-dark-200" />
          </div>
          <div>
            <h4 className="text-white font-semibold">NOA</h4>
            <p className="text-xs text-gray-400">Conseiller de vente IA</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-400">En ligne</span>
          </div>
        </div>
        
        {/* User message */}
        <div className="mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <span className="text-sm">👤</span>
            </div>
            <div className="bg-gray-800/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
              <p className="text-white text-sm">Je pars une semaine faire le GR20</p>
            </div>
          </div>
        </div>
        
        {/* NOA response */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm">✨</span>
              </div>
              <div className="bg-brand/10 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand animate-typing" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand animate-typing" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand animate-typing" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Response message */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✨</span>
                </div>
                <div className="bg-brand/10 border border-brand/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
                  <p className="text-white text-sm leading-relaxed">
                    Excellent choix ! Le GR20 est exigeant. Voici un pack complet adapté à votre trek d'une semaine :
                  </p>
                </div>
              </div>
              
              {/* Product cards */}
              <div className="space-y-3 mb-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                    className="flex items-center gap-3 bg-dark-50/50 rounded-xl p-3 border border-white/5 hover:border-brand/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                      {product.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{product.name}</p>
                      <p className="text-gray-400 text-xs">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand font-semibold text-sm">{product.price}</p>
                      <button
                        onClick={() => handleAddToCart(index)}
                        className={cn(
                          "mt-1 flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all",
                          addedProducts.includes(index)
                            ? "bg-green-500/20 text-green-400"
                            : "bg-brand/20 text-brand hover:bg-brand/30"
                        )}
                      >
                        {addedProducts.includes(index) ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Ajouté</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3 h-3" />
                            <span>Ajouter</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-brand/5 border border-brand/20 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Pack GR20 complet</span>
                  <span className="text-brand font-bold">317€</span>
                </div>
                <button className="w-full bg-brand text-dark-200 font-semibold py-3 rounded-xl hover:bg-brand-300 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter au panier
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Input bar (fake) */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3">
            <MessageCircle className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500 text-sm">Posez votre question à NOA...</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

