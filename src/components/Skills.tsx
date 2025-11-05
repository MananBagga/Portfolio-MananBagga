const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C/C++', 'Python', 'JavaScript', 'SQL'],
    color: 'neon-cyan',
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
    color: 'neon-violet',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Django', 'FastAPI'],
    color: 'neon-mint',
  },
  {
    title: 'Database & Tools',
    icon: '🛠️',
    skills: ['MongoDB', 'Git', 'DSA', 'RESTful APIs'],
    color: 'neon-cyan',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl mb-4">
          <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies I work with to build scalable and performant applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="card-glass animate-scale-in group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
              {category.icon}
            </div>
            <h3 className={`text-xl font-display mb-4 text-${category.color}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-dark-lighter rounded-full text-gray-300 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
