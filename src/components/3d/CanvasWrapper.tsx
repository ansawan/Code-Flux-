'use client'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const SceneCanvas = dynamic(() => import('@/components/3d/SceneCanvas'), { ssr: false })

export function CanvasWrapper() {
  const pathname = usePathname()

  if (pathname === '/') {
    return <SceneCanvas />
  }

  return null
}
export default CanvasWrapper
