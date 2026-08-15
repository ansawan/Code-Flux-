'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Terminal, Target, Eye, Repeat, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ValueCard } from '@/components/cards/ValueCard'
import { TimelineNode } from '@/components/cards/TimelineNode'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const ParticleHelixScene = dynamic(() => import('@/components/3d/scenes/ParticleHelixScene').then((m) => m.ParticleHelixScene), {
  ssr: false,
})
const GlassClusterScene = dynamic(() => import('@/components/3d/scenes/GlassClusterScene').then((m) => m.GlassClusterScene), {
  ssr: false,
})
const CircuitTubeScene = dynamic(() => import('@/components/3d/scenes/CircuitTubeScene').then((m) => m.CircuitTubeScene), {
  ssr: false,
})

const ABOUT_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.0, 5.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.65, pos: [-3.0, 0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
]

export default function AboutPage() {
  const values = [
    {
      icon: Terminal,
      title: 'Code as Craft',
      description: 'We treat software architecture as precision engineering. No tech debt shortcuts, no messy hacks.',
    },
    {
      icon: Target,
      title: 'Empirical Outcomes',
      description: 'We measure success in millisecond latency cuts, sub-second loads, and real revenue impact.',
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      description: 'Direct communication, open repositories, and clear milestone progress from day one.',
    },
    {
      icon: Repeat,
      title: 'Continuous Flux',
      description: 'Technology never stops evolving; neither do we. Continuous learning is built into our DNA.',
    },
  ]

  const timelineSteps = [
    {
      year: '2022',
      title: 'Founding & Vision',
      description: 'Code Flux was established with a singular focus: delivering high-performance WebGL and full-stack platforms.',
    },
    {
      year: '2023',
      title: 'AI & Spatial Web Integration',
      description: 'Expanded capabilities into custom RAG pipelines, fine-tuned LLM deployment, and 3D web applications.',
    },
    {
      year: '2024',
      title: 'Enterprise Architecture',
      description: 'Partnered with global enterprise leaders to build multi-tenant SaaS platforms scaling to millions of daily requests.',
    },
    {
      year: '2025+',
      title: 'The Next Generation',
      description: 'Pioneering autonomous AI agent systems and immersive WebGL interfaces.',
    },
  ]

  return (
    <>
      <ScrollScene keyframes={ABOUT_KEYFRAMES}>
        <ParticleHelixScene dim />
        <GlassClusterScene stage={1} />
        <CircuitTubeScene stage={2} />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="our story & ethos"
            title="About Code Flux"
            description="We are a elite engineering collective building high-throughput web applications, intelligent AI systems, and immersive WebGL experiences."
          />

          {/* Mission & Vision Section */}
          <section className="py-12">
            <ContentPanel className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Our Mission"
                  title={
                    <>
                      Bridging Engineering &amp; <span className="flux-word">Artistry</span>
                    </>
                  }
                />
                <p className="text-base text-white leading-relaxed">
                  We believe web software shouldn&apos;t just function — it should captivate. By combining production-grade backend engineering with cutting-edge 3D WebGL visuals, we build digital products that set new industry standards.
                </p>
                <p className="text-base text-white leading-relaxed">
                  Our team operates as an extension of your product organization, shipping clean code and reliable infrastructure built for long-term scale.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
                <div className="font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">Core Metrics</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">120+</div>
                    <div className="text-xs text-white mt-1">Global Deployments</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">99.99%</div>
                    <div className="text-xs text-white mt-1">Uptime Benchmark</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">4.2x</div>
                    <div className="text-xs text-white mt-1">Avg Client Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">24/7</div>
                    <div className="text-xs text-white mt-1">Telemetry Monitoring</div>
                  </div>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* Core Values Section */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="Guiding Principles"
                title={
                  <>
                    What Drives <span className="flux-word">Code Flux</span>
                  </>
                }
                description="The engineering standards and values that inform every line of code we write."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {values.map((v, i) => (
                  <ValueCard
                    key={v.title}
                    icon={v.icon}
                    title={v.title}
                    description={v.description}
                    index={i}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Timeline Section */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Milestones"
                  title={
                    <>
                      Our Engineering <span className="flux-word">Journey</span>
                    </>
                  }
                  description="Key milestones in our evolution as a high-performance software agency."
                />
              </div>

              <div className="pl-4 sm:pl-0">
                {timelineSteps.map((step, i) => (
                  <TimelineNode
                    key={step.year}
                    year={step.year}
                    title={step.title}
                    description={step.description}
                    index={i}
                    isLast={i === timelineSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* CTA Section */}
          <section className="my-20 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Collaborate"
                title="Ready to build something extraordinary?"
                description="Let’s discuss your vision and engineer a solution tailored to your goals."
              />
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
