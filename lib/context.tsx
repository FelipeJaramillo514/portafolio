'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { translations } from '@/data/translations'
import type { Lang, TranslationKey } from '@/data/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedLang = (localStorage.getItem('lang') as Lang) || 'es'
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    setLang(savedLang)
    setTheme(savedTheme)
    document.documentElement.lang = savedLang
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  }

  const handleSetTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || key
  }

  return (
    <LanguageContext.Provider
      value={{ lang, setLang: handleSetLang, theme, setTheme: handleSetTheme, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      lang: 'es',
      setLang: () => {},
      theme: 'dark',
      setTheme: () => {},
      t: (key: TranslationKey) => key,
    }
  }
  return context
}
