import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portafolio | Bayron Felipe Jaramillo',
    short_name: 'Portafolio',
    description: 'Software Engineering Student - UCC Pasto',
    start_url: '/',
    display: 'standalone',
    background_color: '#07131b',
    theme_color: '#07131b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
