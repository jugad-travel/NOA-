"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, Code2, ShoppingBag, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  produits: [
    { name: "Recherche conversationnelle", href: "/moteur-recherche-conversationnel-ecommerce" },
    { name: "Aide au choix", href: "/produits#parcel-match" },
    { name: "Questions produit", href: "/produits#parcel-expert" },
    { name: "Comparaison", href: "/produits#parcel-comparaison" },
    { name: "Analytics & Insights", href: "/produits#analytics-insights" },
  ],
  ressources: [
    { name: "Blog", href: "/ressources#blog" },
    { name: "Simulateur de scénario", href: "/ressources/simulateur-roi" },
    { name: "Intégrations", href: "/integrations-tech" },
  ],
  entreprise: [
    { name: "À propos", href: "/a-propos" },
    { name: "Démo", href: "/demo" },
    { name: "Contact", href: "mailto:vianney@parcel-ia.com?subject=Contact PARCEL" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
}

const securityFeatures = [
  { icon: ShoppingBag, label: "App Shopify" },
  { icon: Code2, label: "API CMS-agnostique" },
  { icon: BarChart3, label: "Analytics & Insights" },
  { icon: ShieldCheck, label: "Données maîtrisées" },
]

export function Footer() {
  return (
    <footer className="bg-dark-300 border-t border-white/5">
      {/* Security Strip */}
      <div className="border-b border-white/5">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {securityFeatures.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2 text-gray-400">
                <feature.icon className="w-4 h-4 text-brand" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo-parcel.png"
                alt="PARCEL Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              L’assistant d’achat IA et le moteur de recherche conversationnel pour votre e-commerce.
            </p>
            <Link href="/demo">
              <Button variant="primary" size="md" magnetic>
                Réserver une démo
              </Button>
            </Link>
          </div>
          
          {/* Produits */}
          <div>
            <h4 className="text-white font-normal mb-4">Produits</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ressources */}
          <div>
            <h4 className="text-white font-normal mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Entreprise */}
          <div>
            <h4 className="text-white font-normal mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Légal */}
          <div>
            <h4 className="text-white font-normal mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>© {new Date().getFullYear()}</span>
            <Image
              src="/images/logo-parcel.png"
              alt="PARCEL Logo"
              width={60}
              height={30}
              className="object-contain"
            />
            <span>Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Site & données</span>
            <span>•</span>
            <Link href="/confidentialite" className="hover:text-brand transition-colors">Confidentialité</Link>
            <span>•</span>
            <a href="mailto:vianney@parcel-ia.com?subject=Contact PARCEL" className="hover:text-brand transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
