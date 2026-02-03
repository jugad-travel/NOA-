"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, GripVertical } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const comparison = {
  before: {
    title: "E-commerce classique",
    items: [
      { text: "Recherche rigide" },
      { text: "Choix complexe" },
      { text: "Peu de réassurance" },
      { text: "Trop de choix pas de choix" },
      { text: "Abandon fréquent du panier" },
      { text: "Pas de fidélisation client" },
    ],
  },
  after: {
    title: "Avec PARCEL",
    items: [
      { text: "Compréhension du projet" },
      { text: "Aide au choix produit" },
      { text: "Réassurance jusqu'au panier" },
      { text: "Plus de conversion" },
      { text: "Expérience personnalisée" },
      { text: "Gain de temps" },
    ],
  },
}

export function PainSection() {
  const [sliderPosition, setSliderPosition] = React.useState(67) // Position par défaut à 67% (2/3 à gauche)
  const [sliderPositionVertical, setSliderPositionVertical] = React.useState(67) // Position verticale pour mobile
  const [isMobile, setIsMobile] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerVerticalRef = React.useRef<HTMLDivElement>(null)
  const sectionRef = React.useRef<HTMLElement>(null)
  const x = useMotionValue(0) // Sera initialisé au montage
  const y = useMotionValue(0) // Pour le slider vertical sur mobile
  const hasAnimatedRef = React.useRef(false)
  const timelineRef = React.useRef<gsap.core.Timeline | null>(null)
  const userHasInteractedRef = React.useRef(false)
  const lastYValueRef = React.useRef<number | null>(null) // Garder la dernière valeur de y pour éviter les réinitialisations

  // Hooks doivent être appelés avant tout return conditionnel
  const clipPathTransform = useTransform(x, (value) => {
    if (!containerRef.current) return "inset(0 50% 0 0)"
    const containerWidth = containerRef.current.offsetWidth
    const percent = (value / containerWidth) * 100
    return `inset(0 ${100 - percent}% 0 0)`
  })

  const clipPathTransformVertical = useTransform(y, (value) => {
    if (!containerVerticalRef.current) return "inset(0 0 33% 0)"
    const containerHeight = containerVerticalRef.current.offsetHeight
    // Si y est à 67% de la hauteur, on veut révéler 67% du haut (cacher 33% du bas)
    const percent = (value / containerHeight) * 100
    // Le clipPath révèle depuis le haut, donc on cache le bas
    return `inset(0 0 ${100 - percent}% 0)`
  })

  const xTransform = useTransform(x, (value) => {
    if (!containerRef.current) return 0
    return Math.max(0, Math.min(containerRef.current.offsetWidth - 1, value))
  })

  const yTransform = useTransform(y, (value) => {
    if (!containerVerticalRef.current) return 0
    return Math.max(0, Math.min(containerVerticalRef.current.offsetHeight - 1, value))
  })

  // Détecter si on est sur mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if (!containerRef.current) return
    
    const containerWidth = containerRef.current.offsetWidth
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX
    const newPercent = Math.max(0, Math.min(100, ((clientX - rect.left) / containerWidth) * 100))
    
    setSliderPosition(newPercent)
    x.set((newPercent / 100) * containerWidth)
  }

  const handleDragVertical = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if (!containerVerticalRef.current) return
    
    // Arrêter l'animation automatique si l'utilisateur interagit
    if (timelineRef.current) {
      timelineRef.current.kill()
      timelineRef.current = null
    }
    userHasInteractedRef.current = true
    
    const containerHeight = containerVerticalRef.current.offsetHeight
    const rect = containerVerticalRef.current.getBoundingClientRect()
    const clientY = 'touches' in event ? event.touches[0].clientY : (event as MouseEvent).clientY
    const newPercent = Math.max(0, Math.min(100, ((clientY - rect.top) / containerHeight) * 100))
    const newYValue = (newPercent / 100) * containerHeight
    
    setSliderPositionVertical(newPercent)
    y.set(newYValue)
    lastYValueRef.current = newYValue // Sauvegarder la valeur
  }

  // Initialiser la position du slider au montage - Seulement si pas déjà initialisé
  React.useEffect(() => {
    if (containerRef.current && sliderPosition === 67) {
      const initialPosition = (67 / 100) * containerRef.current.offsetWidth
      x.set(initialPosition)
    }
    // Sur mobile, ne réinitialiser que si l'utilisateur n'a jamais interagi
    if (containerVerticalRef.current && sliderPositionVertical === 67 && !userHasInteractedRef.current) {
      const isMobileCheck = window.innerWidth < 768
      if (isMobileCheck) {
        const initialPosition = (67 / 100) * containerVerticalRef.current.offsetHeight
        y.set(initialPosition)
      }
    }
  }, [x, y, sliderPosition, sliderPositionVertical])

  // Synchroniser la position - mais seulement si pas d'animation en cours sur mobile
  React.useEffect(() => {
    if (containerRef.current) {
      x.set((sliderPosition / 100) * containerRef.current.offsetWidth)
    }
    // Sur mobile, ne synchroniser QUE si l'utilisateur a interagi (pas d'animation en cours)
    // Sur desktop, toujours synchroniser
    if (containerVerticalRef.current) {
      const isMobileCheck = window.innerWidth < 768
      if (!isMobileCheck || userHasInteractedRef.current) {
        const newYValue = (sliderPositionVertical / 100) * containerVerticalRef.current.offsetHeight
        // Ne pas réinitialiser si l'utilisateur a interagi et que la nouvelle valeur serait très différente (probablement une réinitialisation non désirée)
        if (userHasInteractedRef.current && lastYValueRef.current !== null) {
          const diff = Math.abs(newYValue - lastYValueRef.current)
          const containerHeight = containerVerticalRef.current.offsetHeight
          // Si la différence est trop grande (plus de 20% de la hauteur), c'est probablement une réinitialisation non désirée
          if (diff > containerHeight * 0.2) {
            return // Ne pas synchroniser pour éviter la réinitialisation
          }
        }
        y.set(newYValue)
        lastYValueRef.current = newYValue
      }
    }
  }, [sliderPosition, sliderPositionVertical, x, y])

  // Animation du slider quand on arrive sur la section
  React.useEffect(() => {
    const container = containerRef.current
    const containerVertical = containerVerticalRef.current
    if ((!container && !containerVertical) || hasAnimatedRef.current) {
      return () => {} // Retourner une fonction de cleanup vide
    }

    // Désactiver ScrollTrigger sur mobile pour éviter les bugs de scroll
    const isMobile = window.innerWidth < 768
    if (isMobile && containerVertical) {
      // Sur mobile, ne lancer l'animation automatique que si l'utilisateur n'a pas interagi
      if (userHasInteractedRef.current) {
        return () => {} // Si l'utilisateur a interagi, ne pas lancer l'animation
      }
      
      if (hasAnimatedRef.current) {
        return () => {} // Retourner une fonction de cleanup vide
      }
      hasAnimatedRef.current = true
      
      const containerHeight = containerVertical.offsetHeight
      const defaultPosition = (67 / 100) * containerHeight
      const topPosition = (30 / 100) * containerHeight
      
      const timeline = gsap.timeline({ repeat: -1, yoyo: true })
        .to({}, {
          duration: 2,
          ease: "power2.inOut",
          onUpdate: function () {
            // Ne pas modifier si l'utilisateur a interagi
            if (userHasInteractedRef.current) {
              timeline.kill()
              return
            }
            const p = this.progress()
            const current = defaultPosition + (topPosition - defaultPosition) * p
            y.set(current)
            setSliderPositionVertical((current / containerHeight) * 100)
          },
        })
      
      timelineRef.current = timeline
      
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill()
          timelineRef.current = null
        }
      }
    }
    
    if (!container) {
      return () => {} // Retourner une fonction de cleanup vide
    }

    let scrollTrigger: ScrollTrigger | null = null

    // Attendre un peu que le DOM soit prêt
    const timer = setTimeout(() => {
      if (hasAnimatedRef.current || !container) return

      const animateSlider = () => {
        if (hasAnimatedRef.current) return
        hasAnimatedRef.current = true

        const containerWidth = container.offsetWidth
        const defaultPosition = (67 / 100) * containerWidth
        const leftPosition = (30 / 100) * containerWidth // Slide vers la gauche à 30%

        // Timeline manuelle pour piloter la MotionValue
        gsap.timeline()
          .to({}, {
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
              const p = this.progress()
              const current = defaultPosition + (leftPosition - defaultPosition) * p
              x.set(current)
              setSliderPosition((current / containerWidth) * 100)
            },
          })
          .to({}, {
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
              const p = this.progress()
              const current = leftPosition + (defaultPosition - leftPosition) * p
              x.set(current)
              setSliderPosition((current / containerWidth) * 100)
            },
          })
      }

      // Déclencher directement sur le conteneur du slider
      // Quand le haut du conteneur atteint le centre du viewport
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top center", // Déclenchement quand le haut du conteneur atteint le centre du viewport
        once: true,
        onEnter: () => {
          animateSlider()
        },
      })

      // Vérifier si le conteneur est déjà visible au montage
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const centerPoint = viewportHeight / 2
      
      // Si le conteneur est déjà au-dessus du centre du viewport
      if (rect.top <= centerPoint && rect.bottom > 0) {
        animateSlider()
      }
    }, 500) // Attendre 500ms pour que le ScrollReveal ait le temps de rendre

    return () => {
      clearTimeout(timer)
      if (scrollTrigger) {
        scrollTrigger.kill()
      }
    }
  }, [x])

  return (
    <Section variant="white" padding="lg" className="relative" ref={sectionRef} style={{ paddingBottom: '6vh' }}>
      {/* Fond gradient qui commence plus bas sur mobile */}
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-0 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
            À chaque étape du parcours d'achat, vos clients hésitent.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          {isMobile ? (
            /* Mobile Layout - Vertical Slider */
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl" ref={containerVerticalRef} style={{ minHeight: '500px' }}>
              {/* Before Section - Avec PARCEL (base layer, full height) */}
              <div className="absolute inset-0 bg-gray-900 border-b border-gray-700 flex items-center">
                <div className="w-full px-4 py-4">
                  <div className="w-full">
                    <h3 className="text-lg font-normal mb-4 text-white" style={{ color: '#ffffff' }}>{comparison.after.title}</h3>
                    <div className="space-y-2">
                      {comparison.after.items.map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-start gap-2 p-2 rounded-lg border border-gray-200"
                          style={{ backgroundColor: "#fcf2f8" }}
                        >
                          <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600 break-words leading-relaxed">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* After Section - E-commerce classique (overlay - full height, slides from bottom) */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: clipPathTransformVertical,
                }}
              >
                {/* Fond blanc opaque pour masquer le contenu derrière */}
                <div className="absolute inset-0 bg-white border-t border-gray-200" />
                {/* Contenu avec opacity - Structure identique à "Avec PARCEL" */}
                <div 
                  className="absolute inset-0 flex items-center"
                  style={{
                    opacity: 0.4,
                  }}
                >
                  <div className="w-full px-4 py-4">
                    <div className="w-full">
                      <h3 className="text-lg font-normal text-black mb-4">{comparison.before.title}</h3>
                      <div className="space-y-2">
                        {comparison.before.items.map((item, index) => (
                          <motion.div
                            key={item.text}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className="flex items-start gap-2 p-2 rounded-lg border border-gray-200"
                            style={{ backgroundColor: "#fcf2f8" }}
                          >
                            <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600 break-words leading-relaxed">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Slider Handle Vertical */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gray-400 cursor-row-resize z-30"
                style={{
                  y: yTransform,
                }}
                drag="y"
                dragConstraints={containerVerticalRef}
                dragElastic={0}
                dragMomentum={false}
                onDrag={handleDragVertical}
              >
                {/* Handle Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-400 flex items-center justify-center cursor-grab active:cursor-grabbing"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GripVertical className="w-4 h-4 text-gray-500 rotate-90" />
                </motion.div>
              </motion.div>

              {/* Label */}
              <div className="absolute top-2 left-2 z-10">
                <span className="text-xs text-gray-400 font-medium bg-white/80 px-2 py-1 rounded-full">Glissez pour comparer</span>
              </div>
            </div>
          ) : (
            /* Desktop Layout - Slider */
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12" ref={containerRef}>
              {/* Before Section - Avec PARCEL (left side, fixed) */}
              <div className="relative min-h-[350px] md:min-h-[400px] flex items-center">
                <div className="w-full h-full absolute inset-0 bg-gray-900 border-r border-gray-700 px-6 md:px-10 py-4 md:py-6 flex items-center">
                  <div className="w-full max-w-4xl">
                    <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6" style={{ color: '#ffffff' }}>{comparison.after.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                      {comparison.after.items.map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          className="flex items-center gap-3 p-4 md:p-5 rounded-lg border border-gray-200"
                          style={{ backgroundColor: "#fcf2f8" }}
                        >
                          <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-600 break-words leading-relaxed">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* After Section - E-commerce classique (overlay - full width, slides from right) */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: clipPathTransform,
                }}
              >
                {/* Fond blanc opaque pour masquer le contenu derrière - sans opacity ni blur */}
                <div className="absolute inset-0 bg-white border-l border-gray-200" />
                {/* Contenu avec opacity et blur */}
                <div 
                  className="absolute inset-0 flex items-center"
                  style={{
                    opacity: 0.4,
                  }}
                >
                  <div className="w-full px-6 md:px-10 py-4 md:py-6">
                    <div className="w-full max-w-4xl">
                      <h3 className="text-xl md:text-2xl font-normal text-black mb-4 md:mb-6">{comparison.before.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                        {comparison.before.items.map((item, index) => (
                          <motion.div
                            key={item.text}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="flex items-center gap-3 p-4 md:p-5 rounded-lg border border-gray-200"
                          style={{ backgroundColor: "#fcf2f8" }}
                          >
                            <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-600 break-words leading-relaxed">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Slider Handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-px bg-gray-400 cursor-col-resize z-30"
                style={{
                  x: xTransform,
                }}
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0}
                dragMomentum={false}
                onDrag={handleDrag}
              >
                {/* Handle Circle - much smaller */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-gray-400 flex items-center justify-center cursor-grab active:cursor-grabbing"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GripVertical className="w-3 h-3 text-gray-500" />
                </motion.div>
              </motion.div>

              {/* Labels */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">Glissez pour comparer</span>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </Section>
  )
}

