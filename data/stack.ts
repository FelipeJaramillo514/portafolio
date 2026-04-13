export interface TechItem {
  name: string
  categoryEs: string
  categoryEn: string
  status: string
}

export const techStack: TechItem[] = [
  { name: 'Python', categoryEs: 'Lenguaje', categoryEn: 'Language', status: '[ACTIVO]' },
  { name: 'Java', categoryEs: 'Lenguaje', categoryEn: 'Language', status: '[ACTIVO]' },
  { name: 'HTML5 / CSS3', categoryEs: 'Desarrollo Web', categoryEn: 'Web Development', status: '[ACTIVO]' },
  { name: 'Django', categoryEs: 'Framework', categoryEn: 'Framework', status: '[ACTIVO]' },
  { name: 'Pandas / NumPy', categoryEs: 'Librerías', categoryEn: 'Libraries', status: '[ACTIVO]' },
  { name: 'Unity', categoryEs: 'Plataforma / Game Dev', categoryEn: 'Platform / Game Dev', status: '[ACTIVO]' },
  { name: 'Blender', categoryEs: 'Modelado 3D', categoryEn: '3D Modeling', status: '[ACTIVO]' },
  { name: 'Git / GitHub', categoryEs: 'Control de Versiones', categoryEn: 'Version Control', status: '[ACTIVO]' },
  { name: 'Arduino', categoryEs: 'Hardware', categoryEn: 'Hardware', status: '[ACTIVO]' },
]
