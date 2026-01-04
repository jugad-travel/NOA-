"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NoaFloatingDemo } from "./NoaFloatingDemo"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-dark-200 noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <Badge className="mb-6">
                <span className="w-2 h-2 rounded-full bg-brand mr-2 animate-pulse" />
                Conseiller de vente IA
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-brand">Noa</span> : Le premier conseiller de vente IA qui vend comme en magasin.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-lg md:text-xl text-gray-300 mb-8">
                <p>
                  À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit.
                </p>
                <p>
                  De l'intention floue au panier final, transformez votre site en vendeur digital performant et augmentez votre conversion dès aujourd'hui.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="xl" magnetic className="w-full sm:w-auto">
                    Réserver une démo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="#demo-video" className="flex items-center justify-center gap-2 text-gray-300 hover:text-brand transition-colors px-6 py-3 rounded-full border border-gray-700 hover:border-brand/50 group">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Play className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-medium">Voir Noa en action</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right content - Demo */}
          <div className="order-1 lg:order-2">
            <NoaFloatingDemo />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-200 to-transparent z-10" />
    </section>
  )
}

