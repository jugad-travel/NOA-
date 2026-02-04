"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, Minus, Check, ShoppingCart, ArrowRight, Truck, CreditCard, Menu } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { PhoneWindow } from "./PhoneWindow"
import { cn } from "@/lib/utils"
import { getProductById, getProductsByIds, noaConversations, formatPrice } from "@/lib/demo-data"
import Image from "next/image"

interface DemoNoaCompleteProps {
  animationProgress?: number // 0 à 1
}

export function DemoNoaComplete({ animationProgress = 0 }: DemoNoaCompleteProps) {
  const [isMobile, setIsMobile] = React.useState(false)
  const [showSummary, setShowSummary] = React.useState(false)
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const WindowComponent = isMobile ? PhoneWindow : SafariWindow
  
  // Calculer les étapes basées sur le progress - Timing optimisé pour fluidité et visibilité
  // Étape 1 (0-0.10) : Typing
  // Étape 2 (0.10-0.70) : Suggestion PARCEL (temps pour lire - 60% du temps)
  // Étape 3 (0.70-1.0) : Ajout de la suggestion au panier (30% pour bien voir)
  
  const cartItemsRef = React.useRef<HTMLDivElement>(null)
  const baseChatStep = animationProgress >= 0.10 ? 2 : animationProgress >= 0.05 ? 1 : 0
  // Sur mobile, afficher toutes les étapes par défaut (chatStep = 2 pour voir la suggestion)
  const chatStep = isMobile ? 2 : baseChatStep
  const suggestionAdded = animationProgress >= 0.70
  
  const suggestedProduct = getProductById(noaConversations.complete.suggestion)!
  
  // Scroll synchronisé pour voir la suggestion PARCEL quand elle apparaît
  // Désactivé sur mobile pour permettre le scroll manuel
  const noaSuggestionRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    if (isMobile) return // Pas d'autoscroll sur mobile
    
    const cartItems = cartItemsRef.current
    const noaSuggestion = noaSuggestionRef.current
    if (cartItems && noaSuggestion && animationProgress >= 0.10) {
      // Calculer le progress de scroll (0 à 1 entre 0.10 et 1.0)
      const scrollProgress = Math.min(1, (animationProgress - 0.10) / 0.90)
      const suggestionTop = noaSuggestion.offsetTop
      const containerHeight = cartItems.clientHeight
      const suggestionHeight = noaSuggestion.offsetHeight
      // Scroller pour voir la suggestion (avec un peu de marge en haut)
      const targetScroll = Math.max(0, suggestionTop - 20)
      const maxScroll = cartItems.scrollHeight - containerHeight
      // Scroller progressivement pour voir la suggestion
      cartItems.scrollTop = Math.min(maxScroll, targetScroll * scrollProgress)
    }
  }, [animationProgress, isMobile])
  
  // Bloquer le scroll manuel dans la fenêtre - le scroll est uniquement programmatique via animationProgress
  // Le scroll de la page fonctionne toujours, même quand le curseur est au-dessus de la fenêtre
  // Sur mobile, permettre le scroll manuel
  React.useEffect(() => {
    if (isMobile) return // Sur mobile, permettre le scroll manuel
    
    const cartItems = cartItemsRef.current
    if (!cartItems) return
    
    const handleWheel = (e: WheelEvent) => {
      const canScrollDown = cartItems.scrollTop < cartItems.scrollHeight - cartItems.clientHeight - 1
      const canScrollUp = cartItems.scrollTop > 0
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0
      
      // Bloquer seulement si on peut encore scroller dans cette direction dans la fenêtre
      // Sinon, laisser passer le scroll à la page
      if ((scrollingDown && canScrollDown) || (scrollingUp && canScrollUp)) {
        e.preventDefault()
      }
      // Ne pas utiliser stopPropagation pour que le scroll de la page fonctionne toujours
    }
    
    cartItems.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      cartItems.removeEventListener('wheel', handleWheel)
    }
  }, [isMobile])
  
  // Calculer les items du panier
  const cartItems = React.useMemo(() => {
    const baseItems = noaConversations.complete.cartItems.map(id => ({
      product: getProductById(id)!,
      quantity: 1,
      selectedSize: 42,
    }))
    
    if (suggestionAdded) {
      return [...baseItems, {
        product: suggestedProduct,
        quantity: 1,
        selectedSize: 42,
      }]
    }
    return baseItems
  }, [suggestionAdded, suggestedProduct])
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 5.90
  const total = subtotal + shipping
  
  return (
    <WindowComponent url="shop.outdoor-expert.fr/panier" className="w-full">
      <div className={cn("flex flex-col", isMobile ? "h-[600px] overflow-y-auto" : "h-[400px] md:h-[500px] overflow-hidden")}>
        {isMobile ? (
          <>
            {/* Mobile Header with PARCEL logo */}
            <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Parcel</span>
              </div>
              <button className="p-1">
                <Menu className="w-5 h-5 text-gray-900" />
              </button>
            </div>
            
            {/* Mobile Title */}
            <div className="px-3 py-2 border-b border-gray-100 bg-white">
              <h1 className="text-base font-normal text-gray-900">
                Mon panier <span className="text-gray-500">({cartItems.length} articles)</span>
              </h1>
            </div>
            
            {/* Mobile Cart Items - Scrollable */}
            <div ref={cartItemsRef} className="flex-1 overflow-y-auto bg-white px-3 py-2">
            <div className="space-y-2.5">
              <AnimatePresence>
                {cartItems.map((item, idx) => {
                  const initials = item.product.brand.substring(0, 2).toUpperCase()
                  const isNew = idx === cartItems.length - 1 && suggestionAdded
                  
                  // Mapping des images pour les produits du panier
                  const productImageMap: Record<string, string> = {
                    "trail-pro-x": "/images/trailprox noires.png",
                    "osprey-atmos-65": "/images/atmos AG 65.png",
                    "chaussettes-icebreaker": "/images/Hike + Medium Crew.png",
                  }
                  const productImage = productImageMap[item.product.id]
                  
                  return (
                    <motion.div
                      key={item.product.id}
                      initial={isNew ? { opacity: 0, y: 20, scale: 0.95 } : false}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      layout
                      className={cn(
                        "flex gap-2.5 p-2.5 rounded-lg border transition-all",
                        isNew ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                      )}
                    >
                      {/* Product image */}
                      {productImage ? (
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={productImage}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            style={item.product.id === "osprey-atmos-65" ? { objectPosition: "center top" } : undefined}
                            sizes="80px"
                          />
                        </div>
                      ) : (
                        <div 
                          className="w-20 h-20 rounded-lg flex items-center justify-center text-sm font-normal text-white flex-shrink-0"
                          style={{ backgroundColor: item.product.colors[0]?.hex || "#6b7280" }}
                        >
                          {initials}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 leading-tight">{item.product.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.product.brand} • Taille {item.selectedSize}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 transition-colors ml-2 flex-shrink-0">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity */}
                          <div className="flex items-center gap-2">
                            <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Minus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                            <span className="text-sm font-medium text-gray-900 w-6 text-center">{item.quantity}</span>
                            <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                              <Plus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <p className="text-base font-semibold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                        
                        {/* New badge */}
                        {isNew && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-1 mt-1.5 text-xs text-green-600"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Ajouté sur recommandation PARCEL</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            
            {/* PARCEL Suggestion */}
            <AnimatePresence>
              {chatStep >= 1 && !suggestionAdded && (
                <motion.div
                  ref={noaSuggestionRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 bg-gray-50 rounded-xl p-3"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-5 rounded-md bg-gray-200 flex items-center justify-center p-0 overflow-hidden">
                      <Image 
                        src="/images/Logo Parcel sans écriture.png"
                        alt="PARCEL"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-900">PARCEL vous suggère</span>
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
                        {/* Product image */}
                        {(() => {
                          const productImageMap: Record<string, string> = {
                            "trail-pro-x": "/images/trailprox noires.png",
                            "osprey-atmos-65": "/images/atmos AG 65.png",
                            "chaussettes-icebreaker": "/images/Hike + Medium Crew.png",
                          }
                          const productImage = productImageMap[suggestedProduct.id]
                          const initials = suggestedProduct.brand.substring(0, 2).toUpperCase()
                          
                          return productImage ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image
                                src={productImage}
                                alt={suggestedProduct.name}
                                fill
                                className="object-cover"
                                style={suggestedProduct.id === "osprey-atmos-65" ? { objectPosition: "center top" } : undefined}
                                sizes="48px"
                              />
                            </div>
                          ) : (
                            <div 
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-[10px] font-normal text-white flex-shrink-0"
                              style={{ backgroundColor: suggestedProduct.colors[0]?.hex || "#6b7280" }}
                            >
                              {initials}
                            </div>
                          )
                        })()}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-medium text-gray-900 truncate">{suggestedProduct.name}</p>
                          <p className="text-[10px] text-gray-500">{formatPrice(suggestedProduct.price)}</p>
                        </div>
                        <div
                          className={cn(
                            "px-2 py-1 rounded-lg text-white text-[10px] font-medium flex items-center gap-1",
                            suggestionAdded ? "bg-green-500" : "bg-gray-900"
                          )}
                        >
                          {suggestionAdded ? (
                            <>
                              <Check className="w-3 h-3" />
                              Ajouté
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              Ajouter
                            </>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            </div>
            </div>
            
            {/* Mobile Summary - Fixed at bottom */}
            <div className="border-t border-gray-200 bg-white">
              {/* Summary Header - Clickable */}
              <button
                onClick={() => setShowSummary(!showSummary)}
                className="w-full px-3 py-3 flex items-center justify-between"
              >
                <h2 className="text-base font-normal text-gray-900">Récapitulatif</h2>
                <motion.div
                  animate={{ rotate: showSummary ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              {/* Summary Content - Collapsible */}
              <AnimatePresence>
                {showSummary && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 space-y-3">
                      <div className="space-y-1.5">
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
                        <div className="flex justify-between text-base font-semibold pt-1.5 border-t border-gray-200">
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
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          placeholder="Code promo"
                          className="flex-1 h-9 px-3 text-sm rounded-lg border border-gray-200 bg-white outline-none focus:border-gray-400"
                        />
                        <button className="h-9 px-4 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          Appliquer
                        </button>
                      </div>
                      
                      {/* Checkout button */}
                      <button className="w-full h-11 bg-gray-900 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                        <CreditCard className="w-4 h-4" />
                        Commander
                      </button>
                      
                      {/* Guarantees */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>Livraison gratuite dès 100€</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Check className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>Paiement sécurisé</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            {/* Desktop Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <h1 className="text-sm font-normal text-gray-900">Mon panier <span className="text-base text-gray-500 tracking-wide">({cartItems.length} articles)</span></h1>
            </div>
            
            <div className="flex h-[calc(100%-48px)]">
              {/* Left - Cart Items */}
              <div ref={cartItemsRef} className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-3">
                  <AnimatePresence>
                    {cartItems.map((item, idx) => {
                      const initials = item.product.brand.substring(0, 2).toUpperCase()
                      const isNew = idx === cartItems.length - 1 && suggestionAdded
                      
                      // Mapping des images pour les produits du panier
                      const productImageMap: Record<string, string> = {
                        "trail-pro-x": "/images/trailprox noires.png",
                        "osprey-atmos-65": "/images/atmos AG 65.png",
                        "chaussettes-icebreaker": "/images/Hike + Medium Crew.png",
                      }
                      const productImage = productImageMap[item.product.id]
                      
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
                          {productImage ? (
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image
                                src={productImage}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                                style={item.product.id === "osprey-atmos-65" ? { objectPosition: "center top" } : undefined}
                                sizes="64px"
                              />
                            </div>
                          ) : (
                            <div 
                              className="w-16 h-16 rounded-lg flex items-center justify-center text-sm font-normal text-white flex-shrink-0"
                              style={{ backgroundColor: item.product.colors[0]?.hex || "#6b7280" }}
                            >
                              {initials}
                            </div>
                          )}
                          
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
                                <span>Ajouté sur recommandation PARCEL</span>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                  
                  {/* PARCEL Suggestion */}
                  <AnimatePresence>
                    {chatStep >= 1 && !suggestionAdded && (
                      <motion.div
                        ref={noaSuggestionRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 bg-gray-50 rounded-xl p-3"
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-5 h-5 rounded-md bg-gray-200 flex items-center justify-center p-0 overflow-hidden">
                            <Image 
                              src="/images/Logo Parcel sans écriture.png"
                              alt="PARCEL"
                              width={22}
                              height={22}
                              className="object-contain"
                            />
                          </div>
                          <span className="text-[10px] font-semibold text-gray-900">PARCEL vous suggère</span>
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
                              {/* Product image */}
                              {(() => {
                                const productImageMap: Record<string, string> = {
                                  "trail-pro-x": "/images/trailprox noires.png",
                                  "osprey-atmos-65": "/images/atmos AG 65.png",
                                  "chaussettes-icebreaker": "/images/Hike + Medium Crew.png",
                                }
                                const productImage = productImageMap[suggestedProduct.id]
                                const initials = suggestedProduct.brand.substring(0, 2).toUpperCase()
                                
                                return productImage ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <Image
                                      src={productImage}
                                      alt={suggestedProduct.name}
                                      fill
                                      className="object-cover"
                                      style={suggestedProduct.id === "osprey-atmos-65" ? { objectPosition: "center top" } : undefined}
                                      sizes="48px"
                                    />
                                  </div>
                                ) : (
                                  <div 
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-[10px] font-normal text-white flex-shrink-0"
                                    style={{ backgroundColor: suggestedProduct.colors[0]?.hex || "#6b7280" }}
                                  >
                                    {initials}
                                  </div>
                                )
                              })()}
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-medium text-gray-900 truncate">{suggestedProduct.name}</p>
                                <p className="text-[10px] text-gray-500">{formatPrice(suggestedProduct.price)}</p>
                              </div>
                              <div
                                className={cn(
                                  "px-2 py-1 rounded-lg text-white text-[10px] font-medium flex items-center gap-1",
                                  suggestionAdded ? "bg-green-500" : "bg-gray-900"
                                )}
                              >
                                {suggestionAdded ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    Ajouté
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3 h-3" />
                                    Ajouter
                                  </>
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Right - Summary */}
              <div className="w-72 border-l border-gray-100 p-4 bg-gray-50 min-w-0">
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
                    <Truck className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">Livraison gratuite dès 100€</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                    <Check className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">Paiement sécurisé</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </WindowComponent>
  )
}

