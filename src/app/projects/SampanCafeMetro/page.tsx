"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const cafeHighlights = [
  {
    number: "01",
    title: "Modern Showroom",
    copy: "Premium Automotive Experience.",
  },
  {
    number: "02",
    title: "Lifestyle & Wellness",
    copy: "Café, Juice Bar, Pool & Gym.",
  },
  {
    number: "03",
    title: "Complete Car Care",
    copy: "Professional Car Wash.",
  },
];

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SampanCafeMetroFeature() {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ------------------------------------------------------------------ */
  /*  Video source & Autoplay                                            */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.innerWidth < 768;
    video.src = isMobile
      ? "/videos/cafe-metro-mobile.mp4"
      : "/videos/cafe-metro.mp4";

    // Ensure autoplay works
    video.play().catch((error) => {
      console.error("Error attempting to autoplay video:", error);
    });
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Render                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#071b13] text-white">
      {/* ── Video ── */}
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="/images/cafe-metro-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ── Overlay stack ── */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b13]/75 via-[#071b13]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b13] via-[#071b13]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" />

      {/* ── Ambient glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-[#a8df73]/[0.06] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-1/3 h-48 w-48 rounded-full bg-[#a8df73]/[0.03] blur-[80px]"
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 flex h-full w-full flex-col justify-end px-5 pt-10 sm:px-8 sm:pt-14 lg:px-16 lg:pt-18"
        style={{
          paddingBottom:
            "max(clamp(4rem, 5vw, 6rem), env(safe-area-inset-bottom, 0px))",
          overflow: "clip",
        }}
      >
        <div className="max-w-[50rem]">
          {/* Accent line */}
          <div className="mb-5 h-px w-16 origin-left bg-gradient-to-r from-[#a8df73] via-[#a8df73]/50 to-transparent sm:mb-6 sm:w-20" />

          {/* Eyebrow */}
          <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#a8df73] sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.32em]">
            Our New-Generation Automotive Destination
          </p>

          {/* Headline */}
          <h2 className="max-w-[10ch] text-[clamp(2.6rem,9vw,7.2rem)] font-medium leading-[0.82] tracking-[-0.06em] sm:text-[clamp(3.4rem,7.5vw,8rem)] sm:leading-[0.78] sm:tracking-[-0.068em]">
            Sampan
            <br />
            <span className="mt-0.5 inline-block sm:mt-1.5">Cafe Metro</span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-md text-[0.85rem] leading-[1.75] text-white/60 sm:mt-7 sm:max-w-lg sm:text-[0.95rem] sm:leading-[1.8] lg:text-base">
            A modern automotive lifestyle destination featuring a contemporary
            car showroom, café, swimming pool, gym, and professional car-wash
            experience — all under one roof.
          </p>

          {/* CTA */}
          <Link
            href="https://www.sampangroup.com.bd/sampan-auto"
            className="group relative z-10 mt-7 inline-flex h-11 items-center justify-between gap-7 overflow-hidden border border-white/[0.16] px-6 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/90 transition-[color,box-shadow] duration-500 hover:text-[#07131f] hover:shadow-[0_0_20px_rgba(168,223,115,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8df73] sm:mt-8 sm:h-12 sm:gap-9 sm:px-7 sm:text-[0.7rem] sm:tracking-[0.16em]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[#a8df73] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <span className="relative z-10">Explore Cafe Metro</span>
            <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              <Arrow />
            </span>
          </Link>
        </div>

        {/* ── Feature pillars ── */}
        <div className="mt-8 grid divide-y divide-white/[0.06] bg-[#071b13]/40 backdrop-blur-2xl sm:mt-10 sm:grid-cols-3 sm:divide-y-0 sm:border-y sm:border-white/[0.06]">
          {cafeHighlights.map((h, i) => (
            <article
              key={h.number}
              className={`group relative px-4 py-4 transition-all duration-500 ease-out sm:px-6 sm:py-6 lg:px-7 lg:py-7 ${
                i > 0 ? "sm:border-l sm:border-white/[0.06]" : ""
              }`}
            >
              {/* Hover glow */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              {/* Accent bar */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[1.5px] origin-left scale-x-0 bg-gradient-to-r from-[#a8df73] to-[#a8df73]/20 transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* Number */}
              <span className="relative block font-mono text-[0.55rem] font-bold tracking-[0.16em] text-[#ef636b]/40 transition-colors duration-500 group-hover:text-[#ef636b]/70">
                {h.number}
              </span>

              {/* Divider */}
              <span className="relative mt-2 block h-px w-6 bg-white/[0.12] transition-all duration-500 group-hover:w-9 group-hover:bg-[#a8df73]/25" />

              {/* Title */}
              <h3 className="relative mt-2.5 text-[1.05rem] font-medium leading-snug tracking-[-0.025em] text-white/85 transition-colors duration-500 group-hover:text-white sm:mt-3 sm:text-xl sm:tracking-[-0.03em] lg:text-[1.3rem]">
                {h.title}
              </h3>

              {/* Copy */}
              <p className="relative mt-1 max-w-[13rem] text-[0.65rem] leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:mt-1.5 sm:max-w-none sm:text-[0.72rem] sm:leading-[1.6]">
                {h.copy}
              </p>

              {/* Hover arrow — sm+ */}
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 hidden -translate-x-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-35 sm:block sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.5] text-white"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
