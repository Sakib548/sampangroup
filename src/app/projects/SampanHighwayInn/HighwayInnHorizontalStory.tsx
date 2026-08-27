"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  MOCK DATA (Replace with your actual imports)                       */
/* ------------------------------------------------------------------ */

const gallerySlides = [
  {
    id: "highway-inn",
    title: "Sampan Highway Inn",
    category: "Flagship Destination",
    location: "Dhaka–Khulna Highway",
    desc: "A premium hospitality destination strategically positioned along the Dhaka–Khulna Highway, offering respite for the modern traveler.",
    image: "/images.jpg", // Replace with /images/projects/sampan-highway-inn.png
  },
  {
    id: "facility-1",
    title: "Premium Suites",
    category: "Accommodation",
    location: "Interior Design",
    desc: "Cozy, well-appointed rooms designed for ultimate comfort after a long journey on the highway.",
    image: "/images.jpg", 
  },
  {
    id: "facility-2",
    title: "The Highway Lounge",
    category: "Dining & Leisure",
    location: "Ground Floor",
    desc: "Honest meals and a warm atmosphere. The most established lounge for travelers and guests alike.",
    image: "/images.jpg",
  },
  {
    id: "facility-3",
    title: "Event Spaces",
    category: "Celebration",
    location: "Banquet Hall",
    desc: "Versatile spaces designed to host corporate gatherings, family celebrations, and community events.",
    image: "/images.jpg",
  },
];

