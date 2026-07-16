import type { Metadata } from "next"
import { RessourcesContent } from "./RessourcesContent"

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Guides sourcés sur l’assistance d’achat IA, la recherche conversationnelle et la mesure de la conversion assistée.",
  alternates: { canonical: "/ressources" },
}

export default function RessourcesPage() {
  return <RessourcesContent />
}
