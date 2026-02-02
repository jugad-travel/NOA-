"use client"

import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

const modules = [
  {
    name: "PARCEL Projet",
    description: "Transformer une intention en panier complet",
    features: ["Page d'accueil", "Catégories larges", "Besoin global"],
  },
  {
    name: "PARCEL Match",
    description: "Aider à choisir le bon produit",
    features: ["Pages catégories", "Fiches produits", "Tailles & gammes"],
  },
  {
    name: "PARCEL Expert",
    description: "Répondre aux questions produit",
    features: ["Fiche produit", "Comparaisons", "Caractéristiques"],
  },
  {
    name: "PARCEL Complete",
    description: "Compléter intelligemment le panier",
    features: ["Page panier", "Checkout", "Accessoires"],
  },
]

export function PricingTeaser() {
  return (
    <Section variant="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Modules activables</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 font-display">
              Une approche modulaire et progressive
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Activez les modules dont vous avez besoin, là où ils ont le plus d'impact.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {modules.map((module) => (
            <StaggerItem key={module.name}>
              <Card hover className="h-full flex flex-col">
                <div className="flex-1">
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
            <a href="mailto:parcel.webai@gmail.com?subject=Demande de devis personnalisé PARCEL">
              <Button variant="primary" size="xl" magnetic>
                Demander un devis personnalisé
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
