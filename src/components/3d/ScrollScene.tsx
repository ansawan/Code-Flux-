'use client'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import { CameraRig, type CameraKeyframe } from './CameraRig'

export function ScrollScene({
  keyframes,
  children,
}: {
  keyframes: CameraKeyframe[]
  children?: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-[#000000]">
      <Canvas
        camera={{ position: keyframes[0]?.pos || [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.15} />
        <pointLight position={[4, 4, 4]} intensity={1} color="#4DE8DC" />

        <CameraRig keyframes={keyframes} dwell={0.05} />

        {children}

        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.35} mipmapBlur />
          <ChromaticAberration offset={new Vector2(0.0002, 0.0002)} />
          <Vignette darkness={0.9} offset={0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
export default ScrollScene
