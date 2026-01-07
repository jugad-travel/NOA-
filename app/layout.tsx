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
    default: "NOA - Le premier conseiller de vente IA qui vend comme en magasin",
    template: "%s | NOA",
  },
  description:
    "À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit. Transformez votre site en vendeur digital performant.",
  keywords: [
    "conseiller de vente IA",
    "e-commerce",
    "conversion",
    "chatbot",
    "intelligence artificielle",
    "vente en ligne",
    "NOA",
    "panier moyen",
    "CRO",
  ],
  authors: [{ name: "NOA" }],
  creator: "NOA",
  publisher: "NOA",
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
    url: "https://noa.ai",
    siteName: "NOA",
    title: "NOA - Le premier conseiller de vente IA qui vend comme en magasin",
    description:
      "À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit. Transformez votre site en vendeur digital performant.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOA - Conseiller de vente IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOA - Le premier conseiller de vente IA qui vend comme en magasin",
    description:
      "À chaque étape du parcours client, NOA accompagne, conseille avec précision et convertit.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://noa.ai/#organization",
      name: "NOA",
      url: "https://noa.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://noa.ai/logo.png",
      },
      description:
        "NOA est une suite de conseillers de vente IA pour e-commerce, conçus pour intervenir aux moments clés du parcours client.",
      sameAs: [],
    },
    {
      "@type": "Product",
      "@id": "https://noa.ai/#product",
      name: "NOA - Suite de conseillers de vente IA",
      description:
        "Suite de 4 conseillers de vente IA : NOA Projet, NOA Match, NOA Expert, NOA Complete. Compatible Shopify, Magento, WooCommerce.",
      brand: {
        "@type": "Brand",
        name: "NOA",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
        seller: {
          "@id": "https://noa.ai/#organization",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://noa.ai/#website",
      url: "https://noa.ai",
      name: "NOA",
      publisher: {
        "@id": "https://noa.ai/#organization",
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
