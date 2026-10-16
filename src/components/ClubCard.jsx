import { Link } from 'react-router-dom'

export default function ClubCard({ club, view, joined }) {
  const isList = view === 'list'

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md ${
        isList ? 'flex flex-col sm:flex-row' : 'flex flex-col'
      }`}
    >
      <img
        src={club.image}
        alt={`${club.name} illustration`}
        loading="lazy"
        className={`object-cover ${
          isList ? 'h-48 w-full sm:h-auto sm:w-64 sm:shrink-0' : 'h-48 w-full'
        }`}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">{club.name}</h3>
          {joined && (
            <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
              Joined
            </span>
          )}
        </div>
        <p className="flex-1 text-sm text-slate-600">{club.shortDescription}</p>
        <div>
          <Link
            to={`/clubs/${club.id}`}
            aria-label={`View details for ${club.name}`}
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
