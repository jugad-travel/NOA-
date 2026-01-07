"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Compass, 
  Target, 
  BookOpen, 
  ShoppingBag, 
  ArrowRight, 
  Home, 
  LayoutGrid, 
  FileText, 
  ShoppingCart,
  CheckCircle
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { DemoNoaProjet, DemoNoaMatch, DemoNoaExpert, DemoNoaComplete } from "@/components/demos"
import { cn } from "@/lib/utils"

const products = [
  {
    id: "noa-projet",
    name: "NOA Projet",
    tagline: "Transformer une intention en panier complet",
    description: "NOA Projet intervient dès l'arrivée sur le site, lorsque le client exprime un besoin global ou un projet, sans savoir précisément quels produits acheter.",
    details: "Il capte l'intention en langage naturel, qualifie le contexte (durée, usage, niveau, contraintes) et structure le besoin en une sélection cohérente de produits.",
    casTypiques: [
      "Équipement pour un trek, un sport, un projet maison",
      "Achat multi-produits sans point de départ précis",
    ],
    integration: ["Page d'accueil", "Pages catégories larges"],
    objectif: "ne plus perdre les clients qui ne savent pas par où commencer.",
    icon: Compass,
    demoComponent: "projet",
  },
  {
    id: "noa-match",
    name: "NOA Match",
    tagline: "Aider à choisir le bon produit",
    description: "NOA Match intervient lorsque le client connaît le type de produit recherché, mais hésite entre plusieurs options.",
    details: "Il pose les questions techniques pertinentes, applique vos règles métier (tailles, usages, budgets, compatibilités) et oriente vers le choix le plus adapté.",
    casTypiques: [
      "Choix de taille, de gamme ou de marque",
      "Produits techniques ou fortement différenciés",
    ],
    integration: ["Pages catégories techniques", "Fiches produits"],
    objectif: "réduire l'erreur de choix et sécuriser l'achat.",
    icon: Target,
    demoComponent: "match",
  },
  {
    id: "noa-expert",
    name: "NOA Expert",
    tagline: "Répondre aux questions produit au moment décisif",
    description: "NOA Expert agit comme un vendeur expert sur une fiche produit précise.",
    details: "Il répond aux questions détaillées, explique les caractéristiques clés, compare avec des alternatives proches et aide le client à confirmer son choix.",
    casTypiques: [
      "Comparaison entre deux modèles",
      "Questions d'usage ou de compatibilité",
    ],
    integration: ["Fiche produit", "Encarts d'aide à la décision"],
    objectif: "lever les derniers freins avant l'achat.",
    icon: BookOpen,
    demoComponent: "expert",
  },
  {
    id: "noa-complete",
    name: "NOA Complete",
    tagline: "Compléter intelligemment le panier",
    description: "NOA Complete intervient en fin de parcours, lorsque le panier est constitué.",
    details: "Il analyse le contenu du panier, comprend le besoin global initial et identifie les produits manquants ou utiles, en expliquant clairement chaque recommandation.",
    casTypiques: [
      "Panier incomplet",
      "Oublis fréquents",
      "Accessoires indispensables",
    ],
    integration: ["Page panier", "Checkout"],
    objectif: "améliorer la complétude du panier sans vente agressive.",
    icon: ShoppingBag,
    demoComponent: "complete",
  },
]

const parcoursSteps = [
  { id: "home", label: "Home", icon: Home, product: "NOA Projet" },
  { id: "categorie", label: "Catégorie", icon: LayoutGrid, product: "NOA Projet / Match" },
  { id: "pdp", label: "Fiche produit", icon: FileText, product: "NOA Match / Expert" },
  { id: "panier", label: "Panier", icon: ShoppingCart, product: "NOA Complete" },
]

function renderDemo(demoId: string) {
  switch (demoId) {
    case "projet":
      return <DemoNoaProjet />
    case "match":
      return <DemoNoaMatch />
    case "expert":
      return <DemoNoaExpert />
    case "complete":
      return <DemoNoaComplete />
    default:
      return null
  }
}

export function ProduitsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">La suite NOA</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-display">
              La suite NOA
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-lg md:text-xl text-gray-600">
              <p>
                NOA est une suite de conseillers de vente IA, conçus pour intervenir aux moments clés du parcours e-commerce.
              </p>
              <p>
                Chaque produit NOA répond à un type de situation client précis, sans modifier votre site ni votre tunnel existant.
              </p>
              <p className="text-gray-500">
                Vous activez les modules dont vous avez besoin, là où ils ont le plus d'impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Vue d'ensemble */}
      <Section variant="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">
                Vue d'ensemble de la gamme NOA
              </h2>
              <p className="text-xl text-gray-500">
                Une logique simple : le bon conseiller, au bon moment.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Parcours horizontal */}
          <ScrollReveal delay={0.1}>
            <div className="relative overflow-x-auto pb-4">
              <div className="flex items-center justify-between min-w-[600px] gap-4 px-4">
                {parcoursSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <React.Fragment key={step.id}>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                          <Icon className="w-7 h-7 text-gray-700" />
                        </div>
                        <span className="text-gray-900 font-medium">{step.label}</span>
                        <span className="text-xs text-gray-500 text-center">{step.product}</span>
                      </div>
                      {index < parcoursSteps.length - 1 && (
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-gray-200 min-w-[40px]" />
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Detailed Products with Real Demos */}
      {products.map((product, index) => {
        const Icon = product.icon
        const isEven = index % 2 === 0
        
        return (
          <Section
            key={product.id}
            id={product.id}
            variant={isEven ? "white" : "gray"}
            padding="xl"
          >
            <div className="max-w-7xl mx-auto">
              {/* Product Header */}
              <ScrollReveal>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 font-medium">{product.tagline}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Demo - Full Width */}
              <ScrollReveal delay={0.1}>
                <div className="flex justify-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl"
                  >
                    {renderDemo(product.demoComponent)}
                  </motion.div>
                </div>
              </ScrollReveal>
              
              {/* Product Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Description */}
                <ScrollReveal delay={0.2}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{product.details}</p>
                  </div>
                </ScrollReveal>
                
                {/* Cas typiques */}
                <ScrollReveal delay={0.3}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cas typiques</h3>
                    <ul className="space-y-3">
                      {product.casTypiques.map((cas) => (
                        <li key={cas} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{cas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                
                {/* Intégration & Objectif */}
                <ScrollReveal delay={0.4}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Intégration</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.integration.map((place) => (
                        <Badge key={place} variant="secondary">
                          {place}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Objectif</h3>
                    <p className="text-gray-600 text-sm">{product.objectif}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Section>
        )
      })}
      
      {/* CTA Section */}
      <Section variant="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                Vous pouvez activer un ou plusieurs modules NOA, selon vos priorités business.
              </p>
              <p className="text-gray-500">
                Chaque déploiement est progressif et mesurable.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Link href="/demo">
              <Button variant="primary" size="xl" magnetic>
                Demander une démo personnalisée
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
