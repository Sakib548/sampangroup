"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const investments = [
  {
    model: "Land Share",
    name: "Sampan Metro Square",
    pitch: "Own a share of Ashulia's next residential address.",
    cta: "See open opportunities",
    href: "#land-share",
    image: "/images/projects/sampanmetrosquare.jpg",
  },
  {
    model: "Club & Membership",
    name: "Express Highway Inn Club & Lounge",
    pitch: "Exclusive access to the highway's most established lounge.",
    cta: "View membership tiers",
    href: "#club-membership",
    image: "/images/featuredConcerns/express-highway-innn.png",
  },
  {
    model: "Resort Membership",
    name: "Sampan Agro & Golf Resort",
    pitch:
      "Founding-member pricing on Bangladesh's newest golf and leisure destination.",
    cta: "Join the waitlist",
    href: "#resort-membership",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function InvestmentPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".ip-header > *", ".ip-card"], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".ip-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ip-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* CARDS STAGGERED ENTRANCE */
        gsap.fromTo(
          ".ip-card",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ip-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* SUBTLE CARD IMAGE PARALLAX */
        gsap.utils.toArray<HTMLElement>(".ip-card-img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".ip-card"),
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-emerald-950 opacity-[0.03] md:text-[20rem]">
        Assets
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="ip-header mb-16 flex flex-col justify-between gap-8 border-b border-emerald-900/10 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Ways to own a piece
              <br />
              <span className="text-neutral-400">of Sampan.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-600 lg:text-right">
            Not just places to visit — assets to hold. Land share, club
            membership, and ship space share, explained plainly.
          </p>
        </div>

        {/* ====== INVESTMENT GRID ====== */}
        <div className="ip-grid grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {investments.map((inv) => (
            <Link
              key={inv.name}
              href={inv.href}
              className="ip-card group relative block aspect-[4/5] w-full overflow-hidden border border-neutral-200 bg-neutral-950 transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)]"
            >
              {/* Image Wrapper */}
              <div className="ip-card-img absolute inset-0 h-[120%] w-full -top-[10%] will-change-transform">
                <Image
                  src={inv.image}
                  alt={inv.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-70 grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>

              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
                {/* Model Tag (Top Left) - Absolute positioned over image */}
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
                  <span className="bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-700 backdrop-blur-sm transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                    {inv.model}
                  </span>
                </div>

                {/* Bottom Content Block */}
                <div className="flex flex-col">
                  {/* Project Name (Always Visible) */}
                  <h3 className="text-[clamp(1.5rem,2vw,1.8rem)] font-semibold leading-[1.1] tracking-tight text-white transition-colors duration-500 group-hover:text-emerald-400">
                    {inv.name}
                  </h3>

                  {/* Hidden Reveal Content (Pitch + CTA) */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-sm leading-7 text-white/70">
                        {inv.pitch}
                      </p>
                      <div className="mt-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                        {inv.cta}
                        <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Emerald Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
