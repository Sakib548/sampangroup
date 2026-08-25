"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiPlay, FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LeadershipMessage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  // YouTube Video ID from your link
  const youtubeId = "YjhMZwyZZ_Y";
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".lead-header > *", ".lead-video", ".lead-content > *"], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
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
          },
        );

        /* VIDEO & CONTENT ENTRANCE */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".lead-grid",
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
          ".lead-video",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        ).fromTo(
          ".lead-content > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.6",
        );

        /* CINEMATIC IMAGE PARALLAX (Desktop) */
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
            },
          );

          /* DYNAMIC OVERLAY MOTION */
          gsap.fromTo(
            ".lead-overlay",
            { opacity: 0.6 },
            {
              opacity: 0.85,
              ease: "none",
              scrollTrigger: {
                trigger: ".lead-video",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            },
          );
        });

        /* CINEMATIC IMAGE PARALLAX (Mobile - Reduced Intensity) */
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
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      {/* Giant Ghost Number (Editorial Depth) */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
        05
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="lead-header mb-16 flex items-center justify-between border-b border-neutral-300/60 pb-6 lg:mb-24">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-emerald-500" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              Leadership
            </span>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400 lg:block">
            Message from the Managing Director
          </span>
        </div>

        {/* ====== MAIN GRID ====== */}
        <div className="lead-grid grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ================= VIDEO ================= */}
          <div className="lead-video group relative lg:col-span-7">
            {/* Vertical Name Tag */}
            <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 lg:block">
              Emamul Hasan / 01
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-300/60 bg-neutral-950">
              {!playing ? (
                <>
                  {/* Parallax Image Wrapper (Oversized to prevent empty edges) */}
                  <div className="lead-image absolute inset-0 h-[120%] w-[110%] -left-[5%] -top-[10%] will-change-transform">
                    {/* Using standard img tag to avoid next/image remote domain config issues for YouTube thumbnails */}
                    <img
                      src={youtubeThumbnail}
                      alt="Emamul Hasan, Managing Director of Sampan Group"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Cinematic Overlays (Animated opacity) */}
                  <div className="lead-overlay absolute inset-0 z-[1]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Play button */}
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play leadership message"
                    className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/30 text-white backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                  >
                    {/* Subtle Breathing Pulse */}
                    <span className="absolute inset-0 h-20 w-20 animate-ping rounded-full border border-white/20 opacity-50"></span>
                    <FiPlay
                      size={20}
                      className="relative ml-1"
                      fill="currentColor"
                    />
                  </button>

                  {/* Bottom video metadata */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-8">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400">
                        Leadership Message
                      </p>
                      <p className="text-lg font-semibold text-white">
                        Emamul Hasan
                      </p>
                    </div>
                    <div className="hidden border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:block">
                      Play Film
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="Leadership Message - Emamul Hasan"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Video caption */}
            <div className="mt-4 flex items-center justify-between border-t border-neutral-300/60 pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              <span>Managing Director</span>
              <span>YouTube Playback</span>
            </div>
          </div>

          {/* ================= QUOTE ================= */}
          <div className="lead-content relative lg:col-span-5">
            {/* Oversized Background Quote Mark */}
            <div className="pointer-events-none absolute -left-8 -top-20 z-0 select-none font-serif text-[220px] leading-none text-emerald-500/10 md:-left-12">
              “
            </div>

            <div className="relative z-10">
              {/* Small label */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-emerald-500" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Our Beginning
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-950">
                We didn’t start as a real estate company or a hospitality brand.
                We started as a highway stop — and grew because we listened to
                what the road needed next.
              </blockquote>

              {/* Author & Affiliations */}
              <div className="mt-10 flex flex-col gap-6 border-t border-neutral-300/60 pt-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-neutral-400" />
                  <div>
                    <p className="text-base font-semibold text-neutral-950">
                      Emamul Hasan
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                      Managing Director
                    </p>
                  </div>
                </div>

                {/* Institutional Affiliations List */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    "President",
                    "Vice President",
                    "Joint Secretary",
                    "Organizing Secretary",
                    "GB Member",
                    "Member",
                    "Co-Owner",
                    "MOU Partner",
                    "Enlisted",
                  ].map((role) => (
                    <span
                      key={role}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-emerald-600"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group/cta cursor-pointer mt-12 inline-flex items-center gap-5 border-b border-neutral-400 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-900 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-600"
              >
                Watch the full message
                <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
              </button>
            </div>
          </div>
        </div>

        {/* ====== BOTTOM STATEMENT ====== */}
        <div className="mt-20 flex flex-col gap-5 border-t border-neutral-300/60 pt-6 lg:mt-28 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            From a single roadside destination to a growing group of businesses,
            our journey has always been shaped by what comes next.
          </p>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Sampan Group
          </span>
        </div>
      </div>
    </section>
  );
}
