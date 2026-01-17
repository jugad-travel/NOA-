"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import Image from "next/image"
import { 
  Brain, 
  Target, 
  Zap, 
  ShoppingCart, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Database,
  Shield,
  Layers,
  Plug,
  Lightbulb,
  Users
} from "lucide-react"

const teamMembers = [
  {
    name: "Vianney Mayaud",
    role: "Fondateur",
    details: "EDHEC, Fondateur ",
    detailsLink: "https://jugadtravel.com",
    detailsLinkText: "JUGAD TRAVEL",
    image: "/images/pdp Vianney  linkedin .png",
  },
  {
    name: "Balthazar Barbry",
    role: "Co-fondateur",
    details: "ESSEC",
    image: "/images/pdp balthazar barbry linkedin .jpeg",
  },
  {
    name: "Octave Dumont",
    role: "CTO",
    details: "HEC - ENSAE, Data scientist BNP Paribas, ENS Data science competitor",
    image: "/images/pdp Octave dumont .jpeg",
  },
  {
    name: "Alexandre Mayaud",
    role: "Senior Advisor",
    details: "Retail tech & IA Entrepreneur . Business Angel . Board Member . Advisor . ex CEO fondateur ",
    detailsLink: "https://keyneo.com",
    detailsLinkText: "Keyneo",
    detailsAfterLink: ", co fondateur ",
    detailsSecondLink: "https://umitek.fr",
    detailsSecondLinkText: "Umitek",
    image: "/images/pdp alexandre .jpeg",
  },
]

const constats = [
  {
    icon: Database,
    title: "Catalogues toujours plus vastes",
    description: "Techniques et difficiles à exploiter",
  },
  {
    icon: Users,
    title: "Parcours peu personnalisés",
    description: "Malgré une abondance de données",
  },
  {
    icon: TrendingUp,
    title: "Dépendance à l'acquisition payante",
    description: "Pour compenser des taux de conversion insuffisants",
  },
]

const reponses = [
  {
    icon: Brain,
    text: "Interprète l'intention réelle derrière la demande",
  },
  {
    icon: Zap,
    text: "Analyse le catalogue en temps réel",
  },
  {
    icon: Target,
    text: "Compare, score et hiérarchise les produits pertinents",
  },
  {
    icon: Lightbulb,
    text: "Explique ses recommandations de manière compréhensible",
  },
  {
    icon: ShoppingCart,
    text: "Déclenche des actions concrètes (navigation, ajout au panier, sélection de variantes)",
  },
]

const caracteristiques = [
  {
    icon: Plug,
    text: "Connexion directe aux données produits (PIM, CMS, APIs e-commerce)",
  },
  {
    icon: Shield,
    text: "Respect strict des règles commerciales, des stocks et des contraintes logistiques",
  },
  {
    icon: Layers,
    text: "Architecture modulaire et scalable",
  },
  {
    icon: Zap,
    text: "Intégration rapide sur les principales plateformes e-commerce",
  },
]

const apports = [
  "Augmentation du taux de conversion",
  "Amélioration de la qualité des paniers (meilleure adéquation produit / besoin)",
  "Réduction des abandons liés à l'hésitation ou à la surcharge d'information",
  "Valorisation intelligente des données catalogue existantes",
  "Meilleure compréhension des intentions clients (insights exploitables)",
]

const resume = [
  "Un assistant d'achat IA intégré au e-commerce",
  "Une technologie orientée conversion et compréhension client",
  "Une approche pragmatique, compatible avec les stacks existantes",
  "Une vision claire : remettre l'intelligence au cœur du parcours d'achat",
]

