"use client";

import { useGT } from "gt-next/client";
import { T, Var } from "gt-next";

export default function GenreFilter({
  genres,
  selected,
}: {
  genres: string[];
  selected: string | null;
}) {
  const t = useGT();

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <a
        href="?"
        className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
          !selected
            ? "bg-neutral-100 text-neutral-900 border-neutral-100"
            : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500"
        }`}
      >
        {t("All genres")}
      </a>
      {genres.map((genre) => (
        <a
          key={genre}
          href={`?genre=${encodeURIComponent(genre)}`}
          className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
            selected === genre
              ? "bg-neutral-100 text-neutral-900 border-neutral-100"
              : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500"
          }`}
        >
          <T>
            <Var>{genre}</Var>
          </T>
        </a>
      ))}
    </div>
  );
}
