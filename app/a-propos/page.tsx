import type { Metadata } from "next"
import { AProposContent } from "./AProposContent"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'équipe PARCEL et notre mission de transformer l'expérience d'achat en ligne avec l'intelligence artificielle.",
}

export default function AProposPage() {
  return <AProposContent />
}


