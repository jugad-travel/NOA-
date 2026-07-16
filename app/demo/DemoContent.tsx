"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS } from "@/lib/videos"

const PLANIFY_BOOKING_URL = process.env.NEXT_PUBLIC_PLANIFY_BOOKING_URL

const benefits = [
  "Une démonstration adaptée à votre catalogue et à votre parcours",
  "Le choix entre l’application Shopify et l’intégration API",
  "Un cadrage des données nécessaires et des étapes de déploiement",
  "Les indicateurs à suivre sur vos parcours assistés",
]

export function DemoContent() {
  return (
    <div className="pt-20">
      <Section variant="white" padding="lg" className="py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl p-7 md:p-12"
            style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 45%, #ff966b 100%)" }}
          >
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Démonstration Parcel</Badge>
                <h1 className="mb-6 text-4xl font-normal text-gray-900 md:text-6xl">
                  Voyez Parcel sur un parcours e-commerce concret
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">
                  Découvrez le produit en deux minutes, puis choisissez un créneau avec notre équipe.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section variant="white" padding="lg" className="py-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <YouTubeEmbed videoId={VIDEOS.presentation} title="Présentation de Parcel" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                  <CalendarDays className="size-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-normal text-gray-900">Réserver 30 minutes</h2>
                  <p className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock3 className="size-4" /> Démo et cadrage technique
                  </p>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {PLANIFY_BOOKING_URL ? (
                <a href={PLANIFY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="xl" className="w-full">
                    Choisir un créneau sur Planify
                    <ArrowRight className="size-5" />
                  </Button>
                </a>
              ) : (
                <a href="mailto:vianney@parcel-ia.com?subject=Demande de démo Parcel">
                  <Button variant="primary" size="xl" className="w-full">
                    Nous contacter pour une démo
                    <Mail className="size-5" />
                  </Button>
                </a>
              )}

              <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
                Le rendez-vous n’est confirmé qu’après validation dans Planify ou réponse de notre équipe.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="gray" padding="md">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-normal text-gray-900">Vous préférez commencer par la technique ?</h2>
          <p className="mb-7 text-gray-600">Consultez les modes d’intégration disponibles et les données nécessaires.</p>
          <Link href="/integrations-tech">
            <Button variant="outline" size="lg">
              Voir les intégrations
              <ArrowRight className="size-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
