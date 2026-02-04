"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { Card } from "@/components/ui/card"

const rules = [
  {
    title: "Contexte et projet du client",
    description: "PARCEL comprend le besoin spécifique de chaque client et adapte ses recommandations en conséquence.",
  },
  {
    title: "Règles métier explicites",
    description: "Chaque décision respecte les règles business que vous avez établies au préalable avec notre équipe.",
  },
  {
    title: "Contraintes réelles et pilotables",
    description: "Stock, prix, priorités commerciales... PARCEL arbitre selon vos contraintes opérationnelles.",
  },
]

export function BusinessRulesSection() {
  return (
    <Section variant="dark" padding="lg">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Coté marchand : Parcel arbitre chaque recommandation selon vos règles business.
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
              Notre agent s'appuie sur une couche de décision structurée qui arbitre chaque réponse selon :
            </p>
          </div>
        </ScrollReveal>

        {/* Cartes explicatives */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
          {rules.map((rule) => (
            <StaggerItem key={rule.title}>
              <Card glow className="h-full">
                <div>
                  <h3 className="text-lg font-normal text-white mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-gray-400">
                    {rule.description}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Résultat */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-semibold" style={{ color: '#ffffff' }}>
              Résultat : on arbitre comme un vendeur humain, mais de façon cohérente, mesurable et scalable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
