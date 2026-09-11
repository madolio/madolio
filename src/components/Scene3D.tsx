import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'

function Blob() {
  const mesh = useRef<Mesh>(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useFrame((_, delta) => {
    if (reducedMotion || !mesh.current) return
    mesh.current.rotation.x += delta * 0.15
    mesh.current.rotation.y += delta * 0.22
  })

  return (
    <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} scale={1.7}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#1D4FD1"
          roughness={0.2}
          metalness={0.4}
          distort={0.55}
          speed={reducedMotion ? 0 : 2.4}
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 4]} intensity={80} color="#ffffff" />
        <pointLight position={[-3, -2, -3]} intensity={40} color="#8fb3ff" />
        <Blob />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
