'use client'

import { useLanguage } from '@/lib/context'
import { timeline, interests, manifesto, manifestoQuote } from '@/data/about'

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <section id="sobre-mi" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        04
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_004')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'LÍNEA DE TIEMPO' : 'TIMELINE'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
        {/* Timeline */}
        <div className="border-l-2 border-[rgba(69,227,255,0.3)] pl-5 reveal">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pb-5 last:pb-0">
              <div className="absolute -left-[26px] top-[6px] w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_12px_rgba(69,227,255,0.7)]"></div>

              <p className="font-mono text-accent text-[0.8rem] mb-1">
                {lang === 'es' ? item.year : item.yearEn}
              </p>
              <h4 className="font-bold">{lang === 'es' ? item.titleEs : item.titleEn}</h4>
              <p className="text-muted text-sm mb-1">{item.location}</p>
              <p className="text-muted text-sm">
                {lang === 'es' ? item.descriptionEs : item.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {/* Manifesto Card */}
          <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-3 p-[18px] reveal">
            <h4 className="text-accent font-mono text-[0.9rem] mb-3 lowercase">{'// MANIFIESTO'}</h4>
            <p className="text-muted leading-relaxed text-sm mb-4">
              {lang === 'es' ? manifesto.es : manifesto.en}
            </p>

            <blockquote className="border-l-2 border-accent pl-3 mb-4">
              <p className="text-text italic text-sm mb-2">
                &ldquo;{lang === 'es' ? manifestoQuote.es : manifestoQuote.en}&rdquo;
              </p>
              <p className="font-mono text-accent text-[0.75rem]">— Bayron Felipe Jaramillo Guareño</p>
            </blockquote>

            <div className="font-mono text-muted text-[0.8rem] space-y-1">
              <p>{lang === 'es' ? 'DIRECCIÓN Y ESTADO: Pasto' : 'LOCATION & STATUS: Pasto'}</p>
              <p>{lang === 'es' ? 'DISPONIBLE | REMOTO' : 'AVAILABLE | REMOTE'}</p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-3 p-[18px] reveal">
            <h4 className="text-accent font-mono text-[0.9rem] mb-3 lowercase">{'// INTERESES'}</h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="bg-chip border border-[rgba(69,227,255,0.2)] text-accent px-[10px] py-1 text-[0.72rem] font-mono uppercase tracking-[0.08em]"
                >
                  {lang === 'es' ? interest.es : interest.en}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
