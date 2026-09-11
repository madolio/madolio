import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { IconShape } from './iconShapes'

export type { IconShape }

const IconScene = lazy(() => import('./IconScene'))

export default function Icon3D({ shape, className }: { shape: IconShape; className?: string }) {
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
      { rootMargin: '150px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad && (
        <Suspense fallback={null}>
          <IconScene shape={shape} />
        </Suspense>
      )}
    </div>
  )
}
