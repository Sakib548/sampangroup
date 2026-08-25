"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiLayers,
  FiMoon,
  FiFlag,
  FiBookOpen,
  FiSun,
  FiShoppingBag,
  FiBox,
  FiTruck,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const divisions = [
  {
    num: "01",
    title: "Real Estate & Land Investment",
    shortTitle: "Real Estate",
    oneLiner: "Own land, not just visit it.",
    cta: "Explore Real Estate",
    href: "#real-estate",
    image: "/images.jpg",
    Icon: FiLayers,
  },
  {
    num: "02",
    title: "Hospitality, Resort & Highway Travel",
    shortTitle: "Hospitality",
    oneLiner: "Stay, celebrate, and unwind -  on the highway and beyond.",
    cta: "Explore Hospitality",
    href: "#hospitality",
    image: "/images/projects/express-highway-inn.png",
    Icon: FiMoon,
  },
  {
    num: "03",
    title: "Golf Zone",
    shortTitle: "Golf Zone",
    oneLiner: "Bangladesh's first full golf destination, in the making.",
    cta: "Explore Golf",
    href: "#golf",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    Icon: FiFlag,
  },
  {
    num: "04",
    title: "Professional Education",
    shortTitle: "Education",
    oneLiner: "UK-recognized courses, taught close to home.",
    cta: "Explore Education",
    href: "#education",
    image: "/images/featuredConcerns/highway-inn.png",
    Icon: FiBookOpen,
  },
  {
    num: "05",
    title: "Agro & Fresh Produce",
    shortTitle: "Agro",
    oneLiner: "From our farm to your table.",
    cta: "Explore Agro",
    href: "#agro",
    image: "/images/sampan-3.png",
    Icon: FiSun,
  },
  {
    num: "06",
    title: "Retail Shop & Super Shop",
    shortTitle: "Retail",
    oneLiner: "Everyday essentials, always nearby.",
    cta: "Explore Retail",
    href: "#retail",
    image: "/images.jpg",
    Icon: FiShoppingBag,
  },
  {
    num: "07",
    title: "Manufacturing & Industrial",
    shortTitle: "Industrial",
    oneLiner: "Built by us, for what we build.",
    cta: "Explore Manufacturing",
    href: "#manufacturing",
    image: "/images.jpg",
    Icon: FiBox,
  },
  {
    num: "08",
    title: "Automotive, Fuel & Mobility",
    shortTitle: "Mobility",
    oneLiner: "Everything that keeps you moving.",
    cta: "Explore Mobility",
    href: "#mobility",
    image: "/images.jpg",
    Icon: FiTruck,
  },
  {
    num: "09",
    title: "Defense & Security",
    shortTitle: "Security",
    oneLiner: "Licensed, regulated, trusted supply.",
    cta: "Explore Security",
    href: "#security",
    image: "/images.jpg",
    Icon: FiShield,
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function DivisionsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for GSAP targeting
  const desktopImgRefs = useRef<HTMLElement[]>([]);
  const desktopContentRefs = useRef<HTMLElement[]>([]);
  const desktopProgressRefs = useRef<HTMLElement[]>([]);

  const prevIndexRef = useRef(0);
  const initializedRef = useRef(false);

  /* ====== GSAP SCROLLTRIGGER & PARALLAX (Runs Once) ====== */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".div-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".div-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* DESKTOP LIST STAGGER ENTRANCE */
        gsap.fromTo(
          ".desktop-list-item",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".desktop-layout",
              start: "top 80%",
              once: true,
            },
          },
        );

        /* ONE SCROLLTRIGGER FOR PARALLAX WRAPPER */
        gsap.fromTo(
          ".parallax-wrapper",
          { yPercent: 5 },
          {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: ".desktop-layout",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".div-header > *", ".desktop-list-item", ".parallax-wrapper"],
          { opacity: 1, x: 0, y: 0, yPercent: 0 },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  /* ====== GSAP IMAGE REVEAL & CONTENT TRANSITION (Runs on activeIndex change) ====== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial mount setup
    if (!initializedRef.current) {
      initializedRef.current = true;
      const isReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      desktopImgRefs.current.forEach((img, i) => {
        if (!img) return;
        if (i === 0) {
          gsap.set(img, {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            scale: 1.02,
            yPercent: 0,
            xPercent: 0,
          });
          if (!isReduced) {
            gsap.to(img, {
              scale: 1.06,
              duration: 9,
              ease: "none",
              repeat: -1,
              yoyo: true,
            });
          }
        } else {
          gsap.set(img, {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            scale: 1.08,
            yPercent: 4,
            xPercent: 0,
          });
        }
      });

      desktopContentRefs.current.forEach((content, i) => {
        if (!content) return;
        gsap.set(content, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 });
      });

      if (desktopProgressRefs.current[0] && !isReduced) {
        gsap.fromTo(
          desktopProgressRefs.current[0],
          { scaleX: 0 },
          { scaleX: 1, duration: 6, ease: "none" },
        );
      }
      return;
    }

    // Transition Logic
    const prev = prevIndexRef.current;
    const current = activeIndex;

    if (prev === current) return;
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) {
      prevIndexRef.current = current;
      return;
    }

    const oldImg = desktopImgRefs.current[prev];
    const oldContent = desktopContentRefs.current[prev];
    const newImg = desktopImgRefs.current[current];
    const newContent = desktopContentRefs.current[current];

    // Animate OLD out
    if (oldImg) {
      gsap.killTweensOf(oldImg);
      gsap.to(oldImg, {
        scale: 1.06,
        xPercent: -2,
        opacity: 0,
        duration: 0.7,
        ease: "power2.in",
      });
    }
    if (oldContent) {
      gsap.killTweensOf(oldContent);
      gsap.to(oldContent, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    // Animate NEW in
    if (newImg) {
      gsap.killTweensOf(newImg);
      gsap.set(newImg, {
        xPercent: 0,
        opacity: 0,
        scale: 1.08,
        yPercent: 4,
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.to(newImg, {
        clipPath: "inset(0 0% 0 0)",
        scale: 1.02,
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        onComplete: () => {
          // Start Ken Burns for the new active image
          gsap.to(newImg, {
            scale: 1.06,
            duration: 9,
            ease: "none",
            repeat: -1,
            yoyo: true,
          });
        },
      });
    }
    if (newContent) {
      gsap.killTweensOf(newContent);
      gsap.set(newContent, { opacity: 0, y: 20 });
      gsap.to(newContent, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
      });
    }

    // Animate Progress Bars
    if (desktopProgressRefs.current[prev]) {
      gsap.killTweensOf(desktopProgressRefs.current[prev]);
      gsap.set(desktopProgressRefs.current[prev], { scaleX: 0 });
    }
    if (desktopProgressRefs.current[current]) {
      gsap.killTweensOf(desktopProgressRefs.current[current]);
      gsap.fromTo(
        desktopProgressRefs.current[current],
        { scaleX: 0 },
        { scaleX: 1, duration: 6, ease: "none" },
      );
    }

    prevIndexRef.current = current;
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="div-header mb-12 max-w-3xl lg:mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Nine businesses.
            <br />
            One growing Sampan world.
          </h2>
        </div>

        {/* ============================================================ */}
        {/* MOBILE/TABLET LAYOUT (Horizontal Nav + Active Image)         */}
        {/* ============================================================ */}
        <div className="lg:hidden">
          {/* Horizontal Scroll Nav */}
          <div className="mb-8 flex gap-8 overflow-x-auto pb-4 -mx-[5vw] px-[5vw] snap-x">
            {divisions.map((div, i) => (
              <button
                key={div.num}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 text-sm font-medium tracking-wide transition-colors whitespace-nowrap snap-start ${
                  activeIndex === i ? "text-emerald-500" : "text-neutral-400"
                }`}
              >
                <span className="font-mono mr-2">{div.num}</span>
                {div.shortTitle}
              </button>
            ))}
          </div>

          {/* Active Image Stage */}
          <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-neutral-950 rounded-sm">
            {divisions.map((div, i) => {
              const Icon = div.Icon;
              const isActive = activeIndex === i;
              return (
                <div
                  key={div.num}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <Image
                    src={div.image}
                    alt={div.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs tracking-widest text-white/70">
                        {div.num} / 09
                      </span>
                      <Icon
                        className="h-10 w-10 text-white/80"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="max-w-md">
                      <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.95] tracking-tight text-white">
                        {div.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-white/70">
                        {div.oneLiner}
                      </p>
                      <Link
                        href={div.href}
                        className="group/cta mt-8 inline-flex items-center gap-5 border-b border-white/30 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400"
                      >
                        {div.cta}
                        <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (Interactive Table of Contents + Reveal)       */}
        {/* ============================================================ */}
        <div className="desktop-layout hidden lg:grid lg:grid-cols-[5fr_7fr] lg:gap-12 lg:h-[min(72vh,760px)] lg:min-h-[680px]">
          {/* LEFT: LIST */}
          <div className="flex flex-col justify-center h-full">
            {divisions.map((div, i) => {
              const isActive = activeIndex === i;
              return (
                <Link
                  key={div.num}
                  href={div.href}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="desktop-list-item group relative border-t border-neutral-200 py-4 last:border-b flex items-center gap-5"
                >
                  <span
                    className={`font-mono text-xs tracking-widest w-8 transition-colors duration-300 ${isActive ? "text-emerald-500" : "text-neutral-400 group-hover:text-neutral-600"}`}
                  >
                    {div.num}
                  </span>

                  {/* Progress / Line Wrapper */}
                  <div className="relative h-px w-12 bg-neutral-200 overflow-hidden">
                    <div
                      ref={(el) => {
                        if (el) desktopProgressRefs.current[i] = el;
                      }}
                      className="absolute inset-0 bg-emerald-500 origin-left scale-x-0"
                    />
                  </div>

                  <h3
                    className={`text-xl font-semibold tracking-tight transition-all duration-300 ${isActive ? "translate-x-1.5 text-neutral-950" : "text-neutral-400 group-hover:text-neutral-800 group-hover:translate-x-0"}`}
                  >
                    {div.shortTitle}
                  </h3>

                  <FiArrowRight
                    className={`ml-auto h-5 w-5 transition-all duration-500 ${isActive ? "translate-x-0 text-emerald-500 opacity-100" : "-translate-x-4 text-neutral-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT: LARGE IMAGE STAGE */}
          <div className="image-stage relative h-full w-full overflow-hidden bg-neutral-950 rounded-sm">
            {/* Subtle Film Grain */}
            <div
              className="pointer-events-none absolute inset-0 z-[100] opacity-[0.02] mix-blend-multiply"
              aria-hidden="true"
            >
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>

            {/* Parallax Wrapper (One ScrollTrigger controls this) */}
            <div className="parallax-wrapper absolute inset-0 h-[120%] -top-[10%]">
              {divisions.map((div, i) => {
                const Icon = div.Icon;
                return (
                  <div
                    key={div.num}
                    ref={(el) => {
                      if (el) desktopImgRefs.current[i] = el;
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <Image
                      src={div.image}
                      alt={div.title}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />

                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Content Over Image */}
                    <div
                      ref={(el) => {
                        if (el) desktopContentRefs.current[i] = el;
                      }}
                      className="absolute inset-0 flex flex-col justify-between p-10 lg:p-12"
                    >
                      {/* Top: Number & Icon */}
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs tracking-widest text-white/70">
                          {div.num} / 09
                        </span>
                        <Icon
                          className="h-10 w-10 text-white/80"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Bottom: Title, One-liner & CTA */}
                      <div className="max-w-md">
                        <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.95] tracking-tight text-white">
                          {div.title}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/70">
                          {div.oneLiner}
                        </p>

                        <Link
                          href={div.href}
                          className="group/cta mt-8 inline-flex items-center gap-5 border-b border-white/30 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400"
                        >
                          {div.cta}
                          <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
