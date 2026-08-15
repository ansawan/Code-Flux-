'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'
import { calcLocalProgress } from '@/hooks/useLocalProgress'

interface StatCard3DProps {
  position: [number, number, number]
  value: string
  label: string
  index: number
  settled: boolean
}

function StatCard3D({ position, value, label, index, settled }: StatCard3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  const planeGeo = useMemo(() => new THREE.PlaneGeometry(2.4, 1.6), [])

  useFrame((state) => {
    if (groupRef.current) {
      const speed = settled ? 0.4 : 1.5
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Translucent Dark Glass Base Panel */}
      <mesh>
        <planeGeometry args={[2.4, 1.6]} />
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

      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 4, index * 0.4, 0]} position={[0, 0, 0.02]}>
        <torusGeometry args={[1.3, 0.008, 16, 32]} />
        <meshBasicMaterial color="#4DE8DC" transparent opacity={0.4} />
      </mesh>

      {/* 3D Numerals */}
      <group position={[0, 0.15, 0.05]}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.65}
          color="#4DE8DC"
          anchorX="center"
          anchorY="middle"
        >
          {value}
        </Text>
      </group>

      {/* Label Text */}
      <Text
        position={[0, -0.38, 0.05]}
        fontSize={0.18}
        color="#8FA6A3"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  )
}

export function StatsScene() {
  const containerRef = useRef<THREE.Group>(null)
  const globeRef = useRef<THREE.Mesh>(null)
  const isSettledRef = useRef(false)

  useFrame((state, delta) => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.75, 0.92)

    const settled = localP > 0.35 && localP < 0.85
    isSettledRef.current = settled

    if (containerRef.current) {
      const opacity = Math.sin(localP * Math.PI)
      containerRef.current.scale.setScalar(Math.max(0.001, opacity * 1.05))
    }

    if (globeRef.current) {
      const rotSpeed = settled ? 0.05 : 0.2
      globeRef.current.rotation.y += delta * rotSpeed
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={containerRef} position={[4.8, 0, 0]}>
      {/* Background Rotating Low-Poly Wireframe Globe in Dark Void */}
      <mesh ref={globeRef} position={[0, 0, -2.5]}>
        <icosahedronGeometry args={[3.2, 2]} />
        <meshBasicMaterial color="#1D6E68" wireframe transparent opacity={0.22} />
      </mesh>

      {/* Floating Dark-Glass Stat Pedestals */}
      <StatCard3D position={[-2.2, 1.1, 0]} value="120+" label="Projects Delivered" index={0} settled={isSettledRef.current} />
      <StatCard3D position={[2.0, 0.9, 0.4]} value="98%" label="Client Retention" index={1} settled={isSettledRef.current} />
      <StatCard3D position={[-2.0, -1.1, 0.2]} value="4.2x" label="Avg ROI Boost" index={2} settled={isSettledRef.current} />
      <StatCard3D position={[2.2, -0.9, -0.2]} value="24/7" label="Systems Monitored" index={3} settled={isSettledRef.current} />
    </group>
  )
}
