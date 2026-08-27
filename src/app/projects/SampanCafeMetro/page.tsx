"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Storytelling scenes — adjust ranges to match actual video ── */
const scenes = [
  { start: 0, end: 0.33, label: "THE SHOWROOM", cardIndex: 0 },
  { start: 0.33, end: 0.66, label: "LIFESTYLE & WELLNESS", cardIndex: 1 },
  { start: 0.66, end: 1, label: "THE COMPLETE EXPERIENCE", cardIndex: 2 },
];

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
] as const;

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
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const dynamicOverlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressDotRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollExploreRef = useRef<HTMLDivElement>(null);

  /* Scene system */
  const sceneNumberRef = useRef<HTMLSpanElement>(null);
  const sceneLabelRef = useRef<HTMLSpanElement>(null);
  const sceneProgressLineRef = useRef<HTMLDivElement>(null);
  const featureCardRefs = useRef<(HTMLArticleElement | null)[]>([
    null,
    null,
    null,
  ]);

  /* ------------------------------------------------------------------ */
  /*  Video source                                                       */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const isMobile = window.innerWidth < 768;
    video.src = isMobile
      ? "/videos/cafe-metro-mobile.mp4"
      : "/videos/cafe-metro.mp4";
    video.load();
  }, []);

  /* ------------------------------------------------------------------ */
  /*  GSAP — single master ScrollTrigger                                  */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let destroyed = false;
    let mainST: ScrollTrigger | null = null;
    let entranceDone = false;
    let currentSceneIndex = -1;
    let sceneLabelTween: gsap.core.Timeline | null = null;
    let lastSeekTime = -1;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------- Initial hidden states ---------- */
    gsap.set(accentLineRef.current, { scaleX: 0, opacity: 0 });
    gsap.set(eyebrowRef.current, { opacity: 0, y: 18 });
    gsap.set(headlineRef.current, {
      opacity: 0,
      y: 36,
      clipPath: "inset(100% 0 0 0)",
    });
    gsap.set(descriptionRef.current, { opacity: 0, y: 16 });
    gsap.set(ctaRef.current, { opacity: 0, y: 12 });
    gsap.set(featuresRef.current, { opacity: 0, y: 14 });
    gsap.set(scrollExploreRef.current, { opacity: 0, y: 8 });
    gsap.set(sceneNumberRef.current, { opacity: 0, y: 6 });
    gsap.set(sceneLabelRef.current, { opacity: 0, y: 6 });

    /* ---------- Entrance ---------- */
    const playEntrance = () => {
      if (destroyed) return;
      entranceDone = false;
      currentSceneIndex = -1;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          entranceDone = true;
        },
      });

      tl.to(accentLineRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
      })
        .to(
          eyebrowRef.current,
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.4"
        )
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.95,
            ease: "expo.out",
          },
          "-=0.3"
        )
        .to(
          descriptionRef.current,
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.5"
        )
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3"
        )
        .to(
          featuresRef.current,
          { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
          "-=0.2"
        )
        .to(
          scrollExploreRef.current,
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.15"
        )
        .to(
          sceneNumberRef.current,
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        )
        .to(
          sceneLabelRef.current,
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.25"
        );
    };

    /* ---------- Reset ---------- */
    const resetContent = () => {
      if (destroyed) return;
      entranceDone = false;
      currentSceneIndex = -1;
      lastSeekTime = -1;

      if (sceneLabelTween) {
        sceneLabelTween.kill();
        sceneLabelTween = null;
      }

      const targets = [
        { el: accentLineRef.current, v: { scaleX: 0, opacity: 0 } },
        { el: eyebrowRef.current, v: { opacity: 0, y: 18 } },
        {
          el: headlineRef.current,
          v: { opacity: 0, y: 36, clipPath: "inset(100% 0 0 0)" },
        },
        { el: descriptionRef.current, v: { opacity: 0, y: 16 } },
        { el: ctaRef.current, v: { opacity: 0, y: 12 } },
        { el: featuresRef.current, v: { opacity: 0, y: 14 } },
        { el: scrollExploreRef.current, v: { opacity: 0, y: 8 } },
        { el: sceneNumberRef.current, v: { opacity: 0, y: 6 } },
        { el: sceneLabelRef.current, v: { opacity: 0, y: 6 } },
      ];
      targets.forEach(({ el, v }) => {
        if (el) gsap.to(el, { ...v, duration: 0.3, overwrite: "auto" });
      });

      featureCardRefs.current.forEach((card) => {
        if (card) card.classList.remove("card-active");
      });

      if (sceneProgressLineRef.current) {
        gsap.set(sceneProgressLineRef.current, { scaleX: 0 });
      }
    };

    /* ---------- Scene label transition ---------- */
    const transitionScene = (newIndex: number) => {
      const scene = scenes[newIndex];

      if (sceneLabelTween) sceneLabelTween.kill();

      featureCardRefs.current.forEach((card, idx) => {
        if (card) card.classList.toggle("card-active", idx === newIndex);
      });

      const els = [sceneNumberRef.current, sceneLabelRef.current].filter(
        Boolean
      );

      if (currentSceneIndex >= 0) {
        sceneLabelTween = gsap
          .timeline()
          .to(els, {
            y: -6,
            opacity: 0,
            duration: 0.18,
            ease: "power2.in",
          })
          .call(() => {
            if (sceneNumberRef.current) {
              sceneNumberRef.current.textContent = `0${newIndex + 1} / 0${scenes.length}`;
            }
            if (sceneLabelRef.current) {
              sceneLabelRef.current.textContent = scene.label;
            }
          })
          .fromTo(
            els,
            { y: 6, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.28, ease: "power3.out" }
          );
      } else {
        if (sceneNumberRef.current) {
          sceneNumberRef.current.textContent = `0${newIndex + 1} / 0${scenes.length}`;
        }
        if (sceneLabelRef.current) {
          sceneLabelRef.current.textContent = scene.label;
        }
        sceneLabelTween = gsap.fromTo(
          els,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
        );
      }

      currentSceneIndex = newIndex;
    };

    /* ---------- Video ready ---------- */
    const onVideoReady = () => {
      if (destroyed) return;

      if (videoWrapperRef.current) {
        gsap.to(videoWrapperRef.current, {
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
        });
      }

      if (prefersReducedMotion) {
        video.currentTime = 0;
        gsap.set(accentLineRef.current, { scaleX: 1, opacity: 1 });
        gsap.set(eyebrowRef.current, { opacity: 1, y: 0 });
        gsap.set(headlineRef.current, {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
        });
        gsap.set(descriptionRef.current, { opacity: 1, y: 0 });
        gsap.set(ctaRef.current, { opacity: 1, y: 0 });
        gsap.set(featuresRef.current, { opacity: 1, y: 0 });
        gsap.set(scrollExploreRef.current, { opacity: 0, y: 0 });
        gsap.set(sceneNumberRef.current, { opacity: 0, y: 0 });
        gsap.set(sceneLabelRef.current, { opacity: 0, y: 0 });
        return;
      }

      video.pause();

      /* Three-tier scroll distance */
      const vw = window.innerWidth;
      let scrollDistance: number;
      if (vw < 768) {
        scrollDistance = Math.min(
          2000,
          Math.max(1400, window.innerHeight * 2)
        );
      } else if (vw < 1024) {
        scrollDistance = Math.min(
          2400,
          Math.max(1800, window.innerHeight * 2.5)
        );
      } else {
        scrollDistance = Math.min(
          3200,
          Math.max(2400, window.innerHeight * 3)
        );
      }

      /* Smooth video proxy via quickTo — single tween, no accumulation */
      const videoProxy = { progress: 0 };
      const setVideoProgress = gsap.quickTo(videoProxy, "progress", {
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          const targetTime =
            videoProxy.progress * (video.duration || 1);
          if (Math.abs(targetTime - lastSeekTime) > 0.015) {
            video.currentTime = targetTime;
            lastSeekTime = targetTime;
          }
        },
      });

      ScrollTrigger.refresh();

      mainST = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1.5,
        anticipatePin: 1,

        onUpdate: (self) => {
          if (destroyed) return;
          const p = self.progress;

          /* ── Video (smooth proxy) ── */
          setVideoProgress(p);

          /* ── Left progress indicator ── */
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleY(${p})`;
          }
          if (progressDotRef.current) {
            progressDotRef.current.style.top = `${p * 100}%`;
          }

          /* ── Scene progress line ── */
          if (sceneProgressLineRef.current) {
            sceneProgressLineRef.current.style.transform = `scaleX(${p})`;
          }

          /* ── Dynamic overlay ── */
          if (dynamicOverlayRef.current) {
            dynamicOverlayRef.current.style.opacity = String(
              0.08 + Math.abs(p - 0.5) * 0.08
            );
          }

          /* ── Fade scroll indicator ── */
          if (scrollExploreRef.current && p > 0.02) {
            scrollExploreRef.current.style.opacity = String(
              Math.max(0, 1 - p * 28)
            );
          }

          /* ── Scene detection & transition ── */
          if (entranceDone) {
            let sceneIdx = 0;
            for (let i = scenes.length - 1; i >= 0; i--) {
              if (p >= scenes[i].start) {
                sceneIdx = i;
                break;
              }
            }
            if (sceneIdx !== currentSceneIndex) {
              transitionScene(sceneIdx);
            }
          }

          /* ── Subtle parallax ── */
          if (entranceDone) {
            gsap.set(eyebrowRef.current, { y: -p * 6 });
            gsap.set(headlineRef.current, {
              y: -p * 10,
              clipPath: "inset(0% 0 0 0)",
            });
            gsap.set(descriptionRef.current, { y: -p * 4 });
            gsap.set(ctaRef.current, { y: -p * 3 });
            gsap.set(featuresRef.current, { y: p * 3 });
          }
        },

        onEnter: () => playEntrance(),
        onEnterBack: () => playEntrance(),
        onLeaveBack: () => resetContent(),
      });
    };

    /* ---------- Wait for video ---------- */
    if (video.readyState >= 1) {
      const raf = requestAnimationFrame(() => onVideoReady());
      return () => {
        destroyed = true;
        cancelAnimationFrame(raf);
        if (mainST) mainST.kill();
      };
    }

    const handleLoaded = () => onVideoReady();
    video.addEventListener("loadeddata", handleLoaded, { once: true });

    const fallback = setTimeout(() => {
      if (!destroyed && video.readyState < 1) onVideoReady();
    }, 3000);

    return () => {
      destroyed = true;
      clearTimeout(fallback);
      video.removeEventListener("loadeddata", handleLoaded);
      if (sceneLabelTween) sceneLabelTween.kill();
      if (mainST) mainST.kill();
    };
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Render                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] bg-[#071b13] text-white"
      style={{
        width: "100vw",
        marginInline: "calc(-50vw + 50%)",
        overflow: "clip",
      }}
    >
      {/* ── Gradient fallback ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(168,223,115,0.18),transparent_30%),linear-gradient(135deg,#071b13,#123c2b)]" />

      {/* ── Video ── */}
      <div ref={videoWrapperRef} className="absolute inset-0 opacity-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="/images/cafe-metro-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* ── Overlay stack ── */}
      <div
        ref={dynamicOverlayRef}
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.08 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b13]/75 via-[#071b13]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b13] via-[#071b13]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" />

      {/* ── Top-edge highlight ── */}
      <div className="absolute inset-x-0 top-0 z-[6] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* ── Ambient glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-[#a8df73]/[0.06] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-1/3 h-48 w-48 rounded-full bg-[#a8df73]/[0.03] blur-[80px]"
      />

      {/* ── Left progress indicator ── */}
      <div
        className="pointer-events-none absolute left-4 top-1/2 z-20 -translate-y-1/2 sm:left-8"
        aria-hidden="true"
      >
        <div className="relative h-24 w-px bg-white/[0.06]">
          <div
            ref={progressBarRef}
            className="absolute bottom-0 left-0 w-full origin-bottom bg-[#a8df73]/30"
            style={{
              height: "100%",
              transform: "scaleY(0)",
              willChange: "transform",
            }}
          />
          <div
            ref={progressDotRef}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8df73]"
            style={{
              width: "4px",
              height: "4px",
              top: "0%",
              boxShadow:
                "0 0 5px 1px rgba(168,223,115,0.35), 0 0 10px 2px rgba(168,223,115,0.12)",
            }}
          />
        </div>
      </div>

      {/* ── Scene indicator — upper right ── */}
      <div
        className="pointer-events-none absolute right-5 top-[26%] z-20 sm:right-8 sm:top-[28%]"
        aria-hidden="true"
      >
        <span
          ref={sceneNumberRef}
          className="block font-mono text-[0.48rem] font-bold tracking-[0.14em] text-white/25"
        >
          01 / 03
        </span>
        <div className="mt-2.5 h-px w-14 overflow-hidden bg-white/[0.06] sm:w-16">
          <div
            ref={sceneProgressLineRef}
            className="h-full w-full origin-left bg-[#a8df73]/35"
            style={{
              transform: "scaleX(0)",
              willChange: "transform",
            }}
          />
        </div>
        <span
          ref={sceneLabelRef}
          className="mt-2.5 block max-w-[8rem] text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/35 leading-tight sm:max-w-[10rem] sm:text-[0.55rem]"
        >
          THE SHOWROOM
        </span>
      </div>

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
          <div
            ref={accentLineRef}
            className="mb-5 h-px w-16 origin-left bg-gradient-to-r from-[#a8df73] via-[#a8df73]/50 to-transparent sm:mb-6 sm:w-20"
          />

          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#a8df73] sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.32em]"
          >
            Our New-Generation Automotive Destination
          </p>

          {/* Headline */}
          <h2
            ref={headlineRef}
            className="max-w-[10ch] text-[clamp(2.6rem,9vw,7.2rem)] font-medium leading-[0.82] tracking-[-0.06em] sm:text-[clamp(3.4rem,7.5vw,8rem)] sm:leading-[0.78] sm:tracking-[-0.068em]"
          >
            Sampan
            <br />
            <span className="mt-0.5 inline-block sm:mt-1.5">
              Cafe Metro
            </span>
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mt-5 max-w-md text-[0.85rem] leading-[1.75] text-white/60 sm:mt-7 sm:max-w-lg sm:text-[0.95rem] sm:leading-[1.8] lg:text-base"
          >
            A modern automotive lifestyle destination featuring a contemporary
            car showroom, café, swimming pool, gym, and professional car-wash
            experience — all under one roof.
          </p>

          {/* CTA */}
          <Link
            ref={ctaRef}
            href="https://www.sampangroup.com.bd/sampan-auto"
            className="group relative z-10 mt-7 inline-flex h-11 items-center justify-between gap-7 overflow-hidden border border-white/[0.16] px-6 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/90 transition-[color,box-shadow] duration-500 hover:text-[#07131f] hover:shadow-[0_0_20px_rgba(168,223,115,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8df73] sm:mt-8 sm:h-12 sm:gap-9 sm:px-7 sm:text-[0.7rem] sm:tracking-[0.16em]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left bg-[#a8df73] scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <span className="relative z-10">Explore Cafe Metro</span>
            <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              <Arrow />
            </span>
          </Link>
        </div>

        {/* ── Feature pillars ── */}
        <div
          ref={featuresRef}
          className="mt-8 grid divide-y divide-white/[0.06] bg-[#071b13]/40 backdrop-blur-2xl sm:mt-10 sm:grid-cols-3 sm:divide-y-0 sm:border-y sm:border-white/[0.06]"
        >
          {cafeHighlights.map((h, i) => (
            <article
              key={h.number}
              ref={(el) => {
                featureCardRefs.current[i] = el;
              }}
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
                data-accent
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[1.5px] origin-left scale-x-0 bg-gradient-to-r from-[#a8df73] to-[#a8df73]/20 transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* Number */}
              <span className="card-num relative block font-mono text-[0.55rem] font-bold tracking-[0.16em] text-[#ef636b]/40 transition-colors duration-500 group-hover:text-[#ef636b]/70">
                {h.number}
              </span>

              {/* Divider */}
              <span className="relative mt-2 block h-px w-6 bg-white/[0.12] transition-all duration-500 group-hover:w-9 group-hover:bg-[#a8df73]/25" />

              {/* Title */}
              <h3 className="card-title relative mt-2.5 text-[1.05rem] font-medium leading-snug tracking-[-0.025em] text-white/85 transition-colors duration-500 group-hover:text-white sm:mt-3 sm:text-xl sm:tracking-[-0.03em] lg:text-[1.3rem]">
                {h.title}
              </h3>

              {/* Copy */}
              <p className="card-copy relative mt-1 max-w-[13rem] text-[0.65rem] leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:mt-1.5 sm:max-w-none sm:text-[0.72rem] sm:leading-[1.6]">
                {h.copy}
              </p>

              {/* Hover arrow — sm+ */}
              <span
                aria-hidden="true"
                className="absolute right-4 bottom-4 hidden -translate-x-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-35 sm:block sm:right-6 sm:bottom-6 lg:right-7 lg:bottom-7"
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

      {/* ── Scroll to explore ── */}
      <div
        ref={scrollExploreRef}
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-6"
      >
        <span className="text-[0.44rem] font-bold uppercase tracking-[0.26em] text-white/25">
          Scroll to explore
        </span>
        <span
          className="text-white/15"
          style={{ animation: "cmscrollFloat 2.4s ease-in-out infinite" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.5]"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </span>
      </div>

      {/* ── Styles: animation keyframes + card-active states ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes cmscrollFloat {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(4px); opacity: 0.05; }
        }

        .card-active {
          background: rgba(255,255,255,0.04);
          transform: translateY(-2px);
        }
        .card-active [data-accent] {
          transform: scaleX(1);
        }
        .card-active .card-num {
          color: rgba(239,99,107,0.85);
        }
        .card-active .card-title {
          color: #ffffff;
        }
        .card-active .card-copy {
          color: rgba(255,255,255,0.6);
        }
      `,
        }}
      />
    </section>
  );
}