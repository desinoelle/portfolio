// src/pages/AboutMe.tsx
import { Link } from 'react-router-dom'

const skills = {
  'Front-end': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind'],
  'Back-end': ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'],
  'Games': ['Unity', 'C#', 'UEFN', 'C++', 'C', 'Java'],
  'Tools': ['Git', 'Vite'],
}

const experience = [
  {
    role: 'Webmaster',
    org: 'NC State Video Game Development Club',
    dates: '2026 – present',
    detail: 'Maintain and update the club website; front-end work with a live student audience.',
  },
  {
    role: 'Technical Associate',
    org: 'Infosys',
    dates: '2021 – 2023',
    detail: 'Contract web development in JavaScript and Java.',
  },
  {
    role: 'Web Administrator',
    org: 'Angelhare Forest Tree Farm',
    dates: '2013 – 2024',
    detail: 'Design, content, and seasonal marketing for the family business.',
  },
]

function AboutMe() {
  const button =
    'inline-block px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg'

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold animate-slide-up">About Me</h1>

      <div className="mt-6 grid gap-8 sm:grid-cols-[200px_1fr] items-start">
        <img
          src="../../public/me.jpg"
          alt="Desiree Howell"
          className="w-full rounded-lg object-cover aspect-square"
        />
        <div className="space-y-4 max-w-prose text-gray-300">
          <p>Hi! I'm Desiree Howell! Welcome to my portfolio.</p>
          <p>I have a blend of technical and creative skills, and am fascinated by how artistic visions come to life through technology. At the core of it all, I am passionate about storytelling (even doing a lot of writing in my free time!), and giving people a reprieve from the daily stresses of life. I love games because they have always allowed me to escape and connect with others.</p>
          <p>Below, you will find a list of some of my technical skills. I have some professional experience in front-end web development, but I am hopeful to find my place in the game development community! I am interested in Summer 2027/2028 internships in roles like Game Design, Gameplay Programming, UX/UI, Front-end Development, and Tech Art.</p>
        </div>
      </div>

      <h2 className="mt-14 text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="text-sm uppercase tracking-wide text-gray-400">{group}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-6">
        {experience.map((e) => (
          <li key={e.org}>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <span className="text-gray-400">— {e.org}</span>
              <span className="ml-auto text-sm text-gray-400">{e.dates}</span>
            </div>
            <p className="mt-1 text-gray-300">{e.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <a href="/Desiree-Howell-Resume-Final.pdf" target="_blank" rel="noopener noreferrer"className={button}>Download résumé</a>
        <Link to="/contact" className={button}>Get in touch</Link>
      </div>
    </section>
  )
}

export default AboutMe