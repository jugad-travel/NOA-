"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS } from "@/lib/videos"

/** Full presentation video — replaces the simulated home demo. */
export function PresentationVideo() {
  return (
    <section id="presentation" className="bg-white">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-gray-900 leading-tight">
              Parcel en 2 minutes
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Découvrez comment Parcel transforme une boutique en ligne en
              expérience de vente accompagnée.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <YouTubeEmbed
              videoId={VIDEOS.presentation}
              title="Présentation de Parcel"
              rounded="rounded-2xl md:rounded-3xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
