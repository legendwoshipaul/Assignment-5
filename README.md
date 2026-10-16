# Campus Club Finder

Single-page web app for the Student Affairs department that helps students discover, learn about, and join student clubs. Everything runs in the browser: no backend, no authentication.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| Vite | Project setup and bundling |
| React 19 | UI and state (functional components + Hooks) |
| React Router v7 | Client-side routing |
| Tailwind CSS v4 | All styling and responsive layout |
| localStorage | Persists joined clubs |

## Getting Started

Requires Node.js 18+ (20+ recommended).

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Features

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Hero section, welcome text, "Browse Clubs" button |
| `/clubs` | Club List | 5 club cards, sort (Name A-Z / Z-A), Grid / List view toggle, responsive |
| `/clubs/:clubId` | Club Detail | Big image, full description, upcoming events, "Join Club" button (persisted) |
| `/about` | About | What the app does and the tech stack |
| `*` | 404 | Friendly message and button back to Home |

The Navbar appears on every page and highlights the current page.

## Project Structure

```
src/
  data/clubs.js            # the 5 default clubs (data separate from UI)
  hooks/useJoinedClubs.js  # joined-state hook backed by localStorage
  components/              # Navbar, Footer, ClubCard, ClubControls
  pages/                   # Home, ClubList, ClubDetail, About, NotFound
  App.jsx                  # route table
  main.jsx                 # entry point (BrowserRouter)
public/images/             # club illustrations (SVG)
docs/screenshots/          # screenshots used in DOCUMENTATION.md
```

## How Joining Works

Joined club ids are stored as a JSON array under the localStorage key `campus-club-finder:joined`. To reset the app to its initial state, clear that key (DevTools > Application > Local Storage) or run `localStorage.clear()` in the console.

## Documentation

See [DOCUMENTATION.md](./DOCUMENTATION.md) for a walkthrough of every page with screenshots.

## Notes

- Club images are original SVG illustrations in `public/images/`; replace them with photos (e.g. `robotics.jpg`) and update the `image` field in `src/data/clubs.js` if you prefer.
- Out of scope by design: authentication, backend, club editing, search/filtering.
