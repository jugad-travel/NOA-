"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Target, ArrowRight, Clock, Euro } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { JugadDay, JugadProgramItem, formatPrice, formatTime, getDayProgramItems } from "@/lib/jugad-demo-data"
import { cn } from "@/lib/utils"
import { DayTimeline } from "./DayTimeline"

interface ItineraryViewProps {
  days: JugadDay[]
  selectedDay?: number | null
  onDaySelect?: (dayNumber: number) => void
  showActions?: boolean
  className?: string
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return ""
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const months = [
      "janvier", "février", "mars", "avril", "mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ]
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  } catch {
    return ""
  }
}

function getDayTypeIcon(dayType: string | null) {
  if (!dayType) return <MapPin className="w-5 h-5 text-blue-600" />
  const type = dayType.toLowerCase()
  switch (type) {
    case "arrival":
      return <MapPin className="w-5 h-5 text-green-600" />
    case "exploration":
      return <MapPin className="w-5 h-5 text-purple-600" />
    default:
      return <MapPin className="w-5 h-5 text-blue-600" />
  }
}

export function ItineraryView({
  days,
  selectedDay = null,
  onDaySelect,
  showActions = true,
  className
}: ItineraryViewProps) {
  const [expandedDay, setExpandedDay] = React.useState<number | null>(selectedDay || days[0]?.day_number || null)

  React.useEffect(() => {
    if (selectedDay !== null) {
      setExpandedDay(selectedDay)
    }
  }, [selectedDay])

  const handleDayClick = (dayNumber: number) => {
    const newExpanded = expandedDay === dayNumber ? null : dayNumber
    setExpandedDay(newExpanded)
    onDaySelect?.(dayNumber)
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-normal text-gray-900 font-display">Itinéraire</h3>
        {showActions && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Télécharger
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Partager
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {days.map((day, index) => {
          const isSelected = expandedDay === day.day_number
          const isLast = index === days.length - 1
          const programItems = getDayProgramItems(day.id)
          
          if (!day) return null

          return (
            <motion.div
              key={day.day_number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                {/* Day Header */}
                <div
                  onClick={() => handleDayClick(day.day_number)}
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className={cn(
                        "p-2 rounded-full",
                        isSelected ? "bg-blue-100" : "bg-gray-100"
                      )}>
                        {getDayTypeIcon(day.day_type)}
                      </div>
                      <Badge className={cn(
                        "text-xs",
                        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                      )}>
                        Jour {day.day_number}
                      </Badge>
                      {!isLast && (
                        <div className="w-0.5 h-8 bg-gray-200" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h4 className="text-lg font-normal text-gray-900 font-display mb-1">
                            {day.day_title}
                          </h4>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {day.city}
                          </p>
                        </div>
                        {day.hero_image_url && (
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={day.hero_image_url}
                              alt={day.day_title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {day.day_date && (
                        <div className="flex items-center gap-1.5 mb-2 text-xs text-blue-700">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(day.day_date)}</span>
                        </div>
                      )}

                      {day.goal && (
                        <div className="flex items-start gap-1.5 mb-2">
                          <Target className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                            {day.goal}
                          </Badge>
                        </div>
                      )}

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expanded Day Content */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <DayTimeline dayId={day.id} programItems={programItems} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

