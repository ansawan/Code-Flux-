'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  Zap,
  BarChart3,
  Compass,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { TimelineNode } from '@/components/cards/TimelineNode'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const DataRibbonScene = dynamic(() => import('@/components/3d/scenes/DataRibbonScene').then((m) => m.DataRibbonScene), {
  ssr: false,
})

const MARKETING_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [-2.5, 1.2, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.70, pos: [2.5, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function DigitalMarketingPage() {
  const subServices = [
    {
      icon: Search,
      title: 'SEO & Technical SEO',
      description: 'Site architecture, crawlability, and content strategy built to rank.',
      tags: ['Technical SEO', 'Core Web Vitals', 'Crawlability'],
    },
    {
      icon: Target,
      title: 'Paid Media (PPC)',
      description: 'Google, Meta, and LinkedIn campaigns managed for efficient spend, not just reach.',
      tags: ['Google Ads', 'Meta PPC', 'LinkedIn Ads'],
    },
    {
      icon: Share2,
      title: 'Social Media Strategy & Management',
      description: 'Consistent, on-brand presence across the channels that matter to your audience.',
      tags: ['Social Strategy', 'Brand Presence', 'Audience Growth'],
    },
    {
      icon: FileText,
      title: 'Content Marketing & Copywriting',
      description: 'Content built to convert, not just fill a content calendar.',
      tags: ['Technical Copywriting', 'Content Funnels', 'SEO Writing'],
    },
    {
      icon: Mail,
      title: 'Email Marketing & Automation',
      description: 'Lifecycle campaigns and automated flows that retain and re-engage users.',
      tags: ['Lifecycle Automation', 'Klaviyo', 'Retention Flows'],
    },
    {
      icon: Zap,
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Data-driven testing to turn more visitors into paying customers.',
      tags: ['A/B Testing', 'Funnel Optimization', 'Heatmaps'],
    },
    {
      icon: BarChart3,
      title: 'Analytics, Tracking & Reporting',
      description: 'Clean, accurate measurement — GA4, server-side tracking, dashboards that mean something.',
      tags: ['GA4', 'Server-Side Tracking', 'Looker Studio'],
    },
    {
      icon: Compass,
      title: 'Brand & Growth Strategy',
      description: 'Positioning and channel strategy tied directly to real business goals.',
      tags: ['Brand Positioning', 'CAC Reduction', 'ROI Growth'],
    },
  ]

  const processSteps = [
    {
      year: 'Step 01',
      title: 'Audit',
      description: 'Assess current acquisition channels, tracking accuracy, and conversion funnel bottlenecks.',
    },
    {
      year: 'Step 02',
      title: 'Strategize',
      description: 'Build a channel plan and messaging strategy tied strictly to measurable CAC and LTV goals.',
    },
    {
      year: 'Step 03',
      title: 'Execute',
      description: 'Launch targeted campaigns, content funnels, and tracking instrumentation across chosen channels.',
    },
    {
      year: 'Step 04',
      title: 'Optimize',
      description: 'Continuously test ad copy, landing pages, and email flows to maximize overall return on ad spend (ROAS).',
    },
  ]

  const tools = [
    'Google Ads',
    'Meta Ads',
    'HubSpot',
    'GA4',
    'SEMrush',
    'Klaviyo',
    'Google Tag Manager',
    'Looker Studio',
  ]

  return (
    <>
      <ScrollScene keyframes={MARKETING_KEYFRAMES}>
        <DataRibbonScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="growth & performance"
            title="Digital Marketing Services"
            description="Growth built on data and engineering discipline — not guesswork and vanity metrics."
          />

          {/* Overview Paragraph */}
          <section className="py-6 max-w-3xl mx-auto">
            <ContentPanel className="text-center">
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Marketing and engineering are usually run as separate teams speaking separate languages; Code Flux runs both under one roof, so campaigns are backed by real tracking infrastructure and conversion-optimized builds, not disconnected from the product itself.
              </p>
            </ContentPanel>
          </section>

          {/* Sub-services Grid */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="What We Deliver"
                title={
                  <>
                    Engineered for <span className="flux-word">Growth</span>
                  </>
                }
                description="Data-driven marketing and technical acquisition strategies built to scale."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {subServices.map((service, i) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    index={i}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Process Timeline */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Growth Engine"
                  title={
                    <>
                      Marketing &amp; Growth <span className="flux-word">Process</span>
                    </>
                  }
                  description="A systematic methodology designed to maximize ROAS and lower customer acquisition costs."
                />
              </div>

              <div className="pl-4 sm:pl-0">
                {processSteps.map((step, i) => (
                  <TimelineNode
                    key={step.title}
                    year={step.year}
                    title={step.title}
                    description={step.description}
                    index={i}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Tools Strip */}
          <section className="py-8">
            <ContentPanel className="text-center">
              <div className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Marketing Analytics &amp; Channel Platforms
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-4 py-2.5 rounded-xl bg-white/[0.04] text-[#4DE8DC] border border-[#4DE8DC]/20 hover:border-[#4DE8DC]/50 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* CTA */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Accelerate Growth"
                title="Ready to make marketing measurable again?"
                description="Schedule a comprehensive technical marketing and tracking audit with our growth specialists."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all"
                >
                  Book a Free Marketing Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
