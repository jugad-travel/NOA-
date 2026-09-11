"use client"

import Link from "next/link"
import { ArrowRight, Search, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const deterministicQueries = ["Nike Pegasus 42", "Chaussures Salomon homme", "Crème SPF 50"]
const assistedQueries = ["Quelle chaussure pour mon premier marathon ?", "J’ai la peau sensible et des rougeurs.", "Je pars cinq jours en autonomie."]

export function HybridSearchSection() {
  return (
    <section className="bg-[#f7f8fb] px-4 py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Une approche hybride</p>
            <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Utiliser l’IA quand elle apporte réellement du conseil.</h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] bg-gradient-to-br from-[#e6faff] via-[#d7e0ff] to-[#ffd5c3] p-4 shadow-sm lg:grid-cols-2">
          <ScrollReveal direction="right" className="h-full">
            <article className="h-full rounded-[1.5rem] border border-white/80 bg-white/90 p-7 md:p-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gray-100"><Search className="size-5 text-gray-900" /></div>
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Gratuite</span>
              </div>
              <h3 className="text-2xl font-normal text-gray-950">Recherche déterministe</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">Une référence, une marque, une catégorie ou un critère précis déclenche directement les résultats utiles, sans consommer de session IA.</p>
              <div className="mt-8 space-y-2">
                {deterministicQueries.map((query) => <p key={query} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">{query}</p>)}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="left" className="h-full">
            <article className="h-full rounded-[1.5rem] border border-blue-100 bg-[#eef4ff] p-7 md:p-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100"><Sparkles className="size-5 text-blue-700" /></div>
                <span className="rounded-full bg-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-900">Conseil activé</span>
              </div>
              <h3 className="text-2xl font-normal text-gray-950">Vendeur IA</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">Lorsqu’un visiteur exprime un usage, une hésitation ou un projet, Parcel comprend le contexte, pose les questions utiles et accompagne la décision.</p>
              <div className="mt-8 space-y-2">
                {assistedQueries.map((query) => <p key={query} className="rounded-xl border border-blue-200 bg-white/80 px-4 py-3 text-sm text-gray-700">{query}</p>)}
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="font-semibold text-gray-950">Vous payez l’IA lorsqu’elle apporte réellement du conseil.</p>
            <Link href="/tarifs" className={buttonVariants({ variant: "outline", size: "md" })}>Voir les tarifs <ArrowRight className="size-4" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
