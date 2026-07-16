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
    default: "Assistant d’achat IA pour e-commerce | Parcel",
    template: "%s | PARCEL",
  },
  description:
    "Assistant d’achat IA et moteur de recherche conversationnel pour e-commerce. Parcel comprend le besoin et recommande les bons produits.",
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
    title: "Assistant d’achat IA pour e-commerce | Parcel",
    description:
      "Assistant d’achat IA et moteur de recherche conversationnel pour e-commerce. Parcel comprend le besoin et recommande les bons produits.",
    images: [
      {
        url: "/images/Logo Parcel sans écriture.png",
        width: 1200,
        height: 630,
        alt: "Parcel, assistant d’achat IA pour e-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistant d’achat IA pour e-commerce | Parcel",
    description:
      "Assistant d’achat IA et moteur de recherche conversationnel pour e-commerce. Parcel comprend le besoin et recommande les bons produits.",
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
        "Parcel développe un assistant d’achat IA et un moteur de recherche conversationnel pour les sites e-commerce.",
      sameAs: [],
    },
    {
      "@type": "Service",
      "@id": "https://parcel-ia.com/#service",
      name: "Parcel — Assistant d’achat IA pour e-commerce",
      serviceType: "Assistant d’achat IA et recherche conversationnelle e-commerce",
      description:
        "Parcel comprend les besoins exprimés en langage naturel, recommande les bons produits et guide les clients jusqu’à l’achat.",
      provider: {
        "@id": "https://parcel-ia.com/#organization",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "E-commerçants et enseignes retail",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://parcel-ia.com/#website",
      url: "https://parcel-ia.com",
      name: "Parcel — Assistant d’achat IA",
      description:
        "Assistant d’achat IA et moteur de recherche conversationnel pour e-commerce.",
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
