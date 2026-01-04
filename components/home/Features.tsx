"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain, Zap, ShoppingCart, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

const features = [
  {
    icon: Brain,
    title: "Business Intelligence Conversationnelle",
    benefit: "Comprend les besoins complexes (ex: \"Je prépare un marathon\").",
  },
  {
    icon: Zap,
    title: "Connexion Catalogue Live",
    benefit: "Recherche et suggère les produits en stock en temps réel.",
  },
  {
    icon: ShoppingCart,
    title: "Ajout au Panier Natif",
    benefit: "Réduit les frictions : le conseiller remplit le panier pour le client.",
  },
  {
    icon: TrendingUp,
    title: "Upsell Contextuel",
    benefit: "Suggère l'accessoire indispensable, jamais le superflu.",
  },
]

export function Features() {
  return (
    <Section variant="dark" padding="lg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-4">Fonctionnalités</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Plus qu'un chatbot : Noa est un moteur de croissance.
            </h2>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <Card glow className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.benefit}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
        
        {/* Features Table Header */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-brand">Fonctionnalité</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-brand">Bénéfice</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.title} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{feature.title}</td>
                    <td className="py-4 px-4 text-gray-400">{feature.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

