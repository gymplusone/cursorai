# Gym+1

Mobile-first React + TypeScript prototype built with Vite. Frontend only — there is no backend, database, or external service. See `README.md` for the app/onboarding flow overview and design tokens.

## Cursor Cloud specific instructions

- Single service: the Vite dev server. Standard scripts live in `package.json` (`dev`, `build`, `lint`, `preview`); no need to duplicate them here.
- Package manager is npm (`package-lock.json`); dependency install is handled by the startup update script, so you normally do not need to run `npm install` yourself.
- Run the dev server with `npm run dev` (serves at `http://localhost:5173/`). It is a client-only SPA, so no env vars or secrets are required.
- `npm run lint` uses oxlint; a single `react/only-export-components` warning in `src/context/OnboardingContext.tsx` is pre-existing and non-blocking.
- `npm run build` runs `tsc -b` then `vite build`; use `npm run preview` to serve the production build if needed.
