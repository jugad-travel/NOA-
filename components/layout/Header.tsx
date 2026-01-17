"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Produits",
    href: "/produits",
    children: [
      { name: "NOA Projet", href: "/produits#noa-projet" },
      { name: "NOA Match", href: "/produits#noa-match" },
      { name: "NOA Expert", href: "/produits#noa-expert" },
      { name: "NOA Complete", href: "/produits#noa-complete" },
    ],
  },
  { name: "Intégrations & Tech", href: "/integrations-tech" },
  { name: "Ressources", href: "/ressources" },
  { name: "À propos", href: "/a-propos" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={cn(
          "transition-all duration-500 ease-out",
          isScrolled ? "pt-3 px-4" : "pt-0 px-0"
        )}
      >
        <nav 
          className={cn(
            "transition-all duration-500 ease-out mx-auto",
            isScrolled 
              ? "max-w-fit bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200 rounded-full py-2 px-3"
              : "container bg-transparent py-4"
          )}
        >
          <div className={cn(
            "flex items-center transition-all duration-500 ease-out",
            isScrolled 
              ? "justify-center gap-1" 
              : "justify-between"
          )}>
            {/* Logo - Left side (replaces Home button) */}
            <Link 
              href="/" 
              className={cn(
                "flex items-center justify-center transition-all duration-500",
                isScrolled 
                  ? "rounded-full bg-white shadow-sm hover:bg-gray-50 h-9 px-2" 
                  : "rounded-none bg-transparent shadow-none hover:opacity-80 h-10",
                isActive("/") && isScrolled && "bg-gray-100 hover:bg-gray-200"
              )}
            >
              <Image
                src="/images/Logo-NOA.png"
                alt="NOA Logo"
                width={100}
                height={48}
                className="object-contain translate-y-0.5"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
                      isActive(item.href)
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )} />
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* CTA Button - always visible, just moves position */}
              <a href="mailto:parcel.webai@gmail.com?subject=Demande de démo NOA">
                <button 
                  className={cn(
                    "font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-500",
                    isScrolled ? "h-9 px-4 text-sm" : "h-11 px-6 text-sm ml-2"
                  )}
                >
                  Réserver une démo
                </button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container py-6 space-y-4">
              {/* Mobile Logo */}
              <Link 
                href="/" 
                className="flex items-center mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/images/Logo-NOA.png"
                  alt="NOA Logo"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </Link>
              
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-lg font-medium transition-colors",
                      isActive(item.href) ? "text-gray-900" : "text-gray-600"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a href="mailto:parcel.webai@gmail.com?subject=Demande de démo NOA">
                  <button className="w-full h-12 px-8 text-sm font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all">
                    Réserver une démo
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
