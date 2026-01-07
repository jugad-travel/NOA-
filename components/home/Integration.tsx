"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

// Tech logos as SVG components
const techLogos = [
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 109 124" fill="currentColor" className="w-8 h-8">
        <path d="M95.77 24.85c-.07-.47-.47-.74-.8-.77-.33-.03-7.1-.53-7.1-.53s-5.63-5.57-6.2-6.13c-.57-.57-1.67-.4-2.1-.27-.03 0-1.13.37-3.03.97-1.8-5.17-4.97-9.9-10.57-9.9h-.5c-1.6-2.07-3.57-2.97-5.27-2.97-13 0-19.23 16.27-21.2 24.53-5.1 1.57-8.73 2.7-9.17 2.83-2.83.9-2.93 1-3.3 3.67-.27 2-.1.07-7.97 61.37l59.53 11.17 32.23-6.97s-14.43-97.23-14.53-97.93z"/>
      </svg>
    ),
  },
  {
    name: "Adobe Commerce",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.001 5.539L16.362 19.5h-3.2l-.876-2.903H8.713L7.838 19.5H4.637L9 5.539h3.001zm-.001 2.903L10.127 14.4h3.744L12 8.442zM19.363 5.539V19.5h-2.726V5.539h2.726z"/>
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h6.753l4.027 2.355-.64-2.355h9.395c1.236 0 2.237-1 2.237-2.237V7.085c0-1.236-1-2.237-2.237-2.237H2.228z"/>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        <path fillRule="evenodd" d="M12 21.35c6.627 0 12-4.142 12-6.35s-5.373-6.35-12-6.35S0 12.792 0 15s5.373 6.35 12 6.35z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: "Strapi",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M7.953 15.066V8.044h7.088v7.022H7.953z"/>
      </svg>
    ),
  },
]

export function Integration() {
  return (
    <Section variant="white" padding="lg">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Intégration technique</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 font-display">
              Une suite modulaire, intégrée à votre stack existante
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Noa s'installe comme une couche intelligente sur votre stack existante. Compatible avec Shopify, Magento, Salesforce et les architectures Headless via API.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Tech Logos */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-12 border-y border-gray-200">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors">
                  {tech.svg}
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">{tech.name}</span>
              </div>
            ))}
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
