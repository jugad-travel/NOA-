import type { Metadata } from "next"
import { IntegrationsContent } from "./IntegrationsContent"

export const metadata: Metadata = {
  title: "Intégrations & Tech",
  description:
    "Intégrez Parcel via l’application Shopify disponible ou l’API back-end CMS-agnostique. Découvrez les données, étapes et connecteurs en préparation.",
  alternates: { canonical: "/integrations-tech" },
}

export default function IntegrationsPage() {
  return <IntegrationsContent />
}
