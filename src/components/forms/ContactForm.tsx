'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { TextScrim } from '@/components/overlays/TextScrim'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$10k–$50k',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    )

    // Trigger mailto directly to info@codeflux.com
    window.location.href = `mailto:info@codeflux.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <div className="relative rounded-2xl bg-white/[0.03] border border-white/8 p-8 sm:p-10 backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-white uppercase tracking-wider">
                  Your Name <span className="text-[#4DE8DC]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full bg-white/[0.04] border border-white/8 rounded-xl text-white px-4 py-3.5 focus:border-[#4DE8DC] focus:shadow-[0_0_0_3px_rgba(77,232,220,0.15)] outline-none transition-all placeholder:text-[#47585A]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-white uppercase tracking-wider">
                  Email Address <span className="text-[#4DE8DC]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@company.dev"
                  className="w-full bg-white/[0.04] border border-white/8 rounded-xl text-white px-4 py-3.5 focus:border-[#4DE8DC] focus:shadow-[0_0_0_3px_rgba(77,232,220,0.15)] outline-none transition-all placeholder:text-[#47585A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-white uppercase tracking-wider">
                  Company / Organization <span className="text-xs text-[#47585A]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Flux Dynamics Inc."
                  className="w-full bg-white/[0.04] border border-white/8 rounded-xl text-white px-4 py-3.5 focus:border-[#4DE8DC] focus:shadow-[0_0_0_3px_rgba(77,232,220,0.15)] outline-none transition-all placeholder:text-[#47585A]"
                />
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-white uppercase tracking-wider">
                  Project Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#12191C] border border-white/8 rounded-xl text-white px-4 py-3.5 focus:border-[#4DE8DC] focus:shadow-[0_0_0_3px_rgba(77,232,220,0.15)] outline-none transition-all cursor-pointer"
                >
                  <option value="<$10k">&lt; $10k</option>
                  <option value="$10k–$50k">$10k – $50k</option>
                  <option value="$50k+">$50k +</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-white uppercase tracking-wider">
                Project Details & Goals <span className="text-[#4DE8DC]">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your vision, timeline, and tech stack preferences..."
                className="w-full bg-white/[0.04] border border-white/8 rounded-xl text-white px-4 py-3.5 focus:border-[#4DE8DC] focus:shadow-[0_0_0_3px_rgba(77,232,220,0.15)] outline-none transition-all placeholder:text-[#47585A] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(77,232,220,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 text-center flex flex-col items-center justify-center"
          >
            <TextScrim align="center">
              <div className="w-16 h-16 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/40 flex items-center justify-center text-[#4DE8DC] mb-6 shadow-[0_0_24px_rgba(77,232,220,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message Received!
              </h3>
              <p className="text-base text-white max-w-md mx-auto mb-8 leading-relaxed">
                Thanks — we&apos;ve got your message and will be in touch within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-white/15 bg-white/5 text-[#EAF6F5] font-mono text-xs hover:bg-white/10 transition-all"
              >
                Send Another Inquiry
              </button>
            </TextScrim>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default ContactForm
