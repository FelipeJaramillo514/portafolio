'use client'

import { useLanguage } from '@/lib/context'
import { techStack } from '@/data/stack'

export default function Stack() {
  const { lang, t } = useLanguage()

  return (
    <section id="stack" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        03
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_003')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'STACK TÉCNICO' : 'TECH STACK'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6">
        {/* Stack Table */}
        <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft reveal">
          <div className="grid grid-cols-[1.2fr_1fr_0.6fr] gap-[10px] p-3 border-b border-[rgba(69,227,255,0.08)] font-mono font-semibold text-[0.85rem] text-accent bg-[rgba(13,35,50,0.9)]">
            <span>{lang === 'es' ? 'NOMBRE' : 'NAME'}</span>
            <span>{lang === 'es' ? 'CATEGORÍA' : 'CATEGORY'}</span>
            <span>{lang === 'es' ? 'ESTADO' : 'STATUS'}</span>
          </div>

          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1.2fr_1fr_0.6fr] gap-[10px] p-3 border-b border-[rgba(69,227,255,0.08)] font-mono text-[0.85rem] text-muted last:border-b-0"
            >
              <span>{tech.name}</span>
              <span>{lang === 'es' ? tech.categoryEs : tech.categoryEn}</span>
              <span className="text-accent">{tech.status}</span>
            </div>
          ))}
        </div>

        {/* Stats Card */}
        <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-2 p-[18px] font-mono reveal">
          <h4 className="text-accent text-[0.95rem] mb-4 lowercase">
            {'// '}{lang === 'es' ? 'ESTADÍSTICAS' : 'STATS'}
          </h4>
          <div className="space-y-[10px] text-muted text-[0.85rem] lowercase">
            <div>
              <span>{lang === 'es' ? 'semestre:' : 'semester:'}</span>
              <strong className="text-text ml-2">{lang === 'es' ? '5to - UCC' : '5th - UCC'}</strong>
            </div>
            <div>
              <span>{lang === 'es' ? 'proyectos:' : 'projects:'}</span>
              <strong className="text-text ml-2">4+</strong>
            </div>
            <div>
              <span>{lang === 'es' ? 'exp. laboral:' : 'work exp.:'}</span>
              <strong className="text-text ml-2">2017 →</strong>
            </div>
            <div>
              <span>{lang === 'es' ? 'certificados:' : 'certificates:'}</span>
              <strong className="text-text ml-2">2 SENA</strong>
            </div>
            <div>
              <span>{lang === 'es' ? 'estado:' : 'status:'}</span>
              <strong className="text-accent ml-2">
                {lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
