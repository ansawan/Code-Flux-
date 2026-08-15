import { HeroOverlay } from '@/components/overlays/HeroOverlay'
import { ServicesCarousel } from '@/components/sections/ServicesCarousel'
import { ServicesOverlay } from '@/components/overlays/ServicesOverlay'
import { AboutTeaserOverlay } from '@/components/overlays/AboutTeaserOverlay'
import { ProcessOverlay } from '@/components/overlays/ProcessOverlay'
import { ShowcaseOverlay } from '@/components/overlays/ShowcaseOverlay'
import { TestimonialsOverlay } from '@/components/overlays/TestimonialsOverlay'
import { StatsOverlay } from '@/components/overlays/StatsOverlay'
import { PricingTeaserOverlay } from '@/components/overlays/PricingTeaserOverlay'
import { CTAOverlay } from '@/components/overlays/CTAOverlay'

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center">
      <HeroOverlay />
      <div className="w-full">
        <ServicesCarousel />
      </div>
      <ServicesOverlay />
      <AboutTeaserOverlay />
      <ProcessOverlay />
      <ShowcaseOverlay />
      <TestimonialsOverlay />
      <StatsOverlay />
      <PricingTeaserOverlay />
      <CTAOverlay />
    </main>
  )
}
