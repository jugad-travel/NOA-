import { SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

export type PricingPlan = {
  id: "free" | "essential" | "growth" | "pro" | "enterprise"
  name: string
  monthlyPrice: number | null
  priceLabel: string
  sessions: number | null
  sessionsLabel: string
  overage: number | null
  overageLabel: string
  facialSessionPrice: number | null
  highlighted?: boolean
  ctaLabel: string
  ctaHref: string
  features: readonly string[]
}

const sharedFeatures = [
  "Recherche déterministe incluse",
  "Vendeur IA appliqué au catalogue",
  "Application Shopify native ou API back-end",
  "Configuration métier accompagnée",
] as const

export const pricingData: readonly PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    priceLabel: "0 €",
    sessions: 100,
    sessionsLabel: "100 sessions Parcel / mois",
    overage: null,
    overageLabel: "Aucun dépassement facturé",
    facialSessionPrice: 0,
    ctaLabel: "Installer sur Shopify",
    ctaHref: SHOPIFY_APP_STORE_URL,
    features: sharedFeatures,
  },
  {
    id: "essential",
    name: "Essential",
    monthlyPrice: 79,
    priceLabel: "79 € HT / mois",
    sessions: 500,
    sessionsLabel: "500 sessions Parcel / mois",
    overage: 0.25,
    overageLabel: "0,25 € / session supplémentaire",
    facialSessionPrice: 0.158,
    ctaLabel: "Choisir Essential",
    ctaHref: "/demo?plan=essential",
    features: sharedFeatures,
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 199,
    priceLabel: "199 € HT / mois",
    sessions: 1500,
    sessionsLabel: "1 500 sessions Parcel / mois",
    overage: 0.18,
    overageLabel: "0,18 € / session supplémentaire",
    facialSessionPrice: 0.133,
    highlighted: true,
    ctaLabel: "Choisir Growth",
    ctaHref: "/demo?plan=growth",
    features: sharedFeatures,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 499,
    priceLabel: "499 € HT / mois",
    sessions: 4000,
    sessionsLabel: "4 000 sessions Parcel / mois",
    overage: 0.12,
    overageLabel: "0,12 € / session supplémentaire",
    facialSessionPrice: 0.125,
    ctaLabel: "Choisir Pro",
    ctaHref: "/demo?plan=pro",
    features: sharedFeatures,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    priceLabel: "Sur devis",
    sessions: null,
    sessionsLabel: "Sessions sur mesure",
    overage: null,
    overageLabel: "Dépassement contractuel",
    facialSessionPrice: null,
    ctaLabel: "Nous contacter",
    ctaHref: "/demo?plan=enterprise",
    features: [
      "Volume adapté à votre activité",
      "Prix par session négocié",
      "Application Shopify ou API",
      "Déploiement accompagné",
    ],
  },
] as const

export const pricingFaq = [
  {
    question: "Qu’est-ce qu’une session Parcel assistée ?",
    answer:
      "Une session assistée correspond à un parcours où l’IA intervient pour comprendre un besoin, poser des questions ou accompagner une décision. Le périmètre précis de comptage est présenté avant l’activation de l’offre.",
  },
  {
    question: "Une recherche simple consomme-t-elle une session ?",
    answer:
      "Non. Une recherche déterministe précise affiche les résultats utiles sans consommer de session Parcel assistée par IA.",
  },
  {
    question: "Que se passe-t-il lorsque mon forfait est dépassé ?",
    answer:
      "Le forfait Free ne facture aucun dépassement. Essential, Growth et Pro appliquent le prix par session supplémentaire affiché sur cette page. Enterprise suit les conditions prévues au contrat.",
  },
  {
    question: "Puis-je commencer gratuitement ?",
    answer: "Oui. L’offre Free inclut 100 sessions Parcel par mois et aucun dépassement facturé.",
  },
  {
    question: "Puis-je changer de forfait ?",
    answer:
      "L’équipe Parcel vous aide à choisir le forfait cohérent avec votre volume. Les modalités de changement sont confirmées avec vous avant toute évolution de facturation.",
  },
  {
    question: "Combien de produits puis-je synchroniser ?",
    answer:
      "Cette page n’affiche pas de limite catalogue, car elle dépend du périmètre technique retenu. Elle est vérifiée avec votre équipe avant l’activation.",
  },
  {
    question: "Quels modules sont inclus ?",
    answer:
      "Le périmètre fonctionnel est confirmé selon les moments du parcours que vous souhaitez équiper : recherche, aide au choix, fiche produit, comparaison, panier ou après-vente.",
  },
  {
    question: "Existe-t-il une offre Enterprise ?",
    answer:
      "Oui. Elle prévoit un volume sur mesure, un prix par session négocié et des conditions de dépassement contractuelles.",
  },
  {
    question: "Combien de temps faut-il pour installer Parcel sur Shopify ?",
    answer: `Environ ${SHOPIFY_INSTALL_TIME} pour installer Parcel sur une boutique Shopify. La configuration de votre logique de vente est ensuite construite avec l’équipe Parcel.`,
  },
] as const

const freePlan = pricingData.find((plan) => plan.id === "free")!

export const pricingProofPoints = [
  { value: SHOPIFY_INSTALL_TIME, label: "Installation Shopify" },
  { value: freePlan.priceLabel, label: "Recherche déterministe" },
  { value: String(freePlan.sessions), label: "Sessions IA offertes" },
  { value: "Native", label: "Application Shopify" },
  { value: "Avec vous", label: "Configuration métier" },
  { value: "France", label: "Équipe produit" },
] as const
