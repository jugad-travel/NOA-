import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleContent } from "./ArticleContent"
import { articles, getArticle } from "@/lib/articles"

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/ressources/${article.slug}` },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  return <ArticleContent article={article} />
}
