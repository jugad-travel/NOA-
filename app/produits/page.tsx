import type { Metadata } from "next"
import { ProduitsContent } from "./ProduitsContent"

export const metadata: Metadata = {
  title: "Plateforme d’assistance d’achat IA",
  description:
    "Découvrez les usages de Parcel sur tout le funnel e-commerce : recherche, aide au choix, fiche produit, comparaison, panier, SAV et analytics.",
  alternates: { canonical: "/produits" },
}

export default function ProduitsPage() {
  return <ProduitsContent />
}
