import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent max-w-4xl mx-auto" />

      {/* Skills Section */}
      <Skills />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-violet/30 to-transparent max-w-4xl mx-auto" />

      {/* Projects Section */}
      <Projects />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-mint/30 to-transparent max-w-4xl mx-auto" />

      {/* Experience & Achievements Section */}
      <Experience />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent max-w-4xl mx-auto" />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default App
