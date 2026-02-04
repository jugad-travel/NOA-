"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { BarChart3 } from "lucide-react"

const apports = [
  "Meilleure conversion, pilotée par la décision",
  "Paniers plus cohérents, alignés avec les besoins réels",
  "Réduction des abandons liés à l'hésitation",
  "Valorisation intelligente des données catalogue",
  "Insights exploitables sur les intentions clients",
]

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
        
        <StaggerContainer className="space-y-4" staggerDelay={0.1}>
          {apports.map((apport, index) => (
            <StaggerItem key={index}>
              <Card className="p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-900 text-lg">
                    {apport}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}

