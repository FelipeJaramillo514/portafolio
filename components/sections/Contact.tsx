'use client'

import { useState, useRef } from 'react'
import { useLanguage } from '@/lib/context'

export default function Contact() {
  const { lang, t } = useLanguage()
  const [successMessage, setSuccessMessage] = useState('')
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = subjectRef.current?.value ?? ''
    const messageText = messageRef.current?.value ?? ''

    if (!subject.trim() || !messageText.trim()) {
      alert(lang === 'es' ? 'Por favor completa todos los campos' : 'Please fill all fields')
      return
    }

    const emailData = {
      subject,
      message: messageText,
      date: new Date().toLocaleString(),
    }

    const emails = JSON.parse(localStorage.getItem('ContactEmails') || '[]')
    emails.push(emailData)
    localStorage.setItem('ContactEmails', JSON.stringify(emails))

    setSuccessMessage(
      lang === 'es'
        ? '✓ ¡Mensaje enviado! Pronto me pondré en contacto.'
        : '✓ Message sent! I will contact you soon.',
    )

    if (subjectRef.current) subjectRef.current.value = ''
    if (messageRef.current) messageRef.current.value = ''

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  return (
    <section id="contacto" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        05
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_005')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'ENVIAR COMUNICACIÓN' : 'SEND MESSAGE'}
        </p>
      </div>

      <div className="max-w-2xl">
        <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-4 p-[18px] reveal">
          {/* Header with dots */}
          <div className="flex items-center gap-2 mb-4 font-mono text-muted text-[0.8rem]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff6b6b]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffd166]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#06d6a0]"></span>
            <span className="ml-auto">contacto@felipe-jaramillo.sh</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 mb-6">
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-muted text-[0.8rem]">
                -&gt; {lang === 'es' ? 'enviar_para' : 'send_to'}
              </span>
              <input
                type="email"
                defaultValue="felipejaramillo092@gmail.com"
                className="w-full bg-input-bg border border-[rgba(69,227,255,0.2)] text-text p-3 font-mono"
                disabled
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-muted text-[0.8rem]">
                -&gt; {lang === 'es' ? 'asunto' : 'subject'}
              </span>
              <input
                ref={subjectRef}
                type="text"
                placeholder={lang === 'es' ? 'Escribe el asunto aquí...' : 'Write the subject here...'}
                className="w-full bg-input-bg border border-[rgba(69,227,255,0.2)] text-text p-3 font-mono"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-muted text-[0.8rem]">
                -&gt; {lang === 'es' ? 'mensaje' : 'message'}
              </span>
              <textarea
                ref={messageRef}
                rows={5}
                placeholder={lang === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
                className="w-full bg-input-bg border border-[rgba(69,227,255,0.2)] text-text p-3 font-mono"
              ></textarea>
            </label>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-4 py-2 font-mono text-[0.85rem] border border-accent bg-[rgba(69,227,255,0.12)] text-accent rounded hover:shadow-[0_10px_24px_rgba(69,227,255,0.15)] hover:translate-y-[-2px] transition-all lowercase"
              >
                $ ./enviar.sh
              </button>
              <span className="font-mono text-muted text-[0.8rem]">
                {lang === 'es' ? 'o escríbeme directamente' : 'or write to me directly'}
              </span>
            </div>
          </form>

          {successMessage && (
            <p className="text-accent font-mono text-sm mb-4">{successMessage}</p>
          )}

          {/* Contact Info */}
          <div className="space-y-2 font-mono text-[0.8rem] text-muted">
            <div>
              <span className="text-accent w-[90px] inline-block">
                {lang === 'es' ? 'correo' : 'email'}
              </span>
              <a
                href="mailto:felipejaramillo092@gmail.com"
                className="text-text no-underline border-b border-[rgba(69,227,255,0.3)] hover:text-accent hover:border-[rgba(69,227,255,0.8)]"
              >
                felipejaramillo092@gmail.com
              </a>
            </div>
            <div>
              <span className="text-accent w-[90px] inline-block">
                {lang === 'es' ? 'teléfono' : 'phone'}
              </span>
              <a
                href="https://wa.me/573209586971?text=Hola%20Felipe%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte."
                target="_blank"
                rel="noopener"
                className="text-text no-underline border-b border-[rgba(69,227,255,0.3)] hover:text-accent hover:border-[rgba(69,227,255,0.8)]"
              >
                3209586971
              </a>
            </div>
            <div>
              <span className="text-accent w-[90px] inline-block">linkedin</span>
              <a
                href="https://www.linkedin.com/in/felipe-jaramillo-933a0039b/"
                target="_blank"
                rel="noopener"
                className="text-text no-underline border-b border-[rgba(69,227,255,0.3)] hover:text-accent hover:border-[rgba(69,227,255,0.8)]"
              >
                /in/felipe-jaramillo-933a0039b
              </a>
            </div>
            <div>
              <span className="text-accent w-[90px] inline-block">
                {lang === 'es' ? 'ubicación' : 'location'}
              </span>
              <span>Pasto, Nariño - Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
