"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, GripVertical } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

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
  const [sliderPosition, setSliderPosition] = React.useState(50)
  const [isManual, setIsManual] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(50)
  const autoSlideRef = React.useRef<NodeJS.Timeout | null>(null)
  const directionRef = React.useRef<number>(1) // 1 for right, -1 for left

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if (!containerRef.current) return
    
    setIsManual(true)
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
      autoSlideRef.current = null
    }
    
    const containerWidth = containerRef.current.offsetWidth
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX
    const newPercent = Math.max(0, Math.min(100, ((clientX - rect.left) / containerWidth) * 100))
    
    setSliderPosition(newPercent)
    x.set((newPercent / 100) * containerWidth)
  }

  const handleDragStart = () => {
    setIsManual(true)
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
      autoSlideRef.current = null
    }
  }

  // Auto-slide functionality
  React.useEffect(() => {
    if (!isManual && containerRef.current) {
      autoSlideRef.current = setInterval(() => {
        setSliderPosition((prev) => {
          const newPos = prev + directionRef.current * 0.3 // Move 0.3% per interval
          const minPos = 20 // Don't go all the way to the left
          const maxPos = 80 // Don't go all the way to the right
          
          if (newPos >= maxPos) {
            directionRef.current = -1
            return maxPos
          } else if (newPos <= minPos) {
            directionRef.current = 1
            return minPos
          }
          
          return newPos
        })
      }, 30) // Update every 30ms for smooth animation
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [isManual])

  React.useEffect(() => {
    if (containerRef.current) {
      x.set((sliderPosition / 100) * containerRef.current.offsetWidth)
    }
  }, [sliderPosition, x])

  return (
    <Section variant="gradient" padding="lg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            À chaque étape du parcours d'achat, vos clients hésitent.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl" ref={containerRef}>
            {/* Before Section - Avec NOA (left side, fixed) */}
            <div className="relative min-h-[600px] flex items-center">
              <div className="w-full bg-white border-r border-green-500/20 p-8 md:p-12">
                <div className="max-w-4xl">
                  <h3 className="text-xl md:text-2xl font-normal text-black mb-8">{comparison.after.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comparison.after.items.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-500/20"
                      >
                        <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm md:text-base text-black font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* After Section - E-commerce classique (overlay - full width, slides from right) */}
            <motion.div
              className="absolute inset-0 bg-white border-l border-red-500/20 overflow-hidden flex items-center"
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
              {/* Fixed content positioned at the right of the page */}
              <div className="w-full pl-8 md:pl-12 pr-8 md:pr-12 py-8 md:py-12">
                <div className="max-w-4xl ml-auto">
                  <h3 className="text-xl md:text-2xl font-normal text-black mb-8">{comparison.before.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comparison.before.items.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-500/20"
                      >
                        <ArrowRight className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-sm md:text-base text-red-400">{item.text}</span>
                      </motion.div>
                    ))}
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
              onDragStart={handleDragStart}
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

