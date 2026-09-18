// src/components/Footer.tsx
const links = [
  { label: 'Email', href: 'mailto:desinoelle@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/desiree-howell' },
  { label: 'GitHub', href: 'https://github.com/desinoelle' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Desiree Howell
        </p>
        <nav className="flex flex-wrap gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-sm text-gray-300 hover:text-accent transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer