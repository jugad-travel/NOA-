import { comparisonRows, competitorComparisonData } from "@/lib/comparison"

type ComparisonTableProps = {
  compact?: boolean
}

export function ComparisonTable({ compact = false }: ComparisonTableProps) {
  const rows = compact
    ? comparisonRows.filter((row) => ["positioning", "search", "funnel", "rules", "price"].includes(row.id))
    : comparisonRows

  return (
    <div className="comparison-scroll overflow-x-auto rounded-[1.75rem] border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[1120px] border-separate border-spacing-0 text-left text-sm">
        <caption className="sr-only">
          Comparaison factuelle de Parcel, Doofinder, iAdvize, Algolia et Rep AI.
        </caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-20 w-52 border-b border-r border-gray-200 bg-gray-50 px-5 py-5 font-semibold text-gray-500"
            >
              Critère
            </th>
            {competitorComparisonData.map((product) => (
              <th
                key={product.id}
                scope="col"
                className={`w-56 border-b border-gray-200 px-5 py-5 align-top ${
                  product.id === "parcel" ? "bg-[#eef4ff]" : "bg-gray-50"
                }`}
              >
                <span className="block text-base font-semibold text-gray-950">{product.name}</span>
                <span className="mt-1 block text-xs font-normal leading-relaxed text-gray-500">{product.category}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th
                scope="row"
                className="sticky left-0 z-10 border-b border-r border-gray-200 bg-white px-5 py-5 font-semibold leading-snug text-gray-900"
              >
                {row.label}
              </th>
              {competitorComparisonData.map((product) => (
                <td
                  key={product.id}
                  className={`border-b border-gray-200 px-5 py-5 align-top leading-relaxed text-gray-600 ${
                    product.id === "parcel" ? "bg-[#f6f8ff] font-medium text-gray-900" : "bg-white"
                  }`}
                >
                  {product.data[row.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
