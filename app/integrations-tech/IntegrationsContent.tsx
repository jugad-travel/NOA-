"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Code2, Database, PlugZap, RefreshCw, Settings2, ShoppingBag, Sparkles } from "lucide-react"
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  CATALOG_ENRICHMENT_MESSAGE,
  integrationStatusData,
  SHOPIFY_APP_STORE_URL,
  SHOPIFY_INSTALL_TIME,
} from "@/lib/marketing"

const deploymentSteps = [
  ["Connexion", "Application Shopify native ou API back-end"],
  ["Ingestion", "Catalogue synchronisé et automatiquement enrichi"],
  ["Cadrage", "Cas d’usage, critères et objectifs"],
  ["Configuration", "Questions, contraintes et règles commerciales"],
  ["Recette", "Parcours, recommandations et cas limites"],
  ["Mesure", "Intentions et indicateurs suivis"],
] as const

const dataSources = [
  [ShoppingBag, "Catalogue", "Titres, descriptions, images, catégories, variantes, prix et attributs utiles au conseil."],
  [RefreshCw, "Disponibilité", "Stock et disponibilité lorsque ces informations doivent influencer la recommandation."],
  [Settings2, "Règles métier", "Compatibilités, priorités commerciales et exclusions configurées avec votre équipe."],
  [Database, "Événements utiles", "Interactions nécessaires au suivi des parcours assistés et des intentions exprimées."],
] as const

export function IntegrationsContent() {
  return (
    <>
      <section className="bg-white px-4 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b8c8ff] to-[#ffb99b] px-6 py-10 md:px-12 md:py-14 lg:px-16">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Intégrations" }]} />
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">Shopify natif · API back-end</p>
                <h1 className="text-4xl font-normal leading-[1.04] tracking-[-0.045em] text-gray-950 md:text-6xl">Une intégration rapide, quelle que soit votre stack.</h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">Connectez Parcel en {SHOPIFY_INSTALL_TIME} sur Shopify ou intégrez notre API back-end à une autre architecture e-commerce. Dans les deux cas, l’équipe Parcel vous accompagne jusqu’à la recette.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "white", size: "xl" })}>Installer sur Shopify <ArrowUpRight className="size-5" /></a>
                  <Link href="/demo" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/40 px-8 text-base font-semibold text-gray-950 hover:bg-white/65">Parler de votre architecture <ArrowRight className="size-5" /></Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-4"><Image src="/images/Logo shopify .webp" alt="Shopify" width={42} height={42} className="size-11 rounded-xl bg-white object-contain p-1" /><div><p className="font-mono text-3xl font-semibold text-gray-950">02 min</p><p className="text-sm text-gray-700">Application native Shopify</p></div></div>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-4"><div className="flex size-11 items-center justify-center rounded-xl bg-blue-100"><Code2 className="size-5 text-blue-700" /></div><div><p className="text-lg font-semibold text-gray-950">API back-end</p><p className="text-sm text-gray-700">Autres stacks e-commerce</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Disponible aujourd’hui</p>
            <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Deux voies d’intégration, le même niveau d’accompagnement.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#e1f9fb] to-[#ccd7ff] p-7 md:p-9">
              <div className="flex items-start justify-between gap-4"><div className="flex size-16 items-center justify-center rounded-2xl bg-white p-3 shadow-sm"><Image src={integrationStatusData.available[0].image} alt="Shopify" width={52} height={52} className="size-full object-contain" /></div><span className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-green-800">Disponible</span></div>
              <h3 className="mt-8 text-2xl font-semibold text-gray-950">Shopify natif</h3>
              <p className="mt-4 leading-relaxed text-gray-700">Installez l’application, autorisez la connexion et lancez la synchronisation du catalogue en environ {SHOPIFY_INSTALL_TIME}.</p>
              <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "white", size: "lg", className: "mt-8 self-start" })}>Voir l’app Shopify <ArrowUpRight className="size-4" /></a>
            </article>
            <article className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#f1edff] to-[#ffd7c7] p-7 md:p-9">
              <div className="flex items-start justify-between gap-4"><div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm"><Code2 className="size-7 text-blue-700" /></div><span className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-blue-900">Disponible</span></div>
              <h3 className="mt-8 text-2xl font-semibold text-gray-950">API back-end Parcel</h3>
              <p className="mt-4 leading-relaxed text-gray-700">Intégrez Parcel à votre front, catalogue et événements sur une architecture existante. Le schéma de données et le parcours sont cadrés avec votre équipe.</p>
              <Link href="/demo" className={buttonVariants({ variant: "white", size: "lg", className: "mt-8 self-start" })}>Étudier votre architecture <ArrowRight className="size-4" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-20 md:py-24">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-[#dff9fb] via-[#d6ddff] to-[#ffd0bd] p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div><Sparkles className="mb-6 size-8 text-blue-700" /><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Enrichissement à l’ingestion</p><h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Votre catalogue devient lisible par l’IA.</h2></div>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">{CATALOG_ENRICHMENT_MESSAGE}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28"><PlugZap className="mb-6 size-8 text-blue-700" /><h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Une configuration métier construite avec votre équipe.</h2><p className="mt-5 text-lg leading-relaxed text-gray-600">La connexion technique ouvre l’accès aux données. La qualité du conseil vient ensuite du catalogue enrichi, de vos critères de choix, de vos compatibilités et de vos règles commerciales.</p></div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {deploymentSteps.map(([title, copy], index) => <li key={title} className="rounded-2xl border border-gray-200 bg-[#f9fafc] p-6"><span className="font-mono text-xs font-semibold text-blue-700">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold text-gray-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{copy}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-20 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Connecteurs dédiés</p><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">En préparation</h2><p className="mt-5 text-sm leading-relaxed text-gray-600">Vous n’avez pas besoin d’attendre ces connecteurs : une intégration via l’API peut déjà être étudiée pour ces plateformes.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{integrationStatusData.upcoming.map((platform) => <div key={platform} className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4"><span className="text-sm font-medium text-gray-800">{platform}</span><span className="shrink-0 text-xs font-semibold text-blue-700">Connecteur à venir</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Données utiles au conseil</p><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Un périmètre défini avec vos équipes</h2><p className="mt-5 text-gray-600">Les flux sont limités aux informations nécessaires aux usages retenus et aux autorisations mises en place.</p></div>
          <div className="grid gap-4 md:grid-cols-2">{dataSources.map(([Icon, title, copy]) => <article key={title} className="rounded-2xl border border-gray-200 p-6"><Icon className="mb-6 size-6 text-blue-700" /><h3 className="text-xl font-semibold text-gray-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{copy}</p></article>)}</div>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#e1f8fb] to-[#eeeaff] p-6 text-center sm:flex-row sm:text-left"><p className="font-semibold text-gray-950">Shopify ou API : préparons l’intégration adaptée à votre stack.</p><Link href="/demo" className={buttonVariants({ variant: "white", size: "lg" })}>Préparer l’intégration <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>
    </>
  )
}
