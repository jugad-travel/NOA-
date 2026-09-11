"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JourneyMap } from "@/components/home/JourneyMap"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { VIDEOS } from "@/lib/videos"
import { cn } from "@/lib/utils"

type Stage = {
  id: string
  kicker: string
  title: string
  copy: string
  videoId: string
  href: string
}

// The purchase journey, in order. One pinned screen: stages slide in from
// alternating sides while the visitor scrolls (Bonnotte-style pin + scrub).
const STAGES: Stage[] = [
  {
    id: "recherche",
    kicker: "Recherche",
    title: "Trouver sans connaître le bon mot-clé",
    copy:
      "Une requête précise obtient immédiatement ses résultats. Lorsqu’un visiteur décrit un usage, Parcel comprend l’intention, pose les questions utiles et transforme le besoin en critères de recherche.",
    videoId: VIDEOS.match,
    href: "/moteur-recherche-conversationnel-ecommerce",
  },
  {
    id: "projet",
    kicker: "Découverte / projet",
    title: "Transformer un projet en sélection cohérente",
    copy:
      "Un trek, une chambre ou une routine demandent plusieurs produits qui fonctionnent ensemble. Parcel décompose le projet, distingue les besoins et construit une sélection ajustable.",
    videoId: VIDEOS.projet,
    href: "/produits/besoin-global",
  },
  {
    id: "expert",
    kicker: "Fiche produit",
    title: "Lever un doute avant l’ajout au panier",
    copy:
      "Taille, compatibilité, usage, composition ou entretien : Parcel répond à partir des informations disponibles sur la fiche produit et signale clairement les données manquantes.",
    videoId: VIDEOS.expert,
    href: "/produits/questions-produit",
  },
  {
    id: "comparaison",
    kicker: "Comparaison",
    title: "Arbitrer entre plusieurs produits",
    copy:
      "Parcel sélectionne les critères utiles à l’usage exprimé, explique les différences et peut conclure qu’aucun des produits comparés ne répond réellement au besoin.",
    videoId: VIDEOS.comparaison,
    href: "/produits/comparaison",
  },
  {
    id: "panier",
    kicker: "Panier",
    title: "Compléter intelligemment un achat",
    copy:
      "Le besoin exprimé plus tôt contextualise les compléments proposés au moment de l’ajout au panier. Chaque recommandation reste justifiée et ajustable.",
    videoId: VIDEOS.panier,
    href: "/produits/panier-complements",
  },
  {
    id: "sav",
    kicker: "Après-vente",
    title: "Répondre avec les bonnes informations",
    copy:
      "Parcel peut répondre aux demandes documentées à partir des politiques disponibles de la boutique et proposer un relais lorsque la situation demande une intervention humaine.",
    videoId: VIDEOS.sav,
    href: "/produits/service-apres-vente",
  },
]

export function FunnelSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const pinRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)
  const [mode, setMode] = React.useState<"pending" | "pinned" | "stacked">("pending")
  const [pinCentered, setPinCentered] = React.useState(false)

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
          id: "parcel-funnel",
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

  React.useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return

    let frameId = 0
    const syncPinnedAlignment = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const top = pinRef.current?.getBoundingClientRect().top
        if (top !== undefined) setPinCentered(top <= 1)
      })
    }

    syncPinnedAlignment()
    window.addEventListener("scroll", syncPinnedAlignment, { passive: true })
    window.addEventListener("resize", syncPinnedAlignment)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", syncPinnedAlignment)
      window.removeEventListener("resize", syncPinnedAlignment)
    }
  }, [])

  React.useEffect(() => {
    const handleStageNavigation = (event: Event) => {
      const requestedIndex = Number((event as CustomEvent<number>).detail)
      const index = Math.min(STAGES.length - 1, Math.max(0, requestedIndex))
      if (!Number.isFinite(index)) return

      setActive(index)

      const desktop = window.matchMedia("(min-width: 768px)").matches
      const trigger = desktop ? ScrollTrigger.getById("parcel-funnel") : undefined

      if (trigger) {
        const progress = STAGES.length > 1 ? index / (STAGES.length - 1) : 0
        window.scrollTo({
          top: trigger.start + (trigger.end - trigger.start) * progress,
          behavior: "smooth",
        })
        return
      }

      document.getElementById(`funnel-stage-${STAGES[index].id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }

    window.addEventListener("parcel:funnel-stage", handleStageNavigation)
    return () => window.removeEventListener("parcel:funnel-stage", handleStageNavigation)
  }, [])

  return (
    <section ref={sectionRef} id="funnel" className="bg-off-white">
      {/* Section intro */}
      <div className="container px-4 pb-4 pt-20 text-center md:px-6 md:pb-6 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-4">
          Les moments de décision
        </p>
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 max-w-3xl mx-auto leading-tight">
          Un vendeur présent partout où le client hésite.
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Recherche, découverte, fiche produit, comparaison, panier et après-vente :
          la même compréhension du besoin accompagne le visiteur.
        </p>
      </div>

      <JourneyMap />

      {/* Pinned stage (desktop) / stacked cards (mobile) */}
      <div ref={pinRef} className="relative md:h-screen md:overflow-hidden">
        <div className="container px-4 md:px-6 h-full">
          <div className="relative h-full">
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                id={`funnel-stage-${stage.id}`}
                className={cn(
                  "funnel-panel py-10 md:py-0",
                  "md:absolute md:inset-0 md:flex md:items-center",
                )}
              >
                <div
                  className={cn(
                    "grid w-full items-center gap-8 md:grid-cols-2 md:gap-16 md:transition-transform md:duration-300 md:ease-out",
                    !pinCentered && "md:translate-y-[calc(-50vh+4rem+50%)]",
                  )}
                >
                  <div className={cn("max-w-xl", i % 2 === 1 && "md:order-2 md:justify-self-end")}>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
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
                    <YouTubeEmbed
                      videoId={stage.videoId}
                      title={stage.title}
                      // Desktop épinglé : seule l'étape active joue (et
                      // uniquement tant que le funnel est à l'écran, la
                      // visibilité étant gérée dans YouTubeEmbed). Mobile
                      // empilé : c'est la visibilité qui décide.
                      active={mode === "pinned" ? i === active : undefined}
                    />
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
