"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    name: "Sampan Highway Inn",
    eyebrow: "Your Perfect Stopover on the Dhaka–Khulna Highway",
    subhead:
      "Cozy rooms, honest meals, a place to breathe before the road takes you again.",
    cta: "Book a Stay →",
    href: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
    image: "/images/featuredConcerns/highway-inn.png",
  },
  {
    name: "Sampan Metro Square",
    eyebrow: "Own a Piece of Ashulia's Next Address",
    subhead:
      "A land-share residential project built for people who want to invest in a home, not just a plot.",
    cta: "Explore Metro Square →",
    href: "/concerns",
    image: "/images/projects/sampanmetrosquare.jpg",
  },
  {
    name: "Express Highway Inn",
    eyebrow: "The Highway, Reimagined",
    subhead:
      "Everything travelers love about Sampan Highway Inn - modernized, elevated, and opening soon.",
    cta: "See What's Coming →",
    href: "/concerns",
    image: "/images/featuredConcerns/express-highway-inn.png",
  },
  {
    name: "London School of Higher Studies",
    eyebrow: "UK-Accredited Courses, Built for Bangladesh",
    subhead:
      "CIPS and CMI qualifications from London School of Higher Studies - study locally, get recognized globally.",
    cta: "Explore LSHS →",
    href: "/concerns",
    image: "/images/concerns/5-lshs.png",
  },
];

export default function HeroSlider2() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6500,
    );
  };
  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
    restart();
  };
  useEffect(() => {
    if (!paused) restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);
  const slide = slides[active];
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#071b13] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <p className="absolute left-1/2 top-24 z-30 -translate-x-1/2 whitespace-nowrap text-center text-sm font-semibold uppercase tracking-[0.32em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:top-28 sm:text-base">
        THE VILLAGE WILL BE THE CITY.
      </p>
      {slides.map((item, index) => (
        <div
          key={item.name}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[6500ms] ease-linear ${index === active ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
        </div>
      ))}
      <div className="relative z-10 flex min-h-screen items-end justify-center px-6 pb-28 text-center sm:justify-start sm:px-10 sm:pb-24 sm:text-left lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef636b]">
            <span aria-hidden="true">— </span>
            {slide.eyebrow}
            <span aria-hidden="true"> —</span>
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,4.8vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.05em]">
            {slide.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            {slide.subhead}
          </p>
          <a
            href={slide.href}
            className="mt-8 inline-flex border border-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#183b2b]"
          >
            {slide.cta}
          </a>
        </div>
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
        className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-xl text-white transition hover:border-white hover:bg-white hover:text-[#183b2b] sm:bottom-5 sm:left-8 sm:h-12 sm:w-12 sm:text-2xl"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
        className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-xl text-white transition hover:border-white hover:bg-white hover:text-[#183b2b] sm:bottom-5 sm:right-8 sm:h-12 sm:w-12 sm:text-2xl"
      >
        →
      </button>
      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Show ${item.name}`}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-10 bg-[#ef636b]" : "w-5 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
