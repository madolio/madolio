import SiteMock from '../components/SiteMock'

const cases = [
  {
    name: 'Doce Ateliê',
    category: 'Confeitaria',
    description:
      'Catálogo de bolos e docaria com fotos em destaque, horário de encomenda e pedidos direto pelo WhatsApp.',
    bg: '#F7D9E3',
    accent: '#E85D8A',
  },
  {
    name: 'Estúdio Alma',
    category: 'Pilates',
    description:
      'Página de aulas e turmas com apresentação da instrutora e agendamento de experimental pelo WhatsApp.',
    bg: '#DCEFE3',
    accent: '#4F9D77',
  },
  {
    name: 'NBJ Systems',
    category: 'Equipamentos para tratamento de água',
    description:
      'Redesign completo do site institucional: apresentação da empresa, setores atendidos e linha de produtos, com contato direto por WhatsApp.',
    bg: '#DCEFFB',
    accent: '#0E8FB2',
    url: 'https://nbj-systems.netlify.app',
  },
  {
    name: 'Sabor da Vila',
    category: 'Hamburgueria',
    description:
      'Cardápio digital com fotos dos combos, promoções da semana e pedido rápido pelo WhatsApp.',
    bg: '#FBE3D3',
    accent: '#E2632F',
  },
]

export default function Projetos() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center rounded-full border border-line bg-surface-alt px-4 py-1.5 text-sm font-medium text-ink/70">
          Projetos
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
          Alguns sites que já criei
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Exemplos de como um site simples e bem feito pode representar
          negócios diferentes — do jeito de cada um.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {cases.map((project) => {
            const Wrapper = project.url ? 'a' : 'div'
            return (
              <Wrapper
                key={project.name}
                {...(project.url
                  ? { href: project.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group overflow-hidden rounded-2xl border border-line transition hover:border-accent"
              >
                <SiteMock bg={project.bg} accent={project.accent} framed={false} />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{project.description}</p>
                  {project.url && (
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent">
                      Ver site
                      <span className="ml-1 transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
