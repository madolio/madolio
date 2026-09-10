import { useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  stagger?: number
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const targets = stagger ? gsap.utils.toArray(el.children) : el

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    },
    { scope: ref, dependencies: [delay, y, stagger] },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
