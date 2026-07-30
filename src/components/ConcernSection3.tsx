"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { concerns } from "@/data/concerns";

const concernsPerPage = 4;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ConcernsSection3() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(concerns.length / concernsPerPage);

  const visibleConcerns = useMemo(() => {
    const start = page * concernsPerPage;
    return concerns.slice(start, start + concernsPerPage);
  }, [page]);

  function previousPage() {
    setPage((current) => (current === 0 ? totalPages - 1 : current - 1));
  }

  function nextPage() {
    setPage((current) => (current + 1) % totalPages);
  }

  return (
    <section className="bg-stone-100 px-6 py-20 text-neutral-950 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Our businesses
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              One group, many ambitions.
            </h2>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={previousPage}
              aria-label="Previous businesses"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-lg transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextPage}
              aria-label="Next businesses"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 text-lg text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {visibleConcerns.map((concern) => (
            <article
              key={concern.id}
              className="group flex min-h-56 flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg sm:min-h-72 sm:p-7"
            >
              <div className="flex min-h-28 flex-1 items-center justify-center sm:min-h-36">
                {concern.logo ? (
                  <Image
                    src={concern.logo}
                    alt={`${concern.name} logo`}
                    width={220}
                    height={160}
                    className="max-h-28 w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-32"
                  />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 text-xl font-semibold tracking-[0.12em] text-neutral-700 sm:h-24 sm:w-24 sm:text-2xl">
                    {getInitials(concern.name)}
                  </span>
                )}
              </div>

              <div className="border-t border-neutral-100 pt-4">
                <h3 className="text-xs font-semibold leading-5 tracking-tight text-neutral-950 sm:text-sm">
                  {concern.name}
                </h3>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500 sm:text-[11px]">
                  {concern.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500">
            {String(page + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </p>
          <div className="flex gap-2" aria-label="Carousel pages">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Show businesses ${index * concernsPerPage + 1} to ${Math.min((index + 1) * concernsPerPage, concerns.length)}`}
                aria-pressed={index === page}
                className={`h-1.5 rounded-full transition-all ${
                  index === page
                    ? "w-8 bg-emerald-700"
                    : "w-4 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
