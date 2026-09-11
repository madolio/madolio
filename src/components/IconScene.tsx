import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import type { IconShape } from './iconShapes'

function Shape({ shape }: { shape: IconShape }) {
  const mesh = useRef<Mesh>(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useFrame((_, delta) => {
    if (reducedMotion || !mesh.current) return
    mesh.current.rotation.x += delta * 0.35
    mesh.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={mesh}>
      {shape === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {shape === 'box' && <boxGeometry args={[1.3, 1.3, 1.3]} />}
      {shape === 'tetrahedron' && <tetrahedronGeometry args={[1.2, 0]} />}
      {shape === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial color="#1d4fd1" roughness={0.3} metalness={0.4} />
    </mesh>
  )
}

export default function IconScene({ shape }: { shape: IconShape }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3], fov: 40 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 2]} intensity={20} />
        <Shape shape={shape} />
      </Suspense>
    </Canvas>
  )
}
