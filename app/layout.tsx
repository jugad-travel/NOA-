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
  title: {
    default: "PARCEL - Le premier conseiller de vente IA qui vend comme en magasin",
    template: "%s | PARCEL",
  },
  description:
    "À chaque étape du parcours client, PARCEL accompagne, conseille avec précision et convertit. Transformez votre site en vendeur digital performant.",
  keywords: [
    "conseiller de vente IA",
    "e-commerce",
    "conversion",
    "chatbot",
    "intelligence artificielle",
    "vente en ligne",
    "PARCEL",
    "panier moyen",
    "CRO",
  ],
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
    title: "PARCEL - Le premier conseiller de vente IA qui vend comme en magasin",
    description:
      "À chaque étape du parcours client, PARCEL accompagne, conseille avec précision et convertit. Transformez votre site en vendeur digital performant.",
    images: [
      {
        url: "/images/Logo Parcel sans écriture.png",
        width: 1200,
        height: 630,
        alt: "PARCEL - Conseiller de vente IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PARCEL - Le premier conseiller de vente IA qui vend comme en magasin",
    description:
      "À chaque étape du parcours client, PARCEL accompagne, conseille avec précision et convertit.",
    images: ["/images/Logo Parcel sans écriture.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
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
        "PARCEL — Le conseiller de vente IA unique, présent tout au long du parcours client. PARCEL accompagne vos visiteurs, du premier besoin exprimé jusqu'à la décision d'achat.",
      sameAs: [],
    },
    {
      "@type": "Product",
      "@id": "https://parcel-ia.com/#product",
      name: "PARCEL - Suite de conseillers de vente IA",
      description:
        "Suite de 4 conseillers de vente IA : PARCEL Projet, PARCEL Match, PARCEL Expert, PARCEL Complete. Compatible Shopify, Magento, WooCommerce.",
      brand: {
        "@type": "Brand",
        name: "PARCEL",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
        seller: {
          "@id": "https://parcel-ia.com/#organization",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://parcel-ia.com/#website",
      url: "https://parcel-ia.com",
      name: "PARCEL",
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
