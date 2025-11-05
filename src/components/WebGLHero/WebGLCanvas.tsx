import { Suspense, lazy, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'

const Scene3D = lazy(() => import('./Scene3D'))

interface WebGLCanvasProps {
  mousePosition: { x: number; y: number }
  scrollY: number
}

// Loading skeleton
function LoadingSkeleton() {
  return (
    <div className="absolute inset-0 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-violet/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 border-2 border-neon-cyan/30 rounded-full animate-spin" />
      </div>
    </div>
  )
}

// Fallback SVG animation for non-WebGL browsers
function SVGFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ff6ff" stopOpacity="0.2">
              <animate
                attributeName="offset"
                values="0;0.3;0"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#7b61ff" stopOpacity="0.3">
              <animate
                attributeName="offset"
                values="0.5;0.7;0.5"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#00ffd5" stopOpacity="0.2">
              <animate
                attributeName="offset"
                values="1;0.7;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx="500"
            cy="500"
            r={100 + i * 80}
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="1"
            opacity={0.6 - i * 0.1}
            filter="url(#glow)"
          >
            <animate
              attributeName="r"
              values={`${100 + i * 80};${120 + i * 80};${100 + i * 80}`}
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${0.6 - i * 0.1};${0.8 - i * 0.1};${0.6 - i * 0.1}`}
              dur={`${3 + i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Rotating polygon */}
        <polygon
          points="500,200 700,400 600,650 400,650 300,400"
          fill="none"
          stroke="#0ff6ff"
          strokeWidth="2"
          opacity="0.4"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="20s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>
  )
}

// Check WebGL support outside component
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

export default function WebGLCanvas({
  mousePosition,
  scrollY,
}: WebGLCanvasProps) {
  const [isWebGLSupported] = useState(checkWebGLSupport)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isWebGLSupported) {
    return <SVGFallback />
  }

  return (
    <div className="absolute inset-0">
      {!isLoaded && <LoadingSkeleton />}
      <Suspense fallback={<LoadingSkeleton />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          <Scene3D mousePosition={mousePosition} scrollY={scrollY} />
        </Canvas>
      </Suspense>
    </div>
  )
}
