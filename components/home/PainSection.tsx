"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, GripVertical } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const comparison = {
  before: {
    title: "E-commerce classique",
    items: [
      { text: "Recherche rigide" },
      { text: "Choix complexe" },
      { text: "Peu de réassurance" },
      { text: "Trop de choix pas de choix" },
      { text: "Abandon fréquent du panier" },
      { text: "Pas de fidélisation client" },
    ],
  },
  after: {
    title: "Avec NOA",
    items: [
      { text: "Compréhension du projet" },
      { text: "Aide au choix produit" },
      { text: "Réassurance jusqu'au panier" },
      { text: "Plus de conversion" },
      { text: "Expérience personnalisée" },
      { text: "Gain de temps" },
    ],
  },
}

export function PainSection() {
  const [sliderPosition, setSliderPosition] = React.useState(67) // Position par défaut à 67% (2/3 à gauche)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const sectionRef = React.useRef<HTMLElement>(null)
  const x = useMotionValue(0) // Sera initialisé au montage
  const hasAnimatedRef = React.useRef(false)

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if (!containerRef.current) return
    
    const containerWidth = containerRef.current.offsetWidth
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX
    const newPercent = Math.max(0, Math.min(100, ((clientX - rect.left) / containerWidth) * 100))
    
    setSliderPosition(newPercent)
    x.set((newPercent / 100) * containerWidth)
  }

  // Initialiser la position du slider au montage
  React.useEffect(() => {
    if (containerRef.current) {
      const initialPosition = (67 / 100) * containerRef.current.offsetWidth
      x.set(initialPosition)
      setSliderPosition(67)
    }
  }, [x])

  React.useEffect(() => {
    if (containerRef.current) {
      x.set((sliderPosition / 100) * containerRef.current.offsetWidth)
    }
  }, [sliderPosition, x])

  // Animation du slider quand on arrive sur la section
  React.useEffect(() => {
    const container = containerRef.current
    if (!container || hasAnimatedRef.current) return

    let scrollTrigger: ScrollTrigger | null = null

    // Attendre un peu que le DOM soit prêt
    const timer = setTimeout(() => {
      if (hasAnimatedRef.current || !container) return

      const animateSlider = () => {
        if (hasAnimatedRef.current) return
        hasAnimatedRef.current = true

        const containerWidth = container.offsetWidth
        const defaultPosition = (67 / 100) * containerWidth
        const leftPosition = (30 / 100) * containerWidth // Slide vers la gauche à 30%

        // Timeline manuelle pour piloter la MotionValue
        gsap.timeline()
          .to({}, {
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
              const p = this.progress()
              const current = defaultPosition + (leftPosition - defaultPosition) * p
              x.set(current)
              setSliderPosition((current / containerWidth) * 100)
            },
          })
          .to({}, {
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
              const p = this.progress()
              const current = leftPosition + (defaultPosition - leftPosition) * p
              x.set(current)
              setSliderPosition((current / containerWidth) * 100)
            },
          })
      }

      // Déclencher directement sur le conteneur du slider
      // Quand le haut du conteneur atteint le centre du viewport
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top center", // Déclenchement quand le haut du conteneur atteint le centre du viewport
        once: true,
        onEnter: () => {
          animateSlider()
        },
      })

      // Vérifier si le conteneur est déjà visible au montage
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const centerPoint = viewportHeight / 2
      
      // Si le conteneur est déjà au-dessus du centre du viewport
      if (rect.top <= centerPoint && rect.bottom > 0) {
        animateSlider()
      }
    }, 500) // Attendre 500ms pour que le ScrollReveal ait le temps de rendre

    return () => {
      clearTimeout(timer)
      if (scrollTrigger) {
        scrollTrigger.kill()
      }
    }
  }, [x])

  return (
    <Section variant="white" padding="lg" className="relative" ref={sectionRef} style={{ paddingBottom: '6vh' }}>
      {/* Fond gradient qui commence plus bas sur mobile */}
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-0 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
            À chaque étape du parcours d'achat, vos clients hésitent.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12" ref={containerRef}>
            {/* Before Section - Avec NOA (left side, fixed) */}
            <div className="relative min-h-[350px] md:min-h-[400px] flex items-center">
              <div className="w-full h-full absolute inset-0 bg-gray-900 border-r border-gray-700 px-6 md:px-10 py-4 md:py-6 flex items-center">
                <div className="w-full max-w-4xl">
                  <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6" style={{ color: '#ffffff' }}>{comparison.after.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                    {comparison.after.items.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-center gap-3 p-4 md:p-5 rounded-lg bg-gray-50 border border-gray-200"
                      >
                        <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-600 break-words leading-relaxed">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* After Section - E-commerce classique (overlay - full width, slides from right) */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: useTransform(x, (value) => {
                  if (!containerRef.current) return "inset(0 50% 0 0)"
                  const containerWidth = containerRef.current.offsetWidth
                  const percent = (value / containerWidth) * 100
                  // Inverser : quand slider va à droite, révéler plus (diminuer le pourcentage)
                  return `inset(0 ${100 - percent}% 0 0)`
                }),
              }}
            >
              {/* Fond blanc opaque pour masquer le contenu derrière - sans opacity ni blur */}
              <div className="absolute inset-0 bg-white border-l border-gray-200" />
              {/* Contenu avec opacity et blur */}
              <div 
                className="absolute inset-0 flex items-center"
                style={{
                  opacity: 0.4,
                }}
              >
                <div className="w-full px-6 md:px-10 py-4 md:py-6">
                  <div className="w-full max-w-4xl">
                    <h3 className="text-xl md:text-2xl font-normal text-black mb-4 md:mb-6">{comparison.before.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                      {comparison.before.items.map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-center gap-3 p-4 md:p-5 rounded-lg bg-gray-50 border border-gray-200"
                        >
                          <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-600 break-words leading-relaxed">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-0 bottom-0 w-px bg-gray-400 cursor-col-resize z-30"
              style={{
                x: useTransform(x, (value) => {
                  if (!containerRef.current) return 0
                  return Math.max(0, Math.min(containerRef.current.offsetWidth - 1, value))
                }),
              }}
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
            >
              {/* Handle Circle - much smaller */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-gray-400 flex items-center justify-center cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GripVertical className="w-3 h-3 text-gray-500" />
              </motion.div>
            </motion.div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">Glissez pour comparer</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

