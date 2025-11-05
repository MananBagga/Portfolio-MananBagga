const experiences = [
  {
    role: 'Software/Web Developer Intern',
    company: 'CIET, NCERT',
    period: 'Internship',
    description:
      'Developed web applications using Django framework, contributed to educational technology initiatives',
    tech: ['Django', 'Python', 'Web Development'],
    icon: '💼',
  },
]

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
          <span className="text-gradient">Experience & Achievements</span>
        </h2>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <h3 className="text-2xl font-display mb-8 text-neon-cyan">
          Professional Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="card-neon animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{exp.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-display mb-1 text-gradient">
                    {exp.role}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-3">
                    <span className="font-semibold text-neon-cyan">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-neon-violet/10 rounded-full text-neon-violet border-1 border-neon-violet/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl font-display mb-8 text-neon-violet">
          Key Achievements
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="card-glass text-center animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                {achievement.icon}
              </div>
              <h4
                className={`text-lg font-display mb-2 text-${achievement.color}`}
              >
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
