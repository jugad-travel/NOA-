import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"
import { SITE_URL } from "@/lib/marketing"
import { NESTED_USE_CASES } from "@/lib/use-cases"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/produits`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/moteur-recherche-conversationnel-ecommerce`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/tarifs`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/integrations-tech`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ressources`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/ressources/simulateur-roi`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/demo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/cgu`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ]

  // Une page par usage : elles portent chacune leur intention de recherche.
  const useCaseRoutes: MetadataRoute.Sitemap = NESTED_USE_CASES.map((useCase) => ({
    url: `${baseUrl}${useCase.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/ressources/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...useCaseRoutes, ...articleRoutes]
}
