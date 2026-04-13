export interface Testimonial {
  name: string
  avatar: string
  roleEs: string
  roleEn: string
  quoteEs: string
  quoteEn: string
  project: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Valeria Sandoval',
    avatar: 'VS',
    roleEs: 'Coordinadora de UX - Atlas Studio',
    roleEn: 'UX Coordinator - Atlas Studio',
    quoteEs:
      'Feedback claro, iteraciones rapidas y un resultado visual muy pulido. Fue facil colaborar y alinear objetivos desde el primer dia.',
    quoteEn:
      'Clear feedback, fast iterations, and a very polished visual result. Collaboration was easy and goals aligned from day one.',
    project: 'Sistema de reservas - Web App',
  },
  {
    name: 'Andres Duarte',
    avatar: 'AD',
    roleEs: 'Lider de Producto - Nova Labs',
    roleEn: 'Product Lead - Nova Labs',
    quoteEs:
      'Entrega a tiempo y con foco en el detalle. Supo traducir requerimientos tecnicos a una interfaz limpia y consistente.',
    quoteEn:
      'On-time delivery with a strong eye for detail. He translated technical requirements into a clean, consistent interface.',
    project: 'Dashboard de analitica',
  },
  {
    name: 'Camila Rios',
    avatar: 'CR',
    roleEs: 'Fundadora - Aurora Creativa',
    roleEn: 'Founder - Aurora Creativa',
    quoteEs:
      'El sitio quedo ligero, rapido y con una estetica profesional. Recibi comentarios positivos desde el primer dia.',
    quoteEn:
      'The site feels light, fast, and professionally styled. I received positive feedback from day one.',
    project: 'Landing de marca personal',
  },
]
