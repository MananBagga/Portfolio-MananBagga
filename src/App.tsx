function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      {/* Main Content */}
      <div className="section-container">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-neon-cyan text-sm font-mono tracking-wider uppercase animate-glow-pulse">
              Welcome to the future
            </span>
          </div>

          <h1 className="font-display text-6xl lg:text-7xl mb-6 animate-slide-up">
            <span className="text-gradient">Manan Bagga</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            A futuristic portfolio showcasing the power of
            <span className="text-gradient-mint font-semibold">
              {' '}
              modern design systems
            </span>
          </p>

          <div className="flex gap-4 justify-center animate-slide-up animate-delay-200">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Design System Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Card 1 - Glass Effect */}
          <div className="card-glass animate-scale-in">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-display mb-2 text-gradient">
              Glass Morphism
            </h3>
            <p className="text-gray-400 text-sm">
              Subtle backdrop blur with neon accents creating depth and
              hierarchy
            </p>
          </div>

          {/* Card 2 - Neon Border */}
          <div className="card-neon animate-scale-in animate-delay-100">
            <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center border-1 border-neon-violet">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-display mb-2 text-gradient">
              Neon Effects
            </h3>
            <p className="text-gray-400 text-sm">
              Glowing borders and shadows that pulse with energy
            </p>
          </div>

          {/* Card 3 - Gradients */}
          <div className="card-glass animate-scale-in animate-delay-200">
            <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-violet rounded-lg mb-4 shadow-neon-lg" />
            <h3 className="text-xl font-display mb-2 text-gradient-mint">
              Color Palette
            </h3>
            <p className="text-gray-400 text-sm">
              Cyan to violet gradients with strategic neon accents
            </p>
          </div>

          {/* Card 4 - Typography */}
          <div className="card-glass animate-scale-in animate-delay-300">
            <div className="mb-4">
              <span className="font-display text-3xl">Aa</span>
            </div>
            <h3 className="text-xl font-display mb-2">Typography</h3>
            <p className="text-gray-400 text-sm">
              Space Grotesk for headings, Inter for body text
            </p>
          </div>

          {/* Card 5 - Motion */}
          <div className="card-glass animate-scale-in animate-delay-500 group cursor-pointer">
            <div className="w-12 h-12 bg-neon-mint/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-display mb-2">Motion Presets</h3>
            <p className="text-gray-400 text-sm">
              Fast (150ms), Medium (300ms), Slow (500ms)
            </p>
          </div>

          {/* Card 6 - Utilities */}
          <div className="card-glass animate-scale-in animate-delay-500">
            <div className="flex gap-2 mb-4">
              <div className="w-4 h-4 bg-neon-cyan rounded glow-cyan" />
              <div className="w-4 h-4 bg-neon-violet rounded glow-violet" />
              <div className="w-4 h-4 bg-neon-mint rounded glow-mint" />
            </div>
            <h3 className="text-xl font-display mb-2">Custom Utilities</h3>
            <p className="text-gray-400 text-sm">
              Glow effects, grid patterns, and transitions
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-strong rounded-3xl p-8 lg:p-12 neon-border">
          <h2 className="text-3xl font-display mb-6 text-center">
            <span className="text-gradient">Powered By</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                ⚛️
              </div>
              <p className="text-sm text-gray-400">React 19</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                ⚡
              </div>
              <p className="text-sm text-gray-400">Vite</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                🎨
              </div>
              <p className="text-sm text-gray-400">Tailwind CSS</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                📘
              </div>
              <p className="text-sm text-gray-400">TypeScript</p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-dark/50 border-1 border-neon-cyan/20">
            <code className="text-sm text-neon-cyan font-mono">
              npm run dev
            </code>
            <p className="text-xs text-gray-500 mt-2">
              Start customizing your portfolio with this design system
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Edit{' '}
            <code className="text-neon-mint font-mono px-2 py-1 bg-dark-lighter rounded">
              src/App.tsx
            </code>{' '}
            to build your unique portfolio
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
