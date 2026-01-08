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
  { id: "complete", label: "Panier", icon: ShoppingCart, description: "Compléter le panier" },
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

  // Détection de visibilité pour reset à la première démo
  React.useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && currentIndexRef.current > 0) {
            // Section n'est plus visible, reset à la première démo
            setCurrentIndex(0)
            setDemoProgress(tabs.map(() => 0))
            // Réinitialiser les positions des cartes
            tabs.forEach((_, index) => {
              const card = cardRefs.current[index]
              if (!card) return
              
              if (index === 0) {
                gsap.set(card, { opacity: 1, y: 0 })
              } else {
                gsap.set(card, { opacity: 0, y: 50 })
              }
            })
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

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

      // Initialiser toutes les cartes
      tabs.forEach((_, index) => {
        const card = cardRefs.current[index]
        if (!card) return
        
        if (index === 0) {
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
          scrub: 0.5, // Synchroniser avec le scroll (0.5 = plus fluide, moins réactif)
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
            const demoDurations = [0.20, 0.20, 0.35, 0.25] // [projet, catalogue, expert, panier]
            
            // Calculer les positions cumulatives
            let cumulative = 0
            const segmentStarts: number[] = [0]
            const segmentEnds: number[] = []
            
            demoDurations.forEach((duration, index) => {
              cumulative += duration
              segmentStarts.push(cumulative)
              segmentEnds.push(cumulative)
            })
            
            // Trouver quelle démo est active
            let demoIndex = 0
            for (let i = 0; i < segmentEnds.length; i++) {
              if (overallProgress < segmentEnds[i]) {
                demoIndex = i
                break
              }
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
            
            // Mettre à jour l'index de la démo active
            if (demoIndex !== currentIndexRef.current) {
              setCurrentIndex(demoIndex)
            }
            
            // Mettre à jour le progress de chaque démo
            setDemoProgress(newDemoProgress)
          },
          onEnter: () => {
            // Quand on entre dans la section, s'assurer que la première démo est active
            if (currentIndexRef.current !== 0) {
              setCurrentIndex(0)
            }
            // Réinitialiser le progress de toutes les démos
            setDemoProgress(tabs.map(() => 0))
          },
          markers: false // Débogage : mettre à true pour voir les markers
        }
      })

      // Durées relatives pour chaque démo (doit correspondre à celles dans onUpdate)
      const demoDurations = [0.20, 0.20, 0.35, 0.25] // [projet, catalogue, expert, panier]
      
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
        const fadeInStart = startPos
        const fadeInEnd = startPos + segmentSize * 0.1 // Fade in rapide sur 10%
        
        // S'assurer que la carte est cachée avant son segment
        mainTL.set(card, { opacity: 0, y: 50, visibility: 'hidden' }, startPos - 0.01)

        // Animation de fade in pour cette démo
        mainTL.to(card,
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            ease: "power2.out",
            duration: fadeInEnd - fadeInStart
          },
          fadeInStart
        )

        // Animation de fade out pour passer à la suivante
        if (index < tabs.length - 1) {
          const fadeOutStart = endPos - segmentSize * 0.1 // Fade out commence 10% avant la fin
          const fadeOutEnd = endPos
          
          mainTL.to(card,
            {
              opacity: 0,
              y: -50,
              visibility: 'hidden',
              ease: "power2.in",
              duration: fadeOutEnd - fadeOutStart
            },
            fadeOutStart
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

  // Initialiser les positions des cartes
  React.useEffect(() => {
    tabs.forEach((_, index) => {
      const card = cardRefs.current[index]
      if (!card) return

      if (index === currentIndex) {
        gsap.set(card, { opacity: 1, y: 0 })
      } else if (index < currentIndex) {
        gsap.set(card, { opacity: 1, y: 0 })
      } else {
        gsap.set(card, { opacity: 0, y: 50 })
      }
    })
  }, [currentIndex])

  return (
    <div ref={containerRef}>
      <Section variant="gray" padding="lg" className="overflow-hidden" ref={sectionRef} style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-4">
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
          <div className="flex-shrink-0 pt-8">
            <div className="flex flex-col gap-3">
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                const isActive = currentIndex === index
                
                return (
                  <button
                    key={tab.id}
                    className={cn(
                      "flex flex-col items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all min-w-[100px]",
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
