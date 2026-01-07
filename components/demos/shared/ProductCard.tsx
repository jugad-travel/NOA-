"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, ShoppingCart, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Product, formatPrice } from "@/lib/demo-data"

interface ProductCardProps {
  product: Product
  variant?: "grid" | "compact" | "horizontal"
  isHighlighted?: boolean
  isAdded?: boolean
  onAddToCart?: () => void
  onClick?: () => void
}

export function ProductCard({
  product,
  variant = "grid",
  isHighlighted = false,
  isAdded = false,
  onAddToCart,
  onClick,
}: ProductCardProps) {
  // Placeholder image avec les initiales de la marque
  const initials = product.brand.substring(0, 2).toUpperCase()
  
  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer",
          isHighlighted 
            ? "border-blue-400 bg-blue-50 shadow-md" 
            : "border-gray-100 bg-white hover:border-gray-200"
        )}
        onClick={onClick}
      >
        {/* Product image placeholder */}
        <div 
          className="w-14 h-14 rounded-lg flex items-center justify-center text-sm font-normal text-white flex-shrink-0"
          style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
        >
          {initials}
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
          <p className="text-xs text-gray-500">{product.brand}</p>
        </div>
        
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-semibold text-gray-900">{formatPrice(product.price)}</p>
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart()
              }}
              className={cn(
                "mt-1 flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all",
                isAdded
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {isAdded ? (
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
          )}
        </div>
      </motion.div>
    )
  }
  
  if (variant === "horizontal") {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={cn(
          "flex items-center gap-4 p-4 rounded-xl border transition-all",
          isHighlighted 
            ? "border-blue-400 bg-blue-50 shadow-md" 
            : "border-gray-200 bg-white hover:border-gray-300"
        )}
        onClick={onClick}
      >
        {/* Product image placeholder */}
        <div 
          className="w-20 h-20 rounded-xl flex items-center justify-center text-lg font-normal text-white flex-shrink-0"
          style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
        >
          {initials}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm font-semibold text-gray-900">{product.name}</p>
            {product.isBestSeller && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 font-medium">
                Best-seller
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-2">{product.brand} • {product.category}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews} avis)</span>
          </div>
        </div>
        
        <div className="text-right flex-shrink-0">
          <p className="text-lg font-normal text-gray-900">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
          )}
        </div>
      </motion.div>
    )
  }
  
  // Grid variant (default)
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group rounded-xl border overflow-hidden transition-all cursor-pointer",
        isHighlighted 
          ? "border-blue-400 shadow-lg ring-2 ring-blue-200" 
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      )}
      onClick={onClick}
    >
      {/* Product image placeholder */}
      <div 
        className="aspect-square flex items-center justify-center text-2xl font-normal text-white relative"
        style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
      >
        {initials}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500 text-white font-medium">
              Nouveau
            </span>
          )}
          {product.isBestSeller && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">
              Best-seller
            </span>
          )}
          {product.originalPrice && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500 text-white font-medium">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <p className="text-sm font-medium text-gray-900 mb-2 line-clamp-1">{product.name}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

