'use client'

import { useLanguage } from '@/lib/context'
import { useState } from 'react'

export default function Navbar() {
  const { lang, setLang, theme, setTheme, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#proyectos', labelKey: 'proyectos' as const },
    { href: '#stack', labelKey: 'stack' as const },
    { href: '#sobre-mi', labelKey: 'sobre_mi' as const },
    { href: '#testimonios', labelKey: 'testimonios' as const },
    { href: '#contacto', labelKey: 'contacto' as const },
    { href: '#comentarios', labelKey: 'comentarios' as const },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-[8vw] py-[18px] bg-topbar border-b border-[rgba(69,227,255,0.1)] backdrop-blur-[10px]">
      <div className="flex flex-col gap-[2px] font-mono text-[0.85rem] tracking-[0.08em]">
        <span className="text-accent">PORTFOLIO.SYS</span>
        <span className="text-muted">~/felipe.jaramillo</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 font-mono text-[0.85rem] lowercase">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted no-underline relative hover:text-accent transition-colors"
            onClick={handleNavClick}
          >
            {t(link.labelKey)}
          </a>
        ))}

        <div className="flex items-center gap-[10px] ml-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-[6px] py-[2px] font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent bg-transparent border-0 opacity-70 hover:opacity-100 cursor-pointer"
          >
            {lang === 'es' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text bg-[rgba(69,227,255,0.12)] border border-[rgba(69,227,255,0.35)] rounded-full cursor-pointer hover:shadow-lg"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden flex flex-col gap-[6px] bg-transparent border-0 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-[26px] h-[2px] bg-accent"></span>
        <span className="block w-[26px] h-[2px] bg-accent"></span>
        <span className="block w-[26px] h-[2px] bg-accent"></span>
      </button>

      {/* Mobile Nav (Dropdown) */}
      {isOpen && (
        <nav className="absolute top-16 right-[6vw] bg-nav-panel border border-[rgba(69,227,255,0.2)] p-3 flex flex-col gap-3 md:hidden z-20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted no-underline text-sm font-mono lowercase"
              onClick={handleNavClick}
            >
              {t(link.labelKey)}
            </a>
          ))}
          <a
            href="https://github.com/FelipeJaramillo514"
            target="_blank"
            rel="noopener"
            className="text-muted no-underline text-sm font-mono lowercase"
            onClick={handleNavClick}
          >
            github
          </a>
          <div className="flex gap-2 pt-2 border-t border-[rgba(69,227,255,0.1)]">
            <button
              onClick={() => {
                setLang(lang === 'es' ? 'en' : 'es')
                handleNavClick()
              }}
              className="px-2 py-1 font-mono text-[0.68rem] uppercase text-accent bg-transparent border-0 cursor-pointer"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                handleNavClick()
              }}
              className="px-2 py-1 font-mono text-[0.68rem] uppercase text-text bg-[rgba(69,227,255,0.12)] border border-[rgba(69,227,255,0.35)] rounded-full cursor-pointer"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

