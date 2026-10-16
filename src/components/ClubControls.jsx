export default function ClubControls({ sortOrder, onSortChange, view, onViewChange }) {
  const viewBtn = (value, label) => (
    <button
      type="button"
      onClick={() => onViewChange(value)}
      aria-pressed={view === value}
      className={`px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 ${
        view === value ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:bg-indigo-50'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-700">
          Sort by
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>
      </div>

      <div role="group" aria-label="View mode" className="flex overflow-hidden rounded-lg border border-slate-300">
        {viewBtn('grid', 'Grid View')}
        {viewBtn('list', 'List View')}
      </div>
    </div>
  )
}
