"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Bed, Utensils, Activity, Euro } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { JugadProgramItem, formatPrice, formatTime } from "@/lib/jugad-demo-data"
import { cn } from "@/lib/utils"

interface DayTimelineProps {
  dayId: string
  programItems: JugadProgramItem[]
  className?: string
}

function getItemIcon(itemType: string) {
  switch (itemType) {
    case "accommodation":
      return <Bed className="w-4 h-4" />
    case "restaurant":
    case "meal":
      return <Utensils className="w-4 h-4" />
    case "activity":
      return <Activity className="w-4 h-4" />
    default:
      return <MapPin className="w-4 h-4" />
  }
}

function getItemColor(itemType: string) {
  switch (itemType) {
    case "accommodation":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "restaurant":
    case "meal":
      return "bg-red-100 text-red-700 border-red-200"
    case "activity":
      return "bg-purple-100 text-purple-700 border-purple-200"
    default:
      return "bg-blue-100 text-blue-700 border-blue-200"
  }
}

export function DayTimeline({ dayId, programItems, className }: DayTimelineProps) {
  const sortedItems = [...programItems].sort((a, b) => a.start_time_minutes - b.start_time_minutes)

  return (
    <div className={cn("space-y-3 mt-4", className)}>
      <h5 className="text-sm font-normal text-gray-900 mb-3">Programme détaillé</h5>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        <div className="space-y-4">
          {sortedItems.map((item, index) => {
            const isLast = index === sortedItems.length - 1
            const itemColor = getItemColor(item.item_type)
            const Icon = getItemIcon(item.item_type)

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-4"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2",
                    itemColor
                  )}>
                    {Icon}
                  </div>
                  {!isLast && (
                    <div className="absolute left-1/2 top-8 w-0.5 h-4 bg-gray-200 transform -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h6 className="text-sm font-normal text-gray-900 mb-1">
                          {item.item_name}
                        </h6>
                        <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{formatTime(item.start_time_minutes)}</span>
                          {item.duration_minutes > 0 && (
                            <>
                              <span>•</span>
                              <span>{item.duration_minutes} min</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {!item.is_free && (
                        <div className="flex-shrink-0 text-right">
                          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                            <Euro className="w-3.5 h-3.5" />
                            <span>{formatPrice(item.price, item.currency)}</span>
                          </div>
                          {item.is_optional && (
                            <Badge variant="outline" className="text-[10px] mt-1">
                              Optionnel
                            </Badge>
                          )}
                        </div>
                      )}
                      {item.is_free && (
                        <Badge variant="outline" className="text-[10px] bg-green-50 border-green-200 text-green-700">
                          Gratuit
                        </Badge>
                      )}
                    </div>
                    {item.notes && (
                      <p className="text-[10px] text-gray-500 italic mt-2 pt-2 border-t border-gray-100">
                        {item.notes}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

