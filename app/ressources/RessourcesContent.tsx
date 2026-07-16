"use client"

import Link from "next/link"
import { ArrowRight, Calculator, Clock3, FileText, Gauge, Search } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { articles } from "@/lib/articles"

const categoryIcons = { Stratégie: FileText, "Product discovery": Search, Mesure: Gauge }

export function RessourcesContent() {
  return (
    <div className="pt-20">
      <Section variant="white" padding="lg" className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl p-7 md:p-12" style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 45%, #ff966b 100%)" }}>
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Ressources</Badge>
                <h1 className="mb-6 text-4xl font-normal text-gray-900 md:text-6xl">Mieux comprendre la découverte produit conversationnelle</h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">Des contenus courts et sourcés sur l’assistance d’achat, la recherche et la mesure de la conversion assistée.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section variant="white" padding="md">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-7 rounded-3xl border border-gray-200 bg-gray-900 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white"><Calculator className="size-5" /></div>
                <h2 className="mb-3 text-3xl font-normal text-white" style={{ color: "#ffffff" }}>Construire un scénario ROI transparent</h2>
                <p className="max-w-2xl text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>Saisissez vos propres hypothèses de trafic, conversion, panier et coût. Aucun multiplicateur ni gain n’est imposé.</p>
              </div>
              <Link href="/ressources/simulateur-roi">
                <Button variant="white" size="lg">Ouvrir le simulateur <ArrowRight className="size-5" /></Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section id="blog" variant="gray" padding="lg">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12">
              <Badge className="mb-4">Guides</Badge>
              <h2 className="text-3xl font-normal text-gray-900 md:text-5xl">Trois sujets, trois lectures ciblées</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3" staggerDelay={0.08}>
            {articles.map((article) => {
              const Icon = categoryIcons[article.category as keyof typeof categoryIcons] ?? FileText
              return (
                <StaggerItem key={article.slug}>
                  <Link href={`/ressources/${article.slug}`} className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg">
                    <Icon className="mb-8 size-6 text-blue-600" />
                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                      <span>{article.category}</span><span>·</span><Clock3 className="size-3.5" /><span>{article.readTime}</span>
                    </div>
                    <h3 className="mb-4 text-2xl font-normal text-gray-900">{article.title}</h3>
                    <p className="mb-7 flex-1 text-sm leading-relaxed text-gray-600">{article.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3">Lire le guide <ArrowRight className="size-4" /></span>
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
