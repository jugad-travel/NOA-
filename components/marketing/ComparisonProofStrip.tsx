import { comparisonProofs } from "@/lib/comparison"

export function ComparisonProofStrip() {
  return (
    <dl className="grid overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm grid-cols-2 lg:grid-cols-4">
      {comparisonProofs.map((proof, index) => (
        <div key={proof.label} className={`p-5 text-center md:p-7 ${index % 2 ? "border-l border-gray-200" : ""} ${index > 1 ? "border-t border-gray-200 lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-gray-200" : ""}`}>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">{proof.label}</dt>
          <dd className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-gray-950 md:text-3xl">{proof.value}</dd>
        </div>
      ))}
    </dl>
  )
}
