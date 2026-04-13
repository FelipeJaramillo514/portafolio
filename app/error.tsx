'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="px-[8vw] py-24">
      <h2 className="text-2xl font-semibold">Ocurrio un error</h2>
      <p className="mt-3 text-muted">
        Intenta recargar la pagina o volver mas tarde.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 inline-flex items-center rounded-full border border-[rgba(69,227,255,0.35)] px-4 py-2 text-sm text-accent"
      >
        Reintentar
      </button>
    </div>
  )
}
