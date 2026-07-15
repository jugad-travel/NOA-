"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Sober YouTube embed.
 *
 * autoplay (default): the iframe mounts when the player scrolls into view and
 * starts MUTED in a loop (browsers only allow muted autoplay) with controls
 * visible so visitors can enable sound. Nothing loads before the player is
 * close to the viewport, so pages stay fast.
 *
 * autoplay=false: classic façade — thumbnail + play button, click to load.
 */
export function YouTubeEmbed({
  videoId,
  title,
  className,
  rounded = "rounded-2xl",
  autoplay = true,
}: {
  videoId: string
  title: string
  className?: string
  rounded?: string
  autoplay?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    if (!autoplay || mounted) return
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [autoplay, mounted])

  const src = autoplay
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&controls=1`
    : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  const thumbnail = (
    <>
      {/* maxres first, hq fallback (YouTube serves a tiny placeholder when
          maxres is missing — the swap keeps it sharp) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        onError={(e) => {
          const img = e.currentTarget
          if (!img.src.includes("hqdefault")) {
            img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
          }
        }}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </>
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-video overflow-hidden bg-gray-900 shadow-lg",
        rounded,
        className,
      )}
    >
      {mounted ? (
        <>
          {/* Thumbnail stays underneath while the iframe boots. */}
          {thumbnail}
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </>
      ) : autoplay ? (
        // Autoplay pending: plain poster (the observer mounts the iframe).
        thumbnail
      ) : (
        <button
          type="button"
          onClick={() => setMounted(true)}
          aria-label={`Lire la vidéo : ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {thumbnail}
          <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/15" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 md:h-8 md:w-8 text-gray-900 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
