"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * YouTube embed piloté par l'API IFrame.
 *
 * - Le son est ON par défaut : dès qu'une vidéo devient active/visible on
 *   appelle unMute() + playVideo(). (Certains navigateurs bloquent la lecture
 *   sonore sans interaction préalable : YouTube affiche alors « appuyer pour
 *   activer le son » — c'est le maximum atteignable côté navigateur.)
 * - La vidéo se met en pause dès qu'elle sort du champ.
 * - `active` (optionnel) force la lecture/pause depuis le parent (ex. étape
 *   active du funnel). Sans `active`, c'est la visibilité qui décide.
 *
 * Le player n'est instancié que lorsqu'il approche du viewport : rien ne se
 * charge au chargement de la page pour les vidéos plus bas.
 */

// Chargement unique de l'API IFrame de YouTube.
let apiPromise: Promise<void> | null = null
function loadYouTubeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  const w = window as unknown as {
    YT?: { Player: unknown }
    onYouTubeIframeAPIReady?: () => void
  }
  if (w.YT?.Player) return Promise.resolve()
  if (apiPromise) return apiPromise
  apiPromise = new Promise<void>((resolve) => {
    const prev = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.head.appendChild(tag)
  })
  return apiPromise
}

export function YouTubeEmbed({
  videoId,
  title,
  className,
  rounded = "rounded-2xl",
  active,
}: {
  videoId: string
  title: string
  className?: string
  rounded?: string
  active?: boolean
}) {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const hostRef = React.useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = React.useRef<any>(null)
  const [ready, setReady] = React.useState(false)
  const [near, setNear] = React.useState(false)
  const [inView, setInView] = React.useState(false)

  // (a) créer le player quand on approche, (b) suivre la visibilité réelle.
  React.useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setNear(true)
          setInView(e.intersectionRatio >= 0.5)
        }
      },
      { threshold: [0, 0.5], rootMargin: "200px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Instancier le player une seule fois, à l'approche du viewport.
  React.useEffect(() => {
    if (!near || playerRef.current || !hostRef.current) return
    let cancelled = false
    loadYouTubeAPI().then(() => {
      if (cancelled || !hostRef.current) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const YT = (window as any).YT
      playerRef.current = new YT.Player(hostRef.current, {
        width: "100%",
        height: "100%",
        videoId,
        playerVars: {
          autoplay: 0,
          mute: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => setReady(true),
        },
      })
    })
    return () => {
      cancelled = true
    }
  }, [near, videoId])

  // Piloter lecture / pause + son.
  React.useEffect(() => {
    const p = playerRef.current
    if (!ready || !p) return
    const shouldPlay = (active ?? true) && inView
    try {
      if (shouldPlay) {
        p.unMute()
        p.setVolume(100)
        p.playVideo()
      } else {
        p.pauseVideo()
      }
    } catch {
      /* le player n'est pas encore prêt à recevoir la commande */
    }
  }, [ready, inView, active])

  React.useEffect(
    () => () => {
      try {
        playerRef.current?.destroy?.()
      } catch {
        /* noop */
      }
    },
    [],
  )

  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden bg-gray-900 shadow-lg",
        rounded,
        className,
      )}
    >
      <div
        ref={wrapRef}
        title={title}
        className="absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full"
      >
        {/* Remplacé par l'iframe YouTube au montage du player. */}
        <div ref={hostRef} className="h-full w-full" />
      </div>
    </div>
  )
}
