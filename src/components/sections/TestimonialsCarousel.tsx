'use client'
import { Quote } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'

const TESTIMONIALS = [
  {
    quote: "Code Flux rebuilt our entire lead pipeline in six weeks. Response time dropped 40% in the first month.",
    name: 'Sarah Chen',
    role: 'VP of Growth, Nova CRM',
  },
  {
    quote: "They don't just write code — they think about the business outcome first. That's rare in agencies.",
    name: 'Marcus Reyes',
    role: 'CTO, FluxPay',
  },
  {
    quote: "Our marketing and product teams finally speak the same language, because Code Flux built both.",
    name: 'Amara Odeh',
    role: 'Head of Marketing, Anchor Logistics',
  },
]

export function TestimonialsCarousel() {
  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 pt-2 select-none scrollbar-thin">
      {TESTIMONIALS.map((t, idx) => (
        <div key={idx} className="snap-center shrink-0 w-[300px] sm:w-[380px]">
          <ContentPanel className="h-full flex flex-col justify-between p-7 sm:p-8">
            <div>
              <Quote className="w-8 h-8 text-[#4DE8DC] opacity-60 mb-4" />
              <p className="text-sm sm:text-base text-white leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/8">
              <div className="font-bold text-sm text-white">{t.name}</div>
              <div className="font-mono text-xs text-white mt-0.5">{t.role}</div>
            </div>
          </ContentPanel>
        </div>
      ))}
    </div>
  )
}
export default TestimonialsCarousel
