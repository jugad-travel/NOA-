"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Comment NOA s'intègre-t-il à mon site e-commerce existant ?",
    answer: "NOA s'installe comme une couche intelligente sur votre stack existante, sans refonte du site ni modification du tunnel de conversion. L'intégration se fait via API et est compatible avec les principales plateformes e-commerce.",
  },
  {
    question: "Quels types de produits NOA peut-il conseiller ?",
    answer: "NOA est particulièrement efficace pour les catalogues techniques ou à forte profondeur (sport, outdoor, mode, maison, électronique...). Il s'adapte à vos règles métier et exploite vos données produits existantes.",
  },
  {
    question: "Combien de temps prend l'intégration ?",
    answer: "Le déploiement est progressif et modulaire. Chaque module peut être activé indépendamment sur une zone précise du site, avec des premiers résultats mesurables rapidement.",
  },
  {
    question: "NOA remplace-t-il mon équipe de vente ou service client ?",
    answer: "NOA ne remplace pas vos équipes, il augmente leur efficacité en prenant en charge le conseil produit en ligne, 24/7. Vos équipes peuvent se concentrer sur les demandes à plus forte valeur ajoutée.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui, NOA est conforme RGPD avec un traitement des données strictement nécessaire au service, une isolation des environnements clients et un hébergement sécurisé respectant les politiques IT des grands comptes.",
  },
  {
    question: "Puis-je mesurer l'impact de NOA sur mes conversions ?",
    answer: "Absolument. Chaque module est déployé sur une zone précise du site, fonctionne de manière autonome et peut être mesuré et ajusté séparément. Vous disposez d'indicateurs clairs sur les parcours assistés.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white group-hover:text-brand transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300",
          isOpen && "rotate-180 text-brand"
        )} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)
  
  return (
    <Section variant="dark" padding="xl">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Questions fréquentes
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="bg-dark-50/50 border border-white/5 rounded-3xl px-6 md:px-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

