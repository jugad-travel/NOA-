"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Target, BookOpen, ShoppingBag, Home, LayoutGrid, FileText, ShoppingCart, ArrowRight, MessageSquare } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

const parcours = [
  { id: "home", label: "Home", icon: Home },
  { id: "categorie", label: "Catégorie", icon: LayoutGrid },
  { id: "pdp", label: "PDP", icon: FileText },
  { id: "panier", label: "Panier", icon: ShoppingCart },
]

const gammeData = [
  {
    id: "projet",
    name: "NOA Projet",
    tagline: "Transformer une intention ou un projet en panier complet",
    location: "Arrivée sur le site – Home & catégories",
    example: "« Je pars une semaine faire le GR20 »",
    icon: Compass,
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    activeParcours: ["home", "categorie"],
    demoMessages: [
      { type: "user", text: "Je pars une semaine faire le GR20" },
      { type: "noa", text: "Je comprends ! Pour un trek d'une semaine sur le GR20, je vous propose un équipement complet adapté au terrain corse." },
    ],
  },
  {
    id: "match",
    name: "NOA Match",
    tagline: "Aider à choisir le bon produit, la bonne taille, la bonne gamme",
    location: "Pages catégories & fiches produits",
    example: "« Je cherche des chaussures de randonnée milieu de gamme en 42 »",
    icon: Target,
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
    activeParcours: ["categorie", "pdp"],
    demoMessages: [
      { type: "user", text: "Je cherche des chaussures de randonnée milieu de gamme en 42" },
      { type: "noa", text: "Parfait ! En 42, je vous recommande la Trail Pro X, idéale pour le terrain mixte avec un excellent rapport qualité-prix." },
    ],
  },
  {
    id: "expert",
    name: "NOA Expert",
    tagline: "Répondre aux questions précises sur un produit",
    location: "Fiche produit",
    example: "« Est ce que ces baskettes sont adaptées pour la terre battue »",
    icon: BookOpen,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    activeParcours: ["pdp"],
    demoMessages: [
      { type: "user", text: "Est ce que ces baskettes sont adaptées pour la terre battue" },
      { type: "noa", text: "Oui, ce modèle dispose d'une semelle spéciale terre battue avec un grip optimal et une durabilité renforcée." },
    ],
  },
  {
    id: "complete",
    name: "NOA Complete",
    tagline: "Compléter intelligemment le panier avant l'achat",
    location: "Panier & checkout",
    example: "« Nous vous conseillons ces chaussettes techniques de randonnée en 42 parfaitement adaptées pour votre trek et compatibles avec vos chaussures »",
    icon: ShoppingBag,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    activeParcours: ["panier"],
    demoMessages: [
      { type: "user", text: "Mon panier contient des chaussures de trek" },
      { type: "noa", text: "Nous vous conseillons ces chaussettes techniques de randonnée en 42 parfaitement adaptées pour votre trek et compatibles avec vos chaussures" },
    ],
  },
]

export function GammeNoa() {
  const [activeParcours, setActiveParcours] = React.useState("home")
  const [expandedCard, setExpandedCard] = React.useState<string | null>(null)
  
  const filteredGamme = React.useMemo(() => {
    return gammeData.filter((item) => item.activeParcours.includes(activeParcours))
  }, [activeParcours])
  
  return (
    <Section variant="dark" padding="xl" noise>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">La suite NOA</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Une suite de 4 conseillers de vente IA , activés au bon moment
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Parcours Switcher */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-2 bg-dark-50/50 rounded-2xl border border-white/5 w-fit mx-auto">
            <span className="text-gray-400 text-sm px-3 hidden sm:block">Parcours :</span>
            {parcours.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveParcours(p.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeParcours === p.id
                    ? "bg-brand text-dark-200"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <p.icon className="w-4 h-4" />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {gammeData.map((item, index) => {
              const isHighlighted = filteredGamme.includes(item)
              const Icon = item.icon
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: isHighlighted ? 1 : 0.4, 
                    scale: isHighlighted ? 1 : 0.98,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "relative group",
                    !isHighlighted && "pointer-events-none"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl transition-opacity",
                    item.color,
                    isHighlighted ? "opacity-50 group-hover:opacity-70" : "opacity-20"
                  )} />
                  
                  <Card 
                    className={cn(
                      "relative h-full cursor-pointer transition-all",
                      item.borderColor,
                      isHighlighted && "hover:border-brand/50"
                    )}
                    onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                        item.color
                      )}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                        <p className="text-brand text-sm font-medium">{item.tagline}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 text-sm flex-shrink-0">Où :</span>
                        <span className="text-gray-300 text-sm">{item.location}</span>
                      </div>
                    </div>
                    
                    {/* Example quote */}
                    <div className="bg-dark-100/50 rounded-xl p-4 border border-white/5">
                      <p className="text-gray-300 text-sm italic">{item.example}</p>
                    </div>
                    
                    {/* Mini Demo */}
                    <AnimatePresence>
                      {expandedCard === item.id && isHighlighted && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <div className="space-y-3">
                            {item.demoMessages.map((msg, i) => (
                              <div key={i} className={cn(
                                "flex gap-2",
                                msg.type === "user" ? "justify-end" : "justify-start"
                              )}>
                                {msg.type === "noa" && (
                                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-3 h-3 text-brand" />
                                  </div>
                                )}
                                <div className={cn(
                                  "max-w-[80%] rounded-xl px-3 py-2 text-sm",
                                  msg.type === "user" 
                                    ? "bg-gray-700 text-white" 
                                    : "bg-brand/10 border border-brand/20 text-gray-200"
                                )}>
                                  {msg.text}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        
        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/produits">
              <Button variant="secondary" size="lg">
                Découvrir les 4 produits NOA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

