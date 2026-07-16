"use client"

import * as React from "react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"

const metrics = [
  {
    value: "24 h / 24",
    label: "disponible en ligne",
    description: "Une aide au choix accessible quand vos clients achètent",
    sourceLabel: "Capacité Parcel",
  },
  {
    value: "+24 %",
    label: "de taux de conversion",
    description: "Résultat publié pour Eurekakids",
    sourceLabel: "Étude de cas Doofinder",
    sourceHref: "https://www.doofinder.com/fr/",
  },
  {
    value: "+12 €",
    label: "de panier moyen",
    description: "Résultat publié pour Eurekakids",
    sourceLabel: "Étude de cas Doofinder",
    sourceHref: "https://www.doofinder.com/fr/",
  },
  {
    value: "94 %",
    label: "de satisfaction client",
    description: "Résultat publié pour Sideshow",
    sourceLabel: "Étude de cas iAdvize",
    sourceHref: "https://www.iadvize.com/fr/vue-densemble",
  },
  {
    value: "−88 %",
    label: "de rebond après recherche",
    description: "Résultat publié pour Lacoste",
    sourceLabel: "Étude de cas Algolia",
    sourceHref: "https://www.algolia.com/files/live/sites/www/files/Customer%20stories/EN/CaseStudy_lacoste-en.pdf",
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
          <div className="relative flex h-40 items-center justify-center overflow-visible md:h-44">
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
                <div className="text-xs leading-relaxed text-gray-500">
                  {metrics[currentIndex].description}
                </div>
                {metrics[currentIndex].sourceHref ? (
                  <a
                    href={metrics[currentIndex].sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[11px] font-medium text-gray-500 underline decoration-gray-300 underline-offset-2 hover:text-gray-900"
                  >
                    {metrics[currentIndex].sourceLabel}
                  </a>
                ) : (
                  <p className="mt-3 text-[11px] font-medium text-gray-400">{metrics[currentIndex].sourceLabel}</p>
                )}
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
        <p className="mx-auto mt-4 max-w-2xl px-5 text-center text-[11px] leading-relaxed text-gray-400">
          Benchmarks publiés par des acteurs du marché. Ils ne constituent ni des résultats Parcel ni une garantie de performance.
        </p>
      </div>
    </div>
  )
}
