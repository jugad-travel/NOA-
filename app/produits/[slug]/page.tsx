import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"
import { NESTED_USE_CASES, USE_CASES, getUseCase } from "@/lib/use-cases"

/**
 * Une page par usage Parcel.
 *
 * Ces six sujets vivaient comme des ancres d'une page unique : une seule URL
 * indexable pour six intentions de recherche distinctes. Chacun a désormais sa
 * page, son mot-clé, sa démonstration et ses questions — et `/produits`
 * redevient le hub qui les distribue.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return NESTED_USE_CASES.map((useCase) => ({ slug: useCase.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCase(slug)
  if (!useCase) return {}

  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    alternates: { canonical: useCase.path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: useCase.path,
      siteName: "PARCEL",
      title: `${useCase.metaTitle} | PARCEL`,
      description: useCase.metaDescription,
      images: [{ url: "/images/Hero site parcel sans texte.png", width: 1200, height: 630, alt: `${useCase.navLabel} dans Parcel` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${useCase.metaTitle} | Parcel`,
      description: useCase.metaDescription,
    },
  }
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const useCase = getUseCase(slug)
  if (!useCase) notFound()

  const siblings = USE_CASES.filter((u) => u.slug !== useCase.slug)
  const site = "https://parcel-ia.com"

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: useCase.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: site },
        { "@type": "ListItem", position: 2, name: "Produits", item: `${site}/produits` },
        { "@type": "ListItem", position: 3, name: useCase.navLabel, item: `${site}${useCase.path}` },
      ],
    },
  ]

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <PageHero
        eyebrow={`${useCase.step} · ${useCase.capability}`}
        title={useCase.title}
        description={useCase.intro}
        breadcrumbs={[{ name: "Accueil", href: "/" }, { name: "Produits", href: "/produits" }, { name: useCase.navLabel }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/demo" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 shadow-sm hover:bg-white/85">Réserver une démo <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/produits" className="inline-flex h-12 items-center justify-center rounded-full border border-white/80 bg-white/35 px-7 text-sm font-semibold text-gray-950 hover:bg-white/60">Tous les usages</Link>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm font-semibold text-gray-800 sm:flex-row sm:items-center sm:gap-6">
          <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gray-950">Shopify · {SHOPIFY_INSTALL_TIME}<ArrowUpRight className="size-4" /></a>
          <Link href="/integrations-tech" className="hover:text-gray-950">Autres stacks · API back-end</Link>
        </div>
      </PageHero>

      {/* La démonstration d'abord : sur ce sujet, montrer vaut mieux que décrire. */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <YouTubeEmbed videoId={useCase.videoId} title={useCase.videoTitle} rounded="rounded-[2rem]" />
            <p className="mt-4 text-center text-sm text-gray-500">{useCase.videoTitle}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="container">
          <h2 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-4xl">
            Ce que ça change
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {useCase.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-gray-200 bg-white p-7 md:p-8">
                <h3 className="text-xl font-semibold text-gray-950">{benefit.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-4xl">
              Comment ça se passe
            </h2>
            <ol className="space-y-8">
              {useCase.steps.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-950">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-4xl">
              Questions fréquentes
            </h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {useCase.faq.map((item) => (
                <article key={item.question} className="py-7">
                  <h3 className="text-lg font-semibold text-gray-950">{item.question}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maillage entre usages : chaque page renvoie vers les six autres. */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-4xl">
            Les autres usages Parcel
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {siblings.map((item) => (
              <Link
                key={item.slug}
                href={item.path}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  {item.step}
                </span>
                <span className="mb-3 text-lg font-normal text-gray-950">{item.navLabel}</span>
                <span className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.metaDescription}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 group-hover:gap-3">
                  Voir <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 md:py-24">
        <div className="container"><div className="rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b8c8ff] to-[#ffb99b] px-6 py-14 text-center md:px-12 md:py-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-5xl">
            Voir Parcel sur votre propre catalogue
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700">
            Une démonstration sur vos produits, vos règles et vos contraintes.
          </p>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-800">
            {["Sur votre catalogue", "Vos règles commerciales", "Sans engagement"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <Link
            href="/demo"
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 shadow-sm transition-colors hover:bg-white/85"
          >
            Réserver une démo <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={SHOPIFY_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/35 px-7 text-sm font-semibold text-gray-950 transition-colors hover:bg-white/60 sm:ml-3 sm:mt-0"
          >
            Installer en {SHOPIFY_INSTALL_TIME} <ArrowUpRight className="size-4" />
          </a>
        </div></div>
      </section>
    </>
  )
}
