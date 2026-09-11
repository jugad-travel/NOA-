import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://parcel-ia.com"),
  title: {
    default: "Vendeur IA e-commerce configuré selon votre façon de vendre | Parcel",
    template: "%s | Parcel",
  },
  description:
    "Parcel transforme votre catalogue, vos règles métier et votre expertise produit en vendeur IA intégré à votre site e-commerce.",
  authors: [{ name: "PARCEL" }],
  creator: "PARCEL",
  publisher: "PARCEL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://parcel-ia.com",
    siteName: "PARCEL",
    title: "Votre façon de vendre, à l’échelle | Parcel",
    description:
      "Recherche, conseil produit, comparaison et panier selon la logique de vente de votre équipe.",
    images: [
      {
        url: "/images/Hero site parcel sans texte.png",
        width: 1200,
        height: 630,
        alt: "Expérience d’achat IA Parcel intégrée à un site e-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre façon de vendre, à l’échelle | Parcel",
    description:
      "Le vendeur IA configuré selon votre catalogue et votre logique métier.",
    images: ["/images/Hero site parcel sans texte.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://parcel-ia.com/#organization",
      name: "PARCEL",
      url: "https://parcel-ia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://parcel-ia.com/images/Logo Parcel sans écriture.png",
      },
      description:
        "Parcel développe un vendeur IA e-commerce configuré selon le catalogue, les règles métier et la façon de vendre du marchand.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://parcel-ia.com/#website",
      url: "https://parcel-ia.com",
      name: "Parcel — Vendeur IA e-commerce",
      description:
        "Recherche e-commerce, conseil produit, comparaison, panier et données d’intention selon la logique du marchand.",
      publisher: {
        "@id": "https://parcel-ia.com/#organization",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-gray-700"
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
