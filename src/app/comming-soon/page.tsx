"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

// Set your launch date here (YYYY, M-1, D, H, M, S)
// Note: Month is 0-indexed (0 = Jan, 11 = Dec)
const LAUNCH_DATE = new Date(2025, 11, 31, 23, 59, 59).getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = LAUNCH_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLButtonElement>(null);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ── Functional Countdown Timer ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ── Magnetic Button Effect ── */
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(magneticBtnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!magneticBtnRef.current) return;
    gsap.to(magneticBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  /* ── Cinematic Entrance Animations ── */
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".cs-bg-image",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" },
      )
        .fromTo(
          ".cs-brand",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=1.5",
        )
        .fromTo(
          ".cs-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          ".cs-title-line",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "expo.out" },
          "-=0.5",
        )
        .fromTo(
          ".cs-accent-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          ".cs-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          ".cs-timer-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "-=0.5",
        )
        .fromTo(
          ".cs-notify",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          ".cs-socials",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        );

      // Subtle infinite background motion
      gsap.to(".cs-bg-image", {
        scale: 1.06,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef },
  );

  /* ── Tick Animation for Seconds ── */
  useEffect(() => {
    gsap.fromTo(
      ".cs-seconds-tick",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
    );
  }, [timeLeft.seconds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Add your API call here
    }
  };

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds, isSeconds: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden bg-[#050505] py-10 text-white sm:py-16"
    >
      {/* ── Full Screen Background Image ── */}
      <div className="cs-bg-image absolute inset-0 z-0">
        <Image
          src="/images/projects/coming-soon-bg.jpg"
          alt="Sampan Group Development"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover opacity-30 brightness-[0.6]"
        />
      </div>

      {/* ── Cinematic Dark Overlays ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/70 to-[#050505]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_30%,rgba(0,125,197,0.10),transparent_60%)]" />

      {/* ── Architectural Grid Background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Top Brand Identity ── */}
      <div className="cs-brand mt-20 relative z-10 flex flex-col items-center">
        <h2 className="text-sm font-medium tracking-[0.2em] text-white sm:text-base">
          SAMPAN GROUP
        </h2>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.4em] text-white/50">
          Developing the Future
        </p>
      </div>

      {/* ── Center Content ── */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Coming Soon Eyebrow */}
        <div className="cs-eyebrow mb-8 flex items-center gap-4">
          <span className="h-px w-8 bg-[#007dc5]/60"></span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-[#007dc5]">
            Coming Soon
          </span>
          <span className="h-px w-8 bg-[#007dc5]/60"></span>
        </div>

        {/* Title */}
        <h1 className="mb-8 text-[clamp(2.5rem,8vw,7rem)] font-extralight leading-[1.05] tracking-[-0.04em] text-balance">
          <span className="cs-title-line block overflow-hidden">
            The Village Will
          </span>
          <span className="cs-title-line block overflow-hidden font-medium text-[#007dc5]">
            Be The City.
          </span>
        </h1>

        {/* Blue Accent Line */}
        <div className="cs-accent-line mb-8 h-px w-16 bg-white/30 origin-center"></div>

        {/* Description - Increased Opacity for Visibility */}
        <p className="cs-desc max-w-md text-sm leading-7 text-white/80 sm:text-base">
          A new digital experience is coming soon. We are crafting a platform
          reflecting our vision, our divisions, and our commitment to building
          the future.
        </p>
      </div>

      {/* ── Bottom Content (Countdown & Input) ── */}
      <div className="relative z-10 flex w-full flex-col items-center gap-12 px-6">
        {/* Cohesive Countdown Timer Strip */}
        <div className="flex items-stretch justify-center">
          {timeBlocks.map((block, i) => (
            <div
              key={block.label}
              className={`cs-timer-item flex flex-col items-center px-4 sm:px-8 ${
                i !== 0 ? "border-l border-white/10" : ""
              }`}
            >
              <span
                className={`font-mono text-[clamp(2rem,5vw,3.5rem)] font-light tabular-nums tracking-tight text-white ${
                  block.isSeconds ? "cs-seconds-tick" : ""
                }`}
              >
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="mt-2 font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Notify Input & Socials */}
        <div className="flex w-full max-w-md flex-col items-center gap-8">
          <div className="cs-notify w-full">
            {submitted ? (
              <div className="flex min-h-[56px] items-center justify-center border border-[#007dc5]/30 bg-[#007dc5]/5 px-6 text-xs font-medium text-[#007dc5]">
                Thank you. We will notify you when we launch.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative flex w-full items-center border border-white/15 bg-white/[0.02] p-2 backdrop-blur-sm transition-colors focus-within:border-[#007dc5]/60"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for launch updates"
                  className="h-10 w-full bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none"
                />
                <button
                  ref={magneticBtnRef}
                  type="submit"
                  aria-label="Subscribe"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#007dc5] text-white transition-colors duration-300 hover:bg-white hover:text-[#007dc5]"
                >
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div className="cs-socials flex items-center gap-4">
            <a
              href="https://www.facebook.com/sampangroup/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#007dc5] hover:text-[#007dc5]"
            >
              <FaFacebookF className="h-3 w-3" />
            </a>
            <a
              href="https://www.linkedin.com/company/sampangroup/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#007dc5] hover:text-[#007dc5]"
            >
              <FaLinkedinIn className="h-3 w-3" />
            </a>
            <a
              href="https://www.youtube.com/@SampanGroupbangladesh"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#007dc5] hover:text-[#007dc5]"
            >
              <FaYoutube className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
