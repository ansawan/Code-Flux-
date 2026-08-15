'use client'
import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollStore } from '@/hooks/useScrollProgress'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    lenis.on('scroll', (e: { scroll: number; limit: number; velocity: number }) => {
      const progress = e.limit > 0 ? e.scroll / e.limit : 0
      useScrollStore.getState().setProgress(progress, e.velocity)
      ScrollTrigger.update()
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
