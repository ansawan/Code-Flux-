'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CircuitTubeSceneProps {
  stage?: number
}

export function CircuitTubeScene({ stage = 0 }: CircuitTubeSceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -1]}>
      {/* Circuit Tube Geometry */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 16, 64]} />
        <meshStandardMaterial
          color="#2FBFB0"
          emissive="#4DE8DC"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[1.8, 0.025, 16, 48]} />
        <meshBasicMaterial color="#4DE8DC" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
export default CircuitTubeScene
