'use client'
import { motion } from 'framer-motion'
import { TextScrim } from './TextScrim'

export function HeroOverlay() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 text-center select-none">
      <TextScrim align="center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4DE8DC]/20 bg-[#4DE8DC]/5 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#4DE8DC] animate-pulse" />
          <span className="font-mono text-xs text-[#4DE8DC] tracking-wider uppercase">
            full-stack · ai · systems
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          <span className="text-[#EAF6F5]">CODE</span>{' '}
          <span className="flux-word">FLUX</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-lg sm:text-xl text-white font-normal mb-10 leading-relaxed"
        >
          Engineering the continuous data-current that propels modern products forward. Intelligent AI, web architectures, and cloud platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm hover:shadow-[0_0_30px_rgba(77,232,220,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
          <a
            href="#showcase"
            className="px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-[#EAF6F5] font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            See Our Work →
          </a>
        </motion.div>
      </TextScrim>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[#47585A] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4DE8DC] animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
