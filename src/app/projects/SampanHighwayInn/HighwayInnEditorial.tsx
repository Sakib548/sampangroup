"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import { highwayInnFacilities } from "@/data/highwayInnFacility";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA MAPPING (Fixed the 'eyebrow' -> 'description' error)         */
/* ------------------------------------------------------------------ */

const slides = highwayInnFacilities
  .slice(0, 5)
  .map((item) => ({ 
    name: item.title, 
    image: item.image, 
    desc: item.description // Fixed: Changed from item.eyebrow to item.description
  }));

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function HighwayInnEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* --- Auto-advance logic --- */
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, isPaused]);

  const move = (amount: number) => {
    if (slides.length <= 1) return;
    setActive((prev) => (prev + amount + slides.length) % slides.length);
  };

  const current = slides[active];

  /* --- GSAP Entrance Animations --- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hi-header > *", ".hi-image-stage", ".hi-content"], { opacity: 1, y: 0, scale: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hi-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".hi-header", start: "top 85%", once: true },
          }
        );

        gsap.fromTo(
          ".hi-image-stage",
          { scale: 0.98, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".hi-image-stage", start: "top 85%", once: true },
          }
        );

        gsap.fromTo(
          ".hi-content",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".hi-content", start: "top 85%", once: true },
          }
        );
      });
    },
    { scope: containerRef }
  );

  /* --- GSAP Image Crossfade on Slide Change --- */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const images = gsap.utils.toArray<HTMLElement>(".hi-slide-image");
    images.forEach((img, i) => {
      if (i === active) {
        gsap.killTweensOf(img);
        gsap.set(img, { zIndex: 10, opacity: 0, clipPath: "inset(0 100% 0 0)" });
        gsap.to(img, {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power4.out",
        });
      } else {
        gsap.killTweensOf(img);
        gsap.to(img, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.1,
          onComplete: () => gsap.set(img, { zIndex: 0 }),
        });
      }
    });
  }, [active]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050505] py-24 lg:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-white opacity-[0.02] md:text-[20rem]">
        Inn
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="hi-header mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
              Sampan Highway Inn · Facilities
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              Everything you need
              <br />
              <span className="text-white/40">for a better stop.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50 lg:text-right">
            Thoughtful spaces designed for travelers, families, and guests. Explore our premium amenities.
          </p>
        </div>

        {/* ====== SPLIT LAYOUT GRID ====== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT: IMAGE STAGE */}
          <div className="lg:col-span-7">
            <div className="hi-image-stage relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-neutral-950 sm:aspect-[16/10] lg:aspect-auto lg:h-[70vh]">
              
              {slides.map((slide, i) => (
                <div
                  key={slide.name}
                  className="hi-slide-image absolute inset-0"
                  style={{ opacity: i === 0 ? 1 : 0, clipPath: i === 0 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Image Meta (Top) */}
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 lg:p-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
                      Sampan Highway Inn
                    </span>
                    <span className="bg-white/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 backdrop-blur-sm">
                      Facility 0{i + 1}
                    </span>
                  </div>

                  {/* Image Title (Bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[0.95] tracking-tight text-white">
                      {slide.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="mt-6 flex items-center gap-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group relative h-[2px] w-12 overflow-hidden bg-white/10"
                >
                  {active === i && (
                    <div className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-emerald-500 transition-transform duration-[6000ms] ease-linear"
                         style={{ transform: active === i && !isPaused ? 'scaleX(1)' : 'scaleX(0)' }} 
                    />
                  )}
                </button>
              ))}
              <span className="ml-auto font-mono text-xs tracking-widest text-white/50">
                0{active + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT */}
          <div className="hi-content relative flex flex-col justify-center lg:col-span-5">
            
            {/* Small label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-6 bg-emerald-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Current Highlight
              </span>
            </div>

            {/* Dynamic Description (Using key to re-trigger CSS animation) */}
            <div key={active} className="animate-[slideUp_0.6s_ease-out]">
              <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-emerald-400">
                {current.name}
              </h3>
              <p className="mt-6 text-base leading-[1.8] text-white/70 lg:text-lg">
                {current.desc}
              </p>
            </div>

            {/* Author / CTA */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-neutral-700" />
                <div>
                  <p className="text-base font-semibold text-white">
                    Sampan Group
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Hospitality Division
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/our_divisions/hospitality-highway-travel/sampan-highway-inn"
                  className="group/cta inline-flex w-fit items-center gap-5 border-b border-white/30 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-500"
                >
                  Explore Highway Inn
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
                </Link>
                
                {/* Manual Navigation Arrow */}
                <button
                  onClick={() => move(1)}
                  aria-label="Next facility"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-black"
                >
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS Keyframes for Text Reveal */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
