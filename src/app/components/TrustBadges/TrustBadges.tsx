"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const badges = [
  {
    num: "01",
    stat: "20+",
    label: "Years in Business",
  },
  {
    num: "02",
    stat: "15+",
    label: "Years Delivering Real Estate Projects",
  },
  {
    num: "03",
    stat: "REHAB",
    label: "Registered Land Developer",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".trust-item", ".trust-stat", ".trust-label"], {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tls = gsap.utils.toArray<HTMLElement>(".trust-item");
        tls.forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 90%", once: true },
          });

          tl.fromTo(
            item,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          )
            .fromTo(
              item.querySelector(".trust-stat"),
              { yPercent: 100 },
              { yPercent: 0, duration: 0.8, ease: "power4.out" },
              "-=0.3",
            )
            .fromTo(
              item.querySelector(".trust-label"),
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
              "-=0.5",
            );
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden border-t border-b border-emerald-900/10 bg-[#F0F4F1]"
    >
      <div className="mx-auto max-w-[1600px] px-[5vw]">
        <div className="grid grid-cols-1 divide-y divide-emerald-900/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {badges.map((badge) => (
            <div
              key={badge.num}
              className="trust-item group relative flex flex-col justify-center py-10 md:py-12 md:px-10 lg:px-16"
            >
              {/* Top Metadata */}
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-700/60">
                  {badge.num}
                </span>
                <div className="h-px w-6 bg-emerald-700/20 transition-all duration-500 group-hover:w-12 group-hover:bg-emerald-700/50" />
              </div>

              {/* Massive Stat (Masked Reveal) */}
              <div className="overflow-hidden pb-2">
                <h3 className="trust-stat text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-neutral-950 transition-colors duration-500 group-hover:text-emerald-700">
                  {badge.stat}
                </h3>
              </div>

              {/* Label */}
              <p className="trust-label mt-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-900 md:text-sm">
                {badge.label}
              </p>

              {/* Bottom Emerald Hover Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
