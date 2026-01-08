// Données réalistes pour les démos NOA - Univers Outdoor/Randonnée

export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  sizes: number[]
  colors: { name: string; hex: string }[]
  features: string[]
  category: string
  description: string
  inStock: boolean
  isNew?: boolean
  isBestSeller?: boolean
}

export interface CartItem extends Product {
  quantity: number
  selectedSize: number
  selectedColor: string
}

export interface Category {
  id: string
  name: string
  icon: string
  productCount: number
}

// Catégories du site outdoor
export const categories: Category[] = [
  { id: "chaussures", name: "Chaussures", icon: "👟", productCount: 124 },
  { id: "sacs", name: "Sacs à dos", icon: "🎒", productCount: 89 },
  { id: "vetements", name: "Vêtements", icon: "🧥", productCount: 256 },
  { id: "accessoires", name: "Accessoires", icon: "🧭", productCount: 178 },
]

// Produits chaussures
export const chaussures: Product[] = [
  {
    id: "trail-pro-x",
    name: "Trail Pro X",
    brand: "Salomon",
    price: 149,
    originalPrice: 179,
    rating: 4.8,
    reviews: 234,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Noir/Orange", hex: "#1a1a1a" },
      { name: "Bleu/Gris", hex: "#2d4a6f" },
    ],
    features: ["Gore-Tex", "Vibram", "Terrain mixte", "Amorti Ortholite"],
    category: "Trail",
    description: "Chaussure de trail polyvalente avec membrane imperméable Gore-Tex et semelle Vibram pour une adhérence optimale sur tous terrains.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "mountain-trek-gtx",
    name: "Mountain Trek GTX",
    brand: "Merrell",
    price: 189,
    rating: 4.6,
    reviews: 156,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    colors: [
      { name: "Marron", hex: "#5c4033" },
      { name: "Gris", hex: "#6b7280" },
    ],
    features: ["Gore-Tex", "Semelle Vibram TC5+", "Tige cuir", "Crampon acier compatible"],
    category: "Randonnée",
    description: "Chaussure de randonnée haute pour les trekkings exigeants. Maintien optimal de la cheville et imperméabilité totale.",
    inStock: true,
    isNew: true,
  },
  {
    id: "speedcross-6",
    name: "Speedcross 6",
    brand: "Salomon",
    price: 159,
    rating: 4.9,
    reviews: 412,
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Noir", hex: "#000000" },
      { name: "Rouge", hex: "#dc2626" },
      { name: "Bleu", hex: "#2563eb" },
    ],
    features: ["Contagrip MA", "Quicklace", "SensiFit", "Terrain technique"],
    category: "Trail",
    description: "La référence du trail technique. Grip exceptionnel sur terrain meuble et descentes techniques.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "terrex-ax4",
    name: "Terrex AX4 Mid",
    brand: "Adidas",
    price: 129,
    originalPrice: 149,
    rating: 4.5,
    reviews: 98,
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Vert/Noir", hex: "#166534" },
      { name: "Gris/Bleu", hex: "#4b5563" },
    ],
    features: ["Continental", "Gore-Tex", "EVA", "Polyvalent"],
    category: "Randonnée",
    description: "Chaussure de randonnée intermédiaire idéale pour les sentiers de moyenne montagne.",
    inStock: true,
  },
  {
    id: "x-ultra-4",
    name: "X Ultra 4 GTX",
    brand: "Salomon",
    price: 169,
    rating: 4.7,
    reviews: 289,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Noir/Vert", hex: "#1f2937" },
      { name: "Bleu/Orange", hex: "#1e40af" },
    ],
    features: ["Gore-Tex", "Advanced Chassis", "Contagrip MA", "Descente stabilisée"],
    category: "Randonnée",
    description: "La polyvalence ultime pour la randonnée. Légère, stable et imperméable.",
    inStock: true,
  },
  {
    id: "moab-3",
    name: "Moab 3 Mid WP",
    brand: "Merrell",
    price: 139,
    rating: 4.4,
    reviews: 167,
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: [
      { name: "Earth", hex: "#78716c" },
      { name: "Olive", hex: "#4d7c0f" },
    ],
    features: ["Waterproof", "Vibram TC5+", "Bellows tongue", "Confort toute journée"],
    category: "Randonnée",
    description: "Le confort légendaire Merrell dans une version mid imperméable. Parfaite pour les longues randonnées.",
    inStock: true,
  },
]

// Sacs à dos
export const sacs: Product[] = [
  {
    id: "osprey-atmos-65",
    name: "Atmos AG 65",
    brand: "Osprey",
    price: 280,
    rating: 4.9,
    reviews: 523,
    sizes: [65],
    colors: [
      { name: "Noir", hex: "#1f2937" },
      { name: "Bleu", hex: "#1e3a5f" },
    ],
    features: ["Anti-Gravity", "Ajustable", "Accès dorsal", "Housse pluie incluse"],
    category: "Trekking",
    description: "Le sac de référence pour les grandes randonnées. Système Anti-Gravity pour un confort inégalé.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "deuter-aircontact-55",
    name: "Aircontact Core 55+10",
    brand: "Deuter",
    price: 220,
    rating: 4.7,
    reviews: 234,
    sizes: [55],
    colors: [
      { name: "Graphite", hex: "#374151" },
      { name: "Bleu pétrole", hex: "#134e4a" },
    ],
    features: ["Aircontact", "VariFlex", "Extensible +10L", "Compartiment bas"],
    category: "Trekking",
    description: "Sac technique pour trekkings de plusieurs jours. Dos ventilé et volume modulable.",
    inStock: true,
  },
  {
    id: "gregory-zulu-30",
    name: "Zulu 30",
    brand: "Gregory",
    price: 140,
    rating: 4.6,
    reviews: 189,
    sizes: [30],
    colors: [
      { name: "Empire Blue", hex: "#1e40af" },
      { name: "Ozone Black", hex: "#18181b" },
    ],
    features: ["FreeFloat", "Hydratation compatible", "Ventilé", "Randonnée journée"],
    category: "Randonnée journée",
    description: "Le compagnon idéal pour les randonnées à la journée. Léger et bien ventilé.",
    inStock: true,
  },
]

