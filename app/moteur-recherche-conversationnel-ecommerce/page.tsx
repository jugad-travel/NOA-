import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, MessageSquareText, Search, SlidersHorizontal, ShoppingCart } from "lucide-react"

const canonicalUrl = "/moteur-recherche-conversationnel-ecommerce"

export const metadata: Metadata = {
  title: "Moteur de recherche conversationnel e-commerce",
  description:
    "Découvrez le moteur de recherche conversationnel Parcel : compréhension du besoin, recommandations produit et aide au choix pour votre e-commerce.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: canonicalUrl,
    siteName: "Parcel",
    title: "Moteur de recherche conversationnel e-commerce | Parcel",
    description:
      "Parcel transforme la recherche e-commerce en conversation pour comprendre le besoin et recommander les bons produits.",
    images: [
      {
        url: "/images/Hero site parcel sans texte.png",
        width: 1200,
        height: 630,
        alt: "Moteur de recherche conversationnel Parcel pour e-commerce",
      },
    ],
  },
}

const benefits = [
  {
    icon: MessageSquareText,
    title: "Comprendre le besoin réel",
    copy: "Le client formule sa demande avec ses mots. Parcel identifie l’intention, l’usage, le budget et les contraintes importantes.",
  },
  {
    icon: SlidersHorizontal,
    title: "Respecter vos règles business",
    copy: "Les recommandations tiennent compte du catalogue, du stock, de la marge, des priorités commerciales et de vos exclusions métier.",
  },
  {
    icon: ShoppingCart,
    title: "Guider jusqu’à l’achat",
    copy: "Parcel explique ses choix, compare les produits et accompagne la décision au lieu de renvoyer une simple liste de résultats.",
  },
]

const faq = [
  {
    question: "Qu’est-ce qu’un moteur de recherche conversationnel e-commerce ?",
    answer:
      "C’est un moteur de recherche qui comprend des demandes formulées en langage naturel. Il peut préciser le besoin, conserver le contexte de la conversation et recommander les produits les plus adaptés.",
  },
  {
    question: "Quelle différence avec un chatbot e-commerce ?",
    answer:
      "Un chatbot classique répond surtout à des questions prédéfinies. Parcel interroge le catalogue, raisonne sur les critères produit et applique les règles commerciales du marchand pour aider réellement à choisir.",
  },
  {
    question: "Parcel remplace-t-il le moteur de recherche existant ?",
    answer:
      "Parcel peut compléter la recherche existante ou devenir le point d’entrée principal de la découverte produit. L’intégration dépend de votre parcours, de votre catalogue et de votre stack technique.",
  },
  {
    question: "Avec quelles plateformes e-commerce Parcel est-il compatible ?",
    answer:
      "Parcel s’intègre notamment à Shopify, Magento, WooCommerce, PrestaShop, Webflow et aux architectures headless via API.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function ConversationalSearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="h-[72px] bg-white md:h-[80px]" aria-hidden="true" />
      <section className="bg-[#06132f] px-4 pb-20 pt-20 text-white md:pb-28 md:pt-24">
        <div className="container">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] !text-blue-300">
              Recherche et découverte produit par l’IA
            </p>
            <h1 className="max-w-4xl text-4xl font-normal leading-[1.06] tracking-[-0.045em] !text-white md:text-6xl lg:text-7xl">
              Le moteur de recherche conversationnel pensé pour l’e-commerce
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed !text-blue-100/80 md:text-xl">
              Parcel transforme une demande formulée en langage naturel en recommandations produit pertinentes. Vos clients trouvent, comparent et choisissent sans parcourir des dizaines de filtres.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 transition-colors hover:bg-blue-50"
              >
                Réserver une démo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/produits"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Découvrir la suite Parcel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              Au-delà d’une barre de recherche
            </p>
            <h2 className="text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-5xl">
              Comprendre une intention, pas seulement des mots-clés
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Une recherche traditionnelle renvoie les produits qui correspondent aux termes saisis. La recherche conversationnelle comprend pourquoi le client achète, pose les questions utiles et l’aide à arbitrer.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-7 md:p-8">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-950 text-white">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950">{benefit.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
              Une expérience guidée
            </p>
            <h2 className="text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-5xl">
              Du besoin exprimé au produit choisi
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Parcel associe recherche sémantique, dialogue et règles de décision commerciale dans une seule expérience intégrée au site marchand.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Analyse du langage naturel et du contexte de la demande",
                "Questions de clarification adaptées au catalogue",
                "Recommandations argumentées et comparaisons par usage",
                "Ajout au panier et compléments pertinents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-950 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-xl shadow-gray-200/60 md:p-8">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-5 py-4 text-gray-500">
              <Search className="h-5 w-5" />
              <span>Je cherche un ordinateur léger pour voyager et faire du montage vidéo</span>
            </div>
            <div className="mt-4 rounded-2xl bg-gray-950 p-5 text-white">
              <p className="text-sm leading-relaxed !text-gray-200">
                Pour vous recommander le bon modèle, quel logiciel de montage utilisez-vous et quelle autonomie minimale recherchez-vous ?
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Final Cut Pro", "Premiere Pro", "DaVinci Resolve"].map((label) => (
                  <span key={label} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-gray-200">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Questions fréquentes</p>
            <h2 className="text-3xl font-normal tracking-[-0.035em] text-gray-950 md:text-5xl">
              Recherche conversationnelle et e-commerce
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {faq.map((item) => (
              <article key={item.question} className="py-7">
                <h3 className="text-lg font-semibold text-gray-950">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-20 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-normal tracking-[-0.035em] !text-white md:text-5xl">
            Transformez la recherche produit en conversation utile
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg !text-gray-400">
            Découvrez comment Parcel s’intègre à votre catalogue, à vos règles commerciales et à votre parcours d’achat.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-100"
          >
            Parler de votre projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
