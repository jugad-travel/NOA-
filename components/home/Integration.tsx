"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

// Tech logos as SVG components
const techLogos = [
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 109 124" fill="currentColor" className="w-8 h-8">
        <path d="M95.77 24.85c-.07-.47-.47-.74-.8-.77-.33-.03-7.1-.53-7.1-.53s-5.63-5.57-6.2-6.13c-.57-.57-1.67-.4-2.1-.27-.03 0-1.13.37-3.03.97-1.8-5.17-4.97-9.9-10.57-9.9h-.5c-1.6-2.07-3.57-2.97-5.27-2.97-13 0-19.23 16.27-21.2 24.53-5.1 1.57-8.73 2.7-9.17 2.83-2.83.9-2.93 1-3.3 3.67-.27 2-.1.07-7.97 61.37l59.53 11.17 32.23-6.97s-14.43-97.23-14.53-97.93zM67.87 27.5l-7.43 2.3c0-1.5-.1-3.67-.5-6.2 3.07.9 5.03 4.03 5.93 8.9zm-11.8 3.63c-.13-.1-2.1-.73-4.9-1.53l.2-.77c1.37-5.07 3.97-10.1 8.27-10.1h.4c.57 1.13 1 2.53 1.03 4.37.03 4.1-1.13 9.47-5 12.03z"/>
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
        <path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h6.753l4.027 2.355-.64-2.355h9.395c1.236 0 2.237-1 2.237-2.237V7.085c0-1.236-1-2.237-2.237-2.237H2.228zm2.983 2.09c.626.037 1.168.397 1.587 1.037.839 1.295.924 3.601.236 5.97-.456 1.569-1.2 2.69-2.066 3.096-.244.114-.5.17-.756.17-.352 0-.704-.114-1.036-.341l.009-.012c-.016-.01-.03-.02-.047-.029l.003-.004c-.85-.559-1.274-1.913-1.166-3.704.108-1.789.698-3.408 1.578-4.334.398-.418.831-.66 1.266-.754.131-.03.262-.044.392-.044v-.051zm13.004 0c.626.037 1.168.397 1.587 1.037.839 1.295.924 3.601.236 5.97-.456 1.569-1.2 2.69-2.066 3.096-.244.114-.5.17-.756.17-.352 0-.704-.114-1.036-.341l.009-.012c-.016-.01-.03-.02-.047-.029l.003-.004c-.85-.559-1.274-1.913-1.166-3.704.108-1.789.698-3.408 1.578-4.334.398-.418.831-.66 1.266-.754.131-.03.262-.044.392-.044v-.051zm-6.493.077c.455 0 .867.152 1.198.457.329.305.578.745.746 1.32.217.74.29 1.628.19 2.577-.14 1.337-.517 2.391-1.131 3.157-.468.584-1.01.878-1.611.878-.434 0-.848-.171-1.189-.466l.004-.004c-.013-.012-.026-.023-.04-.034l.003-.003c-.42-.377-.693-1.034-.81-1.956-.144-1.125-.037-2.155.317-3.072.422-1.09 1.061-1.854 1.867-1.854h.456z"/>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        <path fillRule="evenodd" d="M12 21.35c6.627 0 12-4.142 12-6.35s-5.373-6.35-12-6.35S0 12.792 0 15s5.373 6.35 12 6.35zm0-1.5c-5.523 0-10-3.358-10-4.85s4.477-4.85 10-4.85 10 3.358 10 4.85-4.477 4.85-10 4.85z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M7.046 18.696c3.314 5.742 8.34 8.847 10.25 7.743 1.91-1.105 1.277-7.205-2.037-12.947S6.919.646 5.01 1.75C3.1 2.855 3.732 8.955 7.046 18.696zm1.299-.75c-2.762-8.108-2.973-13.05-1.792-13.732 1.18-.682 5.03 2.962 7.793 11.07 2.762 8.108 2.973 13.05 1.792 13.732-1.18.682-5.03-2.962-7.793-11.07z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M16.954 18.696c-3.314 5.742-8.34 8.847-10.25 7.743-1.91-1.105-1.277-7.205 2.037-12.947S17.081.646 18.99 1.75c1.91 1.105 1.278 7.205-2.036 12.946zm-1.299-.75c2.762-8.108 2.973-13.05 1.792-13.732-1.18-.682-5.03 2.962-7.793 11.07-2.762 8.108-2.973 13.05-1.792 13.732 1.18.682 5.03-2.962 7.793-11.07z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: "Strapi",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M7.953 15.066V8.044h7.088v7.022H7.953zm11.141-7.022h-2.3a.433.433 0 01-.433-.433V5.312a.433.433 0 00-.433-.433H8.386a.433.433 0 00-.433.433v2.299a.433.433 0 01-.433.433H5.219a.433.433 0 00-.433.433v7.022c0 .239.194.433.433.433h2.3c.24 0 .434.194.434.433v2.299c0 .239.193.433.432.433h7.542a.433.433 0 00.433-.433v-2.3a.433.433 0 01.433-.432h2.3a.433.433 0 00.434-.433V8.478a.433.433 0 00-.433-.434z"/>
      </svg>
    ),
  },
]

export function Integration() {
  return (
    <Section variant="dark" padding="lg">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">Intégration technique</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Une suite modulaire, intégrée à votre stack existante
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Noa s'installe comme une couche intelligente sur votre stack existante. Compatible avec Shopify, Magento, Salesforce et les architectures Headless via API.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Tech Logos */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-12 border-y border-white/5">
            {techLogos.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-dark-50 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand group-hover:border-brand/30 transition-colors">
                  {tech.svg}
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/integrations-tech">
              <Button variant="secondary" size="lg">
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

