"use client"

import * as React from "react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { Clock, TrendingUp, ArrowRight } from "lucide-react"

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
