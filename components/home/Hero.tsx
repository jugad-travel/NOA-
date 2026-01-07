"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const rotatingPhrases = [
  "vend comme en magasin.",
  "accompagne chaque client comme un vrai vendeur.",
  "comprend le besoin et guide jusqu'à l'achat.",
  "apporte un conseil expert, contextualisé et fiable.",
  "explique, compare et rassure avant l'achat.",
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 5000) // Plus lent : 5 secondes
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="relative min-h-[70vh] flex flex-col pt-24 pb-16 overflow-hidden bg-white">
      <div className="container relative z-10">
        {/* Large NOA Title */}
        <ScrollReveal>
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-normal tracking-tighter text-gray-900 leading-none font-display">
            NOA
          </h1>
        </ScrollReveal>
        
        {/* Hero Image with Gradient and Tagline */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full h-72 md:h-96 lg:h-[28rem] rounded-3xl overflow-hidden my-8">
            {/* Gradient background */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)"
              }}
            />
            
            {/* Tagline inside gradient - Left aligned, positioned lower */}
            <div className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-14 lg:pb-16 px-8 md:px-12 lg:px-16 z-10">
              <div className="max-w-4xl">
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black"
                  style={{ lineHeight: 1.15 }}
                >
                  Le premier conseiller de vente IA qui
                </p>
                <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 relative">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute top-0 left-0 right-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black"
                      style={{ lineHeight: 1.15 }}
                    >
                      {rotatingPhrases[currentIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            {/* Decorative animated shape */}
            <div className="absolute inset-0 flex items-center justify-end pr-16 opacity-20 pointer-events-none">
              <motion.div 
                className="w-64 h-64 rounded-full bg-white blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </ScrollReveal>
        
        {/* CTA Row */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center md:justify-start">
            <Link href="/demo">
              <Button variant="primary" size="lg" magnetic className="rounded-full">
                Réserver une démo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
