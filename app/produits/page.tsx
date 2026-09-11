import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"
import { ProduitsContent } from "./ProduitsContent"

export const metadata: Metadata = {
  title: "Assistant IA e-commerce : recherche, conseil & vente",
  description:
    "Recherche, aide au choix, fiche produit, comparaison, panier et SAV : découvrez l’IA de vente Parcel sur chaque moment de décision.",
  alternates: { canonical: "/produits" },
  openGraph: {
    title: "Assistant IA e-commerce : recherche, conseil & vente | Parcel",
    description: "Une même logique de vente de la recherche au panier, configurée selon votre catalogue et vos règles métier.",
    url: "/produits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistant IA e-commerce : recherche, conseil & vente | Parcel",
    description: "Recherche, conseil, comparaison, panier et SAV avec la même compréhension du besoin.",
  },
}

export default function ProduitsPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Produits", item: `${SITE_URL}/produits` },
    ],
  }

  return <><StructuredData data={breadcrumbs} /><ProduitsContent /></>
}
