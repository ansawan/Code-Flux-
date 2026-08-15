'use client'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'

const tiers = [
  {
    name: 'Starter',
    price: 'from $2,500/mo',
    description: 'For small teams shipping their first product or campaign.',
    popular: false,
    features: [
      '1 active project track (dev OR marketing)',
      'Up to 40 engineering/marketing hours/mo',
      'Async support, 48-hour response time',
      'Monthly progress report',
    ],
    buttonText: 'Get Started',
    buttonHref: '/contact',
  },
  {
    name: 'Growth',
    price: 'from $6,500/mo',
    description: 'For scaling teams with real traffic, revenue, and multiple workstreams.',
    popular: true,
    features: [
      '2 concurrent project tracks (e.g. dev + marketing)',
      'Up to 120 engineering/marketing hours/mo',
      'Priority support, 24-hour response time',
      'Bi-weekly strategy calls',
      'Dedicated Slack channel',
    ],
    buttonText: 'Get Started',
    buttonHref: '/contact',
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    description: 'For organizations with complex, multi-system, or compliance-heavy needs.',
    popular: false,
    features: [
      'Unlimited concurrent project tracks',
      'Dedicated team allocation, scoped to needs',
      'Same-day support, dedicated account lead',
      'Custom SLAs and reporting cadence',
      'Security & compliance review (SOC 2, HIPAA)',
    ],
    buttonText: 'Talk to Sales',
    buttonHref: '/contact',
  },
]

export function PricingTiers() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <ContentPanel
            key={tier.name}
            className={`flex flex-col justify-between h-full ${
              tier.popular
                ? 'border-[#4DE8DC]/50 shadow-[0_0_35px_rgba(77,232,220,0.15)] bg-black/70'
                : ''
            }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#EAF6F5]">{tier.name}</h3>
                {tier.popular && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#4DE8DC]/10 border border-[#4DE8DC]/40 text-[#4DE8DC] uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Pricing Number */}
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#EAF6F5] flux-word">
                  {tier.price}
                </span>
              </div>

              <p className="text-sm text-white leading-relaxed mb-6">
                {tier.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-6 border-t border-white/8 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white">
                    <div className="w-5 h-5 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={tier.buttonHref}
                className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] hover:shadow-[0_0_25px_rgba(77,232,220,0.5)]'
                    : 'border border-white/15 bg-white/5 text-[#EAF6F5] hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {tier.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ContentPanel>
        ))}
      </div>

      {/* Shared Footnote */}
      <div className="mt-10 max-w-4xl mx-auto text-center">
        <p className="text-xs text-white leading-relaxed font-mono">
          *All plans include access to our full service range — web/app development, AI &amp; automation, cloud infrastructure, product design, and digital marketing — scoped to the hours/tracks in your plan. Need something that doesn&apos;t fit neatly into a tier?{' '}
          <Link href="/contact" className="text-[#4DE8DC] underline">
            Enterprise
          </Link>{' '}
          plans are fully custom.
        </p>
      </div>
    </section>
  )
}
export default PricingTiers
