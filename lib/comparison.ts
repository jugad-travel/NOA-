import { SHOPIFY_INSTALL_TIME_SHORT } from "@/lib/marketing"
import { pricingData } from "@/lib/pricing"

export const comparisonLastVerifiedAt = "2026-09-11"
export const comparisonVerifiedLabel = "11 septembre 2026"

const parcelFree = pricingData.find((plan) => plan.id === "free")!
const parcelEssential = pricingData.find((plan) => plan.id === "essential")!

export type ComparisonProductId = "parcel" | "doofinder" | "iadvize" | "algolia" | "rep-ai"
export type CompetitorId = Exclude<ComparisonProductId, "parcel">

export type ComparisonProduct = {
  id: ComparisonProductId
  name: string
  category: string
  lastVerifiedAt: string
  data: Record<string, string>
}

export const comparisonProofs = [
  { value: "6", label: "Points de contact unifiés" },
  { value: "2 min", label: "Installation Shopify" },
  { value: "0 €", label: "Recherche déterministe" },
  { value: "Avec vous", label: "Configuration métier" },
] as const

export const comparisonRows = [
  { id: "positioning", label: "Architecture produit" },
  { id: "search", label: "Search & guided selling" },
  { id: "funnel", label: "Funnel, cross-sell & SAV" },
  { id: "rules", label: "Règles métier & merchandising" },
  { id: "interface", label: "UX & widgets" },
  { id: "ingestion", label: "Ingestion & mise en ligne" },
  { id: "support", label: "Accompagnement & pilotage" },
  { id: "intent", label: "Intent data & analytics" },
  { id: "price", label: "Prix public" },
  { id: "billing", label: "Unité facturée" },
] as const

