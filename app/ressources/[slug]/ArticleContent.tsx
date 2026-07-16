import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Article } from "@/lib/articles"

export function ArticleContent({ article }: { article: Article }) {
  return (
    <article className="bg-white pb-24 pt-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <Link href="/ressources" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
            <ArrowLeft className="size-4" /> Retour aux ressources
          </Link>

          <header className="mb-14 border-b border-gray-200 pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              <span className="text-sm text-gray-500">{article.readTime}</span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <h1 className="mb-7 text-4xl font-normal text-gray-900 md:text-6xl">{article.title}</h1>
            <p className="text-xl leading-relaxed text-gray-600 md:text-2xl">{article.intro}</p>
          </header>

          <div className="space-y-14">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-6 text-3xl font-normal text-gray-900 md:text-4xl">{section.title}</h2>
                <div className="space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-gray-700 md:text-lg">{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-7 space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 md:text-base">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="mb-5 text-2xl font-normal text-gray-900">Sources consultées</h2>
            <ul className="space-y-3">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline">
                    {source.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 rounded-3xl p-7 text-center md:p-12" style={{ background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 48%, #ff966b 100%)" }}>
            <h2 className="mb-5 text-3xl font-normal text-gray-900">Voir ces principes dans Parcel</h2>
            <Link href="/demo">
              <Button variant="secondary" size="lg">
                Réserver une démo
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </article>
  )
}
