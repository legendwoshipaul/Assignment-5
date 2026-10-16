import { Link } from 'react-router-dom'

export default function NotFound({ message = "Oops! We couldn't find that page." }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-indigo-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">{message} It may have moved or never existed.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  )
}
