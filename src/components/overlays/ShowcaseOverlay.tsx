'use client'
import { SectionHeading } from '@/components/ui/SectionHeading'

const showcaseProjects = [
  {
    title: 'Nova CRM Engine',
    metric: '40% Cut in AI Response Latency',
    desc: 'Real-time intelligent lead routing and autonomous sales copilot integrated into enterprise CRM.',
    tags: ['Next.js 15', 'Three.js', 'PyTorch', 'Redis'],
  },
  {
    title: 'FluxPay Core',
    metric: '10x Scaled Transaction Throughput',
    desc: 'Ultra-low latency financial dashboard and event-driven payment processing infrastructure.',
    tags: ['React 18', 'Go', 'Kafka', 'PostgreSQL'],
  },
  {
    title: 'Anchor Logistics',
    metric: 'Sub-second Global Fleet Telemetry',
    desc: 'Real-time 3D supply chain monitoring map tracking 50,000+ autonomous cargo vessels.',
    tags: ['R3F', 'WebAssembly', 'Rust', 'Kubernetes'],
  },
]

export function ShowcaseOverlay() {
  return (
    <section id="showcase" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="left"
            eyebrow="Selected Works"
            title={
              <>
                Featured <span className="flux-word">Case Studies</span>
              </>
            }
            description="Delivering measurable performance impact and unforgettable user experiences for global leaders."
          />
        </div>

        {/* Projects Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#4DE8DC]/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 font-mono text-xs font-semibold text-[#4DE8DC] mb-4">
                  {project.metric}
                </div>
                <h3 className="text-2xl font-bold text-[#EAF6F5] mb-3 group-hover:text-[#4DE8DC] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs text-white px-2.5 py-1 rounded-md bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ShowcaseOverlay
