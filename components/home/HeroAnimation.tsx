"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const examples = [
  {
    userMessage: "Machine café sans capsules, fiable, usage quotidien.",
    response: "Pour un usage quotidien, je vous recommande ces machines à café sans capsules, fiables et durables :",
    products: [
      { id: "machine-cafe-1", name: "Expresso Pro", price: 299, image: "/images/machine-cafe-1.jpg" },
      { id: "machine-cafe-2", name: "Barista Classic", price: 249, image: "/images/machine-cafe-2.jpg" }
    ]
  },
  {
    userMessage: "Je pars 2 semaines faire le gr20 avec un ami",
    response: "Le GR20 est un trek exigeant ! Pour une semaine en autonomie, je vous recommande cet équipement complet et fiable :",
    products: [
      { id: "trail-pro-x", name: "Trail Pro X", price: 149, image: "/images/trailprox noires.png" },
      { id: "atmos-ag-65", name: "Atmos AG 65", price: 280, image: "/images/atmos AG 65.png", objectPosition: "22% center" }
    ]
  },
  {
    userMessage: "Matelas ferme, dos sensible, usage quotidien.",
    response: "Pour un dos sensible, je vous recommande ces matelas fermes, conçus pour un usage quotidien et un confort optimal :",
    products: [
      { id: "matelas-1", name: "Confort Dos", price: 599, image: "/images/matelas-1.png" },
      { id: "matelas-2", name: "Ortho Premium", price: 799, image: "/images/matelas-2.png" }
    ]
  }
]

type HeroAnimationProps = {
  desktopTop?: string
}

export function HeroAnimation({ desktopTop = "50%" }: HeroAnimationProps) {
  const [showAnimation, setShowAnimation] = React.useState(true)
  const [textIndex, setTextIndex] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(false)
  const [responsiveLayout, setResponsiveLayout] = React.useState({ isPhone: false, scale: 1 })
  const [addedToCart, setAddedToCart] = React.useState<string | null>(null)
  const [currentExampleIndex, setCurrentExampleIndex] = React.useState(0)
  
  const currentExample = examples[currentExampleIndex]
  const fullText = currentExample.userMessage
  const displayedText = fullText.substring(0, textIndex)
  
  // Réduire la démo continûment avec la largeur de l'écran.
  React.useLayoutEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth
      const isPhone = width < 520
      // Une base unique évite le saut de taille provoqué auparavant par le
      // changement de dimensions du composant au breakpoint tablette.
      const scale = Math.min(1, Math.max(0.5, width / 1440))
      setResponsiveLayout({ isPhone, scale })
    }
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
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
      setAddedToCart(currentExample.products[0].id)
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Phase 5: Animation d'ajout au panier (deuxième produit)
      if (!isRunning) return
      setAddedToCart(currentExample.products[1].id)
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      // Phase 6: Réinitialiser l'état d'ajout au panier
      if (!isRunning) return
      setAddedToCart(null)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Phase 7: Fade out
      if (!isRunning) return
      setShowAnimation(false)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Phase 8: Réinitialiser et passer à l'exemple suivant
      if (!isRunning) return
      setCurrentExampleIndex((prev) => (prev + 1) % examples.length)
      setShowAnimation(true)
      setTextIndex(0)
      setShowProducts(false)
      setShowMessage(false)
      setAddedToCart(null)
      
      // Attendre un court délai avant de redémarrer
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Redémarrer immédiatement avec le nouvel exemple
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
  }, [currentExample.products, currentExampleIndex, fullText.length])
  
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div
        className="absolute bottom-[-96px] left-1/2 -translate-x-1/2 min-[520px]:bottom-auto min-[520px]:top-[var(--hero-demo-top)]"
        style={{ "--hero-demo-top": desktopTop } as React.CSSProperties}
      >
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
              style={{ 
                maxWidth: '100vw',
                transform: `scale(${responsiveLayout.scale})`,
                transformOrigin: responsiveLayout.isPhone ? 'center bottom' : 'center top'
              }}
            >
              {/* Barre de dialogue - Position fixe, pas de scale */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex h-[60px] w-[520px] items-center rounded-2xl bg-white/95 px-6 py-2.5 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 w-full">
                  {/* Logo PARCEL sans fond */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
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
                    <p className="text-base font-medium leading-relaxed text-gray-900">
                      {displayedText}
                      {textIndex < fullText.length && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="ml-1 inline-block h-5 w-0.5 bg-gray-900"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Réponse chatbot + Produits - Toujours présent pour réserver l'espace, position fixe */}
              <div
                className="flex min-h-[200px] w-[520px] flex-row items-start gap-4"
              >
                {/* Message de recommandation - À gauche, largeur fixe */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showMessage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-[240px] flex-shrink-0 rounded-xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm"
                >
                  <p className="text-xs leading-relaxed text-gray-700">
                    {currentExample.response}
                  </p>
                </motion.div>
                
                {/* Produits - À droite, côte à côte - Position fixe, pas de x ni scale */}
                <div className="flex flex-shrink-0 flex-row gap-3">
                  {currentExample.products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: showProducts ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex w-[120px] flex-col overflow-hidden rounded-xl bg-white shadow-xl"
                    >
                      <div className="relative w-full aspect-square flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          style={product.objectPosition ? { objectPosition: product.objectPosition } : undefined}
                        />
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col p-2.5">
                        <p className="mb-1 line-clamp-2 flex-shrink-0 text-sm font-semibold text-gray-900">{product.name}</p>
                        <p className="mb-2 flex-shrink-0 text-xs font-bold text-gray-900">{product.price}€</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "mt-auto flex h-7 w-full flex-shrink-0 items-center justify-center gap-1 rounded-lg text-[10px] font-medium transition-all",
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
