import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: {
    absolute: "Assistant d’achat IA pour e-commerce | Parcel",
  },
  description:
    "Assistant d’achat IA et moteur de recherche conversationnel pour e-commerce. Parcel comprend le besoin et recommande les bons produits.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
