"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  User,
  Mail,
  Briefcase,
  Box,
  MessageSquare,
  Layers,
  Sparkles
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

const roles = [
  "Dirigeant e-commerce",
  "Head of Digital",
  "CRO Manager",
  "CTO",
  "Autre",
]

const platforms = [
  "Shopify",
  "Magento",
  "WooCommerce",
  "Headless",
  "Autre",
]

// Generate calendar days
const generateCalendarDays = () => {
  const today = new Date()
  const days = []
  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    days.push({
      date,
      day: date.getDate(),
      dayName: date.toLocaleDateString("fr-FR", { weekday: "short" }),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    })
  }
  return days
}

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
]

const benefits = [
  "Démonstration personnalisée selon votre secteur",
  "Évaluation de la compatibilité technique",
  "Estimation du ROI potentiel",
  "Réponses à toutes vos questions",
]

export function DemoContent() {
  const [formStep, setFormStep] = React.useState<"form" | "calendar" | "success">("form")
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
  const [calendarWeek, setCalendarWeek] = React.useState(0)
  const [formData, setFormData] = React.useState({
    nom: "",
    entreprise: "",
    email: "",
    role: "",
    plateforme: "",
    volumeCatalogue: "",
    message: "",
  })
  
  const calendarDays = React.useMemo(() => generateCalendarDays(), [])
  const visibleDays = calendarDays.slice(calendarWeek * 7, calendarWeek * 7 + 7)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("calendar")
  }
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }
  
  const handleConfirm = () => {
    setFormStep("success")
  }
  
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section variant="dark" padding="lg" noise>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Démo</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Landing page dédiée à la prise de rendez-vous.
            </h1>
            <p className="text-xl text-gray-400">
              Réservez une démonstration personnalisée avec notre équipe.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Main Content */}
      <Section variant="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Benefits */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Découvrez NOA en action
                  </h2>
                  
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Card glass className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">30 minutes</p>
                        <p className="text-gray-400 text-sm">Durée de la démo</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Notre équipe vous présentera les modules NOA adaptés à votre contexte et répondra à toutes vos questions.
                    </p>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right Column - Form / Calendar */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {formStep === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-8">
                      <h3 className="text-xl font-bold text-white mb-6">
                        Demander une démo
                      </h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {/* Nom */}
                          <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                              Nom *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                type="text"
                                id="nom"
                                name="nom"
                                required
                                value={formData.nom}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                                placeholder="Votre nom"
                              />
                            </div>
                          </div>
                          
                          {/* Entreprise */}
                          <div>
                            <label htmlFor="entreprise" className="block text-sm font-medium text-gray-300 mb-2">
                              Entreprise *
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                type="text"
                                id="entreprise"
                                name="entreprise"
                                required
                                value={formData.entreprise}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                                placeholder="Nom de l'entreprise"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                              placeholder="votre@email.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          {/* Rôle */}
                          <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                              Rôle *
                            </label>
                            <div className="relative">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <select
                                id="role"
                                name="role"
                                required
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white appearance-none focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all cursor-pointer"
                              >
                                <option value="" className="bg-dark-100">Sélectionner...</option>
                                {roles.map((role) => (
                                  <option key={role} value={role} className="bg-dark-100">
                                    {role}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          {/* Plateforme */}
                          <div>
                            <label htmlFor="plateforme" className="block text-sm font-medium text-gray-300 mb-2">
                              Plateforme *
                            </label>
                            <div className="relative">
                              <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <select
                                id="plateforme"
                                name="plateforme"
                                required
                                value={formData.plateforme}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white appearance-none focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all cursor-pointer"
                              >
                                <option value="" className="bg-dark-100">Sélectionner...</option>
                                {platforms.map((platform) => (
                                  <option key={platform} value={platform} className="bg-dark-100">
                                    {platform}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        {/* Volume de catalogue */}
                        <div>
                          <label htmlFor="volumeCatalogue" className="block text-sm font-medium text-gray-300 mb-2">
                            Volume de catalogue
                          </label>
                          <div className="relative">
                            <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="text"
                              id="volumeCatalogue"
                              name="volumeCatalogue"
                              value={formData.volumeCatalogue}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                              placeholder="Ex: 5000 références"
                            />
                          </div>
                        </div>
                        
                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-100/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                              placeholder="Décrivez votre projet ou vos questions..."
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" variant="primary" size="xl" className="w-full">
                          Choisir un créneau
                          <Calendar className="w-5 h-5" />
                        </Button>
                      </form>
                    </Card>
                  </motion.div>
                )}
                
                {formStep === "calendar" && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={() => setFormStep("form")}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Retour
                        </button>
                        <h3 className="text-xl font-bold text-white">
                          Choisir un créneau
                        </h3>
                        <div className="w-20" />
                      </div>
                      
                      {/* Calendar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <button
                            onClick={() => setCalendarWeek(Math.max(0, calendarWeek - 1))}
                            disabled={calendarWeek === 0}
                            className="p-2 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-400" />
                          </button>
                          <span className="text-white font-medium">
                            {visibleDays[0]?.date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
                          </span>
                          <button
                            onClick={() => setCalendarWeek(Math.min(1, calendarWeek + 1))}
                            disabled={calendarWeek === 1}
                            className="p-2 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-2">
                          {visibleDays.map((day) => (
                            <button
                              key={day.day}
                              onClick={() => !day.isWeekend && handleDateSelect(day.date)}
                              disabled={day.isWeekend}
                              className={cn(
                                "flex flex-col items-center p-3 rounded-xl transition-all",
                                day.isWeekend
                                  ? "opacity-30 cursor-not-allowed"
                                  : selectedDate?.getDate() === day.day
                                    ? "bg-brand text-dark-200"
                                    : "bg-dark-100/50 text-gray-300 hover:bg-white/10"
                              )}
                            >
                              <span className="text-xs uppercase mb-1">{day.dayName}</span>
                              <span className="text-lg font-semibold">{day.day}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Time Slots */}
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-8"
                        >
                          <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand" />
                            Créneaux disponibles le {selectedDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                          </h4>
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className={cn(
                                  "py-3 px-4 rounded-xl font-medium transition-all",
                                  selectedTime === time
                                    ? "bg-brand text-dark-200"
                                    : "bg-dark-100/50 text-gray-300 hover:bg-white/10"
                                )}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Confirm Button */}
                      <Button
                        onClick={handleConfirm}
                        variant="primary"
                        size="xl"
                        className="w-full"
                        disabled={!selectedDate || !selectedTime}
                      >
                        Confirmer le rendez-vous
                        <Send className="w-5 h-5" />
                      </Button>
                    </Card>
                  </motion.div>
                )}
                
                {formStep === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-12 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Rendez-vous confirmé !
                      </h3>
                      
                      <p className="text-gray-400 mb-6">
                        Nous vous retrouvons le{" "}
                        <span className="text-white font-medium">
                          {selectedDate?.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                        </span>{" "}
                        à <span className="text-white font-medium">{selectedTime}</span>.
                      </p>
                      
                      <p className="text-gray-500 text-sm">
                        Un email de confirmation a été envoyé à {formData.email || "votre adresse"}.
                      </p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

