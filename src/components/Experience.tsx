import Timeline from './Timeline'
import AnimatedSection from './AnimatedSection'
import { AnimatedItem, itemVariants } from './animationUtils'

const achievements = [
  {
    title: 'LeetCode Milestone',
    description: 'Solved 150+ coding problems',
    icon: '🏆',
    color: 'neon-cyan',
  },
  {
    title: 'Coding Ninjas',
    description: 'Completed 250+ MCQs',
    icon: '🎯',
    color: 'neon-violet',
  },
  {
    title: 'Academic Excellence',
    description: '7.7 CGPA | Graduating 2026',
    icon: '🎓',
    color: 'neon-mint',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl mb-4">
          <span className="text-gradient">Journey & Milestones</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My professional journey and key achievements along the way
        </p>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <h3 className="text-2xl font-display mb-12 text-center text-neon-cyan">
          Career Timeline
        </h3>
        <Timeline />
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl font-display mb-12 text-center text-neon-violet">
          Key Achievements
        </h3>
        <AnimatedSection className="grid md:grid-cols-3 gap-6">
          {achievements.map(achievement => (
            <AnimatedItem key={achievement.title} variants={itemVariants}>
              <div className="card-glass text-center group cursor-pointer hover:border-neon-cyan/50">
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                  {achievement.icon}
                </div>
                <h4
                  className={`text-lg font-display mb-2 text-${achievement.color}`}
                >
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
