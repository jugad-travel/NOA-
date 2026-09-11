"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS } from "@/lib/videos"

const actions = ["Produits", "Questions", "Comparatifs", "Recommandations", "Paniers"] as const

export function PresentationVideo() {
  return (
    <section id="presentation" className="bg-white px-4 py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">L’interface Parcel</p>
            <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Une interface conçue pour faire avancer l’achat.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              Parcel utilise la conversation lorsque le contexte le demande, puis transforme le besoin en actions directement intégrées au parcours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {actions.map((action) => <span key={action} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700">{action}</span>)}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-gray-50 p-2 shadow-xl shadow-gray-900/5 md:p-3">
            <YouTubeEmbed videoId={VIDEOS.presentation} title="Parcel transforme une intention en actions d’achat" rounded="rounded-[1.5rem]" />
          </div>
          <p className="mx-auto mt-7 max-w-2xl text-center text-xl font-semibold text-gray-950">Chaque interaction doit faire avancer l’achat.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
