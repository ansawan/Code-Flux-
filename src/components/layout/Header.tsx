'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, ChevronDown, Cpu, TrendingUp, Layers } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'All Services', href: '/services', desc: 'Complete WebGL & engineering capabilities', icon: Layers },
      { label: 'AI & Automation', href: '/services/ai-services', desc: 'LLM integration, RAG & custom agents', icon: Cpu },
      { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Technical SEO, PPC & CRO growth', icon: TrendingUp },
    ],
  },
  { label: 'AI Services', href: '/services/ai-services' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 select-none shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center group-hover:border-[#4DE8DC] transition-all">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#4DE8DC] animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#EAF6F5]">
            CODE <span className="flux-word text-lg">FLUX</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname === link.href

            if (link.subItems) {
              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-xs font-mono tracking-wide transition-colors ${
                      pathname.startsWith('/services')
                        ? 'text-white font-bold underline decoration-[#4DE8DC] underline-offset-4'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#4DE8DC]' : ''}`} />
                  </Link>

                  {/* Services Dropdown Popover */}
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-72 p-3 rounded-2xl bg-[#0D1417]/95 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] space-y-1"
                      >
                        {link.subItems.map((sub) => {
                          const SubIcon = sub.icon
                          const subActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setServicesDropdown(false)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                subActive
                                  ? 'bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-white font-bold'
                                  : 'hover:bg-white/5 text-white'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 flex items-center justify-center text-[#4DE8DC] shrink-0 mt-0.5">
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-mono font-semibold text-white">
                                  {sub.label}
                                </div>
                                <div className="text-[11px] text-white/80 leading-tight mt-0.5">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-mono tracking-wide transition-colors ${
                  active
                    ? 'text-white font-bold underline decoration-[#4DE8DC] underline-offset-4'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#4DE8DC]/40 px-5 py-2 text-sm text-[#4DE8DC] hover:bg-[#4DE8DC]/10 hover:border-[#4DE8DC] transition-all duration-300 font-mono text-xs uppercase tracking-wider"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#EAF6F5] hover:text-[#4DE8DC] focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-black/95 border-b border-white/10 px-6 py-6"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const active = link.href === '/' ? pathname === '/' : pathname === link.href
                return (
                  <div key={link.href} className="space-y-2">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-mono text-base tracking-wide px-3 py-2 rounded-lg transition-all ${
                        active
                          ? 'bg-[#4DE8DC]/10 text-white font-bold border border-[#4DE8DC]/30'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>

                    {/* Render subItems indented in mobile menu */}
                    {link.subItems && (
                      <div className="pl-4 space-y-1">
                        {link.subItems.slice(1).map((sub) => {
                          const subActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`block font-mono text-xs tracking-wide px-3 py-1.5 rounded-lg transition-all ${
                                subActive
                                  ? 'text-white font-bold underline decoration-[#4DE8DC]'
                                  : 'text-white hover:text-white/80'
                              }`}
                            >
                              ↳ {sub.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider text-center"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
export default Header
