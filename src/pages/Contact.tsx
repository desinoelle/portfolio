// src/pages/Contact.tsx
import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mqedklrn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold animate-slide-up">Contact</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">Name</label>
          <input id="name" name="name" value={form.name} onChange={update} required className={field} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-sm">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={update} required className={field} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-sm">Message</label>
          <textarea id="message" name="message" rows={6} value={form.message} onChange={update} required className={field} />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>

        <p aria-live="polite" className="text-sm">
          {status === 'sent' && <span className="text-green-400">Thanks — I&apos;ll get back to you soon.</span>}
          {status === 'error' && <span className="text-red-400">Something went wrong. Try emailing me directly.</span>}
        </p>
      </form>
    </section>
  )
}

export default Contact