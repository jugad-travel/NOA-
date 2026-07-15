// Central registry for demo videos + external links.

export const VIDEOS = {
  presentation: "ScZChdx7OS8",
  projet: "_TYdGFc_ih0",
  match: "_8HMCpAyvyI",
  comparaison: "VhyunT5vvp4",
  expert: "fKcTRwfk_XQ",
  sav: "zHbNOeDj4fU",
} as const

export type VideoKey = keyof typeof VIDEOS

// Shopify App Store listing — still under review. Set the URL here once the
// app is published: every CTA switches from the "coming soon" fallback
// automatically.
export const SHOPIFY_APP_STORE_URL: string | null = null

export const DEMO_CONTACT_URL =
  "mailto:vianney@parcel-ia.com?subject=Demande de démo PARCEL"
