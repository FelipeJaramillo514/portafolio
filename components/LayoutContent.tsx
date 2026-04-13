'use client'

import { useEffect } from 'react'
import { LanguageProvider } from '@/lib/context'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  )
}
