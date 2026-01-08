"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Settings, FileText, Download, Share2, Mail, Calendar, MapPin, ArrowRight, Check, Sparkles } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DemoJugadPlannerPro() {
  const [demoMode, setDemoMode] = React.useState<"production" | "acquisition">("production")
  const [productionStep, setProductionStep] = React.useState<"login" | "brief" | "generating" | "refinement" | "export">("login")
  const [acquisitionStep, setAcquisitionStep] = React.useState<"home" | "form" | "generating" | "transmission">("home")

  // Auto-animation production
  React.useEffect(() => {
    if (demoMode === "production") {
      const timer1 = setTimeout(() => setProductionStep("brief"), 2000)
      const timer2 = setTimeout(() => setProductionStep("generating"), 5000)
      const timer3 = setTimeout(() => setProductionStep("refinement"), 8000)
      const timer4 = setTimeout(() => setProductionStep("export"), 11000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    }
  }, [demoMode])

  // Auto-animation acquisition
  React.useEffect(() => {
    if (demoMode === "acquisition") {
      const timer1 = setTimeout(() => setAcquisitionStep("form"), 2000)
      const timer2 = setTimeout(() => setAcquisitionStep("generating"), 5000)
      const timer3 = setTimeout(() => setAcquisitionStep("transmission"), 8000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [demoMode])

  return (
    <SafariWindow url="planner-pro.jugad.com" className="w-full">
      <div className="relative min-h-[600px] overflow-hidden bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-normal text-gray-900">Jugad Planner Pro</h1>
              <p className="text-xs text-gray-600">Pour les travel planners professionnels</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setDemoMode("production")
                setProductionStep("login")
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                demoMode === "production"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              Production
            </button>
            <button
              onClick={() => {
                setDemoMode("acquisition")
                setAcquisitionStep("home")
              }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                demoMode === "acquisition"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              Acquisition
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* MODE PRODUCTION */}
          {demoMode === "production" && (
            <motion.div
              key="production"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[600px]"
            >
              {/* Étape 1 : Connexion */}
              {productionStep === "login" && (
                <div className="flex items-center justify-center h-[600px] bg-gray-50">
                  <Card className="p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-normal text-gray-900 mb-2 font-display">Connexion</h2>
                      <p className="text-gray-600">Accédez à votre espace planner</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="planner@example.com"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="••••••••"
                          readOnly
                        />
                      </div>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        Se connecter
                      </Button>
                    </div>
                  </Card>
                </div>
              )}

              {/* Étape 2 : Saisie brief */}
              {productionStep === "brief" && (
                <div className="p-6">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-normal text-gray-900 mb-6 font-display">Nouveau projet</h2>
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Brief client</label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[120px]"
                            defaultValue="Roadtrip 10 jours Écosse, lent, châteaux, randos, départ Édimbourg"
                            readOnly
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                              defaultValue="10 jours"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Départ</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                              defaultValue="Édimbourg"
                              readOnly
                            />
                          </div>
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          Générer l'itinéraire avec Jugad
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {/* Étape 3 : Génération */}
              {productionStep === "generating" && (
                <div className="flex items-center justify-center h-[600px] bg-gray-50">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-normal text-gray-900 mb-2 font-display">
                      Génération de l'itinéraire...
                    </h3>
                    <p className="text-gray-600">
                      Jugad crée un itinéraire logistique complet avec séquençage cohérent
                    </p>
                  </div>
                </div>
              )}

              {/* Étape 4 : Affinage manuel */}
              {productionStep === "refinement" && (
                <div className="p-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-normal text-gray-900 font-display">Itinéraire généré</h2>
                      <Badge className="bg-green-600 text-white">Génération terminée</Badge>
                    </div>
                    <Card className="p-6 mb-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Jour 1 - Édimbourg</p>
                            <p className="text-sm text-gray-600">Arrivée et découverte de la ville</p>
                          </div>
                          <Button size="sm" variant="outline">Modifier</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Jour 2-3 - Highlands</p>
                            <p className="text-sm text-gray-600">Châteaux et randonnées</p>
                          </div>
                          <Button size="sm" variant="outline">Modifier</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Jour 4-5 - Loch Ness</p>
                            <p className="text-sm text-gray-600">Découverte des lochs</p>
                          </div>
                          <Button size="sm" variant="outline">Modifier</Button>
                        </div>
                      </div>
                    </Card>
                    <div className="flex items-center gap-3">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <FileText className="w-4 h-4 mr-2" />
                        Ajouter produits exclusifs
                      </Button>
                      <Button variant="outline">
                        Ajustements fins
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 5 : Export */}
              {productionStep === "export" && (
                <div className="p-6">
                  <div className="max-w-2xl mx-auto">
                    <Card className="p-8 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-normal text-gray-900 mb-4 font-display">
                        Itinéraire prêt !
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Votre itinéraire est prêt à être partagé avec votre client
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          <Download className="w-4 h-4 mr-2" />
                          Exporter PDF
                        </Button>
                        <Button variant="outline">
                          <Share2 className="w-4 h-4 mr-2" />
                          Lien interactif
                        </Button>
                        <Button variant="outline">
                          <Mail className="w-4 h-4 mr-2" />
                          Envoyer au client
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* MODE ACQUISITION */}
          {demoMode === "acquisition" && (
            <motion.div
              key="acquisition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[600px]"
            >
              {/* Étape 1 : Homepage marque blanche */}
              {acquisitionStep === "home" && (
                <div className="relative">
                  <div 
                    className="relative h-80 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                      <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 font-display">
                        Créez votre projet de voyage
                      </h2>
                      <p className="text-lg text-white/90 mb-8 max-w-2xl">
                        Notre équipe de travel planners vous accompagne pour créer le voyage de vos rêves
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAcquisitionStep("form")}
                        className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                      >
                        Commencer
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 2 : Formulaire prospect */}
              {acquisitionStep === "form" && (
                <div className="p-6">
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-normal text-gray-900 mb-6 font-display">Votre projet</h2>
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Destination souhaitée</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            defaultValue="Écosse"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            defaultValue="10 jours"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Budget estimé</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            defaultValue="3000€"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Vos envies</label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[100px]"
                            defaultValue="Châteaux, randonnées, rythme lent"
                            readOnly
                          />
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          Générer mon projet
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {/* Étape 3 : Génération */}
              {acquisitionStep === "generating" && (
                <div className="flex items-center justify-center h-[600px] bg-gray-50">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-normal text-gray-900 mb-2 font-display">
                      Génération de votre projet...
                    </h3>
                    <p className="text-gray-600">
                      Jugad crée un itinéraire structuré et qualifie vos données
                    </p>
                  </div>
                </div>
              )}

              {/* Étape 4 : Transmission au planner */}
              {acquisitionStep === "transmission" && (
                <div className="p-6">
                  <div className="max-w-2xl mx-auto">
                    <Card className="p-8 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Sparkles className="w-10 h-10 text-indigo-600" />
                      </motion.div>
                      <h3 className="text-2xl font-normal text-gray-900 mb-4 font-display">
                        Projet généré avec succès !
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Votre projet a été transmis à notre équipe de travel planners. Un conseiller vous contactera dans les 24h pour finaliser votre voyage.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                        <p className="text-sm font-medium text-gray-900 mb-2">Données qualifiées :</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Budget : 3000€
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Durée : 10 jours
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            Style : Rythme lent, culture, nature
                          </li>
                        </ul>
                      </div>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        Prendre rendez-vous
                      </Button>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SafariWindow>
  )
}


