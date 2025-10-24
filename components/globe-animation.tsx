"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })

export function GlobeAnimation() {
  const globeEl = useRef<any>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!globeEl.current || !isReady) return

    try {
      // Enable auto-rotation
      const controls = (globeEl.current as any).controls()
      if (controls) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5
        controls.enableZoom = false
        controls.enablePan = false
      }
      // Set initial camera position
      ;(globeEl.current as any).pointOfView({ altitude: 2.5 }, 0)
    } catch (err) {
      console.error("Error setting up globe:", err)
    }
  }, [isReady])

  const handleGlobeReady = () => {
    setIsReady(true)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Globe
        ref={globeEl}
        onGlobeReady={handleGlobeReady}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
        lineHoverPrecision={0}
        width={typeof window !== "undefined" ? window.innerWidth * 0.4 : 400}
        height={typeof window !== "undefined" ? window.innerHeight * 0.5 : 500}
        backgroundColor="rgba(255, 255, 255, 0)"
        showAtmosphere={true}
        atmosphereColor="#D4AF37"
        atmosphereAltitude={0.15}
        linksData={[]}
      />
    </div>
  )
}
