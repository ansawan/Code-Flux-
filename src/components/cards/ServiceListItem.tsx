'use client'

interface ServiceListItemProps {
  title: string
  description: string
}

export function ServiceListItem({ title, description }: ServiceListItemProps) {
  return (
    <div className="border-b border-white/8 py-4 sm:py-5 flex items-start gap-4 hover:bg-white/[0.02] px-3 rounded-xl transition-all group">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4DE8DC] shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(77,232,220,0.8)] transition-all" />
      <div>
        <h4 className="text-[#EAF6F5] font-semibold text-base group-hover:text-[#4DE8DC] transition-colors">
          {title}
        </h4>
        <p className="text-sm text-white mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
export default ServiceListItem
