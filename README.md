# Personal Portfolio

Personal portfolio website built with Next.js 16, featuring bilingual support (EN/TH), dark mode, and a working contact form.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **i18n:** next-intl (English / Thai)
- **Email:** Resend

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Sections: Hero, About, Skills, Experience, Projects, Contact
- Bilingual: English and Thai via `/en` and `/th` routes
- Dark mode support
- Scroll-reveal animations
- Contact form — sends email via Resend API

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API route
│   └── [locale]/        # Locale-based routing
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections
│   └── ui/              # Shared UI components
├── data/                # Static content (skills, experience, projects)
├── i18n/                # next-intl routing & config
└── messages/            # en.json, th.json translation files
```

## Deployment

Deploy on [Vercel](https://vercel.com) — add `RESEND_API_KEY` to the environment variables in the project settings.
