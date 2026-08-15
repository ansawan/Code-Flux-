'use client'

interface SectionHeadingProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`relative ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}>
      {/* Soft white radial glow backdrop sitting behind heading */}
      <div
        className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[3rem] blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 45%, transparent 75%)',
        }}
      />
      {eyebrow && (
        <span className="inline-block text-xs font-mono tracking-widest text-[#4DE8DC] border border-[#4DE8DC]/30 bg-[#4DE8DC]/5 rounded-full px-3 py-1 mb-4 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-[#EAF6F5] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-white text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
export default SectionHeading
