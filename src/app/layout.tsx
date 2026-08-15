import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { CanvasWrapper } from '@/components/3d/CanvasWrapper'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CODE FLUX — 3D WebGL Software Studio',
  description: 'Engineering high-performance WebGL web applications, intelligent AI systems, cloud infrastructure, and digital growth platforms.',
  keywords: ['Software Studio', 'Three.js', 'React Three Fiber', 'Next.js 15', 'AI Integration', 'WebGL 3D', 'Digital Marketing'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'CODE FLUX — 3D WebGL Software Studio',
    description: 'Engineering the continuous digital current that moves your product forward.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#000000] text-[#EAF6F5] font-sans antialiased selection:bg-[#4DE8DC] selection:text-black min-h-screen" suppressHydrationWarning>
        <LenisProvider>
          {/* Dynamic 3D Scene Canvas */}
          <CanvasWrapper />

          {/* Persistent Global Header */}
          <Header />

          {/* Main Route Content & Footer */}
          <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
            <main className="grow w-full">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
