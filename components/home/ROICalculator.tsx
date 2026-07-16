"use client"

import * as React from "react"
import { Calculator, Info, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Button } from "@/components/ui/button"

type Scenario = {
  currentRevenue: number
  incrementalOrders: number
  incrementalRevenue: number
  monthlyNetGain: number
  roiPercent: number | null
  paybackMonths: number | null
}

function parseNumber(value: string) {
  return Number.parseFloat(value.replace(/\s/g, "").replace(",", "."))
}

function currency(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function ROICalculator() {
  const [sessions, setSessions] = React.useState("")
  const [averageOrderValue, setAverageOrderValue] = React.useState("")
  const [conversionRate, setConversionRate] = React.useState("")
  const [expectedUplift, setExpectedUplift] = React.useState("")
  const [monthlyCost, setMonthlyCost] = React.useState("")
  const [implementationCost, setImplementationCost] = React.useState("")
  const [scenario, setScenario] = React.useState<Scenario | null>(null)

  const calculateScenario = (event: React.FormEvent) => {
    event.preventDefault()

    const sessionsValue = parseNumber(sessions)
    const aovValue = parseNumber(averageOrderValue)
    const conversionValue = parseNumber(conversionRate)
    const upliftValue = parseNumber(expectedUplift)
    const monthlyCostValue = parseNumber(monthlyCost)
    const implementationCostValue = parseNumber(implementationCost || "0")

    if ([sessionsValue, aovValue, conversionValue, upliftValue, monthlyCostValue].some((value) => !Number.isFinite(value) || value < 0)) {
      return
    }

    const currentOrders = sessionsValue * (conversionValue / 100)
    const incrementalOrders = currentOrders * (upliftValue / 100)
    const currentRevenue = currentOrders * aovValue
    const incrementalRevenue = incrementalOrders * aovValue
    const monthlyNetGain = incrementalRevenue - monthlyCostValue
    const roiPercent = monthlyCostValue > 0 ? (monthlyNetGain / monthlyCostValue) * 100 : null
    const paybackMonths = monthlyNetGain > 0 && implementationCostValue > 0
      ? implementationCostValue / monthlyNetGain
      : null

    setScenario({
      currentRevenue,
      incrementalOrders,
      incrementalRevenue,
      monthlyNetGain,
      roiPercent,
      paybackMonths,
    })
  }

  const fields = [
    { id: "sessions", label: "Sessions mensuelles", value: sessions, setter: setSessions, placeholder: "100 000", suffix: "" },
    { id: "panier", label: "Panier moyen", value: averageOrderValue, setter: setAverageOrderValue, placeholder: "120", suffix: "€" },
    { id: "conversion", label: "Taux de conversion actuel", value: conversionRate, setter: setConversionRate, placeholder: "2,5", suffix: "%" },
    { id: "uplift", label: "Hausse relative que vous souhaitez tester", value: expectedUplift, setter: setExpectedUplift, placeholder: "10", suffix: "%" },
    { id: "cout", label: "Coût mensuel envisagé", value: monthlyCost, setter: setMonthlyCost, placeholder: "2 000", suffix: "€" },
    { id: "setup", label: "Coût d’intégration ponctuel", value: implementationCost, setter: setImplementationCost, placeholder: "0", suffix: "€" },
  ]

  return (
    <Section variant="white" padding="lg" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-gray-900 p-7 md:p-10 lg:p-12">
              <Calculator className="mb-7 size-8 text-white" />
              <h2 className="mb-5 text-3xl font-normal text-white md:text-4xl" style={{ color: "#ffffff" }}>
                Construisez votre scénario
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>
                Le calcul repose uniquement sur vos hypothèses. Parcel n’applique aucun multiplicateur automatique et ne présente pas cette estimation comme un résultat garanti.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 size-5 shrink-0 text-white/70" />
                  <p className="text-sm leading-relaxed text-white/70" style={{ color: "rgba(255,255,255,0.72)" }}>
                    La hausse attendue correspond à une variation relative. Exemple : un taux de 2 % avec une hypothèse de +10 % devient 2,2 %, pas 12 %.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <form onSubmit={calculateScenario} className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.id} htmlFor={field.id} className="block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">{field.label}</span>
                    <span className="relative block">
                      <input
                        id={field.id}
                        inputMode="decimal"
                        value={field.value}
                        onChange={(event) => field.setter(event.target.value.replace(/[^\d\s,.]/g, ""))}
                        placeholder={field.placeholder}
                        required={field.id !== "setup"}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                      />
                      {field.suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">{field.suffix}</span>}
                    </span>
                  </label>
                ))}

                <div className="sm:col-span-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Calculer ce scénario
                    <TrendingUp className="size-5" />
                  </Button>
                </div>
              </form>

              {scenario && (
                <div className="mt-8 border-t border-gray-200 pt-8" aria-live="polite">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">Estimation mensuelle</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Result label="CA actuel estimé" value={currency(scenario.currentRevenue)} />
                    <Result label="Commandes supplémentaires" value={scenario.incrementalOrders.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} />
                    <Result label="CA supplémentaire" value={currency(scenario.incrementalRevenue)} />
                    <Result label="Gain net après coût mensuel" value={currency(scenario.monthlyNetGain)} />
                    <Result label="ROI mensuel du scénario" value={scenario.roiPercent === null ? "Non calculable" : `${scenario.roiPercent.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} %`} />
                    <Result label="Retour sur coût d’intégration" value={scenario.paybackMonths === null ? "Non calculable" : `${scenario.paybackMonths.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} mois`} />
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-gray-500">
                    Estimation indicative, hors marge, saisonnalité, retours et effets de mix produit. À confirmer par un test sur vos données réelles.
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
    </div>
  )
}
