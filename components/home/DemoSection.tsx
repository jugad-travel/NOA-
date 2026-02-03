"use client"

import * as React from "react"
import { Home, LayoutGrid, FileText, ShoppingCart } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { DemoNoaProjet, DemoNoaMatch, DemoNoaExpert, DemoNoaComplete } from "@/components/demos"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tabs = [
  { id: "projet", label: "Homepage", icon: Home, description: "Transformer un projet en panier" },
  { id: "match", label: "Catalogue", icon: LayoutGrid, description: "Trouver le bon produit" },
  { id: "expert", label: "Fiche produit", icon: FileText, description: "Répondre aux questions" },
  { id: "complete", label: "Panier", icon: ShoppingCart, description: "" },
]

const renderDemo = (tabId: string, animationProgress: number) => {
  switch (tabId) {
    case "projet":
      return <DemoNoaProjet key="projet" animationProgress={animationProgress} />
    case "match":
      return <DemoNoaMatch key="match" animationProgress={animationProgress} />
    case "expert":
      return <DemoNoaExpert key="expert" animationProgress={animationProgress} />
    case "complete":
      return <DemoNoaComplete key="complete" animationProgress={animationProgress} />
    default:
      return <DemoNoaProjet key="projet" animationProgress={animationProgress} />
  }
}

