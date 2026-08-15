'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { PricingTiers } from '@/components/sections/PricingTiers'
import { PricingComparisonTable } from '@/components/sections/PricingComparisonTable'
import { PricingFAQ } from '@/components/sections/PricingFAQ'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const GlassClusterScene = dynamic(() => import('@/components/3d/scenes/GlassClusterScene').then((m) => m.GlassClusterScene), {
  ssr: false,
})

const PRICING_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [0, 0.5, 6.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.70, pos: [2.0, -0.5, 5.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
]

export default function PricingPage() {
  return (
    <>
      <ScrollScene keyframes={PRICING_KEYFRAMES}>
        <GlassClusterScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="transparent & predictable"
            title="Simple, Transparent Pricing"
            description="No hidden fees, no vague &ldquo;contact us for everything.&rdquo; Pick a plan that fits where you are — scale up whenever you&apos;re ready."
          />

          {/* Pricing Tiers Section */}
          <PricingTiers />

          {/* Detailed Feature Comparison Table */}
          <PricingComparisonTable />

          {/* FAQ Accordion Section */}
          <PricingFAQ />

          {/* Closing CTA */}
          <section className="my-20 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Consultation"
                title="Not sure which plan fits?"
                description="Schedule a free 30-minute pricing consultation with our lead architecture team."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Book a Free Pricing Consultation
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
