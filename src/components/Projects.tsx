const projects = [
  {
    title: 'Flextraff Project',
    description:
      'Traffic management system with real-time data processing and visualization',
    tech: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-neon-cyan to-neon-violet',
    icon: '🚦',
  },
  {
    title: 'PMU WebApp',
    description:
      'Power Management Unit web application for monitoring and control systems',
    tech: ['React', 'Express', 'RESTful API'],
    gradient: 'from-neon-violet to-neon-mint',
    icon: '⚡',
  },
  {
    title: 'Vibe Check Quiz App',
    description:
      'Interactive quiz application with dynamic question generation and scoring',
    tech: ['JavaScript', 'React', 'Tailwind CSS'],
    gradient: 'from-neon-mint to-neon-cyan',
    icon: '🎯',
  },
  {
    title: 'Todo List App',
    description:
      'Feature-rich task management application with local storage persistence',
    tech: ['React', 'LocalStorage', 'CSS'],
    gradient: 'from-neon-cyan to-neon-violet',
    icon: '✅',
  },
  {
    title: 'Voting System',
    description:
      'Linked list based voting system with efficient data structure implementation',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    gradient: 'from-neon-violet to-neon-mint',
    icon: '🗳️',
  },
  {
    title: 'Sudoku Solver',
    description:
      'Backtracking algorithm implementation for solving Sudoku puzzles',
    tech: ['C++', 'Algorithms', 'Recursion'],
    gradient: 'from-neon-mint to-neon-cyan',
    icon: '🧩',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development and
          problem-solving
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="card-glass group cursor-pointer hover:border-neon-cyan/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Icon */}
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4 shadow-neon-md group-hover:shadow-neon-lg transition-shadow`}
            >
              {project.icon}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-display mb-3 text-gradient group-hover:text-neon-cyan transition-colors">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-dark-lighter rounded-full text-neon-mint border-1 border-neon-mint/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 border-1 border-neon-cyan rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
