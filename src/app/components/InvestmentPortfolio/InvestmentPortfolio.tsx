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
    image: "/images.jpg", // Replace with actual image
  },
  {
    model: "Club & Membership",
    name: "Express Highway Inn Club & Lounge",
    pitch: "Exclusive access to the highway's most established lounge.",
    cta: "View membership tiers",
    href: "#club-membership",
    image: "/images.jpg", // Replace with actual image
  },
  {
    model: "Resort Membership",
    name: "Sampan Agro & Golf Resort",
    pitch:
      "Founding-member pricing on Bangladesh's newest golf and leisure destination.",
    cta: "Join the waitlist",
    href: "#resort-membership",
    image: "/images.jpg", // Replace with actual image
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
      className="relative w-full overflow-hidden bg-[#F0F4F1] py-24 lg:py-32"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-emerald-950 opacity-[0.03] md:text-[20rem]">
        Assets
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="ip-header mb-16 max-w-3xl lg:mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Ways to own a piece
            <br />
            <span className="text-neutral-400">of Sampan.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[1.8] text-neutral-600 lg:text-lg">
            Not just places to visit — assets to hold. Land share, club
            membership, and ship space share, explained plainly.
          </p>
        </div>

        {/* ====== INVESTMENT GRID ====== */}
        <div className="ip-grid grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
          {investments.map((inv) => (
            <Link
              key={inv.name}
              href={inv.href}
              className="ip-card group relative flex flex-col overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.15)]"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="ip-card-img absolute inset-0 h-[120%] w-full -top-[10%] will-change-transform">
                  <Image
                    src={inv.image}
                    alt={inv.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Light Cinematic Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Model Name (Top Left) */}
                <div className="absolute top-0 left-0 p-6 lg:p-8">
                  <span className="bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-700 backdrop-blur-sm">
                    {inv.model}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-grow flex-col p-6 lg:p-8">
                {/* Project Name */}
                <h3 className="text-[clamp(1.5rem,2vw,1.8rem)] font-semibold leading-[1.1] tracking-tight text-neutral-950 transition-colors duration-500 group-hover:text-emerald-700">
                  {inv.name}
                </h3>

                {/* One-liner Pitch */}
                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {inv.pitch}
                </p>

                {/* CTA (Pushed to bottom) */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 group-hover:text-emerald-700">
                    {inv.cta}
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Bottom Emerald Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* ====== BOTTOM STATEMENT ====== */}
        <div className="mt-16 flex flex-col gap-5 border-t border-neutral-200 pt-6 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            From fractional land ownership to exclusive lifestyle memberships,
            Sampan Group creates pathways to invest in Bangladesh’s growth.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-700">
            03 Investment Models
          </p>
        </div>
      </div>
    </section>
  );
}
