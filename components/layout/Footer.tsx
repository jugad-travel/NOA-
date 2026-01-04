"use client"

import * as React from "react"
import Link from "next/link"
import { Shield, Lock, Server, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  produits: [
    { name: "NOA Projet", href: "/produits#noa-projet" },
    { name: "NOA Match", href: "/produits#noa-match" },
    { name: "NOA Expert", href: "/produits#noa-expert" },
    { name: "NOA Complete", href: "/produits#noa-complete" },
  ],
  ressources: [
    { name: "Blog", href: "/ressources#blog" },
    { name: "Études de cas", href: "/ressources#etudes-de-cas" },
    { name: "Centre d'aide", href: "/ressources#centre-aide" },
  ],
  entreprise: [
    { name: "Intégrations & Tech", href: "/integrations-tech" },
    { name: "Démo", href: "/demo" },
    { name: "Contact", href: "/demo" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGU", href: "#" },
  ],
}

const securityFeatures = [
  { icon: Shield, label: "RGPD" },
  { icon: Lock, label: "Isolation" },
  { icon: Server, label: "Hébergement sécurisé" },
  { icon: FileCheck, label: "IT policies" },
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
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <span className="text-dark-200 font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-white">NOA</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Le premier conseiller de vente IA qui vend comme en magasin.
            </p>
            <Link href="/demo">
              <Button variant="primary" size="md" magnetic>
                Réserver une démo
              </Button>
            </Link>
          </div>
          
          {/* Produits */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produits</h4>
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
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
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
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
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
            <h4 className="text-white font-semibold mb-4">Légal</h4>
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
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NOA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Sécurité & conformité</span>
            <span>•</span>
            <span>RGPD</span>
            <span>•</span>
            <Link href="/demo" className="hover:text-brand transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

