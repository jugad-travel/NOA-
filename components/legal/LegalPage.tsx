import type { ReactNode } from "react"
import Link from "next/link"

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="bg-white pb-24 pt-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">{eyebrow}</p>
            <h1 className="mb-4 text-4xl font-normal text-gray-900 md:text-6xl">{title}</h1>
            <p className="text-sm text-gray-500">Dernière mise à jour : {updated}</p>
          </div>

          <div className="legal-copy space-y-10 text-gray-700">{children}</div>

          <div className="mt-14 border-t border-gray-200 pt-8">
            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-normal text-gray-900 md:text-3xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed">{children}</div>
    </section>
  )
}
