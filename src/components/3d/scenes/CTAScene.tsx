'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/hooks/useScrollProgress'
import { calcLocalProgress } from '@/hooks/useLocalProgress'

export function CTAScene() {
  const containerRef = useRef<THREE.Group>(null)
  const helixRef = useRef<THREE.Points>(null)
  const ringRef1 = useRef<THREE.LineSegments>(null)
  const ringRef2 = useRef<THREE.LineSegments>(null)

  // Generate particle helix geometry
  const particlePositions = useMemo(() => {
    const count = 400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 8
      const radius = 1.2 + Math.sin(t * 0.5) * 0.3
      const x = Math.cos(t) * radius
      const y = (i / count - 0.5) * 6
      const z = Math.sin(t) * radius
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    return positions
  }, [])

  // Geometries for wireframe energy rings
  const ringGeo1 = useMemo(() => new THREE.TorusGeometry(2.2, 0.04, 8, 48), [])
  const ringGeo2 = useMemo(() => new THREE.TorusGeometry(1.5, 0.03, 8, 36), [])

  useFrame((state, delta) => {
    const p = useScrollStore.getState().progress
    const localP = calcLocalProgress(p, 0.88, 1.0)

    const settled = localP > 0.4
    const rotSpeed = settled ? 0.15 : 0.5

    if (containerRef.current) {
      const opacity = Math.pow(localP, 1.5)
      containerRef.current.scale.setScalar(Math.max(0.001, opacity * 1.05))
    }

    if (helixRef.current) {
      helixRef.current.rotation.y += delta * rotSpeed
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * rotSpeed * 0.6
      ringRef1.current.rotation.y += delta * rotSpeed * 0.8
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * rotSpeed * 0.4
      ringRef2.current.rotation.z += delta * rotSpeed * 0.5
    }
  })

  return (
    <group ref={containerRef} position={[0, 0, -1]}>
      {/* Particle Helix (Pure Line/Point Geometry on Black Void) */}
      <points ref={helixRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#4DE8DC"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Orbiting Wireframe Energy Ring 1 (Thin Line Geometry) */}
      <lineSegments ref={ringRef1}>
        <wireframeGeometry args={[ringGeo1]} />
        <lineBasicMaterial color="#4DE8DC" transparent opacity={0.6} />
      </lineSegments>

      {/* Orbiting Wireframe Energy Ring 2 */}
      <lineSegments ref={ringRef2}>
        <wireframeGeometry args={[ringGeo2]} />
        <lineBasicMaterial color="#2FBFB0" transparent opacity={0.5} />
      </lineSegments>

      {/* Sparse Outer Beacon Cluster */}
      <points>
        <sphereGeometry args={[2.5, 24, 24]} />
        <pointsMaterial
          size={0.025}
          color="#4DE8DC"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}
