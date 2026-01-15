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
            <Badge className="mb-4 text-white">Fonctionnalités</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ color: '#ffffff' }}>
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
                  <div>
                    <h3 className="text-lg font-normal text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.benefit}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </Section>
  )
}

