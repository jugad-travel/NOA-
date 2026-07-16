import type { Metadata } from "next"
import { AProposContent } from "./AProposContent"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission et l’équipe Parcel : rendre le conseil produit aussi naturel en ligne qu’en magasin, de la recherche au panier.",
  alternates: { canonical: "/a-propos" },
}

export default function AProposPage() {
  return <AProposContent />
}

