"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  Building2,
  Mountain,
  ShoppingBag,
  ExternalLink,
  Search,
  MessageCircle
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

// Blog articles (Conseils CRO)
const blogArticles = [
  {
    title: "5 stratégies pour augmenter votre taux de conversion en 2024",
    excerpt: "Découvrez les meilleures pratiques CRO pour transformer vos visiteurs en clients fidèles.",
    category: "Conseils CRO",
    readTime: "8 min",
    date: "15 Dec 2024",
    icon: TrendingUp,
  },
  {
    title: "L'IA au service du conseil de vente : révolution ou évolution ?",
    excerpt: "Comment l'intelligence artificielle transforme l'expérience d'achat en ligne.",
    category: "Conseils CRO",
    readTime: "6 min",
    date: "10 Dec 2024",
    icon: BookOpen,
  },
  {
    title: "Réduire les retours produits grâce à un meilleur conseil",
    excerpt: "Les erreurs de choix coûtent cher. Voici comment les éviter avec une approche conversationnelle.",
    category: "Conseils CRO",
    readTime: "5 min",
    date: "5 Dec 2024",
    icon: ShoppingBag,
  },
  {
    title: "Panier moyen : les leviers sous-exploités de l'e-commerce",
    excerpt: "Au-delà du cross-sell classique, explorez de nouvelles approches pour augmenter la valeur panier.",
    category: "Conseils CRO",
    readTime: "7 min",
    date: "28 Nov 2024",
    icon: TrendingUp,
  },
]

// Case studies (Études de cas)
const caseStudies = [
  {
    title: "E-commerce Outdoor : +32% de conversion sur les parcours assistés",
    industry: "Outdoor & Sport",
    icon: Mountain,
    metrics: [
      { label: "Conversion", value: "+32%" },
      { label: "Panier moyen", value: "+18%" },
    ],
    description: "Comment une marque d'équipement outdoor a transformé son expérience d'achat avec NOA Projet.",
  },
  {
    title: "Retail Mode : Réduction de 45% des retours liés aux erreurs de taille",
    industry: "Mode & Textile",
    icon: ShoppingBag,
    metrics: [
      { label: "Retours", value: "-45%" },
      { label: "Satisfaction", value: "+28%" },
    ],
    description: "NOA Match aide les clients à choisir la bonne taille du premier coup.",
  },
  {
    title: "Grand compte Tech : Déploiement sur architecture headless",
    industry: "Électronique",
    icon: Building2,
    metrics: [
      { label: "Intégration", value: "2 sem" },
      { label: "ROI", value: "3 mois" },
    ],
    description: "Intégration de la suite NOA complète sur une stack Next.js + Strapi.",
  },
]

// Help center categories (Centre d'aide)
const helpCategories = [
  {
    title: "Premiers pas",
    description: "Guide de démarrage, configuration initiale, bonnes pratiques",
    articles: 12,
    icon: BookOpen,
  },
  {
    title: "Intégration technique",
    description: "API, webhooks, connexion catalogue, déploiement",
    articles: 24,
    icon: FileText,
  },
  {
    title: "Configuration des modules",
    description: "Personnalisation de NOA Projet, Match, Expert et Complete",
    articles: 18,
    icon: MessageCircle,
  },
  {
    title: "FAQ",
    description: "Questions fréquentes, dépannage, support",
    articles: 32,
    icon: HelpCircle,
  },
]

export function RessourcesContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Ressources</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8">
              Blog (Conseils CRO), Études de cas, Centre d'aide.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-400">
              Explorez nos ressources pour optimiser votre e-commerce et tirer le meilleur de NOA.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Blog Section */}
      <Section id="blog" variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <Badge className="mb-4">Blog</Badge>
                <h2 className="text-3xl md:text-4xl font-normal text-white">
                  Conseils CRO
                </h2>
              </div>
              <Button variant="ghost">
                Voir tous les articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {blogArticles.map((article) => {
              const Icon = article.icon
              return (
                <StaggerItem key={article.title}>
                  <Card glow className="h-full group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-normal text-white mb-2 group-hover:text-brand transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {article.excerpt}
                        </p>
                        <p className="text-xs text-gray-500 mt-3">{article.date}</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Section>
      
      {/* Case Studies Section */}
      <Section id="etudes-de-cas" variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <Badge className="mb-4">Success Stories</Badge>
                <h2 className="text-3xl md:text-4xl font-normal text-white">
                  Études de cas
                </h2>
              </div>
              <Button variant="ghost">
                Voir toutes les études
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {caseStudies.map((study) => {
              const Icon = study.icon
              return (
                <StaggerItem key={study.title}>
                  <Card glow className="h-full flex flex-col group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                    
                    <h3 className="text-lg font-normal text-white mb-3 group-hover:text-brand transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {study.description}
                    </p>
                    
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-normal text-brand">{metric.value}</p>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Section>
      
      {/* Help Center Section */}
      <Section id="centre-aide" variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4">Support</Badge>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Centre d'aide
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Documentation complète, guides techniques et support pour tirer le meilleur de NOA.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Search bar */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher dans le centre d'aide..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-50/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {helpCategories.map((category) => {
              const Icon = category.icon
              return (
                <StaggerItem key={category.title}>
                  <Card className="h-full group cursor-pointer hover:border-brand/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-normal text-white mb-2 group-hover:text-brand transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {category.articles} articles
                    </p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Besoin d'aide personnalisée ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Notre équipe est disponible pour répondre à vos questions et vous accompagner.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="xl" magnetic>
                  Contacter l'équipe
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="secondary" size="xl">
                <ExternalLink className="w-5 h-5" />
                Documentation API
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}

