import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Christian Hansen | Artist',
  description: 'New York-based artist Christian Hansen showcases his paintings and sculptures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-surface text-primary-dark antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="py-8 text-center text-sm text-primary/60">
          {new Date().getFullYear()} Christian Hansen. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
