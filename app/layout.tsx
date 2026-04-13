import type { Metadata } from 'next'
import './globals.css'
import LayoutContent from '@/components/LayoutContent'

export const metadata: Metadata = {
  title: 'Portafolio | Bayron Felipe Jaramillo',
  description: 'Software Engineering Student - UCC Pasto',
  keywords: ['portafolio', 'frontend', 'fullstack', 'react', 'next.js'],
  authors: [{ name: 'Bayron Felipe Jaramillo' }],
  creator: 'Bayron Felipe Jaramillo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen">
        <div className="noise"></div>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
