"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PerformanceMetrics } from "@/components/home/PerformanceMetrics"
import { SHOPIFY_APP_STORE_URL } from "@/lib/videos"

export function Hero() {
  return (
    <section id="benchmarks" className="relative overflow-hidden bg-white py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-between gap-5 border-y border-gray-200 py-5 sm:flex-row md:mb-16">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f1fff5]">
              <Image src="/images/Logo shopify .webp" alt="Shopify" width={30} height={30} className="size-8 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Parcel est disponible sur Shopify</p>
              <p className="mt-0.5 text-sm text-gray-500">Installez l’app directement depuis le Shopify App Store.</p>
            </div>
          </div>
          <a
            href={SHOPIFY_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Voir l’app Shopify
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mx-auto mb-2 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">Benchmarks marché</p>
          <h2 className="mt-3 text-2xl font-normal text-gray-900 md:text-4xl">
            Des impacts business déjà observés dans l’e-commerce
          </h2>
        </div>
        <PerformanceMetrics />
      </div>
    </section>
  )
}
