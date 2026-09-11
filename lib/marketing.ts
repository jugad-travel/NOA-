export const SITE_URL = "https://parcel-ia.com"

export const SHOPIFY_INSTALL_TIME = "2 minutes"
export const SHOPIFY_INSTALL_TIME_SHORT = "2 min"
export const SHOPIFY_APP_STORE_URL = "https://apps.shopify.com/parcel"
export const MERCHANT_APP_URL = "https://app.parcel-ia.com"
export const DEMO_URL = "/demo"

export const CATALOG_ENRICHMENT_MESSAGE =
  "Lors de l’ingestion, Parcel enrichit automatiquement les données du catalogue et génère des paramètres adaptés à la boutique afin que les produits soient mieux compris par l’IA."

export const primaryNavigation = [
  {
    name: "Produit",
    href: "/produits",
    children: [
      { name: "Vue d’ensemble", href: "/produits" },
      { name: "Recherche & aide au choix", href: "/moteur-recherche-conversationnel-ecommerce" },
      { name: "Projet & panier complet", href: "/produits/besoin-global" },
      { name: "Questions produit", href: "/produits/questions-produit" },
      { name: "Comparaison", href: "/produits/comparaison" },
      { name: "Compléments au panier", href: "/produits/panier-complements" },
      { name: "Service après-vente", href: "/produits/service-apres-vente" },
    ],
  },
  { name: "Cas d’usage", href: "/produits" },
  { name: "Intégrations", href: "/integrations-tech" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Comparatif", href: "/comparatif-assistant-ia-ecommerce" },
  { name: "Ressources", href: "/ressources" },
  { name: "À propos", href: "/a-propos" },
] as const

export const footerNavigation = {
  produit: [
    { name: "Vue d’ensemble", href: "/produits" },
    { name: "Recherche IA e-commerce", href: "/moteur-recherche-conversationnel-ecommerce" },
    { name: "Comparaison produit", href: "/produits/comparaison" },
    { name: "Cross-sell", href: "/produits/panier-complements" },
    { name: "Tarifs", href: "/tarifs" },
  ],
  explorer: [
    { name: "Comparatif", href: "/comparatif-assistant-ia-ecommerce" },
    { name: "Intégrations", href: "/integrations-tech" },
    { name: "Ressources", href: "/ressources" },
    { name: "À propos", href: "/a-propos" },
    { name: "Démo", href: DEMO_URL },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
} as const

export const integrationStatusData = {
  available: [
    {
      name: "Shopify",
      detail: `Application native installable en environ ${SHOPIFY_INSTALL_TIME}`,
      image: "/images/Logo shopify .webp",
    },
    {
      name: "API back-end Parcel",
      detail: "Intégration à une architecture e-commerce existante",
      image: "/images/logo-parcel.png",
    },
  ],
  upcoming: [
    "Adobe Commerce / Magento",
    "WooCommerce",
    "PrestaShop",
    "Salesforce Commerce Cloud",
    "BigCommerce",
    "Autres CMS",
  ],
} as const

export const HOME_FAQS = [
  {
    question: "Que fait Parcel sur un site e-commerce ?",
    answer:
      "Parcel aide les visiteurs à chercher, qualifier leur besoin, comparer des produits, obtenir une recommandation et compléter leur panier. Le vendeur IA applique le catalogue, les critères et les règles définis avec le marchand.",
  },
  {
    question: "Une recherche simple consomme-t-elle une session IA ?",
    answer:
      "Non. Une recherche déterministe précise peut afficher directement ses résultats. Une session Parcel est utilisée lorsque l’IA intervient pour comprendre un besoin, poser des questions ou accompagner une décision.",
  },
  {
    question: "Combien de temps faut-il pour installer Parcel sur Shopify ?",
    answer:
      `Environ ${SHOPIFY_INSTALL_TIME} pour installer l’application native et connecter une boutique Shopify. L’équipe Parcel accompagne ensuite la configuration de la logique de vente.`,
  },
  {
    question: "Comment Parcel apprend-il notre façon de vendre ?",
    answer:
      "Nous identifions avec vos équipes les questions utiles, les critères de choix, les compatibilités, les exclusions et les priorités commerciales. Cette expertise structure ensuite les règles et comportements de Parcel.",
  },
  {
    question: "Quelles intégrations sont disponibles aujourd’hui ?",
    answer:
      "Parcel dispose d’une application Shopify native et d’une API back-end. Les connecteurs dédiés pour Adobe Commerce, WooCommerce, PrestaShop, Salesforce Commerce Cloud et BigCommerce sont en préparation.",
  },
  {
    question: "Quelles données Parcel fait-il émerger ?",
    answer:
      "Les interactions peuvent révéler les usages recherchés, les contraintes, les budgets, les critères de décision, les freins, les comparaisons demandées et les besoins auxquels le catalogue ne répond pas encore.",
  },
] as const
