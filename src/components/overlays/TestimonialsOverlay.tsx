'use client'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'

export function TestimonialsOverlay() {
  return (
    <section id="testimonials" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 select-none">
      <div className="max-w-7xl w-full">
        <div className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Client Results"
            title={
              <>
                What Our Clients <span className="flux-word">Say</span>
              </>
            }
            description="Empirical feedback from leaders scaling enterprise applications and growth engines."
          />
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  )
}
export default TestimonialsOverlay
