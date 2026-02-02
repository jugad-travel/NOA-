"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Home, LayoutGrid, FileText, ShoppingCart, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

const etapes = [
  {
    id: "intention",
    numero: 1,
    titre: "Comprendre l'intention",
    localisation: "Home · Catégories",
    description: "PARCEL capte le besoin global",
    conversation: {
      user: "Je pars une semaine faire le GR20",
      noa: "Le GR20 est un trek exigeant ! Pour une semaine en autonomie, je vous recommande un équipement complet et fiable.",
    },
    actions: [
      "Reformule l'intention",
      "Identifie le contexte d'usage",
      "Prépare les critères implicites (terrain, durée, technicité)",
    ],
    couleur: "green",
  },
  {
    id: "orienter",
    numero: 2,
    titre: "Orienter vers les bons produits",
    localisation: "Catégories · Fiches produits",
    description: "PARCEL affine le choix",
    conversation: {
      user: "Je cherche des chaussures de randonnée milieu de gamme en 42",
      noa: "En taille 42, je vous recommande la Trail Pro X de Salomon. C'est notre best-seller avec un excellent rapport qualité-prix pour le terrain mixte.",
    },
    actions: [
      "Filtrage intelligent",
      "Comparaison utile",
      "Suppression des options non pertinentes",
    ],
    couleur: "blue",
  },
  {
    id: "doutes",
    numero: 3,
    titre: "Lever les doutes",
    localisation: "Fiche produit",
    description: "PARCEL répond comme un expert",
    conversation: {
      user: "Imperméable ?",
      noa: "Oui, la Trail Pro X est entièrement imperméable grâce à sa membrane Gore-Tex. Elle vous protège efficacement contre l'eau et l'humidité, même lors de longues randonnées sous la pluie.",
    },
    actions: [
      "Réponses contextualisées",
      "Basées sur le produit et l'usage initial",
      "Réassurance avant décision",
    ],
    couleur: "purple",
  },
  {
    id: "finaliser",
    numero: 4,
    titre: "Finaliser intelligemment",
    localisation: "Panier · Checkout",
    description: "PARCEL complète le panier",
    conversation: {
      user: null,
      noa: "Pour compléter votre équipement GR20, je vous conseille ces chaussettes techniques Mérinos en 42. Elles sont parfaitement compatibles avec vos Trail Pro X.",
    },
    actions: [
      "Cross-sell cohérent",
      "Zéro rupture de contexte",
      "Aide à décider, pas à pousser",
    ],
    couleur: "black",
  },
]

// Styles uniformes et épurés pour toutes les cartes

export function GammeNoa() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <Section variant="white" padding="xl" style={{ paddingTop: '6vh' }}>
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* En-tête */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">La suite PARCEL</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
              Un seul conseiller IA.
            </h2>
            <h3 className="text-2xl md:text-3xl font-normal text-gray-700 mb-6">
              Quatre moments clés du parcours d'achat.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              PARCEL accompagne l'utilisateur de la première intention jusqu'au panier, sans jamais perdre le contexte.
            </p>
          </div>
        </ScrollReveal>

        {/* Cartes en grille 1x1 sur mobile, 2x2 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
          {etapes.map((etape, index) => {
            return (
              <motion.div
                key={etape.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-lg border border-gray-200 p-5 md:p-6 transition-all min-h-[500px] flex flex-col hover:shadow-md"
              >
                {/* Numéro et Titre alignés */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-md bg-gray-900 flex items-center justify-center flex-shrink-0 font-semibold text-sm text-white">
                    {etape.numero}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 flex-1">
                    {etape.titre}
                  </h4>
                </div>

                {/* Localisation */}
                <div className="mb-3">
                  <span className="text-xs text-gray-500 font-medium">
                    {etape.localisation}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600 mb-4">
                  {etape.description}
                </p>

                {/* Conversation - Style chat IA */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4 flex-1 flex flex-col gap-2 min-h-0">
                  {etape.conversation.user && (
                    <div className="flex justify-end items-start gap-1.5">
                      <div className="bg-gray-900 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                        <p className="text-xs md:text-sm font-normal leading-tight text-left" style={{ color: '#ffffff' }}>
                          {etape.conversation.user}
                        </p>
                      </div>
                    </div>
                  )}
                  {!etape.conversation.user && (
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-3.5 h-3.5 rounded bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[7px]">★</span>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">PARCEL vous suggère</span>
                    </div>
                  )}
                  <div className="flex justify-start items-start gap-1.5">
                    <div className="bg-white text-gray-900 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] border border-gray-200">
                      <p className="text-xs md:text-sm font-normal leading-tight text-left">
                        {etape.conversation.noa}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <ul className="space-y-1.5">
                  {etape.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-gray-400" />
                      <span className="text-xs md:text-sm leading-relaxed text-gray-700">
                        {action}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                Voir les démos des 4 produits PARCEL
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
