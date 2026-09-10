import type { ReactNode } from 'react'

type Benefit = {
  title: string
  description: string
  icon: ReactNode
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const benefits: Benefit[] = [
  {
    title: 'Site responsivo',
    description: 'Layout que se adapta perfeitamente a celular, tablet e computador.',
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="4" width="14" height="10" rx="1.5" />
        <path d="M8 20h6" />
        <rect x="16.5" y="16" width="5" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Design próprio',
    description: 'Identidade visual pensada pro seu negócio, sem modelos genéricos.',
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1.1.9-2 2-2h2a4 4 0 0 0 4-4c0-4-4-7.4-9-7.4Z" />
        <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="9.5" cy="8" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Presença no Google',
    description: 'Estrutura pensada pra aparecer nas buscas de quem procura seu serviço.',
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Entrega rápida',
    description: 'Do briefing à publicação, seu site fica pronto em poucos dias.',
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
      </svg>
    ),
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
          Tudo que seu site precisa ter
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
