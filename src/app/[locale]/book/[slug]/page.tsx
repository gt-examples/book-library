import { T, Num, Var, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBookBySlug, getRelatedBooks } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookDetail({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const gt = await getGT();
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const related = getRelatedBooks(book);

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
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-100 hover:text-white transition-colors"
            >
              {gt("Book Library")}
            </Link>
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
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {gt("Back to collection")}
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-100 mb-2">
            <T><Var>{book.title}</Var></T>
          </h1>
          <p className="text-lg text-neutral-400">
            <T>by <Var>{book.author}</Var></T>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300">
            <T><Var>{book.genre}</Var></T>
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300">
            <T><Var>{book.year}</Var></T>
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300">
            <T><Num>{book.pages}</Num> pages</T>
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300">
            <T>Estimated reading time: <Var>{book.readingTime}</Var></T>
          </span>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={star <= book.rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                className={star <= book.rating ? "text-amber-500" : "text-neutral-700"}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-neutral-500">
            <T>
              <Plural
                n={book.reviews}
                singular={<>1 review</>}
              >
                <Num>{book.reviews}</Num> reviews
              </Plural>
            </T>
          </span>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-100 mb-4">
            {gt("Synopsis")}
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T><Var>{book.synopsis}</Var></T>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-100 mb-4">
            {gt("About the author")}
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            <T><Var>{book.authorBio}</Var></T>
          </p>
        </section>

        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">
              {gt("Related books")}
            </h2>
            <div className="grid gap-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/book/${rel.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-100">
                      <T><Var>{rel.title}</Var></T>
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      <T>by <Var>{rel.author}</Var></T>
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500">
                    <T><Var>{rel.genre}</Var></T>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
