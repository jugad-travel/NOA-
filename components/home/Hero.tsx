import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PerformanceMetrics } from "@/components/home/PerformanceMetrics"
import { SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

export function Hero() {
  return (
    <section aria-label="Preuves Parcel" className="bg-white px-4 pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="container">
        <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-[#071630] p-5 text-white sm:flex-row sm:items-center sm:justify-between md:px-7">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white">
              <Image src="/images/Logo shopify .webp" alt="Shopify" width={34} height={34} className="size-8 object-contain" />
            </div>
            <div>
              <p className="text-base font-semibold text-white">Installé sur Shopify en {SHOPIFY_INSTALL_TIME} top chrono.</p>
              <p className="mt-0.5 text-sm text-blue-100/65">Application native, puis configuration métier avec l’équipe Parcel.</p>
            </div>
          </div>
          <a href={SHOPIFY_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 hover:bg-blue-50">
            Installer Parcel
            <ArrowUpRight className="size-4" />
          </a>
        </div>
        <PerformanceMetrics />
      </div>
    </section>
  )
}
