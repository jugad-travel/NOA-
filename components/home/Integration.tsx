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
const cmsLogos = [
  {
    name: "Magento",
    image: "/images/Logo magento.png",
  },
  {
    name: "Shopify",
    image: "/images/Logo shopify .webp",
  },
  {
    name: "WordPress",
    image: "/images/Logo wordpress.png",
  },
  {
    name: "Framer",
    image: "/images/Logo Framer .svg",
  },
  {
    name: "PrestaShop",
    image: "/images/Logo Prestashop.png",
  },
  {
    name: "WooCommerce",
    image: "/images/Logo WooCommerce.png",
  },
  {
    name: "Webflow",
    image: "/images/Logo Webflow.webp",
  },
]

export function Integration() {
  return (
    <Section variant="white" padding="lg" className="pt-4 md:pt-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Intégration technique</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 font-display">
              Une suite modulaire, intégrée à votre stack existante
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Parcel s'installe comme une couche intelligente sur votre stack existante. Compatible avec Shopify, Magento, WordPress, Framer, PrestaShop, WooCommerce, Webflow et les architectures Headless via API.
            </p>
          </div>
        </ScrollReveal>
        
        {/* CMS Logos */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-12 border-y border-gray-200">
            {cmsLogos.map((cms) => (
              <div
                key={cms.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-20 h-20 rounded-2xl border border-gray-200 flex items-center justify-center p-4 group-hover:border-brand-blue/30 transition-colors" style={{ backgroundColor: "#fcf2f8" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9e6f0"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fcf2f8"}>
                  <Image
                    src={cms.image}
                    alt={cms.name}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">{cms.name}</span>
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
                  Sur Shopify, l'installation est native : app + widgets en quelques clics.
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Catalogue synchronisé automatiquement, questions de vente générées par l'IA.
                </p>
              </div>
            </div>
            {SHOPIFY_APP_STORE_URL ? (
              <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Button variant="primary" size="lg">
                  Installer sur Shopify
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            ) : (
              <span className="shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600">
                Bientôt sur l'App Store Shopify
              </span>
            )}
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
