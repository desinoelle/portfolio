// src/pages/Portfolio.tsx
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold animate-slide-up">Portfolio</h1>
      <p className="mt-2 max-w-prose text-black-300">
        A mix of full-stack web apps, games, and interactive projects.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio