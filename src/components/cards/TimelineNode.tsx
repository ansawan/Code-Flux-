'use client'
import { motion } from 'framer-motion'

interface TimelineNodeProps {
  year: string
  title: string
  description: string
  index: number
  isLast?: boolean
}

export function TimelineNode({ year, title, description, index, isLast }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
    >
      {/* Vertical Connecting Line & Node */}
      <div className="flex flex-col items-center">
        {/* Glowing Node Dot */}
        <div className="w-5 h-5 rounded-full bg-[#12191C] border-2 border-[#4DE8DC] flex items-center justify-center shadow-[0_0_12px_rgba(77,232,220,0.6)] z-10">
          <div className="w-2 h-2 rounded-full bg-[#4DE8DC] animate-ping" />
        </div>
        {/* Connecting Vertical Line */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-[#4DE8DC] via-[#2FBFB0]/50 to-transparent mt-2" />
        )}
      </div>

      {/* Content Box */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 backdrop-blur-xl hover:border-[#4DE8DC]/30 transition-all grow">
        <div className="font-mono text-xs text-[#4DE8DC] tracking-widest uppercase mb-1 font-semibold">
          {year}
        </div>
        <h4 className="text-lg font-bold text-[#EAF6F5] mb-2">
          {title}
        </h4>
        <p className="text-sm text-white leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
export default TimelineNode
