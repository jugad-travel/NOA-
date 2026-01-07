"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Target, BookOpen, ShoppingBag, Home, LayoutGrid, FileText, ShoppingCart, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
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
    tagline: "Transformer une intention en panier complet",
    location: "Arrivée sur le site – Home & catégories",
    example: "« Je pars une semaine faire le GR20 »",
    icon: Compass,
    activeParcours: ["home", "categorie"],
  },
  {
    id: "match",
    name: "NOA Match",
    tagline: "Aider à choisir le bon produit",
    location: "Pages catégories & fiches produits",
    example: "« Je cherche des chaussures de randonnée milieu de gamme en 42 »",
    icon: Target,
    activeParcours: ["categorie", "pdp"],
  },
  {
    id: "expert",
    name: "NOA Expert",
    tagline: "Répondre aux questions précises",
    location: "Fiche produit",
    example: "« Est-ce que ces chaussures sont adaptées pour la terre battue ? »",
    icon: BookOpen,
    activeParcours: ["pdp"],
  },
  {
    id: "complete",
    name: "NOA Complete",
    tagline: "Compléter intelligemment le panier",
    location: "Panier & checkout",
    example: "« Nous vous conseillons ces chaussettes techniques... »",
    icon: ShoppingBag,
    activeParcours: ["panier"],
  },
]

export function GammeNoa() {
  const [activeParcours, setActiveParcours] = React.useState("home")
  
  const filteredGamme = React.useMemo(() => {
    return gammeData.filter((item) => item.activeParcours.includes(activeParcours))
  }, [activeParcours])
  
  return (
    <Section variant="white" padding="xl">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">La suite NOA</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              Une suite de 4 conseillers de vente IA, activés au bon moment
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Parcours Switcher */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-2 bg-gray-50 rounded-2xl border border-gray-200 w-fit mx-auto">
            <span className="text-gray-500 text-sm px-3 hidden sm:block">Parcours :</span>
            {parcours.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveParcours(p.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeParcours === p.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-white"
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
            {gammeData.map((item) => {
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
                  <Card 
                    className={cn(
                      "relative h-full transition-all border-2",
                      isHighlighted 
                        ? "border-gray-200 hover:border-gray-400 hover:shadow-lg" 
                        : "border-gray-100"
                    )}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm font-medium">{item.tagline}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400 text-sm flex-shrink-0">Où :</span>
                        <span className="text-gray-600 text-sm">{item.location}</span>
                      </div>
                    </div>
                    
                    {/* Example quote */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-600 text-sm italic">{item.example}</p>
                    </div>
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
              <Button variant="primary" size="lg">
                Voir les démos des 4 produits NOA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
