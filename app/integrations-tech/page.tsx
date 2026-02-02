import type { Metadata } from "next"
import { IntegrationsContent } from "./IntegrationsContent"

export const metadata: Metadata = {
  title: "Intégrations & Tech",
  description:
    "PARCEL est une brique applicative indépendante, conçue pour s'intégrer à des environnements e-commerce existants. Compatible Shopify, Magento, WooCommerce, Salesforce et architectures Headless.",
}

export default function IntegrationsPage() {
  return <IntegrationsContent />
}

