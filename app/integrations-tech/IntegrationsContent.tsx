"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  KeyRound,
  Layers3,
  PlugZap,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SHOPIFY_APP_STORE_URL } from "@/lib/videos"

const upcomingPlatforms = ["Adobe Commerce / Magento", "WooCommerce", "PrestaShop", "Salesforce Commerce Cloud", "BigCommerce", "Autres CMS"]

const dataSources = [
  { icon: ShoppingBag, title: "Catalogue", copy: "Titres, descriptions, images, catégories, variantes, prix et attributs utiles au conseil." },
  { icon: RefreshCw, title: "Disponibilité", copy: "Stock et disponibilité lorsque ces données doivent influencer la recommandation." },
  { icon: Layers3, title: "Règles métier", copy: "Contraintes de compatibilité, priorités commerciales et exclusions à appliquer." },
  { icon: BarChart3, title: "Événements", copy: "Interactions et événements nécessaires au suivi des parcours assistés et des insights." },
]

export function IntegrationsContent() {
  return (
    <div className="pt-20">
      <Section variant="white" padding="lg" className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl p-7 md:p-12" style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 45%, #ff966b 100%)" }}>
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Intégrations & Tech</Badge>
                <h1 className="mb-6 text-4xl font-normal text-gray-900 md:text-6xl">
                  Shopify aujourd’hui, une API pour toutes les autres stacks
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                  Parcel est CMS-agnostique. L’application Shopify est disponible ; l’API back-end permet une intégration sur mesure sans attendre un connecteur dédié.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section variant="white" padding="lg" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-normal text-gray-900 md:text-5xl">Deux modes disponibles</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Le statut de chaque option est affiché clairement, sans confondre disponibilité et feuille de route.</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex size-16 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-3">
                    <Image src="/images/Logo shopify .webp" alt="Shopify" width={52} height={52} className="size-full object-contain" />
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Disponible</span>
                </div>
                <h3 className="mb-3 text-2xl font-normal text-gray-900">Application Shopify</h3>
                <p className="mb-6 flex-1 text-gray-600">Installation depuis le Shopify App Store, synchronisation du catalogue et activation des expériences Parcel dans la boutique.</p>
                <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="w-full">
                    Voir l’app Shopify
                    <ArrowRight className="size-5" />
                  </Button>
                </a>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-gray-900 p-7 shadow-sm md:p-9">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Code2 className="size-7" />
                  </div>
                  <span className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-300">Disponible</span>
                </div>
                <h3 className="mb-3 text-2xl font-normal text-white" style={{ color: "#ffffff" }}>API back-end Parcel</h3>
                <p className="mb-6 flex-1 text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>Connectez le moteur Parcel à votre catalogue et à votre frontend existant. L’interface peut rester entièrement dans votre design system.</p>
                <Link href="/demo">
                  <Button variant="white" size="lg" className="w-full">
                    Parler de votre architecture
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section variant="gray" padding="md">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge className="mb-4">Connecteurs dédiés</Badge>
                <h2 className="text-3xl font-normal text-gray-900 md:text-4xl">En préparation</h2>
              </div>
              <p className="max-w-xl text-sm text-gray-600">Ces plateformes peuvent déjà être étudiées via l’API. Leur connecteur prêt à installer n’est pas encore présenté comme disponible.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingPlatforms.map((platform) => (
              <div key={platform} className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4">
                <span className="text-sm font-medium text-gray-800">{platform}</span>
                <span className="text-xs font-semibold text-orange-600">En préparation</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="white" padding="lg">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <Badge className="mb-4">Données nécessaires</Badge>
              <h2 className="mb-4 text-3xl font-normal text-gray-900 md:text-5xl">Un périmètre défini avec vos équipes</h2>
              <p className="text-gray-600">Parcel ne demande pas « toute votre donnée ». Le flux est limité aux informations utiles au cas d’usage retenu.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2">
            {dataSources.map((source) => {
              const Icon = source.icon
              return (
                <div key={source.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <Icon className="mb-5 size-6 text-blue-600" />
                  <h3 className="mb-2 text-xl font-normal text-gray-900">{source.title}</h3>
                  <p className="text-sm text-gray-600">{source.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section variant="dark" padding="lg">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <PlugZap className="mb-6 size-8 text-white" />
                <h2 className="mb-5 text-3xl font-normal text-white md:text-5xl" style={{ color: "#ffffff" }}>Un déploiement progressif</h2>
                <p className="text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>Le calendrier dépend du catalogue, du mode d’intégration et du niveau de personnalisation. Il est cadré avant engagement.</p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {[
                  ["01", "Cadrage", "Cas d’usage, données et indicateurs"],
                  ["02", "Connexion", "Shopify ou API back-end"],
                  ["03", "Configuration", "Catalogue, règles et expériences"],
                  ["04", "Mesure", "Recette, mise en ligne et suivi"],
                ].map(([number, title, copy]) => (
                  <li key={number} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="text-xs font-semibold text-white/40">{number}</span>
                    <h3 className="mt-4 text-lg font-medium text-white" style={{ color: "#ffffff" }}>{title}</h3>
                    <p className="mt-1 text-sm text-white/60" style={{ color: "rgba(255,255,255,0.62)" }}>{copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" padding="lg">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-5 rounded-3xl border border-gray-200 bg-gray-50 p-7 md:grid-cols-3 md:p-10">
              {[
                { icon: KeyRound, title: "Accès limités", copy: "Des droits adaptés aux seules données nécessaires." },
                { icon: Database, title: "Environnements séparés", copy: "Les données et configurations sont isolées par marchand." },
                { icon: ShieldCheck, title: "Cadrage sécurité", copy: "Flux, responsabilités et exigences sont documentés avant déploiement." },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title}>
                    <Icon className="mb-4 size-6 text-gray-900" />
                    <h3 className="mb-2 text-lg font-normal text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.copy}</p>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" padding="lg">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="mb-7 text-3xl font-normal text-gray-900 md:text-5xl">Choisir le bon mode d’intégration</h2>
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Réserver un cadrage technique
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