// Accessoires
export const accessoires: Product[] = [
  {
    id: "batons-black-diamond",
    name: "Trail Pro Shock",
    brand: "Black Diamond",
    price: 89,
    rating: 4.7,
    reviews: 312,
    sizes: [110, 120, 130],
    colors: [
      { name: "Noir", hex: "#000000" },
      { name: "Rouge", hex: "#dc2626" },
    ],
    features: ["Carbone", "Système anti-choc", "Poignées ergonomiques", "Dragonnes ajustables"],
    category: "Bâtons",
    description: "Bâtons de randonnée en carbone avec système anti-choc intégré. Ultra-légers et robustes.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "chaussettes-icebreaker",
    name: "Hike+ Medium Crew",
    brand: "Icebreaker",
    price: 26,
    rating: 4.8,
    reviews: 567,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    colors: [
      { name: "Gris", hex: "#6b7280" },
      { name: "Bleu nuit", hex: "#1e3a5f" },
    ],
    features: ["Laine Mérinos", "Anti-odeur", "Renforts talon/orteil", "Respirant"],
    category: "Chaussettes",
    description: "Chaussettes techniques en laine Mérinos. Régulation thermique naturelle et confort longue durée.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "gourde-hydrapak",
    name: "Flux 1.5L",
    brand: "HydraPak",
    price: 18,
    rating: 4.5,
    reviews: 234,
    sizes: [1.5],
    colors: [
      { name: "Transparent", hex: "#e5e7eb" },
      { name: "Bleu", hex: "#3b82f6" },
    ],
    features: ["Sans BPA", "Pliable", "Bouchon anti-fuite", "Ultra-légère"],
    category: "Hydratation",
    description: "Gourde souple pliable, idéale pour économiser de la place. Se range facilement une fois vide.",
    inStock: true,
  },
  {
    id: "frontale-petzl",
    name: "Actik Core",
    brand: "Petzl",
    price: 65,
    rating: 4.6,
    reviews: 445,
    sizes: [],
    colors: [
      { name: "Noir", hex: "#18181b" },
      { name: "Rouge", hex: "#b91c1c" },
      { name: "Bleu", hex: "#1d4ed8" },
    ],
    features: ["450 lumens", "Rechargeable USB", "3 modes", "IPX4"],
    category: "Éclairage",
    description: "Lampe frontale rechargeable puissante. Idéale pour les départs matinaux et bivouacs.",
    inStock: true,
  },
]

// Produits complémentaires suggérés par NOA
export const complementaryProducts: Record<string, string[]> = {
  "trail-pro-x": ["chaussettes-icebreaker", "batons-black-diamond"],
  "mountain-trek-gtx": ["chaussettes-icebreaker", "batons-black-diamond", "frontale-petzl"],
  "speedcross-6": ["chaussettes-icebreaker", "gourde-hydrapak"],
  "osprey-atmos-65": ["frontale-petzl", "gourde-hydrapak"],
}

// Messages de conversation NOA pour chaque démo
export const noaConversations = {
  projet: {
    userMessage: "Je pars une semaine faire le GR20",
    noaResponse: "Le GR20 est un trek exigeant ! Pour une semaine en autonomie, je vous recommande un équipement complet et fiable.",
    suggestions: ["trail-pro-x", "osprey-atmos-65", "batons-black-diamond"],
  },
  match: {
    userMessage: "Je cherche des chaussures de randonnée milieu de gamme en 42",
    noaResponse: "En taille 42, je vous recommande la Trail Pro X de Salomon. C'est notre best-seller avec un excellent rapport qualité-prix pour le terrain mixte.",
    highlightProduct: "trail-pro-x",
  },
  expert: {
    userMessage: "Imperméable ?",
    noaResponse: "Oui, la Trail Pro X est entièrement imperméable grâce à sa membrane Gore-Tex. Elle vous protège efficacement contre l'eau et l'humidité, même lors de longues randonnées sous la pluie.",
    product: "trail-pro-x",
  },
  complete: {
    cartItems: ["trail-pro-x", "osprey-atmos-65"],
    noaResponse: "Pour compléter votre équipement GR20, je vous conseille ces chaussettes techniques Mérinos en 42. Elles sont parfaitement compatibles avec vos Trail Pro X.",
    suggestion: "chaussettes-icebreaker",
  },
}

// Helpers
export function getProductById(id: string): Product | undefined {
  return [...chaussures, ...sacs, ...accessoires].find(p => p.id === id)
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids.map(id => getProductById(id)).filter(Boolean) as Product[]
}

export function formatPrice(price: number): string {
  return `${price}€`
}


