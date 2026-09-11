import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Points as PointsType } from 'three'
import { AdditiveBlending } from 'three'

const PARTICLE_COUNT = 900

function ParticleField() {
  const points = useRef<PointsType>(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [positions, seeds] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const seed = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 2.2 + Math.random() * 1.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
      seed[i] = Math.random() * Math.PI * 2
    }
    return [pos, seed]
  }, [])

  useFrame(({ clock }) => {
    if (!points.current) return
    const t = clock.getElapsedTime()
    points.current.rotation.y = reducedMotion ? 0 : t * 0.05
    points.current.rotation.x = reducedMotion ? 0 : Math.sin(t * 0.08) * 0.15

    if (!reducedMotion) {
      const attr = points.current.geometry.attributes.position
      const arr = attr.array as Float32Array
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const s = seeds[i]
        arr[i * 3 + 1] += Math.sin(t * 0.6 + s) * 0.0006
      }
      attr.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#8fb3ff"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

const GLOW_LAYERS = [
  { radius: 0.32, opacity: 0.9 },
  { radius: 0.55, opacity: 0.4 },
  { radius: 0.85, opacity: 0.18 },
  { radius: 1.3, opacity: 0.08 },
]

function CoreGlow() {
  return (
    <>
      {GLOW_LAYERS.map((layer) => (
        <mesh key={layer.radius}>
          <sphereGeometry args={[layer.radius, 32, 32]} />
          <meshBasicMaterial
            color="#3f6dff"
            transparent
            opacity={layer.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <CoreGlow />
        <ParticleField />
      </Suspense>
    </Canvas>
  )
}
