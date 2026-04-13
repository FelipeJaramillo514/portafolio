'use client'

import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Testimonials from '@/components/sections/Testimonials'
import Comments from '@/components/sections/Comments'

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Testimonials />
      <Comments />
    </main>
  )
}
