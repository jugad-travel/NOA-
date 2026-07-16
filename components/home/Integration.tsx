"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SHOPIFY_APP_STORE_URL } from "@/lib/videos"

// CMS logos
const accessModes = [
  { name: "Shopify", detail: "Application native disponible", status: "Disponible", image: "/images/Logo shopify .webp" },
  { name: "API Parcel", detail: "Intégration back-end CMS-agnostique", status: "Disponible", image: "/images/Logo Parcel sans écriture.png" },
]

export function Integration() {
  return (
    <Section variant="white" padding="lg" className="pt-4 md:pt-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Intégration technique</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 font-display">
              Deux voies d’intégration disponibles aujourd’hui
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Installez l’application Shopify ou connectez directement l’API back-end Parcel à votre stack. Les autres connecteurs CMS sont en préparation.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Available integrations */}
        <ScrollReveal delay={0.2}>
          <div className="grid gap-4 border-y border-gray-200 py-8 md:grid-cols-2 md:py-12">
            {accessModes.map((cms) => (
              <div
                key={cms.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-3">
                  <Image
                    src={cms.image}
                    alt={cms.name}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <span className="mb-1 inline-flex rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">{cms.status}</span>
                  <p className="font-semibold text-gray-900">{cms.name}</p>
                  <p className="text-sm text-gray-500">{cms.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Shopify highlight */}
        <ScrollReveal delay={0.25}>
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2.5 shrink-0">
                <Image
                  src="/images/Logo shopify .webp"
                  alt="Shopify"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {"Sur Shopify, l'installation est native : app + widgets en quelques clics."}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  {"Catalogue synchronisé automatiquement, questions de vente générées par l'IA."}
                </p>
              </div>
            </div>
            <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button variant="primary" size="lg">
                Voir l’app Shopify
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/integrations-tech">
              <Button variant="outline" size="lg">
                Voir toutes les intégrations
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
