import type { Metadata } from "next"
import { ProduitsContent } from "./ProduitsContent"

export const metadata: Metadata = {
  title: "La suite PARCEL - Produits",
  description:
    "PARCEL — Le conseiller de vente IA unique, présent tout au long du parcours client. PARCEL accompagne vos visiteurs, du premier besoin exprimé jusqu'à la décision d'achat. Découvrez PARCEL Projet, PARCEL Match, PARCEL Expert et PARCEL Complete.",
}

export default function ProduitsPage() {
  return <ProduitsContent />
}

