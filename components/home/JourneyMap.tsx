"use client"

import * as React from "react"
import { ArrowDown } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const stages = [
  {
    id: "recherche",
    label: "Découverte",
    description: "Transformer un besoin encore flou en sélection pertinente.",
  },
  {
    id: "match",
    label: "Catégorie",
    description: "Qualifier l’usage et orienter vers le bon produit.",
  },
  {
    id: "expert",
    label: "Fiche produit",
    description: "Répondre aux questions qui bloquent la décision.",
  },
  {
    id: "comparaison",
    label: "Comparaison",
    description: "Expliquer les différences selon l’usage réel.",
  },
  {
    id: "projet",
    label: "Panier",
    description: "Compléter le projet avec des produits cohérents.",
  },
  {
    id: "sav",
    label: "SAV",
    description: "Répondre depuis les politiques réelles de la boutique.",
  },
]

export function JourneyMap() {
  const [activeId, setActiveId] = React.useState<string | null>(null)
  const activeIndex = stages.findIndex((stage) => stage.id === activeId)
  const activeStage = activeIndex >= 0 ? stages[activeIndex] : null

  const openDemo = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault()
    window.dispatchEvent(new CustomEvent<number>("parcel:funnel-stage", { detail: index }))
  }

  return (
    <Section
      id="funnel-parcel"
      variant="white"
      padding="sm"
      className="scroll-mt-20 border-y border-gray-100 py-10 md:py-14"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-6xl" onMouseLeave={() => setActiveId(null)}>
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 md:mb-9">
            Parcel sur tout le funnel de vente
          </p>

          <div className="no-scrollbar overflow-x-auto pb-1">
            <div className="relative min-w-[720px] px-4">
              <div className="absolute left-[9%] right-[9%] top-[5px] h-px bg-gray-300" aria-hidden="true" />
              <div className="relative grid grid-cols-6" role="tablist" aria-label="Étapes du funnel de vente">
                {stages.map((stage) => {
                  const isActive = stage.id === activeId

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveId(stage.id)}
                      onFocus={() => setActiveId(stage.id)}
                      onClick={() => setActiveId(stage.id)}
                      className="group flex flex-col items-center bg-transparent px-2 text-center focus:outline-none focus-visible:outline-none"
                      style={{ outline: "none" }}
                    >
                      <span
                        className={`relative mb-4 block size-[11px] rounded-full border-2 border-white ring-1 transition-colors ${
                          isActive ? "bg-gray-900 ring-gray-900" : "bg-white ring-gray-400 group-hover:bg-gray-900 group-hover:ring-gray-900"
                        }`}
                      />
                      <span className={`text-sm transition-colors ${isActive ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                        {stage.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex min-h-10 items-center justify-center px-4">
            {activeStage ? (
              <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-5">
                <p className="text-sm text-gray-600">{activeStage.description}</p>
                <a
                  href={`#funnel-stage-${activeStage.id}`}
                  onClick={(event) => openDemo(event, activeIndex)}
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-gray-900 hover:gap-2.5"
                >
                  Voir la démo
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
