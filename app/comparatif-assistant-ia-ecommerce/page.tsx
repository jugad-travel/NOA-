import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Search, Settings2, ShoppingCart, Sparkles } from "lucide-react"
import { ComparisonProofStrip } from "@/components/marketing/ComparisonProofStrip"
import { ComparisonTable } from "@/components/marketing/ComparisonTable"
import { HeadToHeadCard } from "@/components/marketing/HeadToHeadCard"
import { PageHero } from "@/components/marketing/PageHero"
import { StructuredData } from "@/components/marketing/StructuredData"
import { buttonVariants } from "@/components/ui/button-variants"
import { comparisonVerifiedLabel, headToHeadComparisons, parcelDifferentiatorContext } from "@/lib/comparison"
import { pricingData } from "@/lib/pricing"
import { SITE_URL } from "@/lib/marketing"

export const metadata: Metadata = {
  title: "Comparatif IA e-commerce 2026 : Parcel, Doofinder, iAdvize, Algolia et Rep AI",
  description: "Comparez Parcel, Doofinder, iAdvize, Algolia et Rep AI sur une même grille : funnel, Search, règles métier, UX, ingestion, accompagnement et prix.",
  alternates: { canonical: "/comparatif-assistant-ia-ecommerce" },
  openGraph: {
    title: "Comparatif IA e-commerce 2026 | Parcel",
    description: "Une comparaison transparente des principales approches pour intégrer un vendeur IA à un site e-commerce.",
    url: "/comparatif-assistant-ia-ecommerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatif IA e-commerce 2026 | Parcel",
    description: "Parcel, Doofinder, iAdvize, Algolia et Rep AI comparés selon les écarts qui comptent vraiment.",
  },
}

const displayedPlans = pricingData.filter((plan) => ["free", "essential", "growth", "pro"].includes(plan.id))
const decisionStages = ["Search", "Guided selling", "PDP Expert", "Comparatif", "Panier complet", "Checkout", "SAV"]

