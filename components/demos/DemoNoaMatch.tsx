"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Star, Sparkles, Filter } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { chaussures, noaConversations, formatPrice } from "@/lib/demo-data"

const filters = {
  sizes: [39, 40, 41, 42, 43, 44, 45],
  brands: ["Salomon", "Merrell", "Adidas"],
  priceRanges: ["< 150€", "150-200€", "> 200€"],
}

interface DemoNoaMatchProps {
  animationProgress?: number // 0 à 1
}

export function DemoNoaMatch({ animationProgress = 0 }: DemoNoaMatchProps) {
  // Calculer les étapes basées sur le progress - Timing optimisé pour fluidité et visibilité
  // Étape 1 (0-0.15) : Message utilisateur "Je cherche des chaussures..."
  // Étape 2 (0.15-0.30) : Typing
  // Étape 3 (0.30-0.50) : Réponse NOA + sélection taille 42 (temps pour lire)
  // Étape 4 (0.50-1.0) : Carte produit s'encadre en bleu (50% pour bien voir)
  
  const productGridRef = React.useRef<HTMLDivElement>(null)
  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const chatStep = animationProgress >= 0.50 ? 3 : animationProgress >= 0.30 ? 3 : animationProgress >= 0.15 ? 2 : animationProgress >= 0.08 ? 1 : 0
  const selectedSize = animationProgress >= 0.30 ? 42 : null
  const highlightedProduct = animationProgress >= 0.50 ? noaConversations.match.highlightProduct : null
  
  // Le scroll dans les fenêtres est uniquement contrôlé par animationProgress
  // Pas de blocage - le scroll de la page fonctionne toujours
  
  // Scroll synchronisé avec le progress (contrôlé uniquement par le scroll de la page)
  React.useEffect(() => {
    const productGrid = productGridRef.current
    if (productGrid && highlightedProduct && animationProgress >= 0.50) {
      // Calculer le scroll basé sur le progress pour voir la carte mise en avant
      const scrollProgress = (animationProgress - 0.50) / 0.50 // 0 à 1 entre 0.50 et 1.0
      const highlightedCard = productGrid.querySelector(`[data-product-id="${highlightedProduct}"]`) as HTMLElement
      if (highlightedCard) {
        const cardRelativeTop = highlightedCard.offsetTop
        const containerHeight = productGrid.clientHeight
        const cardHeight = highlightedCard.offsetHeight
        // Centrer la carte dans la vue
        const targetScroll = Math.max(0, cardRelativeTop - (containerHeight / 2) + (cardHeight / 2))
        // Scroller directement mais de manière fluide grâce au scrub de GSAP
        productGrid.scrollTop = targetScroll * scrollProgress
      }
    }
  }, [animationProgress, highlightedProduct])
  
  return (
    <SafariWindow url="shop.outdoor-expert.fr/chaussures" className="w-full">
      <div className="h-[500px] overflow-hidden">
        {/* Breadcrumb */}
        <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-1 text-[10px] text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">Accueil</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">Chaussures de randonnée</span>
        </div>
        
        <div className="flex h-[calc(100%-32px)]">
          {/* Sidebar - Filters + NOA */}
          <div ref={sidebarRef} className="w-48 border-r border-gray-100 p-3 flex flex-col gap-4 overflow-hidden">
              {/* Filters */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Filter className="w-3 h-3 text-gray-400" />
                <span className="text-xs font-semibold text-gray-900">Filtres</span>
              </div>
              
              {/* Size filter */}
              <div className="mb-3">
                <p className="text-[10px] text-gray-500 mb-1.5">Pointure</p>
                <div className="flex flex-wrap gap-1">
                  {filters.sizes.map((size) => (
                    <div
                      key={size}
                      className={cn(
                        "w-7 h-7 rounded-lg text-[10px] font-medium transition-all",
                        selectedSize === size
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brand filter */}
              <div className="mb-3">
                <p className="text-[10px] text-gray-500 mb-1.5">Marque</p>
                <div className="space-y-1">
                  {filters.brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                      <span className="text-[10px] text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* NOA Assistant */}
            <div className="bg-gray-50 rounded-xl p-3 flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-5 h-5 rounded-md bg-gray-900 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-gray-900">NOA vous aide</span>
              </div>
              
              <div className="space-y-2">
                {/* User message */}
                <AnimatePresence>
                  {chatStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg px-2 py-1.5 text-[10px] text-gray-700 border border-gray-200"
                    >
                      {noaConversations.match.userMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Typing */}
                <AnimatePresence>
                  {chatStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gray-900 rounded-lg px-2 py-1.5"
                    >
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "300ms" }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* NOA response */}
                <AnimatePresence>
                  {chatStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-900 text-white rounded-lg px-2 py-1.5 text-[10px]"
                    >
                      {noaConversations.match.noaResponse}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div ref={productGridRef} className="flex-1 p-3 overflow-hidden">
              <div className="flex items-center justify-between mb-3">
              <h1 className="text-sm font-normal text-gray-900">Chaussures de randonnée</h1>
              <span className="text-[10px] text-gray-500">{chaussures.length} produits</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {chaussures.map((product) => {
                const initials = product.brand.substring(0, 2).toUpperCase()
                const isHighlighted = highlightedProduct === product.id
                
                return (
                  <motion.div
                    key={product.id}
                    data-product-id={product.id}
                    animate={isHighlighted ? { 
                      scale: 1.02,
                    } : {
                      scale: 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "rounded-xl border overflow-hidden cursor-pointer transition-all",
                      isHighlighted 
                        ? "border-blue-500 ring-4 ring-blue-300 shadow-lg" 
                        : "border-gray-200"
                    )}
                    style={isHighlighted ? {
                      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    } : {}}
                  >
                    {/* Product image */}
                    <div 
                      className="aspect-square flex items-center justify-center text-sm font-normal text-white relative"
                      style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
                    >
                      {initials}
                      
                      {/* Badges */}
                      {product.isBestSeller && (
                        <span className="absolute top-1 left-1 text-[8px] px-1.5 py-0.5 rounded-full bg-orange-500 text-white font-medium">
                          Best
                        </span>
                      )}
                      {product.isNew && (
                        <span className="absolute top-1 left-1 text-[8px] px-1.5 py-0.5 rounded-full bg-blue-500 text-white font-medium">
                          New
                        </span>
                      )}
                      
                      {/* Highlighted badge */}
                      {isHighlighted && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center"
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="p-2">
                      <p className="text-[9px] text-gray-500">{product.brand}</p>
                      <p className="text-[10px] font-medium text-gray-900 truncate">{product.name}</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-[9px] text-gray-600">{product.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[10px] font-normal text-gray-900">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-[9px] text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SafariWindow>
  )
}

