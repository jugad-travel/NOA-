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
    question: "Comment PARCEL s'intègre-t-il à mon site e-commerce existant ?",
    answer: "Sur Shopify, Parcel est disponible via l'application publiée sur le Shopify App Store. Pour les autres stacks, l'API back-end permet une intégration sur mesure. Les connecteurs prêts à installer pour les autres CMS sont encore en préparation.",
  },
  {
    question: "Quels types de produits PARCEL peut-il conseiller ?",
    answer: "PARCEL est particulièrement efficace pour les catalogues techniques ou à forte profondeur (sport, outdoor, mode, maison, électronique...). Il s'adapte à vos règles métier et exploite vos données produits existantes.",
  },
  {
    question: "Combien de temps prend l'intégration ?",
    answer: "Le calendrier dépend du catalogue, du mode d'intégration et du périmètre fonctionnel. Les étapes, données nécessaires et critères de recette sont cadrés avant le déploiement.",
  },
  {
    question: "PARCEL remplace-t-il mon équipe de vente ou service client ?",
    answer: "Parcel prend en charge les demandes de découverte et de conseil produit en ligne. Il peut passer la main lorsqu'une intervention humaine est nécessaire et fournit aux équipes des insights sur les demandes et les freins rencontrés.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Le périmètre de données, les accès et les responsabilités sont définis avant le déploiement. Parcel limite les flux aux informations utiles au cas d'usage et isole les configurations et données de chaque marchand.",
  },
  {
    question: "Puis-je mesurer l'impact de PARCEL sur mes conversions ?",
    answer: "Oui. Parcel suit les interactions et les parcours assistés. L'impact doit être évalué sur vos données, avec un périmètre comparable et, lorsque le trafic le permet, un test contrôlé.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-brand-blue transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300",
          isOpen && "rotate-180 text-brand-blue"
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
            <p className="text-gray-500 pb-6 leading-relaxed">
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
    <Section variant="white" padding="xl">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 font-display">
              Questions fréquentes
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="bg-white border border-gray-200 rounded-3xl px-6 md:px-8 shadow-sm">
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
