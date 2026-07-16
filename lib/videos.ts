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

// Official Shopify App Store listing.
export const SHOPIFY_APP_STORE_URL = "https://apps.shopify.com/parcel"

export const DEMO_CONTACT_URL = "/demo"
