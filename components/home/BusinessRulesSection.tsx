"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const principles = [
  {
    number: "01",
    eyebrow: "Comprendre",
    title: "Identifier l’intention derrière la recherche",
    copy: "Usage, budget, contraintes, contexte et préférences deviennent des critères de décision explicites.",
  },
  {
    number: "02",
    eyebrow: "Décider",
    title: "Appliquer votre logique métier",
    copy: "Compatibilités, exclusions, disponibilité, priorités commerciales et critères propres à chaque catégorie structurent le conseil.",
  },
  {
    number: "03",
    eyebrow: "Expliquer",
    title: "Transformer une recommandation en décision",
    copy: "Parcel expose les raisons du choix, les limites du produit, les alternatives pertinentes et les compléments utiles.",
  },
] as const

export function BusinessRulesSection() {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b5c7ff] to-[#ffc0a5] px-6 py-14 md:px-12 md:py-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Une IA construite pour vendre</p>
                <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Votre logique de vente, directement intégrée à l’expérience d’achat.</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                <p className="text-gray-700">Un bon vendeur comprend l’usage, pose les bonnes questions, identifie les contraintes importantes, arbitre entre plusieurs références et explique son choix.</p>
                <p className="text-gray-700">Parcel reproduit cette logique en ligne, avec vos produits, vos priorités et vos règles métier.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.number} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/85 p-7 shadow-sm backdrop-blur-sm md:p-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{principle.eyebrow}</span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700">{principle.number}</span>
                  </div>
                  <h3 className="text-2xl font-normal leading-snug text-gray-950">{principle.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-gray-600">{principle.copy}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
