import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const Scene3D = lazy(() => import('./Scene3D'))

export default function Showcase3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Detalhe que faz diferença
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Cada site sai com atenção nos detalhes que o cliente nota mesmo
            sem saber nomear — motion, profundidade, acabamento. É o que
            separa um site que existe de um site que impressiona.
          </p>
        </Reveal>

        <div
          ref={containerRef}
          className="h-72 w-full sm:h-80 md:h-96"
          style={{
            maskImage: 'radial-gradient(closest-side, black 65%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(closest-side, black 65%, transparent 100%)',
          }}
        >
          {shouldLoad && (
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  )
}
