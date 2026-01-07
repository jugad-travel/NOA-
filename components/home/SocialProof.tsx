"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const categories = [
  "Grand compte",
  "Retail",
  "Outdoor",
  "Sports",
]

export function SocialProof() {
  return (
    <Section variant="white" padding="md">
      <ScrollReveal>
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
            Ils nous font confiance
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-center w-32 h-16 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 font-medium hover:border-gray-300 transition-colors"
            >
              {category}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
