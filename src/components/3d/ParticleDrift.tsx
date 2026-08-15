'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleDriftProps {
  count?: number
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function ParticleDrift({ count = 2500 }: ParticleDriftProps) {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate initial random particle positions and phase offsets
  const [positions, initialY, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const initY = new Float32Array(count)
    const ph = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const x = (pseudoRandom(i * 4 + 1) - 0.5) * 24
      const y = (pseudoRandom(i * 4 + 2) - 0.5) * 20
      const z = (pseudoRandom(i * 4 + 3) - 0.5) * 16

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      initY[i] = y
      ph[i] = pseudoRandom(i * 4 + 4) * Math.PI * 2
    }

    return [pos, initY, ph]
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const array = posAttr.array as Float32Array
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const yIdx = i * 3 + 1
      array[yIdx] = initialY[i] + Math.sin(time * 0.4 + phases[i]) * 0.4
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#4DE8DC"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
