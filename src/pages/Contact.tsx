import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full px-3 py-2 rounded bg-white/10 text-gray-100 placeholder-gray-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-gray-100'

  const inlineLink = 'text-accent hover:underline'

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold animate-slide-up">Contact</h1>

      <p className="mt-4 text-gray-300">
        The fastest way to reach me is email, or send a message below.
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

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            required
            className={field}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            className={field}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={update}
            required
            className={field}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-5 py-2.5 rounded-md bg-gray-100 text-gray-900 font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        <p aria-live="polite" className="text-sm">
          {status === 'sent' && (
            <span className="text-green-400">
              Thanks, I&apos;ll get back to you soon.
            </span>
          )}
          {status === 'error' && (
            <span className="text-red-400">
              Something went wrong. Please email me directly.
            </span>
          )}
        </p>
      </form>
    </section>
  )
}

export default Contact