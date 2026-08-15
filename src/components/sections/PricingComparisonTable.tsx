'use client'
import { Check, Minus } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

const rows = [
  { feature: 'Concurrent project tracks', starter: '1', growth: '2', enterprise: 'Unlimited' },
  { feature: 'Monthly hours', starter: '40', growth: '120', enterprise: 'Custom' },
  { feature: 'Support response time', starter: '48 hrs', growth: '24 hrs', enterprise: 'Same-day' },
  { feature: 'Strategy calls', starter: 'Monthly', growth: 'Bi-weekly', enterprise: 'Weekly/On-demand' },
  { feature: 'Dedicated account lead', starter: false, growth: true, enterprise: true },
  { feature: 'Custom SLAs', starter: false, growth: false, enterprise: true },
]

export function PricingComparisonTable() {
  return (
    <section className="py-12">
      <ContentPanel className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <SectionHeading
            align="center"
            eyebrow="Detailed Breakdown"
            title={
              <>
                Feature <span className="flux-word">Comparison</span>
              </>
            }
            description="Side-by-side breakdown of capabilities included in each engagement plan."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-white">
                <th className="py-4 px-4 font-semibold">Feature</th>
                <th className="py-4 px-4 text-center font-semibold">Starter</th>
                <th className="py-4 px-4 text-center font-semibold text-[#4DE8DC]">Growth</th>
                <th className="py-4 px-4 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-medium text-white">{r.feature}</td>

                  {/* Starter */}
                  <td className="py-4 px-4 text-center font-mono">
                    {typeof r.starter === 'boolean' ? (
                      r.starter ? (
                        <Check className="w-4 h-4 text-[#4DE8DC] mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#47585A] mx-auto" />
                      )
                    ) : (
                      <span className="text-white">{r.starter}</span>
                    )}
                  </td>

                  {/* Growth */}
                  <td className="py-4 px-4 text-center font-mono font-semibold bg-[#4DE8DC]/5">
                    {typeof r.growth === 'boolean' ? (
                      r.growth ? (
                        <Check className="w-4 h-4 text-[#4DE8DC] mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#47585A] mx-auto" />
                      )
                    ) : (
                      <span className="text-[#EAF6F5]">{r.growth}</span>
                    )}
                  </td>

                  {/* Enterprise */}
                  <td className="py-4 px-4 text-center font-mono">
                    {typeof r.enterprise === 'boolean' ? (
                      r.enterprise ? (
                        <Check className="w-4 h-4 text-[#4DE8DC] mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#47585A] mx-auto" />
                      )
                    ) : (
                      <span className="text-[#EAF6F5]">{r.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentPanel>
    </section>
  )
}
export default PricingComparisonTable
