"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiMapPin, FiX, FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Location = {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
  x: number;
  y: number;
};

const locations: Location[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    category: "Hospitality",
    location: "Dhaka–Khulna Highway",
    description:
      "A premium hospitality destination strategically positioned along the Dhaka–Khulna Highway.",
    image: "/images.jpg", // Replace with actual map/image
    x: 47,
    y: 42,
  },
  {
    id: "metro-square",
    name: "Sampan Metro Square",
    category: "Real Estate",
    location: "Ashulia, Dhaka",
    description:
      "A modern land-share development designed for commercial and residential opportunities.",
    image: "/images.jpg",
    x: 43,
    y: 32,
  },
  {
    id: "motalib-skyline",
    name: "Sampan Motalib Skyline",
    category: "Real Estate",
    location: "Dhaka",
    description:
      "A contemporary mixed-use development combining residential and commercial spaces.",
    image: "/images.jpg",
    x: 45,
    y: 37,
  },
  {
    id: "nexus",
    name: "Sampan Nexus",
    category: "Residential",
    location: "Mawna",
    description:
      "A thoughtfully planned residential development focused on modern living.",
    image: "/images.jpg",
    x: 52,
    y: 28,
  },
  {
    id: "residency",
    name: "Sampan Residency Tower",
    category: "Hospitality",
    location: "Express Highway",
    description:
      "Premium hospitality towers designed for travellers and long-term guests.",
    image: "/images.jpg",
    x: 55,
    y: 47,
  },
  {
    id: "agro-golf",
    name: "Sampan Agro & Golf Resort",
    category: "Lifestyle",
    location: "Bangladesh",
    description:
      "An integrated lifestyle destination bringing together golf, leisure and agro-based experiences.",
    image: "/images.jpg",
    x: 61,
    y: 55,
  },
  {
    id: "industrial-park",
    name: "Sampan Industrial Park",
    category: "Industry",
    location: "Bangladesh",
    description:
      "A strategic manufacturing and industrial ecosystem built for long-term growth.",
    image: "/images.jpg",
    x: 68,
    y: 39,
  },
  {
    id: "floating-pearl",
    name: "Sampan Floating Pearl",
    category: "Maritime",
    location: "Bangladesh",
    description:
      "A distinctive maritime investment concept connecting business with the waterways of Bangladesh.",
    image: "/images.jpg",
    x: 39,
    y: 59,
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<Location | null>(locations[0]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".map-header > *", ".map-stage", ".map-list-item"], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".map-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".map-header", start: "top 85%", once: true },
          }
        );

        /* MAP STAGE ENTRANCE */
        gsap.fromTo(
          ".map-stage",
          { scale: 0.98, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".map-stage", start: "top 85%", once: true },
          }
        );

        /* MOBILE LIST STAGGER */
        gsap.fromTo(
          ".map-list-item",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: ".map-list", start: "top 85%", once: true },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050505] py-24 lg:py-32"
    >
      {/* Subtle Film Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[100] opacity-[0.03] mix-blend-multiply" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterMap">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterMap)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-[5vw]">
        
        {/* ====== SECTION HEADER ====== */}
        <div className="map-header mb-16 max-w-3xl lg:mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
            Growing across
            <br />
            <span className="text-white/40">Bangladesh.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[1.8] text-white/50 lg:text-lg">
            From hospitality and real estate to industrial and lifestyle ventures, explore the locations where Sampan Group is building opportunities for tomorrow.
          </p>
        </div>

        {/* ====== MAP STAGE ====== */}
        <div className="map-stage relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-neutral-950">
          
          {/* Base Map Image */}
          <Image
            src="/images.jpg" // Replace with your dark architectural map of Bangladesh
            alt="Sampan Group locations across Bangladesh"
            fill
            priority
            className="object-cover opacity-40"
          />

          {/* Map Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          
          {/* Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* Location Pins */}
          {locations.map((location) => {
            const isActive = activeLocation?.id === location.id;
            return (
              <button
                key={location.id}
                type="button"
                aria-label={`View ${location.name}`}
                onClick={() => setActiveLocation(location)}
                className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                {/* Pulse Effect */}
                <span
                  className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/40 ${
                    isActive ? "animate-ping" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                {/* Dot */}
                <span
                  className={`relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-150 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                      : "bg-white/70 group-hover:scale-150 group-hover:bg-emerald-400"
                  }`}
                />
                {/* Label */}
                <span
                  className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-emerald-300" : "text-white/40 group-hover:text-white"
                  }`}
                >
                  {location.name}
                </span>
              </button>
            );
          })}

          {/* Counter (Top Right) */}
          <div className="absolute right-6 top-6 z-20 border-l border-white/10 bg-black/30 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs tracking-widest text-white/50">
              <strong className="text-white">{locations.length}</strong> LOCATIONS
            </span>
          </div>

          {/* Active Location Information Panel (Bottom Left) */}
          {activeLocation && (
            <div 
              key={activeLocation.id} // Key forces re-mount for CSS animation
              className="absolute bottom-0 left-0 z-30 w-full max-w-md border-t border-white/10 bg-gradient-to-t from-black via-black/90 to-transparent p-8 lg:p-12 animate-[slideUp_0.5s_ease-out]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLocation(null)}
                className="absolute right-6 top-6 text-white/40 transition-colors hover:text-white"
                aria-label="Close details"
              >
                <FiX size={18} />
              </button>

              {/* Content */}
              <div className="flex flex-col">
                <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  {activeLocation.category} — {activeLocation.location}
                </p>
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.95] tracking-tight text-white">
                  {activeLocation.name}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                  {activeLocation.description}
                </p>
                <Link
                  href={`/businesses/${activeLocation.id}`}
                  className="group/cta mt-8 inline-flex w-fit items-center gap-5 border-b border-white/30 pb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400"
                >
                  View Details
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* MOBILE / ACCESSIBILITY LIST                                  */}
        {/* ============================================================ */}
        <div className="map-list mt-12 lg:hidden">
          <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Explore all locations
          </p>
          <div className="flex flex-col border-t border-white/10">
            {locations.map((location, i) => {
              const isActive = activeLocation?.id === location.id;
              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setActiveLocation(location)}
                  className={`map-list-item group flex items-center gap-6 border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${isActive ? "text-emerald-400" : "text-white/40 group-hover:text-white/80"}`}>
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                      {location.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/40">{location.location}</p>
                  </div>
                  <FiMapPin className={`h-5 w-5 transition-colors duration-300 ${isActive ? "text-emerald-400" : "text-white/20 group-hover:text-white/50"}`} />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}