import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-300">That link doesn&apos;t go anywhere.</p>
      <Link to="/" className="inline-block mt-8 px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        Back home
      </Link>
    </section>
  )
}

export default NotFound