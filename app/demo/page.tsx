import type { Metadata } from "next"
import { DemoContent } from "./DemoContent"

export const metadata: Metadata = {
  title: "Démo",
  description:
    "Landing page dédiée à la prise de rendez-vous. Réservez une démo personnalisée avec notre équipe pour découvrir PARCEL.",
}

export default function DemoPage() {
  return <DemoContent />
}

