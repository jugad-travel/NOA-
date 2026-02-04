"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingRule {
  id: string
  label: string
  weight: number
  position: { x: number; y: number }
}

export function BusinessRulesAnimation() {
  const [phase, setPhase] = React.useState<"initial" | "adjust" | "constraint" | "arbitrage" | "explicability" | "reset">("initial")
  const [rules, setRules] = React.useState<FloatingRule[]>([
    { id: "marge", label: "Marge minimale", weight: 0.3, position: { x: 15, y: 25 } },
    { id: "stock", label: "Disponibilité stock", weight: 0.3, position: { x: 85, y: 25 } },
    { id: "usage", label: "Compatibilité usage", weight: 0.3, position: { x: 15, y: 75 } },
    { id: "priorites", label: "Priorités commerciales", weight: 0.3, position: { x: 85, y: 75 } },
  ])
  const [showMessage, setShowMessage] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [showRecommendation, setShowRecommendation] = React.useState(false)
  const [showExplicability, setShowExplicability] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

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

      // Phase 0: État initial (repos) - Montrer les 4 règles
      setPhase("initial")
      setShowMessage(false)
      setShowRecommendation(false)
      setShowExplicability(false)
      setRules([
        { id: "marge", label: "Marge minimale", weight: 0.3, position: { x: 15, y: 25 } },
        { id: "stock", label: "Disponibilité stock", weight: 0.3, position: { x: 85, y: 25 } },
        { id: "usage", label: "Compatibilité usage", weight: 0.3, position: { x: 15, y: 75 } },
        { id: "priorites", label: "Priorités commerciales", weight: 0.3, position: { x: 85, y: 75 } },
      ])
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Phase 1: Ajustement de priorité - "Marge minimale" prend plus de poids
      setPhase("adjust")
      setRules(prev => prev.map(r => 
        r.id === "marge" ? { ...r, weight: 0.8 } : r
      ))
      await new Promise(resolve => setTimeout(resolve, 800))
      setMessage("Priorité ajustée")
      setShowMessage(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setShowMessage(false)
      await new Promise(resolve => setTimeout(resolve, 500))
      setShowRecommendation(true)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Phase 2: Activation d'une contrainte - Nouvelle règle apparaît
      setPhase("constraint")
      setRules(prev => [
        ...prev,
        { id: "exclusion", label: "Exclusion produits non adaptés", weight: 0.6, position: { x: 50, y: 50 } }
      ])
      await new Promise(resolve => setTimeout(resolve, 800))
      setRules(prev => prev.map(r => 
        r.id !== "exclusion" && r.id !== "marge" ? { ...r, weight: Math.max(0.2, r.weight - 0.15) } : r
      ))
      setMessage("Contrainte intégrée")
      setShowMessage(true)
      await new Promise(resolve => setTimeout(resolve, 2500))
      setShowMessage(false)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Phase 3: Arbitrage automatique - Toutes les règles se stabilisent
      setPhase("arbitrage")
      setRules(prev => prev.map(r => ({ ...r, weight: Math.min(0.9, r.weight + 0.1) })))
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage("Décision arbitrée sous contraintes actives")
      setShowMessage(true)
      await new Promise(resolve => setTimeout(resolve, 3000))
      setShowMessage(false)
      await new Promise(resolve => setTimeout(resolve, 800))

      // Phase 4: Explicabilité - Badges de critères apparaissent
      setPhase("explicability")
      setShowExplicability(true)
      await new Promise(resolve => setTimeout(resolve, 3500))
      setShowExplicability(false)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Retour à l'état initial
      setPhase("reset")
      setShowRecommendation(false)
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Relancer la séquence
      if (isRunning) {
        sequence()
      }
    }

    const timer = setTimeout(() => {
      sequence()
    }, 1500)

    return () => {
      isRunning = false
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[600px] md:min-h-[700px] pointer-events-none">
      <div 
        className="relative w-full h-full"
        style={{
          transform: isMobile ? 'scale(0.9)' : 'scale(1)',
          transformOrigin: 'center',
          minHeight: '600px'
        }}
      >
        {/* Règles flottantes - Toujours visibles */}
        {rules.map((rule) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              left: `${rule.position.x}%`,
              top: `${rule.position.y}%`,
              willChange: 'transform, opacity'
            }}
          >
            <motion.div
              className={cn(
                "bg-white backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-2 transition-all duration-500",
                rule.weight > 0.6 
                  ? "border-brand-blue shadow-[0_6px_20px_rgba(131,166,255,0.4)] scale-105" 
                  : "border-gray-300 shadow-lg"
              )}
              animate={{
                scale: rule.weight > 0.6 ? 1.1 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                {/* Indicateur de poids - barre plus visible */}
                <motion.div 
                  className="h-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue"
                  style={{ 
                    width: `${Math.max(20, rule.weight * 50)}px`,
                    minWidth: '20px'
                  }}
                  animate={{
                    width: `${Math.max(20, rule.weight * 50)}px`,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <span className="text-sm md:text-base text-gray-800 font-semibold whitespace-nowrap">
                  {rule.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Produit recommandé flottant - Centré */}
        <AnimatePresence>
          {showRecommendation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: phase === "arbitrage" ? [1, 1.1, 1] : 1,
                y: 0
              }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ 
                duration: 0.7, 
                ease: "easeOut",
                scale: phase === "arbitrage" ? { duration: 1.5, repeat: Infinity, repeatType: "reverse" } : undefined
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                willChange: 'transform, opacity'
              }}
            >
              <motion.div
                className={cn(
                  "bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border-2 transition-all duration-500",
                  phase === "arbitrage" 
                    ? "border-brand-blue shadow-[0_12px_40px_rgba(131,166,255,0.5)]" 
                    : "border-brand-blue/60"
                )}
                animate={phase === "arbitrage" ? {
                  boxShadow: [
                    "0 12px 40px rgba(131,166,255,0.5)",
                    "0 16px 50px rgba(131,166,255,0.7)",
                    "0 12px 40px rgba(131,166,255,0.5)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: phase === "arbitrage" ? Infinity : 0, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-3xl md:text-4xl">P</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className="font-bold text-lg md:text-xl text-gray-900">Produit recommandé</h4>
                      <span className="text-xs md:text-sm px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-semibold">
                        Recommandé
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600">Sélectionné selon vos règles</p>
                  </div>
                </div>

                {/* Critères d'explicabilité */}
                {showExplicability && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-gray-200"
                  >
                    {["Adapté à l'usage", "Disponible", "Aligné avec les priorités"].map((criteria, idx) => (
                      <motion.span
                        key={criteria}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.2, duration: 0.4 }}
                        className="text-xs md:text-sm px-4 py-2 bg-brand-cyan/10 text-brand-cyan rounded-full font-semibold"
                      >
                        {criteria}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages flottants - En haut, bien visibles */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 z-30"
              style={{ top: '8%' }}
            >
              <div className="bg-white/98 backdrop-blur-md rounded-xl px-6 py-3 shadow-2xl border-2 border-brand-blue/30">
                <p className="text-base md:text-lg font-bold text-gray-900 whitespace-nowrap">
                  {message}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
