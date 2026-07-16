import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parcel-ia.com"
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/produits`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/moteur-recherche-conversationnel-ecommerce`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/integrations-tech`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ressources`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/ressources/simulateur-roi`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/demo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/cgu`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/ressources/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes]
}
