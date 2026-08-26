"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiGlobe, FiMap, FiBookOpen, FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    name: "Sampan Group",
    desc: "A conglomerate that grew outward from a single highway stop into real estate, hospitality, education, agriculture, manufacturing, and mobility — nine divisions, one motto: the village will be the city.",
    cta: "Learn more about us",
    href: "#about-group",
    Icon: FiGlobe,
  },
  {
    name: "Sampan Development Ltd",
    desc: "The land and construction arm behind Sampan's real estate portfolio — outright sale, land share, and residential and commercial builds, backed by REHAB membership.",
    cta: "Explore our land projects",
    href: "#sdl",
    Icon: FiMap,
  },
  {
    name: "London School of Higher Studies",
    desc: "UK-affiliated professional education offering CIPS and CMI qualifications — taught in Bangladesh, recognized internationally.",
    cta: "Discover LSHS",
    href: "#lshs",
    Icon: FiBookOpen,
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSnapshot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".about-header > *", ".about-col", ".col-content > *", ".ghost-num"],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".about-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-snapshot",
              start: "top 80%",
              once: true,
            },
          },
        );

        /* COLUMN STAGGERED ENTRANCE */
        const cols = gsap.utils.toArray<HTMLElement>(".about-col");
        cols.forEach((col, i) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: col, start: "top 85%", once: true },
          });

          tl.fromTo(
            col,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          )
            // Animate inner elements for a premium staggered feel
            .fromTo(
              col.querySelector(".ghost-num"),
              { scale: 1.2, opacity: 0 },
              { scale: 1, opacity: 0.05, duration: 1.2, ease: "power3.out" },
              "-=0.8",
            )
            .fromTo(
              col.querySelectorAll(".col-content > *"),
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
              },
              "-=0.8",
            );
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="about-snapshot relative w-full overflow-hidden bg-[#F5F3EF] py-24 lg:py-32"
    >
      {/* Subtle Film Grain Overlay for Premium Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[100] opacity-[0.03] mix-blend-multiply"
        aria-hidden="true"
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterAbout">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAbout)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="about-header mb-16 max-w-3xl lg:mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Three organizations.
            <br />
            One growing ecosystem.
          </h2>
        </div>

        {/* ====== THREE PILLARS GRID ====== */}
        <div className="grid grid-cols-1 border-t border-neutral-300/60 md:grid-cols-3 md:border-l md:border-t-0">
          {pillars.map((p, i) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.name}
                className="about-col group relative flex flex-col overflow-hidden py-12 transition-colors duration-500 md:px-12 md:py-0 md:first:pl-0 md:last:pr-0 md:border-l md:border-neutral-300/60"
              >
                {/* Giant Ghost Number (Editorial Depth) */}
                <span className="ghost-num pointer-events-none absolute -top-8 right-0 select-none text-[10rem] font-black leading-none text-neutral-950 opacity-0 transition-all duration-700 ease-out group-hover:opacity-[0.03] md:text-[14rem]">
                  0{i + 1}
                </span>

                {/* Bottom Animated Hover Line (Left -> Right Reveal) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />

                {/* Content Wrapper */}
                <div className="col-content relative z-10 flex h-full flex-col transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                  {/* Logo / Icon */}
                  <div className="mb-12">
                    <Icon
                      className="h-10 w-10 text-neutral-400 transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-neutral-900"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title with Mask Reveal Effect */}
                  <div className="relative mb-6 h-[2.5rem] overflow-hidden md:h-[3.5rem]">
                    <h3 className="absolute inset-0 text-lg font-semibold uppercase tracking-[0.15em] text-neutral-900 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                      {p.name}
                    </h3>
                    <h3 className="absolute inset-0 text-lg font-semibold uppercase tracking-[0.15em] text-emerald-600 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                      {p.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-12 max-w-sm text-sm leading-7 text-neutral-500 transition-colors duration-500 group-hover:text-neutral-800">
                    {p.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={p.href}
                      className="group/cta inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-300 hover:text-emerald-600"
                    >
                      <span className="relative">
                        {p.cta}
                        {/* Animated underline under text */}
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-600 transition-all duration-500 ease-out group-hover/cta:w-full"></span>
                      </span>
                      <FiArrowRight className="h-3 w-3 transition-transform duration-500 ease-out group-hover/cta:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
