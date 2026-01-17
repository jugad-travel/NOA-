"use client"

import * as React from "react"
import Image from "next/image"
import { Hero } from "@/components/home/Hero"
import { DemoSection } from "@/components/home/DemoSection"
import { PainSection } from "@/components/home/PainSection"
import { GammeNoa } from "@/components/home/GammeNoa"
import { Features } from "@/components/home/Features"
import { Performance } from "@/components/home/Performance"
import { Integration } from "@/components/home/Integration"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { FooterCTA } from "@/components/home/FooterCTA"

export default function HomePage() {
  const [imageOpacity, setImageOpacity] = React.useState(1)
  const heroImageRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (!heroImageRef.current) return
      
      const rect = heroImageRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Commencer le fade seulement quand l'image commence à sortir de la viewport
      // Le fade se fait rapidement sur une distance réduite
      const startFade = viewportHeight * 0.85 // Commencer quand l'image est à 85% du haut
      const fadeDistance = 300 // Distance réduite pour une disparition plus rapide
      
      // Ne commencer le fade que si l'image est déjà partiellement sortie
      if (rect.bottom < startFade) {
        const scrollProgress = Math.min((startFade - rect.bottom) / fadeDistance, 1)
        setImageOpacity(Math.max(1 - scrollProgress, 0))
      } else {
        setImageOpacity(1)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appeler une fois au montage
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      {/* Hero Image Section */}
      <section className="w-full relative">
        <div className="w-full px-2 md:px-4 pt-14 md:pt-20 pb-4 md:pb-6">
          <div 
            ref={heroImageRef}
            className="relative w-full mx-auto transition-opacity duration-300"
            style={{ aspectRatio: '16/9', maxHeight: '90vh', maxWidth: '98vw', opacity: imageOpacity }}
          >
            <Image
              src="/images/NOA au dessu Hero plein écran.png"
              alt="NOA - Vendre en ligne comme en magasin"
              fill
              className="object-cover rounded-xl md:rounded-2xl"
              priority
              quality={90}
            />
          </div>
        </div>
      </section>
      <Hero />
      <DemoSection />
      <PainSection />
      <GammeNoa />
      <Features />
      <Performance />
      <Integration />
      <PricingTeaser />
      <FooterCTA />
    </>
  )
}
