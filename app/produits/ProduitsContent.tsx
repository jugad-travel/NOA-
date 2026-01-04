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
  CheckCircle,
  MessageSquare
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
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
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    demoMessages: [
      { type: "user", text: "Je prépare un trail de 80km en montagne" },
      { type: "noa", text: "Excellent défi ! Pour un ultra-trail en montagne, je vous propose un équipement complet : chaussures à crampons, sac hydratation 12L, bâtons carbone pliables, et vêtements techniques respirants." },
    ],
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
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    demoMessages: [
      { type: "user", text: "Je cherche des chaussures de randonnée milieu de gamme en 42" },
      { type: "noa", text: "Pour votre pointure 42 et votre budget milieu de gamme, je vous recommande la Salomon X Ultra 4 GTX : polyvalente, imperméable, et excellente accroche. Idéale pour sentiers mixtes." },
    ],
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
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    demoMessages: [
      { type: "user", text: "Est ce que ces baskettes sont adaptées pour la terre battue" },
      { type: "noa", text: "Oui, ce modèle est spécialement conçu pour la terre battue avec sa semelle en gomme non-marquante et son motif à chevrons pour un grip optimal. Renforts latéraux pour les appuis." },
    ],
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
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    demoMessages: [
      { type: "user", text: "J'ai ajouté des chaussures de randonnée à mon panier" },
      { type: "noa", text: "Nous vous conseillons ces chaussettes techniques de randonnée en 42 parfaitement adaptées pour votre trek et compatibles avec vos chaussures" },
    ],
  },
]

const parcoursSteps = [
  { id: "home", label: "Home", icon: Home, product: "NOA Projet" },
  { id: "categorie", label: "Catégorie", icon: LayoutGrid, product: "NOA Projet / Match" },
  { id: "pdp", label: "Fiche produit", icon: FileText, product: "NOA Match / Expert" },
  { id: "panier", label: "Panier", icon: ShoppingCart, product: "NOA Complete" },
]

export function ProduitsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="dark" padding="xl" noise>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">La suite NOA</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              La suite NOA
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-lg md:text-xl text-gray-300">
              <p>
                NOA est une suite de conseillers de vente IA, conçus pour intervenir aux moments clés du parcours e-commerce.
              </p>
              <p>
                Chaque produit NOA répond à un type de situation client précis, sans modifier votre site ni votre tunnel existant.
              </p>
              <p>
                Vous activez les modules dont vous avez besoin, là où ils ont le plus d'impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Vue d'ensemble */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Vue d'ensemble de la gamme NOA
              </h2>
              <p className="text-xl text-gray-400">
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
                        <div className="w-16 h-16 rounded-2xl bg-dark-50 border border-white/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-brand" />
                        </div>
                        <span className="text-white font-medium">{step.label}</span>
                        <span className="text-xs text-gray-500 text-center">{step.product}</span>
                      </div>
                      {index < parcoursSteps.length - 1 && (
                        <div className="flex-1 h-px bg-gradient-to-r from-brand/50 to-brand/20 min-w-[40px]" />
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Detailed Products */}
      {products.map((product, index) => {
        const Icon = product.icon
        const isEven = index % 2 === 0
        
        return (
          <Section
            key={product.id}
            id={product.id}
            variant={isEven ? "dark" : "gradient"}
            padding="xl"
            noise={!isEven}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <ScrollReveal className={cn(!isEven && "lg:order-2")}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center",
                        product.color
                      )}>
                        <Icon className={cn("w-7 h-7", product.iconColor)} />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {product.name}
                        </h2>
                        <p className="text-brand font-medium">{product.tagline}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-300 mb-8">
                      <p>{product.description}</p>
                      <p>{product.details}</p>
                    </div>
                    
                    {/* Cas typiques */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Cas typiques
                      </h4>
                      <ul className="space-y-2">
                        {product.casTypiques.map((cas) => (
                          <li key={cas} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                            <span>{cas}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Où il s'intègre */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Où il s'intègre
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.integration.map((place) => (
                          <Badge key={place} variant="secondary">
                            {place}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Objectif */}
                    <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4">
                      <p className="text-brand">
                        <span className="font-semibold">👉 Objectif :</span> {product.objectif}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                {/* Demo Card */}
                <ScrollReveal delay={0.2} className={cn(!isEven && "lg:order-1")}>
                  <Card glass className={cn("p-6", product.borderColor)}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className={cn(
                        "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
                        product.color
                      )}>
                        <MessageSquare className={cn("w-5 h-5", product.iconColor)} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{product.name}</h4>
                        <p className="text-xs text-gray-400">Démonstration</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {product.demoMessages.map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 }}
                          className={cn(
                            "flex gap-3",
                            msg.type === "user" ? "justify-end" : "justify-start"
                          )}
                        >
                          {msg.type === "noa" && (
                            <div className={cn(
                              "w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                              product.color
                            )}>
                              <Icon className={cn("w-4 h-4", product.iconColor)} />
                            </div>
                          )}
                          <div className={cn(
                            "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                            msg.type === "user"
                              ? "bg-gray-700 text-white rounded-br-sm"
                              : cn("border rounded-bl-sm text-gray-200", product.borderColor, "bg-gradient-to-br", product.color.replace("/20", "/10"))
                          )}>
                            {msg.text}
                          </div>
                          {msg.type === "user" && (
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm">👤</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </Section>
        )
      })}
      
      {/* CTA Section */}
      <Section variant="dark" padding="xl" noise>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-4 text-lg text-gray-300 mb-8">
              <p>
                Vous pouvez activer un ou plusieurs modules NOA, selon vos priorités business.
              </p>
              <p>
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

