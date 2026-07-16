"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle2, Search, ShoppingBag, Sparkles } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

const teamMembers = [
  { name: "Balthazar Barbry", role: "Co-fondateur", details: "ESSEC", image: "/images/Pdp Linkedin Baltha.png" },
  { name: "Vianney Mayaud", role: "Co-fondateur", details: "EDHEC", image: "/images/1773913153311.png" },
  { name: "Martin Magnet", role: "Head of GTM", details: "SKEMA", image: "/images/1770344506258.png" },
  { name: "Alexandre Mayaud", role: "Senior Advisor", details: "Fondateur Keyneo (Generix) · Entrepreneur retail tech", image: "/images/pdp alexandre .jpeg" },
  { name: "Octave Dumont", role: "CTO", details: "HEC · ENSAE", image: "/images/pdp Octave dumont .jpeg" },
  { name: "César Clair", role: "Sales & bras droit CEO", details: "EDHEC", image: "/images/PDP Linkedin Cesar.png" },
]

const missionSteps = [
  { icon: Search, title: "Comprendre", copy: "Interpréter le besoin, les usages et les contraintes formulés avec les mots du client." },
  { icon: ShoppingBag, title: "Guider", copy: "Recommander, expliquer et comparer les produits réellement disponibles dans le catalogue." },
  { icon: BarChart3, title: "Apprendre", copy: "Transformer les conversations en insights utiles au merchandising, au produit et à la conversion." },
]

export function AProposContent() {
  return (
    <div className="pt-20">
      <Section variant="white" padding="lg" className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl p-7 md:p-12" style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 45%, #ff966b 100%)" }}>
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">À propos de Parcel</Badge>
                <h1 className="mb-6 text-4xl font-normal text-gray-900 md:text-6xl">
                  Rendre le conseil produit aussi naturel en ligne qu’en magasin
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                  Parcel transforme chaque intention d’achat en décision, de la recherche au panier.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section variant="white" padding="lg" className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <Sparkles className="mx-auto mb-6 size-8 text-gray-900" />
              <h2 className="mb-6 text-3xl font-normal text-gray-900 md:text-5xl">L’angle mort du e-commerce n’est plus l’accès au produit. C’est l’aide à la décision.</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Les catalogues deviennent plus vastes et plus techniques, alors que le parcours reste souvent limité à une barre de recherche, des filtres et des fiches produit. Parcel apporte la couche de compréhension et de conseil qui manque entre la demande et l’achat.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5 md:grid-cols-3" staggerDelay={0.08}>
            {missionSteps.map((step) => {
              const Icon = step.icon
              return (
                <StaggerItem key={step.title}>
                  <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <Icon className="mb-6 size-6 text-blue-600" />
                    <h3 className="mb-3 text-xl font-normal text-gray-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{step.copy}</p>
                  </article>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Section>

      <Section variant="dark" padding="lg" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Badge className="mb-5 bg-white/10 text-white">Notre approche</Badge>
                <h2 className="text-3xl font-normal text-white md:text-5xl" style={{ color: "#ffffff" }}>Une plateforme continue, connectée aux données du commerce</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Un même contexte conservé de la découverte au service après-vente",
                  "Des réponses ancrées dans le catalogue, la disponibilité et les politiques réelles",
                  "Des insights sur les intentions, les freins et les parcours assistés",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-white" />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.76)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section id="equipe" variant="white" padding="lg" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <Badge className="mb-4">Équipe</Badge>
              <h2 className="mb-4 text-3xl font-normal text-gray-900 md:text-5xl">Des expertises produit, IA, retail et go-to-market</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Une équipe réunie autour d’un objectif : rendre l’assistance d’achat utile, fiable et déployable à l’échelle.</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <article className="flex h-full flex-col items-center text-center">
                  <div className="relative mb-5 size-40 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 md:size-44">
                    <Image src={member.image} alt={`Portrait de ${member.name}`} fill sizes="(max-width: 640px) 160px, 176px" className="object-cover" />
                  </div>
                  <div className="w-full max-w-[16rem] rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gray-900">{member.role}</p>
                  <p className="mt-1 max-w-[18rem] text-sm text-gray-500">{member.details}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section variant="gray" padding="md">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid gap-7 rounded-3xl border border-gray-200 bg-white p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">Contrôle marchand</p>
                <h2 className="text-3xl font-normal text-gray-900">Vos équipes définissent le cadre</h2>
              </div>
              <div>
                <p className="mb-5 text-gray-600">Le contrôle n’est pas la promesse principale de Parcel : c’est la condition pour que le conseil reste fiable et cohérent avec votre commerce.</p>
                <div className="flex flex-wrap gap-2">
                  {["Catalogue", "Stock", "Compatibilités", "Priorités", "Politiques", "Mesure"].map((item) => (
                    <span key={item} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" padding="lg">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="mb-7 text-3xl font-normal text-gray-900 md:text-5xl">Construire le prochain parcours d’achat avec Parcel</h2>
            <Link href="/demo">
              <Button variant="primary" size="xl">
                Rencontrer l’équipe
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
