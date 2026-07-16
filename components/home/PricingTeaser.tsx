"use client"

import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight, BarChart3, Search, MessageSquareWarning } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

const modules = [
  {
    name: "Intentions exprimées",
    description: "Comprendre ce que vos visiteurs demandent réellement",
    features: ["Demandes en langage naturel", "Usages et contraintes", "Produits recherchés"],
    icon: Search,
  },
  {
    name: "Freins à la décision",
    description: "Identifier les questions qui reviennent et les points de blocage",
    features: ["Objections récurrentes", "Comparaisons demandées", "Informations manquantes"],
    icon: MessageSquareWarning,
  },
  {
    name: "Parcours assistés",
    description: "Suivre les interactions utiles jusqu’à la décision",
    features: ["Étapes sollicitées", "Produits recommandés", "Indicateurs de conversion assistée"],
    icon: BarChart3,
  },
]

export function PricingTeaser() {
  return (
    <Section variant="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Analytics & Insights</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 font-display">
              Transformez les conversations en décisions marchandes
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Le tableau de bord Parcel montre les demandes, les freins et les parcours assistés sur l’ensemble du funnel.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {modules.map((module) => (
            <StaggerItem key={module.name}>
              <Card hover className="h-full flex flex-col">
                <div className="flex-1">
                  <module.icon className="mb-5 size-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/produits#analytics-insights">
              <Button variant="primary" size="xl" magnetic>
                Découvrir les insights Parcel
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
