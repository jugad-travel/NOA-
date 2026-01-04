import type { Metadata } from "next"
import { RessourcesContent } from "./RessourcesContent"

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Blog (Conseils CRO), Études de cas, Centre d'aide. Découvrez les ressources NOA pour optimiser votre e-commerce.",
}

export default function RessourcesPage() {
  return <RessourcesContent />
}

