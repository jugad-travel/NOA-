"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, ShoppingCart, RotateCcw, ArrowRight } from "lucide-react"
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
      <div className="absolute inset-0 bg-brand/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-dark-50/50 border border-white/5 rounded-3xl p-8 hover:border-brand/30 transition-colors h-full flex flex-col">
        <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors flex-shrink-0">
          <Icon className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-xl font-normal text-white mb-3 flex-shrink-0">{label}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
      </div>
    </motion.div>
  )
}

export function Performance() {
  return (
    <Section variant="gradient" padding="xl" noise>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-4">Performance & ROI</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Des résultats mesurables
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 items-stretch">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={metric.label} {...metric} index={index} />
          ))}
        </div>
        
        <ScrollReveal delay={0.4}>
          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-3xl blur-xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12 text-center">
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Chaque module NOA agit sur un point de friction précis du parcours.
                <br className="hidden md:block" />
                <span className="text-brand font-medium">
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

