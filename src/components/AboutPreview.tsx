"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const snapshots = [
  {
    title: "Sampan Group",
    type: "The Parent Group",
    logo: "/images/Sampan-Group.png",
    copy: "From one highway stop to a group spanning real estate, hospitality, education, agriculture, manufacturing, and mobility.",
    href: "https://sampangroup.com.bd/",
  },
  {
    title: "Sampan Development Ltd",
    type: "Real Estate & Land",
    logo: "/images/logos/6-sampan-dev-ltd.png",
    copy: "Sampan’s REHAB-member real estate arm, delivering land-share, residential, commercial, and outright-sale projects.",
    href: "https://sampandevelopmentltd.com/",
  },
  {
    title: "London School of Higher Studies",
    type: "Professional Education",
    logo: "/images/logos/5-lshs.png",
    copy: "CIPS and CMI qualifications taught in Bangladesh through UK-affiliated professional education and recognized internationally.",
    href: "https://cips.lshs.co.uk/",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/sampangroup/", Icon: FaFacebookF },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sampangroup/", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://www.youtube.com/@SampanGroupbangladesh", Icon: FaYoutube },
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
        gsap.set([".ap-header > *", ".ap-card", ".ap-socials"], { opacity: 1, y: 0 });
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
            scrollTrigger: { trigger: ".ap-header", start: "top 85%", once: true },
          }
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
            scrollTrigger: { trigger: ".ap-grid", start: "top 85%", once: true },
          }
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
            scrollTrigger: { trigger: ".ap-socials", start: "top 90%", once: true },
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
      <span className="pointer-events-none absolute -left-6 bottom-0 select-none text-[12rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[18rem]">
        Group
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        
        {/* ====== EDITORIAL HEADER ====== */}
        <div className="ap-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-emerald-600" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                A closer look at Sampan
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              One group.
              <br />
              <span className="text-neutral-400">Three ways to create value.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            A snapshot of the group and two concerns helping turn a shared vision into opportunity, expertise, and lasting value.
          </p>
        </div>

        {/* ====== ARCHITECTURAL GRID ====== */}
        <div className="ap-grid grid grid-cols-1 border-t border-l border-neutral-200 lg:grid-cols-3">
          {snapshots.map((snapshot) => (
            <article 
              key={snapshot.title} 
              className="ap-card group relative flex flex-col border-b border-r border-neutral-200 p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] lg:p-10"
            >
              {/* Top Emerald Hover Line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />

              {/* Logo Container */}
              <div className="relative mb-12 h-16 w-44">
                <Image
                  src={snapshot.logo}
                  alt={`${snapshot.title} logo`}
                  fill
                  sizes="176px"
                  className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content (Pinned to bottom) */}
              <div className="mt-auto">
                {/* Type / Eyebrow */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-6 bg-emerald-500" />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {snapshot.type}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.1] tracking-tight text-neutral-950 transition-colors duration-500 group-hover:text-emerald-700">
                  {snapshot.title}
                </h3>

                {/* Copy */}
                <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500">
                  {snapshot.copy}
                </p>

                {/* CTA */}
                <Link
                  href={snapshot.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 hover:text-emerald-600"
                >
                  Learn more
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ====== SOCIAL LINKS ROW ====== */}
        <div className="ap-socials mt-16 flex flex-col items-center justify-between gap-8 border-t border-neutral-300/60 pt-8 lg:mt-24 lg:flex-row">
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            Connect with Sampan Group across our official channels for the latest updates, stories, and announcements.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Sampan Group on ${social.label}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-all duration-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
