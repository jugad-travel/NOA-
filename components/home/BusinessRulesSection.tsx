"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { Card } from "@/components/ui/card"

const merchantControls = [
  "Contraintes produit",
  "Priorités commerciales",
  "Objectifs de marge et de rotation",
  "Règles logistiques",
  "Exclusions métier non négociables",
]

const ruleCharacteristics = [
  { number: "01", label: "Formalisée" },
  { number: "02", label: "Paramétrables" },
  { number: "03", label: "Auditables" },
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

        {/* Contenu en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Colonne gauche - Contrôles du marchand */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center" style={{ color: '#ffffff' }}>
                Le marchand garde le contrôle sur les :
              </h3>
              <div className="space-y-3">
                {merchantControls.map((control, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl px-4 py-3 border border-gray-700"
                  >
                    <p className="text-base md:text-lg" style={{ color: '#ffffff' }}>
                      {control}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Colonne droite - Caractéristiques des règles */}
          <ScrollReveal delay={0.2}>
            <div className="md:grid md:grid-rows-[auto_1fr] md:h-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center" style={{ color: '#ffffff' }}>
                Ces règles sont :
              </h3>
              <div className="space-y-4 md:flex md:flex-col md:justify-center">
                {ruleCharacteristics.map((characteristic, index) => (
                  <div
                    key={index}
                    className="rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-200"
                    style={{ backgroundColor: "#fcf2f8" }}
                  >
                    <span className="text-gray-900 font-bold text-lg md:text-xl">
                      {characteristic.number}.
                    </span>
                    <span className="text-gray-900 font-semibold text-base md:text-lg">
                      {characteristic.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Résultat */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-semibold" style={{ color: '#ffffff' }}>
              Résultat : Parcel arbitre comme un vendeur humain, mais de façon cohérente, mesurable et scalable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
