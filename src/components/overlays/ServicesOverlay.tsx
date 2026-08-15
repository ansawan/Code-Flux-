'use client'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    num: '01',
    title: 'Web & App Development',
    desc: 'High-performance web applications built with Next.js, React, and WebGL tailored for speed and elegance.',
    accent: 'border-[#4DE8DC]/30 text-[#4DE8DC]',
    href: '/services',
  },
  {
    num: '02',
    title: 'AI & Automation Integration',
    desc: 'Custom LLM pipelines, autonomous agents, and intelligence workflows that scale productivity.',
    accent: 'border-[#2FBFB0]/30 text-[#4DE8DC]',
    href: '/services/ai-services',
  },
  {
    num: '03',
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Resilient microservices, Kubernetes orchestration, zero-downtime CI/CD, and multi-region security.',
    accent: 'border-[#4DE8DC]/30 text-[#4DE8DC]',
    href: '/services',
  },
  {
    num: '04',
    title: 'Product Design & UX Engineering',
    desc: 'State-of-the-art interactive UI/UX, micro-interactions, motion design, and brand design systems.',
    accent: 'border-[#2FBFB0]/30 text-[#4DE8DC]',
    href: '/services',
  },
  {
    num: '05',
    title: 'Digital Marketing Services',
    desc: 'Technical SEO, data-driven PPC campaigns, conversion rate optimization, and growth analytics.',
    accent: 'border-[#4DE8DC]/30 text-[#4DE8DC]',
    href: '/services/digital-marketing',
  },
  {
    num: '06',
    title: 'Ongoing Support & Optimization',
    desc: 'Continuous performance auditing, sub-millisecond API tuning, and 24/7 proactive telemetry monitoring.',
    accent: 'border-[#2FBFB0]/30 text-[#4DE8DC]',
    href: '/services',
  },
]

export function ServicesOverlay() {
  return (
    <section id="services" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading with SectionHeading */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Architecting <br />
                Next Generation Digital <span className="flux-word">Flux</span>
              </>
            }
            description="We merge cutting-edge WebGL aesthetics with bulletproof full-stack engineering to build software products that lead industries."
          />
        </div>

        {/* Right Column: 6 Service Cards */}
        <div className="lg:col-span-7 space-y-3.5">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-[#4DE8DC]/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className={`font-mono text-lg sm:text-xl font-bold ${item.accent}`}>
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#EAF6F5] mb-1 group-hover:text-[#4DE8DC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ServicesOverlay
