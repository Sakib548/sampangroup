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
  { num: "01", name: "Real Estate & Housing Association of Bangladesh", logo: "/images/affiliation/rehab.png" },
  { num: "02", name: "Federation of Bangladesh chambers of commerce & industry FBCCI", logo: "/images/affiliation/fbcci.png" },
  { num: "03", name: "Bangladesh Reconditioned Vehicles Importers & Dealers Association (BARVIDA)", logo: "/images/affiliation/barvia.png" },
  { num: "04", name: "Bangladesh Arm's Dealer and Impoter Association", logo: "/images/affiliation/bad.png" },
  { num: "05", name: "Bangladesh PABX Association", logo: "/images/affiliation/pabx.png" },
  { num: "06", name: "Bangladesh LPG Autogas Station & Conversion Workshop Ownerʼs Association", logo: "/images/affiliation/lpg.png" },
  { num: "07", name: "Bangladesh volleyball federation (AD-Hoc Community)", logo: "/images/affiliation/bvf.png" },
  { num: "08", name: "Barisal Bulls", logo: "/images/affiliation/barishalbulls.png" },
  { num: "09", name: "Barisal Club (1864)", logo: "/images/affiliation/lis.png" },
  { num: "10", name: "Bangladesh Premier League (BPL)", logo: "/images/affiliation/bpl.png" },
  { num: "11", name: "Mercedes-Benz", logo: "/images/affiliation/mercedes.png" },
  { num: "12", name: "Chartered Institute of Procurement & Supply UK-Authorized", logo: "/images/affiliation/cips.png" },
  { num: "13", name: "Directorate General Defence Purchase", logo: "/images/affiliation/dgdp.png" },
  { num: "14", name: "Shooter's Shooting Club", logo: "/images/affiliation/shoot.png" },
  // Add your remaining 20+ logos here. The grid will automatically wrap beautifully.
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AffiliationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".aff-header > *", ".aff-cell"], { opacity: 1, y: 0, clipPath: "none" });
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
            scrollTrigger: { trigger: ".aff-header", start: "top 85%", once: true },
          }
        );

        /* RAPID GRID FADE & LIFT REVEAL */
        gsap.fromTo(
          ".aff-cell",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.04, // Fast stagger for 30+ items
            ease: "power3.out",
            scrollTrigger: { trigger: ".aff-grid", start: "top 85%", once: true },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black uppercase tracking-tighter text-neutral-950 opacity-[0.02] md:text-[15rem]">
        Affiliations
      </span>

      <div className="relative mx-auto max-w-[1600px] px-[5vw]">
        
        {/* ====== SECTION HEADER ====== */}
        <div className="aff-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Connected to institutions
              <br />
              <span className="text-neutral-400">that shape our industries.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            Professional memberships and international affiliations reflecting the networks behind Sampan Group.
          </p>
        </div>

        {/* ====== PREMIUM ARCHITECTURAL GRID ====== */}
        {/* Subtle borders create a clean ledger feel. Hover state lifts to pure white. */}
        <div className="aff-grid grid grid-cols-2 border-l border-t border-neutral-200 sm:grid-cols-3 lg:grid-cols-6">
          {affiliations.map((aff) => (
            <div 
              key={aff.num} 
              className="aff-cell group relative flex flex-col items-center justify-center border-b border-r border-neutral-200 p-8 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:z-10"
            >
              {/* Logo Container - Fixed aspect ratio for perfect grid alignment */}
              <div className="relative flex aspect-[16/10] w-full items-center justify-center">
                <div className="relative h-full w-full max-w-[140px]">
                  <Image
                    src={aff.logo}
                    alt={`${aff.name} Logo`}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 16vw, 33vw"
                  />
                </div>
              </div>

              {/* Organization Name (Always visible, premium typography) */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-[1px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-4"></span>
                <p className="text-center text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-500 group-hover:text-neutral-900 lg:text-[11px]">
                  {aff.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}