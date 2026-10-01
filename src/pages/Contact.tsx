function Contact() {
  const inlineLink = 'text-accent hover:underline'

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold animate-slide-up">Contact</h1>

      <p className="mt-4 text-gray-300">
        The fastest way to reach me is email.
      </p>

      <ul className="mt-4 space-y-1">
        <li>
          <a href="mailto:desinoelle@gmail.com" className={inlineLink}>
            desinoelle@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/desiree-howell"
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLink}
          >
            linkedin.com/in/desiree-howell
          </a>
        </li>
        <li>
          <a
            href="https://github.com/desinoelle"
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLink}
          >
            github.com/desinoelle
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact