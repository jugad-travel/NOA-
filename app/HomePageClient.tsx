"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"
import { FunnelSection } from "@/components/home/FunnelSection"
import { HeroAnimation } from "@/components/home/HeroAnimation"
import { HybridSearchSection } from "@/components/home/HybridSearchSection"
import { Integration } from "@/components/home/Integration"
import { PresentationVideo } from "@/components/home/PresentationVideo"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { buttonVariants } from "@/components/ui/button-variants"
import { SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

export function HomePageClient() {
  const [imageOpacity, setImageOpacity] = React.useState(1)
  const [heroDemoTop, setHeroDemoTop] = React.useState("58%")
  const heroImageRef = React.useRef<HTMLDivElement>(null)
  const heroContentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const updateDemoPosition = () => {
      if (window.innerWidth < 520) return
      const hero = heroImageRef.current
      const content = heroContentRef.current
      if (!hero || !content) return

      const heroRect = hero.getBoundingClientRect()
      const contentRect = content.getBoundingClientRect()
      setHeroDemoTop(`${Math.round(contentRect.bottom - heroRect.top + 16)}px`)
    }

    updateDemoPosition()
    window.addEventListener("resize", updateDemoPosition)
    const resizeObserver = new ResizeObserver(updateDemoPosition)
    if (heroImageRef.current) resizeObserver.observe(heroImageRef.current)
    if (heroContentRef.current) resizeObserver.observe(heroContentRef.current)

    return () => {
      window.removeEventListener("resize", updateDemoPosition)
      resizeObserver.disconnect()
    }
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 || !heroImageRef.current) {
        setImageOpacity(1)
        return
      }
      const rect = heroImageRef.current.getBoundingClientRect()
      const progress = rect.top < 0 ? Math.min(Math.abs(rect.top) / 300, 1) : 0
      setImageOpacity(1 - progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="relative w-full overflow-x-clip bg-white">
        <div className="w-full px-2 pb-24 pt-20 md:px-4 md:pb-6 md:pt-20">
          <div
            ref={heroImageRef}
            className="relative mx-auto min-h-[790px] w-full md:min-h-[720px] md:transition-opacity md:duration-300 xl:min-h-0 xl:aspect-[16/9]"
            style={{ maxWidth: "98vw", opacity: imageOpacity }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src="/images/Hero site parcel sans texte.png"
                alt="Expérience d’achat Parcel intégrée à un site e-commerce"
                fill
                className="origin-left scale-[1.16] object-cover md:origin-center md:scale-100"
                priority
                quality={90}
                sizes="98vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06132f]/85 via-[#06132f]/50 to-[#06132f]/10" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06132f]/45 via-transparent to-[#06132f]/20" aria-hidden="true" />
            </div>

            <div ref={heroContentRef} className="absolute inset-x-0 top-0 z-30 px-[5%] pt-[9%] md:pt-[7%]">
              <div className="max-w-[760px] md:max-w-[92%]">
                <p className="inline-flex rounded-full border border-white/55 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  Vendeur IA pour e-commerce
                </p>
                <h1 className="mt-5 text-[clamp(2.05rem,3.15vw,3.55rem)] font-normal leading-[1.06] tracking-[-0.045em] text-white">
                  <span className="block font-semibold lg:whitespace-nowrap">Le vendeur IA de votre site e-commerce,</span>
                  <span className="mt-1 block font-normal">qui reproduit votre logique de vente.</span>
                </h1>
                <p className="mt-5 max-w-3xl text-[clamp(0.9rem,1.08vw,1.08rem)] leading-relaxed text-white/90">
                  Parcel comprend le besoin de chaque visiteur, pose les bonnes questions et l’aide à trouver, comparer et choisir les produits adaptés. Vos critères de vente, vos contraintes et votre expertise produit guident chaque recommandation.
                </p>
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <Link href="/demo" className={buttonVariants({ variant: "white", size: "md" })}>
                    Réserver une démo <ArrowRight className="size-4" />
                  </Link>
                  <a href="#presentation" className="inline-flex h-11 items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15">
                    Voir Parcel en action
                  </a>
                </div>
                <div className="mt-5 flex flex-col gap-2 text-xs font-semibold text-white/90 sm:flex-row sm:items-center sm:gap-5">
                  <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                    <CheckCircle2 className="size-4 text-blue-200" /> Shopify · {SHOPIFY_INSTALL_TIME} <ArrowUpRight className="size-3.5" />
                  </a>
                  <Link href="/integrations-tech" className="inline-flex items-center gap-2 hover:text-white">
                    <Code2 className="size-4 text-blue-200" /> Autres stacks · API back-end
                  </Link>
                </div>
              </div>
            </div>

            <HeroAnimation desktopTop={heroDemoTop} />
          </div>
        </div>
      </section>

      <PresentationVideo />
      <HybridSearchSection />
      <FunnelSection />
      <PricingTeaser />
      <Integration />
      <FAQ />
      <FooterCTA />
    </>
  )
}
