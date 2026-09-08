// Registre central des vidéos de démonstration + liens externes.

export const VIDEOS = {
  /** Présentation générale de Parcel. */
  presentation: "CLocr4k7R-Q",
  /** Trouver le bon produit : recherche classique + IA. */
  match: "6NBEBsJ5CrE",
  /** Un expert produit directement sur la fiche produit. */
  expert: "dWavhzFkEzw",
  /** Comparer deux produits selon son besoin. */
  comparaison: "DHtCsrPihBI",
  /** Construire un équipement complet pour le GR20. */
  projet: "W0s64SkK1S8",
  /**
   * Compléter intelligemment un achat.
   * Cette clé manquait : la section « panier » de /produits rejouait la vidéo
   * `projet`, si bien que deux usages distincts montraient la même chose.
   */
  panier: "r9-abpboACQ",
  /** Répondre aux questions SAV directement sur le site. */
  sav: "f0IKj4HHyvo",
} as const

export type VideoKey = keyof typeof VIDEOS

// Fiche officielle sur le Shopify App Store.
export const SHOPIFY_APP_STORE_URL = "https://apps.shopify.com/parcel"

export const DEMO_CONTACT_URL = "/demo"
