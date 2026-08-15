'use client'
import React from 'react'

export function TextScrim({ children, align = 'center' }: { children: React.ReactNode; align?: 'left' | 'center' | 'right' }) {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'
  return (
    <div className={`relative inline-block ${alignClass}`}>
      {/* soft radial darkening behind the text, independent of scene motion */}
      <div
        className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[2rem] blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, transparent 80%)' }}
      />
      {children}
    </div>
  )
}