export const competitorComparisonData: readonly ComparisonProduct[] = [
  {
    id: "parcel",
    name: "Parcel",
    category: "AI sales engine / guided commerce",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "AI sales engine unifié, configuré selon la logique de vente du marchand",
      search: "Recherche déterministe + guided selling IA, qualification, comparaison et recommandation expliquée",
      funnel: "Même contexte de la recherche au PDP, au panier complet, au checkout et au SAV",
      rules: "Policy engine 100 % paramétrable : contraintes, compatibilités, exclusions, priorités, boosts et critères par catégorie",
      interface: "Widgets contextuels sur six points de contact ; cartes produit, questions, comparatifs et paniers dans une même interface",
      ingestion: `Application Shopify native en environ ${SHOPIFY_INSTALL_TIME_SHORT} ; enrichissement IA et génération de profils catalogue ; API back-end`,
      support: "Configuration métier co-construite avec l’équipe Parcel dès le démarrage",
      intent: "Intentions, critères, freins, comparaisons, budgets et demandes non couvertes",
      price: `${parcelFree.priceLabel} avec ${parcelFree.sessions} sessions · ${parcelEssential.priceLabel} avec ${parcelEssential.sessions} sessions`,
      billing: "Sessions où l’IA conseille ; recherche déterministe gratuite",
    },
  },
  {
    id: "doofinder",
    name: "Doofinder",
    category: "AI Search & Discovery",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Suite AI Search & Discovery : Search, Recommendations, Quiz Maker, Category Merchandising et AI Assistant",
      search: "AI Search au cœur de l’offre ; guided search, NLP, recherche visuelle et AI Assistant pour les demandes de conseil",
      funnel: "Découverte, recommandations par étape, PDP, comparaison et add-to-cart ; forte couverture avant achat",
      rules: "Searchandising, boosts, exclusions, IFTTT filters, règles de recommandation et system prompt de l’assistant",
      interface: "Search layer, carrousels, quiz, pages catégorie, chat bubble, side panel et point d’entrée PDP",
      ingestion: "Application Shopify, indexation automatique puis activation du script ; AI synonyms et visual tagging",
      support: "Admin self-service ; support et services selon le plan ; suivi Search et AI Insights",
      intent: "Search analytics, AI Insights, logs de conversation et conversions assistées",
      price: "Basic 49 €/mois ou 44 € en annuel · AI Assistant sur Pro, Advanced et Enterprise, tarif sur demande",
      billing: "Requêtes par produit ; jusqu’à 150 000 requêtes pour Search, Recommendations et Quiz sur Pro",
    },
  },
  {
    id: "iadvize",
    name: "iAdvize",
    category: "AI Shopping Assistant / conversational commerce",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "AI Shopping Assistant avec Engagement Widgets, Shopping Panel et plateforme conversationnelle",
      search: "Advanced Search & Knowledge Engine hybride vector + keyword, avec agentic reasoning",
      funnel: "Découverte, PDP, add-to-cart, cross-sell, checkout, order tracking et questions de politique marchand",
      rules: "AI Builder, base de connaissances, tonalité, paramètres de marque et configuration de l’assistant",
      interface: "Conversation Starters, Smart Banners et Shopping Panel ancré ; chatbox dédiée dans le checkout Shopify",
      ingestion: "Intégrations Shopify et PrestaShop, tag unique, synchronisation du catalogue et API",
      support: "Essentials et Starter en self-service ; onboarding accompagné et support multicanal sur Growth",
      intent: "Shopper Insights, analyse conversationnelle et plus de 20 dashboards annoncés",
      price: "Essentials 385 €/mois ou 290 €/mois en annuel pour 500 conversations et 1 000 SKU",
      billing: "Conversations IA + taille du catalogue en SKU",
    },
  },
  {
    id: "algolia",
    name: "Algolia",
    category: "AI Search & Retrieval platform",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Plateforme AI Search & Retrieval avec NeuralSearch, Recommend, Merchandising Studio et Agent Studio",
      search: "Search hybride keyword + vector, ranking, personalization et templates agentiques de guided discovery",
      funnel: "PDP Q&A, guided selling, fitment, comparaison et réponses shipping/returns ; workflows transactionnels à intégrer",
      rules: "Business Rules, relevance, merchandising, guardrails, prompts, cost controls et API",
      interface: "Widgets Shopify Autocomplete/InstantSearch ; bibliothèques UI, SDK et templates Agent Studio pour le sur-mesure",
      ingestion: "Application Shopify : indexation produits, variantes, collections et contenus, puis configuration et publication du thème",
      support: "Dashboard et documentation en self-service ; Support & Success et partenaires d’implémentation selon l’offre",
      intent: "Insights API, Search analytics, conversion events, query categorization et Merchandising analytics",
      price: "Search Free avec 10 000 recherches/mois · Grow : 10 000 incluses puis 0,60 $ / 1 000 requêtes",
      billing: "Requêtes et fonctionnalités ; les appels Agent Studio comptent dans l’usage Search et ajoutent le coût du LLM choisi",
    },
  },
  {
    id: "rep-ai",
    name: "Rep AI",
    category: "AI sales agent / support chat",
    lastVerifiedAt: comparisonLastVerifiedAt,
    data: {
      positioning: "Agent conversationnel proactif pour la vente, le support et le live chat sur Shopify",
      search: "Behavioral AI, product finder et recommandations pilotées par la conversation ; pas de moteur Search dédié annoncé",
      funnel: "Guidage vers le checkout, cart recovery, cross-sell, upsell, suivi de commande, retours et relais humain",
      rules: "AI Training, AI Sales Skills, brand voice, politiques, chat flows et messages de bienvenue",
      interface: "Chat window, pop-ups et surfaces d’upsell sur le panier, le PDP et la thank-you page",
      ingestion: "Application Shopify en ligne en quelques minutes ; apprentissage automatique du catalogue, des politiques et de la marque",
      support: "Onboarding self-service sur Free ; support e-mail ou chat selon le plan ; live-chat handoff",
      intent: "Conversation, recommendation et funnel analytics, A/B testing et signaux comportementaux",
      price: "Free : 100 visiteurs et 100 produits · Starter : 104 $/mois pour 10 000 visiteurs et 1 000 produits",
      billing: "Visiteurs mensuels + plafond produits ; 12 $ par tranche de 1 000 visiteurs supplémentaires",
    },
  },
] as const

