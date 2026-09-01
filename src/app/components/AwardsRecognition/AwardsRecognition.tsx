"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const galleryImages = [
  // NOTE FOR IMAGE QUALITY:
  // To look perfectly crisp on 2x/Retina displays at 380px width,
  // these source images should ideally be at least 800px wide.
  // If they appear slightly soft after code optimization,
  // replace the source files with higher resolution versions (keeping the same names).
  { id: "img-01", src: "/images/awards/Our-Curated-Gallery-Photo-Frame.webp" },
  {
    id: "img-02",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-1.webp",
  },
  {
    id: "img-03",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-2.webp",
  },
  {
    id: "img-04",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-3.webp",
  },
  {
    id: "img-05",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-4.webp",
  },
  {
    id: "img-06",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-5.webp",
  },
  { id: "img-07", src: "/images/awards/boss.jpeg" },
  { id: "img-08", src: "/images/awards/purple.jpeg" },
  { id: "img-09", src: "/images/awards/mou.jpeg" },
  { id: "img-10", src: "/images/awards/express.jpeg" },
];

// Duplicate for the seamless infinite loop
const marqueeRow1 = [...galleryImages, ...galleryImages];
const marqueeRow2 = [
  ...galleryImages.slice().reverse(),
  ...galleryImages.slice().reverse(),
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AwardsRecognition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* --- Lightbox Navigation Logic --- */
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current !== null ? (current + 1) % galleryImages.length : null,
    );
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current !== null
        ? (current - 1 + galleryImages.length) % galleryImages.length
        : null,
    );
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  /* --- Keyboard Accessibility for Lightbox --- */
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  /* --- GSAP Lightbox Entrance & Image Transitions --- */
  useGSAP(
    () => {
      if (!lightboxRef.current || activeIndex === null) return;

      // Animate backdrop
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power3.out" },
      );

      // Animate image container on open and change
      gsap.fromTo(
        ".lightbox-image-wrapper",
        { scale: 0.95, opacity: 0, filter: "blur(8px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power4.out",
          delay: 0.1,
        },
      );
    },
    { scope: containerRef, dependencies: [activeIndex] },
  );

  /* --- GSAP Dual-Row Marquee & Scroll Entrance --- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".marquee-track-1, .marquee-track-2", { x: 0, xPercent: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".awd-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".awd-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* PREMIUM DIRECTIONAL MARQUEE LOGIC */
        const track1 = containerRef.current?.querySelector(
          ".marquee-track-1",
        ) as HTMLElement;
        const track2 = containerRef.current?.querySelector(
          ".marquee-track-2",
        ) as HTMLElement;

        if (track1) {
          // Row 1: Left to Right (Start at -50%, animate to 0%)
          const tl1 = gsap.timeline({ repeat: -1 });
          tl1.fromTo(
            track1,
            { xPercent: -50 },
            { xPercent: 0, duration: 45, ease: "none" },
          );

          // Hover Slowdown for Row 1
          const row1Wrapper =
            containerRef.current?.querySelector(".row-1-wrapper");
          if (row1Wrapper) {
            row1Wrapper.addEventListener("mouseenter", () =>
              gsap.to(tl1, { timeScale: 0.2, duration: 0.5 }),
            );
            row1Wrapper.addEventListener("mouseleave", () =>
              gsap.to(tl1, { timeScale: 1, duration: 0.5 }),
            );
          }
        }

        if (track2) {
          // Row 2: Right to Left (Start at 0%, animate to -50%)
          const tl2 = gsap.timeline({ repeat: -1 });
          tl2.fromTo(
            track2,
            { xPercent: 0 },
            { xPercent: -50, duration: 50, ease: "none" },
          );

          // Hover Slowdown for Row 2
          const row2Wrapper =
            containerRef.current?.querySelector(".row-2-wrapper");
          if (row2Wrapper) {
            row2Wrapper.addEventListener("mouseenter", () =>
              gsap.to(tl2, { timeScale: 0.2, duration: 0.5 }),
            );
            row2Wrapper.addEventListener("mouseleave", () =>
              gsap.to(tl2, { timeScale: 1, duration: 0.5 }),
            );
          }
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black uppercase tracking-tighter text-neutral-950 opacity-[0.02] md:text-[16rem]">
        Archive
      </span>

      <div className="relative mx-auto max-w-[1600px] px-[5vw]">
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="awd-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
              Earned Across Two Decades of Business
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 lg:whitespace-nowrap">
              Recognition & Achievements
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            Click to enlarge. A visual timeline of milestones that shaped the
            foundation of Sampan Group.
          </p>
        </div>
      </div>

      {/* ====== DUAL-ROW MARQUEE CONTAINER ====== */}
      <div className="relative flex flex-col gap-6 lg:gap-10">
        {/* ROW 1 (Left to Right) */}
        <div
          className="row-1-wrapper relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          {/* Added will-change-transform to promote track to GPU layer for crisp GSAP movement */}
          <div className="marquee-track-1 flex w-max items-center gap-6 will-change-transform">
            {marqueeRow1.map((image, i) => (
              <MarqueeItem
                key={`r1-${i}`}
                image={image}
                index={i}
                onClick={() => setActiveIndex(i % galleryImages.length)}
                priority={i < 3}
              />
            ))}
          </div>
        </div>

        {/* ROW 2 (Right to Left - Hidden on Mobile to prevent clutter) */}
        <div
          className="row-2-wrapper relative hidden w-full overflow-hidden lg:flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          {/* Added will-change-transform to promote track to GPU layer for crisp GSAP movement */}
          <div className="marquee-track-2 flex w-max items-center gap-6 will-change-transform">
            {marqueeRow2.map((image, i) => (
              <MarqueeItem
                key={`r2-${i}`}
                image={image}
                index={i}
                onClick={() => setActiveIndex(i % galleryImages.length)}
                priority={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ====== FULLSCREEN CINEMATIC LIGHTBOX ====== */}
      {activeIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          {/* Top Bar (Close & Counter) */}
          <div className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between p-6 lg:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              Sampan Group Archive
            </span>
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:left-8"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            key={activeIndex} // Forces GSAP to re-trigger animation on image change
            className="lightbox-image-wrapper relative h-[70vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={`Enlarged view of Sampan Group Gallery Image ${activeIndex + 1}`}
              fill
              sizes="90vw"
              quality={100} // Maximize lightbox image quality
              priority // Prioritize loading the expanded image instantly
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:right-8"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Bottom Filmstrip / Counter */}
          <div
            className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 p-6 lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              <strong className="text-white">0{activeIndex + 1}</strong> / 0
              {galleryImages.length}
            </span>

            {/* Square Thumbnails Filmstrip (Desktop Only) */}
            <div className="hidden max-w-[600px] gap-2 overflow-x-auto rounded-md border border-white/10 bg-black/40 p-2 backdrop-blur-sm md:flex">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative h-12 w-12 shrink-0 overflow-hidden border transition-all duration-300 ${
                    activeIndex === i
                      ? "scale-110 border-emerald-400"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes="48px"
                    quality={90}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MARQUEE ITEM SUBCOMPONENT                                          */
/* ------------------------------------------------------------------ */

function MarqueeItem({
  image,
  index,
  onClick,
  priority,
}: {
  image: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
  priority?: boolean;
}) {
  return (
    // Updated height and width to be perfectly 1:1 (Square)
    <div
      className="group relative h-[240px] w-[240px] shrink-0 cursor-pointer overflow-hidden border border-neutral-200 bg-neutral-100 lg:h-[380px] lg:w-[380px]"
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={`Sampan Group Gallery Image ${index + 1}`}
        fill
        // Updated sizes to accurately reflect CSS breakpoints for optimal Next.js srcset generation
        sizes="(min-width: 1024px) 380px, 240px"
        quality={90} // Increased from default 75 to 90 for premium sharpness
        priority={priority} // Eager-loads the first few visible images to prevent layout shift
        // Removed grayscale and opacity hover effects. Images are now always full color.
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
      />

      {/* Architectural Top-Right Index (Always Visible) */}
      <div className="absolute right-0 top-0 z-10 flex items-center gap-2 bg-black/30 py-1 pl-2 pr-3 text-white backdrop-blur-sm">
        <span className="h-px w-3 bg-emerald-400"></span>
        <span className="font-mono text-[10px] tracking-widest">
          0{(index % galleryImages.length) + 1}
        </span>
      </div>

      {/* Expand Icon (Always Visible) */}
      <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-110">
        <FiMaximize2 className="h-4 w-4" />
      </div>
    </div>
  );
}
