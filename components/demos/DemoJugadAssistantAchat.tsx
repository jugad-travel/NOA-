"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, ShoppingBag, Sparkles, X, Send, ShoppingCart, Check, Star, ArrowRight, Plus, Heart, Share2 } from "lucide-react"
import { SafariWindow } from "./SafariWindow"
import { JugadChatWidget } from "./shared/JugadChatWidget"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DemoJugadAssistantAchat() {
  const [isJugadVisible, setIsJugadVisible] = React.useState(false)
  const [demoStep, setDemoStep] = React.useState<"product" | "jugad-appears" | "chat" | "recommendations" | "cart">("product")
  const [addedToCart, setAddedToCart] = React.useState<string[]>([])
  const [selectedCriteria, setSelectedCriteria] = React.useState<string[]>([])

  const messages = React.useMemo(() => [
    { type: "jugad" as const, text: "Besoin d'aide pour choisir ? Je peux vous recommander des options adaptées à vos critères." },
    { type: "user" as const, text: "Je cherche quelque chose de romantique, avec vue sur le lac, pour un week-end en couple" },
    { type: "jugad" as const, text: "Parfait ! Je vais vous proposer des options qui correspondent exactement à vos critères..." }
  ], [])

  const recommendations = [
    {
      id: "rec1",
      name: "Imperial Palace Annecy",
      description: "Hôtel 5 étoiles face au lac avec vue panoramique",
      price: 280,
      rating: 4.8,
      features: ["Vue lac", "Romantique", "Spa"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      id: "rec2",
      name: "Croisière romantique",
      description: "Balade en bateau sur le lac au coucher du soleil",
      price: 25,
      rating: 4.9,
      features: ["Romantique", "Coucher de soleil", "1h"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      id: "rec3",
      name: "Dîner au Belvédère",
      description: "Restaurant gastronomique avec vue panoramique sur le lac",
      price: 120,
      rating: 4.9,
      features: ["Gastronomique", "Vue lac", "Romantique"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    }
  ]

  // Auto-animation du parcours
  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsJugadVisible(true), 3000)
    const timer2 = setTimeout(() => setDemoStep("jugad-appears"), 3500)
    const timer3 = setTimeout(() => setDemoStep("chat"), 5000)
    const timer4 = setTimeout(() => setDemoStep("recommendations"), 8000)
    const timer5 = setTimeout(() => setDemoStep("cart"), 12000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  const handleAddToCart = (itemId: string) => {
    if (!addedToCart.includes(itemId)) {
      setAddedToCart([...addedToCart, itemId])
    }
  }

  return (
    <SafariWindow url="voyages-prestige.fr/sejours/annecy" className="w-full">
      <div className="relative min-h-[600px] overflow-hidden bg-white">
        {/* Header Agence */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-normal text-gray-900">Voyages Prestige</h1>
              <p className="text-xs text-gray-600">Votre agence de voyage de confiance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              {addedToCart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full text-[10px] text-white flex items-center justify-center">
                  {addedToCart.length}
                </span>
              )}
            </div>
            <Menu className="w-5 h-5 text-gray-400 md:hidden" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Étape 1 : Page produit */}
          {demoStep === "product" && (
            <motion.div
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[600px]"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image produit */}
                <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                    alt="Week-end romantique à Annecy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Info produit */}
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2 bg-purple-600 text-white">Séjour romantique</Badge>
                    <h2 className="text-3xl font-normal text-gray-900 mb-2 font-display">
                      Week-end romantique à Annecy
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold text-gray-900">4.8</span>
                      <span className="text-gray-600">(124 avis)</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Découvrez Annecy, la perle des Alpes, lors d'un week-end romantique alliant détente, gastronomie et moments privilégiés. Profitez de la beauté du lac d'Annecy et de la vieille ville pittoresque.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>2 jours / 1 nuit</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Hébergement 5 étoiles face au lac</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Petit-déjeuner inclus</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-normal text-gray-900">580€</span>
                      <span className="text-gray-600">/ personne</span>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 2 : Jugad apparaît */}
          {demoStep === "jugad-appears" && (
            <motion.div
              key="jugad-appears"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[600px] relative"
            >
              {/* Même contenu produit mais avec overlay */}
              <div className="grid md:grid-cols-2 gap-6 p-6 opacity-50">
                <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                    alt="Week-end romantique à Annecy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-normal text-gray-900 mb-2 font-display">
                    Week-end romantique à Annecy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Découvrez Annecy, la perle des Alpes...
                  </p>
                </div>
              </div>

              {/* Notification Jugad */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jugad</p>
                    <p className="text-xs text-gray-500">Assistant d'achat</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Besoin d'aide pour choisir ? Je peux vous recommander des options adaptées à vos critères.
                </p>
                <Button
                  size="sm"
                  onClick={() => setDemoStep("chat")}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Parler à Jugad
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Étape 3 : Chat ouvert */}
          {demoStep === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[600px] relative"
            >
              {/* Contenu produit en arrière-plan */}
              <div className="grid md:grid-cols-2 gap-6 p-6 opacity-30">
                <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                    alt="Week-end romantique à Annecy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-normal text-gray-900 mb-2 font-display">
                    Week-end romantique à Annecy
                  </h2>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 4 : Recommandations */}
          {demoStep === "recommendations" && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[600px] bg-gray-50 p-6"
            >
              <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-900 font-display">Recommandations Jugad</h3>
                      <p className="text-sm text-gray-600">Basées sur vos critères : romantique, vue lac, week-end couple</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {recommendations.map((rec, index) => {
                    const isAdded = addedToCart.includes(rec.id)
                    return (
                      <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48 bg-gray-100">
                            <img
                              src={rec.image}
                              alt={rec.name}
                              className="w-full h-full object-cover"
                            />
                            {isAdded && (
                              <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold">{rec.rating}</span>
                            </div>
                            <h4 className="font-normal text-gray-900 mb-1">{rec.name}</h4>
                            <p className="text-xs text-gray-600 mb-3">{rec.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {rec.features.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-[10px]">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-normal text-gray-900">{rec.price}€</span>
                              <Button
                                size="sm"
                                onClick={() => handleAddToCart(rec.id)}
                                disabled={isAdded}
                                className={cn(
                                  isAdded ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                                )}
                              >
                                {isAdded ? (
                                  <>
                                    <Check className="w-3 h-3 mr-1" />
                                    Ajouté
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3 h-3 mr-1" />
                                    Ajouter
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Pourquoi ces recommandations ?</strong> Ces options correspondent parfaitement à vos critères : vue sur le lac, ambiance romantique, et adaptées pour un week-end en couple. Elles complètent idéalement votre séjour.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 5 : Panier optimisé */}
          {demoStep === "cart" && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="min-h-[600px] bg-gray-50 p-6"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-normal text-gray-900 mb-6 font-display">Votre panier optimisé</h3>
                
                <div className="space-y-4 mb-6">
                  {[
                    { id: "base", name: "Week-end romantique à Annecy", price: 580, base: true },
                    ...recommendations.filter(r => addedToCart.includes(r.id)).map(r => ({
                      id: r.id,
                      name: r.name,
                      price: r.price,
                      base: false
                    }))
                  ].map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          {!item.base && (
                            <Badge variant="outline" className="mt-1 text-[10px] bg-blue-50 border-blue-200 text-blue-700">
                              Recommandé par Jugad
                            </Badge>
                          )}
                        </div>
                        <span className="text-lg font-semibold text-gray-900">{item.price}€</span>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-normal text-gray-900">
                      {580 + recommendations.filter(r => addedToCart.includes(r.id)).reduce((sum, r) => sum + r.price, 0)}€
                    </span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                    Finaliser la commande
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-3">
                    Panier optimisé par Jugad pour maximiser votre expérience
                  </p>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Widget Chat Jugad flottant */}
        {demoStep === "chat" && (
          <JugadChatWidget
            isOpen={true}
            onToggle={() => {}}
            messages={messages}
            isTyping={false}
            inputPlaceholder="Décrivez vos critères..."
            variant="floating"
            label="Jugad"
          />
        )}
      </div>
    </SafariWindow>
  )
}