type HeadToHeadValue = { primary: string; secondary?: string }

const headToHeadCriteria = [
  { id: "journey", label: "Périmètre du parcours" },
  { id: "search", label: "Search & guided selling" },
  { id: "transaction", label: "Cross-sell, checkout & SAV" },
  { id: "rules", label: "Règles métier & merchandising" },
  { id: "ux", label: "UX & widgets" },
  { id: "ingestion", label: "Ingestion & mise en ligne" },
  { id: "enablement", label: "Accompagnement & pilotage" },
  { id: "pricing", label: "Prix & unité facturée" },
] as const

type HeadToHeadCriterionId = (typeof headToHeadCriteria)[number]["id"]

const parcelHeadToHeadData: Record<HeadToHeadCriterionId, HeadToHeadValue> = {
  journey: {
    primary: "AI sales engine unifié sur six points de contact",
    secondary: "Search, découverte, PDP Expert, comparaison, panier et SAV conservent le même contexte jusqu’au checkout.",
  },
  search: {
    primary: "Hybrid Search + guided selling IA",
    secondary: "Recherche déterministe pour les requêtes simples ; qualification, recommandation et comparaison pour les besoins complexes.",
  },
  transaction: {
    primary: "Cross-sell contextuel et paniers complets",
    secondary: "Sélection multi-produit, add-to-cart, compléments expliqués, accompagnement jusqu’au checkout et réponses SAV.",
  },
  rules: {
    primary: "Policy engine 100 % paramétrable selon la logique du marchand",
    secondary: "Critères par catégorie, compatibilités, exclusions, priorités, pin/boost/bury et règles commerciales.",
  },
  ux: {
    primary: "Une même interface, plusieurs widgets natifs",
    secondary: "Entrées contextuelles sur home, catégories, recherche, PDP, panier et support ; cartes, questions, comparatifs et paniers structurés.",
  },
  ingestion: {
    primary: `Shopify natif en environ ${SHOPIFY_INSTALL_TIME_SHORT}`,
    secondary: "L’ingestion IA enrichit le catalogue et génère les profils, attributs attendus et paramètres utiles à chaque catégorie. API back-end disponible.",
  },
  enablement: {
    primary: "Configuration métier accompagnée dès le démarrage",
    secondary: "L’équipe Parcel traduit l’expertise produit en logique de vente et restitue les intentions, freins et demandes non couvertes.",
  },
  pricing: {
    primary: "Free à 0 € · Essential à 79 € HT/mois",
    secondary: "100 puis 500 sessions assistées ; recherche déterministe gratuite et facturation uniquement quand l’IA conseille.",
  },
}

function buildHeadToHeadRows(
  competitorData: Record<HeadToHeadCriterionId, HeadToHeadValue>,
) {
  return headToHeadCriteria.map((criterion) => ({
    id: criterion.id,
    label: criterion.label,
    parcel: parcelHeadToHeadData[criterion.id],
    competitor: competitorData[criterion.id],
  }))
}

export type HeadToHeadComparison = {
  id: CompetitorId
  name: string
  intro: string
  rows: ReturnType<typeof buildHeadToHeadRows>
  note: string
}

