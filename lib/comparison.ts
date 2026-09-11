import { SHOPIFY_INSTALL_TIME_SHORT } from "@/lib/marketing"
import { pricingData } from "@/lib/pricing"

export const comparisonLastVerifiedAt = "2026-09-10"
export const comparisonVerifiedLabel = "10 septembre 2026"

const parcelFree = pricingData.find((plan) => plan.id === "free")!
const parcelEssential = pricingData.find((plan) => plan.id === "essential")!

export type ComparisonProductId = "parcel" | "doofinder" | "iadvize" | "algolia" | "rep-ai"
export type CompetitorId = Exclude<ComparisonProductId, "parcel">

export type ComparisonProduct = {
  id: ComparisonProductId
  name: string
  category: string
  sourceUrl: string
  sourceUrls?: readonly string[]
  lastVerifiedAt: string
  data: Record<string, string>
}

export const comparisonProofs = [
  { value: "2 min", label: "Installation Shopify" },
  { value: "0 €", label: "Recherche déterministe" },
  { value: "79 €/mois", label: "500 sessions Parcel" },
  { value: "Avec vous", label: "Configuration métier" },
] as const

export const comparisonRows = [
  { id: "positioning", label: "Positionnement produit" },
  { id: "search", label: "Recherche e-commerce" },
  { id: "decision", label: "Assistance à la décision" },
  { id: "interface", label: "Interface d’achat" },
  { id: "rules", label: "Configuration métier" },
  { id: "support", label: "Accompagnement" },
  { id: "intent", label: "Intent data" },
  { id: "shopify", label: "Shopify" },
  { id: "price", label: "Prix public" },
  { id: "billing", label: "Modèle de facturation" },
] as const

export const competitorComparisonData: readonly ComparisonProduct[] = [
  {
    id: "parcel",
    name: "Parcel",
    category: "Vendeur IA / guided commerce",
    sourceUrl: "https://parcel-ia.com/tarifs",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Vendeur IA et aide à la décision",
      search: "Déterministe gratuite, puis IA selon le besoin",
      decision: "Cœur du produit : qualifier, comparer et recommander",
      interface: "Recherche, questions, produits, comparatifs et panier",
      rules: "Questions, contraintes et règles configurées avec le marchand",
      support: "Configuration accompagnée par l’équipe Parcel",
      intent: "Intentions, critères, freins et demande non couverte",
      shopify: `Application native · environ ${SHOPIFY_INSTALL_TIME_SHORT}`,
      price: `${parcelFree.priceLabel} pour démarrer · ${parcelEssential.priceLabel} pour ${parcelEssential.sessions} sessions`,
      billing: "Sessions où l’IA intervient ; recherche déterministe gratuite",
    },
  },
  {
    id: "doofinder",
    name: "Doofinder",
    category: "Search & Discovery",
    sourceUrl: "https://www.doofinder.com/fr/price",
    sourceUrls: ["https://www.doofinder.com/fr/price", "https://apps.shopify.com/doofinder"],
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Suite Search & Discovery enrichie d’un AI Assistant",
      search: "Cœur historique de l’offre",
      decision: "AI Assistant sur Pro, Advanced et Enterprise",
      interface: "Search UI, recommandations, quiz et assistant",
      rules: "Règles, merchandising et configuration plateforme",
      support: "Support et services selon l’offre",
      intent: "Analytics de recherche et AI Insights",
      shopify: "Application Shopify",
      price: "Search & Discovery dès 49 €/mois · AI Assistant sur demande",
      billing: "Plan Search & Discovery, options et offre retenue",
    },
  },
  {
    id: "iadvize",
    name: "iAdvize",
    category: "Plateforme conversationnelle",
    sourceUrl: "https://www.iadvize.com/fr/tarifs",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Assistant Shopping IA dans une plateforme conversationnelle",
      search: "Présente dans le parcours, sans être le cœur historique",
      decision: "Assistant Shopping IA et widgets conversationnels",
      interface: "Assistant, widgets d’engagement et Shopping Panel",
      rules: "AI Builder ; Essentials présenté en self-service",
      support: "Self-service sur Essentials ; offres supérieures disponibles",
      intent: "Shopper Insights et analyse des conversations",
      shopify: "Intégration Shopify",
      price: "290 €/mois en annuel ou 385 €/mois en mensuel",
      billing: "500 conversations/mois sur Essentials",
    },
  },
  {
    id: "algolia",
    name: "Algolia",
    category: "Search / Retrieval infrastructure",
    sourceUrl: "https://www.algolia.com/fr/pricing",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Plateforme Search, Retrieval et expériences IA",
      search: "Cœur de la plateforme",
      decision: "Capacités IA et Agent Studio selon l’offre",
      interface: "Composants et expériences à construire ou configurer",
      rules: "Règles, merchandising, API et configuration plateforme",
      support: "Dépend de l’offre et de l’organisation du projet",
      intent: "Analytics de recherche et de comportement",
      shopify: "Mise en œuvre dépendante de l’architecture",
      price: "Free : 10 000 recherches/mois ; Grow au volume",
      billing: "Requêtes et capacités consommées selon l’offre",
    },
  },
  {
    id: "rep-ai",
    name: "Rep AI",
    category: "AI sales agent / chat",
    sourceUrl: "https://apps.shopify.com/rep-ai-sales-associate",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Agent conversationnel vente et support",
      search: "Interaction principalement pilotée par l’agent",
      decision: "Agent proactif, recommandations et vente conversationnelle",
      interface: "Chat et expérience conversationnelle",
      rules: "AI Training et Sales Skills en self-service",
      support: "Configuration en self-service et support produit",
      intent: "Analytics de performance et de conversation",
      shopify: "Application Shopify",
      price: "Free limité · Starter à 104 $/mois",
      billing: "Jusqu’à 10 000 visiteurs et 1 000 produits sur Starter",
    },
  },
] as const

