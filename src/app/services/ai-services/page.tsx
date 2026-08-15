'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  MessageSquareCode,
  Database,
  Bot,
  Workflow,
  LineChart,
  Search,
  Sliders,
  Server,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { TimelineNode } from '@/components/cards/TimelineNode'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), {
  ssr: false,
})

const AI_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.70, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function AIServicesPage() {
  const subServices = [
    {
      icon: MessageSquareCode,
      title: 'LLM & Chatbot Integration',
      description: 'Production-grade conversational interfaces wired into your real data and workflows.',
      tags: ['LLM API', 'Workflows', 'Real-Time Data'],
    },
    {
      icon: Database,
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Grounding model outputs in your own documents, product data, and knowledge base.',
      tags: ['RAG', 'Vector DB', 'Semantic Indexing'],
    },
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description: 'Multi-step autonomous workflows that take real actions, not just generate text.',
      tags: ['Autonomous Agents', 'Tool Calling', 'Multi-Step Execution'],
    },
    {
      icon: Workflow,
      title: 'Workflow & Process Automation',
      description: 'Replacing manual, repetitive operations with reliable automated pipelines.',
      tags: ['Process Automation', 'ETL Pipelines', 'SLA Guarantees'],
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics & ML Models',
      description: 'Forecasting, scoring, and classification models trained on your proprietary data.',
      tags: ['Predictive ML', 'Scoring Models', 'Classification'],
    },
    {
      icon: Search,
      title: 'AI-Powered Search & Recommendations',
      description: 'Semantic search and personalization that actually understands user intent.',
      tags: ['Semantic Search', 'Embeddings', 'Personalization'],
    },
    {
      icon: Sliders,
      title: 'Model Fine-Tuning & Evaluation',
      description: 'Tailoring and rigorously testing models against real-world edge cases.',
      tags: ['Fine-Tuning', 'Eval Benchmarks', 'Edge-Case Guardrails'],
    },
    {
      icon: Server,
      title: 'MLOps & Model Deployment',
      description: 'Versioning, monitoring, and safely rolling out model updates in production.',
      tags: ['MLOps', 'Model Monitoring', 'CI/CD Pipelines'],
    },
  ]

  const processSteps = [
    {
      year: 'Step 01',
      title: 'Audit',
      description: 'Map where AI creates real leverage in your product and identify high-impact integration points.',
    },
    {
      year: 'Step 02',
      title: 'Prototype',
      description: 'Build a working proof of concept fast to validate accuracy, response time, and user experience.',
    },
    {
      year: 'Step 03',
      title: 'Integrate',
      description: 'Wire model pipelines into production data, authentication systems, and scalable cloud infrastructure.',
    },
    {
      year: 'Step 04',
      title: 'Monitor',
      description: 'Evaluate output quality, monitor token latency, retrain models, and improve performance continuously.',
    },
  ]

  const tools = [
    'OpenAI',
    'Anthropic',
    'LangChain',
    'Pinecone',
    'Hugging Face',
    'PyTorch',
    'LlamaIndex',
    'Weights & Biases',
  ]

  return (
    <>
      <ScrollScene keyframes={AI_KEYFRAMES}>
        <NeuralGraphScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="ai & automation"
            title="AI & Automation Services"
            description="Embedding real intelligence into your product — not a chatbot bolted on, a system built for it."
          />

          {/* Overview Paragraph */}
          <section className="py-6 max-w-3xl mx-auto">
            <ContentPanel className="text-center">
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Most &ldquo;AI features&rdquo; are surface-level; Code Flux builds AI as core infrastructure — retrieval, memory, evaluation, and guardrails included from day one, not bolted on after launch.
              </p>
            </ContentPanel>
          </section>

          {/* Sub-services Grid */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="What We Build"
                title={
                  <>
                    Engineered for <span className="flux-word">Intelligence</span>
                  </>
                }
                description="Production-grade artificial intelligence systems designed to scale."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {subServices.map((service, i) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    index={i}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Process Timeline */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Integration Path"
                  title={
                    <>
                      AI Engineering <span className="flux-word">Process</span>
                    </>
                  }
                  description="A systematic roadmap from initial audit to production telemetry."
                />
              </div>

              <div className="pl-4 sm:pl-0">
                {processSteps.map((step, i) => (
                  <TimelineNode
                    key={step.title}
                    year={step.year}
                    title={step.title}
                    description={step.description}
                    index={i}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Tools Strip */}
          <section className="py-8">
            <ContentPanel className="text-center">
              <div className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                AI Frameworks &amp; Infrastructure Tools
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-4 py-2.5 rounded-xl bg-white/[0.04] text-[#4DE8DC] border border-[#4DE8DC]/20 hover:border-[#4DE8DC]/50 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* CTA */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Get Started"
                title="Have an AI idea that needs real engineering behind it?"
                description="Discuss your AI product strategy with our lead AI infrastructure architects."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all"
                >
                  Book a Free AI Consultation
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
