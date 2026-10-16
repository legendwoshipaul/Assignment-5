const stack = [
  { name: 'Vite', use: 'Project setup, dev server, and bundling' },
  { name: 'React', use: 'UI components and state (functional components + Hooks)' },
  { name: 'React Router', use: 'Client-side navigation between pages' },
  { name: 'Tailwind CSS', use: 'All styling and responsive layout' },
  { name: 'localStorage', use: 'Remembers which clubs you joined, no backend needed' },
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">About Campus Club Finder</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Campus Club Finder is a small single-page app from the Student Affairs department. It
        helps students discover student clubs, read about them and their upcoming events, and
        join the ones they like. Everything runs in your browser: there is no login and no
        server, and your joined clubs are saved locally on your device.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Tech stack</h2>
      <ul className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {stack.map((item) => (
          <li key={item.name} className="flex flex-wrap gap-x-3 px-4 py-3">
            <span className="font-semibold text-indigo-700">{item.name}</span>
            <span className="text-slate-600">{item.use}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
