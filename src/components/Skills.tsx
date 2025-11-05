import SkillsRadial from './SkillsRadial'

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl mb-4">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies I work with to build scalable and performant applications
        </p>
      </div>

      <SkillsRadial />

      {/* Code Snippet Showcase */}
      {/* <div className="mt-16">
        <h3 className="text-2xl font-display mb-8 text-center">
          <span className="text-gradient">Code Snapshot</span>
        </h3>
        <CodeSnippet
          code={sampleCode}
          language="javascript"
          title="Custom React Hook"
          description="Example of a reusable hook for scroll animations"
        />
      </div> */}
    </section>
  )
}
