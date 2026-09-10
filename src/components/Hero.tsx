import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { EMAIL_HREF, WHATSAPP_URL } from '../constants'
import Reveal from './Reveal'
import SiteMock from './SiteMock'

const stats = [
  { value: '5 a 15 dias', label: 'Do briefing ao site no ar' },
  { value: '100% responsivo', label: 'Perfeito em qualquer tela' },
  { value: 'Direto', label: 'Atendimento sem intermediários' },
]

export default function Hero() {
  const stackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = stackRef.current
      if (!el) return

      const windows = gsap.utils.toArray<HTMLElement>(el.children)
      windows.forEach((win, i) =>
        gsap.to(win, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 2.6 + i * 0.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        }),
      )
    },
    { scope: stackRef },
  )

  return (
    <section className="overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-line bg-surface-alt px-4 py-1.5 text-sm font-medium text-ink/70">
              Sites para pequenos negócios
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Um site profissional pro seu negócio, no ar em poucos dias.
            </h1>

            <p className="mt-6 text-lg text-ink/70">
              Do zero ao ar: eu cuido do design, do texto e da publicação.
              Você recebe um site pronto pra atrair clientes, sem
              complicação técnica.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Enviar e-mail
              </a>
            </div>
          </Reveal>

          <dl>
            <Reveal
              stagger={0.1}
              delay={0.2}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.value}>
                  <dt className="text-xl font-extrabold text-ink md:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-ink/60">{stat.label}</dd>
                </div>
              ))}
            </Reveal>
          </dl>
        </div>

        <div
          ref={stackRef}
          className="relative mx-auto h-80 w-full max-w-sm sm:h-96"
        >
          <SiteMock
            bg="#DCEFE3"
            accent="#4F9D77"
            className="absolute left-[2%] top-0 z-10 w-[64%] -rotate-6"
          />
          <SiteMock
            bg="#F7D9E3"
            accent="#E85D8A"
            className="absolute left-[30%] top-[22%] z-20 w-[64%] rotate-3"
          />
          <SiteMock
            bg="#EAF0FF"
            accent="#2F5FFF"
            className="absolute left-[14%] top-[8%] z-30 w-[64%] -rotate-2"
          />
        </div>
      </div>
    </section>
  )
}
