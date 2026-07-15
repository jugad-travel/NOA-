"use client"

import * as React from "react"
import {
  Compass,
  Target,
  BookOpen,
  Scale,
  LifeBuoy,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS, SHOPIFY_APP_STORE_URL, DEMO_CONTACT_URL } from "@/lib/videos"
import { cn } from "@/lib/utils"

const products = [
  {
    id: "parcel-projet",
    name: "PARCEL Projet",
    tagline: "Transformer une intention en panier complet",
    description:
      "PARCEL Projet intervient dès l'arrivée sur le site, lorsque le client exprime un besoin global ou un projet, sans savoir précisément quels produits acheter.",
    details:
      "Il capte l'intention en langage naturel, qualifie le contexte (durée, usage, niveau, contraintes) et structure le besoin en une sélection cohérente de produits — de l'indispensable à l'optionnel.",
    casTypiques: [
      "Équipement pour un trek, un sport, un projet maison",
      "Achat multi-produits sans point de départ précis",
    ],
    integration: ["Page d'accueil", "Pages catégories larges"],
    icon: Compass,
    videoId: VIDEOS.projet,
  },
  {
    id: "parcel-match",
    name: "PARCEL Match",
    tagline: "Aider à choisir le bon produit",
    description:
      "PARCEL Match intervient lorsque le client connaît le type de produit recherché, mais hésite entre plusieurs options.",
    details:
      "Il pose les questions pertinentes en langage client, applique vos règles métier (tailles, usages, budgets, compatibilités) et oriente vers le choix le plus adapté.",
    casTypiques: [
      "Choix de taille, de gamme ou de marque",
      "Produits techniques ou fortement différenciés",
    ],
    integration: ["Pages catégories", "Pages collections"],
    icon: Target,
    videoId: VIDEOS.match,
  },
  {
    id: "parcel-expert",
    name: "PARCEL Expert",
    tagline: "Répondre aux questions produit au moment décisif",
    description: "PARCEL Expert agit comme un vendeur expert sur une fiche produit précise.",
    details:
      "Il répond aux questions détaillées, explique les caractéristiques clés et aide le client à confirmer son choix — sans ticket support ni recherche externe.",
    casTypiques: [
      "Questions d'usage ou de compatibilité",
      "Derniers freins avant l'achat",
    ],
    integration: ["Fiche produit", "Encarts d'aide à la décision"],
    icon: BookOpen,
    videoId: VIDEOS.expert,
  },
  {
    id: "parcel-comparaison",
    name: "PARCEL Comparaison",
    tagline: "Comparer comme un vendeur, pas comme un tableau",
    description:
      "PARCEL Comparaison intervient quand le client hésite entre deux ou trois produits précis.",
    details:
      "Il compare critère par critère à partir des vraies fiches produit, donne un verdict honnête par usage (« pour la longue distance, celui-ci ; pour le confort, celui-là ») et aide à trancher.",
    casTypiques: [
      "Hésitation entre deux modèles proches",
      "Arbitrage prix / performance",
    ],
    integration: ["Depuis les recommandations", "Fiches produits"],
    icon: Scale,
    videoId: VIDEOS.comparaison,
  },
  {
    id: "parcel-sav",
    name: "PARCEL SAV",
    tagline: "Un service après-vente instantané",
    description:
      "PARCEL SAV répond aux questions d'après-vente à partir des politiques réelles de la boutique.",
    details:
      "Retours, remboursements, livraison, suivi : les réponses sont immédiates et fiables, avec passage de relais à un humain quand la situation le demande. Moins de tickets, plus de clients fidèles.",
    casTypiques: [
      "Politique de retour et remboursements",
      "Questions livraison et suivi de commande",
    ],
    integration: ["Assistant sur tout le site", "Pages compte / commandes"],
    icon: LifeBuoy,
    videoId: VIDEOS.sav,
  },
]

function ProductSection({
  product,
  isEven,
}: {
  product: (typeof products)[0]
  isEven: boolean
}) {
  return (
    <Section id={product.id} variant={isEven ? "gray" : "white"} padding="xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className={cn(!isEven && "lg:order-2")}>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-accent-blue font-medium">{product.tagline}</p>
              </div>

              <div className="space-y-4 mb-8 text-gray-600">
                <p>{product.description}</p>
                <p>{product.details}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-normal uppercase tracking-wider mb-3 text-gray-900">
                  Cas typiques
                </h4>
                <ul className="space-y-2">
                  {product.casTypiques.map((cas) => (
                    <li key={cas} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                      <span>{cas}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
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

          <ScrollReveal delay={0.15} className={cn(!isEven && "lg:order-1")}>
            <YouTubeEmbed videoId={product.videoId} title={`Démo ${product.name}`} />
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export function ProduitsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="white" padding="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative rounded-3xl mx-4 md:mx-8 p-8 md:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)",
            }}
          >
            <ScrollReveal>
              <div className="text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">La suite PARCEL</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Le conseiller de vente IA présent tout au long du parcours client
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Du premier besoin exprimé jusqu'au service après-vente, avec
                  compréhension contextuelle et recommandations pertinentes.
                  Chaque module ci-dessous est montré en vidéo, en conditions réelles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Vue d'ensemble */}
      <Section variant="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                Parcel réconcilie IA conversationnelle et décision commerciale réelle.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">01.</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Un vendeur digital pour le client
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    qui intervient sans perte de contexte sur l'ensemble du tunnel de vente
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">02.</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Un moteur gouverné par le marchand.
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    qui applique ses règles métier, priorités commerciales et contraintes opérationnelles
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Detailed Products */}
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} isEven={index % 2 === 0} />
      ))}

      {/* CTA Section */}
      <Section variant="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              <div
                className="rounded-3xl p-8 md:p-16 text-center"
                style={{
                  background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 50%, #ff966b 100%)",
                }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-8 font-display">
                  Prêt à activer votre nouveau conseiller de vente digital ?
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={DEMO_CONTACT_URL}>
                    <Button variant="secondary" size="xl" magnetic>
                      Demander une démo personnalisée
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  {SHOPIFY_APP_STORE_URL ? (
                    <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="white" size="xl">
                        Installer sur Shopify
                      </Button>
                    </a>
                  ) : (
                    <Button variant="white" size="xl" disabled>
                      Bientôt sur l'App Store Shopify
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  )
}
