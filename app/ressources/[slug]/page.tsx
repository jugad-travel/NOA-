import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleContent } from "./ArticleContent"
import { StructuredData } from "@/components/marketing/StructuredData"
import { articles, getArticle } from "@/lib/articles"
import { SITE_URL } from "@/lib/marketing"

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
    openGraph: { type: "article", title: article.title, description: article.description, url: `/ressources/${article.slug}`, siteName: "Parcel" },
    twitter: { card: "summary_large_image", title: article.title, description: article.description },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-07-01",
    dateModified: "2026-09-10",
    mainEntityOfPage: `${SITE_URL}/ressources/${article.slug}`,
    author: { "@type": "Organization", name: "Parcel", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Parcel", url: SITE_URL },
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/ressources/${article.slug}` },
    ],
  }

  return <><StructuredData data={[articleJsonLd, breadcrumbJsonLd]} /><ArticleContent article={article} /></>
}
