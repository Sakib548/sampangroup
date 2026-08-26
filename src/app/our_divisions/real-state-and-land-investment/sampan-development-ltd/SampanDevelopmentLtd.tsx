"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const buildCategories = [
  { title: "LAND", desc: "Strategic land acquisition & survey." },
  { title: "COMMERCIAL", desc: "State-of-the-art business spaces." },
  { title: "RESIDENTIAL", desc: "Premium living environments." },
  { title: "DEVELOPMENT", desc: "Economical & sustainable communities." },
];

const atlasProjects = [
  { num: "01", name: "Sampan Metro Square", location: "Ashulia" },
  { num: "02", name: "Sampan Motalib Skyline", location: "Dhaka" },
  { num: "03", name: "Sampan Nexus", location: "Mawna" },
  {
    num: "04",
    name: "Sampan Residency Tower 1 & 2",
    location: "Express Highway Inn",
  },
];

const journeySteps = [
  {
    num: "01",
    title: "LAND",
    desc: "Identifying high-growth corridors and securing prime parcels for future development.",
  },
  {
    num: "02",
    title: "PLANNING",
    desc: "Architectural master planning, feasibility studies, and regulatory alignment.",
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    desc: "Infrastructure integration, utility planning, and stakeholder coordination.",
  },
  {
    num: "04",
    title: "CONSTRUCTION",
    desc: "Precision building with quality control at every stage of the process.",
  },
  {
    num: "05",
    title: "DELIVERY",
    desc: "Handover, documentation, and long-term asset management.",
  },
];

