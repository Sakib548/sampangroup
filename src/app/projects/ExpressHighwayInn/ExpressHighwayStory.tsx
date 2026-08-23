"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { expressFacilities } from "@/data/expressFacilities";

const selectedIds = [
  "vvip-lounge",
  "billiards",
  "sampan-mart",
  "ev-car-charging",
  "automatic-car-wash",
];

const overview = {
  id: "overview",
  title: "The Highway, Reimagined.",
  tabLabel: "Overview",
  eyebrow:
    "A complete destination for comfort, recreation, dining, and convenience.",
  image: "/images/projects/express-highway-inn.png",
  alt: "Express Highway Inn exterior",
};

const facilitySlides = selectedIds.flatMap((id) => {
  const facility = expressFacilities.find((item) => item.id === id);

  if (!facility) return [];

  const title =
    facility.id === "billiards" ? "Billiards & Card Room" : facility.title;

  return [
    {
      ...facility,
      title,
      tabLabel: title,
    },
  ];
});

const slides = [overview, ...facilitySlides];
const AUTO_ADVANCE_MS = 6000;

export default function ExpressHighwayStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative left-1/2 -ml-[50vw] min-h-[100svh] w-screen max-w-none overflow-hidden bg-[#071b13] text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const active = index === activeIndex;

          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
                active ? "z-[1] opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                  active ? "scale-[1.045]" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 z-[2] bg-[#071b13]/20" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(7,27,19,0.60)_0%,rgba(7,27,19,0.06)_34%,rgba(7,27,19,0.32)_58%,rgba(7,27,19,0.94)_100%),linear-gradient(90deg,rgba(7,27,19,0.74)_0%,rgba(7,27,19,0.30)_42%,rgba(7,27,19,0.04)_76%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-6 pb-8 pt-28 sm:px-10 sm:pb-10 lg:px-16 lg:pt-32">
        <header className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#ef636b]" />
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#58b9eb]">
                Express Highway Inn
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,6.2vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-balance">
              Everything you need,
              <span className="block ">all in one stop.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 lg:pt-2">
            <span className="h-px w-10 bg-[#ef636b]" />
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/52">
              Opening soon
            </p>
          </div>
        </header>

        <div className="mt-auto pt-24">
          <div key={activeSlide.id} className="mb-8 max-w-2xl" aria-live="off">
            <p className="font-mono text-[0.64rem] font-bold tracking-[0.18em] text-[#ef636b]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </p>

            <h3 className="mt-4 max-w-[16ch] text-[clamp(2.2rem,4vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#f7f4ed]">
              {activeSlide.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/66 sm:text-base">
              {activeSlide.eyebrow}
            </p>

            {activeSlide.id === "overview" && (
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 border border-[#00a174]/55 bg-[#00a174]/24 px-5 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:border-[#00a174]/80 hover:bg-[#00a174]/38"
              >
                See what’s coming
                <span aria-hidden="true" className="text-base text-[#ef636b]">
                  →
                </span>
              </Link>
            )}
          </div>

          <div className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0">
            <div
              className="grid min-w-[62rem] border-y border-white/18 bg-[#071b13]/36 backdrop-blur-xl"
              style={{ gridTemplateColumns: `repeat(${slides.length}, 1fr)` }}
              aria-label="Express Highway Inn facilities"
            >
              {slides.map((slide, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={`Show ${slide.tabLabel}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative min-h-[6.75rem] border-r border-white/14 px-4 py-4 text-left transition-colors duration-300 last:border-r-0 ${
                      active
                        ? "bg-white/12 text-white"
                        : "text-white/48 hover:bg-white/7 hover:text-white/78"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-0.5 origin-left transition-transform duration-500 ${
                        active
                          ? "scale-x-100 bg-[#58b9eb]"
                          : "scale-x-0 bg-[#ef636b]"
                      }`}
                    />

                    {/* <span className="font-mono text-[0.56rem] font-bold tracking-[0.14em] text-[#58b9eb]">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}

                    <span className="mt-3 block max-w-[15ch] text-[0.62rem] font-bold uppercase leading-4 tracking-[0.13em]">
                      {slide.tabLabel}
                    </span>

                    {active && (
                      <span
                        key={`progress-${slide.id}`}
                        aria-hidden="true"
                        className="express-auto-progress absolute inset-x-0 bottom-0 h-px bg-[#58b9eb]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .express-auto-progress {
          transform: scaleX(0);
          transform-origin: left;
          animation: express-auto-progress ${AUTO_ADVANCE_MS}ms linear forwards;
        }

        @keyframes express-auto-progress {
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .express-auto-progress {
            animation: none;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
