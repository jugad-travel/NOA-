import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import type { HeadToHeadComparison } from "@/lib/comparison"
import { comparisonVerifiedLabel } from "@/lib/comparison"

type HeadToHeadCardProps = {
  comparison: HeadToHeadComparison
  actions?: boolean
}

export function HeadToHeadCard({ comparison, actions = false }: HeadToHeadCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-200 px-6 py-6 md:flex-row md:items-start md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Parcel vs {comparison.name}</p>
          <h3 className="mt-3 text-2xl font-semibold text-gray-950 md:text-3xl">Parcel face à {comparison.name}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">{comparison.intro}</p>
        </div>
        <span className="shrink-0 text-xs font-medium text-gray-400">Sources · {comparisonVerifiedLabel}</span>
      </div>

      <div className="grid border-b border-gray-200 text-sm sm:grid-cols-[1.2fr_0.8fr] md:grid-cols-[1.35fr_0.85fr]">
        <div className="bg-[#eef4ff] px-5 py-4 font-semibold text-blue-900 md:px-8">Parcel</div>
        <div className="border-t border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-gray-700 sm:border-l sm:border-t-0 md:px-8">{comparison.name}</div>
      </div>
      {comparison.rows.map((row) => (
        <div key={row.label} className="grid border-b border-gray-200 sm:grid-cols-[1.2fr_0.8fr] md:grid-cols-[1.35fr_0.85fr]">
          <div className="bg-[#f6f8ff] px-5 py-5 md:px-8 md:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">{row.label}</p>
            <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-relaxed text-gray-950 md:text-base"><Check className="mt-1 size-4 shrink-0 text-blue-700" />{row.parcel.primary}</p>
            {row.parcel.secondary ? <p className="ml-6 mt-1 text-xs leading-relaxed text-gray-600">{row.parcel.secondary}</p> : null}
          </div>
          <div className="border-t border-gray-200 bg-white px-5 py-5 sm:border-l sm:border-t-0 md:px-8 md:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">{row.label}</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-800 md:text-base">{row.competitor.primary}</p>
            {row.competitor.secondary ? <p className="mt-1 text-xs leading-relaxed text-gray-500">{row.competitor.secondary}</p> : null}
          </div>
        </div>
      ))}
      <div className="px-6 py-6 md:px-8">
        <p className="text-sm leading-relaxed text-gray-600"><strong className="text-gray-900">À savoir :</strong> {comparison.note}</p>
        {actions ? (
          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row">
            <Link href="/demo" className={buttonVariants({ variant: "secondary", size: "lg" })}>Tester Parcel <ArrowRight className="size-4" /></Link>
            <a href={comparison.sourceUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "lg" })}>Voir la source <ArrowUpRight className="size-4" /></a>
          </div>
        ) : null}
      </div>
    </article>
  )
}
