import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Search, Shapes, SlidersHorizontal, Sparkles } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { StructuredData } from "@/components/marketing/StructuredData"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { buttonVariants } from "@/components/ui/button-variants"
import { SHOPIFY_INSTALL_TIME, SITE_URL } from "@/lib/marketing"
import { getUseCase } from "@/lib/use-cases"
import { VIDEOS } from "@/lib/videos"

const canonicalUrl = "/moteur-recherche-conversationnel-ecommerce"

export const metadata: Metadata = {
  title: "Moteur de recherche IA e-commerce conversationnel",
  description: "Parcel combine recherche e-commerce déterministe et assistance IA : résultats directs pour les demandes simples, parcours guidé pour les besoins complexes.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: canonicalUrl,
    siteName: "Parcel",
    title: "Moteur de recherche IA e-commerce conversationnel | Parcel",
    description: "Recherche déterministe gratuite, aide au choix IA, logique métier et interface d’achat intégrée.",
    images: [{ url: "/images/Hero site parcel sans texte.png", width: 1200, height: 630, alt: "Moteur de recherche IA Parcel pour e-commerce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moteur de recherche IA e-commerce conversationnel | Parcel",
    description: "Une recherche précise obtient ses résultats ; un besoin complexe déclenche un parcours de conseil.",
  },
}

const capabilities = [
  [Search, "Langage naturel", "Comprendre une référence précise, un usage, une contrainte ou un projet formulé avec les mots du visiteur."],
  [SlidersHorizontal, "Bascule déterministe / IA", "Réserver le raisonnement IA aux demandes où la qualification et le conseil apportent une valeur réelle."],
  [Shapes, "Règles métier", "Appliquer les compatibilités, exclusions, disponibilités et priorités définies avec le marchand."],
  [Sparkles, "Décision expliquée", "Rendre visibles les critères retenus, les différences importantes et les limites de chaque option."],
] as const

export default function SearchPage() {
  const useCase = getUseCase("recherche-conversationnelle")!
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: useCase.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Produits", item: `${SITE_URL}/produits` },
      { "@type": "ListItem", position: 3, name: "Recherche IA", item: `${SITE_URL}${canonicalUrl}` },
    ],
  }

  return (
    <>
      <StructuredData data={[faqJsonLd, breadcrumbJsonLd]} />
      <PageHero
        eyebrow="Recherche IA e-commerce"
        title="Le moteur de recherche IA qui sait quand il faut conseiller"
        description="Parcel combine recherche e-commerce déterministe et assistance IA. Les demandes simples obtiennent immédiatement des résultats ; les besoins complexes déclenchent une expérience guidée capable de comprendre l’usage, poser les bonnes questions et recommander."
        breadcrumbs={[{ name: "Accueil", href: "/" }, { name: "Produits", href: "/produits" }, { name: "Recherche IA" }]}
        aside={
          <Link href="/integrations-tech" className="rounded-3xl border border-white/80 bg-white/65 p-6 text-gray-950 shadow-sm hover:bg-white/85">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">Shopify · API back-end</span>
            <strong className="mt-3 block text-2xl font-semibold">{SHOPIFY_INSTALL_TIME} sur Shopify, API pour les autres stacks.</strong>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Voir les intégrations <ArrowRight className="size-4" /></span>
          </Link>
        }
      >
        <Link href="/demo" className={buttonVariants({ variant: "white", size: "lg" })}>Voir Parcel sur mon catalogue <ArrowRight className="size-4" /></Link>
      </PageHero>

      <section className="bg-[#f7f8fb] px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Deux chemins dans une même recherche</p>
            <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Une recherche précise obtient immédiatement ses résultats. Un besoin complexe déclenche un parcours de conseil.</h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] bg-gradient-to-br from-[#e3fafc] via-[#dce3ff] to-[#ffd8c8] p-4 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-white/80 bg-white/90 p-7 md:p-10">
              <div className="flex items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">Recherche déterministe</p><span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Gratuite</span></div>
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5"><p className="text-sm font-medium text-gray-950">Nike Pegasus 42</p><div className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">{["#dbeafe", "#e5e7eb", "#fee2e2"].map((color) => <span key={color} className="h-24 rounded-xl" style={{ backgroundColor: color }} />)}</div></div>
              <p className="mt-6 text-sm leading-relaxed text-gray-600">La marque, la référence et le modèle suffisent à retourner les produits correspondants sans session assistée.</p>
            </article>
            <article className="rounded-[1.5rem] border border-blue-100 bg-[#eef4ff] p-7 md:p-10">
              <div className="flex items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">Vendeur IA</p><span className="rounded-full bg-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-900">Conseil activé</span></div>
              <p className="mt-8 rounded-2xl border border-blue-200 bg-white/80 p-5 text-lg font-medium text-gray-950">« Je prépare mon premier marathon et j’ai besoin de plus d’amorti. »</p>
              <ol className="mt-5 space-y-3 text-sm text-gray-700"><li>1. Préciser le rythme, la distance et le terrain</li><li>2. Appliquer les critères et règles de la catégorie</li><li>3. Expliquer la recommandation et proposer les actions utiles</li></ol>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Démonstration produit</p>
              <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">De la requête à une décision actionnable</h2>
              <p className="mt-5 leading-relaxed text-gray-600">L’interface rassemble les questions de qualification, les cartes produit, les explications, la comparaison et l’ajout au panier.</p>
            </div>
            <YouTubeEmbed videoId={VIDEOS.match} title="Recherche déterministe et aide au choix IA Parcel" rounded="rounded-[2rem]" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#dff9fb] via-[#d6ddff] to-[#ffd0bd] p-7 md:p-10">
            <div className="mb-12 max-w-4xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Configurer la façon de chercher et conseiller</p><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Le catalogue et les règles métier structurent chaque réponse.</h2></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(([Icon, title, copy]) => <article key={title} className="rounded-2xl border border-white/80 bg-white/85 p-7"><Icon className="mb-8 size-6 text-blue-700" /><h3 className="text-xl font-semibold text-gray-950">{title}</h3><p className="mt-4 text-sm leading-relaxed text-gray-600">{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl"><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Questions fréquentes</h2><div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">{useCase.faq.map((item) => <article key={item.question} className="py-7"><h3 className="text-lg font-semibold text-gray-950">{item.question}</h3><p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p></article>)}</div></div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 md:py-20">
        <div className="container text-center"><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Testez la recherche Parcel sur vos propres produits</h2><p className="mx-auto mt-5 max-w-2xl text-gray-600">Une démonstration avec votre catalogue, vos critères de choix et vos priorités commerciales.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/demo" className={buttonVariants({ variant: "primary", size: "xl" })}>Réserver une démo <ArrowRight className="size-5" /></Link><Link href="/tarifs" className={buttonVariants({ variant: "outline", size: "xl" })}>Voir les tarifs</Link></div></div>
      </section>
    </>
  )
}
