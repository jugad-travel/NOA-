import type { Metadata } from "next"
import { ROICalculator } from "@/components/home/ROICalculator"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { StructuredData } from "@/components/marketing/StructuredData"
import { SITE_URL } from "@/lib/marketing"

export const metadata: Metadata = {
  title: "Simulateur ROI",
  description:
    "Estimez un ROI potentiel à partir de vos propres hypothèses de trafic, conversion, panier et investissement.",
  alternates: { canonical: "/ressources/simulateur-roi" },
  openGraph: { title: "Simulateur ROI | Parcel", description: "Testez vos propres hypothèses sans gain imposé ni promesse de performance.", url: "/ressources/simulateur-roi" },
  twitter: { card: "summary_large_image", title: "Simulateur ROI | Parcel", description: "Construisez une estimation transparente à partir de vos données." },
}

export default function SimulateurROIPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` }, { "@type": "ListItem", position: 3, name: "Simulateur ROI", item: `${SITE_URL}/ressources/simulateur-roi` }] }
  return (
    <><StructuredData data={breadcrumbs} /><div className="pt-20">
      {/* Hero Section */}
      <Section variant="white" padding="lg" className="relative overflow-hidden py-8 md:py-12">
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative rounded-3xl mx-4 md:mx-8 p-8 md:p-10 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #d0f7fb 0%, #83a6ff 40%, #ff966b 100%)",
            }}
          >
            <ScrollReveal>
              <div className="text-center">
                <Badge className="mb-6 bg-white/90 text-gray-900">Simulateur transparent</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Testez vos propres hypothèses
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Modifiez chaque variable et visualisez le résultat. Aucun gain n’est présumé ni garanti : la référence reste la mesure sur votre trafic réel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Calculator */}
      <ROICalculator />
    </div></>
  )
}
