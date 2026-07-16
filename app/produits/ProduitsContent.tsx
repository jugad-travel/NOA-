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
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { SHOPIFY_APP_STORE_URL, VIDEOS } from "@/lib/videos"

const useCases = [
  {
    id: "parcel-projet",
    step: "Découverte",
    title: "Transformer un besoin global en sélection",
    capability: "Capacité Parcel Projet",
    description: "Le visiteur décrit un projet sans connaître les références à acheter. Parcel qualifie le contexte, identifie les contraintes et construit une sélection cohérente.",
    examples: ["Projet multi-produits", "Besoin exprimé en langage naturel", "Sélection de l’indispensable à l’optionnel"],
    icon: Compass,
    videoId: VIDEOS.projet,
  },
  {
    id: "parcel-match",
    step: "Catégorie",
    title: "Orienter vers le bon produit",
    capability: "Capacité Parcel Match",
    description: "Quand le client connaît la catégorie mais hésite entre de nombreuses références, Parcel pose les questions utiles et explique les recommandations proposées.",
    examples: ["Usage, budget et préférences", "Variantes, tailles et compatibilités", "Catalogues vastes ou techniques"],
    icon: Target,
    videoId: VIDEOS.match,
  },
  {
    id: "parcel-expert",
    step: "Fiche produit",
    title: "Répondre au moment décisif",
    capability: "Capacité Parcel Expert",
    description: "Sur la fiche produit, Parcel exploite les données catalogue pour répondre aux questions détaillées et lever les derniers freins avant l’achat.",
    examples: ["Caractéristiques et entretien", "Compatibilité et usage", "Choix de variante"],
    icon: BookOpen,
    videoId: VIDEOS.expert,
  },
  {
    id: "parcel-comparaison",
    step: "Comparaison",
    title: "Comparer selon l’usage réel",
    capability: "Capacité Parcel Comparaison",
    description: "Parcel compare deux ou trois produits sur les critères importants pour le client et formule un verdict contextualisé, plutôt qu’un tableau générique.",
    examples: ["Arbitrage prix et performance", "Différences entre modèles proches", "Verdict argumenté par usage"],
    icon: GitCompareArrows,
    videoId: VIDEOS.comparaison,
  },
  {
    id: "parcel-panier",
    step: "Panier",
    title: "Compléter le projet avec cohérence",
    capability: "Continuité Parcel Projet",
    description: "Le contexte conservé permet de proposer les compléments réellement utiles au projet, sans appliquer un cross-sell identique à tous les visiteurs.",
    examples: ["Accessoires compatibles", "Produits manquants au projet", "Alternatives disponibles"],
    icon: ShoppingBag,
    videoId: VIDEOS.projet,
  },
  {
    id: "parcel-sav",
    step: "Après-vente",
    title: "Répondre après l’achat",
    capability: "Capacité Parcel SAV",
    description: "Parcel répond depuis les politiques réelles de la boutique et oriente vers un humain lorsque la demande nécessite une intervention.",
    examples: ["Livraison et retours", "Politiques de la boutique", "Relais vers le service client"],
    icon: Headphones,
    videoId: VIDEOS.sav,
  },
]

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

      <Section variant="white" padding="md">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <Badge className="mb-4">Fonctionnement continu</Badge>
              <h2 className="text-3xl font-normal text-gray-900 md:text-5xl">Des usages connectés, pas cinq produits isolés</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <a key={useCase.id} href={`#${useCase.id}`} className="group rounded-2xl border border-gray-200 bg-white p-5 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold">{String(index + 1).padStart(2, "0")}</span>
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{useCase.step}</p>
                  <p className="mt-1 text-sm text-gray-500">{useCase.title}</p>
                </a>
              )
            })}
          </div>
        </div>
      </Section>

      {useCases.map((useCase, index) => {
        const Icon = useCase.icon
        return (
          <Section key={useCase.id} id={useCase.id} variant={index % 2 === 0 ? "gray" : "white"} padding="lg" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
              <ScrollReveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                    <Icon className="size-5" />
                  </div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">{useCase.step}</p>
                  <h2 className="mb-3 text-3xl font-normal text-gray-900 md:text-4xl">{useCase.title}</h2>
                  <p className="mb-6 text-sm font-semibold text-blue-600">{useCase.capability}</p>
                  <p className="mb-7 text-base leading-relaxed text-gray-700 md:text-lg">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <YouTubeEmbed videoId={useCase.videoId} title={`Démo Parcel — ${useCase.step}`} />
              </ScrollReveal>
            </div>
          </Section>
        )
      })}

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
