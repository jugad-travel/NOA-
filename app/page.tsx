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
      // Commencer le fade uniquement lorsque le hero sort réellement par le haut.
      // L'ancien calcul basé sur la hauteur du viewport délavavait le hero dès
      // le chargement sur les écrans intermédiaires au format vertical.
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
      {/* Hero Image Section — bannière plein écran + démos flottantes */}
      <section className="w-full relative bg-white overflow-x-clip">
        <div className="w-full px-2 md:px-4 pt-14 md:pt-20 pb-4 md:pb-6">
          <div
            ref={heroImageRef}
            className="relative w-full mx-auto md:transition-opacity md:duration-300"
            style={{ aspectRatio: "16/9", maxHeight: "90vh", maxWidth: "98vw", opacity: imageOpacity }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src="/images/Hero site parcel sans texte.png"
                alt="Sommet enneigé éclairé par le lever du soleil"
                fill
                className="object-cover origin-left scale-[1.16] md:scale-100 md:origin-center"
                priority
                quality={90}
              />
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none px-[4%] pt-[7%] md:pt-[7.5%]">
              <h1
                className="max-w-[88%] text-[clamp(1.5rem,4vw,4.8rem)] font-normal leading-[1.08] tracking-[-0.045em] text-white md:max-w-[44%]"
                style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 4vw, 4.8rem)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.045em' }}
              >
                <span className="block">L’assistant d’achat IA </span>
                <span className="block">pour le e-commerce</span>
              </h1>
              <p
                className="mt-[2.5%] hidden max-w-[44%] text-[clamp(0.62rem,1.1vw,1.25rem)] leading-[1.45] text-white min-[520px]:block"
                style={{ color: '#ffffff' }}
              >
                Comprenez chaque besoin, recommandez les bons produits et guidez vos clients jusqu’au panier complet.
              </p>
            </div>
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