type HeadToHeadValue = { primary: string; secondary?: string }

export type HeadToHeadComparison = {
  id: CompetitorId
  name: string
  intro: string
  rows: readonly {
    label: string
    parcel: HeadToHeadValue
    competitor: HeadToHeadValue
  }[]
  note: string
  sourceUrl: string
}

export const headToHeadComparisons: readonly HeadToHeadComparison[] = [
  {
    id: "doofinder",
    name: "Doofinder",
    intro: "Parcel est construit autour du conseil et de l’aide à la décision. Doofinder est une suite Search & Discovery enrichie d’un AI Assistant.",
    rows: [
      { label: "Accès au vendeur IA", parcel: { primary: "Dès le plan Free" }, competitor: { primary: "Pro, Advanced et Enterprise" } },
      { label: "Prix du vendeur IA", parcel: { primary: "0 € pour démarrer", secondary: "79 €/mois · 500 sessions" }, competitor: { primary: "Communiqué sur demande" } },
      { label: "Recherche", parcel: { primary: "Déterministe gratuite + IA", secondary: "Selon le besoin" }, competitor: { primary: "Search & Discovery", secondary: "À partir de 49 €/mois" } },
      { label: "Configuration métier", parcel: { primary: "Construite avec l’équipe Parcel" }, competitor: { primary: "Règles et merchandising", secondary: "Configuration plateforme" } },
    ],
    note: "Doofinder est aujourd’hui beaucoup plus mature sur le Search & Discovery, avec recherche, recommandations, merchandising et quiz dans une suite éprouvée.",
    sourceUrl: "https://www.doofinder.com/fr/price",
  },
  {
    id: "iadvize",
    name: "iAdvize",
    intro: "Deux solutions d’assistance à l’achat, avec des modèles de déploiement et de prix très différents.",
    rows: [
      { label: "Prix d’entrée IA", parcel: { primary: "79 €/mois", secondary: "500 sessions Parcel" }, competitor: { primary: "290 €/mois*", secondary: "500 conversations · 385 €/mois en facturation mensuelle" } },
      { label: "Recherche e-commerce", parcel: { primary: "Recherche déterministe gratuite + vendeur IA" }, competitor: { primary: "Assistant Shopping IA", secondary: "Widgets conversationnels" } },
      { label: "Configuration métier", parcel: { primary: "Travail de configuration avec l’équipe Parcel" }, competitor: { primary: "Self-service sur Essentials" } },
      { label: "Expérience d’achat", parcel: { primary: "Recherche, questions, produits, comparatifs et panier" }, competitor: { primary: "Assistant, widgets d’engagement et Shopping Panel" } },
    ],
    note: "iAdvize dispose d’une plateforme conversationnelle plus ancienne et plus étendue, notamment pour les besoins enterprise et multicanaux.",
    sourceUrl: "https://www.iadvize.com/fr/tarifs",
  },
  {
    id: "algolia",
    name: "Algolia",
    intro: "Deux niveaux de produit différents : Parcel fournit l’expérience de vente ; Algolia fournit une plateforme pour construire et piloter des expériences de search, retrieval et IA.",
    rows: [
      { label: "Produit livré", parcel: { primary: "Expérience de vente e-commerce prête à intégrer" }, competitor: { primary: "Plateforme Search, Retrieval et Agent Studio" } },
      { label: "Mise en œuvre Shopify", parcel: { primary: "Application native", secondary: "Environ 2 min" }, competitor: { primary: "Dépend de l’architecture", secondary: "Et des composants retenus" } },
      { label: "Logique de vente", parcel: { primary: "Configurée avec le marchand" }, competitor: { primary: "Règles, merchandising et API", secondary: "Configuration plateforme" } },
      { label: "Équipe nécessaire", parcel: { primary: "Pensé pour une équipe e-commerce" }, competitor: { primary: "Liberté maximale", secondary: "Pour les équipes disposant de ressources techniques" } },
    ],
    note: "Algolia offre une profondeur technique, une flexibilité et une capacité de scale très supérieures pour les organisations qui souhaitent construire leur propre expérience.",
    sourceUrl: "https://www.algolia.com/fr/pricing",
  },
  {
    id: "rep-ai",
    name: "Rep AI",
    intro: "Parcel structure le conseil directement dans le parcours d’achat : recherche, produits, questions, comparaisons et actions.",
    rows: [
      { label: "Expérience principale", parcel: { primary: "Interface d’achat intégrée au parcours" }, competitor: { primary: "Agent conversationnel proactif" } },
      { label: "Recherche e-commerce", parcel: { primary: "Recherche déterministe + IA" }, competitor: { primary: "Interaction principalement pilotée par l’agent" } },
      { label: "Configuration métier", parcel: { primary: "Accompagnement direct de l’équipe Parcel" }, competitor: { primary: "AI Training et Sales Skills", secondary: "En self-service" } },
      { label: "Tarification publique", parcel: { primary: "79 €/mois", secondary: "500 sessions" }, competitor: { primary: "104 $/mois", secondary: "Jusqu’à 10 000 visiteurs" } },
    ],
    note: "Rep AI couvre plus largement le live chat et le support conversationnel.",
    sourceUrl: "https://apps.shopify.com/rep-ai-sales-associate",
  },
] as const

export const parcelDifferentiatorContext = [
  ["Doofinder", "AI Assistant en complément d’une suite Search & Discovery."],
  ["iAdvize", "Assistant au sein d’une plateforme conversationnelle."],
  ["Algolia", "Capacités agentiques au sein d’une plateforme Search & Retrieval."],
  ["Rep AI", "Agent conversationnel vente et support."],
] as const
