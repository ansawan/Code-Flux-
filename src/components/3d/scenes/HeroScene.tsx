'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'
import { calcLocalProgress } from '@/hooks/useLocalProgress'

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function HeroScene() {
  const pointsRef = useRef<THREE.Points>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  const particleCount = 6500
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const col = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color('#2FBFB0') // Teal Core
    const color2 = new THREE.Color('#4DE8DC') // Teal Glow

    for (let i = 0; i < particleCount; i++) {
      const u = pseudoRandom(i * 4 + 1) * Math.PI * 2
      const v = pseudoRandom(i * 4 + 2) * Math.PI * 2
      const R = 3.2
      const r = 1.1 + (pseudoRandom(i * 4 + 3) - 0.5) * 0.5

      const x = (R + r * Math.cos(v)) * Math.cos(u)
      const y = (R + r * Math.cos(v)) * Math.sin(u)
      const z = r * Math.sin(v) + (pseudoRandom(i * 4 + 4) - 0.5) * 0.8

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      const mixRatio = (Math.sin(u * 2) + 1) / 2
      const tempColor = color1.clone().lerp(color2, mixRatio)

      col[i * 3] = tempColor.r
      col[i * 3 + 1] = tempColor.g
      col[i * 3 + 2] = tempColor.b
    }

    return { positions: pos, colors: col }
  }, [particleCount])

  useFrame((state, delta) => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.0, 0.22)

    // Motion dampening when centered/being read
    const settled = localP < 0.15
    const rotSpeed = settled ? 0.05 : 0.15

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotSpeed
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      
      const opacity = 1 - Math.pow(localP, 2)
      groupRef.current.scale.setScalar(Math.max(0.001, 1 - localP * 0.5))
      
      if (pointsRef.current) {
        (pointsRef.current.material as THREE.PointsMaterial).opacity = opacity
      }
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * rotSpeed * 1.5
      sphereRef.current.rotation.z += delta * rotSpeed
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Single-Hue Teal Particle Torus Helix */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Inner Glowing Teal Wireframe Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.8, 24, 24]} />
        <meshBasicMaterial
          color="#4DE8DC"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Secondary Accent Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 64]} />
        <meshBasicMaterial color="#1D6E68" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}
