'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

const teaserTiers = [
  {
    name: 'Starter',
    price: 'from $2,500/mo',
    desc: 'For small teams shipping their first product.',
  },
  {
    name: 'Growth',
    price: 'from $6,500/mo',
    desc: 'For scaling teams with real traffic and revenue.',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    desc: 'For organizations with complex, multi-system needs.',
  },
]

export function PricingTeaserOverlay() {
  return (
    <section id="pricing-teaser" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 select-none">
      <div className="max-w-7xl w-full">
        <div className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title={
              <>
                Simple, Transparent <span className="flux-word">Plans</span>
              </>
            }
            description="Predictable retainer models engineered for velocity and continuous delivery."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teaserTiers.map((tier) => (
            <ContentPanel
              key={tier.name}
              className={`flex flex-col justify-between ${
                tier.popular ? 'border-[#4DE8DC]/40 bg-black/70' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#EAF6F5]">{tier.name}</h3>
                  {tier.popular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] uppercase">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="text-2xl font-extrabold text-[#4DE8DC] font-mono mb-3 flux-word">
                  {tier.price}
                </div>

                <p className="text-sm text-white leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            </ContentPanel>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            See Full Pricing &amp; Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default PricingTeaserOverlay
