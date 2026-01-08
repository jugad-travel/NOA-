"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Star, Heart, Share2, Check, Sparkles, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { getProductById, noaConversations, formatPrice } from "@/lib/demo-data"
import Image from "next/image"

const suggestedQuestions = [
  "Imperméable ?",
  "Compatible terre battue ?",
  "Taille correcte ?",
]

interface DemoNoaExpertProps {
  animationProgress?: number // 0 à 1
}

export function DemoNoaExpert({ animationProgress = 0 }: DemoNoaExpertProps) {
  // Séquence d'animation basée sur le progress
  // Étape 1 (0-0.12) : Sélection couleur noir
  // Étape 2 (0.12-0.25) : Sélection taille 42
  // Étape 3 (0.25-0.40) : Auto scroll vers le bas pour voir la section questions fréquentes
  // Étape 4 (0.40-0.50) : Sélection de la question "Imperméable ?"
  // Étape 5 (0.50-0.60) : Typing
  // Étape 6 (0.60-1.0) : Affichage de la réponse (40% du temps pour bien lire)
  
  const expertSectionRef = React.useRef<HTMLDivElement>(null)
  const rightColumnRef = React.useRef<HTMLDivElement>(null)
  const contentWrapperRef = React.useRef<HTMLDivElement>(null)
  
  // Calculer les états basés sur le progress
  const selectedColor = animationProgress >= 0.12 ? 0 : undefined // Noir sélectionné à partir de 0.12
  const selectedSize = animationProgress >= 0.25 ? 42 : undefined // Taille 42 sélectionnée à partir de 0.25
  const chatStep = animationProgress >= 0.60 ? 3 : animationProgress >= 0.50 ? 2 : animationProgress >= 0.40 ? 1 : 0
  const addedToCart = false
  
  const product = getProductById(noaConversations.expert.product)!
  const initials = product.brand.substring(0, 2).toUpperCase()
  
  // Scroll programmatique pour voir la section questions fréquentes
  // Utilisation de transform sur un wrapper interne pour éviter overflow-y-auto
  React.useEffect(() => {
    const rightColumn = rightColumnRef.current
    const contentWrapper = contentWrapperRef.current
    const expertSection = expertSectionRef.current
    if (!rightColumn || !contentWrapper || !expertSection) return
    
    if (animationProgress >= 0.25) {
      // Calculer le scroll basé sur le progress
      // Étape 3 (0.25-0.40) : Scroll vers la section questions fréquentes
      const scrollProgress = animationProgress < 0.40 
        ? (animationProgress - 0.25) / 0.15 // 0 à 1 entre 0.25 et 0.40
        : 1 // Après 0.40, on reste en bas pour voir la réponse
      
      // Easing pour fluidité (ease-out cubic)
      const easedProgress = 1 - Math.pow(1 - scrollProgress, 3)
      
      // Calculer la position de scroll nécessaire
      const containerHeight = rightColumn.clientHeight
      const contentHeight = contentWrapper.scrollHeight
      const sectionTop = expertSection.offsetTop
      const sectionHeight = expertSection.offsetHeight
      
      // Scroller pour voir la section questions fréquentes et la réponse complète
      // On veut voir toute la section, donc on scrolle jusqu'à ce que le bas de la section soit visible
      const targetScroll = Math.max(0, sectionTop + sectionHeight - containerHeight + 20) // +20 pour marge
      const maxScroll = contentHeight - containerHeight
      const scrollAmount = Math.min(maxScroll, Math.max(0, targetScroll * easedProgress))
      
      // Utiliser transform sur le wrapper interne pour le scroll programmatique
      // Utiliser requestAnimationFrame pour fluidité
      requestAnimationFrame(() => {
        if (contentWrapper) {
          contentWrapper.style.transform = `translateY(-${scrollAmount}px)`
        }
      })
    } else if (contentWrapper) {
      contentWrapper.style.transform = 'translateY(0px)'
    }
  }, [animationProgress])
  
  
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
            {(() => {
              // Mapping des images pour trail-pro-x
              const productImageMap: Record<string, string[]> = {
                "trail-pro-x": ["/images/trailprox noires.png", "/images/trailprox bleu .png"],
              }
              const productImages = productImageMap[product.id] || []
              const mainImage = productImages[selectedColor !== undefined ? selectedColor : 0] || null
              
              return (
                <>
                  <div className="aspect-square rounded-2xl relative overflow-hidden">
                    {mainImage ? (
                      <Image
                        src={mainImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 300px"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center text-4xl font-normal text-white"
                        style={{ backgroundColor: (selectedColor !== undefined && product.colors[selectedColor]) ? product.colors[selectedColor].hex : "#6b7280" }}
                      >
                        {initials}
                      </div>
                    )}
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      {product.isBestSeller && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white font-medium">
                          Best-seller
                        </span>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
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
                    {productImages.length > 0 ? (
                      productImages.map((img, idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "w-14 h-14 rounded-lg overflow-hidden cursor-pointer transition-all relative",
                            selectedColor === idx ? "ring-2 ring-gray-900" : "opacity-60 hover:opacity-100"
                          )}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} couleur ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      ))
                    ) : (
                      [0, 1, 2].map((idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "w-14 h-14 rounded-lg flex items-center justify-center text-xs font-normal text-white cursor-pointer transition-all",
                            idx === 0 ? "ring-2 ring-gray-900" : "opacity-60 hover:opacity-100"
                          )}
                          style={{ backgroundColor: product.colors[0]?.hex || "#6b7280" }}
                        >
                          {initials}
                        </div>
                      ))
                    )}
                  </div>
                </>
              )
            })()}
          </div>
          
          {/* Right - Product Info */}
          <div ref={rightColumnRef} className="w-1/2 overflow-hidden relative">
            <div ref={contentWrapperRef} className="p-4" style={{ willChange: 'transform' }}>
            {/* Header */}
            <div className="mb-3">
              <p className="text-xs text-gray-500">{product.brand}</p>
              <h1 className="text-lg font-normal text-gray-900">{product.name}</h1>
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
              <span className="text-xl font-normal text-gray-900">{formatPrice(product.price)}</span>
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
              <p className="text-xs text-gray-500 mb-1.5">Couleur: <span className="text-gray-900 font-medium">{selectedColor !== undefined ? product.colors[selectedColor]?.name : product.colors[0]?.name}</span></p>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <motion.div
                    key={color.name}
                    animate={selectedColor === idx ? { scale: [1, 0.95, 1] } : {}}
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
                  <motion.div
                    key={size}
                    animate={selectedSize === size ? { scale: [1, 0.95, 1] } : {}}
                    className={cn(
                      "w-9 h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center leading-none",
                      selectedSize === size
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700"
                      )}
                    style={{ lineHeight: '1' }}
                  >
                    {size}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Add to cart */}
            <div 
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
            </div>
            
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
            <div ref={expertSectionRef} className="mt-4 bg-gray-50 rounded-xl p-3">
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
                    animate={chatStep >= 1 && idx === 0 ? { scale: [1, 0.98, 1], backgroundColor: ["#ffffff", "#e5e7eb", "#e5e7eb"] } : {}}
                    className={cn(
                      "w-full text-left text-[10px] px-2 py-1.5 rounded-lg border transition-all",
                      chatStep >= 1 && idx === 0 
                        ? "bg-gray-100 border-gray-300 text-gray-900" 
                        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
                    )}
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
      </div>
    </SafariWindow>
  )
}

