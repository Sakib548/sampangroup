"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const awards = [
  {
    id: "award-01",
    organization: "BRAC Bank",
    year: "2005",
    title: "1st Place, Sales Performance",
    description: "Earned by MD Emamul Hasan before founding Sampan Auto.",
    logo: "/images/awards/brac-bank.png",
  },
  {
    id: "award-02",
    organization: "Standard Chartered Bank",
    year: "2009",
    title: "High Flyer Bonanza Campaign Award",
    description:
      "Awarded to Sampan Auto for outstanding financial performance.",
    logo: "/images/awards/standard-chartered.png",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AwardsRecognition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".awd-header > *", ".awd-card", ".awd-timeline"], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".awd-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".awd-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* CARDS STAGGERED ENTRANCE */
        gsap.fromTo(
          ".awd-card",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".awd-strip",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* TIMELINE ENTRANCE */
        gsap.fromTo(
          ".awd-timeline",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".awd-timeline",
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      {/* Giant Ghost Number */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
        08
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== EDITORIAL HEADER (One Line) ====== */}
        <div className="awd-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
              08 / Awards & Recognition
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 lg:whitespace-nowrap">
              Recognized before the Sampan story began.
            </h2>
          </div>
        </div>

        {/* ====== AWARDS STRIP ====== */}
        <div className="awd-strip relative">
          {/* Horizontal Scroll Track */}
          <div
            ref={trackRef}
            className="awd-track flex cursor-grab gap-6 overflow-x-auto pb-8 active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              .awd-track::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {awards.map((award, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={award.id}
                  className="awd-card group w-[85vw] flex-shrink-0 snap-start lg:w-[420px]"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Architectural Card Surface */}
                  <div className="flex h-full flex-col border border-neutral-200 bg-white p-8 transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.1)] lg:p-10">
                    {/* Logo Area */}
                    <div className="flex h-24 w-full items-center justify-center border border-neutral-100 bg-neutral-50/50 transition-colors duration-500 group-hover:border-neutral-200 lg:h-28">
                      <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        {/* Replace with actual Image component when logos are available */}
                        <span className="px-6 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 leading-tight">
                          {award.organization}
                        </span>
                      </div>
                    </div>

                    {/* Emerald Accent Line */}
                    <div className="mt-8 h-[2px] w-8 bg-emerald-500 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-12" />

                    {/* Year */}
                    <p className="mt-6 font-mono text-xs tracking-widest text-neutral-400">
                      {award.year}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-neutral-950 transition-colors duration-500 group-hover:text-emerald-700">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {award.description}
                    </p>

                    {/* Learn More Row */}
                    <div className="mt-auto flex items-center gap-2 border-t border-neutral-100 pt-6">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 group-hover:text-emerald-700">
                        Learn More
                      </span>
                      <FiArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====== BOTTOM TIMELINE (Desktop) ====== */}
        <div className="awd-timeline mt-20 hidden lg:mt-28 lg:block">
          <div className="relative h-px w-full bg-neutral-200">
            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between">
              {awards.map((award) => (
                <div key={award.id} className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="mt-5 text-center">
                    <p className="font-mono text-[11px] tracking-widest text-neutral-500">
                      {award.year}
                    </p>
                    <p className="mt-1.5 max-w-[120px] text-center text-[9px] uppercase tracking-[0.15em] text-neutral-400 leading-tight">
                      {award.organization}
                    </p>
                  </div>
                </div>
              ))}

              {/* Future indicator */}
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full border border-neutral-300" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-neutral-300">
                  →
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
