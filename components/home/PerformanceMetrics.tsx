"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"

const metrics = [
  {
    value: "+10 à +20 %",
    label: "Taux de conversion",
    description: "Réduction de l'hésitation sur catalogues techniques",
  },
  {
    value: "+8 à +15 %",
    label: "Panier moyen",
    description: "Upsell & cross-sell contextualisés au moment de l'arbitrage",
  },
  {
    value: "+10 à +25 %",
    label: "Rotation produits ciblés",
    description: "Orientation vers références prioritaires",
  },
  {
    value: "+2 à +5 pts",
    label: "Marge par commande",
    description: "Priorisation paramétrable des produits à forte contribution",
  },
]

export function PerformanceMetrics() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metrics.length)
    }, 3000) // Change toutes les 3 secondes

    return () => clearInterval(interval)
  }, [])

  const getCardIndex = (position: number) => {
    // position: -1 (gauche), 0 (centre), 1 (droite)
    const index = (currentIndex + position + metrics.length) % metrics.length
    return index
  }

  return (
    <div className="py-4 md:py-5" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative h-36 md:h-40 flex items-center justify-center overflow-visible">
            {/* Carte gauche (arrière-plan) */}
            <motion.div
              key={`left-${getCardIndex(-1)}`}
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 0.3, x: -80, scale: 0.85 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 w-[280px] md:w-[320px]"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 shadow-sm h-full">
                <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {metrics[getCardIndex(-1)].value}
                </div>
                <div className="text-xs font-medium text-gray-700 mb-1">
                  {metrics[getCardIndex(-1)].label}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {metrics[getCardIndex(-1)].description}
                </div>
              </div>
            </motion.div>

            {/* Carte centrale (focus) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute z-10 w-[300px] md:w-[360px]"
              >
                <div className="bg-white rounded-xl border-2 border-gray-300 p-5 md:p-6 shadow-lg h-full">
                  <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                    {metrics[currentIndex].value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-gray-700 mb-1">
                    {metrics[currentIndex].label}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {metrics[currentIndex].description}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carte droite (arrière-plan) */}
            <motion.div
              key={`right-${getCardIndex(1)}`}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 0.3, x: 80, scale: 0.85 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute right-0 w-[280px] md:w-[320px]"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 shadow-sm h-full">
                <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {metrics[getCardIndex(1)].value}
                </div>
                <div className="text-xs font-medium text-gray-700 mb-1">
                  {metrics[getCardIndex(1)].label}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {metrics[getCardIndex(1)].description}
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
