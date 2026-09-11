"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle2, Clock3, Search, ShoppingBag } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

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
                  Construire l’IA de vente avec ceux qui vendent réellement
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                  Parcel est une startup française née d’un constat simple : lorsqu’un client hésite en ligne, la qualité du conseil dépend autant de la logique métier du marchand que de la technologie utilisée.
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
              <Search className="mx-auto mb-6 size-8 text-gray-900" />
              <h2 className="mb-6 text-3xl font-normal text-gray-900 md:text-5xl">Le raisonnement du vendeur comme point de départ</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>Nous échangeons avec des marchands, responsables e-commerce et experts produit pour comprendre ce qui fait réellement une bonne recommandation : quelles questions poser, quels critères arbitrer, quelles informations rassurent et quelles règles ne doivent pas être contournées.</p>
                <p>Ces connaissances métier structurent la façon dont Parcel conseille chaque visiteur.</p>
              </div>
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

      <Section variant="white" padding="lg" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-[#dff9fb] via-[#d9e0ff] to-[#ffd2bf] p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <Badge className="mb-5 bg-white/75 text-blue-900">Notre approche</Badge>
                <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Une même logique de vente, de la recherche au panier</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Un même contexte conservé de la découverte au service après-vente",
                  "Des réponses ancrées dans le catalogue, la disponibilité et les politiques réelles",
                  "Des insights sur les intentions, les freins et les parcours assistés",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 text-gray-700">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-700" />
                    <span className="text-sm leading-relaxed">{item}</span>
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
              <Badge className="mb-4">Une équipe française accessible</Badge>
              <h2 className="mb-4 text-3xl font-normal text-gray-900 md:text-5xl">Produit, IA, retail et go-to-market réunis autour du marchand</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Les responsabilités et expertises opérationnelles restent au premier plan ; les formations complètent les profils à titre secondaire.</p>
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">De l’installation aux premières optimisations</p>
                <h2 className="text-3xl font-normal text-gray-900">Connecté rapidement, configuré avec votre équipe</h2>
              </div>
              <div>
                <p className="mb-5 text-gray-600">Sur Shopify, Parcel s’installe en {SHOPIFY_INSTALL_TIME}. Notre équipe accompagne ensuite chaque marchand dans la configuration de sa logique de vente.</p>
                <div className="flex flex-wrap gap-2">
                  {["Installation", "Catalogue", "Critères", "Compatibilités", "Priorités", "Optimisation"].map((item) => (
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
            <Clock3 className="mx-auto mb-5 size-8 text-gray-900" />
            <h2 className="mb-7 text-3xl font-normal text-gray-900 md:text-5xl">Échangez directement avec l’équipe qui configure Parcel</h2>
            <Link href="/demo" className={buttonVariants({ variant: "primary", size: "xl" })}>
              Rencontrer l’équipe
              <ArrowRight className="size-5" />
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
