"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { expressFacilities } from "@/data/expressFacilities";

const pageSize = 6;
const facilityPages = Array.from(
  { length: Math.ceil(expressFacilities.length / pageSize) },
  (_, pageIndex) =>
    expressFacilities.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize,
    ),
);

export default function ExpressFacilities() {
  const [page, setPage] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const totalPages = facilityPages.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % totalPages);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  useLayoutEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll<HTMLElement>(
      "[data-facility-card]",
    );
    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 12, clipPath: "inset(0 18% 0 0)" },
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
        },
      );
    }, cardsRef);

    return () => context.revert();
  }, [page]);

  const goToPage = (nextPage: number) => {
    setPage((nextPage + totalPages) % totalPages);
  };

  return (
    <section className="bg-[#080808] px-10 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-center lg:gap-16">
        <div>
          <div className="relative aspect-[0.82] overflow-hidden bg-[#211d1a]">
            <Image
              src="/images/projects/express-highway-inn.jpg"
              alt="Express Highway Inn facility"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Sampan Hospitality
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Express Highway Inn
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                Rest, refresh, and enjoy every essential under one roof.
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                Everything you need
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Facilities We Have
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-xl transition hover:bg-white hover:text-black"
                aria-label="Previous facilities"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-xl transition hover:bg-white hover:text-black"
                aria-label="Next facilities"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {facilityPages[page].map((facility) => (
              <article
                key={facility.id}
                data-facility-card
                className="group min-w-0"
              >
                <div className="relative aspect-[1.35] overflow-hidden bg-[#211d1a]">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 90vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-emerald-300/80">
                  {facility.eyebrow}
                </p>
                <h3 className="mt-1 text-base font-semibold leading-6">
                  {facility.title}
                </h3>
              </article>
            ))}
          </div>

          <div
            className="mt-8 flex items-center gap-2"
            aria-label="Facilities pages"
          >
            {facilityPages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Show facilities page ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  page === index ? "w-12 bg-red-400" : "w-5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
