'use client'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CTAOverlay() {
  return (
    <section id="cta" className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="max-w-5xl mx-auto w-full text-center">
        <SectionHeading
          align="center"
          eyebrow="Initiate Contact"
          title={
            <>
              Let’s Build The <br />
              <span className="flux-word">Next Generation</span>
            </>
          }
          description="Ready to engineer a high-throughput WebGL web application, custom AI system, or cloud platform? Let’s connect."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link
            href="/contact"
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-base hover:shadow-[0_0_40px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Start a Project
          </Link>
          <a
            href="mailto:info@codeflux.com"
            className="font-mono text-base text-[#EAF6F5] hover:text-[#4DE8DC] transition-colors underline underline-offset-8"
          >
            info@codeflux.com
          </a>
        </div>
      </div>
    </section>
  )
}
export default CTAOverlay
