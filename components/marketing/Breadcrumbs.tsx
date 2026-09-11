import Link from "next/link"

type Breadcrumb = {
  name: string
  href?: string
}

export function Breadcrumbs({ items, dark = false }: { items: readonly Breadcrumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Fil d’Ariane" className="mb-8">
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${dark ? "text-blue-100/65" : "text-gray-500"}`}>
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className={dark ? "hover:text-white" : "hover:text-gray-950"}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? "text-white" : "text-gray-950"}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
