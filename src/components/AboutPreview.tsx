"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type SocialLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type Snapshot = {
  title: string;
  type: string;
  logo: string;
  copy: string;
  href: string;
  domain: string;
  ctaText: string;
  socials: SocialLink[];
};

const snapshots: Snapshot[] = [
  {
    title: "Sampan Group",
    type: "The Parent Group",
    logo: "/images/brand/sampangroup.png",
    copy: "A conglomerate that grew outward from a single highway stop into real estate, hospitality, education, agriculture, manufacturing, and mobility - nine divisions, one motto: the village will be the city.",
    href: "https://sampangroup.com.bd/",
    domain: "sampangroup.com.bd",
    ctaText: "Learn more about us",
    socials: [
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
    ],
  },
  {
    title: "Sampan Development Ltd",
    type: "Real Estate & Land",
    logo: "/images/logos/6-sampan-dev-ltd.png",
    copy: "The land and construction arm behind Sampan's real estate portfolio - outright sale, land share, and residential and commercial builds, backed by REHAB membership.",
    href: "https://sampandevelopmentltd.com/",
    domain: "sampandevelopmentltd.com",
    ctaText: "Explore our projects",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/SampanDevelopmentLtd",
        Icon: FaFacebookF,
      },
    ],
  },
  {
    title: "London School of Higher Studies",
    type: "Professional Education",
    logo: "/images/logos/5-lshs.png",
    copy: "UK-affiliated professional education offering CIPS and CMI qualifications - taught in Bangladesh, recognized internationally.",
    href: "https://cips.lshs.co.uk/",
    domain: "cips.lshs.co.uk",
    ctaText: "Discover LSHS",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/lshs.co.uk/",
        Icon: FaFacebookF,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/lshs.co.uk/",
        Icon: FaInstagram,
      },
      {
        label: "LinkedIn",
        href: "https://uk.linkedin.com/company/londoncollege",
        Icon: FaLinkedinIn,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@LondonSchoolofHigherStudies",
        Icon: FaYoutube,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".ap-header > *", ".ap-card", ".ap-socials"], {
          opacity: 1,
          y: 0,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".ap-header > *",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ap-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".ap-card",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ap-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".ap-socials",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ap-socials",
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2]"
    >
      {/* ── Giant Ghost Background Watermark ── */}
      <span
        className="pointer-events-none absolute -left-6 bottom-0 select-none font-black leading-none text-neutral-950 text-[12rem] md:text-[18rem] lg:text-[22rem]"
        style={{ opacity: 0.018 }}
        aria-hidden="true"
      >
        Group
      </span>

      {/* ── Subtle Architectural Grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: 0.02,
          backgroundImage:
            "radial-gradient(circle, #000 0.4px, transparent 0.4px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw] ">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  EDITORIAL HEADER                                          */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="ap-header mb-10 flex flex-col justify-between gap-6 border-b border-neutral-300/50 pb-8 lg:mb-14 lg:flex-row lg:items-end lg:gap-10 lg:pb-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-600/80" />
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-neutral-400">
                01&nbsp;/
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                A closer look at Sampan
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              One group.
              <br />
              <span className="text-neutral-400">
                Three ways to create value.
              </span>
            </h2>
          </div>
          <p className="max-w-[280px] text-[13px] leading-[1.75] text-neutral-500 lg:text-right">
            A snapshot of the group and two concerns helping turn a shared
            vision into opportunity, expertise, and lasting value.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  CARDS GRID                                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="ap-grid grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {snapshots.map((snapshot, i) => (
            <article
              key={snapshot.title}
              className="ap-card group relative flex flex-col overflow-hidden rounded-sm border border-black/[0.08] bg-white p-7 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.1)] lg:p-8"
            >
              {/* ── Top Emerald Hover Line ── */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />

              {/* ── Card Number ── */}
              <span
                className="absolute top-6 right-7 font-mono text-[9px] tracking-[0.15em] text-neutral-950/20 lg:top-7 lg:right-8"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* ── Logo ── */}
              <div className="relative mb-6 h-14 w-full lg:h-16">
                <Image
                  src={snapshot.logo}
                  alt={`${snapshot.title} logo`}
                  fill
                  sizes="300px"
                  className="object-contain object-left transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
                />
              </div>

              {/* ── Type — Editorial Metadata ── */}
              <div className="mb-3 flex items-center gap-2.5">
                <span className="inline-block h-[3px] w-[3px] rounded-full bg-emerald-600/50" />
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {snapshot.type}
                </span>
              </div>

              {/* ── Title ── */}
              <h3 className="text-[1.4rem] font-semibold leading-[1.05] tracking-[-0.02em] text-neutral-950 md:text-[1.5rem] lg:text-[1.65rem]">
                {snapshot.title}
              </h3>

              {/* ── Description ── */}
              <p className="mt-3 flex-1 text-[13px] leading-[1.75] text-neutral-500">
                {snapshot.copy}
              </p>

              {/* ── Domain — Digital Signature ── */}
              <a
                href={snapshot.href}
                target="_blank"
                rel="noreferrer"
                className="group/dom mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] lowercase tracking-[0.14em] text-neutral-400 transition-colors duration-300 hover:text-neutral-600"
              >
                <span className="inline-block transition-all duration-300 group-hover/dom:translate-x-[3px] group-hover/dom:text-emerald-600 text-emerald-600/40">
                  ↗
                </span>
                {snapshot.domain}
              </a>

              {/* ── Bottom Divider ── */}
              <div className="mt-5 h-px w-full bg-neutral-100" />

              {/* ── CTA + Socials ── */}
              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={snapshot.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta relative inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.12em] text-neutral-800 transition-colors duration-300 hover:text-emerald-700"
                >
                  {snapshot.ctaText}
                  <FiArrowRight className="h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:translate-x-1" />
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:w-full" />
                </Link>

                <div className="ap-socials flex items-center gap-1.5">
                  {snapshot.socials.map((social) => {
                    const Icon = social.Icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${snapshot.title} on ${social.label}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                      >
                        <Icon className="h-3 w-3" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
