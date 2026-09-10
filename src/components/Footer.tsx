import { EMAIL, EMAIL_HREF } from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink/60 sm:flex-row">
        <span className="font-heading font-extrabold text-ink">
          madolio<span className="text-accent">.</span>
        </span>
        <a href={EMAIL_HREF} className="transition hover:text-ink">
          {EMAIL}
        </a>
        <span>© {new Date().getFullYear()} Madolio. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
