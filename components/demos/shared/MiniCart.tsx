"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Product, formatPrice } from "@/lib/demo-data"

interface CartItem {
  product: Product
  quantity: number
  selectedSize?: number
}

interface MiniCartProps {
  items: CartItem[]
  onUpdateQuantity?: (productId: string, quantity: number) => void
  onRemove?: (productId: string) => void
  className?: string
}

export function MiniCart({ items, onUpdateQuantity, onRemove, className }: MiniCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 5.90
  const total = subtotal + shipping
  
  return (
    <div className={cn("bg-white rounded-xl border border-gray-200", className)}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-normal text-gray-900 text-sm">Mon panier</h3>
          <span className="text-xs text-gray-500">{items.length} article{items.length > 1 ? "s" : ""}</span>
        </div>
      </div>
      
      {/* Items */}
      <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
        <AnimatePresence>
          {items.map((item) => {
            const initials = item.product.brand.substring(0, 2).toUpperCase()
            
            return (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3 flex gap-3"
              >
                {/* Product image placeholder */}
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-sm font-normal text-white flex-shrink-0"
                  style={{ backgroundColor: item.product.colors[0]?.hex || "#6b7280" }}
                >
                  {initials}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.product.name}</p>
                  <p className="text-xs text-gray-500">{item.product.brand}</p>
                  {item.selectedSize && (
                    <p className="text-xs text-gray-400">Taille: {item.selectedSize}</p>
                  )}
                  
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => onUpdateQuantity?.(item.product.id, Math.max(0, item.quantity - 1))}
                      className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-3 h-3 text-gray-600" />
                    </button>
                    <span className="text-sm font-medium text-gray-900 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity?.(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                  <button 
                    onClick={() => onRemove?.(item.product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      
      {/* Summary */}
      <div className="p-4 border-t border-gray-100 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Sous-total</span>
          <span className="text-gray-900">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Livraison</span>
          <span className={shipping === 0 ? "text-green-600" : "text-gray-900"}>
            {shipping === 0 ? "Gratuite" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-100">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">{formatPrice(total)}</span>
        </div>
        
        {/* Checkout button */}
        <button className="w-full mt-3 h-10 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors">
          Commander
        </button>
      </div>
    </div>
  )
}

// Cart item row for panier demo
export function CartItemRow({ 
  item, 
  onUpdateQuantity,
  onRemove 
}: { 
  item: CartItem
  onUpdateQuantity?: (quantity: number) => void
  onRemove?: () => void 
}) {
  const initials = item.product.brand.substring(0, 2).toUpperCase()
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200"
    >
      {/* Product image */}
      <div 
        className="w-20 h-20 rounded-lg flex items-center justify-center text-lg font-normal text-white flex-shrink-0"
        style={{ backgroundColor: item.product.colors[0]?.hex || "#6b7280" }}
      >
        {initials}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-medium text-gray-900">{item.product.name}</p>
            <p className="text-sm text-gray-500">{item.product.brand}</p>
            {item.selectedSize && (
              <p className="text-sm text-gray-400 mt-1">Taille: {item.selectedSize}</p>
            )}
          </div>
          <button 
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onUpdateQuantity?.(Math.max(1, item.quantity - 1))}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-900 w-6 text-center">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity?.(item.quantity + 1)}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Price */}
          <p className="font-semibold text-gray-900">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

