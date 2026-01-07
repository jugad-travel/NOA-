"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, ShoppingCart, RotateCcw } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const metrics = [
  {
    icon: TrendingUp,
    label: "Taux de conversion",
    description: "Hausse significative taux de conversion sur les parcours assistés",
  },
  {
    icon: ShoppingCart,
    label: "Panier moyen",
    description: "Augmentation panier moyen sur les achats multi-produits",
  },
  {
    icon: RotateCcw,
    label: "Retours",
    description: "Réduction retours liés à une erreur de choix",
  },
]

function AnimatedMetric({ icon: Icon, label, description, index }: { 
  icon: React.ElementType
  label: string
  description: string
  index: number 
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:border-brand-blue/30 transition-all">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 flex items-center justify-center mb-6 group-hover:from-brand-cyan/30 group-hover:to-brand-blue/30 transition-colors">
          <Icon className="w-8 h-8 text-brand-blue" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{label}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export function Performance() {
  return (
    <Section variant="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-4">Performance & ROI</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display">
              Des résultats mesurables
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={metric.label} {...metric} index={index} />
          ))}
        </div>
        
        <ScrollReveal delay={0.4}>
          <div className="relative">
            <div 
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(208, 247, 251, 0.3) 0%, rgba(131, 166, 255, 0.3) 50%, rgba(255, 150, 107, 0.3) 100%)"
              }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Chaque module NOA agit sur un point de friction précis du parcours.
                <br className="hidden md:block" />
                <span className="text-gray-900 font-medium">
                  Leur combinaison permet une amélioration progressive et mesurable de la performance globale.
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
