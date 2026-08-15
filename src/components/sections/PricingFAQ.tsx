'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes — upgrade or downgrade at the start of any billing cycle, prorated automatically.',
  },
  {
    q: 'What counts as a "project track"?',
    a: 'A track is one active workstream — e.g. an app rebuild, or an ongoing marketing engagement. Starter includes one; Growth includes two running in parallel.',
  },
  {
    q: 'Do unused hours roll over?',
    a: 'Up to 20% of unused monthly hours roll into the next month; beyond that they reset.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'Starter and Growth are month-to-month. Enterprise plans typically run on a quarterly or annual agreement, scoped during onboarding.',
  },
  {
    q: 'What if my needs don’t fit any tier?',
    a: 'That’s exactly what Enterprise is for — every Enterprise plan is scoped individually.',
  },
]

export function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-12">
      <ContentPanel className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <SectionHeading
            align="center"
            eyebrow="Questions & Answers"
            title={
              <>
                Frequently Asked <span className="flux-word">Questions</span>
              </>
            }
            description="Clear answers regarding billing, project tracks, roll-overs, and custom scopes."
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-base font-semibold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FA6A3] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#4DE8DC] border-[#4DE8DC]/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-white leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ContentPanel>
    </section>
  )
}
export default PricingFAQ
