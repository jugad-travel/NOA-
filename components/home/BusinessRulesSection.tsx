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
  "Stratégie de pricing",
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

        {/* Contenu unifié avec cartes */}
        <div className="mb-16">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: '#ffffff' }}>
                Le marchand garde le contrôle sur les :
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {merchantControls.map((control, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <p className="text-base md:text-lg text-center" style={{ color: '#ffffff' }}>
                      {control}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: '#ffffff' }}>
                Ces règles sont :
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ruleCharacteristics.map((characteristic, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl px-6 py-4 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span className="text-gray-900 font-bold text-xl">
                      {characteristic.number}
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
