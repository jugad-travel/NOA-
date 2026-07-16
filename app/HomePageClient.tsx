"use client"

import * as React from "react"
import Image from "next/image"
import { Hero } from "@/components/home/Hero"
import { HeroAnimation } from "@/components/home/HeroAnimation"
import { PresentationVideo } from "@/components/home/PresentationVideo"
import { JourneyMap } from "@/components/home/JourneyMap"
import { FunnelSection } from "@/components/home/FunnelSection"
import { BusinessRulesSection } from "@/components/home/BusinessRulesSection"
import { Performance } from "@/components/home/Performance"
import { Integration } from "@/components/home/Integration"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { FooterCTA } from "@/components/home/FooterCTA"
import { FAQ } from "@/components/home/FAQ"

export function HomePageClient() {
  const [imageOpacity, setImageOpacity] = React.useState(1)
  const heroImageRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const checkMobile = () => window.innerWidth < 768

    if (checkMobile()) {
      setImageOpacity(1)
      return
    }

    const handleScroll = () => {
      if (checkMobile()) {
        setImageOpacity(1)
        return
      }

      if (!heroImageRef.current) return

      const rect = heroImageRef.current.getBoundingClientRect()
      const fadeDistance = 300

      if (rect.top < 0) {
        const scrollProgress = Math.min(Math.abs(rect.top) / fadeDistance, 1)
        setImageOpacity(Math.max(1 - scrollProgress, 0))
      } else {
        setImageOpacity(1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="relative w-full overflow-x-clip bg-white">
        <div className="w-full px-2 pb-28 pt-14 md:px-4 md:pb-6 md:pt-20">
          <div
            ref={heroImageRef}
            className="relative mx-auto w-full md:transition-opacity md:duration-300"
            style={{ aspectRatio: "16/9", maxHeight: "90vh", maxWidth: "98vw", opacity: imageOpacity }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src="/images/Hero site parcel sans texte.png"
                alt="Sommet enneigé éclairé par le lever du soleil"
                fill
                className="origin-left scale-[1.16] object-cover md:origin-center md:scale-100"
                priority
                quality={90}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-10 px-[4%] pt-[7%] md:pt-[7.5%]">
              <h1
                className="max-w-[88%] text-[clamp(1.5rem,4vw,4.8rem)] font-normal leading-[1.08] tracking-[-0.045em] text-white md:max-w-[44%]"
                style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 4vw, 4.8rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.045em" }}
              >
                <span className="block">L’assistant d’achat IA </span>
                <span className="block">pour le e-commerce</span>
              </h1>
              <p
                className="mt-[2.5%] hidden max-w-[44%] text-[clamp(0.62rem,1.1vw,1.25rem)] leading-[1.45] text-white min-[520px]:block"
                style={{ color: "#ffffff" }}
              >
                Assistant d’achat IA et moteur de recherche conversationnel : Parcel comprend le besoin, recommande les bons produits et guide jusqu’à l’achat.
              </p>
            </div>
            <HeroAnimation />
          </div>
        </div>
      </section>
      <Hero />
      <PresentationVideo />
      <JourneyMap />
      <FunnelSection />
      <BusinessRulesSection />
      <Performance />
      <Integration />
      <PricingTeaser />
      <FAQ />
      <FooterCTA />
    </>
  )
}
