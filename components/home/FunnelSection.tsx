"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS } from "@/lib/videos"
import { cn } from "@/lib/utils"

type Stage = {
  id: string
  kicker: string
  title: string
  copy: string
  videoId?: string
  href: string
}

// The purchase journey, in order. One pinned screen: stages slide in from
// alternating sides while the visitor scrolls (Bonnotte-style pin + scrub).
const STAGES: Stage[] = [
  {
    id: "recherche",
    kicker: "Recherche",
    title: "Recherche conversationnelle",
    copy:
      "Votre client décrit son besoin avec ses mots, comme à un vendeur en boutique. Parcel comprend l'intention, pose les bonnes questions et trouve les bons produits — là où une barre de recherche renvoie une liste.",
    href: "/produits",
  },
  {
    id: "match",
    kicker: "Aide au choix",
    title: "Aide au choix par catégorie",
    copy:
      "Sur une page catégorie, le client hésite entre des dizaines de modèles. PARCEL Match l'interroge sur son usage et son budget, puis lui recommande le bon produit — avec l'explication du choix.",
    videoId: VIDEOS.match,
    href: "/produits#parcel-match",
  },
  {
    id: "expert",
    kicker: "Fiche produit",
    title: "Un expert sur chaque fiche produit",
    copy:
      "PARCEL Expert répond à toutes les questions sur le produit consulté : compatibilité, usage, entretien, taille. Le client est rassuré avant d'acheter, sans ticket support ni recherche externe.",
    videoId: VIDEOS.expert,
    href: "/produits#parcel-expert",
  },
  {
    id: "comparaison",
    kicker: "Comparaison",
    title: "Comparaison intelligente",
    copy:
      "Deux produits en tête ? Parcel les compare critère par critère, avec un verdict honnête par usage — comme un vendeur qui connaît son rayon, pas un tableau de specs illisible.",
    videoId: VIDEOS.comparaison,
    href: "/produits#parcel-comparaison",
  },
  {
    id: "projet",
    kicker: "Panier complet",
    title: "Un projet, un panier complet",
    copy:
      "« Je prépare un trek de 5 jours » : PARCEL Projet décompose le besoin, distingue l'indispensable de l'optionnel et construit le panier complet en une conversation. Le panier moyen change d'échelle.",
    videoId: VIDEOS.projet,
    href: "/produits#parcel-projet",
  },
  {
    id: "sav",
    kicker: "Après-vente",
    title: "SAV instantané",
    copy:
      "Retours, livraison, politiques de la boutique : Parcel répond immédiatement à partir de vos règles réelles, et passe la main à un humain quand il le faut. Moins de tickets, des clients qui reviennent.",
    videoId: VIDEOS.sav,
    href: "/produits#parcel-sav",
  },
]

// Stage 1 has no dedicated video: a sober chat mockup shows the idea.
function SearchMockup() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
        <MessageCircle className="h-4 w-4" />
        Assistant Parcel
      </div>
      <div className="space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gray-900 text-white px-4 py-3 text-sm">
          Je cherche une veste imperméable pour l'hiver, à moins de 150 €
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-700 px-4 py-3 text-sm">
          Très bon choix de saison ! C'est plutôt pour un usage ville ou pour la
          randonnée ?
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Ville", "Randonnée", "Les deux"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FunnelSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const pinRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)
  // Pinned panels are stacked, so they ALL intersect the viewport: mounting
  // every video at once would autoplay five players simultaneously. In pin
  // mode we mount each stage's video only once the scroll reaches it.
  const [maxActive, setMaxActive] = React.useState(0)
  const [mode, setMode] = React.useState<"pending" | "pinned" | "stacked">("pending")

  React.useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!desktop || reducedMotion) {
      setMode("stacked")
      return
    }
    setMode("pinned")

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".funnel-panel")
      if (panels.length < 2) return

      gsap.set(panels, { autoAlpha: 0 })
      gsap.set(panels[0], { autoAlpha: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${panels.length * 85}%`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const idx = Math.min(
              STAGES.length - 1,
              Math.round(self.progress * (STAGES.length - 1)),
            )
            setActive(idx)
            setMaxActive((prev) => Math.max(prev, idx))
          },
        },
      })

      panels.forEach((panel, i) => {
        // Alternate the slide direction to echo the left/right layout swap.
        const fromX = i % 2 === 0 ? -80 : 80
        if (i > 0) {
          tl.fromTo(
            panel,
            { autoAlpha: 0, x: fromX },
            { autoAlpha: 1, x: 0, duration: 1, ease: "power2.out" },
          )
        }
        if (i < panels.length - 1) {
          tl.to(panel, { autoAlpha: 0, x: -fromX / 2, duration: 1, ease: "power2.in" }, "+=0.7")
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="funnel" className="bg-off-white">
      {/* Section intro */}
      <div className="container px-4 md:px-6 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-4">
          AI Personal Shopper
        </p>
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 max-w-3xl mx-auto leading-tight">
          Un vendeur IA sur tout le parcours d'achat
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          De la première question au service après-vente, Parcel accompagne
          chaque client comme le ferait votre meilleur vendeur.
        </p>
      </div>

      {/* Pinned stage (desktop) / stacked cards (mobile) */}
      <div ref={pinRef} className="relative md:h-screen md:overflow-hidden">
        <div className="container px-4 md:px-6 h-full">
          <div className="relative h-full">
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                className={cn(
                  "funnel-panel py-10 md:py-0",
                  "md:absolute md:inset-0 md:flex md:items-center",
                )}
              >
                <div
                  className={cn(
                    "grid gap-8 md:gap-16 md:grid-cols-2 items-center w-full",
                  )}
                >
                  <div className={cn("max-w-xl", i % 2 === 1 && "md:order-2 md:justify-self-end")}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent-orange mb-3">
                      {String(i + 1).padStart(2, "0")} — {stage.kicker}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
                      {stage.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">{stage.copy}</p>
                    <Link
                      href={stage.href}
                      className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
                    >
                      Découvrir <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={cn(i % 2 === 1 && "md:order-1")}>
                    {stage.videoId ? (
                      <YouTubeEmbed
                        videoId={stage.videoId}
                        title={stage.title}
                        // pending (pre-hydration) → façade; pinned → mount when
                        // the scroll reaches the stage; stacked → in-view autoplay.
                        autoplay={mode === "stacked" || (mode === "pinned" && i <= maxActive)}
                      />
                    ) : (
                      <SearchMockup />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Progress dots (desktop only) */}
            <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-2">
              {STAGES.map((stage, i) => (
                <span
                  key={stage.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active ? "w-8 bg-gray-900" : "w-1.5 bg-gray-300",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
