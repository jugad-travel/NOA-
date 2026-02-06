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
  Users,
  MessageSquare,
  Settings,
  BarChart3
} from "lucide-react"

const teamMembers = [
  {
    name: "Vianney Mayaud",
    role: "Co-fondateur",
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
    role: "Co-fondateur, CTO",
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
    title: "Catalogues toujours plus vastes",
    subtitle: "Souvent techniques ou complexes",
  },
  {
    title: "Riches en données",
    subtitle: "Mais pauvres en guidance",
  },
  {
    title: "Parcours statiques",
    subtitle: "Recherche, filtres, comparateurs figés",
  },
]

const reponses = [
  {
    text: "Interprète l'intention réelle derrière la demande",
  },
  {
    text: "Analyse le catalogue en temps réel",
  },
  {
    text: "Compare, score et hiérarchise les produits pertinents",
  },
  {
    text: "Explique ses recommandations de manière compréhensible",
  },
  {
    text: "Déclenche des actions concrètes (navigation, ajout au panier, sélection de variantes)",
  },
  {
    text: "Arbitre selon les règles business et contraintes du marchand",
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
  "Meilleure conversion, pilotée par la décision",
  "Paniers plus cohérents, alignés avec les besoins réels",
  "Réduction des abandons liés à l'hésitation",
  "Valorisation intelligente des données catalogue",
  "Insights exploitables sur les intentions clients",
]

const resume = [
  "Un vendeur digital intégré au e-commerce",
  "Une IA orientée décision, pas simple conversation",
  "Une technologie gouvernée par les règles business du marchand",
  "Une brique compatible avec les stacks existantes",
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
                <Badge className="mb-6 bg-white/90 text-gray-900">À propos de PARCEL</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Repenser l'expérience d'achat à l'ère de l'IA
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Découvrez comment PARCEL transforme l'expérience d'achat en ligne avec l'intelligence artificielle.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section variant="white" padding="lg" className="pb-2">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              Parcel s'attaque à l'angle mort de la vente en ligne : <span className="font-bold text-gray-900">l'aide réelle à la décision.</span>
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Team Section - GARDÉE INTACTE */}
      <Section variant="white" padding="xl" className="pt-4">
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

      {/* Le constat */}
      <Section variant="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Le constat
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Aujourd'hui, les catalogues e-commerce sont :
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {constats.map((constat, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Image 
                      src="/images/Logo Parcel sans écriture.png"
                      alt="PARCEL"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {constat.title}
                  </h3>
                  <p className="text-gray-600">
                    {constat.subtitle}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 font-semibold">
                Résultat : hésitation, abandon et décisions sous-optimales.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Notre conviction */}
      <Section variant="white" padding="lg" className="pt-8 md:pt-12 pb-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Notre conviction
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8">
              Une décision d'achat est toujours le résultat de la rencontre entre deux logiques complémentaires :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900 border-gray-900">
                <p className="text-lg leading-relaxed" style={{ color: '#ffffff' }}>
                  Le client, avec son projet, ses usages, ses contraintes et ses doutes.
                </p>
              </Card>
              <Card className="p-6 bg-gray-900 border-gray-900">
                <p className="text-lg leading-relaxed" style={{ color: '#ffffff' }}>
                  Le marchand, avec sa stratégie commerciale, ses règles métier, ses contraintes de stock, de marge et de logistique.
                </p>
              </Card>
            </div>
            <p className="text-xl text-gray-900 font-semibold mt-8 text-center">
              Le e-commerce performant est celui qui sait orchestrer intelligemment cette dualité.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Notre objectif */}
      <Section variant="dark" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center" style={{ color: '#ffffff' }}>
              NOTRE OBJECTIF :
            </h2>
            <div className="bg-gray-700 rounded-xl p-6 md:p-8">
              <p className="text-white text-lg md:text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                Redonner au <strong>client</strong> en ligne l'<strong>expérience d'achat</strong> qu'il va chercher <strong>en magasin</strong> tout en permettant au <strong>marchand</strong> de piloter clairement ses <strong>priorités business.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Notre réponse */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-orange/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Notre réponse
            </h2>
            <p className="text-lg text-white/90 text-center mb-2 max-w-3xl mx-auto">
              Parcel n'est pas un chatbot générique.
            </p>
            <p className="text-base text-white/80 text-center mb-12 max-w-2xl mx-auto">
              C'est une infrastructure de décision commerciale, conçue pour :
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {reponses.map((reponse, index) => {
              return (
                <StaggerItem key={index}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all h-full flex flex-col shadow-lg">
                    <div className="flex flex-col items-center text-center gap-4 h-full">
                      <Image 
                        src="/images/Logo Parcel 02:02:2026.png"
                        alt="PARCEL"
                        width={120}
                        height={120}
                        className="object-contain flex-shrink-0"
                      />
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
              <p className="text-lg text-white/90">
                Le tout sans jamais perdre le contexte, du premier besoin jusqu'à la décision finale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Côté client / Côté marchand */}
      <Section variant="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Une IA pensée pour le client…<br />et gouvernée par le marchand.
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Côté client</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Parcel agit comme un vendeur digital :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">il guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">il compare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">il rassure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">il aide à décider</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Côté marchand</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Parcel est un moteur entièrement gouvernable :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">règles métier explicites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">priorités commerciales paramétrables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">contraintes produits, stock et logistique intégrées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">décisions auditables et explicables</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-900 font-semibold mt-6">
                  Le marchand ne délègue pas sa stratégie à l'IA. Il la formalise et la rend exécutable à grande échelle.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Une brique technologique */}
      <Section variant="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Technologie</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Une brique technologique, pas une refonte
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Parcel s'intègre de manière fluide aux stacks e-commerce existantes.
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
              <p className="text-xl text-gray-900 font-semibold">
                Parcel complète l'existant. Il ne le remplace pas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Ce que Parcel apporte */}
      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ce que Parcel apporte concrètement
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {apports.map((apport, index) => (
              <StaggerItem key={index}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
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
                Nous sommes convaincus que le futur du e-commerce ne se jouera pas uniquement sur le prix ou la vitesse de livraison.
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                Il se jouera sur la capacité des sites marchands à comprendre, guider, arbitrer et décider avec leurs clients.
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed font-semibold">
                Parcel s'inscrit dans cette transition : faire évoluer le e-commerce d'une logique de vitrine statique vers une vente assistée, gouvernée et intelligible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Parcel, en résumé */}
      <Section variant="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Parcel, en résumé
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
