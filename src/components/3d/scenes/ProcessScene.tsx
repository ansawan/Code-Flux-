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

export function ProcessScene() {
  const containerRef = useRef<THREE.Group>(null)
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([])
  const burstsRef = useRef<(THREE.Points | null)[]>([])

  const tubeCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6, 3, -4),
      new THREE.Vector3(-4, 1.8, -2),
      new THREE.Vector3(-3, 0.2, 0),
      new THREE.Vector3(-4.5, -1.2, -1),
      new THREE.Vector3(-2.5, -2.5, -3),
    ])
  }, [])

  const nodePositions = useMemo(() => {
    const tValues = [0.15, 0.40, 0.70, 0.92]
    return tValues.map((t) => tubeCurve.getPoint(t))
  }, [tubeCurve])

  const burstData = useMemo(() => {
    return nodePositions.map((_, nodeIdx) => {
      const count = 60
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        const seed = nodeIdx * count + i
        const dir = new THREE.Vector3(
          (pseudoRandom(seed * 3 + 1) - 0.5) * 2,
          (pseudoRandom(seed * 3 + 2) - 0.5) * 2,
          (pseudoRandom(seed * 3 + 3) - 0.5) * 2
        ).normalize().multiplyScalar(0.4 + pseudoRandom(seed * 3 + 4) * 0.6)
        pos[i * 3] = dir.x
        pos[i * 3 + 1] = dir.y
        pos[i * 3 + 2] = dir.z
      }
      return pos
    })
  }, [nodePositions])

  useFrame((state) => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.35, 0.58)

    // Motion calms down during reading window
    const settled = localP > 0.4 && localP < 0.8
    const animSpeed = settled ? 2 : 8

    if (containerRef.current) {
      const opacity = Math.sin(localP * Math.PI)
      containerRef.current.scale.setScalar(Math.max(0.001, opacity * 1.05))
    }

    nodePositions.forEach((_, idx) => {
      const nodeMesh = nodeRefs.current[idx]
      const burstPoints = burstsRef.current[idx]

      const stepThreshold = (idx + 1) / 4
      const isLit = localP >= stepThreshold - 0.15

      if (nodeMesh) {
        const mat = nodeMesh.material as THREE.MeshStandardMaterial
        const targetIntensity = isLit ? 2.5 : 0.2
        mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetIntensity, 0.1)

        const targetScale = isLit ? 1.3 : 0.8
        nodeMesh.scale.setScalar(THREE.MathUtils.lerp(nodeMesh.scale.x, targetScale, 0.1))
      }

      if (burstPoints) {
        const burstMat = burstPoints.material as THREE.PointsMaterial
        const burstTargetOpacity = isLit ? Math.sin(state.clock.elapsedTime * animSpeed) * 0.4 + 0.4 : 0
        burstMat.opacity = THREE.MathUtils.lerp(burstMat.opacity, burstTargetOpacity, 0.1)
        burstPoints.rotation.y += settled ? 0.005 : 0.02
      }
    })
  })

  return (
    <group ref={containerRef} position={[-1, 0, 0]}>
      {/* Matte Slate Metal Circuit Path Tube with Glowing Teal Line */}
      <mesh>
        <tubeGeometry args={[tubeCurve, 64, 0.06, 12, false]} />
        <meshStandardMaterial
          color="#12191C"
          emissive="#4DE8DC"
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Wireframe Conduit */}
      <mesh>
        <tubeGeometry args={[tubeCurve, 32, 0.16, 8, false]} />
        <meshBasicMaterial color="#1D6E68" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Process Nodes along the Tube */}
      {nodePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Node Sphere */}
          <mesh
            ref={(el) => { nodeRefs.current[idx] = el }}
            scale={0.8}
          >
            <sphereGeometry args={[0.3, 24, 24]} />
            <meshStandardMaterial
              color="#232F33"
              emissive="#4DE8DC"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>

          {/* Node Teal Particle Burst */}
          <points ref={(el) => { burstsRef.current[idx] = el as THREE.Points | null }}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[burstData[idx], 3]}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.05}
              color="#4DE8DC"
              transparent
              opacity={0}
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      ))}
    </group>
  )
}
