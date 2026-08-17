"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { highwayInnFacilities } from "@/data/highwayInnFacility";

export default function HighwayInnShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % highwayInnFacilities.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll<HTMLElement>(
      "[data-highway-card]",
    );
    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24, clipPath: "inset(0 12% 0 0)" },
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    }, cardsRef);

    return () => context.revert();
  }, [activeIndex]);

  const orderedFacilities = highwayInnFacilities.map(
    (_, offset) =>
      highwayInnFacilities[
        (activeIndex + offset) % highwayInnFacilities.length
      ],
  );
  const [lead, topCard, bottomCard] = orderedFacilities;

  return (
    <section className="bg-[#080808] px-10 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Express Highway Inn
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Stay, celebrate, and feel at home.
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:grid-rows-2"
        >
          <ShowcaseCard
            key={lead.id}
            facility={lead}
            variant="lead"
          />
          <ShowcaseCard
            key={topCard.id}
            facility={topCard}
            variant="side"
          />
          <ShowcaseCard
            key={bottomCard.id}
            facility={bottomCard}
            variant="side"
          />
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
          <p className="text-sm text-white/55">
            {String(activeIndex + 1).padStart(2, "0")} / {String(highwayInnFacilities.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2" aria-label="Highway Inn showcase slides">
            {highwayInnFacilities.map((facility, index) => (
              <button
                key={facility.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${facility.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index ? "w-12 bg-red-400" : "w-5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  facility,
  variant,
}: {
  facility: (typeof highwayInnFacilities)[number];
  variant: "lead" | "side";
}) {
  return (
    <article
      data-highway-card
      className={`group relative min-h-0 overflow-hidden bg-[#211d1a] ${
        variant === "lead" ? "lg:row-span-2 lg:min-h-[500px]" : "min-h-[240px]"
      }`}
    >
      <Image
        src={facility.image}
        alt={facility.alt}
        fill
        sizes={
          variant === "lead"
            ? "(min-width: 1024px) 55vw, 95vw"
            : "(min-width: 1024px) 35vw, 95vw"
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 bg-black/35 p-6 backdrop-blur-[2px] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {facility.id}
        </p>
        <h3
          className={
            variant === "lead"
              ? "mt-3 text-4xl font-semibold tracking-tight sm:text-6xl"
              : "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          }
        >
          {facility.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
          {facility.description}
        </p>
      </div>
    </article>
  );
}
