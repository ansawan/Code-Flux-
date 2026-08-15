'use client'
import { SectionHeading } from '@/components/ui/SectionHeading'

const statsData = [
  { val: '120+', label: 'Projects Delivered', desc: 'Flawless production rollouts across web, cloud, & AI' },
  { val: '98%', label: 'Client Retention', desc: 'Long-term strategic technology partnership rate' },
  { val: '4.2x', label: 'Average ROI Increase', desc: 'Measured revenue impact after architecture overhaul' },
  { val: '24/7', label: 'Systems Monitored', desc: 'Automated 99.999% uptime infrastructure health' },
]

export function StatsOverlay() {
  return (
    <section id="stats" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Impact Metrics"
            title={
              <>
                Proven Scale & <span className="flux-word">Performance</span>
              </>
            }
            description="Empirical results achieved through uncompromising software engineering standards."
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#4DE8DC]/30 transition-all text-center group"
            >
              <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[#4DE8DC] mb-2 group-hover:scale-105 transition-transform flux-word">
                {stat.val}
              </div>
              <div className="text-lg font-semibold text-[#EAF6F5] mb-2">
                {stat.label}
              </div>
              <p className="text-white text-xs leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default StatsOverlay
