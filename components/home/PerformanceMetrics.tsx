import { pricingProofPoints } from "@/lib/pricing"

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
      {pricingProofPoints.map((proof) => (
        <div key={proof.label} className="min-h-28 p-4 text-center md:p-5">
          <p className="text-xl font-semibold tracking-[-0.03em] text-gray-950 md:text-2xl">{proof.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-gray-500">{proof.label}</p>
        </div>
      ))}
    </div>
  )
}
