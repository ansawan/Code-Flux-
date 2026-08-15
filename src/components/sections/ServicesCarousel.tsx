'use client'

const SERVICES = [
  'Web & App Development',
  'SaaS Application Development',
  'AI & Automation Integration',
  'Agentic AI',
  'Workflow Automation',
  'Cloud Infrastructure & DevOps',
  'Product Design & UX',
  'Digital Marketing',
  'SEO',
  'Paid Media',
  'Conversion Optimization',
  'Ongoing Support',
]

export function ServicesCarousel() {
  const loop = [...SERVICES, ...SERVICES]

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/8 bg-black/40 backdrop-blur-md select-none">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex gap-4 w-max animate-carousel-scroll hover:[animation-play-state:paused]">
        {loop.map((service, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-[#4DE8DC]/25 bg-white/[0.03] px-5 py-2 text-xs sm:text-sm font-mono text-[#8FA6A3] hover:text-[#4DE8DC] hover:border-[#4DE8DC]/60 transition-all cursor-default"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  )
}
export default ServicesCarousel
