"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { MERCHANT_APP_URL, primaryNavigation } from "@/lib/marketing"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => setIsMobileMenuOpen(false), [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("transition-all duration-500 ease-out", isScrolled ? "px-4 pt-3" : "px-0 pt-0")}>
        <nav
          aria-label="Navigation principale"
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            isScrolled
              ? "max-w-fit rounded-full border border-gray-200 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-xl"
              : "container bg-transparent py-4",
          )}
        >
          <div className={cn("flex items-center transition-all duration-500 ease-out", isScrolled ? "justify-center gap-0.5" : "justify-between")}>
            <Link
              href="/"
              aria-label="Parcel — Accueil"
              className={cn(
                "flex items-center justify-center transition-all duration-500",
                isScrolled ? "h-9 rounded-full bg-white px-2 shadow-sm hover:bg-gray-50" : "h-10 bg-transparent hover:opacity-80",
                isActive("/") && isScrolled && "bg-gray-100 hover:bg-gray-200",
              )}
            >
              <Image src="/images/logo-parcel.png" alt="Parcel" width={100} height={48} className="translate-y-0.5 object-contain" priority />
            </Link>

            <div className="hidden items-center gap-0.5 xl:flex">
              {primaryNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => "children" in item && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors 2xl:px-3.5 2xl:text-sm",
                      isActive(item.href) ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                  >
                    {item.name}
                    {"children" in item ? <ChevronDown className={cn("size-3.5 transition-transform", openDropdown === item.name && "rotate-180")} /> : null}
                  </Link>

                  <AnimatePresence>
                    {"children" in item && openDropdown === item.name ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-72 pt-2"
                      >
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-lg">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ))}

              <a href={MERCHANT_APP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full px-2.5 py-2 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 2xl:px-3.5 2xl:text-sm">
                Espace Marchand
              </a>
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: isScrolled ? "sm" : "md", className: isScrolled ? "ml-1" : "ml-2" })}>
                Réserver une démo
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="p-2 text-gray-700 transition-colors hover:text-gray-900 xl:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-gray-100 bg-white xl:hidden"
          >
            <div className="container space-y-2 py-5">
              {primaryNavigation.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className={cn("block py-2.5 text-base font-medium", isActive(item.href) ? "text-gray-900" : "text-gray-600")}>
                    {item.name}
                  </Link>
                  {"children" in item ? (
                    <div className="mb-2 ml-3 border-l border-gray-200 pl-4">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block py-2 text-sm text-gray-500 hover:text-gray-900">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="grid gap-3 border-t border-gray-100 pt-4 sm:grid-cols-2">
                <a href={MERCHANT_APP_URL} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>Espace Marchand</a>
                <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })}>Réserver une démo</Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
