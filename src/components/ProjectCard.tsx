import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  gradient: string
  icon: string
  liveDemo?: string
  github?: string
  category: string
  screenshot?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  gradient,
  icon,
  liveDemo,
  github,
  screenshot: _screenshot,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-80 cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1] as const }}
    >
      <motion.div
        className="absolute inset-0 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] as const }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden card-glass"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Project Icon */}
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl mb-4 shadow-neon-md group-hover:shadow-neon-lg transition-shadow`}
          >
            {icon}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-display mb-3 text-gradient">{title}</h3>

          {/* Project Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 3).map(t => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-dark-lighter rounded-full text-neon-mint border-1 border-neon-mint/20"
              >
                {t}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="text-xs px-3 py-1 bg-dark-lighter rounded-full text-gray-400">
                +{tech.length - 3}
              </span>
            )}
          </div>

          <div className="absolute bottom-4 right-4 text-neon-cyan text-sm">
            Hover to flip →
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden card-neon p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-xl font-display mb-4 text-gradient">{title}</h3>

          {/* Full description */}
          <p className="text-gray-300 text-sm mb-4 flex-1 overflow-y-auto">
            {description}
          </p>

          {/* All tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map(t => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-neon-violet/10 rounded text-neon-violet border-1 border-neon-violet/30"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-center text-sm py-2"
                onClick={e => e.stopPropagation()}
              >
                Live Demo ▶
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-secondary text-center text-sm py-2"
                onClick={e => e.stopPropagation()}
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
