import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

export function FooterCTA() {
  return (
    <section className="bg-[#f7f8fb] px-4 py-20 md:py-28">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d0f7fb] via-[#a9bcff] to-[#ffb08d] px-6 py-14 text-center md:px-14 md:py-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-700">Votre catalogue, votre logique</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Voyez comment Parcel vendrait vos propres produits.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700">Application Shopify native · Installation en {SHOPIFY_INSTALL_TIME} · Configuration métier accompagnée</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demo" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold text-gray-950 shadow-sm hover:bg-white/85">Réserver une démo <ArrowRight className="size-5" /></Link>
            <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/45 px-10 text-base font-semibold text-gray-900 backdrop-blur-sm hover:bg-white/70">Installer en {SHOPIFY_INSTALL_TIME} <ArrowUpRight className="size-5" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
