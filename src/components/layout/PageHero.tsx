'use client'
import { motion } from 'framer-motion'
import { TextScrim } from '@/components/overlays/TextScrim'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative z-10 w-full pt-32 pb-16 px-6 sm:px-12 text-center select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <TextScrim align="center">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4DE8DC]/20 bg-[#4DE8DC]/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#4DE8DC] animate-pulse" />
            <span className="font-mono text-xs text-[#4DE8DC] tracking-wider uppercase">
              {eyebrow}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#EAF6F5] mb-6 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white font-normal leading-relaxed"
          >
            {description}
          </motion.p>
        </TextScrim>
      </div>
    </section>
  )
}
export default PageHero
