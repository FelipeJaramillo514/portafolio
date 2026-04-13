export type Lang = 'es' | 'en'

export type TranslationKey =
  | 'process_001'
  | 'process_002'
  | 'process_003'
  | 'process_004'
  | 'process_005'
  | 'process_006'
  | 'process_007'
  | 'proyectos'
  | 'stack'
  | 'sobre_mi'
  | 'testimonios'
  | 'contacto'
  | 'comentarios'
  | 'github'

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  es: {
    process_001: 'proceso_001 / INICIO',
    process_002: 'proceso_002 / PROYECTOS',
    process_003: 'proceso_003 / TECNOLOGÍAS',
    process_004: 'proceso_004 / SOBRE_MÍ',
    process_005: 'proceso_005 / CONTACTO',
    process_006: 'proceso_006 / TESTIMONIOS',
    process_007: 'proceso_007 / COMENTARIOS',
    proyectos: 'proyectos',
    stack: 'stack',
    sobre_mi: 'sobre_mi',
    testimonios: 'testimonios',
    contacto: 'contacto',
    comentarios: 'comentarios',
    github: 'github',
  },
  en: {
    process_001: 'process_001 / START',
    process_002: 'process_002 / PROJECTS',
    process_003: 'process_003 / TECHNOLOGIES',
    process_004: 'process_004 / ABOUT_ME',
    process_005: 'process_005 / CONTACT',
    process_006: 'process_006 / TESTIMONIALS',
    process_007: 'process_007 / COMMENTS',
    proyectos: 'projects',
    stack: 'stack',
    sobre_mi: 'about_me',
    testimonios: 'testimonials',
    contacto: 'contact',
    comentarios: 'comments',
    github: 'github',
  },
}
