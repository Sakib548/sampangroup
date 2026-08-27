"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { highwayInnFacilities } from "@/data/highwayInnFacility";

const slides = highwayInnFacilities
  .slice(0, 5)
  .map((item) => ({ name: item.title, image: item.image,  }));

export default function HighwayInnEditorial() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection("next");
      setActive((value) => (value + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);
  const move = (amount: number) => {
    setDirection(amount > 0 ? "next" : "previous");
    setActive((value) => (value + amount + slides.length) % slides.length);
  };
  const current = slides[active];
  const layers = [-1, 0, 1].map((offset) => ({
    slide: slides[(active + offset + slides.length) % slides.length],
    offset,
  }));
  return (
    <section className="overflow-hidden bg-[#e8efe9] px-6 py-16 text-[#123b2c] sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto h-[380px] w-full max-w-[500px] sm:h-[480px]">
          {layers.map(({ slide, offset }) => {
            const front = offset === 0;
            return (
              <div
                key={`${slide.name}-${offset}`}
                className={`absolute inset-4 overflow-hidden rounded-[2rem] shadow-xl transition-all duration-700 sm:inset-8 ${front ? `z-20 animate-page-turn-${direction}` : "z-10 opacity-90"}`}
                style={
                  front
                    ? undefined
                    : {
                        transform: `translateX(${offset < 0 ? "-8%" : "8%"}) rotate(${offset < 0 ? -8 : 7}deg) scale(.94)`,
                      }
                }
              >
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            );
          })}
          <button
            onClick={() => move(1)}
            aria-label="Next facility"
            className="absolute bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#123b2c] text-xl text-white sm:hidden"
          >
            →
          </button>
        </div>
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7aa24]">
            Sampan Highway Inn · facilities
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,4.3vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Everything you need for a better stop.
          </h2>
          <h3 className="mt-8 text-2xl font-semibold text-[#d7aa24] sm:text-3xl">
            {current.name}
          </h3>
          <p className="mt-5 text-base leading-7 text-[#123b2c]/70 sm:text-lg">
            {/* {current.copy}. Enjoy thoughtful spaces designed for travelers, */}
            families, and guests.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <Link
              href="/our_divisions/hospitality-highway-travel/sampan-highway-inn"
              className="inline-flex rounded-full border border-[#123b2c] px-7 py-4 text-sm font-semibold transition hover:bg-[#123b2c] hover:text-white"
            >
              Explore Highway Inn →
            </Link>
            <button
              onClick={() => move(1)}
              aria-label="Next facility"
              className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#123b2c] text-2xl transition hover:bg-[#123b2c] hover:text-white sm:flex"
            >
              →
            </button>
          </div>
          <div className="mt-10 flex items-center gap-2 border-t border-[#123b2c]/20 pt-5">
            {slides.map((slide, index) => (
              <button
                key={slide.name}
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.name}`}
                className={`h-1 transition-all ${index === active ? "w-12 bg-[#d7aa24]" : "w-5 bg-[#123b2c]/25"}`}
              />
            ))}
            <span className="ml-auto text-xs tracking-[0.18em] text-[#123b2c]/55">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
