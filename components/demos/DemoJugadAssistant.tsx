"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, Briefcase, Sparkles, X, Send, ShoppingCart, Check, Euro, Star, ArrowRight } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { JugadChatWidget } from "./shared/JugadChatWidget"
import { ItineraryView } from "./shared/ItineraryView"
import { annecyDays, annecyTripOverview } from "@/lib/jugad-demo-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function DemoJugadAssistant() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [demoStep, setDemoStep] = React.useState<"home" | "chat" | "generating" | "itinerary" | "reservation">("home")
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null)
  const [reservedItems, setReservedItems] = React.useState<string[]>([])
  
  const messages = React.useMemo(() => [
    { type: "jugad" as const, text: "Bonjour ! Je suis Jugad, votre conseiller de voyage. Parlez-moi de votre projet et je vous proposerai un itinéraire sur mesure avec nos meilleures offres." },
    { type: "user" as const, text: "Voyage de noces en Italie, hôtels de charme, culture et détente, 3000€" },
    { type: "jugad" as const, text: "Excellente idée pour votre lune de miel ! Je vais créer un itinéraire romantique en Italie avec nos meilleurs partenaires. Laissez-moi analyser nos disponibilités..." }
  ], [])

  // Auto-animation du parcours
  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsChatOpen(true), 2000)
    const timer2 = setTimeout(() => setDemoStep("chat"), 3000)
    const timer3 = setTimeout(() => setDemoStep("generating"), 6000)
    const timer4 = setTimeout(() => setDemoStep("itinerary"), 9000)
    // Pas d'étape réservation automatique - l'utilisateur peut interagir
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  const handleReserve = (itemId: string) => {
    if (!reservedItems.includes(itemId)) {
      setReservedItems([...reservedItems, itemId])
    }
  }

  return (
    <SafariWindow url="voyages-prestige.fr" className="w-full">
      <div className="relative min-h-[600px] overflow-hidden bg-white">
        {/* Header Agence */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-normal text-gray-900">Voyages Prestige</h1>
              <p className="text-xs text-gray-600">Votre agence de voyage de confiance</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Destinations</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Séjours</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Circuits</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              {reservedItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full text-[10px] text-white flex items-center justify-center">
                  {reservedItems.length}
                </span>
              )}
            </div>
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
                  backgroundImage: "url(https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1920&q=80)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60" />
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 font-display">
                    Réalisez votre voyage de rêve
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl">
                    Notre assistant IA vous propose un itinéraire personnalisé avec nos meilleures offres
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsChatOpen(true)
                      setDemoStep("chat")
                    }}
                    className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    Parlez-nous de votre projet
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Sections de contenu */}
              <div className="px-6 py-8 space-y-8">
                <div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 font-display">Nos destinations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Italie", "Espagne", "Grèce", "Portugal"].map((item) => (
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
                    backgroundImage: "url(https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1920&q=80)"
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
                      className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-normal text-gray-900 mb-2 font-display">
                      Analyse de vos besoins...
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Croisement avec nos disponibilités et produits disponibles
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <span>✓ Disponibilités vérifiées</span>
                      <span>•</span>
                      <span>✓ Marges optimisées</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Étape 3 : Itinéraire avec produits agence */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50" />
                <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-8">
                  <Badge className="mb-2 w-fit bg-purple-600 text-white">Produit agence</Badge>
                  <h1 className="text-3xl font-normal text-white mb-2 font-display">
                    {annecyTripOverview.name}
                  </h1>
                  <p className="text-lg text-white/90 mb-4">
                    {annecyTripOverview.headline}
                  </p>
                  <div className="flex items-center gap-4 text-white/90">
                    <span>{annecyTripOverview.duration_days} jours</span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      {annecyTripOverview.estimated_budget} / personne
                    </span>
                  </div>
                </div>
              </div>

              {/* Description avec produits agence */}
              <div className="px-6 py-6 bg-white border-b border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {annecyTripOverview.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-700">
                  <Star className="w-4 h-4 fill-purple-600" />
                  <span>Produits sélectionnés selon vos critères et nos disponibilités</span>
                </div>
              </div>

              {/* Itinéraire jour par jour avec CTA réservation */}
              <div className="px-6 py-6">
                <ItineraryView
                  days={annecyDays}
                  selectedDay={selectedDay}
                  onDaySelect={setSelectedDay}
                  showActions={false}
                />
              </div>

              {/* Section réservation */}
              <div className="px-6 py-6 bg-white border-t border-gray-200">
                <h3 className="text-lg font-normal text-gray-900 mb-4 font-display">Réservez votre séjour</h3>
                <div className="space-y-3">
                  {[
                    { id: "hotel", name: "Imperial Palace Annecy", price: 280, nights: 2 },
                    { id: "restaurant1", name: "Le Belvédère", price: 120, type: "Dîner" },
                    { id: "restaurant2", name: "L'Auberge du Père Bise", price: 95, type: "Déjeuner" },
                    { id: "activity", name: "Croisière sur le lac", price: 25, type: "Activité" }
                  ].map((item) => {
                    const isReserved = reservedItems.includes(item.id)
                    return (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            {item.nights ? `${item.nights} nuit${item.nights > 1 ? 's' : ''}` : item.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-semibold text-gray-900">
                            {item.price}€
                          </span>
                          <Button
                            size="sm"
                            onClick={() => handleReserve(item.id)}
                            disabled={isReserved}
                            className={cn(
                              isReserved 
                                ? "bg-green-600 hover:bg-green-700" 
                                : "bg-purple-600 hover:bg-purple-700"
                            )}
                          >
                            {isReserved ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                Réservé
                              </>
                            ) : (
                              "Réserver"
                            )}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 4 : Finalisation réservation */}
          {demoStep === "reservation" && (
            <motion.div
              key="reservation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="min-h-[600px] bg-gray-50 flex items-center justify-center p-6"
            >
              <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4 font-display">
                  Réservation enregistrée !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre conseiller vous contactera dans les plus brefs délais pour finaliser votre voyage.
                </p>
                <p className="text-sm text-gray-500">
                  Un email de confirmation a été envoyé avec tous les détails.
                </p>
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

