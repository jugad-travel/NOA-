import type { Metadata } from "next"
import { ArticleContent } from "./ArticleContent"

export const metadata: Metadata = {
  title: "Quand le commerce devient intelligent",
  description:
    "Une analyse approfondie de la transformation du e-commerce par l'IA, entre assistance, analyse et personnalisation.",
}

export default function ArticlePage() {
  return <ArticleContent />
}


