'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutTeaserOverlay() {
  return (
    <section id="about-teaser" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 select-none">
      <div className="max-w-4xl w-full">
        <ContentPanel className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Who We Are"
            title={
              <>
                Engineers First, <span className="flux-word">Marketers Too</span>
              </>
            }
          />

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white leading-relaxed mt-6">
            Code Flux started as a small team frustrated with agencies that ship code but not outcomes. Today we build and grow full digital products — engineering, AI, and marketing under one roof.
          </p>

          {/* Compact Inline Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-8 my-6 border-y border-white/8 font-mono text-sm sm:text-base">
            <div>
              <span className="font-extrabold text-[#4DE8DC]">120+</span>{' '}
              <span className="text-white">Projects</span>
            </div>
            <div className="text-white/20">•</div>
            <div>
              <span className="font-extrabold text-[#4DE8DC]">98%</span>{' '}
              <span className="text-white">Retention</span>
            </div>
            <div className="text-white/20">•</div>
            <div>
              <span className="font-extrabold text-[#4DE8DC]">4.2x</span>{' '}
              <span className="text-white">Avg ROI</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ContentPanel>
      </div>
    </section>
  )
}
export default AboutTeaserOverlay
