'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/context'
import { projects } from '@/data/projects'

export default function Projects() {
  const { lang, t } = useLanguage()

  return (
    <section id="proyectos" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        02
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_002')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'TRABAJOS SELECCIONADOS' : 'SELECTED WORKS'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 auto-rows-max">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`group bg-gradient-to-br from-panel to-panel-2 border border-[rgba(69,227,255,0.15)] shadow-[0_18px_40px_var(--shadow)] flex flex-col hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-[0_28px_56px_rgba(69,227,255,0.3)] hover:border-[rgba(69,227,255,0.35)] transition-all reveal ${
              project.type === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <div className="aspect-video relative bg-[rgba(4,10,14,0.8)] border-b border-[rgba(69,227,255,0.1)] overflow-hidden">
              <Image
                src={project.image}
                alt={lang === 'es' ? project.titleEs : project.titleEn}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex gap-2 mb-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-chip border border-[rgba(69,227,255,0.2)] text-accent px-[10px] py-1 text-[0.72rem] font-mono uppercase tracking-[0.08em]"
                  >
                    {lang === 'es' ? tag.es : tag.en}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold group-hover:animate-title-pulse">
                {lang === 'es' ? project.titleEs : project.titleEn}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {lang === 'es' ? project.descriptionEs : project.descriptionEn}
              </p>

              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-chip border border-[rgba(69,227,255,0.2)] text-accent px-[10px] py-1 text-[0.72rem] font-mono uppercase tracking-[0.08em]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-accent text-[0.85rem] no-underline hover:text-white hover:shadow-[0_0_8px_rgba(69,227,255,0.6)] transition-all mt-2"
                >
                  + {lang === 'es' ? 'ver proyecto' : 'view project'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