export function AProposContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="white" padding="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Rectangle avec dégradé en arrière-plan */}
          <div 
            className="relative rounded-3xl mx-4 md:mx-8 p-8 md:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
            }}
          >
            <ScrollReveal>
              <div className="text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">À propos de NOA</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Repenser l'expérience d'achat à l'ère de l'IA
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Découvrez comment NOA transforme l'expérience d'achat en ligne avec l'intelligence artificielle.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              NOA est une solution SaaS d'intelligence artificielle conçue pour transformer la manière dont les clients interagissent avec les catalogues e-commerce.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Là où les sites marchands reposent encore majoritairement sur des interfaces de navigation statiques (recherche par mots-clés, filtres, comparateurs figés), NOA introduit une logique conversationnelle, contextuelle et orientée décision.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Team Section */}
      <Section variant="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Notre équipe
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Une équipe passionnée par l'innovation et l'excellence, dédiée à transformer l'expérience d'achat en ligne.
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="h-full p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Photo de profil */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden relative">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Informations */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-3">
                        {member.role}
                      </p>
                      {member.details && (
                        <p className="text-gray-600">
                          {member.details}
                          {member.detailsLink && member.detailsLinkText ? (
                            <>
                              <a 
                                href={member.detailsLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-brand hover:underline"
                              >
                                {member.detailsLinkText}
                              </a>
                            </>
                          ) : member.detailsLink ? (
                            <>{" "}
                              <a 
                                href={member.detailsLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-brand hover:underline"
                              >
                                {member.detailsLink.replace(/^https?:\/\//, '')}
                              </a>
                            </>
                          ) : null}
                          {member.detailsAfterLink}
                          {member.detailsSecondLink && member.detailsSecondLinkText ? (
                            <>
                              <a 
                                href={member.detailsSecondLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-brand hover:underline"
                              >
                                {member.detailsSecondLinkText}
                              </a>
                            </>
                          ) : null}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Notre conviction */}
      <Section variant="gray" padding="lg" className="pt-8 md:pt-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Notre conviction
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Un catalogue riche ne crée de valeur que s'il est intelligible, exploitable et activable pour l'utilisateur final.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Le constat */}
      <Section variant="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Le constat
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Les e-commerçants font face à trois limites structurelles :
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {constats.map((constat) => {
              const Icon = constat.icon
              return (
                <StaggerItem key={constat.title}>
                  <Card className="h-full p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {constat.title}
                    </h3>
                    <p className="text-gray-600">
                      {constat.description}
                    </p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          
          <ScrollReveal delay={0.3}>
            <p className="text-center text-gray-600 mt-8 italic">
              Dans ce contexte, le client est souvent laissé seul face à la complexité de l'offre.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Notre réponse */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-orange/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Notre réponse
            </h2>
            <p className="text-lg text-white/90 text-center mb-8 max-w-3xl mx-auto">
              NOA agit comme un assistant d'achat intelligent, directement intégré au site e-commerce.
            </p>
            <p className="text-base text-white/80 text-center mb-12 max-w-2xl mx-auto">
              La solution permet à l'utilisateur de formuler ses besoins en langage naturel (usage, contraintes, budget, préférences), pendant que NOA :
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {reponses.map((reponse, index) => {
              const Icon = reponse.icon
              return (
                <StaggerItem key={index}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all h-full flex flex-col shadow-lg">
                    <div className="flex flex-col items-center text-center gap-4 h-full">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-white flex-1 text-base md:text-lg leading-relaxed font-medium">
                        {reponse.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-xl text-white font-semibold">
                Le résultat : une expérience d'achat plus fluide, plus rassurante et plus efficace.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Une IA conçue pour les marchands */}
      <Section variant="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Technologie</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Une IA conçue pour les marchands
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                NOA n'est pas un chatbot générique. C'est une infrastructure IA métier, pensée pour s'adapter aux réalités opérationnelles du e-commerce.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {caracteristiques.map((carac, index) => {
              const Icon = carac.icon
              return (
                <StaggerItem key={index}>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <p className="text-gray-700 flex-1 pt-2">
                        {carac.text}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          
          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700">
                NOA s'inscrit comme une brique technologique complémentaire, non intrusive, et orientée performance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Ce que NOA apporte */}
      <Section variant="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ce que NOA apporte concrètement
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {apports.map((apport, index) => (
              <StaggerItem key={index}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      {apport}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Une vision long terme */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-blue/20 to-brand-orange/20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Une vision long terme
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                Nous croyons que le futur du e-commerce ne se jouera pas uniquement sur le prix ou la vitesse de livraison, mais sur la capacité à guider, conseiller et décider avec le client.
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                NOA s'inscrit dans cette transition : faire évoluer les sites marchands d'une logique de vitrine statique vers une expérience d'achat assistée par l'IA, plus humaine, plus efficace et plus intelligente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* NOA, en résumé */}
      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              NOA, en résumé
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {resume.map((item, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 h-full flex items-center gap-4">
                  <ArrowRight className="w-6 h-6 text-brand flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </div>
  )
}

