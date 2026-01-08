"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X, Check, Search, HelpCircle, ShieldX, Brain, Heart, ShoppingCart } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"

const comparison = {
  before: {
    title: "E-commerce classique",
    items: [
      { icon: Search, text: "Recherche rigide" },
      { icon: HelpCircle, text: "Choix complexe" },
      { icon: ShieldX, text: "Peu de réassurance" },
    ],
  },
  after: {
    title: "Avec NOA",
    items: [
      { icon: Brain, text: "Compréhension du projet" },
      { icon: Heart, text: "Aide au choix produit" },
      { icon: ShoppingCart, text: "Réassurance jusqu'au panier" },
    ],
  },
}

export function PainSection() {
  return (
    <Section variant="gradient" padding="lg">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            À chaque étape du parcours d'achat, vos clients hésitent.
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Before - E-commerce classique */}
          <ScrollReveal delay={0.1}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-red-500/5 rounded-3xl blur-xl group-hover:bg-red-500/10 transition-colors" />
              <div className="relative bg-dark-50/50 border border-red-500/20 rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-xl font-normal text-white">{comparison.before.title}</h3>
                </div>
                <ul className="space-y-4">
                  {comparison.before.items.map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-4 text-gray-400"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-red-400" />
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          {/* After - Avec NOA */}
          <ScrollReveal delay={0.2}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-brand/5 rounded-3xl blur-xl group-hover:bg-brand/10 transition-colors" />
              <div className="relative bg-dark-50/50 border border-brand/20 rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-xl font-normal text-white">{comparison.after.title}</h3>
                </div>
                <ul className="space-y-4">
                  {comparison.after.items.map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand" />
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