const AUTO_ADVANCE_MS = 6500;

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function HighwayInnStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* --- Auto-advance logic --- */
  useEffect(() => {
    if (isPaused) {
      progressTween.current?.pause();
      return;
    }

    if (progressTween.current && progressTween.current.progress() < 1) {
      progressTween.current?.play();
      return;
    }

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % gallerySlides.length);
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  /* --- Reset progress bar on slide change --- */
  useEffect(() => {
    if (!containerRef.current) return;
    const progressEl = containerRef.current.querySelector(".progress-active");
    if (!progressEl) return;

    progressTween.current = gsap.fromTo(
      progressEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: AUTO_ADVANCE_MS / 1000,
        ease: "none",
        onComplete: () => setActiveIndex((prev) => (prev + 1) % gallerySlides.length),
      }
    );

    if (isPaused) progressTween.current.pause();

    return () => {
      progressTween.current?.kill();
    };
  }, [activeIndex, isPaused]);

  /* --- GSAP Cinematic Image Transitions --- */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const current = activeIndex;

    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      if (i === current) {
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
  }, [activeIndex]);

  /* --- GSAP Scroll Entrances --- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hi-header > *", ".hi-image-stage", ".hi-content"], { opacity: 1, y: 0, clipPath: "none" });
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

  return (
<<<<<<< HEAD
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#050505] py-24 lg:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
=======
    <section
      aria-labelledby="highway-inn-title"
      className="relative isolate overflow-hidden bg-[#e8efe9] px-5 py-16 text-[#123b2c] sm:px-10 sm:py-20 lg:h-[100svh] lg:min-h-0 lg:px-16 lg:py-12 xl:py-14"
>>>>>>> 205dbd263fe49c0782e57bfe95400ceba7889b58
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-white opacity-[0.02] md:text-[20rem]">
        Inn
      </span>

<<<<<<< HEAD
      <div className="relative mx-auto max-w-[1600px] px-[5vw]">
        
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="hi-header mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
              01 / Hospitality & Travel
=======
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col lg:h-full">
        <div className="hidden shrink-0 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)] lg:gap-24 xl:gap-32">
          <span aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-[#ef636b]" />
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.25em] text-[#9b7410]">
              Our Flagship Hospitality &amp; Travel Destination
>>>>>>> 205dbd263fe49c0782e57bfe95400ceba7889b58
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              The highway&apos;s most
              <br />
              <span className="text-white/40">established lounge.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50 lg:text-right">
            A premium hospitality destination strategically positioned along the Dhaka–Khulna Highway.
          </p>
        </div>

<<<<<<< HEAD
        {/* ====== SPLIT LAYOUT GRID ====== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT: IMAGE STAGE */}
          <div className="lg:col-span-7">
            <div className="hi-image-stage relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-neutral-950 sm:aspect-[16/10] lg:aspect-auto lg:h-[70vh]">
              
              {gallerySlides.map((slide, i) => (
=======
        <div className="mt-14 grid items-center gap-14 lg:mt-8 lg:min-h-0 lg:flex-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)] lg:items-stretch lg:gap-24 xl:gap-32">
          <div
            className="relative mx-auto h-[390px] w-full max-w-[620px] touch-pan-y select-none sm:h-[500px] lg:h-[min(52svh,480px)] lg:self-start xl:h-[min(54svh,510px)]"
            onTouchStart={(event) => {
              touchStartX.current =
                event.changedTouches.item(0)?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const startX = touchStartX.current;
              const endX = event.changedTouches.item(0)?.clientX;

              touchStartX.current = null;
              if (startX === null || endX === undefined) return;

              const amount = getSwipeGalleryAmount(startX, endX);
              if (amount !== 0) move(amount);
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -left-4 top-7 h-[76%] w-[72%] border border-[#123b2c]/12 sm:-left-8 sm:top-10 lg:top-0 lg:h-full"
            />

            {imageLayers.map(({ index, offset }) => {
              const image = galleryImages[index];
              const isFront = offset === 0;
              const rotation = offset === -1 ? -6 : offset === 1 ? 5 : 0;
              const translateX =
                offset === -1 ? "-7%" : offset === 1 ? "7%" : "0";
              const translateY =
                offset === -1 ? "2.5%" : offset === 1 ? "4%" : "0";

              return (
>>>>>>> 205dbd263fe49c0782e57bfe95400ceba7889b58
                <div
                  key={slide.id}
                  ref={(el) => { if (el) imageRefs.current[i] = el; }}
                  className="absolute inset-0"
                  style={{ opacity: i === 0 ? 1 : 0, clipPath: i === 0 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
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
                      {slide.location}
                    </span>
                    <span className="bg-white/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 backdrop-blur-sm">
                      {slide.category}
                    </span>
                  </div>

                  {/* Image Title (Bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[0.95] tracking-tight text-white">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="mt-6 flex items-center gap-4">
              {gallerySlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group relative h-[2px] w-12 overflow-hidden bg-white/10"
                >
                  {activeIndex === i && (
                    <div className="progress-active absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-emerald-500" />
                  )}
                </button>
              ))}
              <span className="ml-auto font-mono text-xs tracking-widest text-white/50">
                0{activeIndex + 1} / 0{gallerySlides.length}
              </span>
            </div>
          </div>

<<<<<<< HEAD
          {/* RIGHT: EDITORIAL CONTENT */}
          <div className="hi-content relative flex flex-col justify-center lg:col-span-5">
            
            {/* Small label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-6 bg-emerald-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Our Flagship Destination
              </span>
            </div>

            {/* Dynamic Description */}
            {/* Using key to force re-render and CSS animation on slide change */}
            <div key={activeIndex} className="animate-[slideUp_0.6s_ease-out]">
              <p className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-white">
                {gallerySlides[activeIndex].desc}
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
=======
          <div className="max-w-[38rem] lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <div className="flex items-center gap-3 lg:hidden">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.25em] text-[#9b7410] ">
                Our Flagship Hospitality &amp; Travel Destination
              </p>
            </div>

            <h2
              id="highway-inn-title"
              className="mt-6 text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.06em] text-balance lg:mt-0"
            >
              Sampan
              <span className="mt-2 block text-[#b48812]">Highway Inn.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#123b2c]/66 sm:text-lg sm:leading-8">
              One of Sampan&apos;s most recognized flagship projects, a familiar
              name and trusted highway destination known to travelers across
              Bangladesh.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/sampan-highway-inn-restaurant-party-centre"
                className="group inline-flex min-h-14 items-center justify-between gap-10 bg-[#123b2c] px-6 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-white transition duration-300 hover:bg-[#00a174]"
              >
                Explore More
                <span className=" transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>

              {/* {hasMultipleImages && (
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Show next Highway Inn image"
                  className="group hidden h-14 w-14 place-items-center border border-[#123b2c]/30 text-[#123b2c] transition duration-300 hover:border-[#ef636b] hover:bg-[#ef636b] hover:text-white sm:grid"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </button>
              )} */}
            </div>

            {hasMultipleImages && (
              <div className="mt-12 flex items-center gap-4 border-t border-[#123b2c]/16 pt-5 lg:mt-auto">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Show previous Highway Inn image"
                  className="group grid h-10 w-10 shrink-0 place-items-center text-[#123b2c]/65 transition hover:text-[#ef636b]"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                    <Arrow direction="left" />
                  </span>
                </button>

                <div
                  className="flex min-w-0 flex-1 items-center gap-2"
                  aria-label="Choose a Highway Inn image"
                >
                  {galleryImages.map((image, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => showImage(index)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative h-1 overflow-hidden transition-[width,background-color] duration-500 ${
                          isActive
                            ? "w-14 bg-[#123b2c]/18"
                            : "w-5 bg-[#123b2c]/22 hover:bg-[#123b2c]/40"
                        }`}
                      >
                        {isActive && (
                          <span
                            key={`progress-${activeIndex}`}
                            aria-hidden="true"
                            className="shi-auto-progress absolute inset-0 origin-left bg-[#ef636b]"
                          />
                        )}
                      </button>
                    );
                  })}
>>>>>>> 205dbd263fe49c0782e57bfe95400ceba7889b58
                </div>
              </div>

              <a
                href="#highway-inn"
                className="group/cta inline-flex w-fit items-center gap-5 border-b border-white/30 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-500"
              >
                Explore Highway Inn
                <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
              </a>
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