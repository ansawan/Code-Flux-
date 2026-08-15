'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function ValueCard({ icon: Icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/8 p-8 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/25 flex items-center justify-center text-[#4DE8DC] mb-5 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5" />
      </div>

      <h3 className="text-lg font-bold text-[#EAF6F5] mb-2 group-hover:text-[#4DE8DC] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-white leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
export default ValueCard
