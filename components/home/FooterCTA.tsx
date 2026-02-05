"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function FooterCTA() {
  return (
    <Section variant="white" padding="xl">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative">
            {/* Gradient background */}
            <div 
              className="rounded-3xl p-8 md:p-16 text-center"
              style={{
                background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 50%, #ff966b 100%)"
              }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-8 font-display">
                Prêt à activer votre nouveau conseiller de vente digital ?
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:parcel.webai@gmail.com?subject=Demande de démo personnalisée PARCEL">
                  <Button variant="secondary" size="xl" magnetic>
                    Demander une démo personnalisée
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <Link href="/produits" onClick={(e) => {
                  if (window.location.pathname === '/produits') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}>
                  <Button variant="white" size="xl">
                    Découvrir la suite PARCEL
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
