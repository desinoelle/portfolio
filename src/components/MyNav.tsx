import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About Me' },
  { to: '/contact', label: 'Contact' },
]

function MyNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900">
      <div className="flex flex-wrap items-center px-4 py-2">
        <Link to="/" id="gtext" className="text-white text-xl font-semibold">
          Desiree Howell
        </Link>

        <button
          type="button"
          className="ml-auto lg:hidden text-gray-300 hover:text-white"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          id="my-nav"
          className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col lg:flex lg:w-auto lg:flex-row`}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MyNav