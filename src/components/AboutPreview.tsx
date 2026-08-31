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
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".ap-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ap-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* CARDS STAGGERED ENTRANCE */
        gsap.fromTo(
          ".ap-card",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ap-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* SOCIALS ENTRANCE */
        gsap.fromTo(
          ".ap-socials",
          { y: 30, opacity: 0 },
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
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -left-6 bottom-0 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
        Group
      </span>

      {/* Subtle Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="ap-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                A closer look at Sampan
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              One group.
              <br />
              <span className="text-neutral-400">
                Three ways to create value.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            A snapshot of the group and two concerns helping turn a shared
            vision into opportunity, expertise, and lasting value.
          </p>
        </div>

        {/* ====== ARCHITECTURAL GRID ====== */}
        <div className="ap-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {snapshots.map((snapshot) => (
            <article
              key={snapshot.title}
              className="ap-card group relative flex flex-col overflow-hidden border border-neutral-200 bg-white p-10 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
            >
              {/* Top Emerald Hover Line */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />

              {/* Logo Container */}
              <div className="relative mb-12 h-24 w-full">
                <Image
                  src={snapshot.logo}
                  alt={`${snapshot.title} logo`}
                  fill
                  sizes="300px"
                  className="object-contain object-left transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05]"
                />
              </div>

              {/* Type Badge & Divider */}
              <div className="mb-6 flex items-center gap-4">
                <span className="inline-block bg-neutral-100 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-700">
                  {snapshot.type}
                </span>
                <span className="h-px flex-1 bg-neutral-200" />
              </div>

              {/* Title */}
              <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.1] tracking-tight text-neutral-950">
                {snapshot.title}
              </h3>

              {/* Copy */}
              <p className="mt-4 flex-1 text-sm leading-7 text-neutral-500">
                {snapshot.copy}
              </p>

              {/* Footer: CTA + Individual Socials (Stacked) */}
              <div className="mt-10 flex flex-col items-start gap-6 border-t border-neutral-100 pt-6">
                {/* Refined "Learn more" Micro-Button */}
                <Link
                  href={snapshot.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800 transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  {snapshot.ctaText}
                  <FiArrowRight className="h-3 w-3 transition-transform duration-500 group-hover/cta:translate-x-1" />
                </Link>

                {/* Individual Social Links */}
                <div className="flex items-center gap-2">
                  {snapshot.socials.map((social) => {
                    const Icon = social.Icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${snapshot.title} on ${social.label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                      >
                        <Icon className="h-3.5 w-3.5" />
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
