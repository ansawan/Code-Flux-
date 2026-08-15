'use client'
import { SectionHeading } from '@/components/ui/SectionHeading'

const processSteps = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Deconstruct & Analyze',
    desc: 'Uncover core objectives, domain nuances, user behaviors, and architectural constraints before touching code.',
  },
  {
    step: '02',
    name: 'Design',
    tagline: 'Blueprint & Prototype',
    desc: 'Craft spatial 3D concepts, component design systems, and robust data schemas built for horizontal scaling.',
  },
  {
    step: '03',
    name: 'Build',
    tagline: 'Iterate & Engineer',
    desc: 'Agile sprint execution using type-safe TypeScript, performant WebGL, clean APIs, and continuous automated testing.',
  },
  {
    step: '04',
    name: 'Ship & Support',
    tagline: 'Deploy & Monitor',
    desc: 'Zero-downtime production deployment, instant telemetry alerts, sub-100ms response tuning, and lifetime upgrades.',
  },
]

export function ProcessOverlay() {
  return (
    <section id="process" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Methodology"
            title={
              <>
                Engineered for <span className="flux-word">Precision</span>
              </>
            }
            description="Our 4-stage data pipeline translates complex vision into production code seamlessly."
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#4DE8DC]/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 font-mono text-8xl font-black text-white/[0.03] group-hover:text-[#4DE8DC]/10 transition-colors pointer-events-none">
                {item.step}
              </div>

              <div className="font-mono text-xs text-[#4DE8DC] mb-2 uppercase tracking-widest">
                Stage {item.step}
              </div>
              <h3 className="text-2xl font-bold text-[#EAF6F5] mb-1 group-hover:text-[#4DE8DC] transition-colors">
                {item.name}
              </h3>
              <div className="text-xs font-mono text-white mb-4">
                {item.tagline}
              </div>
              <p className="text-white text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProcessOverlay
