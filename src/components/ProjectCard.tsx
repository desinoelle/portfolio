import type { Project } from '../data/projects'

function ProjectCard({ title, description, src, viewlink, githublink }: Project) {
  const button =
    'inline-block px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg'

  return (
    <article className="group bg-white text-gray-900 rounded-lg overflow-hidden shadow transition duration-300 hover:-translate-y-1 hover:shadow-2xl animate-slide-up">
      <div className="overflow-hidden">
        <img
          src={src}
          alt={`Screenshot of ${title}`}
          className="w-full aspect-video object-cover transition duration-400 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex gap-3">
          {viewlink && (
            <a href={viewlink} target="_blank" rel="noopener noreferrer" className={button}>
              View
            </a>
          )}
          {githublink && (
            <a href={githublink} target="_blank" rel="noopener noreferrer" className={button}>
              GitHub
            </a>
          )}
      </div>
      </div>
    </article>
  )
}

export default ProjectCard