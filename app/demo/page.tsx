import type { Metadata } from "next"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"
import { DemoContent } from "./DemoContent"

export const metadata: Metadata = {
  title: "Démo",
  description:
    "Voyez Parcel en action en vidéo, puis réservez une démonstration personnalisée avec notre équipe.",
  alternates: { canonical: "/demo" },
  openGraph: { title: "Démonstration du vendeur IA Parcel", description: "Voyez Parcel sur un parcours e-commerce concret et réservez un échange avec l’équipe.", url: "/demo" },
  twitter: { card: "summary_large_image", title: "Démonstration du vendeur IA Parcel", description: "Découvrez Parcel en action sur un parcours d’achat." },
}

export default function DemoPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Démo", item: `${SITE_URL}/demo` }] }
  return <><StructuredData data={breadcrumbs} /><DemoContent /></>
}
