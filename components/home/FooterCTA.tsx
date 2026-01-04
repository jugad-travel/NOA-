"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function FooterCTA() {
  return (
    <Section variant="dark" padding="xl" noise>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-brand/10 rounded-3xl blur-3xl" />
            
            <div className="relative glass rounded-3xl p-8 md:p-16 text-center">
              <div className="w-20 h-20 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-brand" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Prêt à activer votre nouveau conseiller de vente digital ?
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="xl" magnetic>
                    Demander une démo personnalisée
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/produits">
                  <Button variant="secondary" size="xl">
                    Découvrir la suite NOA
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

