import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, Search, Sparkles } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { StructuredData } from "@/components/marketing/StructuredData"
import { buttonVariants } from "@/components/ui/button-variants"
import { SHOPIFY_INSTALL_TIME, SITE_URL } from "@/lib/marketing"
import { pricingData, pricingFaq } from "@/lib/pricing"
import { cn } from "@/lib/utils"

const freePlan = pricingData.find((plan) => plan.id === "free")!
const essentialPlan = pricingData.find((plan) => plan.id === "essential")!

export const metadata: Metadata = {
  title: "Tarifs assistant d’achat IA e-commerce",
  description: "Découvrez les tarifs Parcel : recherche e-commerce déterministe gratuite et assistant d’achat IA facturé selon les sessions réellement assistées.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs assistant d’achat IA e-commerce | Parcel",
    description: `Recherche déterministe gratuite, ${freePlan.sessions} sessions IA offertes et forfaits transparents à partir de ${essentialPlan.priceLabel}.`,
    url: "/tarifs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs assistant d’achat IA e-commerce | Parcel",
    description: "Recherche déterministe gratuite et sessions IA facturées lorsqu’elles apportent du conseil.",
  },
}

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tarifs", item: `${SITE_URL}/tarifs` },
    ],
  }

  return (
    <>
      <StructuredData data={[faqJsonLd, breadcrumbJsonLd]} />
      <PageHero
        eyebrow="Tarifs Parcel"
        title="L’IA intervient lorsqu’elle apporte réellement du conseil."
        description="La recherche déterministe reste gratuite. Les sessions Parcel sont utilisées lorsque l’IA accompagne réellement un visiteur dans son choix."
        breadcrumbs={[{ name: "Accueil", href: "/" }, { name: "Tarifs" }]}
        aside={
          <Link href="/integrations-tech" className="rounded-3xl border border-white/80 bg-white/65 p-6 text-gray-950 shadow-sm backdrop-blur-sm hover:bg-white/85">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">Shopify · API back-end</span>
            <strong className="mt-3 block text-2xl font-semibold">{SHOPIFY_INSTALL_TIME} sur Shopify, intégration accompagnée ailleurs.</strong>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Voir les intégrations <ArrowRight className="size-4" /></span>
          </Link>
        }
      />

      <section className="bg-[#f7f8fb] px-4 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-8">
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100"><Search className="size-5 text-gray-900" /></div>
              <div><h2 className="text-xl font-semibold text-gray-950">Recherche déterministe</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">Une référence, une marque ou un critère précis déclenche ses résultats sans session IA.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100"><Sparkles className="size-5 text-blue-700" /></div>
              <div><h2 className="text-xl font-semibold text-gray-950">Session Parcel assistée</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">L’IA intervient pour comprendre un besoin, qualifier le contexte et accompagner la décision.</p></div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pricingData.map((plan) => {
              const external = plan.ctaHref.startsWith("http")
              const ctaClass = buttonVariants({ variant: plan.highlighted ? "white" : plan.id === "enterprise" ? "outline" : "primary", size: "lg", className: "mt-7 w-full" })
              return (
                <article key={plan.id} className={cn("relative flex h-full flex-col rounded-[1.75rem] border p-6 md:p-7", plan.highlighted ? "border-blue-200 bg-gradient-to-br from-[#e3f9fb] to-[#dbe1ff] shadow-lg" : "border-gray-200 bg-white")}>
                  {plan.highlighted ? <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-900">Équilibre volume / coût</span> : null}
                  <p className={cn("text-sm font-semibold uppercase tracking-[0.14em]", plan.highlighted ? "text-blue-800" : "text-gray-500")}>{plan.name}</p>
                  <p className="mt-8 min-h-16 text-3xl font-semibold tracking-[-0.04em] text-gray-950">{plan.priceLabel}</p>
                  <p className="mt-4 text-sm font-semibold text-gray-800">{plan.sessionsLabel}</p>
                  <p className="mt-2 min-h-10 text-sm text-gray-500">{plan.overageLabel}</p>
                  <ul className="mt-7 flex-1 space-y-3 border-t border-gray-200 pt-6">
                    {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-gray-600"><Check className="mt-0.5 size-4 shrink-0 text-blue-700" />{feature}</li>)}
                  </ul>
                  {external ? <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClass}>{plan.ctaLabel}<ArrowUpRight className="size-4" /></a> : <Link href={plan.ctaHref} className={ctaClass}>{plan.ctaLabel}<ArrowRight className="size-4" /></Link>}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Comprendre la facturation</p>
            <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Qu’est-ce qu’une session Parcel ?</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">Une session assistée désigne un parcours où l’IA intervient pour comprendre, qualifier ou conseiller. La définition de comptage détaillée est présentée avant l’activation, afin que la facturation reste lisible dans votre configuration.</p>
          </div>
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {pricingFaq.map((item) => (
              <article key={item.question} className="py-7">
                <h3 className="text-lg font-semibold text-gray-950">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 md:py-20">
        <div className="container"><div className="rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b8c8ff] to-[#ffb99b] px-6 py-14 text-center md:px-12 md:py-16">
          <h2 className="text-3xl font-normal text-gray-950 md:text-5xl">Choisir un forfait à partir de votre trafic réel</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-700">Nous vous aidons à estimer la part de recherches déterministes et de parcours réellement assistés.</p>
          <Link href="/demo" className={buttonVariants({ variant: "white", size: "xl", className: "mt-8" })}>Réserver une démo <ArrowRight className="size-5" /></Link>
        </div></div>
      </section>
    </>
  )
}
