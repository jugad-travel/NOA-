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
  const sectionRef = React.useRef<HTMLElement>(null)
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const scrollTriggerRefs = React.useRef<ScrollTrigger[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)
  const currentIndexRef = React.useRef(currentIndex)
  const demoProgressRef = React.useRef(demoProgress)
  
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
    if (!section) return

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

      // Créer un ScrollTrigger principal qui gère toute la progression
      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top", // Commencer quand le haut de la section atteint le haut de l'écran
          end: `+=${totalScrollDistance}`,
          scrub: 0.5, // Synchroniser avec le scroll (plus bas = plus fluide)
          pin: true, // Épingler la section pendant les animations
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
            const demoDurations = [0.25, 0.25, 0.30, 0.20] // [projet, catalogue, expert, panier] - plus de temps pour la suggestion NOA
            
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
      const demoDurations = [0.25, 0.25, 0.30, 0.20] // [projet, catalogue, expert, panier] - plus de temps pour la suggestion NOA
      
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
  }, []) // Seulement au montage

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
      <Section variant="gray" padding="lg" className="overflow-hidden" ref={sectionRef} style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-1">
                À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit.
              </p>
              <p className="text-gray-500">
                De l'intention floue au panier final, transformez votre site en vendeur digital performant.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Layout avec navigation verticale à gauche */}
        <div className="flex gap-8 max-w-7xl mx-auto" style={{ minHeight: '100vh' }}>
          {/* Navigation verticale à gauche */}
          <div className="flex-shrink-0 self-center" style={{ marginTop: '-80px' }}>
            <div className="relative flex flex-col gap-3">
              {/* Ligne de continuité verticale */}
              <div 
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
              />
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                const isActive = currentIndex === index
                
                return (
                  <button
                    key={tab.id}
                    className={cn(
                      "relative flex flex-col items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all min-w-[100px] z-10",
                      isActive
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Zone des démos */}
          <div className="flex-1 relative" style={{ minHeight: '600px' }}>
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
            <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
              <p className="text-sm text-gray-500">
                {tabs[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
