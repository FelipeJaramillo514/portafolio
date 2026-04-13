'use client'

import { useLanguage } from '@/lib/context'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const { lang, t } = useLanguage()

  return (
    <section id="testimonios" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        06
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_006')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'LO QUE OTROS DICEN' : 'WHAT OTHERS SAY'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.slice(0, 3).map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-panel-soft border border-[rgba(69,227,255,0.15)] rounded p-6 overflow-hidden hover:border-[rgba(69,227,255,0.35)] hover:bg-panel-soft-2 hover:translate-y-[-4px] transition-all animate-fade-in reveal"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-[rgba(69,227,255,0.2)] to-[rgba(25,182,255,0.2)] flex items-center justify-center font-bold text-accent text-xl">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="text-[0.95rem] text-text mb-0.5">{testimonial.name}</h4>
                <p className="text-[0.8rem] text-muted font-mono">
                  {lang === 'es' ? testimonial.roleEs : testimonial.roleEn}
                </p>
              </div>
            </div>

            <p className="text-text text-[0.9rem] leading-relaxed mb-3 italic border-l-[3px] border-accent pl-3">
              &ldquo;{lang === 'es' ? testimonial.quoteEs : testimonial.quoteEn}&rdquo;
            </p>

            <p className="text-[0.8rem] text-accent font-mono uppercase tracking-[0.5px]">
              {'// '}{lang === 'es' ? 'Proyecto' : 'Project'}: {testimonial.project}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
