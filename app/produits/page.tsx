import type { Metadata } from "next"
import { ProduitsContent } from "./ProduitsContent"

export const metadata: Metadata = {
  title: "La suite NOA - Produits",
  description:
    "NOA est une suite de conseillers de vente IA, conçus pour intervenir aux moments clés du parcours e-commerce. Découvrez NOA Projet, NOA Match, NOA Expert et NOA Complete.",
}

export default function ProduitsPage() {
  return <ProduitsContent />
}

