'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GlassClusterSceneProps {
  stage?: number
}

export function GlassClusterScene({ stage = 0 }: GlassClusterSceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  const items = useMemo(() => [
    { pos: [-2.2, 1.2, -0.5] as [number, number, number], scale: 0.8 },
    { pos: [2.4, 0.8, -1.0] as [number, number, number], scale: 0.9 },
    { pos: [-1.8, -1.2, 0.2] as [number, number, number], scale: 0.75 },
    { pos: [2.0, -1.0, -0.4] as [number, number, number], scale: 0.85 },
  ], [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <group key={i} position={item.pos} scale={item.scale}>
          {/* Translucent Dark Glass Base */}
          <mesh>
            <icosahedronGeometry args={[0.9, 1]} />
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
          {/* Thin Glowing Border Outline */}
          <mesh>
            <icosahedronGeometry args={[0.92, 0]} />
            <meshStandardMaterial
              color="#232F33"
              emissive="#4DE8DC"
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}
export default GlassClusterScene
