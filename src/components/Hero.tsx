import { useState, useEffect, lazy, Suspense } from 'react'

const WebGLCanvas = lazy(() => import('./WebGLHero/WebGLCanvas'))

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [normalizedMouse, setNormalizedMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      // Normalize to -1 to 1 range
      setNormalizedMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* WebGL 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Suspense
          fallback={
            <div className="absolute inset-0">
              <div className="absolute inset-0 grid-lines opacity-20" />
              <div className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float top-20 left-20" />
              <div className="absolute w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-float bottom-20 right-20 animate-delay-300" />
            </div>
          }
        >
          <WebGLCanvas mousePosition={normalizedMouse} scrollY={scrollY} />
        </Suspense>
      </div>

      <div className="section-container text-center relative z-10">
        {/* Intro Badge */}
        <div className="inline-block mb-6 animate-fade-in">
          <span
            className="text-neon-cyan text-sm font-mono tracking-wider uppercase px-4 py-2 glass rounded-full animate-glow-pulse"
            style={{
              textShadow: '0 0 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            Full Stack Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl lg:text-7xl mb-6 animate-slide-up">
          <span
            className="text-gradient"
            style={{
              textShadow:
                '0 0 40px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.8), 0 0 80px rgba(15,246,255,0.3)',
              filter: 'drop-shadow(0 0 20px rgba(11,15,20,0.8))',
            }}
          >
            Manan Bagga
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl lg:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto animate-slide-up animate-delay-100"
          style={{
            textShadow: '0 0 30px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.7)',
          }}
        >
          Building{' '}
          <span
            className="text-gradient-mint font-semibold"
            style={{ filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.8))' }}
          >
            performant web experiences
          </span>{' '}
          with modern technologies
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up animate-delay-200">
          <div className="text-center glass-text-bg">
            <div
              className="text-3xl font-display text-neon-cyan mb-1"
              style={{
                textShadow:
                  '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(15,246,255,0.4)',
              }}
            >
              150+
            </div>
            <div
              className="text-sm text-gray-300"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              LeetCode Problems
            </div>
          </div>
          <div className="text-center glass-text-bg">
            <div
              className="text-3xl font-display text-neon-violet mb-1"
              style={{
                textShadow:
                  '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(123,97,255,0.4)',
              }}
            >
              250+
            </div>
            <div
              className="text-sm text-gray-300"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              Coding MCQs
            </div>
          </div>
          <div className="text-center glass-text-bg">
            <div
              className="text-3xl font-display text-neon-mint mb-1"
              style={{
                textShadow:
                  '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,255,213,0.4)',
              }}
            >
              7.7
            </div>
            <div
              className="text-sm text-gray-300"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              CGPA
            </div>
          </div>
        </div>

        {/* CTA Buttons with Parallax Effect */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up animate-delay-300">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary parallax-cta"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary parallax-cta"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            }}
          >
            Get In Touch
          </button>
          <a
            href="https://github.com/MananBagga"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost parallax-cta"
            style={{
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`,
            }}
          >
            GitHub →
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-neon-cyan rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
