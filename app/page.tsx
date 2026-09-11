import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { HOME_FAQS, SITE_URL } from "@/lib/marketing"
import { pricingData } from "@/lib/pricing"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: {
    absolute: "Assistant d’achat IA pour e-commerce | Parcel",
  },
  description:
    "Parcel transforme votre catalogue et vos règles métier en vendeur IA : recherche e-commerce, conseil produit, comparaison, panier et données d’intention.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Votre façon de vendre, à l’échelle | Parcel",
    description: "Le vendeur IA configuré selon votre façon de vendre, installé sur Shopify en environ 2 minutes.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre façon de vendre, à l’échelle | Parcel",
    description: "Recherche, conseil, comparaison et panier selon votre logique de vente.",
  },
}

export default function HomePage() {
  const publicPrices = pricingData.flatMap((plan) =>
    plan.monthlyPrice === null ? [] : [plan.monthlyPrice],
  )

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Parcel",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Shopify",
    url: SITE_URL,
    description: "Vendeur IA e-commerce configuré selon le catalogue et la logique métier du marchand.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: String(Math.min(...publicPrices)),
      highPrice: String(Math.max(...publicPrices)),
      priceCurrency: "EUR",
      offerCount: String(pricingData.length),
    },
  }

  return (
    <>
      <StructuredData data={[faqJsonLd, softwareJsonLd]} />
      <HomePageClient />
    </>
  )
}
