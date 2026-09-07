"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Compass,
  GitCompareArrows,
  Headphones,
  Search,
  ShieldCheck,
  ShoppingBag,
  Target,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SHOPIFY_APP_STORE_URL } from "@/lib/videos"
import { USE_CASES } from "@/lib/use-cases"

/* Une icône par usage. Le reste du contenu vit dans lib/use-cases.ts : il
   alimente à la fois ce hub et les pages dédiées, sans duplication. */
const ICONS: Record<string, LucideIcon> = {
  "recherche-conversationnelle": Search,
  "besoin-global": Compass,
  "aide-au-choix": Target,
  "questions-produit": BookOpen,
  comparaison: GitCompareArrows,
  "panier-complements": ShoppingBag,
  "service-apres-vente": Headphones,
}

export function ProduitsContent() {
  return (
    <div className="pt-20">
      <Section variant="white" padding="lg" className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl p-7 md:p-12" style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 45%, #ff966b 100%)" }}>
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Plateforme Parcel</Badge>
                <h1 className="mb-6 text-4xl font-normal text-gray-900 md:text-6xl">
                  Une seule intelligence, présente de la recherche au panier
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                  Les capacités Parcel s’activent aux moments utiles du parcours tout en conservant le même contexte client, le même catalogue et les mêmes données de mesure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Hub : chaque usage a sa page. Ils vivaient jusqu'ici comme des ancres
          d'une seule URL — six intentions de recherche pour une seule page
          indexable, et un déséquilibre avec la recherche qui avait la sienne. */}
      <Section variant="white" padding="md">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <Badge className="mb-4">Fonctionnement continu</Badge>
              <h2 className="text-3xl font-normal text-gray-900 md:text-5xl">
                Des usages connectés, pas sept produits isolés
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-gray-500">
                Une seule intelligence, présente à chaque étape du parcours. Chaque usage
                a sa page, sa démonstration et ses questions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((useCase, index) => {
              const Icon = ICONS[useCase.slug] ?? Compass
              return (
                <ScrollReveal key={useCase.slug} delay={index * 0.04}>
                  <Link
                    href={useCase.path}
                    /* L'ancien fragment est conservé : un lien externe vers
                       /produits#parcel-match aboutit encore sur la bonne carte. */
                    id={useCase.legacyAnchor}
                    className="group flex h-full flex-col scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-gray-900 text-white">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-semibold text-gray-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                      {useCase.step}
                    </p>
                    <h3 className="mb-3 text-lg font-normal text-gray-900">{useCase.navLabel}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                      {useCase.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3">
                      Découvrir <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Section>

      <Section id="analytics-insights" variant="dark" padding="lg" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Badge className="mb-5 bg-white/10 text-white">Analytics & Insights</Badge>
                <BarChart3 className="mb-6 size-9 text-white" />
                <h2 className="mb-5 text-3xl font-normal text-white md:text-5xl" style={{ color: "#ffffff" }}>
                  Comprendre ce que vos clients cherchent vraiment
                </h2>
                <p className="text-lg text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>
                  Les conversations deviennent une source d’information exploitable pour le produit, le merchandising et la conversion.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Intentions", "Besoins, usages et contraintes exprimés en langage naturel"],
                  ["Freins", "Questions récurrentes et informations manquantes"],
                  ["Catalogue", "Produits demandés, recommandés ou absents"],
                  ["Parcours assistés", "Étapes sollicitées et indicateurs à comparer"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="mb-2 text-lg font-medium text-white" style={{ color: "#ffffff" }}>{title}</h3>
                    <p className="text-sm text-white/65" style={{ color: "rgba(255,255,255,0.65)" }}>{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" padding="md">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-7 md:grid-cols-[0.7fr_1.3fr] md:p-10">
              <div>
                <ShieldCheck className="mb-5 size-8 text-gray-900" />
                <h2 className="text-3xl font-normal text-gray-900">Vos équipes gardent la main</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Disponibilité et stock", "Priorités commerciales", "Contraintes de compatibilité", "Règles logistiques", "Politiques de service", "Analyse des interactions"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-gray-700">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" padding="lg">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <Search className="mx-auto mb-5 size-8 text-gray-900" />
            <h2 className="mb-7 text-3xl font-normal text-gray-900 md:text-5xl">Voir Parcel sur votre propre catalogue</h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo">
                <Button variant="primary" size="xl">
                  Réserver une démo
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl">Voir l’app Shopify</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
