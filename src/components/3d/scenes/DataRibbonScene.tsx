'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function DataRibbonScene() {
  const groupRef = useRef<THREE.Group>(null)

  // Generate 4 upward-sloping tube curves
  const ribbons = useMemo(() => {
    const arr: THREE.TubeGeometry[] = []
    const count = 4

    for (let i = 0; i < count; i++) {
      const points: THREE.Vector3[] = []
      const xOffset = (i - 1.5) * 2.2
      const zOffset = (pseudoRandom(i + 1) - 0.5) * 2.0

      for (let step = 0; step < 20; step++) {
        const t = step / 19
        const y = (t - 0.5) * 12
        const x = xOffset + Math.sin(t * Math.PI * 2 + i) * 0.8
        const z = zOffset + Math.cos(t * Math.PI * 1.5 + i) * 0.6
        points.push(new THREE.Vector3(x, y, z))
      }

      const curve = new THREE.CatmullRomCurve3(points)
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.02, 8, false)
      arr.push(tubeGeo)
    }

    return arr
  }, [])

  // Floating metric glyphs data
  const glyphs = useMemo(() => [
    { text: '+185%', pos: [-3.2, 2.5, -1] as [number, number, number] },
    { text: '3.8x', pos: [3.0, 1.2, -0.5] as [number, number, number] },
    { text: '↑ 40%', pos: [-2.4, -1.5, 0.2] as [number, number, number] },
    { text: '+24%', pos: [2.8, -2.2, -1.2] as [number, number, number] },
    { text: '98%', pos: [-1.2, 3.2, 0.5] as [number, number, number] },
    { text: '10x', pos: [1.8, -3.0, 0.4] as [number, number, number] },
  ], [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y += delta * 0.12
      // Reset position when group drifts past top
      if (groupRef.current.position.y > 2.0) {
        groupRef.current.position.y = -2.0
      }
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* 4 Glowing Data Ribbons */}
      {ribbons.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          <meshStandardMaterial
            color="#2FBFB0"
            emissive="#4DE8DC"
            emissiveIntensity={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Floating Metric Glyphs */}
      {glyphs.map((g, i) => (
        <Text
          key={i}
          position={g.pos}
          fontSize={0.35}
          color="#4DE8DC"
          anchorX="center"
          anchorY="middle"
        >
          <meshBasicMaterial color="#4DE8DC" transparent opacity={0.22} />
          {g.text}
        </Text>
      ))}
    </group>
  )
}
export default DataRibbonScene
