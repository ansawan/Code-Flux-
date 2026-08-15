'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface EdgeData {
  start: THREE.Vector3
  end: THREE.Vector3
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function NeuralGraphScene() {
  const groupRef = useRef<THREE.Group>(null)
  const signalRef = useRef<THREE.Mesh>(null)

  // 1. Generate ~14 nodes deterministically in a sphere volume
  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = []
    const count = 14
    for (let i = 0; i < count; i++) {
      const u = pseudoRandom(i * 3 + 1)
      const v = pseudoRandom(i * 3 + 2)
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 2.5 + pseudoRandom(i * 3 + 3) * 2.0

      const sinPhi = Math.sin(phi)
      const x = r * sinPhi * Math.cos(theta)
      const y = r * sinPhi * Math.sin(theta)
      const z = r * Math.cos(phi)

      arr.push(new THREE.Vector3(x, y, z))
    }
    return arr
  }, [])

  // 2. Distance-threshold edge connections (~18 edges)
  const edges = useMemo(() => {
    const list: EdgeData[] = []
    const maxDist = 4.2
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          list.push({ start: nodes[i], end: nodes[j] })
        }
      }
    }
    return list
  }, [nodes])

  // 3. Line segments geometry for edges
  const linesGeo = useMemo(() => {
    const points: THREE.Vector3[] = []
    edges.forEach((e) => {
      points.push(e.start)
      points.push(e.end)
    })
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return geo
  }, [edges])

  // 4. Signal lerp state ref
  const signalStateRef = useRef({ edgeIdx: 0, progress: 0 })

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }

    if (signalRef.current && edges.length > 0) {
      let p = signalStateRef.current.progress + delta * 0.8
      let idx = signalStateRef.current.edgeIdx

      if (p >= 1) {
        p = 0
        idx = (idx + 1) % edges.length
      }

      signalStateRef.current = { edgeIdx: idx, progress: p }

      const currentEdge = edges[idx]
      if (currentEdge) {
        signalRef.current.position.lerpVectors(currentEdge.start, currentEdge.end, p)
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Inner Dark Core */}
          <mesh>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              color="#12191C"
              emissive="#4DE8DC"
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
          {/* Outer Halo Ring */}
          <mesh>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshBasicMaterial
              color="#4DE8DC"
              transparent
              opacity={0.15}
              wireframe
            />
          </mesh>
        </group>
      ))}

      {/* Connecting Edges */}
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial color="#1D6E68" transparent opacity={0.35} />
      </lineSegments>

      {/* Signal Particle Firing along random edge */}
      <mesh ref={signalRef}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#9FFFF5" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}
export default NeuralGraphScene
