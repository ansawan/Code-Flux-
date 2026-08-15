'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'

export interface CameraKeyframe {
  t: number
  pos: [number, number, number]
  look: [number, number, number]
}

const DEFAULT_KEYFRAMES: CameraKeyframe[] = [
  { t: 0.00, pos: [0, 0, 8.0], look: [0, 0, 0] }, // Hero
  { t: 0.12, pos: [4.0, 1.0, 5.0], look: [0, 0.5, 0] }, // Services
  { t: 0.24, pos: [-2.0, 1.0, 4.0], look: [0, 0, 0] }, // About Teaser
  { t: 0.38, pos: [-3.0, 2.0, 4.0], look: [0, 0, -2] }, // Process
  { t: 0.52, pos: [0, -1.0, 6.0], look: [2, 0, 0] }, // Showcase
  { t: 0.64, pos: [3.0, 0.5, 5.0], look: [0, 0, 0] }, // Testimonials
  { t: 0.76, pos: [5.0, 0, 3.0], look: [0, 0, 0] }, // Stats
  { t: 0.88, pos: [-2.0, -0.5, 5.0], look: [0, 0, 0] }, // Pricing Teaser
  { t: 1.00, pos: [0, 0, 4.0], look: [0, 0, -1] }, // CTA
]

function remapWithDwell(p: number, stops: number[], dwell: number) {
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i]
    const b = stops[i + 1]
    const holdEnd = a + (b - a) * dwell
    if (p >= a && p <= holdEnd) return a
    if (p > holdEnd && p <= b) {
      const t = (p - holdEnd) / (b - holdEnd)
      return a + (b - a) * t
    }
  }
  return p
}

interface CameraRigProps {
  keyframes?: CameraKeyframe[]
  dwell?: number
}

export function CameraRig({ keyframes = DEFAULT_KEYFRAMES, dwell = 0.05 }: CameraRigProps) {
  const targetPos = useRef(new THREE.Vector3())
  const targetLook = useRef(new THREE.Vector3())
  const currentLook = useRef(new THREE.Vector3(0, 0, 0))

  const { posCurve, lookCurve, stops } = useMemo(() => {
    const activeKeyframes = keyframes.length >= 2 ? keyframes : DEFAULT_KEYFRAMES
    const pCurve = new THREE.CatmullRomCurve3(activeKeyframes.map((k) => new THREE.Vector3(...k.pos)))
    const lCurve = new THREE.CatmullRomCurve3(activeKeyframes.map((k) => new THREE.Vector3(...k.look)))
    const stps = activeKeyframes.map((k) => k.t)
    return { posCurve: pCurve, lookCurve: lCurve, stops: stps }
  }, [keyframes])

  useFrame((state) => {
    const raw = useScrollStore.getState().progress
    const eased = remapWithDwell(raw, stops, dwell)

    posCurve.getPoint(eased, targetPos.current)
    lookCurve.getPoint(eased, targetLook.current)

    // Subtle mouse parallax effect
    const mouseX = state.pointer.x * 0.3
    const mouseY = state.pointer.y * 0.3

    targetPos.current.x += mouseX
    targetPos.current.y += mouseY

    // Smooth lerp camera position
    state.camera.position.lerp(targetPos.current, 0.06)

    // Smooth lerp camera lookAt target
    currentLook.current.lerp(targetLook.current, 0.06)
    state.camera.lookAt(currentLook.current)
  })

  return null
}
export default CameraRig
