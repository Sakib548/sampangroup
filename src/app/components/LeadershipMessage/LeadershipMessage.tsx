"use client";

import { useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiPlay, FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  CONSTANTS                                                          */
/* ------------------------------------------------------------------ */

const YOUTUBE_ID = "YjhMZwyZZ_Y";
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

const QUOTE_WORDS = [
  "We", "didn't", "start", "as", "a", "real", "estate", "company", "or", "a",
  "hospitality", "brand.", "We", "started", "as", "a", "highway", "stop",
  "—", "and", "grew", "because", "we", "listened", "to", "what", "the",
  "road", "needed", "next.",
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function LeadershipMessage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);
  const [playing, setPlaying] = useState(false);

  /* ── Magnetic CTA ────────────────────────────────────────────────── */
  const handleCtaMove = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ctaRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleCtaLeave = useCallback(() => {
    if (!ctaRef.current) return;
    gsap.to(ctaRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  /* ── Magnetic Play Button ────────────────────────────────────────── */
  const handlePlayMove = useCallback((e: React.MouseEvent) => {
    if (!playBtnRef.current) return;
    const rect = playBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(playBtnRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  const handlePlayLeave = useCallback(() => {
    if (!playBtnRef.current) return;
    gsap.to(playBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.25)",
    });
  }, []);

  /* ── GSAP Animations ────────────────────────────────────────────── */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* Reduced motion — show everything instantly */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".lead-header > *",
            ".lead-video",
            ".lead-content > *",
            ".lead-corner",
            ".lead-border-top",
            ".lead-border-right",
            ".lead-border-bottom",
            ".lead-border-left",
            ".lead-attribution",
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
          }
        );
        gsap.set(".lead-word", { y: "0%" });
      });

      /* Full animation suite */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ── Header entrance ── */
        gsap.fromTo(
          ".lead-header > *",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".lead-header",
              start: "top 85%",
              once: true,
            },
          }
        );

        /* ── Video + Content entrance timeline ── */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".lead-grid",
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
          ".lead-video",
          { y: 60, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
        )
          .fromTo(
            ".lead-content > *",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.6"
          )
          .fromTo(
            ".lead-attribution",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.3"
          );

        /* ── Border draw (clockwise: top → right → bottom → left) ── */
        const borderTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".lead-video",
            start: "top 80%",
            once: true,
          },
        });

        borderTl
          .to(".lead-border-top", {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.inOut",
          })
          .to(
            ".lead-border-right",
            { scaleY: 1, duration: 0.6, ease: "power2.inOut" },
            "-=0.3"
          )
          .to(
            ".lead-border-bottom",
            { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
            "-=0.3"
          )
          .to(
            ".lead-border-left",
            { scaleY: 1, duration: 0.6, ease: "power2.inOut" },
            "-=0.3"
          );

        /* ── Corner marks entrance ── */
        gsap.fromTo(
          ".lead-corner",
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: ".lead-video",
              start: "top 80%",
              once: true,
              delay: 0.4,
            },
          }
        );

        /* ── Split-text quote reveal ── */
        gsap.fromTo(
          ".lead-word",
          { y: "110%" },
          {
            y: "0%",
            duration: 0.5,
            stagger: 0.022,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".lead-quote",
              start: "top 85%",
              once: true,
            },
          }
        );

        /* ── Play button subtle breathing pulse (GSAP, not CSS) ── */
        gsap.to(".lead-pulse-outer", {
          scale: 1.6,
          opacity: 0,
          duration: 2.5,
          ease: "power1.out",
          repeat: -1,
          repeatDelay: 0.5,
        });
        gsap.to(".lead-pulse-inner", {
          scale: 1.4,
          opacity: 0,
          duration: 2.5,
          ease: "power1.out",
          repeat: -1,
          repeatDelay: 0.5,
          delay: 0.4,
        });

        /* ── Cinematic parallax (Desktop) ── */
        mm.add("(min-width: 1024px)", () => {
          gsap.fromTo(
            ".lead-image",
            { yPercent: -8, xPercent: -2, scale: 1.08 },
            {
              yPercent: 8,
              xPercent: 2,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: ".lead-video",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );

          gsap.fromTo(
            ".lead-overlay",
            { opacity: 0.5 },
            {
              opacity: 0.85,
              ease: "none",
              scrollTrigger: {
                trigger: ".lead-video",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );
        });

        /* ── Cinematic parallax (Mobile — reduced) ── */
        mm.add("(max-width: 1023px)", () => {
          gsap.fromTo(
            ".lead-image",
            { yPercent: -4, xPercent: 0, scale: 1.05 },
            {
              yPercent: 4,
              xPercent: 1,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: ".lead-video",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            }
          );
        });
      });
    },
    { scope: containerRef }
  );

  /* ── Render ─────────────────────────────────────────────────────── */
  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2]"
    >

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">

        {/* ====== MAIN GRID ====== */}
        <div className="lead-grid grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= VIDEO ================= */}
          <div className="lead-video group relative lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-300/60 bg-neutral-950">
              {!playing ? (
                <>
                  {/* Border draw segments (clockwise) */}
                  <span className="lead-border-top absolute left-0 right-0 top-0 z-20 h-px origin-left scale-x-0 bg-black/10" />
                  <span className="lead-border-right absolute right-0 top-0 bottom-0 z-20 w-px origin-top scale-y-0 bg-black/10" />
                  <span className="lead-border-bottom absolute bottom-0 left-0 right-0 z-20 h-px origin-right scale-x-0 bg-black/10" />
                  <span className="lead-border-left absolute left-0 top-0 bottom-0 z-20 w-px origin-bottom scale-y-0 bg-black/10" />

                  {/* Parallax Image (oversized) */}
                  <div className="lead-image absolute inset-0 h-[120%] w-[110%] -left-[5%] -top-[10%] will-change-transform">
                    <img
                      src={YOUTUBE_THUMBNAIL}
                      alt="Emamul Hasan, Managing Director of Sampan Group"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Cinematic overlays (kept dark for video legibility) */}
                  <div className="lead-overlay absolute inset-0 z-[1]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Corner marks */}
                  <span className="lead-corner absolute left-5 top-5 z-30 h-6 w-6 border-l border-t border-white/25 transition-colors duration-700" />
                  <span className="lead-corner absolute right-5 top-5 z-30 h-6 w-6 border-r border-t border-white/25 transition-colors duration-700" />
                  <span className="lead-corner absolute bottom-5 left-5 z-30 h-6 w-6 border-l border-b border-white/25 transition-colors duration-700" />
                  <span className="lead-corner absolute bottom-5 right-5 z-30 h-6 w-6 border-r border-b border-white/25 transition-colors duration-700" />

                  {/* Play button (magnetic) */}
                  <button
                    ref={playBtnRef}
                    type="button"
                    onClick={() => setPlaying(true)}
                    onMouseMove={handlePlayMove}
                    onMouseLeave={handlePlayLeave}
                    aria-label="Play leadership message from Emamul Hasan"
                    className="group absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    {/* Outer pulse ring */}
                    <span className="lead-pulse-outer absolute -inset-4 rounded-full border border-white/[0.08]" />
                    {/* Inner pulse ring */}
                    <span className="lead-pulse-inner absolute -inset-2 rounded-full border border-emerald-500/[0.06]" />
                    {/* Main circle */}
                    <span className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/[0.15] bg-black/30 backdrop-blur-2xl transition-all duration-700 md:h-24 md:w-24 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                      <FiPlay
                        size={20}
                        className="ml-1 text-white/80 transition-colors duration-500 group-hover:text-emerald-400 md:h-5 md:w-5"
                        fill="currentColor"
                      />
                    </span>
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                  title="Leadership Message — Emamul Hasan, Managing Director, Sampan Group"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Video caption */}
            {/* <div className="mt-4 flex items-center justify-between border-t border-neutral-300/60 pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              <span>Managing Director</span>
              <span>YouTube Playback</span>
            </div> */}
          </div>

          {/* ==================== QUOTE ==================== */}
          <div className="lead-content relative lg:col-span-5">
            {/* Oversized decorative quotation mark */}
            <div
              className="pointer-events-none absolute -left-4 -top-20 z-0 select-none font-serif text-[200px] leading-none text-emerald-600/[0.08] md:-left-10 md:text-[260px]"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Section label */}
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-5 bg-gradient-to-r from-emerald-600/50 to-emerald-600/0" />
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.45em] text-neutral-400">
                  Our Beginning
                </span>
              </div>

              {/* Split-text blockquote */}
              <blockquote className="lead-quote text-[clamp(1.7rem,3vw,2.65rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-neutral-950">
                {QUOTE_WORDS.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <span className="lead-word inline-block">
                      {word === "—" ? "\u2014" : word}&nbsp;
                    </span>
                  </span>
                ))}
              </blockquote>


              {/* CTA (magnetic) */}
              <button
                ref={ctaRef}
                type="button"
                onClick={() => setPlaying(true)}
                onMouseMove={handleCtaMove}
                onMouseLeave={handleCtaLeave}
                className="group/cta mt-14 inline-flex cursor-pointer items-center gap-5 font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-neutral-600 transition-colors duration-500 hover:text-emerald-700"
              >
                <span className="relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-emerald-600 after:to-emerald-600/0 after:transition-all after:duration-500 after:ease-out group-hover/cta:after:w-full">
                  Watch the full message
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover/cta:border-emerald-600/30 group-hover/cta:bg-emerald-600/5">
                  <FiArrowRight className="h-3 w-3 transition-transform duration-500 group-hover/cta:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}