import Icon3D, { type IconShape } from './Icon3D'
import Reveal from './Reveal'

const benefits: { title: string; description: string; shape: IconShape }[] = [
  {
    title: 'Site responsivo',
    description: 'Layout que se adapta perfeitamente a celular, tablet e computador.',
    shape: 'box',
  },
  {
    title: 'Design próprio',
    description: 'Identidade visual pensada pro seu negócio, sem modelos genéricos.',
    shape: 'tetrahedron',
  },
  {
    title: 'Presença no Google',
    description: 'Estrutura pensada pra aparecer nas buscas de quem procura seu serviço.',
    shape: 'octahedron',
  },
  {
    title: 'Entrega rápida',
    description: 'Do briefing à publicação, seu site fica pronto em poucos dias.',
    shape: 'icosahedron',
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
            <div
              key={benefit.title}
              className="grid grid-cols-[3rem_1fr] items-start gap-x-5 border-b border-ink/15 py-6 sm:grid-cols-[3rem_11rem_1fr] sm:gap-8"
            >
              <Icon3D shape={benefit.shape} className="h-12 w-12" />
              <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
              <p className="col-span-2 mt-2 text-ink/65 sm:col-span-1 sm:col-start-3 sm:mt-0">
                {benefit.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
