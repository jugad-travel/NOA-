"use client"

import * as React from "react"
import Image from "next/image"
import { Hero } from "@/components/home/Hero"
import { HeroAnimation } from "@/components/home/HeroAnimation"
import { PresentationVideo } from "@/components/home/PresentationVideo"
import { FunnelSection } from "@/components/home/FunnelSection"
import { BusinessRulesSection } from "@/components/home/BusinessRulesSection"
import { Performance } from "@/components/home/Performance"
import { Integration } from "@/components/home/Integration"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { FooterCTA } from "@/components/home/FooterCTA"

export default function HomePage() {
  const [imageOpacity, setImageOpacity] = React.useState(1)
  const heroImageRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Désactiver complètement l'effet de fade sur mobile
    const checkMobile = () => window.innerWidth < 768

    // Sur mobile, garder l'opacité à 1 et ne pas écouter le scroll
    if (checkMobile()) {
      setImageOpacity(1)
      return
    }

    const handleScroll = () => {
      // Revérifier au cas où la fenêtre a été redimensionnée
      if (checkMobile()) {
        setImageOpacity(1)
        return
      }

      if (!heroImageRef.current) return

      const rect = heroImageRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Commencer le fade seulement quand l'image commence à sortir de la viewport
      const startFade = viewportHeight * 0.85
      const fadeDistance = 300

      if (rect.bottom < startFade) {
        const scrollProgress = Math.min((startFade - rect.bottom) / fadeDistance, 1)
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
      {/* Hero Image Section — bannière plein écran + démos flottantes */}
      <section className="w-full relative bg-white">
        <div className="w-full px-2 md:px-4 pt-14 md:pt-20 pb-4 md:pb-6">
          <div
            ref={heroImageRef}
            className="relative w-full mx-auto md:transition-opacity md:duration-300"
            style={{ aspectRatio: "16/9", maxHeight: "90vh", maxWidth: "98vw", opacity: imageOpacity }}
          >
            <Image
              src="/images/hero site Parcel v2.png"
              alt="PARCEL - L'assistant d'achat IA pour le e-commerce"
              fill
              className="object-cover rounded-xl md:rounded-2xl"
              priority
              quality={90}
            />
            {/* Les 3 démos qui s'enchaînent, en surimpression */}
            <HeroAnimation />
          </div>
        </div>
      </section>
      <Hero />
      <PresentationVideo />
      <FunnelSection />
      <BusinessRulesSection />
      <Performance />
      <Integration />
      <PricingTeaser />
      <FooterCTA />
    </>
  )
}
