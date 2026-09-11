"use client"

import { BarChart3, CircleDollarSign, ListFilter, MessageSquareWarning } from "lucide-react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const intentSignals = [
  { icon: ListFilter, title: "Intentions", copy: "Ce que les visiteurs cherchent réellement à accomplir." },
  { icon: BarChart3, title: "Critères de décision", copy: "Ce qui compte réellement dans leur choix." },
  { icon: MessageSquareWarning, title: "Freins", copy: "Ce qui bloque ou retarde la décision." },
  { icon: CircleDollarSign, title: "Demande non couverte", copy: "Ce que le catalogue ne leur apporte pas encore." },
] as const

export function PricingTeaser() {
  return (
    <section id="intent-data" className="bg-white px-4 py-20 md:py-28">
      <div className="container">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#c5d1ff] to-[#ffc4aa] px-6 py-14 md:px-12 md:py-16">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Intent data</p>
                <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Comprendre ce que vos visiteurs essaient réellement d’acheter.</h2>
              </div>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                Vos analytics mesurent les actions réalisées sur le site. Les interactions Parcel font également émerger les usages recherchés, contraintes, budgets, objections, critères de décision, comparaisons et besoins auxquels votre catalogue ne répond pas encore.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {intentSignals.map((signal, index) => {
              const Icon = signal.icon
              return (
                <ScrollReveal key={signal.title} delay={index * 0.07} className="h-full">
                  <article className="h-full rounded-3xl border border-white/75 bg-white/85 p-7 shadow-sm md:p-8">
                    <Icon className="mb-10 size-6 text-blue-700" />
                    <h3 className="text-lg font-medium text-gray-950">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{signal.copy}</p>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold text-gray-950 md:text-xl">
              Transformez les intentions exprimées en données exploitables par vos équipes e-commerce, produit et merchandising.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
