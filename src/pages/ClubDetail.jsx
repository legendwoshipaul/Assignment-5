import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clubs } from '../data/clubs.js'
import useJoinedClubs from '../hooks/useJoinedClubs.js'
import NotFound from './NotFound.jsx'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export default function ClubDetail() {
  const { clubId } = useParams()
  const { isJoined, joinClub } = useJoinedClubs()
  const [justJoined, setJustJoined] = useState(false)

  const club = clubs.find((c) => c.id === clubId)
  if (!club) return <NotFound message="We couldn't find that club." />

  const joined = isJoined(club.id)

  const handleJoin = () => {
    joinClub(club.id)
    setJustJoined(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/clubs" className="text-sm font-medium text-indigo-700 hover:underline">
        &larr; Back to all clubs
      </Link>

      <img
        src={club.image}
        alt={`${club.name} illustration`}
        className="mt-4 h-56 w-full rounded-2xl object-cover shadow sm:h-80"
      />

      <h1 className="mt-6 text-3xl font-bold text-slate-900">{club.name}</h1>
      <p className="mt-3 text-lg leading-relaxed text-slate-700">{club.description}</p>

      <section aria-labelledby="events-heading" className="mt-8">
        <h2 id="events-heading" className="text-xl font-semibold text-slate-900">
          Upcoming Events
        </h2>
        <ul className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {club.events.map((event) => (
            <li key={event.name} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
              <span className="font-medium">{event.name}</span>
              <time dateTime={event.date} className="text-sm text-slate-600">
                {formatDate(event.date)}
              </time>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        {joined ? (
          <p className="inline-block rounded-xl bg-emerald-100 px-5 py-3 font-medium text-emerald-800">
            You have joined this club!
          </p>
        ) : (
          <button
            type="button"
            onClick={handleJoin}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Join Club
          </button>
        )}
        <div role="status" aria-live="polite" className="mt-3 min-h-6 text-sm text-emerald-700">
          {justJoined && `Welcome aboard! You are now a member of ${club.name}.`}
        </div>
      </div>
    </div>
  )
}
