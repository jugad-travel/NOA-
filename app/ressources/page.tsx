import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"
import { RessourcesContent } from "./RessourcesContent"

export const metadata: Metadata = {
  title: "Guides IA & e-commerce : search, conversion, commerce",
  description:
    "Guides, comparatifs et analyses sur la recherche e-commerce, le guided selling, les données d’intention, Shopify et le commerce agentique.",
  alternates: { canonical: "/ressources" },
  openGraph: { title: "Guides IA & e-commerce | Parcel", description: "Search, assistance à l’achat, intent data, conversion et commerce agentique expliqués concrètement.", url: "/ressources" },
  twitter: { card: "summary_large_image", title: "Guides IA & e-commerce | Parcel", description: "Des analyses concrètes sur la recherche et l’assistance à l’achat." },
}

export default function RessourcesPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` }] }
  return <><StructuredData data={breadcrumbs} /><RessourcesContent /></>
}
