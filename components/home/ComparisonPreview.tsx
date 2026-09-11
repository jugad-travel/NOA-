"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ComparisonProofStrip } from "@/components/marketing/ComparisonProofStrip"
import { HeadToHeadCard } from "@/components/marketing/HeadToHeadCard"
import { buttonVariants } from "@/components/ui/button-variants"
import { headToHeadComparisons, type CompetitorId } from "@/lib/comparison"
import { cn } from "@/lib/utils"

export function ComparisonPreview() {
  const [selected, setSelected] = React.useState<CompetitorId>("iadvize")
  const comparison = headToHeadComparisons.find((item) => item.id === selected) ?? headToHeadComparisons[0]

  return (
    <section className="bg-[#f7f8fb] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Comparatif 2026</p>
          <h2 className="text-3xl font-normal leading-tight text-gray-950 md:text-5xl">Parcel face aux principales solutions d’IA e-commerce</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">Chaque solution est évaluée sur exactement les mêmes huit critères : funnel, Search, actions transactionnelles, règles métier, UX, ingestion, accompagnement et prix.</p>
        </div>

        <ComparisonProofStrip />

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-3 sm:flex-row sm:pl-6">
          <p className="text-sm font-semibold text-gray-900">Comparer Parcel à :</p>
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto" role="tablist" aria-label="Choisir un concurrent">
            {headToHeadComparisons.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected === item.id}
                onClick={() => setSelected(item.id)}
                className={cn("rounded-full px-4 py-2.5 text-sm font-semibold transition-colors", selected === item.id ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-950")}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5" key={comparison.id}>
          <HeadToHeadCard comparison={comparison} />
        </div>

        <div className="mt-8 text-center">
          <Link href={`/comparatif-assistant-ia-ecommerce#parcel-vs-${comparison.id}`} className={buttonVariants({ variant: "secondary", size: "xl" })}>Comparer en détail <ArrowRight className="size-5" /></Link>
        </div>
      </div>
    </section>
  )
}
