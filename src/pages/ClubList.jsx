import { useState } from 'react'
import { clubs } from '../data/clubs.js'
import ClubCard from '../components/ClubCard.jsx'
import ClubControls from '../components/ClubControls.jsx'
import useJoinedClubs from '../hooks/useJoinedClubs.js'

export default function ClubList() {
  const [sortOrder, setSortOrder] = useState('asc')
  const [view, setView] = useState('grid')
  const { isJoined } = useJoinedClubs()

  const sortedClubs = [...clubs].sort((a, b) =>
    sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Student Clubs</h1>
      <p className="mt-2 mb-6 text-slate-600">
        {clubs.length} clubs are waiting for you. Pick one and take a look.
      </p>

      <ClubControls
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        view={view}
        onViewChange={setView}
      />

      <ul
        className={`mt-6 grid gap-6 ${
          view === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {sortedClubs.map((club) => (
          <li key={club.id} className="flex">
            <div className="w-full">
              <ClubCard club={club} view={view} joined={isJoined(club.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
