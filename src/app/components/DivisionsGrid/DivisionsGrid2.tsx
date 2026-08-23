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
    subTitle: "& Land Investment",
    oneLiner: "Own land, not just visit it.",
    cta: "Explore Real Estate",
    href: "#real-estate",
    image: "/images.jpg", // Replace with your actual images
    Icon: FiLayers,
  },
  {
    num: "02",
    title: "Hospitality, Resort & Highway Travel",
    shortTitle: "Hospitality",
    subTitle: "Resort & Highway Travel",
    oneLiner: "Stay, celebrate, and unwind — on the highway and beyond.",
    cta: "Explore Hospitality",
    href: "#hospitality",
    image: "/images.jpg",
    Icon: FiMoon,
  },
  {
    num: "03",
    title: "Golf Zone",
    shortTitle: "Golf Zone",
    subTitle: "Premium Golf & Leisure",
    oneLiner: "Bangladesh's first full golf destination, in the making.",
    cta: "Explore Golf",
    href: "#golf",
    image: "/images.jpg",
    Icon: FiFlag,
  },
  {
    num: "04",
    title: "Professional Education",
    shortTitle: "Education",
    subTitle: "Professional Education",
    oneLiner: "UK-recognized courses, taught close to home.",
    cta: "Explore Education",
    href: "#education",
    image: "/images.jpg",
    Icon: FiBookOpen,
  },
  {
    num: "05",
    title: "Agro & Fresh Produce",
    shortTitle: "Agro",
    subTitle: "& Fresh Produce",
    oneLiner: "From our farm to your table.",
    cta: "Explore Agro",
    href: "#agro",
    image: "/images.jpg",
    Icon: FiSun,
  },
  {
    num: "06",
    title: "Retail Shop & Super Shop",
    shortTitle: "Retail",
    subTitle: "Shop & Super Shop",
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
    subTitle: "Manufacturing & Industrial",
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
    subTitle: "Fuel & Mobility",
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
    subTitle: "Defense & Security",
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

export default function DivisionsGrid2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Desktop Floating Image Refs
  const floatingWrapperRef = useRef<HTMLDivElement>(null);
  const floatingParallaxRef = useRef<HTMLDivElement>(null);
  const desktopImgRefs = useRef<HTMLDivElement[]>([]);
  const rowRefs = useRef<HTMLAnchorElement[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* ====== GSAP CONTEXT FOR SCROLL & INIT ANIMATIONS ====== */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".div-header > *", ".desktop-row", ".mobile-row"], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
        gsap.set(".mobile-row-img", { clipPath: "inset(0 0% 0 0)" });
      });

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
          ".desktop-row",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".desktop-list",
              start: "top 80%",
              once: true,
            },
          },
        );

        /* MOBILE ROWS STAGGER ENTRANCE */
        gsap.fromTo(
          ".mobile-row",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".mobile-list",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* MOBILE IMAGE SCROLL REVEALS */
        gsap.utils.toArray<HTMLElement>(".mobile-row-img").forEach((img) => {
          gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)", scale: 1.2 },
            {
              clipPath: "inset(0 0% 0 0)",
              scale: 1,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: { trigger: img, start: "top 85%", once: true },
            },
          );
        });

        /* CUSTOM CURSOR FOLLOW LOGIC */
        const xTo = gsap.quickTo(cursorRef.current, "x", {
          duration: 0.4,
          ease: "power3",
        });
        const yTo = gsap.quickTo(cursorRef.current, "y", {
          duration: 0.4,
          ease: "power3",
        });

        const imgXTo = gsap.quickTo(floatingParallaxRef.current, "x", {
          duration: 1.2,
          ease: "power3",
        });
        const imgYTo = gsap.quickTo(floatingParallaxRef.current, "y", {
          duration: 1.2,
          ease: "power3",
        });

        // Smooth Y tracking for the image wrapper to follow the hovered row
        const wrapperYTo = gsap.quickTo(floatingWrapperRef.current, "y", {
          duration: 0.8,
          ease: "expo.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
          xTo(e.clientX);
          yTo(e.clientY);

          // Parallax effect on the floating image
          const xRel = (e.clientX - window.innerWidth / 2) * 0.02;
          const yRel = (e.clientY - window.innerHeight / 2) * 0.02;
          imgXTo(xRel);
          imgYTo(yRel);

          // Smooth Y tracking for the floating wrapper
          if (listRef.current && floatingWrapperRef.current) {
            const listRect = listRef.current.getBoundingClientRect();
            const targetY =
              e.clientY -
              listRect.top -
              floatingWrapperRef.current.offsetHeight / 2;
            wrapperYTo(targetY);
          }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      });
    },
    { scope: containerRef },
  );

  /* ====== DESKTOP HOVER REVEAL LOGIC ====== */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isReduced) return;

    const wrapper = floatingWrapperRef.current;
    if (!wrapper) return;

    if (hoveredIndex === null) {
      // Hide image and reset text rows
      gsap.to(wrapper, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });

      rowRefs.current.forEach((row) => {
        if (!row) return;
        gsap.to(row, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" });
        gsap.to(row.querySelector(".row-meta"), {
          opacity: 0,
          y: 10,
          duration: 0.4,
        });
        gsap.to(row.querySelector(".row-arrow"), {
          opacity: 0,
          x: -20,
          duration: 0.4,
        });
      });
    } else {
      // Show image wrapper
      gsap.to(wrapper, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "expo.out",
      });
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "expo.out",
      });

      // Crossfade images
      desktopImgRefs.current.forEach((img, i) => {
        if (!img) return;
        if (i === hoveredIndex) {
          gsap.killTweensOf(img);
          gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)", scale: 1.15, opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              scale: 1,
              opacity: 1,
              duration: 1.0,
              ease: "expo.out",
            },
          );
        } else {
          gsap.killTweensOf(img);
          gsap.to(img, {
            clipPath: "inset(0 0% 0 100%)", // Wipe out to the left
            scale: 1.05,
            opacity: 0,
            duration: 0.7,
            ease: "power3.in",
          });
        }
      });

      // Animate Text Rows
      rowRefs.current.forEach((r, i) => {
        if (!r) return;
        if (i === hoveredIndex) {
          gsap.to(r, { opacity: 1, x: 10, duration: 0.6, ease: "expo.out" });
          gsap.to(r.querySelector(".row-meta"), {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "expo.out",
          });
          gsap.to(r.querySelector(".row-arrow"), {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "expo.out",
          });
        } else {
          gsap.to(r, { opacity: 0.25, x: 0, duration: 0.6, ease: "expo.out" });
          gsap.to(r.querySelector(".row-meta"), {
            opacity: 0,
            y: 10,
            duration: 0.3,
          });
          gsap.to(r.querySelector(".row-arrow"), {
            opacity: 0,
            x: -20,
            duration: 0.3,
          });
        }
      });
    }
  }, [hoveredIndex]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="div-header mb-12 max-w-3xl lg:mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Nine businesses.
            <br />
            One growing Sampan world.
          </h2>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (Full-Width Typography + Floating Reveal)      */}
        {/* ============================================================ */}
        <div
          ref={listRef}
          className="desktop-list relative hidden lg:block min-h-[80vh]"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Floating Image Stage */}
          <div
            ref={floatingWrapperRef}
            className="pointer-events-none absolute right-[2%] top-0 z-0 h-[380px] w-[520px] opacity-0 will-change-transform"
            style={{ transformOrigin: "right center" }}
          >
            <div
              ref={floatingParallaxRef}
              className="relative h-full w-full will-change-transform"
            >
              {divisions.map((div, i) => (
                <div
                  key={div.num}
                  ref={(el) => {
                    if (el) desktopImgRefs.current[i] = el;
                  }}
                  className="absolute inset-0 overflow-hidden rounded-sm bg-neutral-900"
                  style={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                >
                  <Image
                    src={div.image}
                    alt={div.title}
                    fill
                    sizes="520px"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Typography Rows */}
          <div className="relative z-10 flex flex-col justify-between gap-2 py-4">
            {divisions.map((div, i) => {
              const Icon = div.Icon;
              return (
                <Link
                  key={div.num}
                  href={div.href}
                  ref={(el) => {
                    if (el) rowRefs.current[i] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onFocus={() => setHoveredIndex(i)}
                  className="desktop-row group relative flex items-center gap-6 border-b border-neutral-200/50 py-6"
                  style={{ transformOrigin: "left center" }}
                >
                  <span className="font-mono text-sm tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-emerald-500">
                    {div.num}
                  </span>

                  <div className="flex flex-col">
                    <h3 className="flex items-baseline gap-4 text-[clamp(3rem,7vw,7.5rem)] font-medium leading-none tracking-[-0.04em] text-neutral-900 transition-all duration-500">
                      {div.shortTitle}
                      {div.subTitle && (
                        <span className="text-[clamp(1rem,2vw,2rem)] font-light tracking-wider text-neutral-500">
                          {div.subTitle}
                        </span>
                      )}
                    </h3>

                    {/* Hidden metadata */}
                    <div
                      className="row-meta mt-3 flex items-center gap-8 opacity-0"
                      style={{ transform: "translateY(10px)" }}
                    >
                      <p className="text-sm leading-6 text-neutral-600">
                        {div.oneLiner}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="row-arrow ml-auto flex items-center gap-4 opacity-0"
                    style={{ transform: "translateX(-20px)" }}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600">
                      {div.cta}
                    </span>
                    <FiArrowRight className="h-8 w-8 text-neutral-900" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE/TABLET LAYOUT (Vertical Editorial List)               */}
        {/* ============================================================ */}
        <div className="mobile-list flex flex-col gap-12 lg:hidden">
          {divisions.map((div, i) => {
            const Icon = div.Icon;
            return (
              <Link
                key={div.num}
                href={div.href}
                className="mobile-row group block"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono text-xs tracking-widest text-neutral-500">
                    {div.num}
                  </span>
                  <div className="h-px flex-1 bg-neutral-300" />
                  <Icon
                    className="h-5 w-5 text-neutral-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Mobile Image with Scroll Reveal */}
                <div className="mobile-row-img relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-900">
                  <Image
                    src={div.image}
                    alt={div.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="mt-4">
                  <h3 className="text-3xl font-medium tracking-tight text-neutral-900">
                    {div.shortTitle}
                  </h3>
                  {div.subTitle && (
                    <span className="text-lg font-light text-neutral-500">
                      {div.subTitle}
                    </span>
                  )}
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {div.oneLiner}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    {div.cta}
                    <FiArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Custom "EXPLORE" Cursor (Desktop Only) */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-20 w-20 scale-0 items-center justify-center rounded-full bg-neutral-900 text-white opacity-0 mix-blend-difference lg:flex"
        style={{ translate: "-50% -50%" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Explore
        </span>
      </div>
    </section>
  );
}
