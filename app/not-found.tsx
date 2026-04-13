import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="px-[8vw] py-24">
      <h1 className="text-3xl font-semibold">Pagina no encontrada</h1>
      <p className="mt-3 text-muted">
        La pagina que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center text-accent no-underline"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
