'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function WireframeGlobeScene() {
  const globeRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.05
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    }
  })

  return (
    <group ref={globeRef} position={[1.5, 0, -1]}>
      {/* Outer Wireframe Globe */}
      <mesh>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial
          color="#4DE8DC"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Inner Glowing Core */}
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#12191C"
          emissive="#2FBFB0"
          emissiveIntensity={0.6}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}
export default WireframeGlobeScene
