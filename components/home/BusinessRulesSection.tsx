"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

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
              Vos équipes gardent la main
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
              Parcel utilise vos données et vos priorités pour produire des recommandations cohérentes avec votre commerce.
            </p>
          </div>
        </ScrollReveal>

        {/* Rectangle avec dégradé en arrière-plan */}
        <div 
          className="relative rounded-2xl md:rounded-3xl mx-2 sm:mx-4 md:mx-8 my-6 sm:my-8 md:my-12 mb-16"
          style={{
            background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
          }}
        >
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Contenu unifié avec cartes */}
            <ScrollReveal delay={0.1}>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: '#000000' }}>
                  Ce que vous pouvez piloter
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                  {merchantControls.map((control, index) => (
                    <div
                      key={index}
                      className="bg-transparent rounded-xl px-5 py-4 border-2"
                      style={{ borderColor: '#000000' }}
                    >
                      <p className="text-base md:text-lg text-center font-semibold" style={{ color: '#000000' }}>
                        {control}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: '#000000' }}>
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
        </div>

        {/* Résultat */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-semibold" style={{ color: '#ffffff' }}>
              Les décisions restent explicables, ajustables et analysables depuis les insights Parcel.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
