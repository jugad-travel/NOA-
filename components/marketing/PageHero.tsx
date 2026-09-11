import type { ReactNode } from "react"
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  breadcrumbs?: readonly { name: string; href?: string }[]
  aside?: ReactNode
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumbs, aside, children }: PageHeroProps) {
  return (
    <section className="bg-white px-4 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d9f7fb] via-[#b8c8ff] to-[#ffb99b] px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          <div className={`grid gap-10 ${aside ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-end" : ""}`}>
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">{eyebrow}</p>
              <h1 className="text-4xl font-normal leading-[1.04] tracking-[-0.045em] text-gray-950 md:text-6xl">
                {title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">{description}</p>
              {children ? <div className="mt-9">{children}</div> : null}
            </div>
            {aside}
          </div>
        </div>
      </div>
    </section>
  )
}
