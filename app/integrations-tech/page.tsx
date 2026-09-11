import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"
import { IntegrationsContent } from "./IntegrationsContent"

export const metadata: Metadata = {
  title: "Intégration assistant IA Shopify & API e-commerce",
  description:
    "Installez Parcel sur Shopify en environ 2 minutes avec l’application native, ou connectez son API back-end à une autre architecture e-commerce.",
  alternates: { canonical: "/integrations-tech" },
  openGraph: { title: "Intégration assistant IA Shopify & API e-commerce | Parcel", description: "Application Shopify native, installation en environ 2 minutes et configuration métier accompagnée.", url: "/integrations-tech" },
  twitter: { card: "summary_large_image", title: "Intégration assistant IA Shopify & API e-commerce | Parcel", description: "Connectez Parcel à Shopify en environ 2 minutes." },
}

export default function IntegrationsPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Intégrations", item: `${SITE_URL}/integrations-tech` }] }
  return <><StructuredData data={breadcrumbs} /><IntegrationsContent /></>
}
