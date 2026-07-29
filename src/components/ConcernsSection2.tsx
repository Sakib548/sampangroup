"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { concerns } from "@/data/concerns";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ConcernsSection2() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".concern-card");

      cards.forEach((card) => {
        gsap.from(card.children, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isWrapping, setIsWrapping] = useState(false);
  const loopedConcerns = [...concerns, ...concerns.slice(0, 4)];

  const goToCard = useCallback((index: number) => {
    if (!trackRef.current) return;

    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(trackRef.current, {
      scrollLeft: card.offsetLeft,
      duration: 0.8,
      ease: "power3.inOut",
    });

    setActiveIndex(index);
  }, []);

  const nextCard = useCallback(() => {
    if (isWrapping) return;

    if (activeIndex === concerns.length - 1) {
      setIsWrapping(true);
      cardRefs.current[concerns.length]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      window.setTimeout(() => {
        trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
        setActiveIndex(0);
        setIsWrapping(false);
      }, 750);
      return;
    }

    goToCard(activeIndex + 1);
  }, [activeIndex, goToCard, isWrapping]);

  useEffect(() => {
    if (paused) return;

    const timeout = window.setTimeout(nextCard, 5000);

    return () => window.clearTimeout(timeout);
  }, [nextCard, paused]);

  return (
    <section
      ref={sectionRef}
      className="bg-stone-100 px-6 py-20 text-neutral-950 lg:px-10 lg:py-24"
    >
      {" "}
      <div
        className="mx-auto max-w-7xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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
            {/* <button
              type="button"
              onClick={previousCard}
              aria-label="Previous businesses"
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-lg transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              ←
            </button> */}
            {/* <button
              type="button"
              onClick={nextCard}
              aria-label="Next businesses"
              disabled={isWrapping}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 text-lg text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              →
            </button> */}
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {loopedConcerns.map((concern, index) => (
              <div
                key={`${concern.id}-${index}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="w-1/2 shrink-0 pr-3 sm:pr-5 lg:w-1/4"
              >
                <article className="concern-card group flex min-h-56 flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg sm:min-h-72 sm:p-7">
                  {" "}
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(concerns.length).padStart(2, "0")}
          </p>
          <div className="flex gap-1.5" aria-label="Carousel cards">
            {concerns.map((concern, index) => (
              <button
                key={concern.id}
                type="button"
                onClick={() => goToCard(index)}
                aria-label={`Show ${concern.name}`}
                aria-pressed={index === activeIndex}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-emerald-700"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
