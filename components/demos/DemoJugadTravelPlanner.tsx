"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, MapPin, Sparkles, X, Send, Download, Share2, ExternalLink, ArrowRight } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { JugadChatWidget } from "./shared/JugadChatWidget"
import { ItineraryView } from "./shared/ItineraryView"
import { annecyDays, annecyTripOverview } from "@/lib/jugad-demo-data"
import { cn } from "@/lib/utils"

export function DemoJugadTravelPlanner() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [demoStep, setDemoStep] = React.useState<"home" | "chat" | "generating" | "itinerary">("home")
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null)
  
  const messages = React.useMemo(() => [
    { type: "jugad" as const, text: "Bonjour ! Je suis Jugad, votre assistant pour créer votre itinéraire personnalisé. Parlez-moi de votre projet de voyage." },
    { type: "user" as const, text: "5 jours dans la région, nature et gastronomie, en couple, budget moyen" },
    { type: "jugad" as const, text: "Parfait ! Je vais créer un itinéraire sur mesure pour vous. Laissez-moi analyser les meilleures options locales..." }
  ], [])

  // Auto-animation du parcours
  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsChatOpen(true), 2000)
    const timer2 = setTimeout(() => setDemoStep("chat"), 3000)
    const timer3 = setTimeout(() => setDemoStep("generating"), 6000)
    const timer4 = setTimeout(() => setDemoStep("itinerary"), 9000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <SafariWindow url="annecy-tourisme.fr" className="w-full">
      <div className="relative min-h-[600px] overflow-hidden bg-white">
        {/* Header Office de Tourisme */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-normal text-gray-900">Office de Tourisme d'Annecy</h1>
              <p className="text-xs text-gray-600">La perle des Alpes</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Découvrir</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Séjourner</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Manger</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Agenda</a>
          </div>
          
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <Menu className="w-5 h-5 text-gray-400 md:hidden" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Étape 1 : Homepage avec CTA */}
          {demoStep === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Hero Section */}
              <div 
                className="relative h-80 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)"
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 font-display">
                    Découvrez Annecy autrement
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl">
                    Créez votre itinéraire personnalisé en quelques minutes avec notre assistant IA
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsChatOpen(true)
                      setDemoStep("chat")
                    }}
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    Créez votre itinéraire personnalisé
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Sections de contenu */}
              <div className="px-6 py-8 space-y-8">
                <div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 font-display">À découvrir</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Lac d'Annecy", "Vieille Ville", "Château", "Activités nautiques"].map((item) => (
                      <div key={item} className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-sm font-medium text-gray-900">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 2 : Chat ouvert */}
          {(demoStep === "chat" || demoStep === "generating") && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[600px]"
            >
              {/* Contenu de la page avec overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div 
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)"
                  }}
                />
              </div>

              {/* Indicateur de génération */}
              {demoStep === "generating" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center z-20 bg-white/95"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-normal text-gray-900 mb-2 font-display">
                      Génération de votre itinéraire...
                    </h3>
                    <p className="text-gray-600">
                      Jugad analyse les meilleures options locales pour vous
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Étape 3 : Itinéraire complet (format B2C) */}
          {demoStep === "itinerary" && (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[600px] bg-gray-50"
            >
              {/* Header de l'itinéraire */}
              <div 
                className="relative h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${annecyTripOverview.hero_image_url})`
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-8">
                  <h1 className="text-3xl font-normal text-white mb-2 font-display">
                    {annecyTripOverview.name}
                  </h1>
                  <p className="text-lg text-white/90 mb-4">
                    {annecyTripOverview.headline}
                  </p>
                  <div className="flex items-center gap-4 text-white/90">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {annecyDays[0]?.city}
                    </span>
                    <span>{annecyTripOverview.duration_days} jours</span>
                    <span>{annecyTripOverview.estimated_budget}€ / personne</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-6 py-6 bg-white border-b border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {annecyTripOverview.description}
                </p>
              </div>

              {/* Itinéraire jour par jour */}
              <div className="px-6 py-6">
                <ItineraryView
                  days={annecyDays}
                  selectedDay={selectedDay}
                  onDaySelect={setSelectedDay}
                  showActions={true}
                />
              </div>

              {/* Actions */}
              <div className="px-6 py-6 bg-white border-t border-gray-200 flex items-center justify-center gap-4">
                <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger l'itinéraire
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Voir les partenaires
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Widget Chat Jugad flottant */}
        {demoStep === "chat" && (
          <JugadChatWidget
            isOpen={isChatOpen}
            onToggle={() => setIsChatOpen(!isChatOpen)}
            messages={messages}
            isTyping={false}
            inputPlaceholder="Parlez-nous de votre projet..."
            variant="floating"
            label="Jugad"
          />
        )}
      </div>
    </SafariWindow>
  )
}

