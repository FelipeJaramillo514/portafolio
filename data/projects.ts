export type ProjectType = 'featured' | 'compact' | 'wide'

export interface Project {
  titleEs: string
  titleEn: string
  descriptionEs: string
  descriptionEn: string
  image: string
  tags: { es: string; en: string }[]
  tools: string[]
  type: ProjectType
  link?: string
}

export const projects: Project[] = [
  {
    titleEs: 'GestARte: Realidad Virtual para el Estudio de la Gestación',
    titleEn: 'GestARte: Virtual Reality for Gestation Study',
    descriptionEs:
      'GestARte es una herramienta en Unity para simular el desarrollo fetal por semanas, con modelos 3D, interacción guiada y enfoque educativo/investigativo. Optimizado para Meta Quest 3 / Quest Pro.',
    descriptionEn:
      'GestARte is a Unity-based VR tool that simulates fetal development week by week, using 3D models and guided interactions for educational and research use. Optimized for Meta Quest 3 / Quest Pro.',
    image: '/assets/gestarte.png',
    tags: [{ es: 'vr / investigación', en: 'vr / research' }],
    tools: ['Unity', 'C#', 'Blender', 'Meta Quest 3'],
    type: 'featured',
  },
  {
    titleEs: 'Web Floristería Media Naranja',
    titleEn: 'Media Naranja Flower Shop Website',
    descriptionEs:
      'Página web para floristería con catálogo, colecciones por temporada y pedidos vía WhatsApp. Diseño responsive con jerarquía clara de productos y enfoque en marca.',
    descriptionEn:
      'Landing page for a flower shop with catalog, seasonal collections, and WhatsApp ordering. Built responsive with clean product hierarchy and brand visuals.',
    image: '/assets/medianaranja.png',
    tags: [{ es: 'web app', en: 'web app' }],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    link: 'https://naranjaweb.vercel.app/',
    type: 'compact',
  },
  {
    titleEs: 'Juego de Recorrido en Circuito',
    titleEn: 'Circuit Path Game',
    descriptionEs:
      'Juego físico con recorrido por circuito, retroalimentación por sensores y lógica de puntuación. Arduino controla señales y el sistema visualiza tiempos y penalizaciones.',
    descriptionEn:
      'Physical game with an electronic circuit path, sensor feedback, and scoring logic. Arduino handles sensors and signals while the interface visualizes time and penalties.',
    image: '/assets/circuito.png',
    tags: [{ es: 'hardware / arduino', en: 'hardware / arduino' }],
    tools: ['Arduino', 'Sensores', 'Electrónica', 'C#'],
    type: 'compact',
  },
  {
    titleEs: 'Simulación de Trayectoria y Cálculo de Fuerza',
    titleEn: 'Trajectory Simulation and Force Calculation',
    descriptionEs:
      'Simulador de física que calcula fuerzas y trayectorias con parámetros variables, generando gráficas y comparativas con NumPy y Matplotlib.',
    descriptionEn:
      'Physics simulator that computes forces and trajectories with variable parameters, generating plots and comparisons using NumPy and Matplotlib.',
    image: '/assets/trayectoria.png',
    tags: [{ es: 'data science / python', en: 'data science / python' }],
    tools: ['Python', 'NumPy', 'Matplotlib'],
    type: 'wide',
  },
]
