# Book Library

A multilingual book catalog demonstrating internationalization with [General Translation](https://generaltranslation.com) and Next.js.

**[Live Demo](https://book-library.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Browse a curated collection of classic literature spanning fiction, philosophy, history, and science. Filter by genre, view detailed book pages with synopses and author bios, and switch between languages to see every piece of text translated in real time. Built to showcase how GT handles rich, content-heavy pages with minimal developer effort.

## GT Features Used

- `<T>` — JSX translation
- `<Num>` — Number formatting
- `<Var>` — Dynamic values within translations
- `<Plural>` — Pluralization
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/book-library.git
cd book-library
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
