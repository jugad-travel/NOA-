import type { Metadata } from "next"
import { ProduitsContent } from "./ProduitsContent"

export const metadata: Metadata = {
  title: "La suite NOA - Produits",
  description:
    "NOA — Le conseiller de vente IA unique, présent tout au long du parcours client. NOA accompagne vos visiteurs, du premier besoin exprimé jusqu'à la décision d'achat. Découvrez NOA Projet, NOA Match, NOA Expert et NOA Complete.",
}

export default function ProduitsPage() {
  return <ProduitsContent />
}

