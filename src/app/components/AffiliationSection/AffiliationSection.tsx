"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const affiliations = [
  {
    num: "01",
    name: "REHAB",
    fullName: "Real Estate & Housing Association of Bangladesh",
    desc: "Proud member, championing regulated and quality-driven real estate development across the country.",
    logo: "/images.jpg", // Replace with actual REHAB logo
    role: "Corporate Member",
  },
  {
    num: "02",
    name: "BIA",
    fullName: "Bangladesh Indenting Association",
    desc: "Member, representing Sampan's commitment to ethical and professional international trade.",
    logo: "/images.jpg", // Replace with actual BIA logo
    role: "Corporate Member",
  },
  {
    num: "03",
    name: "BARVIDA",
    fullName: "Bangladesh Reconditioned Vehicles Importer & Dealer Association",
    desc: "MD Emamul Hasan served as former Organizing Secretary, guiding the future of national mobility.",
    logo: "/images.jpg", // Replace with actual BARVIDA logo
    role: "Leadership History",
  },
  {
    num: "04",
    name: "BADIA",
    fullName: "Bangladesh Arms Dealer & Importer Association",
    desc: "MD Emamul Hasan served as former Joint Secretary, ensuring licensed and regulated security supply.",
    logo: "/images.jpg", // Replace with actual BADIA logo
    role: "Leadership History",
  },
  {
    num: "05",
    name: "LSHS UK",
    fullName: "CIPS and CMI Accredited Affiliation",
    desc: "Delivering internationally recognized UK-accredited professional coursework right here in Bangladesh.",
    logo: "/images.jpg", // Replace with actual LSHS UK logo
    role: "International Accreditation",
  },
  {
    num: "06",
    name: "Sampan Group",
    fullName: "Integrated Ecosystem Compliance",
    desc: "Operating across nine divisions with unified standards in safety, investment, and corporate governance.",
    logo: "/images.jpg", // Replace with actual Sampan logo
    role: "Corporate Standard",
  },
];

// Duplicate for the seamless infinite loop
const marqueeRow1 = [...affiliations, ...affiliations];
const marqueeRow2 = [...affiliations, ...affiliations];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AffiliationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Stop animation and allow native scrolling
        gsap.set([".marquee-track-1", ".marquee-track-2"], { x: 0 });
        gsap.set(".marquee-container", { overflowX: "auto" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".aff-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".aff-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* 
          PREMIUM RIGHT-TO-LEFT MARQUEE LOGIC
          We calculate exact pixel width (scrollWidth / 2) to guarantee a seamless loop.
        */
        const setupMarquee = (trackClass: string, duration: number) => {
          const track = containerRef.current?.querySelector(
            trackClass,
          ) as HTMLElement;
          if (!track) return null;

          // Calculate the width of exactly one set of items
          const totalWidth = track.scrollWidth / 2;

          const tween = gsap.to(track, {
            x: -totalWidth,
            duration: duration,
            ease: "none",
            repeat: -1,
          });

          return tween;
        };

        const tl1 = setupMarquee(".marquee-track-1", 32);
        const tl2 = setupMarquee(".marquee-track-2", 42); // Slightly slower for depth

        // Hover Slowdown Interaction
        const row1 = containerRef.current?.querySelector(".marquee-row-1");
        const row2 = containerRef.current?.querySelector(".marquee-row-2");

        if (row1 && tl1) {
          row1.addEventListener("mouseenter", () =>
            gsap.to(tl1, { timeScale: 0.2, duration: 0.5 }),
          );
          row1.addEventListener("mouseleave", () =>
            gsap.to(tl1, { timeScale: 1, duration: 0.5 }),
          );
        }
        if (row2 && tl2) {
          row2.addEventListener("mouseenter", () =>
            gsap.to(tl2, { timeScale: 0.2, duration: 0.5 }),
          );
          row2.addEventListener("mouseleave", () =>
            gsap.to(tl2, { timeScale: 1, duration: 0.5 }),
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black uppercase tracking-tighter text-neutral-950 opacity-[0.025] md:text-[15rem]">
        Affiliations
      </span>

      <div className="relative mx-auto max-w-[1600px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="aff-header mb-16 max-w-3xl lg:mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Connected to institutions
            <br />
            <span className="text-neutral-400">that shape our industries.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[1.8] text-neutral-500 lg:text-lg">
            Professional memberships, leadership roles, and international
            affiliations that reflect the networks behind Sampan Group.
          </p>
        </div>

        {/* ====== MARQUEE CONTAINER ====== */}
        <div
          className="marquee-container relative flex flex-col gap-12 lg:gap-16"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* ROW 1 (Right to Left) */}
          <div className="marquee-row-1 flex w-max overflow-hidden">
            <div className="marquee-track-1 flex shrink-0 items-center">
              {marqueeRow1.map((aff, i) => (
                <MarqueeItem key={`r1-${i}`} aff={aff} size="lg" />
              ))}
            </div>
          </div>

          {/* ROW 2 (Right to Left - Slightly slower) - Hidden on Mobile */}
          {/* <div className="marquee-row-2 hidden w-max overflow-hidden lg:flex">
            <div className="marquee-track-2 flex shrink-0 items-center">
              {marqueeRow2.map((aff, i) => (
                <MarqueeItem key={`r2-${i}`} aff={aff} size="sm" />
              ))}
            </div>
          </div> */}
        </div>

        {/* ====== BOTTOM METADATA ====== */}
        <div className="mt-16 flex items-center justify-between border-t border-neutral-300/60 pt-6 lg:mt-24">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Professional Network
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">
            <strong className="text-neutral-900">06</strong> Organizations /
            Affiliations
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MARQUEE ITEM SUBCOMPONENT                                          */
/* ------------------------------------------------------------------ */

function MarqueeItem({
  aff,
  size,
}: {
  aff: (typeof affiliations)[0];
  size: "lg" | "sm";
}) {
  const isLarge = size === "lg";

  return (
    <div className="group flex shrink-0 items-center">
      <div
        className={`relative flex flex-col ${isLarge ? "w-[400px]" : "w-[340px]"} px-12 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]`}
      >
        {/* Logo */}
        <div
          className={`relative ${isLarge ? "h-20 w-full" : "h-14 w-full"} mb-6`}
        >
          <div
            className={`relative mx-auto ${isLarge ? "h-20 w-44" : "h-14 w-36"}`}
          >
            <Image
              src={aff.logo}
              alt={`${aff.name} Logo`}
              fill
              className="object-contain transition-all duration-500 filter-none group-hover:scale-105"
              sizes="200px"
            />
          </div>
        </div>

        {/* Organization Name */}
        <h3 className="text-center text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-500 group-hover:text-[#007DC5] lg:text-2xl">
          {aff.name}
        </h3>

        {/* Hidden Reveal Content */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600">
              {aff.role}
            </p>
            <p className="mt-3 text-center text-xs leading-6 text-neutral-500">
              {aff.fullName}
            </p>
            <p className="mt-4 text-center text-sm leading-6 text-neutral-600">
              {aff.desc}
            </p>
          </div>
        </div>

        {/* Index Number (Subtle) */}
        <span className="mt-8 text-center font-mono text-[10px] tracking-widest text-neutral-300 transition-colors duration-500 group-hover:text-emerald-400">
          {aff.num}
        </span>
      </div>

      {/* Visual Separator */}
      <div className="relative h-16 w-px bg-neutral-300/50">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007DC5]"></span>
      </div>
    </div>
  );
}
