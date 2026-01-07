"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Home, LayoutGrid, FileText, ShoppingCart } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { DemoNoaProjet, DemoNoaMatch, DemoNoaExpert, DemoNoaComplete } from "@/components/demos"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "projet", label: "Homepage", icon: Home, description: "Transformer un projet en panier" },
  { id: "match", label: "Catalogue", icon: LayoutGrid, description: "Trouver le bon produit" },
  { id: "expert", label: "Fiche produit", icon: FileText, description: "Répondre aux questions" },
  { id: "complete", label: "Panier", icon: ShoppingCart, description: "Compléter le panier" },
]

export function DemoSection() {
  const [activeTab, setActiveTab] = React.useState("projet")
  
  const renderDemo = () => {
    switch (activeTab) {
      case "projet":
        return <DemoNoaProjet key="projet" />
      case "match":
        return <DemoNoaMatch key="match" />
      case "expert":
        return <DemoNoaExpert key="expert" />
      case "complete":
        return <DemoNoaComplete key="complete" />
      default:
        return <DemoNoaProjet key="projet" />
    }
  }
  
  return (
    <Section variant="gray" padding="lg" className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg mb-4">
              À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit.
            </p>
            <p className="text-gray-500">
              De l'intention floue au panier final, transformez votre site en vendeur digital performant.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </ScrollReveal>
        
        {/* Active tab description */}
        <ScrollReveal delay={0.15}>
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500">
              {tabs.find(t => t.id === activeTab)?.description}
            </p>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Demo - Full width */}
      <ScrollReveal delay={0.2}>
        <div className="flex justify-center px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl"
          >
            {renderDemo()}
          </motion.div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
