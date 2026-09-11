import Reveal from './Reveal'

const benefits = [
  {
    title: 'Site responsivo',
    description: 'Layout que se adapta perfeitamente a celular, tablet e computador.',
  },
  {
    title: 'Design próprio',
    description: 'Identidade visual pensada pro seu negócio, sem modelos genéricos.',
  },
  {
    title: 'Presença no Google',
    description: 'Estrutura pensada pra aparecer nas buscas de quem procura seu serviço.',
  },
  {
    title: 'Entrega rápida',
    description: 'Do briefing à publicação, seu site fica pronto em poucos dias.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-surface-alt py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Tudo que seu site precisa ter
          </h2>
          <p className="mt-4 max-w-xs text-ink/65">
            Sem plugin, sem builder genérico — cada site é construído do zero
            pro seu negócio.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="border-t border-ink/15">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="grid gap-1 border-b border-ink/15 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
              <p className="text-ink/65">{benefit.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
