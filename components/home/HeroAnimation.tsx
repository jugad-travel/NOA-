"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroAnimation() {
  const [showAnimation, setShowAnimation] = React.useState(true)
  const [textIndex, setTextIndex] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const [addedToCart, setAddedToCart] = React.useState<string | null>(null)
  
  const fullText = "Je pars 2 semaines faire le gr20 avec un ami"
  const displayedText = fullText.substring(0, textIndex)
  
  const products = [
    { id: "trail-pro-x", name: "Trail Pro X", price: 149, image: "/images/trailprox noires.png" },
    { id: "atmos-ag-65", name: "Atmos AG 65", price: 280, image: "/images/atmos AG 65.png", objectPosition: "22% center" }
  ]
  
  // Détecter si on est sur mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Animation en boucle
  React.useEffect(() => {
    let isRunning = true
    
    const sequence = async () => {
      if (!isRunning) return
      
      // Phase 1: Écriture du texte
      setTextIndex(0)
      setShowProducts(false)
      setShowMessage(false)
      setShowAnimation(true) // S'assurer que l'animation est visible
      
      for (let i = 0; i <= fullText.length; i++) {
        if (!isRunning) return
        await new Promise(resolve => setTimeout(resolve, 50))
        setTextIndex(i)
      }
      
      // Attendre un peu après la fin de l'écriture
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Phase 2: Afficher le message (pas de remontée, position fixe)
      if (!isRunning) return
      setShowMessage(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Phase 3: Afficher les produits (sans remonter)
      if (!isRunning) return
      setShowProducts(true)
      await new Promise(resolve => setTimeout(resolve, 4000))
      
      // Phase 4: Animation d'ajout au panier (premier produit)
      if (!isRunning) return
      setAddedToCart("trail-pro-x")
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Phase 5: Animation d'ajout au panier (deuxième produit)
      if (!isRunning) return
      setAddedToCart("atmos-ag-65")
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      // Phase 6: Réinitialiser l'état d'ajout au panier
      if (!isRunning) return
      setAddedToCart(null)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Phase 7: Fade out
      if (!isRunning) return
      setShowAnimation(false)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Phase 8: Réinitialiser et recommencer immédiatement
      if (!isRunning) return
      setShowAnimation(true)
      setTextIndex(0)
      setShowProducts(false)
      setShowMessage(false)
      setAddedToCart(null)
      
      // Attendre un court délai avant de redémarrer
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Redémarrer immédiatement
      if (isRunning) {
        sequence()
      }
    }
    
    // Démarrer l'animation après un court délai
    const timer = setTimeout(() => {
      sequence()
    }, 1000)
    
    return () => {
      isRunning = false
      clearTimeout(timer)
    }
  }, [fullText])
  
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] md:bottom-[-20px]">
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 md:gap-4 px-4 md:px-0"
              style={{ 
                maxWidth: '100vw',
                transform: isMobile ? 'scale(0.75)' : 'scale(1)',
                transformOrigin: 'center bottom'
              }}
            >
              {/* Barre de dialogue - Position fixe, pas de scale */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-5 py-2 md:px-6 md:py-2.5 w-[420px] md:w-[520px] h-[50px] md:h-[60px] flex items-center"
              >
                <div className="flex items-center gap-3 w-full">
                  {/* Logo PARCEL sans fond */}
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/Logo Parcel sans écriture.png"
                      alt="PARCEL"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Texte qui s'écrit - Taille fixe pour éviter le changement de taille */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base text-gray-900 font-medium leading-relaxed">
                      {displayedText}
                      {textIndex < fullText.length && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-0.5 h-4 md:h-5 bg-gray-900 ml-1"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Réponse chatbot + Produits - Toujours présent pour réserver l'espace, position fixe */}
              <div
                className="flex flex-row items-start gap-3 md:gap-4 w-[420px] md:w-[520px] min-h-[200px]"
              >
                {/* Message de recommandation - À gauche, largeur fixe */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showMessage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-3 py-2.5 md:px-4 md:py-3 w-[200px] md:w-[240px] flex-shrink-0"
                >
                  <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed">
                    Le GR20 est un trek exigeant ! Pour une semaine en autonomie, je vous recommande cet équipement complet et fiable :
                  </p>
                </motion.div>
                
                {/* Produits - À droite, côte à côte - Position fixe, pas de x ni scale */}
                <div className="flex flex-row gap-2 md:gap-3 flex-shrink-0">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: showProducts ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-xl shadow-xl overflow-hidden w-[100px] md:w-[120px]"
                    >
                      <div className="relative w-full aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          style={product.objectPosition ? { objectPosition: product.objectPosition } : undefined}
                        />
                      </div>
                      <div className="p-2 md:p-2.5">
                        <p className="text-xs md:text-sm font-semibold text-gray-900 mb-1">{product.name}</p>
                        <p className="text-[10px] md:text-xs font-bold text-gray-900 mb-2">{product.price}€</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "w-full h-6 md:h-7 rounded-lg text-[9px] md:text-[10px] font-medium flex items-center justify-center gap-1 transition-all",
                            addedToCart === product.id
                              ? "bg-green-500 text-white"
                              : "bg-gray-900 text-white hover:bg-gray-800"
                          )}
                        >
                          {addedToCart === product.id ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Ajouté</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>Ajouter</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
