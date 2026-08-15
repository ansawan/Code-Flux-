'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon, ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  index: number
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, tags, index, href }: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/8 p-8 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] group-hover:scale-110 group-hover:bg-[#4DE8DC]/20 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          {href && (
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FA6A3] group-hover:text-[#4DE8DC] group-hover:border-[#4DE8DC]/40 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#EAF6F5] mb-3 group-hover:text-[#4DE8DC] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-white leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>
  }

  return content
}
export default ServiceCard
