"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Code2, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import {
  CATALOG_ENRICHMENT_MESSAGE,
  SHOPIFY_APP_STORE_URL,
  SHOPIFY_INSTALL_TIME,
  SHOPIFY_INSTALL_TIME_SHORT,
} from "@/lib/marketing"

const steps = [
  ["01", "Connecter", "Application Shopify native ou API back-end sur une autre architecture e-commerce."],
  ["02", "Enrichir", "Le catalogue est synchronisé, enrichi et structuré pour être mieux compris par l’IA."],
  ["03", "Configurer", "Questions, critères, contraintes, incompatibilités et règles commerciales sont définis avec vous."],
  ["04", "Valider", "Les recommandations et cas limites sont testés avant l’optimisation continue."],
] as const

export function Integration() {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Intégrer Parcel à votre stack</p>
            <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Shopify en {SHOPIFY_INSTALL_TIME}. Les autres stacks via notre API.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">Parcel n’est pas limité à Shopify : l’application native accélère l’installation, tandis que l’API back-end permet une intégration rapide à une architecture e-commerce existante.</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ScrollReveal direction="right" className="h-full">
            <article className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#dff9fb] to-[#cbd6ff] p-7 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Image src="/images/Logo shopify .webp" alt="Shopify" width={38} height={38} className="size-9 object-contain" />
                </div>
                <span className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-green-800">Disponible</span>
              </div>
              <p className="mt-9 font-mono text-5xl font-semibold tracking-[-0.07em] text-gray-950 md:text-6xl">02 min</p>
              <h3 className="mt-4 text-2xl text-gray-950">Application Shopify native</h3>
              <div className="mt-7 space-y-3">
                {["Installation technique guidée", "Catalogue synchronisé automatiquement", "Configuration métier accompagnée"].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-gray-700"><Check className="size-4 text-blue-700" />{item}</p>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="left" className="h-full">
            <article className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#f0edff] to-[#ffd6c5] p-7 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm"><Code2 className="size-6 text-blue-700" /></div>
                <span className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-blue-900">Disponible</span>
              </div>
              <p className="mt-9 text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">API back-end Parcel</p>
              <h3 className="mt-4 text-2xl text-gray-950">Pour toute autre architecture e-commerce</h3>
              <p className="mt-5 text-sm leading-relaxed text-gray-700">Connectez votre catalogue, votre front et vos événements métier à Parcel. L’équipe vous accompagne sur le périmètre, le schéma de données et la recette.</p>
              <Link href="/integrations-tech" className="mt-auto pt-7 text-sm font-semibold text-gray-950 underline decoration-gray-400 underline-offset-4">Voir les options d’intégration <ArrowRight className="ml-1 inline size-4" /></Link>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mt-5 rounded-[2rem] border border-blue-100 bg-[#f7f9ff] p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100"><Sparkles className="size-5 text-blue-700" /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-950">Un catalogue automatiquement préparé pour l’IA</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{CATALOG_ENRICHMENT_MESSAGE}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, copy]) => (
            <li key={number} className="rounded-2xl border border-gray-200 bg-white p-6">
              <span className="font-mono text-xs font-semibold text-blue-700">{number}</span>
              <h3 className="mt-5 text-lg font-semibold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{copy}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-semibold text-gray-950">Choisissez la voie adaptée à votre stack, sans renoncer à l’accompagnement métier.</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "md" })}>Shopify · {SHOPIFY_INSTALL_TIME_SHORT}</a>
            <Link href="/integrations-tech" className={buttonVariants({ variant: "outline", size: "md" })}>API et autres stacks <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
