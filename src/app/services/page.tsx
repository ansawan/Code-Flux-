'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceListItem } from '@/components/cards/ServiceListItem'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})

const CircuitTubeScene = dynamic(() => import('@/components/3d/scenes/CircuitTubeScene').then((m) => m.CircuitTubeScene), {
  ssr: false,
})
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), {
  ssr: false,
})
const DataRibbonScene = dynamic(() => import('@/components/3d/scenes/DataRibbonScene').then((m) => m.DataRibbonScene), {
  ssr: false,
})
const GlassClusterScene = dynamic(() => import('@/components/3d/scenes/GlassClusterScene').then((m) => m.GlassClusterScene), {
  ssr: false,
})

const SERVICES_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.25, pos: [3.0, 1.0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 0.50, pos: [-3.0, 0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 0.75, pos: [2.0, -1.0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
]

export default function ServicesPage() {
  const stage1SoftwareDev = [
    { title: 'Custom Web Applications', description: 'High-performance React/Next.js platforms built for real-time responsiveness and scale.' },
    { title: 'SaaS Application Development', description: 'End-to-end multi-tenant SaaS architecture, billing integration, and tenant isolation.' },
    { title: 'Mobile App Development', description: 'Cross-platform iOS and Android applications with native-level performance and fluid UX.' },
    { title: 'Product Engineering & Architecture', description: 'Strategic technical architecture, domain-driven design, and scalable system blueprints.' },
    { title: 'API Development & Integration', description: 'Type-safe GraphQL and REST APIs, gRPC microservices, and third-party webhook systems.' },
    { title: 'Legacy System Modernization', description: 'Refactoring monolithic systems into modern cloud-native architectures with zero downtime.' },
  ]

  const stage2AIAutomation = [
    { title: 'LLM & Chatbot Integration', description: 'Production-grade conversational interfaces wired into your real data and business workflows.' },
    { title: 'Retrieval-Augmented Generation (RAG)', description: 'Grounding model outputs in your own documents, vector indices, and knowledge bases.' },
    { title: 'Agentic AI / Custom AI Agents', description: 'Multi-step autonomous AI agents that execute real actions, tool calls, and automated decisions.' },
    { title: 'Workflow & Business Process Automation', description: 'Replacing manual, repetitive operations with reliable automated pipelines and SLA guarantees.' },
    { title: 'Predictive Analytics & ML Models', description: 'Custom forecasting, scoring, and classification models trained on your proprietary data.' },
    { title: 'AI-Powered Search & Recommendations', description: 'Semantic vector search and personalization engines that understand user intent.' },
    { title: 'Model Fine-Tuning & Evaluation', description: 'Tailoring open-weight and proprietary models against real-world edge cases and evaluation benchmarks.' },
    { title: 'MLOps & Model Deployment', description: 'Model versioning, latency monitoring, cost tracking, and automated CI/CD model rollouts.' },
  ]

  const stage3DigitalMarketing = [
    { title: 'SEO & Technical SEO', description: 'Site architecture, Core Web Vitals optimization, programmatic SEO, and technical crawlability.' },
    { title: 'Paid Media (PPC) Advertising', description: 'Google Ads, Meta, and LinkedIn campaigns managed strictly for efficient CAC and high ROAS.' },
    { title: 'Social Media Strategy & Management', description: 'Consistent, technical on-brand presence across developer and executive social channels.' },
    { title: 'Content Marketing & Copywriting', description: 'Technical whitepapers, developer documentation, and acquisition content built to convert.' },
    { title: 'Email Marketing & Automation', description: 'Automated lifecycle onboarding campaigns and customer retention flows using Klaviyo and HubSpot.' },
    { title: 'Conversion Rate Optimization (CRO)', description: 'Data-driven A/B testing, landing page optimization, and conversion funnel analysis.' },
    { title: 'Analytics, Tracking & Reporting', description: 'Clean GA4 measurement, server-side tracking, and multi-touch attribution dashboards.' },
    { title: 'Brand & Growth Strategy', description: 'Market positioning, go-to-market execution, and channel strategies tied to business goals.' },
  ]

  const stage4InfraDesign = [
    { title: 'Cloud Infrastructure & DevOps', description: 'Multi-region AWS/GCP cloud infrastructure, Terraform IaC, and Kubernetes cluster management.' },
    { title: 'CI/CD & Release Engineering', description: 'Automated build, test, and zero-downtime deployment pipelines with rollback safety.' },
    { title: 'Product Design & UX Engineering', description: 'Interfaces that captivate and convert, motion design, and accessible component architectures.' },
    { title: 'Design Systems & Component Libraries', description: 'Reusable Figma and React component design systems engineered to scale across products.' },
    { title: 'Ongoing Support, Monitoring & Optimization', description: 'Sub-millisecond API tuning, security vulnerability patching, and 24/7 telemetry monitoring.' },
  ]

  return (
    <>
      <ScrollScene keyframes={SERVICES_KEYFRAMES}>
        <CircuitTubeScene stage={0} />
        <NeuralGraphScene />
        <DataRibbonScene />
        <GlassClusterScene stage={3} />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="full capability catalog"
            title="Services"
            description="A comprehensive breakdown of our software engineering, AI intelligence, marketing growth, and cloud infrastructure capabilities."
          />

          {/* Stage 1: Software Development */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                eyebrow="Category 01"
                title={
                  <>
                    Software <span className="flux-word">Development</span>
                  </>
                }
                description="Full-stack product engineering and custom web platform builds."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stage1SoftwareDev.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Stage 2: AI & Automation */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Category 02"
                  title={
                    <>
                      AI &amp; <span className="flux-word">Automation</span>
                    </>
                  }
                  description="Agentic AI systems, RAG pipelines, and intelligent process automation."
                />
                <Link
                  href="/services/ai-services"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline shrink-0 mb-2"
                >
                  See the full AI &amp; Automation breakdown →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stage2AIAutomation.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Stage 3: Digital Marketing */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Category 03"
                  title={
                    <>
                      Digital <span className="flux-word">Marketing</span>
                    </>
                  }
                  description="Data-driven technical acquisition, SEO, PPC, and conversion rate optimization."
                />
                <Link
                  href="/services/digital-marketing"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline shrink-0 mb-2"
                >
                  See the full Digital Marketing breakdown →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stage3DigitalMarketing.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Stage 4: Infrastructure & Design */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                eyebrow="Category 04"
                title={
                  <>
                    Infrastructure &amp; <span className="flux-word">Design</span>
                  </>
                }
                description="Cloud DevOps, CI/CD pipelines, design systems, and 24/7 telemetry monitoring."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stage4InfraDesign.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Consultation CTA */}
          <section className="my-20">
            <ContentPanel className="max-w-4xl mx-auto text-center">
              <SectionHeading
                align="center"
                eyebrow="Consultation"
                title="Ready to engineer your next platform?"
                description="Schedule a technical roadmap session with our lead architects to discuss your project requirements."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Book a Free Consultation
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
