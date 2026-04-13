export interface TimelineItem {
  year: string
  yearEn: string
  titleEs: string
  titleEn: string
  location: string
  descriptionEs: string
  descriptionEn: string
}

export interface Interest {
  es: string
  en: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2017 - ACTUAL',
    yearEn: '2017 - PRESENT',
    titleEs: 'Encargado Administrativo y de Operaciones',
    titleEn: 'Administrative and Operations Manager',
    location: 'Licorantes y Variedades Marino - Túquerres, Nariño',
    descriptionEs: 'Gestión de inventarios, facturación electrónica, software de ventas y coordinación con proveedores.',
    descriptionEn: 'Inventory management, electronic invoicing, sales software, and supplier coordination.',
  },
  {
    year: '2021',
    yearEn: '2021',
    titleEs: 'Bachiller Académico con Formación Tecnológica',
    titleEn: 'Academic High School with Technological Training',
    location: 'Instituto Técnico Industrial - Túquerres, Nariño',
    descriptionEs: 'Formación con énfasis en herramientas tecnológicas y metodológicas.',
    descriptionEn: 'Training with emphasis on technological and methodological tools.',
  },
  {
    year: '2021',
    yearEn: '2021',
    titleEs: 'Técnico en Contabilización de Operaciones',
    titleEn: 'Technician in Operations Accounting',
    location: 'SENA - Túquerres, Nariño',
    descriptionEs: 'Formación Profesional Integral en operaciones comerciales y financieras.',
    descriptionEn: 'Comprehensive professional training in commercial and financial operations.',
  },
  {
    year: '2024 - 2025',
    yearEn: '2024 - 2025',
    titleEs: 'Ingeniería de Software - UCC',
    titleEn: 'Software Engineering - UCC',
    location: 'Universidad Cooperativa de Colombia - Campus Pasto',
    descriptionEs: '7o semestre. Proyectos de investigación en realidad virtual e interfaces educativas.',
    descriptionEn: '7th semester. Research projects in virtual reality and educational interfaces.',
  },
]

export const interests: Interest[] = [
  { es: 'Análisis de Datos', en: 'Data Analysis' },
  { es: 'Tecnología', en: 'Technology' },
  { es: 'Automatización', en: 'Automation' },
  { es: 'Música', en: 'Music' },
  { es: 'Lectura', en: 'Reading' },
  { es: 'Aprendizaje continuo', en: 'Continuous Learning' },
]

export const manifesto = {
  es: 'Creo que el buen software no se construye solo con líneas de código; se construye con pensamiento analítico, disciplina y la capacidad de traducir problemas en soluciones. Cada proyecto es una oportunidad de mejorar y crear.',
  en: 'I believe good software is not built only with lines of code; it is built with analytical thinking, discipline, and the ability to translate problems into solutions. Each project is an opportunity to improve and create.',
}

export const manifestoQuote = {
  es: 'Enfocado en aportar soluciones efectivas y escalables dentro de entornos colaborativos y orientados a resultados.',
  en: 'Focused on delivering effective and scalable solutions within collaborative, results-oriented environments.',
}

export const heroBio = {
  es: 'Orientación técnica y analítica aplicada a la resolución eficiente de problemas. Comprometido con la mejora continua, el aprendizaje constante y soluciones efectivas y escalables dentro de entornos colaborativos.',
  en: 'Technical and analytical orientation applied to efficient problem solving. Committed to continuous improvement, constant learning, and effective scalable solutions within collaborative environments.',
}
