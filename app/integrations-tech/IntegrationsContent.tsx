"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { 
  ArrowRight, 
  Database, 
  ShoppingCart, 
  Layers, 
  Shield, 
  Lock, 
  Server, 
  FileCheck,
  Zap,
  Code,
  Box,
  CheckCircle
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

// Platform logos
const platformLogos = [
  { name: "Shopify", category: "plateforme" },
  { name: "Adobe Commerce (Magento)", category: "plateforme" },
  { name: "WooCommerce", category: "plateforme" },
  { name: "Salesforce Commerce Cloud", category: "plateforme" },
  { name: "Prestashop", category: "plateforme" },
  { name: "BigCommerce", category: "plateforme" },
]

const modernArchitectures = [
  { name: "Sites headless / composable commerce", icon: Layers },
  { name: "Frontends React, Vue, Next.js", icon: Code },
  { name: "CMS headless (Strapi, Contentful, Sanity…)", icon: Box },
]

const modules = [
  { name: "NOA Projet", description: "Intention → Panier" },
  { name: "NOA Sélection", description: "Aide au choix" },
  { name: "NOA Conseil", description: "Questions produit" },
  { name: "NOA Complément", description: "Complétion panier" },
]

const securityFeatures = [
  { icon: Shield, title: "Conformité RGPD" },
  { icon: FileCheck, title: "Traitement des données strictement nécessaire au service" },
  { icon: Lock, title: "Isolation des environnements clients" },
  { icon: Server, title: "Hébergement sécurisé" },
  { icon: CheckCircle, title: "Respect des politiques IT et sécurité des grands comptes" },
]

function ArchitecturePreview() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const steps = [
    { label: "Catalogue API", icon: Database },
    { label: "NOA", icon: Zap, highlight: true },
    { label: "Frontend", icon: Code },
    { label: "Panier/Checkout", icon: ShoppingCart },
  ]
  
  return (
    <div ref={ref} className="relative py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10"
              >
                <div className={cn(
                  "w-32 h-32 rounded-3xl flex flex-col items-center justify-center gap-2 border transition-all",
                  step.highlight
                    ? "bg-brand/10 border-brand/30 shadow-glow"
                    : "bg-dark-50 border-white/10"
                )}>
                  <Icon className={cn(
                    "w-8 h-8",
                    step.highlight ? "text-brand" : "text-gray-400"
                  )} />
                  <span className={cn(
                    "text-sm font-medium text-center px-2",
                    step.highlight ? "text-brand" : "text-gray-300"
                  )}>
                    {step.label}
                  </span>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-brand/50 to-brand/20 origin-left"
                />
              )}
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="md:hidden h-8 w-0.5 bg-gradient-to-b from-brand/50 to-brand/20 origin-top"
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export function IntegrationsContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Intégrations & Tech</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8">
              Pensé pour s'intégrer à votre écosystème e-commerce
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-lg md:text-xl text-gray-300">
              <p>
                NOA est une brique applicative indépendante, conçue pour s'intégrer à des environnements e-commerce existants, sans refonte du site ni modification du tunnel de conversion.
              </p>
              <p>
                L'objectif n'est pas de remplacer vos outils, mais de s'appuyer sur votre stack actuelle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Compatibilité plateformes */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Compatibilité plateformes & architectures
              </h2>
              <p className="text-xl text-gray-400">
                NOA est compatible avec les principales plateformes e-commerce et CMS du marché.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plateformes e-commerce */}
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <h3 className="text-xl font-normal text-white mb-6">Plateformes e-commerce</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platformLogos.map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-dark-100/50 border border-white/5 hover:border-brand/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Box className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-300">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
            
            {/* Architectures modernes */}
            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <h3 className="text-xl font-normal text-white mb-6">Architectures modernes</h3>
                <div className="space-y-4">
                  {modernArchitectures.map((arch) => {
                    const Icon = arch.icon
                    return (
                      <div
                        key={arch.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-dark-100/50 border border-white/5 hover:border-brand/30 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                        <span className="text-gray-300">{arch.name}</span>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.3}>
            <p className="text-center text-brand mt-8 text-lg">
              👉 NOA fonctionne aussi bien sur des stacks traditionnelles que sur des architectures modernes.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Stack Compatibility Panel */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Stack Compatibility</Badge>
              <h2 className="text-3xl md:text-4xl font-normal text-white">
                Compatible avec votre écosystème
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-6 py-8 px-6 bg-dark-50/50 border border-white/5 rounded-3xl">
              {["Shopify", "Adobe Commerce", "WooCommerce", "React", "Strapi", "Prestashop", "BigCommerce", "Next.js", "Vue", "Contentful"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-brand/30 hover:text-brand transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Architecture Preview */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Badge className="mb-4">Architecture Preview</Badge>
              <h2 className="text-3xl md:text-4xl font-normal text-white">
                Intégration transparente
              </h2>
            </div>
          </ScrollReveal>
          
          <ArchitecturePreview />
        </div>
      </Section>
      
      {/* Connexions fonctionnelles */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal text-white text-center mb-12">
              Connexions fonctionnelles
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Catalogue produit */}
            <ScrollReveal delay={0.1}>
              <Card glow className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Database className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-2xl font-normal text-white">Catalogue produit</h3>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>NOA se connecte à votre catalogue via :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span>API REST ou GraphQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span>flux produits structurés, lorsque nécessaire</span>
                    </li>
                  </ul>
                  
                  <p className="pt-2">Il exploite exclusivement les données existantes :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>attributs produits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>catégories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>prix et disponibilités</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>règles métier définies côté e-commerce</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
            
            {/* Panier & funnel */}
            <ScrollReveal delay={0.2}>
              <Card glow className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <ShoppingCart className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-2xl font-normal text-white">Panier & funnel d'achat</h3>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>NOA interagit avec :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>le panier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>le tunnel de commande</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>les règles de stock et de pricing existantes</span>
                    </li>
                  </ul>
                  
                  <p className="pt-4 text-gray-400">
                    Les actions (ajout au panier, sélection de variantes) sont effectuées dans le cadre strict de votre logique e-commerce.
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Déploiement modulaire */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Déploiement modulaire
              </h2>
              <p className="text-xl text-gray-400">
                NOA est structuré en modules indépendants, activables selon vos priorités :
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {modules.map((mod) => (
              <StaggerItem key={mod.name}>
                <div className="bg-dark-50/50 border border-white/10 rounded-2xl p-5 hover:border-brand/30 transition-colors text-center">
                  <h4 className="text-white font-normal mb-1">{mod.name}</h4>
                  <p className="text-gray-400 text-sm">{mod.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <ScrollReveal delay={0.4}>
            <div className="mt-8 space-y-3 text-center">
              <p className="text-gray-300">Chaque module :</p>
              <ul className="inline-flex flex-col items-start gap-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>est déployé sur une zone précise du site</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>fonctionne de manière autonome</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>peut être mesuré et ajusté séparément</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Sécurité & conformité */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Sécurité & conformité</Badge>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Conçu pour des environnements professionnels exigeants
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Card glow className="p-8">
              <div className="space-y-4">
                {securityFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <span className="text-gray-300">{feature.title}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* CTA */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-8">
              Prêt à intégrer NOA à votre stack ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Link href="/demo">
              <Button variant="primary" size="xl" magnetic>
                Demander une démo technique
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}

