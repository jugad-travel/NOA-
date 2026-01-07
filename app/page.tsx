import { Hero } from "@/components/home/Hero"
import { DemoSection } from "@/components/home/DemoSection"
import { PainSection } from "@/components/home/PainSection"
import { GammeNoa } from "@/components/home/GammeNoa"
import { Features } from "@/components/home/Features"
import { Performance } from "@/components/home/Performance"
import { Integration } from "@/components/home/Integration"
import { SocialProof } from "@/components/home/SocialProof"
import { PricingTeaser } from "@/components/home/PricingTeaser"
import { FooterCTA } from "@/components/home/FooterCTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <DemoSection />
      <SocialProof />
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
