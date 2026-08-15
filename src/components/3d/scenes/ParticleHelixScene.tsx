'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleHelixSceneProps {
  dim?: boolean
}

export function ParticleHelixScene({ dim = false }: ParticleHelixSceneProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 1200
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const tealColor = new THREE.Color('#4DE8DC')

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 10
      const radius = 1.8 + Math.sin(t * 0.5) * 0.4
      const x = Math.cos(t) * radius
      const y = (i / count - 0.5) * 10
      const z = Math.sin(t) * radius

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      col[i * 3] = tealColor.r
      col[i * 3 + 1] = tealColor.g
      col[i * 3 + 2] = tealColor.b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={dim ? 0.03 : 0.045}
        vertexColors
        transparent
        opacity={dim ? 0.35 : 0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
export default ParticleHelixScene
