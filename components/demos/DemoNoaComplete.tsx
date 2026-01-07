"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, Minus, Sparkles, Check, ShoppingCart, ArrowRight, Truck, CreditCard } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { getProductById, getProductsByIds, noaConversations, formatPrice } from "@/lib/demo-data"

export function DemoNoaComplete() {
  const [cartItems, setCartItems] = React.useState(() => 
    noaConversations.complete.cartItems.map(id => ({
      product: getProductById(id)!,
      quantity: 1,
      selectedSize: 42,
    }))
  )
  const [chatStep, setChatStep] = React.useState(0)
  const [suggestionAdded, setSuggestionAdded] = React.useState(false)
  
  const suggestedProduct = getProductById(noaConversations.complete.suggestion)!
  
  // Auto-animate
  React.useEffect(() => {
    const timer1 = setTimeout(() => setChatStep(1), 1000) // Typing
    const timer2 = setTimeout(() => setChatStep(2), 2500) // Suggestion
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])
  
  const handleAddSuggestion = () => {
    if (!suggestionAdded) {
      setSuggestionAdded(true)
      setCartItems([...cartItems, {
        product: suggestedProduct,
        quantity: 1,
        selectedSize: 42,
      }])
    }
  }
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 5.90
  const total = subtotal + shipping
  
  return (
    <SafariWindow url="shop.outdoor-expert.fr/panier" className="w-full">
      <div className="h-[500px] overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-sm font-normal text-gray-900">Mon panier ({cartItems.length} articles)</h1>
        </div>
        
        <div className="flex h-[calc(100%-48px)]">
          {/* Left - Cart Items */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <AnimatePresence>
                {cartItems.map((item, idx) => {
                  const initials = item.product.brand.substring(0, 2).toUpperCase()
                  const isNew = idx === cartItems.length - 1 && suggestionAdded
                  
                  return (
                    <motion.div
                      key={item.product.id}
                      initial={isNew ? { opacity: 0, y: 20, scale: 0.95 } : false}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      layout
                      className={cn(
                        "flex gap-3 p-3 rounded-xl border transition-all",
                        isNew ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                      )}
                    >
                      {/* Product image */}
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center text-sm font-normal text-white flex-shrink-0"
                        style={{ backgroundColor: item.product.colors[0]?.hex || "#6b7280" }}
                      >
                        {initials}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-xs font-medium text-gray-900">{item.product.name}</p>
                            <p className="text-[10px] text-gray-500">{item.product.brand} • Taille {item.selectedSize}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity */}
                          <div className="flex items-center gap-1.5">
                            <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Minus className="w-3 h-3 text-gray-600" />
                            </button>
                            <span className="text-xs font-medium text-gray-900 w-4 text-center">{item.quantity}</span>
                            <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Plus className="w-3 h-3 text-gray-600" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <p className="text-sm font-semibold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                        
                        {/* New badge */}
                        {isNew && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-1 mt-2 text-[10px] text-green-600"
                          >
                            <Check className="w-3 h-3" />
                            <span>Ajouté sur recommandation NOA</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
            
            {/* NOA Suggestion */}
            <AnimatePresence>
              {chatStep >= 1 && !suggestionAdded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 bg-gray-50 rounded-xl p-3"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 rounded-md bg-gray-900 flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-900">NOA vous suggère</span>
                  </div>
                  
                  {/* Typing */}
                  {chatStep === 1 && (
                    <div className="bg-gray-900 rounded-lg px-2 py-1.5 inline-block">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                  
                  {/* Suggestion */}
                  {chatStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="bg-gray-900 text-white rounded-lg px-2 py-1.5 text-[10px]">
                        {noaConversations.complete.noaResponse}
                      </div>
                      
                      {/* Suggested product card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-200"
                      >
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-[10px] font-normal text-white flex-shrink-0"
                          style={{ backgroundColor: suggestedProduct.colors[0]?.hex || "#6b7280" }}
                        >
                          {suggestedProduct.brand.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-medium text-gray-900 truncate">{suggestedProduct.name}</p>
                          <p className="text-[10px] text-gray-500">{formatPrice(suggestedProduct.price)}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleAddSuggestion}
                          className="px-2 py-1 rounded-lg bg-gray-900 text-white text-[10px] font-medium flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          Ajouter
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Right - Summary */}
          <div className="w-56 border-l border-gray-100 p-4 bg-gray-50">
            <h2 className="text-sm font-normal text-gray-900 mb-4">Récapitulatif</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Sous-total</span>
                <span className="text-gray-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Livraison</span>
                <span className={shipping === 0 ? "text-green-600" : "text-gray-900"}>
                  {shipping === 0 ? "Gratuite" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                <span className="text-gray-900">Total</span>
                <motion.span
                  key={total}
                  initial={{ scale: 1.1, color: "#16a34a" }}
                  animate={{ scale: 1, color: "#111827" }}
                  className="text-gray-900"
                >
                  {formatPrice(total)}
                </motion.span>
              </div>
            </div>
            
            {/* Promo code */}
            <div className="mb-4">
              <div className="flex gap-1.5">
                <input 
                  type="text"
                  placeholder="Code promo"
                  className="flex-1 h-8 px-2 text-[10px] rounded-lg border border-gray-200 bg-white outline-none focus:border-gray-400"
                />
                <button className="h-8 px-3 text-[10px] font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Appliquer
                </button>
              </div>
            </div>
            
            {/* Checkout button */}
            <button className="w-full h-10 bg-gray-900 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <CreditCard className="w-4 h-4" />
              Commander
            </button>
            
            {/* Guarantees */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <Truck className="w-3 h-3" />
                <span>Livraison gratuite dès 100€</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <Check className="w-3 h-3" />
                <span>Paiement sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SafariWindow>
  )
}

