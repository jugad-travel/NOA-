"use client"

import * as React from "react"
import Link from "next/link"
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
  CheckCircle
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { DemoNoaProjet, DemoNoaMatch, DemoNoaExpert, DemoNoaComplete } from "@/components/demos"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: "noa-projet",
    name: "PARCEL Projet",
    tagline: "Transformer une intention en panier complet",
    description: "PARCEL Projet intervient dès l'arrivée sur le site, lorsque le client exprime un besoin global ou un projet, sans savoir précisément quels produits acheter.",
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
    demoComponent: DemoNoaProjet,
  },
  {
    id: "noa-match",
    name: "PARCEL Match",
    tagline: "Aider à choisir le bon produit",
    description: "PARCEL Match intervient lorsque le client connaît le type de produit recherché, mais hésite entre plusieurs options.",
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
    demoComponent: DemoNoaMatch,
  },
  {
    id: "noa-expert",
    name: "PARCEL Expert",
    tagline: "Répondre aux questions produit au moment décisif",
    description: "PARCEL Expert agit comme un vendeur expert sur une fiche produit précise.",
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
    demoComponent: DemoNoaExpert,
  },
  {
    id: "noa-complete",
    name: "PARCEL Complete",
    tagline: "Compléter intelligemment le panier",
    description: "PARCEL Complete intervient en fin de parcours, lorsque le panier est constitué.",
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
    demoComponent: DemoNoaComplete,
  },
]

const parcoursSteps = [
  { id: "home", label: "Home", icon: Home, product: "PARCEL Projet" },
  { id: "categorie", label: "Catégorie", icon: LayoutGrid, product: "PARCEL Projet / Match" },
  { id: "pdp", label: "Fiche produit", icon: FileText, product: "PARCEL Match / Expert" },
  { id: "panier", label: "Panier", icon: ShoppingCart, product: "PARCEL Complete" },
]

interface ProductDemoSectionProps {
  product: typeof products[0]
  index: number
  isEven: boolean
}

function ProductDemoSection({ product, index, isEven }: ProductDemoSectionProps) {
  const Icon = product.icon
  const sectionWrapperRef = React.useRef<HTMLDivElement>(null)
  const demoContainerRef = React.useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = React.useState(0)
  const scrollTriggerRef = React.useRef<ScrollTrigger | null>(null)

  React.useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current
    const demoContainer = demoContainerRef.current
    if (!sectionWrapper || !demoContainer) return

    const viewportHeight = window.innerHeight
    const scrollDistance = viewportHeight * 2.0 // Distance de scroll pour chaque démo

    // Désactiver ScrollTrigger sur mobile pour éviter les bugs de scroll
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // Sur mobile, afficher simplement la démo sans animation de scroll
      setAnimationProgress(1)
      return
    }

    // Nettoyer le ScrollTrigger existant
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill()
    }

    // Créer un ScrollTrigger pour cette section
    // Le pin commence quand la fenêtre de démo est centrée dans le viewport
    // Attendre que les éléments soient rendus pour calculer les positions
    const updateScrollTrigger = () => {
      const demoRect = demoContainer.getBoundingClientRect()
      const sectionRect = sectionWrapper.getBoundingClientRect()
      const demoTopRelative = demoRect.top - sectionRect.top
      const viewportCenter = viewportHeight / 2
      
      // Calculer le start pour que le pin commence quand la démo est centrée
      const startOffset = viewportCenter - (demoTopRelative + demoRect.height / 2)
      
      // Nettoyer le ScrollTrigger existant
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
      }
      
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionWrapper,
        start: `top ${startOffset}px`, // Commence quand la démo est centrée
        end: `+=${scrollDistance}`,
        scrub: 0.3,
        pin: sectionWrapper,
        anticipatePin: 1,
        pinSpacing: true,
        pinReparent: false,
        onUpdate: (self) => {
          const progress = self.progress // 0 à 1
          setAnimationProgress(progress)
        },
        onLeave: () => {
          setAnimationProgress(1)
        },
        onLeaveBack: () => {
          setAnimationProgress(0)
        },
      })
    }
    
    // Attendre que le DOM soit prêt
    setTimeout(updateScrollTrigger, 100)
    
    // Réinitialiser au redimensionnement
    const handleResize = () => {
      updateScrollTrigger()
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
      }
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
      }
    }
  }, [])

  const DemoComponent = product.demoComponent

  return (
    <div ref={sectionWrapperRef}>
      <Section
        id={product.id}
        variant={isEven ? "gray" : "gradient"}
        padding="xl"
      >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal className={cn(!isEven && "lg:order-2", "relative z-10")}>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">
                  {product.name}
                </h2>
                <p className="text-brand font-medium">{product.tagline}</p>
              </div>
              
              <div className={cn("space-y-4 mb-8", isEven ? "text-gray-700" : "text-gray-300")}>
                <p>{product.description}</p>
                <p>{product.details}</p>
              </div>
              
              {/* Cas typiques */}
              <div className="mb-6">
                <h4 className={cn("text-sm font-normal uppercase tracking-wider mb-3", isEven ? "text-gray-600" : "text-gray-400")}>
                  Cas typiques
                </h4>
                <ul className="space-y-2">
                  {product.casTypiques.map((cas) => (
                    <li key={cas} className={cn("flex items-start gap-2", isEven ? "text-gray-900" : "text-gray-300")}>
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{cas}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Où il s'intègre */}
              <div className="mb-6">
                <h4 className="text-sm font-normal text-gray-400 uppercase tracking-wider mb-3">
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
              
            </div>
          </ScrollReveal>
          
          {/* Demo */}
          <ScrollReveal delay={0.2} className={cn(!isEven && "lg:order-1", "relative z-0")}>
            <div ref={demoContainerRef} className="relative z-0">
              {DemoComponent && <DemoComponent animationProgress={animationProgress} />}
            </div>
          </ScrollReveal>
        </div>
      </div>
      </Section>
    </div>
  )
}

export function ProduitsContent() {
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
                <Badge className="mb-6 bg-white/90 text-gray-900">La suite PARCEL</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Le conseiller de vente IA présent tout au long du parcours client
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Du premier besoin exprimé jusqu'à la décision d'achat, avec compréhension contextuelle et recommandations pertinentes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Vue d'ensemble */}
      <Section variant="gradient" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Vue d'ensemble de la gamme PARCEL
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
        const isEven = index % 2 === 0
        return (
          <ProductDemoSection
            key={product.id}
            product={product}
            index={index}
            isEven={isEven}
          />
        )
      })}
      
      {/* CTA Section */}
      <Section variant="gray" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-4 text-lg text-gray-300 mb-8">
              <p>
                Vous pouvez activer un ou plusieurs modules PARCEL, selon vos priorités business.
              </p>
              <p>
                Chaque déploiement est progressif et mesurable.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <a href="mailto:parcel.webai@gmail.com?subject=Demande de démo personnalisée PARCEL">
              <Button variant="primary" size="xl" magnetic>
                Demander une démo personnalisée
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}

