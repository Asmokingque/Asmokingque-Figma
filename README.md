# Anderson's Smoking Que

Premium BBQ restaurant website scaffolded with Vite, React, TypeScript, Tailwind CSS, Framer Motion, Supabase, Playwright, and GitHub Actions.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Radix UI primitives + shadcn-style utilities
- Framer Motion
- Supabase Auth, Database, and Storage
- React Router v6
- Playwright
- GitHub Actions

## Getting Started

1. Copy `.env.example` to `.env` and provide your Supabase credentials.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Available Scripts

- `npm run dev` — start Vite locally
- `npm run build` — type-check and build the app
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run test` — run Playwright tests

## App Structure

- `src/pages/customer/` — customer-facing routes
- `src/pages/admin/` — admin login, dashboard, and stub management screens
- `src/contexts/` — auth and cart state
- `src/lib/` — shared utilities and Supabase client
- `src/tests/` — Playwright smoke coverage
- `supabase/migrations/` — initial SQL schema
- `.github/workflows/` — CI, smoke tests, admin debug, CodeQL

## Playwright Coverage

- `smoke.spec.ts` verifies core customer routes render.
- `admin-login.spec.ts` validates the admin login and password reset entry flow.

## Supabase Schema

The initial migration creates:

- `admin_users`
- `menu_categories`
- `menu_items`
- `orders`
- `order_items`
- `specials`
- `catering_inquiries`
- `reviews`
- `business_settings`

## GitHub Actions

- **CI Health Check** — installs dependencies, type-checks, and builds the site.
- **Website Smoke Test** — runs Playwright smoke coverage.
- **Admin Login Debug** — isolates the admin login route test.
- **CodeQL Analysis** — performs a security scan on repository code.
