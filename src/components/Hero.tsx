import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div
          className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-float animate-delay-300" />
      </div>

      <div className="section-container text-center">
        {/* Intro Badge */}
        <div className="inline-block mb-6 animate-fade-in">
          <span className="text-neon-cyan text-sm font-mono tracking-wider uppercase px-4 py-2 glass rounded-full animate-glow-pulse">
            Full Stack Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
          <span className="text-gradient">Manan Bagga</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-100">
          Building{' '}
          <span className="text-gradient-mint font-semibold">
            performant web experiences
          </span>{' '}
          with modern technologies
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up animate-delay-200">
          <div className="text-center">
            <div className="text-3xl font-display text-neon-cyan mb-1">
              150+
            </div>
            <div className="text-sm text-gray-400">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display text-neon-violet mb-1">
              250+
            </div>
            <div className="text-sm text-gray-400">Coding MCQs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display text-neon-mint mb-1">7.7</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up animate-delay-300">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Get In Touch
          </button>
          <a
            href="https://github.com/MananBagga"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
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
