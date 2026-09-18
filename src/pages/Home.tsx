// src/pages/Home.tsx
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const button =
  'inline-block px-5 py-2.5 rounded-md bg-gray-100 text-gray-900 font-medium ' +
  'transition duration-200 hover:-translate-y-0.5 hover:shadow-lg'

const buttonGhost =
  'inline-block px-5 py-2.5 rounded-md border border-white/25 text-gray-100 font-medium ' +
  'transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent'

function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          Raleigh, NC · Seeking Summer 2027 internships
        </p>
        <h1 className="mt-4 text-5xl sm:text-7xl font-bold leading-[1.05] animate-slide-up">
          Desiree Howell
        </h1>
        <p className="mt-5 max-w-xl text-xl text-gray-300">
          Front-end engineer and game developer building responsive, real-time
          web experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/portfolio" className={button}>
            View my work
          </Link>
          <a href="/Desiree-Howell-Resume-Final.pdf" target="_blank" rel="noopener noreferrer" className={buttonGhost}>
            Résumé
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-10 sm:grid-cols-[240px_1fr] items-start">
          <img
            src="/me.jpg"
            alt="Desiree Howell"
            className="w-full rounded-lg object-cover aspect-square"
          />
          <div className="max-w-prose">
            <p className="text-lg text-gray-300">
              I'm a CS student at NC State with a concentration in Game Development, 
              plus two years of professional web development experience. 
              I'm passionate about creative design and story-telling through interactive user 
              experiences, whether it be about a quirky relationship simulator or a tiny bee
              making big change.
            </p>
            <Link
              to="/about"
              className="inline-block mt-5 text-accent hover:underline"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-3xl font-semibold">Featured work</h2>
          <Link to="/portfolio" className="text-accent hover:underline">
            All projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home