export default function ComparisonPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Comparatif IA e-commerce", item: `${SITE_URL}/comparatif-assistant-ia-ecommerce` },
    ],
  }

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Comparatif IA e-commerce 2026"
        title="Parcel face à Doofinder, iAdvize, Algolia et Rep AI"
        description="Chaque solution est examinée avec la même grille : couverture du funnel, Search et guided selling, actions transactionnelles, règles métier, UX, ingestion, accompagnement et prix."
        breadcrumbs={[{ name: "Accueil", href: "/" }, { name: "Comparatif" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/demo" className={buttonVariants({ variant: "white", size: "lg" })}>Tester Parcel <ArrowRight className="size-4" /></Link>
          <Link href="#methodologie-sources" className="inline-flex h-12 items-center justify-center rounded-full border border-white/80 bg-white/35 px-7 text-sm font-semibold text-gray-950 hover:bg-white/60">Méthodologie et sources</Link>
        </div>
      </PageHero>

      <section className="bg-white px-4 pb-20 md:pb-28">
        <div className="container"><ComparisonProofStrip /></div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Ce qui distingue Parcel</p>
            <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Un AI sales engine conçu pour tout le funnel.</h2>
          </div>

          <div className="space-y-5">
            <article className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div><Sparkles className="mb-6 size-7 text-blue-700" /><span className="font-mono text-xs font-semibold text-blue-700">01</span><h3 className="mt-4 text-3xl text-gray-950">Un runtime de vente, six points de contact</h3><p className="mt-5 leading-relaxed text-gray-600">Search, découverte, PDP Expert, comparaison, panier et SAV partagent le même contexte. Parcel compose questions, recommandations, comparatifs et actions sans recommencer le parcours à chaque page.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">{parcelDifferentiatorContext.map(([name, copy]) => <div key={name} className="rounded-2xl bg-[#f7f9ff] p-5"><p className="font-semibold text-gray-950">{name}</p><p className="mt-2 text-sm leading-relaxed text-gray-600">{copy}</p></div>)}</div>
            </article>

            <article className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-[#dff9fb] via-[#d9e0ff] to-[#ffd2bf] p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div><Search className="mb-6 size-7 text-blue-700" /><span className="font-mono text-xs font-semibold text-blue-800">02</span><h3 className="mt-4 text-3xl text-gray-950">Le coût IA est séparé de la recherche simple</h3><p className="mt-5 leading-relaxed text-gray-700">La recherche déterministe reste gratuite. Les sessions Parcel correspondent aux parcours où l’IA intervient réellement dans le conseil.</p></div>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{displayedPlans.map((plan) => <div key={plan.id} className="rounded-2xl border border-white/80 bg-white/80 p-5"><p className="text-sm font-semibold text-gray-500">{plan.name}</p><p className="mt-3 text-2xl font-semibold text-gray-950">{plan.monthlyPrice === 0 ? "0 €" : `${plan.monthlyPrice} €`}</p><p className="mt-2 text-xs text-gray-600">{plan.sessions?.toLocaleString("fr-FR")} sessions</p></div>)}</div>
            </article>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-gray-200 bg-white p-7 md:p-9">
                <Settings2 className="mb-6 size-7 text-blue-700" /><span className="font-mono text-xs font-semibold text-blue-700">03</span><h3 className="mt-4 text-3xl text-gray-950">La configuration commence par le métier</h3><p className="mt-5 leading-relaxed text-gray-600">L’équipe Parcel accompagne la traduction de votre méthode de vente en comportements concrets.</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Questions à poser", "Critères importants", "Contraintes", "Incompatibilités", "Règles commerciales"].map((item) => <li key={item} className="flex items-center gap-2 rounded-xl bg-[#f7f9ff] px-4 py-3 text-sm font-semibold text-gray-800"><Check className="size-4 text-blue-700" />{item}</li>)}</ul>
              </article>
              <article className="rounded-[2rem] border border-gray-200 bg-white p-7 md:p-9">
                <ShoppingCart className="mb-6 size-7 text-blue-700" /><span className="font-mono text-xs font-semibold text-blue-700">04</span><h3 className="mt-4 text-3xl text-gray-950">L’interface orchestre l’achat</h3><p className="mt-5 leading-relaxed text-gray-600">Le visiteur avance sans perdre le contexte, de la première recherche au panier complet, jusqu’au checkout et au SAV.</p>
                <ol className="mt-7 space-y-2">{decisionStages.map((stage, index) => <li key={stage} className="flex items-center gap-3 rounded-xl bg-[#f7f9ff] px-4 py-3"><span className="font-mono text-xs font-semibold text-blue-700">0{index + 1}</span><span className="text-sm font-semibold text-gray-800">{stage}</span>{index < decisionStages.length - 1 ? <ArrowRight className="ml-auto size-4 text-gray-400" /> : null}</li>)}</ol>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Face-à-face</p><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Quatre concurrents, une seule grille de comparaison.</h2><p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-600">Les huit critères restent strictement identiques d’un concurrent à l’autre. Les différences de périmètre et d’unité de facturation sont explicitées au lieu d’être transformées en score artificiel.</p></div>
          <div className="space-y-8">{headToHeadComparisons.map((comparison) => <div key={comparison.id} id={`parcel-vs-${comparison.id}`} className="scroll-mt-28"><HeadToHeadCard comparison={comparison} actions /></div>)}</div>
        </div>
      </section>

      <section id="tableau-comparatif" className="scroll-mt-24 bg-[#f7f8fb] px-4 py-20 md:py-28">
        <div className="container">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Tableau détaillé</p><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Les critères utiles pour creuser.</h2></div><p className="text-sm leading-relaxed text-gray-600">Les prix portent sur des unités différentes : sessions assistées, requêtes, conversations ou visiteurs. Ils ne constituent donc pas une comparaison de coût strictement équivalente.</p></div>
          <ComparisonTable />
          <p className="mt-4 text-xs leading-relaxed text-gray-500">Comparaison basée sur les informations publiques des éditeurs consultées le {comparisonVerifiedLabel}. Les périmètres fonctionnels et unités de facturation diffèrent. Les offres peuvent évoluer.</p>
        </div>
      </section>

      <section id="methodologie-sources" className="scroll-mt-24 bg-white px-4 py-20 md:py-24">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-white p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Méthodologie · vérifiée le {comparisonVerifiedLabel}</p><p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">Nous appliquons les mêmes critères à chaque solution et reprenons le vocabulaire, les prix et les périmètres publiés par les éditeurs. Aucune absence n’est déduite lorsque la documentation publique ne permet pas de conclure. Les unités de facturation restent volontairement visibles.</p></div>
            <Link href="/demo" className={buttonVariants({ variant: "secondary", size: "lg" })}>Tester Parcel <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 md:py-20">
        <div className="container"><div className="rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b8c8ff] to-[#ffb99b] px-6 py-14 text-center md:px-12 md:py-16"><h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Comparer sur votre propre catalogue</h2><p className="mx-auto mt-5 max-w-2xl text-gray-700">Voyez comment la logique métier, l’interface d’achat et le modèle de sessions s’appliqueraient à votre parcours.</p><Link href="/demo" className={buttonVariants({ variant: "white", size: "xl", className: "mt-8" })}>Réserver une démo <ArrowRight className="size-5" /></Link></div></div>
      </section>
    </>
  )
}
