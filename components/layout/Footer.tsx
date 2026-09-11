import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { footerNavigation, MERCHANT_APP_URL, SHOPIFY_APP_STORE_URL, SHOPIFY_INSTALL_TIME } from "@/lib/marketing"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#071630] text-white">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <div className="max-w-md">
            <Link href="/" aria-label="Parcel — Accueil" className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image src="/images/logo-parcel.png" alt="Parcel" width={112} height={44} className="h-auto w-24 object-contain" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-blue-100/70">
              Parcel transforme votre catalogue et votre expertise de vente en expérience d’achat IA. Recherche, conseil produit, comparaison, cross-sell et données d’intention.
            </p>
            <a
              href={SHOPIFY_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Application Shopify · {SHOPIFY_INSTALL_TIME}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {Object.entries(footerNavigation).map(([group, links]) => (
            <div key={group}>
              <h2 className="mb-4 text-sm font-semibold capitalize tracking-wide text-white">{group}</h2>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-100/65 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blue-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Parcel. Conçu en France avec des e-commerçants.</p>
          <a href={MERCHANT_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Accéder à l’Espace Marchand
          </a>
        </div>
      </div>
    </footer>
  )
}
