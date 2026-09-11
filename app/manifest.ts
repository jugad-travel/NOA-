import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parcel — Vendeur IA e-commerce",
    short_name: "Parcel",
    description: "Recherche, conseil produit, comparaison et panier selon la logique de vente du marchand.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071630",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "any", type: "image/png" },
    ],
  }
}
