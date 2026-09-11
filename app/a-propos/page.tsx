import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"
import { AProposContent } from "./AProposContent"

export const metadata: Metadata = {
  title: "Parcel : l’IA e-commerce conçue avec les marchands",
  description:
    "Découvrez l’équipe française Parcel et sa méthode pour transformer l’expertise métier des marchands en expérience d’achat IA.",
  alternates: { canonical: "/a-propos" },
  openGraph: { title: "Parcel : l’IA e-commerce conçue avec les marchands", description: "Une équipe française accessible, de l’installation Shopify à la configuration de votre logique de vente.", url: "/a-propos" },
  twitter: { card: "summary_large_image", title: "Parcel : l’IA e-commerce conçue avec les marchands", description: "Le raisonnement du vendeur comme point de départ de l’expérience d’achat IA." },
}

export default function AProposPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "À propos", item: `${SITE_URL}/a-propos` }] }
  return <><StructuredData data={breadcrumbs} /><AProposContent /></>
}
