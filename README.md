# Datopus Landing Page

**The public website for Datopus, an open-source product analytics platform** -
marketing pages, competitor comparisons, case studies and a content-driven blog,
all in one Next.js app.

Live site: <https://www.datopus.io>

![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind 3](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/UI-shadcn%2Fui-000000)
![Deploy: Azure Static Web Apps](https://img.shields.io/badge/deploy-Azure%20Static%20Web%20Apps-0078D4?logo=microsoftazure&logoColor=white)

## Contents

- [What it does](#what-it-does)
- [Routes](#routes)
- [Architecture](#architecture)
- [How the content works](#how-the-content-works)
- [Key engineering decisions](#key-engineering-decisions)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Project layout](#project-layout)
- [Deployment](#deployment)
- [Security notes](#security-notes)
- [Good to know](#good-to-know)

## What it does

The site has four jobs: explain the product, publish content, collect leads, and
demonstrate the product on itself.

- **Marketing** - the home page is built from sections (hero, customer logos,
  comparison, platform overview, what we can do, consulting services, security and
  compliance, testimonial, FAQ, closing call to action), plus a pricing page with
  plan cards, a currency switch and a monthly/yearly switch.
- **Content hub** - blog, case studies, head-to-head comparisons and platform
  feature pages, all written as MDX and rendered as articles with code
  highlighting, a table of contents and a reading time; the blog index adds search
  and category filters.
- **Lead capture** - a tailored demo flow, startup programme and affiliate
  programme forms, a newsletter form, and a contact page with an embedded Calendly
  scheduler.
- **Compliance** - privacy policy and terms pages, plus a cookie consent banner.
- **Dogfooding** - the site is instrumented with the product it sells: every
  section and button carries a `data-ds-feature` label, a route tracker reports
  page views, and the tracker script is loaded from the product's own CDN.

## Routes

| Page | Purpose |
|---|---|
| `/` | marketing home page (section per block) |
| `/pricing` | subscription plans |
| `/blog`, `/blog/[slug]` | article index and article page |
| `/case-studies`, `/case-studies/[slug]` | customer stories |
| `/alternatives`, `/alternatives/[slug]` | comparisons against other analytics tools |
| `/platform/[slug]` | one page per platform feature |
| `/tailored-demo` | request a demo for a website |
| `/startup-program`, `/affiliate` | programme landing pages with forms |
| `/contact` | contact details and call booking |
| `/privacy-policy`, `/terms` | legal pages |

| API route | Method | Purpose |
|---|---|---|
| `/api/posts?dir=content/blog` | GET | the parsed MDX posts (slug, front matter, rendered HTML) for the client-side blog index |
| `/api/concern` | POST | `{ email, website, action }` for a demo, startup or affiliate request; writes the lead to Supabase |

## Architecture

```
content/<collection>/*.mdx      src/app/**  (App Router, React Server Components)
        |                             ^
        |  gray-matter (front matter) |  generateStaticParams per slug
        |  unified: remark -> rehype   |
        |  rehype-pretty-code (shiki)  |
        v                             |
   styled HTML article ------------> page

  client islands ------> /api/posts     (blog list: search, categories, skeletons)
                   \---> /api/concern   (forms) --> Supabase (landing_page_users)

  third parties: product tracker (ds.min.js), PostHog, two GA4 properties,
                 Tawk.to live chat, Calendly booking embed
```

## How the content works

`src/data/post.ts` is the whole content layer:

- `getPost(dir, slug)` reads `content/<dir>/<slug>.mdx`, splits the front matter
  with `gray-matter`, and renders the body with a `unified` pipeline:
  `remark-parse` -> `remark-rehype` (raw HTML allowed, because the articles embed
  styled HTML blocks) -> `rehype-pretty-code` (Shiki, `min-light` and `min-dark`
  themes) -> `rehype-stringify`.
- `getPosts(dir)` returns every post in a folder with its slug, front matter and
  HTML, so index pages can sort and list them.
- Article front matter is `title`, `publishedAt`, `summary`, `image` (optional),
  and `categories` (used by the blog filters).
- Each article route exports `generateStaticParams`, so every post is pre-rendered
  from the folder contents at build time, and `generateMetadata` builds the title,
  description and social preview from the same front matter.

Adding an article means adding one MDX file: no registry, no CMS change, no route
to wire up.

## Key engineering decisions

### Markdown is the CMS

Articles live in the repository next to the code, so content changes are reviewed
in pull requests and can ship with the feature they describe. Four collections
(blog, case studies, comparisons, platform features) share one loader and one
route pattern, so a new collection is a folder plus two small files.

### The blog index is refreshed from the client

The index pre-fetches on the server to warm the cache, then hydrates from
`/api/posts` so search, category filtering and pagination happen instantly without
a page reload. If the server-side read fails, the page still renders and the API
route takes over - the failure mode is a slower page, not an error page.

### One endpoint for every lead

`/api/concern` takes an `action` (`demo_request`, `startup_program` or
`affiliate_program`) and stores the lead in a single `landing_page_users` table.
Existing rows are updated instead of duplicated, and a repeat request for the same
action is answered with `duplicate` instead of being counted twice.

### The demo flow degrades instead of failing

`/tailored-demo` shows a generating state and, if nothing comes back in twenty
seconds, stops waiting and asks for an email address instead. The visitor gets a
path forward either way, and the request is recorded as a demo lead.

### Built for search engines

A metadata base, a title template, Open Graph and Twitter cards, explicit robots
directives, and JSON-LD `BlogPosting` data on every content page, with a per-post
social image fallback. Article pages also generate their own table of contents
from the rendered headings.

### UI components are owned, not imported

shadcn/ui primitives and the animated `magicui` helpers are committed into
`src/components`, so they can be restyled for this brand without fighting a
dependency. Styling stays in Tailwind utilities with CSS variables for the theme.

## Tech stack

| Concern | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React Server Components) |
| UI | React 18, TypeScript strict |
| Styling | Tailwind CSS 3, `@tailwindcss/typography`, `tailwindcss-animate` |
| Components | shadcn/ui (new-york style) on Radix primitives, lucide icons, framer-motion |
| Content | MDX plus `gray-matter`, `unified`, `remark`, `rehype`, `rehype-pretty-code` (Shiki) |
| Data | Supabase (`@supabase/ssr`) for leads |
| Email | Mailtrap client (kept for notification emails) |
| Analytics | PostHog, Google Analytics 4, the Datopus tracker |
| Chat and booking | Tawk.to widget, Calendly embed |
| Deployment | Azure Static Web Apps through GitHub Actions |

## Getting started

Prerequisites: Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Then:

- `npm run build` - production build
- `npm start` - serve the production build
- `npm run lint` - ESLint with `next/core-web-vitals`

On Windows, `npm run dev.bat` is a one-line convenience wrapper that calls
`npm run dev`.

## Environment variables

The app reads these from `.env.local` (git-ignored):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project key used by the client provider |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog region host, for example `https://us.i.posthog.com` |

## Project layout

```
content/                  MDX collections: blog, case-studies, alternatives, platform
src/app/                  App Router routes, sections and API routes
src/app/api/posts/        blog feed for the client-side index
src/app/api/concern/      lead capture endpoint (Supabase)
src/components/           shared UI: header, footer, carousels, forms, magicui, ui
src/data/post.ts          the MDX content loader and renderer
src/lib/supabase/         Supabase server client
src/lib/utils.ts          class merge and date helpers
public/                   logo, product screenshots, customer logos and brand assets
.github/workflows/        Azure Static Web Apps build and deploy
```

## Deployment

`.github/workflows/azure-static-web-apps-red-smoke-01978ea10.yml` builds and
deploys the site with `Azure/static-web-apps-deploy`:

- pushes to `main` deploy to the production site;
- pull requests get a preview environment, which is torn down by the
  `close_pull_request_job` when the PR is closed.

It needs the repository secret
`AZURE_STATIC_WEB_APPS_API_TOKEN_RED_SMOKE_01978EA10`. The PostHog values are set
as workflow environment variables so the analytics build step has them too.

## Security notes

Before reusing this project anywhere else, move the committed service credentials
into environment variables:

- the Supabase project URL and key are currently written directly in
  `src/lib/supabase/server.ts`;
- the lead endpoint signs in with a shared account whose address and password are
  written directly in `src/app/api/concern/route.ts`, alongside a mailer token in a
  now-unused helper.

Rotate those credentials first, then read them from `process.env` like the PostHog
keys. `.env.local` is git-ignored and is the right home for them.

## Good to know

- **Prisma is unused.** `@prisma/client` is still a dependency and `prisma/` is an
  empty directory; all persistence goes through Supabase.
- **`src/app/api/tailored-demo/` is empty** - the demo page posts to `/api/concern`.
- **Two lockfiles are committed** (`package-lock.json` and `pnpm-lock.yaml`); pick
  one package manager before adding dependencies.
- **`eslint-config-next` is pinned to 14** while the framework is Next.js 15.
- **There are no tests.** `npm run lint` and `npm run build` are the quality gates.
- **`LICENSE` says `No License`**, while the home page describes the product as MIT
  licensed - that claim refers to the separate product repository.