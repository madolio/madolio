import Reveal from '../components/Reveal'
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
        <Reveal>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Alguns sites que já criei
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Exemplos de como um site simples e bem feito pode representar
            negócios diferentes — do jeito de cada um.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid gap-10 sm:grid-cols-2">
          {cases.map((project) => {
            const Wrapper = project.url ? 'a' : 'div'
            return (
              <Wrapper
                key={project.name}
                {...(project.url
                  ? { href: project.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="block"
              >
                <SiteMock bg={project.bg} accent={project.accent} />
                <div className="mt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
                    <span className="text-sm text-ink/50">{project.category}</span>
                  </div>
                  <p className="mt-2 text-ink/65">{project.description}</p>
                  {project.url && (
                    <span className="mt-3 inline-block font-semibold text-accent underline decoration-accent/30 underline-offset-4">
                      Ver site
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
