import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector2, Color } from 'three'
import * as THREE from 'three'
import {
  backgroundVertexShader,
  backgroundFragmentShader,
  meshVertexShader,
  meshFragmentShader,
} from './shaders'

interface Scene3DProps {
  mousePosition: { x: number; y: number }
  scrollY: number
}

// Procedural background plane
function ProceduralBackground({
  mousePosition,
}: {
  mousePosition: { x: number; y: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0.5, 0.5) },
      uResolution: { value: new Vector2(viewport.width, viewport.height) },
    }),
    [viewport]
  )

  useFrame(state => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
      material.uniforms.uMouse.value.set(
        mousePosition.x * 0.5 + 0.5,
        mousePosition.y * 0.5 + 0.5
      )
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <planeGeometry
        args={[viewport.width * 4, viewport.height * 4, 128, 128]}
      />
      <shaderMaterial
        vertexShader={backgroundVertexShader}
        fragmentShader={backgroundFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

// Interactive 3D geometric mesh
function InteractiveMesh({ mousePosition, scrollY }: Scene3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0, 0) },
      uColor1: { value: new Color('#0ff6ff') },
      uColor2: { value: new Color('#7b61ff') },
    }),
    []
  )

  useFrame(state => {
    if (meshRef.current && groupRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
      material.uniforms.uMouse.value.set(mousePosition.x, mousePosition.y)

      // Rotation based on time and mouse
      groupRef.current.rotation.x =
        state.clock.elapsedTime * 0.2 + mousePosition.y * 0.3
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.3 + mousePosition.x * 0.3

      // Scale based on scroll
      const scale = 1 + scrollY * 0.0002
      groupRef.current.scale.setScalar(Math.min(scale, 1.5))

      // Position follows mouse subtly
      groupRef.current.position.x = mousePosition.x * 0.5
      groupRef.current.position.y = mousePosition.y * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 4]} />
        <shaderMaterial
          vertexShader={meshVertexShader}
          fragmentShader={meshFragmentShader}
          uniforms={uniforms}
          transparent
          wireframe
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// Particle system
// Generate particle positions outside component
const generateParticlePositions = (count: number) => {
  const pos = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 10
    pos[i * 3 + 1] = (Math.random() - 0.5) * 10
    pos[i * 3 + 2] = (Math.random() - 0.5) * 5
  }
  return pos
}

function ParticleField({
  mousePosition,
}: {
  mousePosition: { x: number; y: number }
}) {
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 200
  const positions = useMemo(
    () => generateParticlePositions(particleCount),
    [particleCount]
  )

  useFrame(state => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Mouse influence
        const dx = mousePosition.x * 5 - positions[i3]
        const dy = mousePosition.y * 5 - positions[i3 + 1]
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 2) {
          positions[i3] += dx * 0.01
          positions[i3 + 1] += dy * 0.01
        }

        // Floating motion
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01
        positions[i3] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.005

        // Boundary check
        if (positions[i3 + 1] > 5) positions[i3 + 1] = -5
        if (positions[i3 + 1] < -5) positions[i3 + 1] = 5
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#0ff6ff"
        transparent={true}
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene3D({ mousePosition, scrollY }: Scene3DProps) {
  return (
    <>
      <ProceduralBackground mousePosition={mousePosition} />
      <ParticleField mousePosition={mousePosition} />
      <InteractiveMesh mousePosition={mousePosition} scrollY={scrollY} />
    </>
  )
}
