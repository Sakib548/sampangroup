"use client";

import { useState, useEffect, useRef, useCallback } from "react"; // Fixed: Added useCallback
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

const slides = [
  {
    eyebrow: "Your Perfect Stopover on the Dhaka–Khulna Highway",
    title: "Sampan Highway Inn",
    subhead:
      "Cozy rooms, honest meals, a place to breathe before the road takes you again.",
    cta: "Book a Stay",
    href: "#highway-inn",
    image: "/images.jpg",
  },
  {
    eyebrow: "Own a Piece of Ashulia's Next Address",
    title: "Sampan Metro Square",
    subhead:
      "A land-share residential project built for people who want to invest in a home, not just a plot.",
    cta: "Explore Metro Square",
    href: "#metro-square",
    image: "/images.jpg",
  },
  {
    eyebrow: "The Highway, Reimagined",
    title: "Express Highway Inn",
    subhead:
      "Everything travelers love about Sampan Highway Inn — modernized, elevated, and opening soon.",
    cta: "See What's Coming",
    href: "#express-highway",
    image: "/images.jpg",
  },
  {
    eyebrow: "UK-Accredited Courses, Built for Bangladesh",
    title: "LSHS",
    subhead:
      "CIPS and CMI qualifications from London School of Higher Studies — study locally, get recognized globally.",
    cta: "Apply to LSHS",
    href: "#lshs",
    image: "/images.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* --- Auto-play Logic (6.5s) with Pause/Resume --- */
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
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearTimeout(timer);
  }, [activeSlide, isPaused]);

  /* --- Reset Progress Bar on Slide Change --- */
  useEffect(() => {
    if (!containerRef.current) return;
    const progressEl = containerRef.current.querySelector(".progress-active");
    if (!progressEl) return;

    progressTween.current = gsap.fromTo(
      progressEl,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 6.5,
        ease: "none",
        onComplete: () => setActiveSlide((prev) => (prev + 1) % slides.length),
      },
    );

    if (isPaused) progressTween.current.pause();

    return () => {
      progressTween.current?.kill();
    };
  }, [activeSlide, isPaused]);

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

  /* --- GSAP Animations (Transitions & Parallax) --- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* ======== ACCESSIBILITY: REDUCED MOTION ======== */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const slidesEls = gsap.utils.toArray<HTMLElement>(".hero-slide");
        slidesEls.forEach((slide, i) => {
          gsap.set(slide, {
            opacity: i === activeSlide ? 1 : 0,
            zIndex: i === activeSlide ? 10 : 0,
          });
          gsap.set(slide.querySelectorAll("*"), { clearProps: "all" });
        });
        return;
      });

      /* ======== STANDARD MOTION ======== */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const slidesEls = gsap.utils.toArray<HTMLElement>(".hero-slide");

        slidesEls.forEach((slide, i) => {
          const image = slide.querySelector(".image-wrapper");
          const ghostNum = slide.querySelector(".ghost-num");
          const eyebrow = slide.querySelector(".s-eyebrow");
          const titleMask = slide.querySelector(".s-title-mask");
          const desc = slide.querySelector(".s-desc");
          const cta = slide.querySelector(".s-cta");

          if (i === activeSlide) {
            gsap.set(slide, { zIndex: 10 });

            const tl = gsap.timeline();

            // Slide Crossfade + Image Ken Burns
            tl.to(slide, { opacity: 1, duration: 1.0, ease: "power2.inOut" }, 0)
              .fromTo(
                image,
                { scale: 1.08 },
                { scale: 1.14, duration: 7, ease: "none" },
                0,
              )
              // Ghost Number Parallax Reveal
              .fromTo(
                ghostNum,
                { xPercent: 20, opacity: 0 },
                {
                  xPercent: 0,
                  opacity: 0.08,
                  duration: 1.5,
                  ease: "power3.out",
                },
                0.2,
              )
              // Text Reveals
              .fromTo(
                eyebrow,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                0.3,
              )
              .fromTo(
                titleMask,
                { yPercent: 100 },
                { yPercent: 0, duration: 1.2, ease: "power4.out" },
                0.45,
              )
              .fromTo(
                desc,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                0.7,
              )
              .fromTo(
                cta,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                0.8,
              );
          } else {
            // Animate out old slide
            gsap.to(slide, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
              delay: 0.1,
              onComplete: () => {
                gsap.set(slide, { zIndex: 0 });
                gsap.set(image, { scale: 1.18, yPercent: -5 });
              },
            });
          }
        });

        /* ======== SCROLL PARALLAX ======== */
        mm.add("(min-width: 1024px)", () => {
          gsap.to(".image-wrapper", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".content-wrapper", {
            yPercent: -20,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".ghost-num", {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 2,
            },
          });
        });

        mm.add("(max-width: 1023px)", () => {
          gsap.to(".image-wrapper", {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".content-wrapper", {
            yPercent: -15,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [activeSlide] },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Architectural Frame Borders */}
      <div className="pointer-events-none absolute inset-0 z-[90] border-t border-b border-white/10" />

      {/* Film Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[100] opacity-[0.04] mix-blend-multiply"
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

      {/* Standing Motto */}
      <div className="pointer-events-none absolute left-0 top-8 z-30 w-full px-[5vw] lg:top-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 lg:text-[11px]">
          THE VILLAGE WILL BE THE CITY.
        </p>
      </div>

      {/* Slides */}
      {slides.map((slide, i) => (
        <article
          key={slide.title}
          className="hero-slide absolute inset-0 opacity-0"
          aria-hidden={activeSlide !== i}
        >
          {/* Giant Ghost Number */}
          <span className="ghost-num pointer-events-none absolute right-[2vw] top-[10vh] z-[5] select-none font-bold leading-none text-white mix-blend-overlay text-[clamp(10rem,35vw,30rem)]">
            0{i + 1}
          </span>

          {/* Image Animation Wrapper */}
          <div className="image-wrapper absolute inset-0 h-full w-full will-change-transform">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Bottom-Heavy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content Wrapper */}
          <div className="content-wrapper absolute bottom-0 left-0 z-20 w-full p-[5vw] pb-[12vh] lg:pb-[10vh] will-change-transform">
            <div className="mx-auto max-w-[1400px]">
              <div className="flex max-w-2xl flex-col items-start text-left lg:max-w-none">
                <p className="s-eyebrow font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400 lg:text-[12px]">
                  {slide.eyebrow}
                </p>

                {/* Title with Mask Reveal Wrapper */}
                <div className="mt-6 overflow-hidden">
                  <h1 className="s-title-mask text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
                    {slide.title}
                  </h1>
                </div>

                <p className="s-desc mt-6 max-w-xl text-base leading-[1.8] text-white/70 lg:text-lg">
                  {slide.subhead}
                </p>

                {/* Magnetic CTA Wrapper */}
                <div
                  className="mt-10"
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                >
                  <Link
                    ref={magneticRef}
                    href={slide.href}
                    className="s-cta group inline-flex items-center gap-5 border-b border-white/40 pb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400 lg:text-[12px]"
                  >
                    {slide.cta}
                    <FiArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Desktop Interactive Navigation List (Right Side) */}
      <div className="absolute bottom-[10vh] right-[5vw] z-30 hidden w-[300px] flex-col items-end gap-6 lg:flex">
        <div className="font-mono text-xs tracking-widest text-white/50">
          <span className="text-white">0{activeSlide + 1}</span> / 0
          {slides.length}
        </div>
        <div className="flex flex-col items-end gap-2">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              onMouseEnter={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={activeSlide === i}
              className="group flex items-center justify-end gap-4 py-1"
            >
              <span
                className={`font-mono text-sm font-bold transition-all duration-500 ${activeSlide === i ? "w-auto opacity-100 text-white" : "w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:text-white/80"}`}
              >
                {slide.title}
              </span>
              <span
                className={`font-mono text-xs transition-colors duration-500 ${activeSlide === i ? "text-emerald-400" : "text-white/50 group-hover:text-white"}`}
              >
                0{i + 1}
              </span>
              <div
                className={`relative h-[1px] transition-all duration-500 ${activeSlide === i ? "w-24 bg-white/20" : "w-8 bg-white/20 group-hover:bg-white/40"}`}
              >
                {activeSlide === i && (
                  <div className="progress-active absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-emerald-400" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Indicators (Bottom Center) */}
      <div className="absolute bottom-[5vh] left-1/2 z-30 flex -translate-x-1/2 gap-2 lg:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={activeSlide === i}
            className={`h-2 rounded-full transition-all duration-500 ${activeSlide === i ? "w-8 bg-emerald-400" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
