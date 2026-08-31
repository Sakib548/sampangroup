"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiMail, FiPhone, FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  SITEMAP DATA                                                       */
/* ------------------------------------------------------------------ */

const sitemap = [
  {
    title: "Corporate",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Investment Portfolio", href: "/investments" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Accreditation & Awards", href: "/awards" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Real Estate",
    links: [
      { label: "SDL", href: "/real-estate/sdl" },
      { label: "Metro Square", href: "/real-estate/metro-square" },
      { label: "Motalib Skyline", href: "/real-estate/motalib-skyline" },
      { label: "Nexus", href: "/real-estate/nexus" },
      { label: "Residency Tower 1 & 2", href: "/real-estate/residency" },
      { label: "Taj", href: "/real-estate/taj" },
      { label: "Niketon", href: "/real-estate/niketon" },
      { label: "21st Century", href: "/real-estate/21st-century" },
    ],
  },
  {
    title: "Hospitality & Travel",
    links: [
      { label: "Highway Inn", href: "/hospitality/highway-inn" },
      { label: "Express Highway Inn", href: "/hospitality/express" },
      { label: "EHCL", href: "/hospitality/ehcl" },
      { label: "White Hall", href: "/hospitality/white-hall" },
      { label: "Eco & Agro Resort", href: "/hospitality/eco-agro" },
    ],
    secondary: {
      title: "Golf Zone",
      links: [
        { label: "Agro & Golf Resort", href: "/golf/agro-resort" },
        { label: "Golf Academy", href: "/golf/academy" },
        { label: "Short Drive Range", href: "/golf/range" },
      ],
    },
  },
  {
    title: "Education",
    links: [{ label: "LSHS", href: "/education/lshs" }],
    secondary: {
      title: "Agro & Retail",
      links: [
        { label: "Eco & Agro", href: "/agro/eco-agro" },
        { label: "Sampan Mart", href: "/retail/sampan-mart" },
        { label: "Mini Sampan", href: "/retail/mini-sampan" },
        { label: "Trade Emporium", href: "/retail/emporium" },
        { label: "Sweet Box", href: "/retail/sweet-box" },
      ],
    },
  },
  {
    title: "Manufacturing & Auto",
    links: [
      { label: "Hollow Bricks & Tile", href: "/mfg/bricks" },
      { label: "Pet & Beverage", href: "/mfg/beverage" },
      { label: "Industrial Park", href: "/mfg/industrial-park" },
      { label: "Sampan Auto", href: "/auto/sampan-auto" },
      { label: "Cafe Metro", href: "/food/cafe-metro" },
      { label: "Filling Station", href: "/energy/filling" },
      { label: "LPG / EV Charging", href: "/energy/lpg-ev" },
      { label: "Towing", href: "/auto/towing" },
    ],
  },
  {
    title: "Defense & Maritime",
    links: [
      { label: "Fire Arms Co.", href: "/defense/fire-arms" },
      { label: "Nagar Arms", href: "/defense/nagar-arms" },
      { label: "Floating Pearl", href: "/maritime/floating-pearl" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sampangroup/",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sampangroup/",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SampanGroupbangladesh",
    Icon: FaYoutube,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801XXXXXXXXX",
    Icon: FaWhatsapp,
  },
];

const MARQUEE_ITEMS = [
  "Sampan Group",
  "Building Opportunities",
  "The Village Will Be The City",
  "Diversified Excellence",
  "Since Inception",
  "Real Estate",
  "Hospitality",
  "Golf",
  "Education",
  "Manufacturing",
  "Defense",
];

/* ------------------------------------------------------------------ */
/*  SEPARATOR                                                          */
/* ------------------------------------------------------------------ */

function Separator() {
  const lineRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 95%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          shimmerRef.current,
          { x: "-40%", opacity: 0 },
          {
            x: "140%",
            opacity: 0.8,
            duration: 2.5,
            delay: 1.8,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 95%",
              once: true,
            },
          },
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (lineRef.current) lineRef.current.style.transform = "scaleX(1)";
      });
    },
    { scope: lineRef },
  );

  return (
    <div className="relative h-px w-full" ref={lineRef}>
      <div className="absolute inset-0 origin-left bg-white/[0.08]" />
      <div
        ref={shimmerRef}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAGNETIC LINK                                                      */
/* ------------------------------------------------------------------ */

function MagneticLink({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(ref.current, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.25,
        ease: "power2.out",
      });
      if (glowRef.current) {
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        glowRef.current.style.background = `radial-gradient(circle 32px at ${px}px ${py}px, rgba(16,185,129,0.22), transparent)`;
        glowRef.current.style.opacity = "1";
      }
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.3 });
    }
  }, []);

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <span
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        aria-hidden="true"
      />
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  SITEMAP COLUMN                                                     */
/* ------------------------------------------------------------------ */

