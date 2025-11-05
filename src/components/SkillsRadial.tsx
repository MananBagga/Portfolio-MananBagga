import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  level: number
  category: string
  projects: string[]
}

const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'Frontend',
    projects: ['Flextraff', 'PMU WebApp', 'Vibe Check'],
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'Language',
    projects: ['Portfolio', 'PMU WebApp'],
  },
  {
    name: 'Python',
    level: 88,
    category: 'Language',
    projects: ['Sudoku Solver', 'AI Projects'],
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'Backend',
    projects: ['Flextraff', 'Todo List'],
  },
  {
    name: 'MongoDB',
    level: 75,
    category: 'Database',
    projects: ['Flextraff', 'PMU WebApp'],
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    category: 'Frontend',
    projects: ['Portfolio', 'Vibe Check'],
  },
  {
    name: 'Django',
    level: 78,
    category: 'Backend',
    projects: ['CIET Internship'],
  },
  {
    name: 'C++',
    level: 82,
    category: 'Language',
    projects: ['Voting System', 'DSA'],
  },
]

export default function SkillsRadial() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="card-glass cursor-pointer hover:border-neon-cyan/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: [0.2, 0.9, 0.3, 1] as const,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-lg">{skill.name}</h4>
              <span className="text-neon-cyan text-sm font-mono">
                {skill.level}%
              </span>
            </div>

            {/* Animated progress bar */}
            <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  delay: index * 0.08 + 0.2,
                  duration: 0.8,
                  ease: [0.2, 0.9, 0.3, 1] as const,
                }}
              />
            </div>

            <div className="mt-2 text-xs text-gray-500">{skill.category}</div>
          </motion.div>
        ))}
      </div>

      {/* Skill detail modal */}
      {selectedSkill && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedSkill(null)}
        >
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />
          <motion.div
            className="relative glass-strong rounded-2xl p-8 max-w-md w-full neon-border"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-neon-cyan"
            >
              ✕
            </button>

            <h3 className="text-2xl font-display mb-2 text-gradient">
              {selectedSkill.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {selectedSkill.category}
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Proficiency</span>
                <span className="text-neon-cyan font-mono">
                  {selectedSkill.level}%
                </span>
              </div>
              <div className="h-3 bg-dark-lighter rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{
                    duration: 0.8,
                    ease: [0.2, 0.9, 0.3, 1] as const,
                  }}
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-display mb-3 text-neon-mint">
                Projects Using This Skill
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.projects.map(project => (
                  <span
                    key={project}
                    className="text-xs px-3 py-2 bg-neon-violet/10 rounded-lg text-neon-violet border-1 border-neon-violet/30"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
