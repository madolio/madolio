import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  BoxGeometry,
  EdgesGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  TetrahedronGeometry,
  type BufferGeometry,
  type Group,
} from 'three'
import type { IconShape } from './iconShapes'

function baseGeometryFor(shape: IconShape): BufferGeometry {
  switch (shape) {
    case 'box':
      return new BoxGeometry(1.3, 1.3, 1.3)
    case 'tetrahedron':
      return new TetrahedronGeometry(1.2, 0)
    case 'octahedron':
      return new OctahedronGeometry(1, 0)
    case 'icosahedron':
      return new IcosahedronGeometry(1, 0)
  }
}

function Shape({ shape }: { shape: IconShape }) {
  const group = useRef<Group>(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return
    group.current.rotation.x += delta * 0.3
    group.current.rotation.y += delta * 0.42
  })

  const [baseGeometry, edgesGeometry] = useMemo(() => {
    const base = baseGeometryFor(shape)
    return [base, new EdgesGeometry(base)]
  }, [shape])

  return (
    <group ref={group}>
      <mesh geometry={baseGeometry}>
        <meshBasicMaterial color="#1d4fd1" transparent opacity={0.06} />
      </mesh>
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="#1d4fd1" transparent opacity={0.85} />
      </lineSegments>
    </group>
  )
}

export default function IconScene({ shape }: { shape: IconShape }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3], fov: 40 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <Shape shape={shape} />
      </Suspense>
    </Canvas>
  )
}
