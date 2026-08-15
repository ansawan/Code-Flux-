'use client'

export function ContentPanel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative rounded-3xl border border-white/8 bg-black/55 backdrop-blur-md p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  )
}
export default ContentPanel
