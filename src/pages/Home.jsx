import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            Student Affairs
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find your people. Join a club.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-indigo-100">
            Welcome to Campus Club Finder! Discover student clubs, see what they are all about and
            what events are coming up, then join with one click.
          </p>
          <Link
            to="/clubs"
            className="mt-8 inline-block rounded-xl bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
          >
            Browse Clubs
          </Link>
        </div>
        <img
          src="/images/hero.svg"
          alt="Illustration of students gathering around club activities"
          className="mx-auto w-full max-w-md rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}
