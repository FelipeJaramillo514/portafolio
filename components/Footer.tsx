export default function Footer() {
  return (
    <footer className="px-[8vw] py-[40px] border-t border-[rgba(69,227,255,0.1)] flex flex-col gap-[10px] font-mono text-[0.75rem] text-muted">
      <div>© 2025 Bayron Felipe Jaramillo Guareño | Ingeniería de Software - UCC Pasto</div>
      <div className="text-accent">
        <a
          href="https://github.com/FelipeJaramillo514"
          target="_blank"
          rel="noopener"
          className="text-accent no-underline hover:text-white"
        >
          GitHub
        </a>{' '}
        /{' '}
        <a
          href="https://www.linkedin.com/in/felipe-jaramillo-933a0039b/"
          target="_blank"
          rel="noopener"
          className="text-accent no-underline hover:text-white"
        >
          LinkedIn
        </a>{' '}
        /{' '}
        <a
          href="/CV.pdf"
          download="CV-BayronFelipe.pdf"
          className="text-accent no-underline hover:text-white"
        >
          CV.pdf
        </a>
      </div>
      <div className="text-accent">ESTADO: DISPONIBLE</div>
    </footer>
  )
}
