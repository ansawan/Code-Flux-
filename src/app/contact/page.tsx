'use client'
import dynamic from 'next/dynamic'
import { Mail, Clock } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const ParticleFieldScene = dynamic(() => import('@/components/3d/scenes/ParticleFieldScene').then((m) => m.ParticleFieldScene), {
  ssr: false,
})
const WireframeGlobeScene = dynamic(() => import('@/components/3d/scenes/WireframeGlobeScene').then((m) => m.WireframeGlobeScene), {
  ssr: false,
})

const CONTACT_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.00, pos: [1.0, 0, 5.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
]

export default function ContactPage() {
  return (
    <>
      <ScrollScene keyframes={CONTACT_KEYFRAMES}>
        <ParticleFieldScene />
        <WireframeGlobeScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="Initiate Contact"
            title="Start a Project"
            description="Have a question or ready to begin? Fill out the form below or reach out directly — our engineering team responds within 24 hours."
          />

          <section className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5">
              <ContentPanel className="space-y-6 h-full">
                <SectionHeading
                  eyebrow="Direct Line"
                  title={
                    <>
                      Let’s Talk <span className="flux-word">Engineering</span>
                    </>
                  }
                />

                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Whether you need a full WebGL web app, an LLM intelligence layer, or a strategic cloud roadmap, we&apos;re here to make it happen.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex items-start gap-4 hover:border-[#4DE8DC]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">Email Inquiry</h3>
                      <a
                        href="mailto:info@codeflux.com"
                        className="font-mono text-sm text-[#4DE8DC] hover:underline"
                      >
                        info@codeflux.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 flex items-start gap-4 hover:border-[#4DE8DC]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">Response Time</h3>
                      <p className="font-mono text-xs text-white">
                        Guaranteed response within 24 business hours
                      </p>
                    </div>
                  </div>
                </div>
              </ContentPanel>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContentPanel>
                <h3 className="text-xl font-bold text-white mb-2">
                  Project Intake Form
                </h3>
                <p className="text-sm text-white mb-8">
                  Tell us a bit about your project goals, scope, and timeline.
                </p>
                <ContactForm />
              </ContentPanel>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
