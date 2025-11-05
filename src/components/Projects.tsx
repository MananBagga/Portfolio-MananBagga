import { useState } from 'react'
import ProjectCard from './ProjectCard'
import AnimatedSection, { AnimatedItem, itemVariants } from './AnimatedSection'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Flextraff Project',
    description:
      'Advanced traffic management system with real-time data processing, visualization dashboards, and predictive analytics for urban traffic optimization.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'D3.js'],
    gradient: 'from-neon-cyan to-neon-violet',
    icon: '🚦',
    category: 'Web',
    github: 'https://github.com/MananBagga',
  },
  {
    title: 'PMU WebApp',
    description:
      'Power Management Unit web application featuring real-time monitoring, control systems, and analytics for efficient energy management.',
    tech: ['React', 'Express', 'RESTful API', 'Chart.js'],
    gradient: 'from-neon-violet to-neon-mint',
    icon: '⚡',
    category: 'Web',
    github: 'https://github.com/MananBagga',
  },
  {
    title: 'Vibe Check Quiz App',
    description:
      'Interactive personality quiz application with dynamic question generation, scoring algorithm, and shareable results with social media integration.',
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'LocalStorage'],
    gradient: 'from-neon-mint to-neon-cyan',
    icon: '🎯',
    category: 'Web',
    liveDemo: '#',
  },
  {
    title: 'Todo List App',
    description:
      'Feature-rich task management application with categories, priorities, deadlines, and local storage persistence for offline functionality.',
    tech: ['React', 'TypeScript', 'LocalStorage', 'Tailwind CSS'],
    gradient: 'from-neon-cyan to-neon-violet',
    icon: '✅',
    category: 'Web',
    github: 'https://github.com/MananBagga',
  },
  {
    title: 'Voting System',
    description:
      'Efficient voting system using linked list data structure with O(1) insertion and deletion, featuring real-time vote counting and results visualization.',
    tech: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
    gradient: 'from-neon-violet to-neon-mint',
    icon: '🗳️',
    category: 'Backend',
  },
  {
    title: 'Sudoku Solver',
    description:
      'Intelligent Sudoku solver using backtracking algorithm with optimization techniques, supporting multiple difficulty levels and solution visualization.',
    tech: ['C++', 'Algorithms', 'Recursion', 'Backtracking'],
    gradient: 'from-neon-mint to-neon-cyan',
    icon: '🧩',
    category: 'Backend',
  },
]

const categories = ['All', 'Web', 'Backend', 'AI', 'Game']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          A collection of projects showcasing my skills in web development and
          problem-solving
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-neon-md'
                  : 'glass text-gray-400 hover:text-neon-cyan'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <AnimatedItem key={project.title} variants={itemVariants}>
            <ProjectCard {...project} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </section>
  )
}