const locations = [
  { name: "ASHULIA", project: "Sampan Metro Square" },
  { name: "MAWNA", project: "Sampan Nexus" },
  { name: "EXPRESS HIGHWAY", project: "Residency Tower 1 & 2" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function SampanDevelopmentLtd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const atlasImgRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);

  const [activeAtlas, setActiveAtlas] = useState(0);
  const [activeBuild, setActiveBuild] = useState(-1);
  const [activeCat, setActiveCat] = useState(-1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  /* --- Atlas: GSAP-powered directional wipe --- */
  const handleAtlasSwitch = useCallback(
    (index: number) => {
      if (index === activeAtlas || !atlasImgRef.current) return;
      const container = atlasImgRef.current;
      const current = container.querySelector(
        ".atlas-active",
      ) as HTMLElement | null;
      const next = container.querySelector(
        `.atlas-img-${index}`,
      ) as HTMLElement | null;

      if (current) {
        gsap.to(current, {
          clipPath: "inset(0 0% 0 100%)",
          duration: 0.7,
          ease: "power3.inOut",
          onComplete() {
            current.classList.remove("atlas-active");
            gsap.set(current, { clipPath: "inset(0 100% 0 0)", zIndex: 0 });
          },
        });
      }
      if (next) {
        gsap.set(next, { zIndex: 10 });
        gsap.fromTo(
          next,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.8,
            ease: "power3.inOut",
            onComplete() {
              next.classList.add("atlas-active");
            },
          },
        );
      }
      setActiveAtlas(index);
    },
    [activeAtlas],
  );

  /* --- Magnetic CTA Effect --- */
  const handleMagneticMove = useCallback((e: React.MouseEvent) => {
    if (!magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(magneticRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleMagneticLeave = useCallback(() => {
    if (!magneticRef.current) return;
    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  /* ---------------------------------------------------------------- */
  /*  GSAP ANIMATIONS                                                   */
  /* ---------------------------------------------------------------- */

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ======== HERO ENTRANCE ======== */
        const ht = gsap.timeline({ delay: 0.4 });
        ht.fromTo(
          ".h-eyebrow",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        )
          .fromTo(
            ".h-line-1",
            { yPercent: 120, rotateX: -45 },
            { yPercent: 0, rotateX: 0, duration: 1.4, ease: "power4.out" },
            "-=0.6",
          )
          .fromTo(
            ".h-line-2",
            { yPercent: 120, rotateX: -45 },
            { yPercent: 0, rotateX: 0, duration: 1.4, ease: "power4.out" },
            "-=1.1",
          )
          .fromTo(
            ".h-label",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.9",
          )
          .fromTo(
            ".h-img-mask",
            {
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
              xPercent: 10,
            },
            {
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
              xPercent: 0,
              duration: 1.6,
              ease: "power3.inOut",
            },
            "-=1.2",
          )
          .fromTo(
            ".h-giant-num",
            { opacity: 0, scale: 0.8 },
            { opacity: 0.06, scale: 1, duration: 2, ease: "power2.out" },
            "-=1.4",
          )
          .fromTo(
            ".h-cta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6",
          );

        /* ======== HERO MULTI-LAYER SCROLL ======== */
        gsap.to(".h-img-mask", {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".sdl-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
        gsap.to(".h-typo-col", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".sdl-hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        gsap.to(".h-giant-num", {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: ".sdl-hero",
            start: "top top",
            end: "bottom top",
            scrub: 2.5,
          },
        });

        /* ======== WHAT WE BUILD (Text Mask Reveal) ======== */
        gsap.utils.toArray<HTMLElement>(".bw-row").forEach((row) => {
          const word = row.querySelector(".bw-word") as HTMLElement;
          const line = row.querySelector(".bw-accent") as HTMLElement;
          const desc = row.querySelector(".bw-desc") as HTMLElement;

          gsap.fromTo(
            word,
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 90%", once: true },
            },
          );
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.8,
              delay: 0.1, // <-- Moved outside of scrollTrigger
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                once: true,
              },
              transformOrigin: "left center",
            },
          );

          if (desc) {
            gsap.fromTo(
              desc,
              { y: 10, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                delay: 0.2,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 85%",
                  once: true,
                },
              },
            );
          }
        });

        /* ======== STICKY STORY PARALLAX ======== */
        gsap.to(".story-parallax-img", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".story-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".story-rev").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".story-container",
                start: "top 30%",
                once: true,
              },
            },
          );
        });

        /* ======== ATLAS ENTRIES ======== */
        gsap.utils.toArray<HTMLElement>(".at-item").forEach((item, i) => {
          gsap.fromTo(
            item,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".atlas-sec",
                start: "top 70%",
                once: true,
              },
            },
          );
        });

        /* ======== LAND SHARE SVG DRAW ======== */
        const arcs = gsap.utils.toArray<SVGPathElement>(".ls-arc");
        arcs.forEach((arc) => {
          const length = arc.getTotalLength();
          gsap.set(arc, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(arc, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: ".ls-sec", start: "top 65%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>(".ls-rev").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            },
          );
        });

        /* ======== HORIZONTAL SCROLL (Desktop) ======== */
        mm.add("(min-width: 1024px)", () => {
          const track = horizontalRef.current?.querySelector(
            ".h-track",
          ) as HTMLElement | null;
          const section = horizontalRef.current;
          if (track && section) {
            const totalScroll = track.scrollWidth - window.innerWidth;
            gsap.to(track, {
              x: -totalScroll,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScroll}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });

        /* ======== CATEGORIES ======== */
        gsap.utils.toArray<HTMLElement>(".cat-row").forEach((row, i) => {
          gsap.fromTo(
            row,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.12,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 90%", once: true },
            },
          );
        });

        /* ======== LOCATION DOTS ======== */
        gsap.utils.toArray<HTMLElement>(".loc-dot").forEach((dot, i) => {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.25,
              ease: "back.out(3)",
              scrollTrigger: {
                trigger: ".loc-sec",
                start: "top 70%",
                once: true,
              },
            },
          );
        });

        /* ======== PORTFOLIO NAV ======== */
        gsap.utils.toArray<HTMLElement>(".pn-row").forEach((row, i) => {
          gsap.fromTo(
            row,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 95%", once: true },
            },
          );
        });

        /* ======== FINAL CTA ======== */
        gsap.utils.toArray<HTMLElement>(".fc-word").forEach((line, i) => {
          gsap.fromTo(
            line,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".fc-sec",
                start: "top 80%",
                once: true,
              },
            },
          );
        });
        gsap.fromTo(
          ".fc-actions",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: ".fc-sec", start: "top 80%", once: true },
          },
        );
      });

      /* ======== REDUCED MOTION ======== */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".h-eyebrow",
            ".h-line-1",
            ".h-line-2",
            ".h-label",
            ".h-img-mask",
            ".h-giant-num",
            ".h-cta",
            ".bw-word",
            ".bw-accent",
            ".bw-desc",
            ".story-rev",
            ".at-item",
            ".ls-arc",
            ".ls-rev",
            ".cat-row",
            ".loc-dot",
            ".pn-row",
            ".fc-word",
            ".fc-actions",
          ],
          {
            opacity: 1,
            y: 0,
            yPercent: 0,
            xPercent: 0,
            clipPath: "none",
            scale: 1,
            rotation: 0,
            scaleX: 1,
            rotateX: 0,
            strokeDashoffset: 0,
          },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  /* ---------------------------------------------------------------- */
  /*  RENDER                                                             */
  /* ---------------------------------------------------------------- */

  return (
    <>
      {/* Global Styles: Hide Scrollbar for Awwwards Vibe */}
      <style jsx global>{`
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Film Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-multiply"
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

      <main
        ref={containerRef}
        className={`overflow-x-hidden bg-white text-neutral-950 transition-opacity duration-1000 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* ====== PAGE INDICATOR ====== */}
        <div
          className="pointer-events-none fixed bottom-8 left-8 z-50 hidden mix-blend-difference lg:block"
          aria-hidden="true"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white">
            SDL <span className="text-white/50">01 / 08</span>
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. EDITORIAL SPLIT-PLANE HERO                                 */}
        {/* ============================================================ */}
        <section className="sdl-hero relative min-h-screen overflow-hidden bg-black text-white">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            {/* Left: Typography Zone */}
            <div className="h-typo-col relative col-span-1 flex flex-col justify-center px-8 pt-36 pb-24 lg:col-span-7 lg:px-20 lg:py-0">
              <span className="h-giant-num pointer-events-none absolute -left-10 top-1/2 -z-10 -translate-y-1/2 select-none font-bold leading-none text-white opacity-0 mix-blend-overlay text-[clamp(16rem,32vw,30rem)]">
                01
              </span>

              <p className="h-eyebrow relative z-10 mb-12 text-[11px] font-medium uppercase tracking-[0.4em] text-emerald-400">
                Real Estate &amp; Land Investment
              </p>

              <div
                className="relative z-10 overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <h1
                  className="text-[clamp(3.5rem,9vw,10rem)] font-black leading-[0.84] tracking-[-0.05em]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span
                    className="h-line-1 block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    BUILDING
                  </span>
                  <span
                    className="h-line-2 block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    POSSIBILITIES<span className="text-emerald-500">.</span>
                  </span>
                </h1>
              </div>

              <div className="h-label relative z-10 mt-12 flex items-center gap-8">
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  Sampan Development Ltd
                </span>
                <span className="h-px w-20 bg-white/15" />
              </div>

              <div className="h-cta relative z-10 mt-16">
                <Link
                  href="#atlas"
                  className="group inline-flex items-center gap-5 border-b-2 border-white/30 pb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-400"
                >
                  Explore Projects
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Right: Image Zone (Hard Diagonal Cut) */}
            <div className="relative col-span-1 lg:col-span-5">
              <div className="h-img-mask relative h-[55vh] w-full lg:h-screen lg:clip-path-[polygon(25%_0,_100%_0,_100%_100%,_0%_100%)]">
                <Image
                  src="/images.jpg"