export const headToHeadComparisons: readonly HeadToHeadComparison[] = [
  {
    id: "doofinder",
    name: "Doofinder",
    intro: "Même marché e-commerce, deux architectures : Parcel orchestre une logique de vente continue ; Doofinder réunit plusieurs briques Search & Discovery dans une suite très mature.",
    rows: buildHeadToHeadRows({
      journey: { primary: "Suite AI Search & Discovery tout-en-un", secondary: "AI Search, Recommendations, Quiz Maker, Category Merchandising, AI Assistant et Insights." },
      search: { primary: "AI Search au cœur du produit", secondary: "NLP, guided search, recherche visuelle, personalization et assistant conversationnel sur les plans éligibles." },
      transaction: { primary: "Recommandations et add-to-cart avant achat", secondary: "Logiques de recommandation par étape, frequently bought together et assistant PDP ; le checkout reste celui de la boutique." },
      rules: { primary: "Searchandising et règles de recommandation", secondary: "Boosts, exclusions, filtres IFTTT, custom results, system prompt et base de connaissances." },
      ux: { primary: "Un ensemble riche de surfaces spécialisées", secondary: "Search layer, carrousels, quiz, pages catégorie, chat bubble, side panel et bannière PDP." },
      ingestion: { primary: "Shopify app + indexation automatique", secondary: "Activation du script dans le thème, synchronisation du feed, AI synonyms et visual tagging." },
      enablement: { primary: "Admin self-service et support selon le plan", secondary: "Search analytics, AI Insights, logs de conversation et reporting des ventes assistées." },
      pricing: { primary: "Basic 49 €/mois · AI Assistant sur devis", secondary: "44 €/mois en annuel pour Basic ; AI Assistant réservé aux plans Pro, Advanced et Enterprise. Facturation par requêtes produit." },
    }),
    note: "Doofinder garde un net avantage de profondeur sur le Search & Discovery et le merchandising. Parcel prend l’avantage pour un marchand qui veut une logique de vente co-configurée, un contexte continu jusqu’au panier/SAV et un prix public du vendeur IA dès 79 €.",
  },
  {
    id: "iadvize",
    name: "iAdvize",
    intro: "Deux AI Shopping Assistants orientés conversion. Parcel privilégie l’orchestration métier et une interface d’achat continue ; iAdvize s’appuie sur une plateforme conversationnelle éprouvée.",
    rows: buildHeadToHeadRows({
      journey: { primary: "AI Shopping Assistant sur les grands moments du funnel", secondary: "Homepage, PLP, PDP et checkout, avec Engagement Widgets, Shopping Panel et plateforme conversationnelle." },
      search: { primary: "Advanced Search & Knowledge Engine", secondary: "Recherche hybride vector + keyword, product discovery, agentic reasoning et réponses ancrées dans les connaissances." },
      transaction: { primary: "Add-to-cart, cross-sell et support conversationnel", secondary: "Quick replies, guidance jusqu’au checkout, order tracking et politiques ; chatbox dédiée au checkout Shopify." },
      rules: { primary: "AI Builder et configuration de marque", secondary: "Tonalité, base de connaissances, paramètres de l’assistant et guardrails ; Essentials et Starter en self-service." },
      ux: { primary: "Engagement Widgets + Shopping Panel", secondary: "Conversation Starters, Smart Banners et panel ancré pleine hauteur ; Shopping Panel indisponible dans le checkout." },
      ingestion: { primary: "Connecteurs natifs et déploiement rapide", secondary: "Shopify, PrestaShop, tag unique, synchronisation catalogue et API ; mise en ligne annoncée en quelques heures." },
      enablement: { primary: "Self-service jusqu’à Starter", secondary: "Onboarding accompagné à partir de Growth ; Shopper Insights et plus de 20 dashboards annoncés." },
      pricing: { primary: "Essentials 385 €/mois ou 290 € en annuel", secondary: "500 conversations/mois et 1 000 SKU ; tarification fondée sur les conversations et la taille catalogue." },
    }),
    note: "iAdvize dispose d’une profondeur enterprise, conversationnelle et analytique supérieure. Parcel se distingue par son tarif d’entrée, l’accompagnement métier dès le premier plan, le moteur de règles marchand et les artefacts d’achat structurés dans un même runtime.",
  },
  {
    id: "algolia",
    name: "Algolia",
    intro: "Parcel livre un vendeur IA prêt à configurer avec une équipe e-commerce. Algolia fournit une plateforme Search & Retrieval très profonde pour construire des expériences sur mesure.",
    rows: buildHeadToHeadRows({
      journey: { primary: "Plateforme Search, Retrieval, Recommend et Agent Studio", secondary: "Les équipes assemblent les capacités et les expériences adaptées à leur architecture." },
      search: { primary: "NeuralSearch et infrastructure de retrieval avancée", secondary: "Keyword + vector, AI Ranking, personalization, guided discovery et product comparison via Agent Studio." },
      transaction: { primary: "Workflows agentiques à composer", secondary: "PDP Q&A, shipping/returns et fitment sont couverts ; add-to-cart et checkout dépendent de l’intégration retenue." },
      rules: { primary: "Contrôle technique et merchandising très profond", secondary: "Business Rules, relevance, Merchandising Studio, guardrails, prompts, cost controls et API." },
      ux: { primary: "Widgets Search + SDK et bibliothèques UI", secondary: "Autocomplete et InstantSearch en un clic sur Shopify ; Agent Studio et code custom pour les autres expériences." },
      ingestion: { primary: "Indexation Shopify structurée", secondary: "Produits, variantes, collections et contenus ; configuration d’un thème dupliqué puis publication après recette." },
      enablement: { primary: "Self-service, partenaires et Success selon l’offre", secondary: "Dashboard, documentation, Insights API, Search analytics et événements de conversion." },
      pricing: { primary: "Search Free puis facturation à la requête", secondary: "10 000 recherches/mois incluses ; Grow à 0,60 $ / 1 000 requêtes supplémentaires. Agent Studio ajoute usage Search et coût LLM." },
    }),
    note: "Algolia est plus puissant pour les organisations qui recherchent une infrastructure de Search à très grande échelle et disposent de ressources techniques. Parcel réduit le time-to-value et le coût d’implémentation d’un vendeur IA complet, avec une configuration métier opérée aux côtés du marchand.",
  },
  {
    id: "rep-ai",
    name: "Rep AI",
    intro: "Deux approches Shopify orientées vente : Parcel structure le parcours dans plusieurs widgets contextuels ; Rep AI concentre vente, support et live chat dans un agent conversationnel proactif.",
    rows: buildHeadToHeadRows({
      journey: { primary: "AI sales agent proactif + support + live chat", secondary: "L’agent repère l’hésitation, ouvre la conversation et conserve le relais humain dans la même expérience." },
      search: { primary: "Product discovery pilotée par l’agent", secondary: "Behavioral AI, product finder et recommandations ; aucun moteur de Search autonome n’est présenté dans l’offre publique." },
      transaction: { primary: "Guidage checkout, cart recovery et SAV", secondary: "Cross-sell, upsell, recommandations, suivi de commande, retours, annulations et live-chat handoff." },
      rules: { primary: "AI Training et AI Sales Skills", secondary: "Brand voice, catalogue, politiques, chat flows, messages de bienvenue et configuration self-service." },
      ux: { primary: "Chat et surfaces d’upsell Shopify", secondary: "Chat window, pop-ups, cart upsell, PDP upsell et thank-you page upsell." },
      ingestion: { primary: "Shopify live en quelques minutes", secondary: "Apprentissage automatique du catalogue, des politiques et de la voix de marque, avec plafonds produits selon le plan." },
      enablement: { primary: "Self-service et support par niveau d’offre", secondary: "Chat sur Free, e-mail sur Starter, chat sur les plans supérieurs ; analytics funnel et recommandations." },
      pricing: { primary: "Free limité · Starter à 104 $/mois", secondary: "10 000 visiteurs et 1 000 produits sur Starter, puis 12 $ / 1 000 visiteurs supplémentaires." },
    }),
    note: "Rep AI couvre plus largement le support, le live chat et la récupération de panier. Parcel prend l’avantage sur la continuité Search–PDP–comparaison–panier, la finesse des règles de vente et la facturation limitée aux sessions réellement assistées.",
  },
] as const

export const parcelDifferentiatorContext = [
  ["Doofinder", "Suite AI Search & Discovery : Search, Recommendations, Quiz, Category Merchandising et AI Assistant."],
  ["iAdvize", "AI Shopping Assistant porté par Engagement Widgets, Shopping Panel et une plateforme conversationnelle."],
  ["Algolia", "Infrastructure AI Search & Retrieval avec Agent Studio, SDK et composants à assembler."],
  ["Rep AI", "AI sales agent proactif réunissant vente, support et live chat sur Shopify."],
] as const
