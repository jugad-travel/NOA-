"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
  CheckCircle,
  MessageSquare,
  Brain,
  Network,
  Webhook
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

// Platform logos
const platformLogos = [
  { name: "Shopify", category: "plateforme", image: "/images/Logo shopify .webp" },
  { name: "Adobe Commerce (Magento)", category: "plateforme", image: "/images/Logo magento.png" },
  { name: "WooCommerce", category: "plateforme", image: "/images/Logo WooCommerce.png" },
  { name: "Salesforce Commerce Cloud", category: "plateforme", image: "/images/Logo Salesforce .png" },
  { name: "Prestashop", category: "plateforme", image: "/images/Logo Prestashop.png" },
  { name: "BigCommerce", category: "plateforme", image: null }, // Pas de logo disponible
]

const modernArchitectures = [
  { name: "Sites headless / composable commerce", icon: Layers },
  { name: "Frontends React, Vue, Next.js", icon: Code },
  { name: "CMS headless (Strapi, Contentful, Sanity…)", icon: Box },
]

const modules = [
  { name: "PARCEL Projet", description: "Intention → Panier" },
  { name: "PARCEL Sélection", description: "Aide au choix" },
  { name: "PARCEL Conseil", description: "Questions produit" },
  { name: "PARCEL Complément", description: "Complétion panier" },
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
    { label: "Widget PARCEL", icon: MessageSquare, description: "Interface utilisateur légère" },
    { label: "PARCEL Reasoning Engine", icon: Brain, highlight: true, description: "Orchestrateur IA" },
    { label: "Storefront API", icon: Network, description: "GraphQL / REST" },
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
                  "w-36 h-36 rounded-3xl flex flex-col items-center justify-center gap-2 border transition-all",
                  step.highlight
                    ? "bg-brand/10 border-brand/30 shadow-glow"
                    : "border-gray-200"
                )}>
                  <Icon className={cn(
                    "w-8 h-8",
                    step.highlight ? "text-brand" : "text-gray-700"
                  )} style={step.highlight ? {} : { color: '#374151' }} />
                  <span className={cn(
                    "text-sm font-medium text-center px-2",
                    step.highlight ? "text-brand" : "text-gray-900"
                  )}>
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="text-xs text-center px-2 text-gray-600">
                      {step.description}
                    </span>
                  )}
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
      {/* Hero Section */}
      <Section variant="white" padding="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Rectangle avec dégradé en arrière-plan */}
          <div 
            className="relative rounded-3xl mx-4 md:mx-8 p-8 md:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
            }}
          >
            <ScrollReveal>
              <div className="text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Intégrations & Tech</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Pensé pour s'intégrer à votre écosystème e-commerce
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Architecture CMS-agnostique : PARCEL s'intègre sans modification de votre code, via les APIs natives de votre plateforme.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Introduction détaillée */}
      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                PARCEL est une brique applicative indépendante, conçue pour s'intégrer à des environnements e-commerce existants, sans refonte du site ni modification du tunnel de conversion.
              </p>
              <p>
                PARCEL s'adapte à votre plateforme via des connecteurs natifs (Shopify, Magento, WooCommerce, etc.) et communique via les APIs standards (Storefront API, Admin API, Webhooks).
              </p>
              <p className="font-medium text-gray-900">
                L'objectif n'est pas de remplacer vos outils, mais de s'appuyer sur votre stack actuelle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Compatibilité plateformes */}
      <Section variant="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Compatibilité plateformes & architectures
              </h2>
              <p className="text-xl text-gray-700">
                PARCEL est compatible avec les principales plateformes e-commerce et CMS du marché.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plateformes e-commerce */}
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Plateformes e-commerce</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platformLogos.map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-brand/30 transition-colors"
                      style={{ backgroundColor: "#fcf2f8" }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-2 flex-shrink-0 border border-gray-200">
                        {platform.image ? (
                          <Image
                            src={platform.image}
                            alt={platform.name}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Box className="w-5 h-5" style={{ color: '#9ca3af' }} />
                        )}
                      </div>
                      <span className="text-sm flex-1 text-gray-700">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
            
            {/* Architectures modernes */}
            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Architectures modernes</h3>
                <div className="space-y-4">
                  {modernArchitectures.map((arch) => {
                    const Icon = arch.icon
                    return (
                      <div
                        key={arch.name}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-brand/30 transition-colors"
                        style={{ backgroundColor: "#fcf2f8" }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                        <span className="flex-1 text-gray-700">{arch.name}</span>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.3}>
            <p className="text-center mt-8 text-lg text-brand">
              👉 PARCEL fonctionne aussi bien sur des stacks traditionnelles que sur des architectures modernes.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Stack Compatibility Panel */}
      <Section variant="dark" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Stack Compatibility</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Compatible avec votre écosystème
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-6 py-8 px-6 bg-dark-50/50 border border-white/10 rounded-3xl">
              {["Shopify", "Adobe Commerce", "WooCommerce", "React", "Strapi", "Prestashop", "BigCommerce", "Next.js", "Vue", "Contentful"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:border-brand/50 hover:text-brand hover:bg-white/15 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Architecture Preview */}
      <Section variant="white" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Badge className="mb-4">Architecture</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Intégration transparente et CMS-agnostique
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                PARCEL s'intègre comme une couche intelligente au-dessus de votre stack existante, sans modification de votre code ni de votre tunnel de conversion.
              </p>
            </div>
          </ScrollReveal>
          
          <ArchitecturePreview />
          
          <ScrollReveal delay={0.3}>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 border border-gray-200" style={{ backgroundColor: "#fcf2f8" }}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Widget Front-end</h4>
                <p className="text-sm text-gray-700">
                  Interface légère et isolée, compatible avec tous les thèmes. Aucune modification de votre code front-end.
                </p>
              </div>
              <div className="rounded-2xl p-6 border border-gray-200" style={{ backgroundColor: "#fcf2f8" }}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Brain className="w-6 h-6 text-brand" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Orchestrateur IA</h4>
                <p className="text-sm text-gray-700">
                  Moteur de décision qui interprète l'intention, construit des requêtes métier et génère des réponses explicatives.
                </p>
              </div>
              <div className="rounded-2xl p-6 border border-gray-200" style={{ backgroundColor: "#fcf2f8" }}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Network className="w-6 h-6 text-brand" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Connexion API</h4>
                <p className="text-sm text-gray-700">
                  Communication via Storefront API (GraphQL) ou REST, selon votre plateforme. Architecture CMS-agnostique.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Connexions fonctionnelles */}
      <Section variant="dark" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
              Connexions fonctionnelles
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto" style={{ color: '#d1d5db' }}>
              PARCEL s'intègre via les APIs natives de votre plateforme, sans modification de votre infrastructure.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 items-stretch">
            {/* Storefront API */}
            <ScrollReveal delay={0.1}>
              <Card glow className="h-full flex flex-col bg-dark-50/50 border-white/10">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Network className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>Storefront API</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#ffffff' }}>Connexion en temps réel pour :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Recherche produits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Prix et disponibilités</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Opérations panier</span>
                    </li>
                  </ul>
                  <p className="text-xs pt-2" style={{ color: '#d1d5db' }}>
                    GraphQL ou REST selon votre plateforme
                  </p>
                </div>
              </Card>
            </ScrollReveal>
            
            {/* Admin API */}
            <ScrollReveal delay={0.15}>
              <Card glow className="h-full flex flex-col bg-dark-50/50 border-white/10">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>Admin API</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#ffffff' }}>Synchronisation catalogue :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Ingestion produits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Métadonnées et règles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Configuration par shop</span>
                    </li>
                  </ul>
                  <p className="text-xs pt-2" style={{ color: '#d1d5db' }}>
                    Traitement en batch, non bloquant
                  </p>
                </div>
              </Card>
            </ScrollReveal>
            
            {/* Webhooks */}
            <ScrollReveal delay={0.2}>
              <Card glow className="h-full flex flex-col bg-dark-50/50 border-white/10">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Webhook className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>Webhooks</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#ffffff' }}>Synchronisation événements :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Création/mise à jour produits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Niveaux de stock</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Règles de pricing</span>
                    </li>
                  </ul>
                  <p className="text-xs pt-2" style={{ color: '#d1d5db' }}>
                    Mise à jour en temps réel
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
          
          {/* Panier & actions */}
          <ScrollReveal delay={0.3}>
            <Card glow className="bg-dark-50/50 border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                  <ShoppingCart className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Panier & actions utilisateur</h3>
              </div>
              
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-3" style={{ color: '#ffffff' }}>PARCEL interagit avec votre panier via les APIs natives :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Ajout au panier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Sélection de variantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Navigation vers produits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3" style={{ color: '#ffffff' }}>Respect strict de votre logique métier :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Règles de stock</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Pricing et promotions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span style={{ color: '#ffffff' }}>Contraintes catalogue</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Déploiement modulaire */}
      <Section variant="white" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Déploiement modulaire
              </h2>
              <p className="text-xl text-gray-700">
                PARCEL est structuré en modules indépendants, activables selon vos priorités :
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {modules.map((mod) => (
              <StaggerItem key={mod.name}>
                <div className="border border-gray-200 rounded-2xl p-5 hover:border-brand/30 transition-colors text-center" style={{ backgroundColor: "#fcf2f8" }}>
                  <h4 className="font-normal mb-1 text-gray-900">{mod.name}</h4>
                  <p className="text-sm text-gray-700">{mod.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <ScrollReveal delay={0.4}>
            <div className="mt-8 space-y-3 text-center">
              <p className="text-gray-900">Chaque module :</p>
              <ul className="inline-flex flex-col items-start gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-gray-700">est déployé sur une zone précise du site</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-gray-700">fonctionne de manière autonome</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-gray-700">peut être mesuré et ajusté séparément</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Intelligence & Retrieval */}
      <Section variant="dark" padding="lg">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Intelligence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Moteur de recommandation intelligent
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#e5e7eb' }}>
                PARCEL combine recherche native et intelligence artificielle pour comprendre l'intention et proposer des recommandations pertinentes.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <ScrollReveal delay={0.1}>
              <Card glow className="h-full flex flex-col bg-dark-50/50 border-white/10">
                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>Orchestrateur IA</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#ffffff' }}>Le moteur PARCEL :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Interprète l'intention utilisateur en langage naturel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Extrait les contraintes (budget, taille, usage, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Construit des requêtes métier adaptées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Génère des réponses explicatives et traçables</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Card glow className="h-full flex flex-col bg-dark-50/50 border-white/10">
                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>Retrieval Layer</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#ffffff' }}>Double niveau de recherche :</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Recherche native via Storefront API (rapide, canonique)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Intelligence sémantique pour comprendre l'intention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Reranking multi-critères (adéquation, disponibilité, prix)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#ffffff' }}>Shortlist pertinente avec justifications</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Sécurité & conformité */}
      <Section variant="dark" padding="xl">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Sécurité & conformité</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Conçu pour des environnements professionnels exigeants
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Card glow className="p-8 bg-dark-50/50 border-white/10">
              <div className="space-y-4">
                {securityFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <span style={{ color: '#ffffff' }}>{feature.title}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* CTA */}
      <Section variant="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Prêt à intégrer PARCEL à votre stack ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <a href="mailto:parcel.webai@gmail.com?subject=Demande de démo technique PARCEL">
              <Button variant="primary" size="xl" magnetic>
                Demander une démo technique
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}

