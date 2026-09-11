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
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SHOPIFY_APP_STORE_URL } from "@/lib/videos"
import { USE_CASES } from "@/lib/use-cases"

/* Une icône par usage. Le reste du contenu vit dans lib/use-cases.ts : il
   alimente à la fois ce hub et les pages dédiées, sans duplication. */
const ICONS: Record<string, LucideIcon> = {
  "recherche-conversationnelle": Search,
  "besoin-global": Compass,
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
                  Une IA de vente présente à chaque moment de décision
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                  Recherche, aide au choix, fiche produit, comparaison, panier et SAV : Parcel conserve le même contexte client et applique les mêmes règles métier sur tout le parcours.
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
              <Badge className="mb-4">Six moments. Une même logique de vente.</Badge>
              <h2 className="text-3xl font-normal text-gray-900 md:text-5xl">
                Le contexte client se conserve à chaque étape du parcours.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-gray-500">
                Chaque usage répond à un problème client précis, avec le même catalogue,
                les mêmes règles métier et la même compréhension du besoin.
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
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
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

      <Section id="analytics-insights" variant="white" padding="lg" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-10 rounded-[2rem] bg-gradient-to-br from-[#dff9fb] via-[#d9e0ff] to-[#ffd2bf] p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Badge className="mb-5 bg-white/75 text-blue-900">Analytics & Insights</Badge>
                <BarChart3 className="mb-6 size-9 text-blue-800" />
                <h2 className="mb-5 text-3xl font-normal text-gray-950 md:text-5xl">
                  Comprendre ce que vos visiteurs essaient réellement d’acheter
                </h2>
                <p className="text-lg text-gray-700">
                  Les interactions font émerger les intentions, critères de décision, freins et demandes auxquelles le catalogue ne répond pas encore.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Intentions", "Besoins, usages et contraintes exprimés en langage naturel"],
                  ["Critères", "Éléments qui déterminent réellement le choix"],
                  ["Freins", "Questions récurrentes et informations manquantes"],
                  ["Demande non couverte", "Produits ou usages recherchés mais absents du catalogue"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-white/80 bg-white/80 p-5">
                    <h3 className="mb-2 text-lg font-medium text-gray-950">{title}</h3>
                    <p className="text-sm text-gray-600">{copy}</p>
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
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: "xl" })}>
                Réserver une démo
                <ArrowRight className="size-5" />
              </Link>
              <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "xl" })}>
                Voir l’app Shopify
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
