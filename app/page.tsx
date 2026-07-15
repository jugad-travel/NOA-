"use client"

import { Hero } from "@/components/home/Hero"
import { PresentationVideo } from "@/components/home/PresentationVideo"
import { FunnelSection } from "@/components/home/FunnelSection"
import { BusinessRulesSection } from "@/components/home/BusinessRulesSection"
import { Performance } from "@/components/home/Performance"
import { Integration } from "@/components/home/Integration"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { FooterCTA } from "@/components/home/FooterCTA"

export default function HomePage() {
  return (
    <>
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
