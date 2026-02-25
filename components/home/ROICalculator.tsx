"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

const industries = [
  "Mode & Accessoires",
  "Électronique & High-tech",
  "Sport & Outdoor",
  "Maison & Décoration",
  "Beauté & Cosmétiques",
  "Alimentation & Boissons",
  "Jouets & Enfants",
  "Automobile & Mobilité",
  "Autre",
]

export function ROICalculator() {
  const [sessions, setSessions] = React.useState<string>("")
  const [averageOrderValue, setAverageOrderValue] = React.useState<string>("")
  const [conversionRate, setConversionRate] = React.useState<string>("")
  const [industry, setIndustry] = React.useState<string>("")
  const [results, setResults] = React.useState<{
    currentRevenue: number
    newRevenue: number
    additionalRevenue: number
    roi: number
  } | null>(null)

  const calculateROI = () => {
    const sessionsNum = parseFloat(sessions.replace(/\s/g, ""))
    const aovNum = parseFloat(averageOrderValue.replace(/\s/g, "").replace(",", "."))
    const crNum = parseFloat(conversionRate.replace(/%/g, "").replace(",", "."))

    if (!sessionsNum || !aovNum || !crNum) {
      return
    }

    // Calculs basés sur les métriques PARCEL
    // PARCEL augmente le taux de conversion de 4x en moyenne
    const currentRevenue = sessionsNum * (crNum / 100) * aovNum
    const newConversionRate = crNum * 4 // 4x amélioration
    const newRevenue = sessionsNum * (newConversionRate / 100) * aovNum
    const additionalRevenue = newRevenue - currentRevenue

    // ROI basé sur un investissement estimé (exemple: 5% du CA supplémentaire)
    const estimatedInvestment = additionalRevenue * 0.05
    const roi = estimatedInvestment > 0 ? (additionalRevenue / estimatedInvestment) : 0

    setResults({
      currentRevenue,
      newRevenue,
      additionalRevenue,
      roi,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateROI()
  }

  const allFieldsFilled =
    sessions && averageOrderValue && conversionRate && industry

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(num)
  }

  const incrementValue = (
    currentValue: string,
    setter: (value: string) => void,
    step: number = 1
  ) => {
    const num = parseFloat(currentValue.replace(/\s/g, "").replace(",", ".")) || 0
    setter((num + step).toString())
  }

  const decrementValue = (
    currentValue: string,
    setter: (value: string) => void,
    step: number = 1
  ) => {
    const num = parseFloat(currentValue.replace(/\s/g, "").replace(",", ".")) || 0
    if (num > step) {
      setter((num - step).toString())
    } else {
      setter("0")
    }
  }

  return (
    <Section variant="white" padding="lg" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 relative">
          {/* Left Section - Dark Blue Background */}
          <div
            className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[600px]"
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-32 h-1 bg-pink-300/30 border-dashed border-t-2" />

            <ScrollReveal>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                  Calculez l'impact de PARCEL sur votre business
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: '#ffffff' }}>
                  Le simulateur de ROI vous donne une estimation précise de ce que vous pouvez
                  attendre de PARCEL. Nous garantissons un retour sur investissement de 5x ou
                  remboursement intégral.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Section - White Form */}
          <div className="bg-white p-6 md:p-8 lg:p-10 shadow-2xl relative z-10 -ml-4 md:-ml-8 rounded-l-2xl md:rounded-l-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sessions par mois */}
              <div className="space-y-2">
                <label htmlFor="sessions" className="text-sm font-medium text-gray-700 block">
                  Nombre de sessions/mois sur le site *
                </label>
                <div className="relative">
                  <input
                    id="sessions"
                    type="text"
                    value={sessions}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      setSessions(value)
                    }}
                    placeholder="10000"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border border-gray-200",
                      "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                      "pr-20 text-gray-900"
                    )}
                    required
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => incrementValue(sessions, setSessions, 1000)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-t"
                    >
                      <ArrowUp className="w-3 h-3 text-gray-500" />
                    </button>
                    <button
                      type="button"
                      onClick={() => decrementValue(sessions, setSessions, 1000)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-b"
                    >
                      <ArrowDown className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Valeur moyenne du panier */}
              <div className="space-y-2">
                <label htmlFor="aov" className="text-sm font-medium text-gray-700 block">
                  Valeur moyenne du panier (€) *
                </label>
                <div className="relative">
                  <input
                    id="aov"
                    type="text"
                    value={averageOrderValue}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d,.]/g, "")
                      setAverageOrderValue(value)
                    }}
                    placeholder="150"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border border-gray-200",
                      "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                      "pr-20 text-gray-900"
                    )}
                    required
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => incrementValue(averageOrderValue, setAverageOrderValue, 10)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-t"
                    >
                      <ArrowUp className="w-3 h-3 text-gray-500" />
                    </button>
                    <button
                      type="button"
                      onClick={() => decrementValue(averageOrderValue, setAverageOrderValue, 10)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-b"
                    >
                      <ArrowDown className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Taux de conversion actuel */}
              <div className="space-y-2">
                <label htmlFor="conversion" className="text-sm font-medium text-gray-700 block">
                  Taux de conversion actuel (%) *
                </label>
                <div className="relative">
                  <input
                    id="conversion"
                    type="text"
                    value={conversionRate}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d,.]/g, "")
                      setConversionRate(value)
                    }}
                    placeholder="3.1"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border border-gray-200",
                      "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                      "pr-20 text-gray-900"
                    )}
                    required
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => incrementValue(conversionRate, setConversionRate, 0.1)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-t"
                    >
                      <ArrowUp className="w-3 h-3 text-gray-500" />
                    </button>
                    <button
                      type="button"
                      onClick={() => decrementValue(conversionRate, setConversionRate, 0.1)}
                      className="w-6 h-4 flex items-center justify-center hover:bg-gray-100 rounded-b"
                    >
                      <ArrowDown className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Industrie */}
              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-gray-700 block">
                  Sélectionnez votre secteur *
                </label>
                <select
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border border-gray-200",
                    "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                    "text-gray-900 bg-white"
                  )}
                  required
                >
                  <option value="">Choisissez un secteur</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {!allFieldsFilled && (
                <p className="text-sm text-gray-500">Veuillez remplir tous les champs ci-dessus</p>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={!allFieldsFilled}
              >
                Calculer mon ROI
              </Button>

              {/* Results */}
              {results && (
                <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Résultats estimés</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">CA actuel (mensuel)</span>
                      <span className="font-semibold text-gray-900">
                        {formatNumber(results.currentRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">CA avec PARCEL (mensuel)</span>
                      <span className="font-semibold text-blue-600">
                        {formatNumber(results.newRevenue)}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Revenus supplémentaires</span>
                        <span className="font-bold text-lg text-green-600">
                          +{formatNumber(results.additionalRevenue)}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">ROI estimé</span>
                        <span className="font-bold text-xl text-blue-600">
                          {results.roi.toFixed(0)}x
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
