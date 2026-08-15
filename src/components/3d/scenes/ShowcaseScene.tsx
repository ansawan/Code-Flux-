'use client'
import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'
import { calcLocalProgress } from '@/hooks/useLocalProgress'

interface ShowcasePanelProps {
  position: [number, number, number]
  rotation: [number, number, number]
  title: string
  subtitle: string
  accentColor: string
  index: number
  settled: boolean
}

function ShowcasePanel({ position, rotation, title, subtitle, accentColor, index, settled }: ShowcasePanelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const planeGeo = useMemo(() => new THREE.PlaneGeometry(3.2, 1.9), [])
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 608
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Subtle dark gradient background for texture interface
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 608)
    bgGrad.addColorStop(0, '#0D1417')
    bgGrad.addColorStop(1, '#1A2428')
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, 1024, 608)

    // Subtle grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
    ctx.lineWidth = 1
    for (let x = 0; x < 1024; x += 40) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 608)
      ctx.stroke()
    }
    for (let y = 0; y < 608; y += 40) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(1024, y)
      ctx.stroke()
    }

    // Top window bar dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)'
    ctx.fillRect(0, 0, 1024, 50)
    ctx.fillStyle = accentColor
    ctx.fillRect(24, 20, 10, 10)
    ctx.fillRect(40, 20, 10, 10)
    ctx.fillRect(56, 20, 10, 10)

    // Content typography
    ctx.fillStyle = '#EAF6F5'
    ctx.font = 'bold 38px sans-serif'
    ctx.fillText(title, 40, 140)

    ctx.fillStyle = accentColor
    ctx.font = '20px monospace'
    ctx.fillText(`${subtitle}`, 40, 185)

    // Chart curve
    ctx.strokeStyle = accentColor
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.moveTo(40, 460)
    ctx.bezierCurveTo(200, 340, 400, 500, 600, 300)
    ctx.bezierCurveTo(750, 160, 850, 380, 980, 240)
    ctx.stroke()

    // Cards UI mockups
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)'
    ctx.roundRect(40, 240, 270, 110, 8)
    ctx.fill()
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
    ctx.stroke()

    ctx.roundRect(340, 240, 270, 110, 8)
    ctx.fill()
    ctx.stroke()

    ctx.roundRect(640, 240, 270, 110, 8)
    ctx.fill()
    ctx.stroke()

    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    setTexture(tex)

    return () => {
      tex.dispose()
    }
  }, [title, subtitle, accentColor])

  useFrame((state) => {
    if (groupRef.current) {
      const speed = settled ? 0.3 : 1.2
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Translucent Dark Glass Base Panel */}
      <mesh>
        <planeGeometry args={[3.2, 1.9]} />
        <meshPhysicalMaterial
          color="#12191C"
          transparent
          opacity={0.18}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Thin Glowing Flux-Teal Edge Outline */}
      <lineSegments>
        <edgesGeometry args={[planeGeo]} />
        <lineBasicMaterial color="#4DE8DC" transparent opacity={0.8} />
      </lineSegments>

      {/* Screen Canvas UI Texture Face */}
      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={[3.16, 1.86]} />
        {texture ? (
          <meshBasicMaterial map={texture} transparent opacity={0.88} />
        ) : (
          <meshBasicMaterial color="#12191C" transparent opacity={0.18} />
        )}
      </mesh>
    </group>
  )
}

export function ShowcaseScene() {
  const containerRef = useRef<THREE.Group>(null)
  const isSettledRef = useRef(false)

  // Staggered layout with subtle rotation (max ±8° / ±0.12 rad) and generous depth spacing
  const projects = useMemo(() => [
    { pos: [-2.8, 1.2, 0.4] as [number, number, number], rot: [0.04, 0.1, 0] as [number, number, number], title: 'Nova AI Platform', subtitle: '40% Response Cut', color: '#4DE8DC', index: 0 },
    { pos: [2.6, 1.0, -0.4] as [number, number, number], rot: [-0.04, -0.1, 0] as [number, number, number], title: 'FluxPay Engine', subtitle: '10x Transaction Scale', color: '#2FBFB0', index: 1 },
    { pos: [-2.6, -1.2, -0.8] as [number, number, number], rot: [0.06, 0.08, 0] as [number, number, number], title: 'Anchor Logistics', subtitle: 'Real-time Telemetry', color: '#4DE8DC', index: 2 },
    { pos: [2.8, -1.4, -1.6] as [number, number, number], rot: [-0.05, -0.12, 0] as [number, number, number], title: 'Aether Cloud', subtitle: 'Zero-Trust Infrastructure', color: '#2FBFB0', index: 3 },
  ], [])

  useFrame(() => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.55, 0.78)

    isSettledRef.current = localP > 0.35 && localP < 0.8

    if (containerRef.current) {
      const opacity = Math.sin(localP * Math.PI)
      containerRef.current.scale.setScalar(Math.max(0.001, opacity * 1.02))
      containerRef.current.position.x = (localP - 0.5) * 0.8
    }
  })

  return (
    <group ref={containerRef} position={[0, 0, 0]}>
      {projects.map((p, i) => (
        <ShowcasePanel
          key={i}
          position={p.pos}
          rotation={p.rot}
          title={p.title}
          subtitle={p.subtitle}
          accentColor={p.color}
          index={p.index}
          settled={isSettledRef.current}
        />
      ))}
    </group>
  )
}
