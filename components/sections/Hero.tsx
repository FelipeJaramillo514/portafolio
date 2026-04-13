'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/context'
import { heroBio } from '@/data/about'

export default function Hero() {
  const { lang, t } = useLanguage()

  const skills = ['Python', 'Java', 'Django', 'Unity', 'Blender', 'Arduino', 'HTML/CSS', 'Git']

  const scrollToProjects = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        01
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_001')}
          </span>
          {' / '}
          <span className="text-accent">Pasto, Nariño - Colombia</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-[48px] items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-[clamp(2.6rem,4vw,4.2rem)] leading-tight font-bold tracking-wide reveal">
            <div className="animate-[textFlicker_7s_infinite,textJitter_3.2s_steps(2,end)_infinite]">BAYRON</div>
            <div className="text-accent drop-shadow-[0_0_18px_rgba(69,227,255,0.55)] animate-[textFlicker_7s_infinite,textJitter_3.2s_steps(2,end)_infinite] [animation-delay:1.4s]">
              FELIPE
            </div>
            <div className="animate-[textFlicker_7s_infinite,textJitter_3.2s_steps(2,end)_infinite] [animation-delay:2.8s]">
              JARAMILLO
            </div>
          </h1>

          <p className="font-mono text-muted mb-4 reveal animate-ghost-pulse">
            {'// '}{lang === 'es' ? 'ESTUDIANTE DE INGENIERÍA DE SOFTWARE' : 'SOFTWARE ENGINEERING STUDENT'}
          </p>

          <p className="text-text max-w-[560px] mb-3 reveal">{lang === 'es' ? heroBio.es : heroBio.en}</p>

          <p className="font-mono text-muted text-sm reveal animate-ghost-pulse">UCC Campus Pasto - 4to Semestre - 2025</p>

          <div className="flex flex-wrap gap-2 mb-6 reveal">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-chip border border-[rgba(69,227,255,0.2)] text-accent px-[10px] py-1 text-[0.72rem] font-mono uppercase tracking-[0.08em]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap reveal">
            <button
              onClick={scrollToProjects}
              className="px-[18px] py-[10px] font-mono text-[0.85rem] border border-accent bg-[rgba(69,227,255,0.12)] text-accent rounded hover:shadow-[0_10px_24px_rgba(69,227,255,0.15)] hover:translate-y-[-2px] transition-all lowercase"
            >
              $ ver_proyectos
            </button>
            <button
              onClick={scrollToContact}
              className="px-[18px] py-[10px] font-mono text-[0.85rem] border border-accent bg-transparent text-accent rounded hover:shadow-[0_10px_24px_rgba(69,227,255,0.15)] hover:translate-y-[-2px] transition-all lowercase"
            >
              $ contactar.sh
            </button>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="flex justify-center animate-float reveal">
          <div className="relative p-[10px] border border-[rgba(69,227,255,0.25)] bg-panel shadow-[0_20px_40px_var(--shadow)] w-[min(360px,78vw)]">
            <Image
              src="/assets/hero.png"
              alt="Bayron Felipe Jaramillo"
              width={360}
              height={360}
              className="w-full rounded"
            />
            <div className="absolute -top-[4px] -left-[4px] w-[22px] h-[22px] border-t-2 border-l-2 border-accent"></div>
            <div className="absolute -top-[4px] -right-[4px] w-[22px] h-[22px] border-t-2 border-r-2 border-accent"></div>
            <div className="absolute -bottom-[4px] -left-[4px] w-[22px] h-[22px] border-b-2 border-l-2 border-accent"></div>
            <div className="absolute -bottom-[4px] -right-[4px] w-[22px] h-[22px] border-b-2 border-r-2 border-accent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
