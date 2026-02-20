import { T, Num, Var, Plural } from "gt-next";
import Link from "next/link";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/book/${book.slug}`}
      className="block rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-600 transition-colors group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-neutral-100 truncate group-hover:text-white transition-colors">
            <T>
              <Var>{book.title}</Var>
            </T>
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            <T>
              by <Var>{book.author}</Var>
            </T>
          </p>
        </div>
        <span className="ml-3 shrink-0 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
          <T>
            <Var>{book.year}</Var>
          </T>
        </span>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed mb-4">
        <T>
          <Var>{book.description}</Var>
        </T>
      </p>

      <div className="flex items-center justify-between text-xs text-neutral-500">
        <span>
          <T>
            <Var>{book.genre}</Var>
          </T>
        </span>
        <span>
          <T>
            <Num>{book.pages}</Num> pages
          </T>
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={star <= book.rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className={
                star <= book.rating ? "text-amber-500" : "text-neutral-700"
              }
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-neutral-500">
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
    </Link>
  );
}
