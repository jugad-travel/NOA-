import type { Metadata } from "next"
import { DemoContent } from "./DemoContent"

export const metadata: Metadata = {
  title: "Démo",
  description:
    "Voyez Parcel en action en vidéo, puis réservez une démonstration personnalisée avec notre équipe.",
  alternates: { canonical: "/demo" },
}

export default function DemoPage() {
  return <DemoContent />
}
