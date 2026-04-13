'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/context'

interface Comment {
  name: string
  email: string
  message: string
  date: string
}

export default function Comments() {
  const { lang, t } = useLanguage()
  const [comments, setComments] = useState<Comment[]>([])
  const [formMessage, setFormMessage] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('Comments')
    if (saved) {
      setComments(JSON.parse(saved))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = nameRef.current?.value ?? ''
    const email = emailRef.current?.value ?? ''
    const message = messageRef.current?.value ?? ''

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert(lang === 'es' ? 'Por favor completa todos los campos' : 'Please fill all fields')
      return
    }

    const comment: Comment = {
      name,
      email,
      message,
      date: new Date().toLocaleDateString(),
    }

    const saved = localStorage.getItem('Comments')
    const allComments: Comment[] = saved ? JSON.parse(saved) : []
    allComments.push(comment)
    localStorage.setItem('Comments', JSON.stringify(allComments))

    setComments(allComments)
    setFormMessage(
      lang === 'es'
        ? '✓ ¡Comentario enviado! Gracias por tu mensaje.'
        : '✓ Comment sent! Thanks for your feedback.',
    )

    if (nameRef.current) nameRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (messageRef.current) messageRef.current.value = ''

    setTimeout(() => setFormMessage(''), 3000)
  }

  return (
    <section id="comentarios" className="relative py-[90px] px-[8vw]">
      <div className="absolute right-[6vw] top-[50px] text-[clamp(5rem,12vw,12rem)] font-bold text-section-index pointer-events-none">
        07
      </div>

      <div className="mb-10 reveal">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent drop-shadow-[0_0_12px_rgba(69,227,255,0.35)] animate-[textGlow_6s_ease-in-out_infinite,scanPulse_4.5s_ease-in-out_infinite]">
            {t('process_007')}
          </span>
        </p>
        <p className="font-mono text-accent text-sm">
          {'// '}{lang === 'es' ? 'RETROALIMENTACIÓN' : 'FEEDBACK'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        {/* Form */}
        <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-4 p-[18px] reveal">
          <div className="flex items-center gap-2 mb-4 font-mono text-muted text-[0.8rem]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff6b6b]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffd166]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#06d6a0]"></span>
            <span className="ml-auto">/comentarios/entrada</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 mb-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-muted text-[0.8rem]">
                -&gt; {lang === 'es' ? 'nombre' : 'name'}
              </span>
              <input
                ref={nameRef}
                type="text"
                placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                className="w-full bg-input-bg border border-[rgba(69,227,255,0.2)] text-text p-3 font-mono"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-muted text-[0.8rem]">
                -&gt; {lang === 'es' ? 'correo' : 'email'}
              </span>
              <input
                ref={emailRef}
                type="email"
                placeholder={lang === 'es' ? 'tuemail@correo.com' : 'you@email.com'}
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
                placeholder={lang === 'es' ? 'Escribe un comentario...' : 'Write a comment...'}
                className="w-full bg-input-bg border border-[rgba(69,227,255,0.2)] text-text p-3 font-mono"
              ></textarea>
            </label>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-4 py-2 font-mono text-[0.85rem] border border-accent bg-[rgba(69,227,255,0.12)] text-accent rounded hover:shadow-[0_10px_24px_rgba(69,227,255,0.15)] hover:translate-y-[-2px] transition-all lowercase"
              >
                $ ./enviar_nota.sh
              </button>
              <span className="font-mono text-muted text-[0.8rem]">
                {lang === 'es' ? 'gracias por tu mensaje' : 'thank you for your feedback'}
              </span>
            </div>
          </form>

          {formMessage && <p className="text-accent font-mono text-sm">{formMessage}</p>}
        </div>

        {/* Comments Side */}
        <div className="border border-[rgba(69,227,255,0.2)] bg-panel-soft-2 p-[18px] font-mono reveal">
          <h4 className="text-accent text-[0.95rem] mb-3 lowercase">{'// COMUNIDAD'}</h4>
          <p className="text-muted text-[0.85rem] mb-4">
            {lang === 'es'
              ? 'Los mensajes aparecerán aquí cuando sean publicados.'
              : 'Messages appear here once they are published.'}
          </p>

          {comments.length === 0 ? (
            <div className="border border-dashed border-[rgba(69,227,255,0.25)] p-[14px] text-text">
              {lang === 'es'
                ? 'Sé el primero en dejar un comentario.'
                : 'Be the first to leave a comment.'}
            </div>
          ) : (
            <div className="space-y-3">
              {comments.map((comment, idx) => (
                <div
                  key={idx}
                  className="mb-3 pb-3 border-b border-[rgba(69,227,255,0.1)] last:border-b-0 last:mb-0 last:pb-0 animate-slide-in"
                >
                  <p className="text-accent text-[0.9rem] mb-1">
                    <strong>{comment.name}</strong>
                  </p>
                  <p className="text-text text-[0.85rem] leading-relaxed mb-1">{comment.message}</p>
                  <p className="text-muted text-[0.75rem]">{comment.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
