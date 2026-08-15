'use client'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { ParticleDrift } from './ParticleDrift'
import { SlowWireframe } from './SlowWireframe'

export function AmbientScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-[#000000]">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[4, 4, 4]} intensity={0.8} color="#4DE8DC" />
        
        <ParticleDrift count={2500} />
        <SlowWireframe />

        <EffectComposer>
          <Bloom intensity={0.4} luminanceThreshold={0.4} mipmapBlur />
          <Vignette darkness={0.9} offset={0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default AmbientScene
