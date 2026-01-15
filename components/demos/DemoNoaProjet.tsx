"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, User, Menu, ChevronRight, MessageCircle, X, Send, Sparkles, ShoppingCart, Check } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { categories, getProductsByIds, noaConversations, formatPrice } from "@/lib/demo-data"
import Image from "next/image"

interface DemoNoaProjetProps {
  animationProgress?: number // 0 à 1
}

export function DemoNoaProjet({ animationProgress = 0 }: DemoNoaProjetProps) {
  // Calculer les étapes basées sur le progress - Timing optimisé pour fluidité et visibilité
  // Étape 1 (0-0.08) : Chat s'ouvre
  // Étape 2 (0.08-0.15) : Message "Bonjour..." (déjà visible)
  // Étape 3 (0.15-0.25) : Message utilisateur
  // Étape 4 (0.25-0.35) : Typing
  // Étape 5 (0.35-0.50) : Réponse NOA (message texte seulement - temps pour lire)
  // Étape 6 (0.50-0.60) : Produits apparaissent
  // Étape 7 (0.60-1.0) : Ajout au panier (40% pour bien voir chaque produit ajouté)
  
  const chatMessagesRef = React.useRef<HTMLDivElement>(null)
  const isChatOpen = animationProgress >= 0.08
  const chatStep = animationProgress >= 0.60 ? 4 : animationProgress >= 0.50 ? 3 : animationProgress >= 0.35 ? 3 : animationProgress >= 0.25 ? 2 : animationProgress >= 0.15 ? 1 : 0
  
  // Calculer quels produits sont ajoutés basé sur le progress
  const suggestedProducts = getProductsByIds(noaConversations.projet.suggestions)
  const addedProducts = React.useMemo(() => {
    if (animationProgress < 0.60) return []
    // Ajouter progressivement les produits sur une période plus longue (40% pour bien voir)
    const addProgress = (animationProgress - 0.60) / 0.40 // 0 à 1 entre 0.60 et 1.0
    const productsToAdd = Math.min(
      suggestedProducts.length,
      Math.ceil(addProgress * suggestedProducts.length)
    )
    return suggestedProducts.slice(0, productsToAdd).map(p => p.id)
  }, [animationProgress, suggestedProducts])
  
  // Scroll synchronisé avec le progress (contrôlé uniquement par le scroll de la page)
  React.useEffect(() => {
    const chatMessages = chatMessagesRef.current
    if (chatMessages && animationProgress >= 0.50) {
      // Calculer le scroll basé sur le progress pour voir les produits et l'ajout au panier
      const scrollProgress = (animationProgress - 0.50) / 0.50 // 0 à 1 entre 0.50 et 1.0
      const maxScroll = chatMessages.scrollHeight - chatMessages.clientHeight
      // Scroller directement mais de manière fluide grâce au scrub de GSAP
      chatMessages.scrollTop = maxScroll * scrollProgress
    }
  }, [animationProgress])
  
  // Bloquer le scroll manuel dans la fenêtre - le scroll est uniquement programmatique via animationProgress
  // Le scroll de la page fonctionne toujours, même quand le curseur est au-dessus de la fenêtre
  React.useEffect(() => {
    const chatMessages = chatMessagesRef.current
    if (!chatMessages) return
    
    const handleWheel = (e: WheelEvent) => {
      // Vérifier si on peut encore scroller dans la fenêtre
      const canScrollDown = chatMessages.scrollTop < chatMessages.scrollHeight - chatMessages.clientHeight - 1
      const canScrollUp = chatMessages.scrollTop > 0
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0
      
      // Bloquer seulement si on peut encore scroller dans cette direction dans la fenêtre
      // Sinon, laisser passer le scroll à la page
      if ((scrollingDown && canScrollDown) || (scrollingUp && canScrollUp)) {
        e.preventDefault()
      }
      // Ne pas utiliser stopPropagation pour que le scroll de la page fonctionne toujours
    }
    
    chatMessages.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      chatMessages.removeEventListener('wheel', handleWheel)
    }
  }, [])
  
  return (
    <SafariWindow url="shop.outdoor-expert.fr" className="w-full">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Mini Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white font-normal text-xs">OE</span>
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
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gray-900 rounded-full text-[8px] text-white flex items-center justify-center"
                >
                  {addedProducts.length}
                </motion.span>
              )}
            </div>
          </div>
        </div>
        
        {/* Hero Banner */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src="/images/Bannière démo produit Project.png"
            alt="Bannière"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Categories */}
        <div className="px-4 py-4">
          <h2 className="text-sm font-normal text-gray-900 mb-3">Nos catégories</h2>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => {
              // Mapping des images pour chaque catégorie
              const categoryImageMap: Record<string, string> = {
                "chaussures": "/images/Démo produit section chaussures.png",
                "sacs": "/images/Section sac démo projet .jpg",
                "vetements": "/images/section vetements démo projet.png",
              }
              const categoryImage = categoryImageMap[cat.id]
              
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "rounded-xl overflow-hidden cursor-pointer transition-all relative",
                    categoryImage ? "h-20" : "bg-gray-50 p-3 text-center hover:bg-gray-100"
                  )}
                >
                  {categoryImage ? (
                    <>
                      <Image
                        src={categoryImage}
                        alt={cat.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 z-10">
                        <p className="text-white text-xs font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>{cat.name}</p>
                        <p className="text-white text-[10px] font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>{cat.productCount} articles</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-xl mb-1 block">{cat.icon}</span>
                      <p className="text-xs font-medium text-gray-900">{cat.name}</p>
                      <p className="text-[10px] text-gray-500">{cat.productCount} articles</p>
                    </>
                  )}
                </motion.div>
              )
            })}
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
              onClick={() => {}}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gray-900 shadow-lg flex items-center justify-center z-50"
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
              className="absolute bottom-4 right-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
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
                  onClick={() => {}}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Chat Messages */}
              <div ref={chatMessagesRef} className="p-3 space-y-3 h-56 overflow-y-auto" style={{ scrollBehavior: 'auto' }}>
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
                
                {/* NOA response (message texte d'abord) */}
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
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Product suggestions (apparaissent après le message) */}
                <AnimatePresence>
                  {chatStep >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2 ml-8"
                    >
                        {suggestedProducts.map((product, idx) => {
                          const isAdded = addedProducts.includes(product.id)
                          
                          // Mapping des images pour les produits suggérés
                          const productImageMap: Record<string, string> = {
                            "trail-pro-x": "/images/trailprox noires.png",
                            "osprey-atmos-65": "/images/atmos AG 65.png",
                          }
                          const productImage = productImageMap[product.id]
                          
                          return (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.15 }}
                              className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-100"
                            >
                              {/* Product image */}
                              {productImage && (
                                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                                  <Image
                                    src={productImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-medium text-gray-900 truncate">{product.name}</p>
                                <p className="text-[10px] text-gray-500">{formatPrice(product.price)}</p>
                              </div>
                              <motion.div
                                className={cn(
                                  "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                  isAdded ? "bg-green-500" : "bg-gray-100"
                                )}
                                animate={isAdded ? {
                                  scale: [1, 1.3, 1.1],
                                  backgroundColor: ["#10b981", "#22c55e", "#10b981"]
                                } : {}}
                                transition={{ 
                                  duration: 0.5,
                                  repeat: isAdded ? 1 : 0,
                                  repeatType: "reverse"
                                }}
                              >
                                {isAdded ? (
                                  <Check className="w-3 h-3 text-white" />
                                ) : (
                                  <ShoppingCart className="w-3 h-3 text-gray-600" />
                                )}
                              </motion.div>
                            </motion.div>
                          )
                        })}
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

