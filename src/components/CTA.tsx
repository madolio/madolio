import { EMAIL_HREF, WHATSAPP_URL } from '../constants'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-hover/50 blur-3xl" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Pronto pra ter um site assim?
        </h2>
        <p className="mt-4 text-white/70">
          Manda uma mensagem agora e conta um pouco sobre o seu negócio. Eu
          te devolvo uma proposta rápida.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Falar no WhatsApp
          </a>
          <a
            href={EMAIL_HREF}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Enviar e-mail
          </a>
        </div>
      </Reveal>
    </section>
  )
}
