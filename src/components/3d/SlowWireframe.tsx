'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function SlowWireframe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
      meshRef.current.rotation.x += delta * 0.025
    }
  })

  return (
    <group position={[0, 0, -2]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[4.2, 2]} />
        <meshBasicMaterial
          color="#1D6E68"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  )
}
