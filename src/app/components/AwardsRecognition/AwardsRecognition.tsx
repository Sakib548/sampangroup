"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const galleryImages = [
  { id: "img-01", src: "/images/awards/Our-Curated-Gallery-Photo-Frame.webp" },
  { id: "img-02", src: "/images/awards/Our-Curated-Gallery-Photo-Frame-1.webp" },
  { id: "img-03", src: "/images/awards/Our-Curated-Gallery-Photo-Frame-2.webp" },
  { id: "img-04", src: "/images/awards/Our-Curated-Gallery-Photo-Frame-3.webp" },
  { id: "img-05", src: "/images/awards/Our-Curated-Gallery-Photo-Frame-4.webp" },
  { id: "img-06", src: "/images/awards/Our-Curated-Gallery-Photo-Frame-5.webp" },
  { id: "img-07", src: "/images/awards/boss.jpeg" },
  { id: "img-08", src: "/images/awards/purple.jpeg" },
  { id: "img-09", src: "/images/awards/mou.jpeg" },
  { id: "img-10", src: "/images/awards/express.jpeg" },
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
    setActiveIndex((current) => (current !== null ? (current + 1) % galleryImages.length : null));
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => (current !== null ? (current - 1 + galleryImages.length) % galleryImages.length : null));
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
        { opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      // Animate image container on open and change
      gsap.fromTo(
        ".lightbox-image-wrapper",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power4.out", delay: 0.1 }
      );
    },
    { scope: containerRef, dependencies: [activeIndex] }
  );

  /* --- GSAP Gallery Grid Entrance --- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".gallery-item", { opacity: 1, clipPath: "none" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".gallery-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: { trigger: ".awd-gallery", start: "top 85%", once: true },
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
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
        Awards
      </span>

      <div className="relative mx-auto max-w-[1600px] px-[5vw]">
        
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
              Earned Across Two Decades of Business
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 lg:whitespace-nowrap">
              Recognition & Achievements
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            Click to enlarge. A visual timeline of milestones that shaped the foundation of Sampan Group.
          </p>
        </div>

        {/* ====== ARCHITECTURAL SQUARE GRID ====== */}
        {/* Using border-l and border-t on the container, and border-b/r on items creates a seamless ledger */}
        <div className="awd-gallery grid grid-cols-2 border-l border-t border-neutral-200 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className="gallery-item group relative aspect-square w-full cursor-pointer overflow-hidden bg-neutral-200 border-b border-r border-neutral-200"
              onClick={() => setActiveIndex(i)}
            >
              {/* Full-Bleed Image */}
              <Image
                src={image.src}
                alt={`Sampan Group Gallery Image ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover opacity-90 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:opacity-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

              {/* Architectural Top-Right Index */}
              <div className="absolute top-0 right-0 z-10 flex items-center gap-2 bg-black/30 py-1 pl-2 pr-3 text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-out group-hover:opacity-100">
                <span className="h-px w-3 bg-emerald-400"></span>
                <span className="font-mono text-[10px] tracking-widest">
                  0{i + 1}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 scale-75 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                <FiMaximize2 className="h-4 w-4" />
              </div>
            </div>
          ))}
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
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:p-8">
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
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
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
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Bottom Filmstrip / Counter */}
          <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 p-6 lg:p-8" onClick={(e) => e.stopPropagation()}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              <strong className="text-white">0{activeIndex + 1}</strong> / 0{galleryImages.length}
            </span>
            
            {/* Square Thumbnails Filmstrip (Desktop Only) */}
            <div className="hidden max-w-[600px] gap-2 overflow-x-auto rounded-md border border-white/10 bg-black/40 p-2 backdrop-blur-sm md:flex">
              {galleryImages.map((img, i) => (
                <button 
                  key={img.id} 
                  onClick={() => setActiveIndex(i)}
                  className={`relative h-12 w-12 shrink-0 overflow-hidden border transition-all duration-300 ${
                    activeIndex === i ? "border-emerald-400 scale-110" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={`Thumbnail ${i+1}`} fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}