"use client"

import * as React from "react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { Clock, TrendingUp, ArrowRight, Calculator } from "lucide-react"

const blogArticles = [
  {
    slug: "ia-commerce-intelligent",
    title: "Quand le commerce devient intelligent : comment l'intelligence artificielle refonde l'architecture du numérique",
    excerpt: "Une analyse approfondie de la transformation du e-commerce par l'IA, entre assistance, analyse et personnalisation. Découvrez comment l'IA révolutionne l'expérience d'achat en ligne.",
    category: "Conseils CRO",
    readTime: "15 min",
    date: "Jan 2025",
    icon: TrendingUp,
  },
]

export function RessourcesContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="white" padding="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Rectangle avec dégradé en arrière-plan */}
          <div 
            className="relative rounded-3xl mx-4 md:mx-8 p-8 md:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
            }}
          >
            <ScrollReveal>
              <div className="text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Ressources</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Tout ce dont vous avez besoin pour optimiser votre e-commerce
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Découvrez nos conseils CRO, études de cas et ressources pour transformer votre expérience d'achat en ligne.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Simulateur ROI Section */}
      <Section variant="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Outils</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simulateur de ROI
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Calculez l'impact de PARCEL sur votre business et estimez votre retour sur investissement.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Link href="/ressources/simulateur-roi">
              <Card glow className="h-full group cursor-pointer hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Calculator className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Calculez votre ROI avec PARCEL
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Obtenez une estimation précise de votre retour sur investissement. 
                      Remplissez quelques informations sur votre business et découvrez l'impact que PARCEL peut avoir sur vos performances commerciales.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 group-hover:gap-3 transition-all font-medium">
                      <span>Accéder au simulateur</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </ScrollReveal>
        </div>
      </Section>

      {/* Blog Section */}
      <Section id="blog" variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <Badge className="mb-4">Blog</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Conseils CRO
                </h2>
              </div>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {blogArticles.map((article) => {
              const Icon = article.icon
              return (
                <StaggerItem key={article.slug}>
                  <Link href={`/ressources/${article.slug}`}>
                    <Card glow className="h-full group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-normal text-white mb-2 group-hover:text-brand transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-brand group-hover:gap-3 transition-all">
                            <span>Lire l'article</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <p className="text-xs text-gray-500 mt-3">{article.date}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Section>
    </div>
  )
}
