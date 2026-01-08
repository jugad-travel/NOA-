import Image from "next/image"
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
      {/* Hero Image Section */}
      <section className="w-full relative">
        <div className="w-full px-2 md:px-4 pt-14 md:pt-20 pb-4 md:pb-6">
          <div className="relative w-full mx-auto" style={{ aspectRatio: '16/9', maxHeight: '90vh', maxWidth: '98vw' }}>
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