export function DemoSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [demoProgress, setDemoProgress] = React.useState<number[]>(tabs.map(() => 0)) // Progress pour chaque démo (0 à 1)
  const [isMobile, setIsMobile] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const subtitleRef = React.useRef<HTMLParagraphElement>(null)
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const scrollTriggerRefs = React.useRef<ScrollTrigger[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)
  const currentIndexRef = React.useRef(currentIndex)
  const demoProgressRef = React.useRef(demoProgress)
  const isMobileRef = React.useRef(false)

  // Détecter si on est sur mobile
  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 // md breakpoint
      setIsMobile(mobile)
      isMobileRef.current = mobile
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Mettre à jour les refs quand les états changent
  React.useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])
  
  React.useEffect(() => {
    demoProgressRef.current = demoProgress
  }, [demoProgress])

  // Pas de réinitialisation automatique - la démo reste à l'état où elle est

  // Configuration GSAP ScrollTrigger avec scrub pour progression automatique
  React.useEffect(() => {
    const section = sectionRef.current
    const subtitle = subtitleRef.current
    if (!section || !subtitle) return

    // Désactiver ScrollTrigger sur mobile pour éviter les bugs de scroll
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // Sur mobile, afficher simplement la première démo sans animation de scroll
      tabs.forEach((_, index) => {
        const card = cardRefs.current[index]
        if (card) {
          if (index === 0) {
            gsap.set(card, { opacity: 1, y: 0, visibility: 'visible' })
          } else {
            gsap.set(card, { opacity: 0, y: 50, visibility: 'hidden' })
          }
        }
      })
      return
    }

    // Attendre que toutes les cartes soient montées
    const timer = setTimeout(() => {
      // Nettoyer les ScrollTriggers existants
      scrollTriggerRefs.current.forEach(st => st?.kill())
      scrollTriggerRefs.current = []

      const viewportHeight = window.innerHeight
      const scrollDistancePerDemo = viewportHeight * 2.0 // Distance de scroll optimale pour fluidité et lisibilité
      
      // Calculer la hauteur totale nécessaire pour éviter l'espace vide
      const totalScrollDistance = scrollDistancePerDemo * tabs.length

      // Initialiser toutes les cartes selon l'état actuel
      tabs.forEach((_, index) => {
        const card = cardRefs.current[index]
        if (!card) return
        
        if (index === currentIndexRef.current) {
          gsap.set(card, { opacity: 1, y: 0, visibility: 'visible' })
        } else {
          gsap.set(card, { opacity: 0, y: 50, visibility: 'hidden' })
        }
      })

      // Calculer la position du sous-titre par rapport au haut de la section
      const sectionRect = section.getBoundingClientRect()
      const subtitleRect = subtitle.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset
      const subtitleTop = subtitleRect.top + scrollY
      const sectionTop = sectionRect.top + scrollY
      const subtitleOffsetFromSection = subtitleTop - sectionTop

      // Créer un ScrollTrigger principal qui gère toute la progression
      // Quand le sous-titre atteint le haut de l'écran, le haut de la section est à subtitleOffsetFromSection pixels au-dessus
      // Donc on utilise top+= pour commencer quand le haut de la section + offset atteint le haut de l'écran
      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `top+=${Math.round(subtitleOffsetFromSection)}px top`, // Commencer quand le sous-titre atteint le haut de l'écran
          end: `+=${totalScrollDistance}`,
          scrub: 0.5, // Synchroniser avec le scroll (plus bas = plus fluide)
          pin: true, // Pin activé sur mobile et desktop
          anticipatePin: 1, // Anticiper le pin pour éviter les sauts
          pinSpacing: true, // Ajouter de l'espace pour le pin
          pinReparent: false, // Éviter les problèmes de repositionnement
          onLeave: () => {
            // Quand on quitte la section, s'assurer que la dernière carte reste visible
            const lastCard = cardRefs.current[tabs.length - 1]
            if (lastCard) {
              gsap.set(lastCard, { opacity: 1, y: 0, visibility: 'visible' })
            }
          },
          onLeaveBack: () => {
            // Quand on revient en arrière, réinitialiser
            tabs.forEach((_, index) => {
              const card = cardRefs.current[index]
              if (!card) return
              if (index === 0) {
                gsap.set(card, { opacity: 1, y: 0, visibility: 'visible' })
              } else {
                gsap.set(card, { opacity: 0, y: 50, visibility: 'hidden' })
              }
            })
          },
          onUpdate: (self) => {
            // Calculer quelle démo devrait être active basé sur le progress
            const overallProgress = self.progress // 0 à 1 pour toute la section
            
            // Durées relatives pour chaque démo (somme = 1.0)
            // Démo 3 (fiche produit) a plus de temps pour lire la réponse
            const demoDurations = [0.25, 0.25, 0.30, 0.20] // [projet, catalogue, expert, panier] - plus de temps pour la suggestion PARCEL
            
            // Calculer les positions cumulatives
            let cumulative = 0
            const segmentStarts: number[] = [0]
            const segmentEnds: number[] = []
            
            demoDurations.forEach((duration, index) => {
              cumulative += duration
              segmentStarts.push(cumulative)
              segmentEnds.push(cumulative)
            })
            
            // Trouver quelle démo est active - logique simple : correspondre à la carte visible
            let demoIndex = 0
            for (let i = 0; i < segmentEnds.length; i++) {
              if (overallProgress < segmentEnds[i]) {
                demoIndex = i
                break
              }
            }
            // Si on dépasse la fin (overallProgress >= 1.0), on est sur la dernière démo
            if (overallProgress >= 1.0) {
              demoIndex = tabs.length - 1
            }
            demoIndex = Math.min(demoIndex, tabs.length - 1)
            
            // Calculer le progress pour chaque démo
            const newDemoProgress = tabs.map((_, index) => {
              const segmentStart = segmentStarts[index]
              const segmentEnd = segmentEnds[index]
              const segmentSize = demoDurations[index]
              
              if (overallProgress < segmentStart) {
                return 0 // Pas encore commencé
              } else if (overallProgress >= segmentEnd) {
                return 1 // Terminé
              } else {
                // Dans le segment de cette démo, calculer le progress local (0 à 1)
                const localProgress = (overallProgress - segmentStart) / segmentSize
                return Math.min(localProgress, 1)
              }
            })
            
            // Mettre à jour l'index de la démo active - simple : correspondre à la carte visible
            if (demoIndex !== currentIndexRef.current) {
              setCurrentIndex(demoIndex)
            }
            
            // Mettre à jour le progress de chaque démo
            setDemoProgress(newDemoProgress)
          },
          onEnter: () => {
            // Ne pas réinitialiser - garder l'état actuel de la démo
            // La démo reste à l'état où elle est (probablement la dernière démo)
          },
          markers: false // Débogage : mettre à true pour voir les markers
        }
      })

      // Durées relatives pour chaque démo (doit correspondre à celles dans onUpdate)
      const demoDurations = [0.25, 0.25, 0.30, 0.20] // [projet, catalogue, expert, panier] - plus de temps pour la suggestion PARCEL
      
      // Calculer les positions cumulatives
      let cumulative = 0
      const segmentStarts: number[] = [0]
      const segmentEnds: number[] = []
      
      demoDurations.forEach((duration) => {
        cumulative += duration
        segmentStarts.push(cumulative)
        segmentEnds.push(cumulative)
      })

      // Animer chaque carte en fonction du scroll
      tabs.forEach((_, index) => {
        const card = cardRefs.current[index]
        if (!card) return

        // Calculer les positions dans la timeline (0 à 1)
        const startPos = segmentStarts[index]
        const endPos = segmentEnds[index]
        const segmentSize = demoDurations[index]
        
        // La carte précédente doit être complètement cachée avant que la suivante apparaisse
        // Pour les cartes suivantes, commencer le fade in un peu avant pour un chevauchement fluide
        const fadeInStart = index === 0 ? 0 : Math.max(0, startPos - segmentSize * 0.10) // Commencer 10% avant pour chevauchement fluide
        const fadeInEnd = startPos + segmentSize * 0.20 // Fade in sur 20% pour plus de fluidité
        
        // S'assurer que la carte est cachée avant son segment (sauf la première qui reste visible)
        if (index > 0) {
          mainTL.set(card, { opacity: 0, y: 50, visibility: 'hidden' }, startPos - 0.01)
        } else {
          // Pour la première carte, s'assurer qu'elle est visible dès le début (position 0)
          mainTL.set(card, { opacity: 1, y: 0, visibility: 'visible' }, 0)
        }

        // Animation de fade in pour cette démo
        mainTL.to(card,
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            ease: "power2.out", // Easing plus doux pour plus de fluidité
            duration: fadeInEnd - fadeInStart
          },
          fadeInStart
        )

        // Disparition instantanée pour passer à la suivante (pas de fade out)
        if (index < tabs.length - 1) {
          // Disparaître instantanément à la fin du segment
          mainTL.set(card,
            {
              opacity: 0,
              y: 0,
              visibility: 'hidden'
            },
            endPos
          )
        } else {
          // Pour la dernière carte, s'assurer qu'elle reste visible de manière continue
          // Pas de fade out - elle reste visible jusqu'à la fin et au-delà
          mainTL.set(card, { opacity: 1, y: 0, visibility: 'visible' }, endPos - 0.01)
          // Maintenir l'état visible jusqu'à la fin de la timeline
          mainTL.set(card, { opacity: 1, y: 0, visibility: 'visible' }, 1.0)
        }
      })

      const st = mainTL.scrollTrigger
      if (st) {
        scrollTriggerRefs.current[0] = st
        // Refresh le ScrollTrigger pour s'assurer qu'il se met à jour
        ScrollTrigger.refresh()
      }
    }, 300)

    // Refresh quand la fenêtre est redimensionnée
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
      scrollTriggerRefs.current.forEach(st => st?.kill())
      scrollTriggerRefs.current = []
    }
  }, [isMobile]) // Recréer quand isMobile change

  // Initialiser les positions des cartes - seulement pour la carte active
  // Ne pas forcer les cartes précédentes à être visibles, elles doivent rester cachées après leur fade out
  React.useEffect(() => {
    tabs.forEach((_, index) => {
      const card = cardRefs.current[index]
      if (!card) return

      if (index === currentIndex) {
        gsap.set(card, { opacity: 1, y: 0, visibility: 'visible' })
      } else {
        // Ne pas toucher aux cartes inactives - laisser GSAP gérer leur état
        // Sauf pour l'initialisation de la première carte au montage
      }
    })
  }, [currentIndex])
  
  // Initialiser la première carte comme visible dès le montage
  React.useEffect(() => {
    const firstCard = cardRefs.current[0]
    if (firstCard) {
      gsap.set(firstCard, { opacity: 1, y: 0, visibility: 'visible' })
    }
  }, []) // Seulement au montage initial

  return (
    <div ref={containerRef}>
      <Section variant="gray" padding="lg" className={isMobile ? "" : "overflow-hidden"} ref={sectionRef} style={{ paddingTop: isMobile ? '4vh' : '10vh', paddingBottom: isMobile ? '50vh' : '10vh' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                PARCEL accompagne, conseille avec précision et convertit à chaque étape du parcours client.
              </h2>
              <p 
                ref={subtitleRef}
                className="text-gray-500"
              >
                De l'intention floue au panier final, transformez votre site en y intégrant un vendeur digital performant.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Layout : vertical sur mobile, horizontal sur desktop */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-7xl mx-auto" style={{ minHeight: isMobile ? 'auto' : '100vh', marginBottom: isMobile ? '8rem' : '0' }}>
          {/* Navigation : horizontale en haut sur mobile, verticale à gauche sur desktop */}
          <div className={cn(
            "flex-shrink-0",
            isMobile ? "w-full order-1" : "self-center order-1 md:order-1"
          )} style={isMobile ? {} : { marginTop: '-80px' }}>
            <div className={cn(
              "relative flex gap-2 md:gap-3",
              isMobile ? "flex-row overflow-x-auto pb-2 scrollbar-hide" : "flex-col"
            )} style={isMobile ? { WebkitOverflowScrolling: 'touch' } : {}}>
              {/* Ligne de continuité : horizontale en bas sur mobile, verticale sur desktop */}
              {!isMobile && (
                <div 
                  className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                />
              )}
              {isMobile && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                />
              )}
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                const isActive = currentIndex === index
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "relative flex items-center gap-1.5 md:gap-2 rounded-xl text-xs md:text-sm font-medium transition-all z-10 whitespace-nowrap flex-shrink-0",
                      isMobile 
                        ? "px-2.5 py-2 flex-row" 
                        : "px-4 py-3 flex-col min-w-[100px]",
                      isActive
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900"
                    )}
                  >
                    <Icon className={cn(isMobile ? "w-3.5 h-3.5" : "w-5 h-5")} />
                    {isMobile ? (
                      <span className="text-[10px] leading-tight">{tab.label}</span>
                    ) : (
                      <span>{tab.label}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Zone des démos */}
          <div className={cn(
            "relative order-2",
            isMobile ? "w-full" : "flex-1"
          )} style={{ minHeight: isMobile ? '500px' : '600px', marginTop: isMobile ? '0' : '4rem' }}>
            {tabs.map((tab, index) => {
              const isActive = index === currentIndex
              const zIndex = isActive ? tabs.length + 1 : tabs.length - index

              return (
                <div
                  key={tab.id}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className="absolute w-full"
                  style={{
                    zIndex,
                    willChange: 'transform, opacity',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <div className="w-full">
                    {renderDemo(tab.id, demoProgress[index])}
                  </div>
                </div>
              )
            })}
            
            {/* Description de la démo active */}
            <div className={cn(
              "text-center",
              isMobile ? "mt-4 relative" : "absolute bottom-0 left-0 right-0 mb-4"
            )}>
              <p className="text-xs md:text-sm text-gray-500">
                {tabs[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
