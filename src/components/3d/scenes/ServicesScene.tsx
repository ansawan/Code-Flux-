'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'
import { calcLocalProgress } from '@/hooks/useLocalProgress'

interface ServiceShapeProps {
  position: [number, number, number]
  speed: number
  scale: number
  index: number
  localP: number
}

function ServiceShape({ position, speed, scale, index, localP }: ServiceShapeProps) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    // Calms down when section local progress is centered / being read (0.4 - 0.8)
    const settled = localP > 0.35 && localP < 0.8
    const effectiveSpeed = settled ? speed * 0.15 : speed

    if (groupRef.current) {
      groupRef.current.rotation.x += delta * effectiveSpeed * 0.7
      groupRef.current.rotation.y += delta * effectiveSpeed
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * (settled ? 0.5 : 1.5) + index) * 0.12
    }
  })

  return (
    <group position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Metal Body with Teal Emissive Rim */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial
            color="#232F33"
            emissive="#4DE8DC"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </mesh>

        {/* Inner Slate Translucent Core */}
        <mesh scale={0.75}>
          <icosahedronGeometry args={[0.65, 1]} />
          <meshPhysicalMaterial
            color="#12191C"
            emissive="#2FBFB0"
            emissiveIntensity={0.2}
            roughness={0.3}
            transmission={0.6}
            thickness={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Outer Orbit Ring */}
        <mesh rotation={[Math.PI / 4, index * 0.5, 0]} scale={1.3}>
          <torusGeometry args={[0.65, 0.01, 16, 32]} />
          <meshBasicMaterial color="#4DE8DC" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  )
}

export function ServicesScene() {
  const containerRef = useRef<THREE.Group>(null)
  const localPRef = useRef(0)

  // 6 icosahedron shapes evenly spaced along 3D arc for the 6 services
  const shapes = useMemo(() => [
    { pos: [0.8, 2.2, -1.2] as [number, number, number], speed: 0.5, scale: 1.05, index: 0 },
    { pos: [2.5, 1.4, -0.6] as [number, number, number], speed: 0.6, scale: 0.95, index: 1 },
    { pos: [3.4, 0.3, -0.2] as [number, number, number], speed: 0.45, scale: 1.1, index: 2 },
    { pos: [3.2, -0.9, -0.5] as [number, number, number], speed: 0.55, scale: 0.9, index: 3 },
    { pos: [2.0, -1.8, -1.0] as [number, number, number], speed: 0.65, scale: 1.0, index: 4 },
    { pos: [0.5, -2.4, -1.6] as [number, number, number], speed: 0.5, scale: 0.95, index: 5 },
  ], [])

  useFrame(() => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.15, 0.38)
    localPRef.current = localP

    if (containerRef.current) {
      const opacity = Math.sin(localP * Math.PI)
      containerRef.current.scale.setScalar(Math.max(0.001, opacity * 1.1))
      containerRef.current.rotation.y = (localP - 0.5) * 0.4
    }
  })

  return (
    <group ref={containerRef} position={[1, 0, 0]}>
      {shapes.map((s, i) => (
        <ServiceShape
          key={i}
          position={s.pos}
          speed={s.speed}
          scale={s.scale}
          index={s.index}
          localP={localPRef.current}
        />
      ))}
    </group>
  )
}
