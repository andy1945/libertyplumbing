<!-- Short, focused instructions to help AI coding agents be immediately productive in this repo -->

# Copilot / AI agent instructions — libertyplumbing

Purpose: provide concise, actionable repository-specific guidance for automated code edits, completions and refactors.

- Project type: Vite + React + TypeScript app using Tailwind CSS and shadcn-ui primitives (Radix + small UI wrappers).
- Key scripts (run from repo root):

  - Install: npm install (README suggests npm; a `bun.lockb` exists but use npm unless instructed)
  - Dev: npm run dev (starts Vite)
  - Build: npm run build
  - Preview build: npm run preview
  - Lint: npm run lint

- Important files and directories to consult before making changes:

  - `src/main.tsx` — app entry
  - `src/App.tsx` — top-level providers, router and route list (add new routes here)
  - `src/pages/` — route components (one per route). Add a file + import + <Route> in `App.tsx`.
  - `src/components/` — site components (Banner, Navbar, Hero, Services, Footer, etc.)
  - `src/components/ui/` — shared small UI primitives (shadcn-style). Prefer reusing these over creating duplicates.
  - `src/context/OverlayContext.tsx` and `src/components/ImageOverlay.tsx` — overlay/image modal pattern used globally.
  - `src/lib/utils.ts` — utility functions.
  - `src/index.css` and `tailwind.config.ts` — global design tokens and Tailwind set up. Colors are defined as HSL variables here.
  - `tsconfig.json` — path alias `@/*` → `./src/*` is configured; use `@/` imports consistently.

- Coding/convention notes (observable, not aspirational):

  - Imports use the `@/` alias (e.g. `import { Toaster } from "@/components/ui/toaster"`). Keep that pattern.
  - Pages map to routes. Create a file in `src/pages` and then add a Route in `src/App.tsx` above the catch-all `*` route.
  - UI primitives are in `src/components/ui`. They follow shadcn/Radix patterns — check existing components there for examples.
  - Global providers (React Query, TooltipProvider, OverlayProvider, Toaster, Sonner) are registered in `App.tsx`. New global behaviour should be wired there.
  - Theme tokens: design system variables are declared in `src/index.css` and expect HSL values. When changing colors prefer editing these variables.
  - Visual effects: `electric-border` classes and related CSS are defined in `src/index.css` and `src/components/ElectricBorder.*`.

- Build/dev guidance an agent can use when validating changes:

  1. Install: `npm install`
  2. Run dev: `npm run dev` — confirm the app loads at Vite's dev URL.
  3. Build: `npm run build` — ensure no build errors.
  4. Preview: `npm run preview` to serve the production build locally.
  5. Lint: `npm run lint` — fix obvious lint errors before committing.

- Quick examples to copy/paste:

  - Add a new page and route:
    1. Create `src/pages/MyPage.tsx` exporting a default React component.
    2. In `src/App.tsx` import MyPage and add: `<Route path="/my-page" element={<MyPage />} />` above the catch-all route.

- When editing UI components:

  - Reuse `src/components/ui/*` primitives where possible (buttons, dialogs, toasts, tooltips).
  - Follow existing naming (PascalCase for components, `.tsx` files).

- External dependencies & integration points:

  - React Router for routing (`react-router-dom`) — routes are client-side in `App.tsx`.
  - TanStack React Query (`@tanstack/react-query`) — query client is set up in `App.tsx`.
  - Radix and shadcn-style components live in `src/components/ui` and rely on Tailwind utility classes.
  - There is a `bun.lockb` file but package scripts and README assume npm; do not change package manager without asking the maintainers.

- Safety and scope limits for automated edits:
  - Avoid changing global tokens in `src/index.css` without running a dev build preview; color changes affect the whole site.
  - When adding routes, always add them above the catch-all route in `src/App.tsx`.
  - Prefer small, focused changes in `src/components/ui` that mirror existing patterns. Large UI library rewrites require human review.

If anything above is unclear or you'd like a slightly more detailed agent policy (e.g. automatic PR template, tests to run), tell me which area to expand.
