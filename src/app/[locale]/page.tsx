import { T, Num, DateTime, Branch, Plural, Var } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: "fiction" | "nonfiction" | "science" | "history" | "philosophy";
  pages: number;
  rating: number;
  reviewCount: number;
  publishedDate: string;
  available: boolean;
  language: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    genre: "science",
    pages: 264,
    rating: 4.1,
    reviewCount: 1,
    publishedDate: "1962-04-15",
    available: true,
    language: "English",
  },
  {
    id: 2,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    genre: "fiction",
    pages: 417,
    rating: 4.7,
    reviewCount: 8432,
    publishedDate: "1967-05-30",
    available: true,
    language: "Spanish",
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "history",
    pages: 443,
    rating: 4.4,
    reviewCount: 12750,
    publishedDate: "2011-01-01",
    available: false,
    language: "Hebrew",
  },
  {
    id: 4,
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "philosophy",
    pages: 254,
    rating: 4.3,
    reviewCount: 6891,
    publishedDate: "0180-01-01",
    available: true,
    language: "Greek",
  },
  {
    id: 5,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    genre: "nonfiction",
    pages: 592,
    rating: 4.2,
    reviewCount: 3210,
    publishedDate: "2016-05-17",
    available: false,
    language: "English",
  },
  {
    id: 6,
    title: "Invisible Cities",
    author: "Italo Calvino",
    genre: "fiction",
    pages: 165,
    rating: 4.3,
    reviewCount: 4567,
    publishedDate: "1972-11-01",
    available: true,
    language: "Italian",
  },
];

function GenreLabel({ genre }: { genre: Book["genre"] }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-neutral-800 text-neutral-300">
      <T>
        <Branch
          branch={genre}
          fiction="Fiction"
          nonfiction="Nonfiction"
          science="Science"
          history="History"
          philosophy="Philosophy"
        />
      </T>
    </span>
  );
}

function AvailabilityBadge({ available }: { available: boolean }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
        available
          ? "bg-emerald-900/40 text-emerald-400"
          : "bg-red-900/40 text-red-400"
      }`}
    >
      <T>
        <Branch
          branch={available ? "yes" : "no"}
          yes="Available"
          no="Checked Out"
        />
      </T>
    </span>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-neutral-100 leading-tight">
            <T>
              <Var>{book.title}</Var>
            </T>
          </h3>
          <p className="text-sm text-neutral-400 mt-0.5">
            <T>
              by <Var>{book.author}</Var>
            </T>
          </p>
        </div>
        <AvailabilityBadge available={book.available} />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <GenreLabel genre={book.genre} />
        <span className="text-xs text-neutral-500">
          <T>
            <Num>{book.pages}</Num> pages
          </T>
        </span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <span className="text-neutral-300">
            <T>
              <Num>{book.rating}</Num> / 5
            </T>
          </span>
          <span className="text-neutral-500">
            <T>
              <Plural
                n={book.reviewCount}
                one={<><Num>{book.reviewCount}</Num> review</>}
                other={<><Num>{book.reviewCount}</Num> reviews</>}
              />
            </T>
          </span>
        </div>
        <span className="text-neutral-500 text-xs">
          <T>
            Published <DateTime>{new Date(book.publishedDate)}</DateTime>
          </T>
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-neutral-800">
        <span className="text-xs text-neutral-500">
          <T>
            Original language: <Var>{book.language}</Var>
          </T>
        </span>
      </div>
    </div>
  );
}

export default async function Home() {
  const gt = await getGT();

  const totalBooks = books.length;
  const availableBooks = books.filter((b) => b.available).length;

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Book Library")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/book-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Browse the collection")}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              A curated catalog of books spanning fiction, science, history, and
              philosophy. All text on this page is translated using General
              Translation.
            </T>
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8 text-sm text-neutral-400">
          <span>
            <T>
              <Num>{totalBooks}</Num> titles in collection
            </T>
          </span>
          <span className="text-neutral-700">|</span>
          <span>
            <T>
              <Num>{availableBooks}</Num> currently available
            </T>
          </span>
        </div>

        <div className="grid gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-xs text-neutral-500">
            <T>
              This is an example application built with General Translation to
              demonstrate internationalization in Next.js.
            </T>
          </p>
        </footer>
      </main>
    </div>
  );
}
