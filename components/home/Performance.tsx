"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const metrics = [
  {
    value: "01",
    label: "Convertir davantage d’intentions qualifiées",
    detail: "Parcel comprend les demandes formulées en langage naturel et rapproche chaque besoin des produits réellement adaptés.",
  },
  {
    value: "02",
    label: "Développer la valeur du panier",
    detail: "Les recommandations complémentaires sont liées au projet et au contexte, pas à une règle de cross-sell générique.",
  },
  {
    value: "03",
    label: "Comprendre les demandes et les freins",
    detail: "Les insights révèlent ce que les visiteurs cherchent, les questions récurrentes et les points qui bloquent la décision.",
  },
]

function AnimatedMetric({ value, label, detail, index }: { 
  value: string
  label: string
  detail: string
  index: number 
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 flex-shrink-0">{value}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-shrink-0">{label}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{detail}</p>
      </div>
    </motion.div>
  )
}

export function Performance() {
  return (
    <Section variant="white" padding="lg" className="pt-8 md:pt-10 pb-4 md:pb-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <Badge className="mb-4">Valeur marchande</Badge>
          </div>
        </ScrollReveal>
        
        {/* Rectangle avec dégradé en arrière-plan */}
        <div 
          className="relative rounded-2xl md:rounded-3xl mx-2 sm:mx-4 md:mx-8 my-6 sm:my-8 md:my-12"
          style={{
            background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
          }}
        >
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-10 md:mb-12 pt-2 sm:pt-4 md:pt-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Trois leviers à mesurer dans votre propre contexte
                </h2>
              </div>
            </ScrollReveal>
        
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 items-stretch">
              {metrics.map((metric, index) => (
                <AnimatedMetric key={metric.label} {...metric} index={index} />
              ))}
            </div>
            
            <ScrollReveal delay={0.3}>
              <p className="mx-auto max-w-3xl text-center text-sm text-gray-700">
                Parcel suit ces indicateurs sur les parcours assistés. Les gains sont ensuite établis sur vos données, idéalement via un test comparatif.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
