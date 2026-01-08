// Données minimales pour les démos Jugad
// Référence au format B2C du voyage à Annecy depuis jugad-main

export interface JugadDay {
  id: string
  day_number: number
  day_title: string
  city: string
  description: string
  goal: string
  hero_image_url: string
  day_date: string
  day_type: string
}

export interface JugadProgramItem {
  id: string
  day_id: string
  item_id: string
  item_name: string
  item_type: "accommodation" | "activity" | "restaurant" | "meal"
  description: string
  duration_minutes: number
  start_time_minutes: number
  price: number
  currency: string
  is_free: boolean
  is_optional: boolean
  notes?: string
}

export interface JugadTripOverview {
  id: string
  name: string
  headline: string
  description: string
  duration_days: number
  estimated_budget: number
  currency: string
  travel_style: string[]
  hero_image_url: string
  travel_logic: string
}

// Voyage à Annecy - Structure minimale pour les démos
export const annecyTripOverview: JugadTripOverview = {
  id: "demo-annecy-romantic",
  name: "Échappée Romantique sur le Lac",
  headline: "Un week-end romantique à Annecy, entre lac et montagnes",
  description: "Découvrez Annecy, la perle des Alpes, lors d'un week-end romantique alliant détente, gastronomie et moments privilégiés. Profitez de la beauté du lac d'Annecy et de la vieille ville pittoresque.",
  duration_days: 2,
  estimated_budget: 580,
  currency: "EUR",
  travel_style: ["romantique", "gastronomie", "détente"],
  hero_image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  travel_logic: "Itinéraire optimisé pour un week-end romantique avec hébergement premium face au lac, activités nautiques et gastronomie locale. Les horaires sont aménagés pour profiter des meilleurs moments de la journée (lever et coucher de soleil sur le lac)."
}

export const annecyDays: JugadDay[] = [
  {
    id: "demo-day-1",
    day_number: 1,
    day_title: "Arrivée et découverte du lac",
    city: "Annecy",
    description: "Arrivée à Annecy et première découverte du lac. Installation à l'hôtel puis balade romantique le long des canaux de la vieille ville.",
    goal: "Découvrir Annecy et profiter du lac",
    hero_image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    day_date: new Date().toISOString().split("T")[0],
    day_type: "arrival"
  },
  {
    id: "demo-day-2",
    day_number: 2,
    day_title: "Gastronomie et détente",
    city: "Annecy",
    description: "Journée dédiée à la gastronomie locale et à la détente. Petit-déjeuner face au lac, déjeuner gastronomique et temps libre pour profiter des activités nautiques.",
    goal: "Profiter de la gastronomie et se détendre",
    hero_image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    day_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    day_type: "exploration"
  }
]

export const annecyProgramItems: JugadProgramItem[] = [
  // Jour 1
  {
    id: "demo-item-1",
    day_id: "demo-day-1",
    item_id: "demo-accommodation-1",
    item_name: "Imperial Palace Annecy",
    item_type: "accommodation",
    description: "Hôtel 5 étoiles face au lac d'Annecy avec vue panoramique. Chambre romantique avec balcon.",
    duration_minutes: 0,
    start_time_minutes: 14 * 60, // 14:00
    price: 280,
    currency: "EUR",
    is_free: false,
    is_optional: false,
    notes: "Check-in à partir de 14h. Parking privé disponible."
  },
  {
    id: "demo-item-2",
    day_id: "demo-day-1",
    item_id: "demo-activity-1",
    item_name: "Balade en bateau sur le lac",
    item_type: "activity",
    description: "Croisière romantique d'une heure sur le lac d'Annecy avec vue sur les montagnes.",
    duration_minutes: 60,
    start_time_minutes: 15 * 60 + 30, // 15:30
    price: 25,
    currency: "EUR",
    is_free: false,
    is_optional: false,
    notes: "Départ depuis le port d'Annecy. Réservation recommandée."
  },
  {
    id: "demo-item-3",
    day_id: "demo-day-1",
    item_id: "demo-activity-2",
    item_name: "Visite de la vieille ville",
    item_type: "activity",
    description: "Découverte des canaux et ruelles pittoresques de la vieille ville d'Annecy.",
    duration_minutes: 90,
    start_time_minutes: 17 * 60, // 17:00
    price: 0,
    currency: "EUR",
    is_free: true,
    is_optional: false,
    notes: "Visite libre. Parfait pour une promenade romantique."
  },
  {
    id: "demo-item-4",
    day_id: "demo-day-1",
    item_id: "demo-restaurant-1",
    item_name: "Le Belvédère",
    item_type: "restaurant",
    description: "Restaurant gastronomique avec vue panoramique sur le lac. Cuisine française raffinée.",
    duration_minutes: 120,
    start_time_minutes: 19 * 60 + 30, // 19:30
    price: 120,
    currency: "EUR",
    is_free: false,
    is_optional: false,
    notes: "Menu dégustation recommandé. Réservation obligatoire."
  },
  // Jour 2
  {
    id: "demo-item-5",
    day_id: "demo-day-2",
    item_id: "demo-restaurant-2",
    item_name: "Petit-déjeuner face au lac",
    item_type: "meal",
    description: "Petit-déjeuner buffet à l'hôtel avec vue sur le lac d'Annecy.",
    duration_minutes: 60,
    start_time_minutes: 8 * 60, // 08:00
    price: 25,
    currency: "EUR",
    is_free: false,
    is_optional: false,
    notes: "Inclus dans le séjour. Service jusqu'à 10h30."
  },
  {
    id: "demo-item-6",
    day_id: "demo-day-2",
    item_id: "demo-activity-3",
    item_name: "Activités nautiques",
    item_type: "activity",
    description: "Paddle, canoë ou pédalo sur le lac. Location disponible sur place.",
    duration_minutes: 120,
    start_time_minutes: 10 * 60, // 10:00
    price: 35,
    currency: "EUR",
    is_free: false,
    is_optional: true,
    notes: "Location à l'heure. Équipement fourni."
  },
  {
    id: "demo-item-7",
    day_id: "demo-day-2",
    item_id: "demo-restaurant-3",
    item_name: "L'Auberge du Père Bise",
    item_type: "restaurant",
    description: "Restaurant étoilé au guide Michelin. Cuisine gastronomique avec produits locaux.",
    duration_minutes: 150,
    start_time_minutes: 12 * 60 + 30, // 12:30
    price: 95,
    currency: "EUR",
    is_free: false,
    is_optional: false,
    notes: "Menu déjeuner. Réservation fortement recommandée."
  },
  {
    id: "demo-item-8",
    day_id: "demo-day-2",
    item_id: "demo-activity-4",
    item_name: "Spa et détente",
    item_type: "activity",
    description: "Séance de spa et massage relaxant à l'hôtel.",
    duration_minutes: 90,
    start_time_minutes: 15 * 60, // 15:00
    price: 85,
    currency: "EUR",
    is_free: false,
    is_optional: true,
    notes: "Réservation à l'avance. Disponible pour couples."
  }
]

// Helper pour formater les prix
export function formatPrice(price: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

// Helper pour formater l'heure
export function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
}

// Helper pour obtenir les items d'un jour
export function getDayProgramItems(dayId: string): JugadProgramItem[] {
  return annecyProgramItems.filter(item => item.day_id === dayId)
}