<<<<<<< HEAD
                  alt="Sampan Development Ltd — Architectural Perspective"
=======
                  alt="Sampan Development Ltd -  Architectural Perspective"
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
                  fill
                  priority
                  sizes="(min-width:1024px)42vw,100vw"
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Scroll
            </span>
            <span className="h-12 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 2. WHAT WE BUILD — Interactive Text Mask Index                */}
=======
        {/* 2. WHAT WE BUILD -  Interactive Text Mask Index                */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="relative bg-white py-36 lg:py-52">
          <div className="mx-auto max-w-[100%] px-8 lg:px-20">
            <p className="mb-24 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-400">
              01 / What We Build
            </p>

            <div onMouseLeave={() => setActiveBuild(-1)}>
              {buildCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="bw-row group cursor-pointer border-t border-neutral-200 py-12 lg:py-16"
                  onMouseEnter={() => setActiveBuild(i)}
                  onClick={() => setActiveBuild(activeBuild === i ? -1 : i)}
                >
                  <div className="overflow-hidden">
                    <span
                      className="bw-word block text-[clamp(3rem,8.5vw,9.5rem)] font-black leading-[0.84] tracking-[-0.05em] transition-all duration-700 ease-out"
                      style={{
                        backgroundImage: "url('/images.jpg')",
                        backgroundSize: activeBuild === i ? "120%" : "100%",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: activeBuild === i ? "transparent" : "#0a0a0a",
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  <p
                    className={`bw-desc mt-4 max-w-md text-sm text-neutral-500 transition-all duration-500 ${activeBuild === i ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                  >
                    {cat.desc}
                  </p>
                  <div
                    className={`bw-accent mt-6 h-[2px] w-full origin-left scale-x-0 bg-emerald-600 transition-transform duration-700 ease-out ${activeBuild === i ? "scale-x-100" : ""}`}
                  />
                </div>
              ))}
              <div className="border-t border-neutral-200" />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 3. SDL STORY — Sticky Text + Parallax Image                  */}
=======
        {/* 3. SDL STORY -  Sticky Text + Parallax Image                  */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="relative bg-neutral-50">
          <div className="story-container relative h-[200vh]">
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
              <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 items-center gap-8 px-8 lg:gap-16 lg:px-20">
                {/* Text Column */}
                <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
                  <div className="story-rev">
                    <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                      The Company
                    </p>
                    <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-black leading-[1.05] tracking-[-0.03em]">
                      Sampan
                      <br />
                      Development
                    </h2>
                  </div>
                  <div className="story-rev mt-10 space-y-2 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-200">
                    <p>Land.</p>
                    <p>Development.</p>
                    <p>Opportunity.</p>
                  </div>
                  <p className="story-rev mt-12 max-w-sm text-[14px] leading-[1.8] text-neutral-500">
                    SDL operates across land sales, land-share investments,
                    commercial building construction, residential development,
                    and economical housing—creating value at every stage.
                  </p>
                  <div className="story-rev mt-10">
                    <Link
                      href="#atlas"
                      className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-900 transition-colors hover:text-emerald-700"
                    >
                      View Development Atlas
                      <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>

                {/* Image Column (Parallax) */}
                <div className="relative col-span-12 hidden h-[70vh] overflow-hidden lg:col-span-7 lg:block">
                  <div className="story-parallax-img absolute inset-0 h-[120%] w-full -top-[10%]">
                    <Image
                      src="/images.jpg"
                      alt="SDL development overview"
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px)58vw,100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 4. DEVELOPMENT ATLAS — Wipe Transition Portfolio             */}
=======
        {/* 4. DEVELOPMENT ATLAS -  Wipe Transition Portfolio             */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section
          id="atlas"
          className="atlas-sec relative bg-[#080808] py-36 text-white lg:py-52"
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-8 lg:gap-0 lg:px-20">
            {/* Left: Project List (40%) */}
            <div className="col-span-12 lg:col-span-5 lg:border-r lg:border-white/[0.06] lg:pr-16">
              <p className="mb-20 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                02 / Development Atlas
              </p>
              <div className="flex flex-col">
                {atlasProjects.map((p, i) => (
                  <button
                    key={p.num}
                    className={`at-item group border-t border-white/[0.06] py-8 text-left transition-colors duration-500 lg:py-10 ${activeAtlas === i ? "text-emerald-400" : "text-white hover:text-white/80"}`}
                    onClick={() => handleAtlasSwitch(i)}
                    onMouseEnter={() => handleAtlasSwitch(i)}
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`text-sm font-mono transition-colors duration-500 ${activeAtlas === i ? "text-emerald-500" : "text-white/20"}`}
                      >
                        {p.num}
                      </span>
                      <div>
                        <h3 className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold tracking-[-0.01em]">
                          {p.name}
                        </h3>
                        <p className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/25">
                          <FiMapPin className="h-3 w-3" /> {p.location}
                        </p>
                      </div>
                    </div>
                    {/* Progress indicator */}
                    <div className="mt-6 h-[1px] w-full bg-white/[0.04]">
                      <div
                        className={`h-full bg-emerald-500 transition-all duration-700 ease-out ${activeAtlas === i ? "w-full" : "w-0"}`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Image Stage (60%) */}
            <div
              ref={atlasImgRef}
              className="relative col-span-12 mt-12 aspect-[16/10] overflow-hidden lg:col-span-7 lg:mt-0 lg:aspect-auto lg:h-[78vh]"
            >
              {atlasProjects.map((p, i) => (
                <div
                  key={p.num}
                  className={`atlas-img-${i} absolute inset-0 ${i === 0 ? "atlas-active" : ""}`}
                  style={{
                    clipPath: i === 0 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                    zIndex: i === 0 ? 10 : 0,
                  }}
                >
                  <Image
                    src="/images.jpg"
                    alt={p.name}
                    fill
                    className="object-cover scale-110"
                    sizes="(min-width:1024px)58vw,100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
                    <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/30">
                      {p.location}
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 5. THE LAND SHARE — Dark Statement with SVG Line Draw        */}
=======
        {/* 5. THE LAND SHARE -  Dark Statement with SVG Line Draw        */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="ls-sec relative overflow-hidden bg-[#050505] py-44 text-white lg:py-60">
          <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-12 px-8 lg:px-20">
            {/* Left: Typography */}
            <div className="col-span-12 lg:col-span-6">
              <p className="ls-rev mb-12 text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-400/60">
                03 / Investment Model
              </p>
              <h2 className="ls-rev text-[clamp(4rem,10vw,10rem)] font-black leading-[0.82] tracking-[-0.05em]">
                LAND
                <br />
                <span className="text-emerald-500">SHARE</span>
              </h2>
              <p className="ls-rev mt-12 max-w-md text-[14px] leading-[1.85] text-white/30">
                SDL pioneered the Land Share investment model within the Sampan
                Group—allowing investors to own a fraction of prime real estate
                with manageable capital entry.
              </p>
              <div className="ls-rev mt-14">
                <Link
                  href="/investment-portfolio/land-share"
                  className="group inline-flex items-center gap-5 border border-white/15 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 transition-all duration-500 hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  Explore Investment Portfolio
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Right: Architectural Radial SVG with Line Draw Effect */}
            <div className="col-span-12 flex items-center justify-center lg:col-span-6">
              <div className="relative h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]">
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines */}
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="60"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="200"
                    y1="10"
                    x2="200"
                    y2="390"
                    stroke="rgba(255,255,255,0.02)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="10"
                    y1="200"
                    x2="390"
                    y2="200"
                    stroke="rgba(255,255,255,0.02)"
                    strokeWidth="0.5"
                  />

                  {/* Emerald Arcs (Draw-in) */}
                  <path
                    className="ls-arc"
                    d="M 200 10 A 190 190 0 0 1 390 200"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <path
                    className="ls-arc"
                    d="M 390 200 A 190 190 0 0 1 200 390"
                    stroke="#10b981"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    className="ls-arc"
                    d="M 200 390 A 190 190 0 0 1 10 200"
                    stroke="#10b981"
                    strokeWidth="0.75"
                    opacity="0.15"
                  />

                  {/* Nodes */}
                  <circle
                    cx="200"
                    cy="200"
                    r="4"
                    fill="#10b981"
                    opacity="0.8"
                  />
                  <circle cx="200" cy="10" r="3" fill="#10b981" opacity="0.7" />
                  <circle
                    cx="390"
                    cy="200"
                    r="3"
                    fill="#10b981"
                    opacity="0.7"
                  />
                  <circle
                    cx="200"
                    cy="390"
                    r="3"
                    fill="#10b981"
                    opacity="0.7"
                  />
                  <circle cx="10" cy="200" r="3" fill="#10b981" opacity="0.7" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/15">
                      Fractional
                    </p>
                    <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-emerald-500/40">
                      Ownership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 6. DEVELOPMENT IN MOTION — Horizontal Scroll                  */}
=======
        {/* 6. DEVELOPMENT IN MOTION -  Horizontal Scroll                  */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section ref={horizontalRef} className="relative bg-white">
          {/* Mobile Header */}
          <div className="flex items-center border-b border-neutral-200 py-16 lg:hidden">
            <div className="mx-auto w-full max-w-[1400px] px-8">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
                04 / Development in Motion
              </p>
              <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-black tracking-[-0.03em]">
                From Land to Delivery.
              </h2>
            </div>
          </div>

          <div className="h-track flex lg:h-screen">
            {journeySteps.map((s, i) => (
              <div
                key={s.num}
                className="relative w-screen flex-shrink-0 lg:w-screen"
              >
                <div className="grid h-full grid-cols-1 lg:grid-cols-2">
                  {/* Text panel */}
                  <div className="flex flex-col justify-center px-8 py-20 lg:px-20 lg:py-0">
                    <p className="hidden text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-400 lg:block">
                      04 / Development in Motion
                    </p>
                    <span className="mt-8 block text-[7rem] font-black leading-none text-neutral-100 lg:text-[12rem]">
                      {s.num}
                    </span>
                    <h3 className="-mt-6 text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] lg:-mt-12">
                      {s.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-[14px] leading-[1.8] text-neutral-400">
                      {s.desc}
                    </p>
                    <div className="mt-12 flex items-center gap-5">
                      <div className="h-[1px] w-12 bg-emerald-600" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-400">
                        {s.num} / 05
                      </span>
                    </div>
                  </div>
                  {/* Image panel */}
                  <div className="relative h-[50vh] lg:h-full">
                    <Image
                      src="/images.jpg"
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-black/[0.04]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 7. REAL ESTATE CATEGORIES — Frosted Glass Selector            */}
=======
        {/* 7. REAL ESTATE CATEGORIES -  Frosted Glass Selector            */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-white py-36 lg:py-52">
          <div className="mx-auto max-w-[100%] px-8 lg:px-20">
            <p className="mb-24 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-400">
              05 / Real Estate Categories
            </p>

            <div className="relative" onMouseLeave={() => setActiveCat(-1)}>
              {/* Background Image + Frosted Glass */}
              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-700"
                style={{ opacity: activeCat >= 0 ? 1 : 0 }}
              >
                <Image
                  src="/images.jpg"
                  alt=""
                  fill
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />
              </div>

              <div className="relative z-10">
                {buildCategories.map((c, i) => (
                  <div
                    key={c.title}
                    className={`cat-row group cursor-pointer border-t border-neutral-200 py-10 transition-colors duration-500 lg:py-14 ${activeCat === i ? "text-emerald-600" : activeCat >= 0 ? "text-neutral-300" : "text-neutral-950"}`}
                    onMouseEnter={() => setActiveCat(i)}
                    onClick={() => setActiveCat(activeCat === i ? -1 : i)}
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-[clamp(2.5rem,7vw,6.5rem)] font-extralight leading-[0.86] tracking-[-0.04em] transition-all duration-700 group-hover:font-black">
                        {c.title}
                      </h3>
                      <FiArrowRight
                        className={`h-6 w-6 transition-all duration-500 ${activeCat === i ? "translate-x-0 opacity-100 text-emerald-600" : "-translate-x-4 opacity-0"}`}
                      />
                    </div>
                    <p className="mt-3 text-[13px] text-neutral-400 transition-all duration-500">
                      {c.desc}
                    </p>
                  </div>
                ))}
                <div className="border-t border-neutral-200" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 8. LOCATION LAYER — Minimalist Architectural Map              */}
=======
        {/* 8. LOCATION LAYER -  Minimalist Architectural Map              */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="loc-sec relative overflow-hidden bg-[#080808] py-36 text-white lg:py-52">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="sdl-loc-grid"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 80 0 L 0 0 0 80"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sdl-loc-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-[1400px] px-8 lg:px-20">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              06 / Locations
            </p>
            <h2 className="mb-24 text-[clamp(2.5rem,4.5vw,4rem)] font-black tracking-[-0.03em]">
              Location Layer
            </h2>

            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {locations.map((loc, i) => (
                <div key={loc.name} className="flex items-start gap-8">
                  <div className="loc-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-700">
<<<<<<< HEAD
                      LOC — {String(i + 1).padStart(2, "0")}
=======
                      LOC -  {String(i + 1).padStart(2, "0")}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight">
                      {loc.name}
                    </h3>
                    <p className="mt-2 text-[13px] text-neutral-500">
                      {loc.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 hidden h-[1px] bg-gradient-to-r from-emerald-600/30 via-emerald-600/10 to-transparent lg:block" />
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 9. INSIDE THE PORTFOLIO — Project Navigation                  */}
=======
        {/* 9. INSIDE THE PORTFOLIO -  Project Navigation                  */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="relative bg-white py-36 lg:py-52">
          <div className="mx-auto max-w-[1400px] px-8 lg:px-20">
            <h2 className="mb-24 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.04em]">
              EXPLORE
              <br />
              THE
              <br />
              PORTFOLIO
            </h2>

            <div>
              {atlasProjects.map((p) => (
                <Link
                  key={p.name}
                  href="#"
                  className="pn-row group flex items-center justify-between border-t border-neutral-200 py-8 transition-all duration-500 hover:bg-neutral-50 hover:pl-4 lg:py-10"
                >
                  <div className="flex items-baseline gap-8">
                    <span className="text-[11px] font-mono text-neutral-300 transition-colors group-hover:text-emerald-600">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-emerald-700">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        {p.location}
                      </p>
                    </div>
                  </div>
                  <FiArrowRight className="h-5 w-5 text-neutral-300 transition-all duration-500 group-hover:translate-x-2 group-hover:text-emerald-600" />
                </Link>
              ))}
              <div className="border-t border-neutral-200" />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
<<<<<<< HEAD
        {/* 10. FINAL CTA — Giant Editorial Footer with Magnetic Button    */}
=======
        {/* 10. FINAL CTA -  Giant Editorial Footer with Magnetic Button    */}
>>>>>>> aef522dae09b0fc347a0c78d64f55c28cd86a0bf
        {/* ============================================================ */}
        <section className="fc-sec relative flex min-h-[80vh] items-center overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-1500 hover:opacity-[0.08]">
            <Image src="/images.jpg" alt="" fill className="object-cover" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 py-32 lg:px-20 lg:py-0">
            <div className="flex flex-col justify-between gap-20 lg:flex-row lg:items-end">
              {/* Typography */}
              <div>
                <h2 className="text-[clamp(3.5rem,10vw,11rem)] font-black leading-[0.86] tracking-[-0.05em] text-white">
                  <span className="fc-word block">READY TO</span>
                  <span className="fc-word block">BUILD</span>
                  <span className="fc-word block">
                    <span className="text-emerald-500">VALUE</span>
                    <span className="text-white/20">?</span>
                  </span>
                </h2>
              </div>

              {/* CTAs with Magnetic Effect */}
              <div className="fc-actions flex flex-col gap-8 lg:items-end">
                <div
                  ref={magneticRef}
                  className="inline-block"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                >
                  <Link
                    href="/contact"
                    className="group/btn flex items-center gap-6 border-b-2 border-white/15 pb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-white/60 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-400"
                  >
                    Project Enquiry
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover/btn:border-emerald-500 group-hover/btn:bg-emerald-500 group-hover/btn:text-white">
                      <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
                <Link
                  href="/investment-portfolio"
                  className="group/btn inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/15 transition-colors duration-400 hover:text-emerald-500"
                >
                  Investment Portfolio
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="fc-actions mt-28 flex items-center justify-between border-t border-white/[0.04] pt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/15">
                Real Estate &amp; Land Investment
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/15">
                Sampan Development Ltd
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