function SitemapColumn({
  title,
  links,
  secondary,
  index,
}: {
  title: string;
  links: { label: string; href: string }[];
  secondary?: { title: string; links: { label: string; href: string }[] };
  index: number;
}) {
  const colRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          colRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: colRef.current,
              start: "top 96%",
              once: true,
            },
          },
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (colRef.current) {
          colRef.current.style.opacity = "1";
          colRef.current.style.transform = "none";
        }
      });
    },
    { scope: colRef },
  );

  return (
    <div ref={colRef} className="space-y-6 opacity-0">
      <div>
        <h4 className="mb-5 flex items-center gap-2.5 font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-white/45">
          <span className="inline-block h-[4px] w-[4px] rounded-full bg-emerald-500/60" />
          {title}
        </h4>
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative -mx-2 inline-flex w-auto items-center rounded-md px-2 py-1 text-[13px] leading-snug text-white/50 transition-all duration-300 hover:bg-white/[0.05] hover:text-white/95"
              >
                {link.label}
                <FiArrowUpRight className="ml-0 h-0 w-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:h-3 group-hover:w-3 group-hover:opacity-50" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {secondary && (
        <div className="pt-6 border-t border-white/[0.05]">
          <h4 className="mb-4 flex items-center gap-2.5 font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-emerald-500/40" />
            {secondary.title}
          </h4>
          <ul className="space-y-1">
            {secondary.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group relative -mx-2 inline-flex w-auto items-center rounded-md px-2 py-1 text-[13px] leading-snug text-white/50 transition-all duration-300 hover:bg-white/[0.05] hover:text-white/95"
                >
                  {link.label}
                  <FiArrowUpRight className="ml-0 h-0 w-0 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:h-3 group-hover:w-3 group-hover:opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const spotlightWrapRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTweenRef = useRef<gsap.core.Tween | null>(null);

  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── Mouse Spotlight ─────────────────────────────────────────────── */
  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    const wrapper = spotlightWrapRef.current;
    if (!container || !spotlight || !wrapper) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      spotlight.style.transform = `translate3d(${e.clientX - rect.left - 500}px, ${e.clientY - rect.top - 500}px, 0)`;
    };
    const handleEnter = () =>
      gsap.to(wrapper, { opacity: 1, duration: 0.5, ease: "power2.out" });
    const handleLeave = () =>
      gsap.to(wrapper, { opacity: 0, duration: 0.7, ease: "power2.in" });

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  /* ── Back to Top ─────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ── GSAP ────────────────────────────────────────────────────────── */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".f-anim", ".footer-ghost-logo", ".footer-accent-line"], {
          opacity: 1,
          y: 0,
          scaleX: 1,
        });
        gsap.set(".f-heading-line", { y: "0%" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".footer-accent-line",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 2.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 97%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".f-heading-line",
          { y: "115%" },
          {
            y: "0%",
            duration: 1.2,
            stagger: 0.14,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".footer-top",
              start: "top 90%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".f-anim",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".footer-top",
              start: "top 90%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".footer-ghost-logo",
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 94%",
              once: true,
            },
          },
        );

        gsap.to(".footer-ghost-parallax", {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        if (marqueeRef.current) {
          marqueeTweenRef.current = gsap.to(marqueeRef.current, {
            x: "-50%",
            duration: 55,
            ease: "none",
            repeat: -1,
          });
        }
      });
    },
    { scope: containerRef },
  );

  /* ── Marquee hover ──────────────────────────────────────────────── */
  const handleMarqueeEnter = () => {
    if (marqueeTweenRef.current)
      gsap.to(marqueeTweenRef.current, {
        timeScale: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
  };
  const handleMarqueeLeave = () => {
    if (marqueeTweenRef.current)
      gsap.to(marqueeTweenRef.current, {
        timeScale: 1,
        duration: 0.6,
        ease: "power2.inOut",
      });
  };

  /* ── Render ─────────────────────────────────────────────────────── */
  return (
    <footer
      ref={containerRef}
      className="relative w-full overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(ellipse 90% 55% at 10% 90%, rgba(16,185,129,0.035) 0%, transparent 55%),
          radial-gradient(ellipse 70% 45% at 90% 10%, rgba(16,185,129,0.022) 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at 50% 50%, rgba(16,185,129,0.01) 0%, transparent 60%),
          linear-gradient(180deg, #080808 0%, #050505 30%, #030303 100%)
        `,
      }}
    >
      {/* ── Top accent line ── */}
      <div
        className="footer-accent-line absolute top-0 left-0 right-0 z-30 h-px origin-center scale-x-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.4) 20%, rgba(16,185,129,0.6) 50%, rgba(16,185,129,0.4) 80%, transparent 100%)",
        }}
      />

      {/* ── Noise ── */}
      <svg
        className="pointer-events-none absolute inset-0 z-[70] h-full w-full opacity-[0.02]"
        aria-hidden="true"
      >
        <filter id="ftr-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#ftr-grain)" />
      </svg>

      {/* ── Spotlight ── */}
      <div
        ref={spotlightWrapRef}
        className="pointer-events-none absolute inset-0 z-[1] opacity-0"
        aria-hidden="true"
      >
        <div
          ref={spotlightRef}
          className="absolute left-0 top-0 h-[1000px] w-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.07) 0%, rgba(16,185,129,0.015) 35%, transparent 65%)",
            willChange: "transform",
          }}
        />
      </div>

      {/* ── Decorative dots ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      >
        <span className="absolute left-[10%] top-[18%] h-[2px] w-[2px] rounded-full bg-emerald-500/[0.15]" />
        <span className="absolute right-[12%] top-[40%] h-[2.5px] w-[2.5px] rounded-full bg-emerald-500/[0.1]" />
        <span className="absolute bottom-[25%] left-[25%] h-[2px] w-[2px] rounded-full bg-emerald-500/[0.08]" />
        <span className="absolute right-[30%] bottom-[15%] h-[1.5px] w-[1.5px] rounded-full bg-emerald-500/[0.12]" />
        <span className="absolute left-[50%] top-[8%] h-[1.5px] w-[1.5px] rounded-full bg-emerald-500/[0.09]" />
      </div>

      {/* ── Ghost logo (Anchored to Absolute Bottom) ── */}
      <div
        className="footer-ghost-parallax pointer-events-none absolute -bottom-[8%] left-1/2 z-0 -translate-x-1/2 select-none opacity-[0.035]"
        aria-hidden="true"
      >
        <div className="footer-ghost-logo w-[90vw] max-w-[1400px]">
          <Image
            src="/images/Sampan-Group.png"
            alt=""
            width={1400}
            height={480}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/*  CONTENT                                                       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-[1536px] px-5 pt-20 pb-8 sm:px-8 lg:px-12 lg:pt-28 lg:pb-10 xl:px-16">
        {/* ============ TOP: BRAND + VISION ============ */}
        <div className="footer-top grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-20">
          {/* Logo / Brand */}
          <div className="f-anim lg:col-span-5 lg:pt-2">
            <span className="mb-6 block font-mono text-[9px] uppercase tracking-[0.4em] text-emerald-500/60">
              Sampan Group
            </span>
            <Link
              href="/"
              className="inline-block"
              aria-label="Sampan Group Home"
            >
              <Image
                src="/images/brand/sampangroup.png"
                alt="Sampan Group"
                width={400}
                height={100}
                priority
                className="h-16 w-44 object-contain opacity-90 transition-all duration-500 hover:opacity-100 hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.15)] sm:h-20 sm:w-52 lg:h-24 lg:w-60"
              />
            </Link>
            <p className="f-anim mt-8 max-w-[320px] text-[13px] leading-[1.8] text-white/45">
              A diversified group; building opportunities across industries,
              communities, and generations.
            </p>
          </div>

          {/* Vision */}
          <div className="f-anim lg:col-span-7 lg:flex lg:items-end lg:justify-end">
            <div className="lg:text-right">
              <div className="mb-5 flex items-center gap-3 lg:justify-end">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.5em] text-emerald-500/70">
                  Our Vision
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-emerald-500/50 to-transparent" />
              </div>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                <span className="block overflow-hidden pb-2">
                  <span className="f-heading-line inline-block text-white/95">
                    The village will be
                  </span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <span className="f-heading-line inline-block bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    the city.
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <Separator />

        {/* ============ MARQUEE ============ */}
        <div
          className="relative -mx-5 overflow-hidden px-5 py-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16"
          onMouseEnter={handleMarqueeEnter}
          onMouseLeave={handleMarqueeLeave}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050505] to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050505] to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div ref={marqueeRef} className="flex w-max will-change-transform">
            {[0, 1].map((set) => (
              <span key={set} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.map((item, i) => (
                  <span key={`${set}-${i}`} className="flex items-center">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-white/[0.18]">
                      {item}
                    </span>
                    <span className="mx-6 text-emerald-500/[0.15]">
                      <span className="block h-[3px] w-[3px] rounded-full bg-emerald-500/30" />
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <Separator />

        {/* ============ SITEMAP ============ */}
        <div className="footer-sitemap grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:gap-x-12 md:grid-cols-3 lg:grid-cols-6 lg:py-20">
          {sitemap.map((section, i) => (
            <SitemapColumn
              key={section.title}
              title={section.title}
              links={section.links}
              secondary={section.secondary}
              index={i}
            />
          ))}
        </div>

        <Separator />

        {/* ============ CONTACT + SOCIAL ============ */}
        <div className="f-anim grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16">
          <a
            href="mailto:info@sampangroup.com.bd"
            className="group flex items-center gap-4 rounded-xl border border-white/[0.05] p-4 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.02]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.05]">
              <FiMail className="h-5 w-5 text-emerald-500/60 transition-colors duration-300 group-hover:text-emerald-400" />
            </span>
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-white/35 mb-1">
                Email
              </span>
              <span className="text-[14px] text-white/65 transition-colors duration-300 group-hover:text-white/90">
                info@sampangroup.com.bd
              </span>
            </div>
          </a>

          <a
            href="tel:+880192991840011"
            className="group flex items-center gap-4 rounded-xl border border-white/[0.05] p-4 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.02]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.05]">
              <FiPhone className="h-5 w-5 text-emerald-500/60 transition-colors duration-300 group-hover:text-emerald-400" />
            </span>
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-white/35 mb-1">
                Phone
              </span>
              <span className="text-[14px] text-white/65 transition-colors duration-300 group-hover:text-white/90">
                +880 192991840011
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3 sm:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.Icon;
              return (
                <MagneticLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/45 transition-all duration-500 hover:border-emerald-500/30 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                >
                  <Icon className="h-4 w-4" />
                </MagneticLink>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* ============ BOTTOM BAR ============ */}
        <div className="f-anim flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center lg:pt-12">
          <p className="text-[11px] text-white/40 font-mono tracking-wide">
            © {new Date().getFullYear()} Sampan Group. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Sitemap"
                    ? "#sitemap"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="relative text-[11px] text-white/40 transition-colors duration-300 hover:text-white/80 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-500/40 after:transition-all after:duration-500 after:ease-out hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/45 transition-all duration-500 hover:text-emerald-400 ${
              showBackToTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <span>Top</span>
            <FiArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
