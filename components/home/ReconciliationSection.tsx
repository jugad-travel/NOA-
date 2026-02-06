"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function ReconciliationSection() {
  return (
    <Section variant="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              Parcel réconcilie IA conversationnelle et décision commerciale réelle.
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Deux cartes */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Carte 01 */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  01.
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Un vendeur digital pour le client
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  qui intervient sans perte de contexte sur l'ensemble du tunnel de vente
                </p>
              </div>
            </div>
            
            {/* Carte 02 */}
            <div className="bg-pink-50 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  02.
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Un moteur gouverné pour le marchand.
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  qui applique ses règles métier, priorités commerciales et contraintes opérationnelles
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
