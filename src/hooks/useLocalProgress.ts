'use client'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from './useScrollProgress'

export function calcLocalProgress(progress: number, start: number, end: number): number {
  if (end <= start) return 0
  return THREE.MathUtils.clamp((progress - start) / (end - start), 0, 1)
}

export function useLocalProgress(start: number, end: number): number {
  const [local, setLocal] = useState(0)

  useFrame(() => {
    const p = useScrollStore.getState().progress
    const currentLocal = calcLocalProgress(p, start, end)
    if (Math.abs(currentLocal - local) > 0.001) {
      setLocal(currentLocal)
    }
  })

  return local
}
