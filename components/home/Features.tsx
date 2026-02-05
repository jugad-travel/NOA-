"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { BarChart3 } from "lucide-react"

const apports = [
  "Meilleure conversion, pilotée par la décision",
  "Paniers plus cohérents, alignés avec les besoins réels",
  "Réduction des abandons liés à l'hésitation",
  "Valorisation intelligente des données catalogue",
  "Insights exploitables sur les intentions clients",
]

function FeatureCard({ apport, index }: { apport: string; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // La carte est mise en avant quand elle est au centre du viewport
    once: false,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.7, scale: 0.98 }}
      animate={{
        opacity: isInView ? 1 : 0.7,
        scale: isInView ? 1 : 0.98,
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }}
    >
      <div
        className={`p-6 rounded-2xl border transition-all ${
          isInView
            ? "bg-white/20 border-white/40 shadow-lg"
            : "bg-white/10 border-white/20"
        }`}
      >
        <div className="flex items-start gap-4">
          <BarChart3 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <p className="text-lg" style={{ color: '#ffffff' }}>
            {apport}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Features() {

  return (
    <Section variant="dark" padding="lg">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-4 text-white">Fonctionnalités</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ color: '#ffffff' }}>
              Plus qu'un chatbot : Parcel est un moteur de croissance.
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="space-y-4">
          {apports.map((apport, index) => (
            <FeatureCard key={index} apport={apport} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}

