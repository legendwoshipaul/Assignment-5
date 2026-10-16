import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/clubs', label: 'Clubs' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3"
      >
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-indigo-700">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">
            C
          </span>
          Campus Club Finder
        </Link>
        <ul className="flex items-center gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
