"use client";

import { useRef, useState, useEffect } from "react";
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
import { Concern } from "@/types/Concern";
import { concerns } from "@/data/concerns";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  BUILD 9 DIVISIONS FROM CONCERNS DATA                             */
/* ------------------------------------------------------------------ */

type Division = {
  num: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  cta: string;
  href: string;
  image: string;
  Icon: typeof FiLayers;
  subConcerns: Concern[];
};

const divisions: Division[] = [
  {
    num: "01",
    title: "Real Estate & Land Investment",
    shortTitle: "Real Estate",
    oneLiner:
      "Land sale, share, condominium and building construction across Bangladesh.",
    cta: "Explore Real Estate",
    href: "https://www.sampangroup.com.bd/sampan-developments-limited",
    image: "/images/brand/sampandevelopmentltd.png",
    Icon: FiLayers,
    subConcerns: concerns.filter(
      (c) => c.category === "Development & Construction",
    ),
  },
  {
    num: "02",
    title: "Hospitality, Resort & Highway Travel",
    shortTitle: "Hospitality",
    oneLiner:
      "Flagship highway inns, resorts, restaurants and club lounges — the most recognized brand nationally.",
    cta: "Explore Hospitality",
    href: "https://www.sampangroup.com.bd/sampan-highway-inn-restaurant-party-centre",
    image: "/images/brand/sampanhighwayinn.png",
    Icon: FiMoon,
    subConcerns: concerns.filter((c) => c.category === "Hospitality & Leisure"),
  },
  {
    num: "03",
    title: "Golf Zone",
    shortTitle: "Golf Zone",
    oneLiner:
      "Professional golf training, dedicated practice zones, and a full resort destination.",
    cta: "Explore Golf",
    href: "#golf",
    image: "/images/brand/agroandgolf.png",
    Icon: FiFlag,
    subConcerns: concerns.filter((c) => c.category === "Golf Zone"),
  },
  {
    num: "04",
    title: "Professional Education",
    shortTitle: "Education",
    oneLiner:
      "UK-recognized CIPS, CMI and international courses — taught close to home.",
    cta: "Explore Education",
    href: "#education",
    image: "/images/brand/lshs.png",
    Icon: FiBookOpen,
    subConcerns: concerns.filter(
      (c) => c.category === "Professional Education",
    ),
  },
  {
    num: "05",
    title: "Agro & Fresh Produce",
    shortTitle: "Agro",
    oneLiner:
      "Bulk sale of vegetables, fruits, flowers, fish and meat — from our farm to your table.",
    cta: "Explore Agro",
    href: "https://www.sampangroup.com.bd/sampan-eco-agro",
    image: "/images/brand/sampanechoagro.png",
    Icon: FiSun,
    subConcerns: concerns.filter((c) => c.category === "Agro & Fresh Produce"),
  },
  {
    num: "06",
    title: "Retail Shop & Super Shop",
    shortTitle: "Retail",
    oneLiner:
      "Premium sweets, confectionery and everyday essentials — online and offline super shops.",
    cta: "Explore Retail",
    href: "https://www.sampangroup.com.bd/sampan-sweet-box",
    image: "/images/brand/sampanretail.png",
    Icon: FiShoppingBag,
    subConcerns: concerns.filter(
      (c) => c.category === "Retail Shop & Super Shop",
    ),
  },
  {
    num: "07",
    title: "Manufacturing & Industrial",
    shortTitle: "Industrial",
    oneLiner:
      "Hollow bricks, tiles, PET bottles, beverages and a dedicated industrial park.",
    cta: "Explore Manufacturing",
    href: "#manufacturing",
    image: "/images/brand/sampanindustrial.png",
    Icon: FiBox,
    // FIX: Safely convert id to string to avoid TS errors and simplify logic
    subConcerns: concerns.filter((c) => {
      const idStr = String(c.id).toLowerCase();
      const nameStr = c.name.toLowerCase();
      return (
        c.category === "Development & Construction" &&
        (idStr.includes("industrial") ||
          nameStr.includes("industrial") ||
          idStr.includes("hollow") ||
          nameStr.includes("hollow") ||
          idStr.includes("pet") ||
          nameStr.includes("pet") ||
          idStr.includes("beverage") ||
          nameStr.includes("beverage"))
      );
    }),
  },
  {
    num: "08",
    title: "Automotive, Fuel & Mobility",
    shortTitle: "Mobility",
    oneLiner:
      "Car sales, Japanese imports, fuel, LPG, EV charging and towing services.",
    cta: "Explore Mobility",
    href: "https://www.sampangroup.com.bd/sampan-auto",
    image: "/images/brand/sampanauto.png",
    Icon: FiTruck,
    subConcerns: concerns.filter((c) => c.category === "Automotive & Energy"),
  },
  {
    num: "09",
    title: "Defense & Security",
    shortTitle: "Security",
    oneLiner:
      "Licensed, regulated and trusted firearms and defense supply — Nagar Arms & Fire Arms Co.",
    cta: "Explore Security",
    href: "https://www.sampangroup.com.bd/sampan-fire-arms-co",
    image: "/images/brand/firearmsco.png",
    Icon: FiShield,
    subConcerns: concerns.filter((c) => c.category === "Security"),
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function DivisionsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopImgRefs = useRef<HTMLElement[]>([]);
  const desktopContentRefs = useRef<HTMLElement[]>([]);
  const desktopProgressRefs = useRef<HTMLElement[]>([]);

  const prevIndexRef = useRef(0);
  const initializedRef = useRef(false);

  /* ====== GSAP SCROLL ENTRANCE ====== */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
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
          }
        );

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
          }
        );

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
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".div-header > *", ".desktop-list-item", ".parallax-wrapper"],
          { opacity: 1, x: 0, y: 0, yPercent: 0 }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  /* ====== IMAGE REVEAL TRANSITIONS ====== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!initializedRef.current) {
      initializedRef.current = true;
      const isReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
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
          { scaleX: 1, duration: 6, ease: "none" }
        );
      }
      return;
    }

    const prev = prevIndexRef.current;
    const current = activeIndex;
    if (prev === current) return;

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isReduced) {
      prevIndexRef.current = current;
      return;
    }

    const oldImg = desktopImgRefs.current[prev];
    const oldContent = desktopContentRefs.current[prev];
    const newImg = desktopImgRefs.current[current];
    const newContent = desktopContentRefs.current[current];

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

    if (desktopProgressRefs.current[prev]) {
      gsap.killTweensOf(desktopProgressRefs.current[prev]);
      gsap.set(desktopProgressRefs.current[prev], { scaleX: 0 });
    }
    if (desktopProgressRefs.current[current]) {
      gsap.killTweensOf(desktopProgressRefs.current[current]);
      gsap.fromTo(
        desktopProgressRefs.current[current],
        { scaleX: 0 },
        { scaleX: 1, duration: 6, ease: "none" }
      );
    }

    prevIndexRef.current = current;
  }, [activeIndex]);

  /* ====== RENDER ====== */
  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* ── Subtle dot pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 0.4px, transparent 0.4px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="div-header mb-12 max-w-3xl lg:mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-emerald-600/60 to-emerald-600/0" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.5em] text-emerald-700/50">
              02 / Our Businesses
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Nine businesses.
            <br />
            <span className="text-neutral-400">One growing Sampan world.</span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* MOBILE / TABLET LAYOUT                                        */}
        {/* ============================================================ */}
        <div className="lg:hidden">
          {/* Horizontal Nav */}
          <div className="mb-8 flex gap-8 overflow-x-auto pb-4 -mx-[5vw] px-[5vw] snap-x scrollbar-none">
            {divisions.map((div, i) => (
              <button
                key={div.num}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 text-sm font-medium tracking-wide transition-colors whitespace-nowrap snap-start ${
                  activeIndex === i
                    ? "text-emerald-600"
                    : "text-neutral-400"
                }`}
              >
                <span className="font-mono mr-2 text-[11px]">{div.num}</span>
                {div.shortTitle}
              </button>
            ))}
          </div>

          {/* Active Image Stage */}
          <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-neutral-950 rounded-lg">
            {divisions.map((div, i) => {
              const Icon = div.Icon;
              const isActive = activeIndex === i;
              return (
                <div
                  key={div.num}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
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
                      {div.subConcerns.length > 1 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {div.subConcerns.slice(0, 4).map((sc) => (
                            <span
                              key={sc.id}
                              className="inline-block rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-white/50"
                            >
                              {sc.name.length > 22
                                ? sc.name.slice(0, 20) + "…"
                                : sc.name}
                            </span>
                          ))}
                          {div.subConcerns.length > 4 && (
                            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[8px] text-white/50">
                              +{div.subConcerns.length - 4}
                            </span>
                          )}
                        </div>
                      )}
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
        {/* DESKTOP LAYOUT                                                */}
        {/* ============================================================ */}
        <div className="desktop-layout hidden lg:grid lg:grid-cols-[5fr_7fr] lg:gap-12 lg:h-[min(72vh,760px)] lg:min-h-[680px]">
          {/* LEFT: LIST */}
          <div className="flex h-full flex-col justify-center">
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
                    className={`font-mono text-xs tracking-widest w-8 transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-600"
                        : "text-neutral-400 group-hover:text-neutral-600"
                    }`}
                  >
                    {div.num}
                  </span>

                  <div className="relative h-px w-12 bg-neutral-200 overflow-hidden">
                    <div
                      ref={(el) => {
                        if (el) desktopProgressRefs.current[i] = el;
                      }}
                      className="absolute inset-0 bg-emerald-600 origin-left scale-x-0"
                    />
                  </div>

                  <h3
                    className={`text-xl font-semibold tracking-tight transition-all duration-300 ${
                      isActive
                        ? "translate-x-1.5 text-neutral-950"
                        : "text-neutral-400 group-hover:text-neutral-800 group-hover:translate-x-0"
                    }`}
                  >
                    {div.shortTitle}
                  </h3>

                  <span className="ml-auto hidden font-mono text-[9px] tracking-wider text-neutral-300 lg:inline-block">
                    {String(div.subConcerns.length).padStart(2, "0")}
                  </span>

                  <FiArrowRight
                    className={`ml-2 h-5 w-5 transition-all duration-500 lg:ml-0 ${
                      isActive
                        ? "translate-x-0 text-emerald-600 opacity-100"
                        : "-translate-x-4 text-neutral-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT: IMAGE STAGE */}
          <div className="image-stage relative h-full w-full overflow-hidden bg-neutral-950 rounded-lg">
            {/* Film Grain */}
            <div
              className="pointer-events-none absolute inset-0 z-[100] opacity-[0.02] mix-blend-multiply"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect
                  width="100%"
                  height="100%"
                  filter="url(#noiseFilter)"
                />
              </svg>
            </div>

            {/* Parallax Wrapper */}
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    <div
                      ref={(el) => {
                        if (el) desktopContentRefs.current[i] = el;
                      }}
                      className="absolute inset-0 flex flex-col justify-between p-10 lg:p-12"
                    >
                      {/* Top */}
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs tracking-widest text-white/70">
                          {div.num} / 09
                        </span>
                        <Icon
                          className="h-10 w-10 text-white/80"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Bottom */}
                      <div className="max-w-md">
                        <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.95] tracking-tight text-white">
                          {div.title}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/70">
                          {div.oneLiner}
                        </p>

                        {/* Sub-concerns */}
                        {div.subConcerns.length > 1 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {div.subConcerns.slice(0, 5).map((sc) => (
                              <span
                                key={sc.id}
                                className="inline-block rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-white/50 transition-colors duration-300 hover:border-white/30 hover:text-white/70"
                              >
                                {sc.name.length > 24
                                  ? sc.name.slice(0, 22) + "…"
                                  : sc.name}
                              </span>
                            ))}
                            {div.subConcerns.length > 5 && (
                              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[8px] text-white/50">
                                +{div.subConcerns.length - 5}
                              </span>
                            )}
                          </div>
                        )}

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