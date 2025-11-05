import { motion } from 'framer-motion'
import AnimatedSection, { AnimatedItem, itemVariants } from './AnimatedSection'

const timelineData = [
  {
    year: '2026',
    title: 'Graduation',
    description: 'B.Tech completion with 7.7 CGPA',
    icon: '🎓',
    color: 'neon-mint',
  },
  {
    year: '2024',
    title: 'CIET, NCERT Internship',
    description:
      'Software/Web Developer role working with Django and educational tech',
    icon: '💼',
    color: 'neon-cyan',
  },
  {
    year: '2024',
    title: 'Advanced Projects',
    description: 'Built Flextraff, PMU WebApp, and Vibe Check quiz application',
    icon: '🚀',
    color: 'neon-violet',
  },
  {
    year: '2023',
    title: 'DSA Mastery',
    description: 'Solved 150+ LeetCode problems, 250+ Coding Ninjas MCQs',
    icon: '💡',
    color: 'neon-mint',
  },
]

export default function Timeline() {
  return (
    <AnimatedSection className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-mint opacity-30" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <AnimatedItem
            key={item.year}
            variants={itemVariants}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Year badge */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br from-${item.color} to-neon-violet flex items-center justify-center text-2xl shadow-neon-md`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
            </div>

            {/* Content card */}
            <div
              className={`flex-1 ml-28 md:ml-0 ${
                index % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:pl-12 md:text-left'
              }`}
            >
              <motion.div
                className="card-glass p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-sm font-mono text-${item.color} mb-2`}>
                  {item.year}
                </div>
                <h3 className="text-xl font-display mb-2 text-gradient">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  )
}
