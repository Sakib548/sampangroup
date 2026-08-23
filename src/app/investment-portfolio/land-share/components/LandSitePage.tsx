"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiArrowDown, FiMapPin } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Architectural Data ---

const buildCategories = [
  {
    title: "LAND",
    desc: "Strategic land acquisition & survey.",
    img: "/images.jpg",
  },
  {
    title: "COMMERCIAL",
    desc: "State-of-the-art business spaces.",
    img: "/images.jpg",
  },
  {
    title: "RESIDENTIAL",
    desc: "Premium living environments.",
    img: "/images.jpg",
  },
  {
    title: "DEVELOPMENT",
    desc: "Economical & sustainable communities.",
    img: "/images.jpg",
  },
];

const ongoingProjects = [
  {
    num: "01",
    name: "Sampan Metro Square",
    location: "Ashulia",
    img: "/images.jpg",
  },
  {
    num: "02",
    name: "Sampan Motalib Skyline",
    location: "Dhaka",
    img: "/images.jpg",
  },
  {
    num: "03",
    name: "Sampan Nexus",
    location: "Mawna",
    img: "/images.jpg.png",
  },
  {
    num: "04",
    name: "Sampan Residency Tower",
    location: "Express Highway Inn",
    img: "/images.jpg.png",
  },
];

const journeySteps = [
  { num: "01", title: "LAND", desc: "Identifying high-growth corridors." },
  { num: "02", title: "PLANNING", desc: "Architectural master planning." },
  {
    num: "03",
    title: "DEVELOPMENT",
    desc: "Infrastructure & utility integration.",
  },
  {
    num: "04",
    title: "CONSTRUCTION",
    desc: "Precision building & quality control.",
  },
  { num: "05", title: "DELIVERY", desc: "Handover & asset management." },
];

// --- Main Component ---

export default function SampanDevelopmentLtd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Multi-Layer Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-title-line",
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
          )
          .fromTo(
            ".hero-sub",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.6",
          )
          .fromTo(
            ".hero-img-wrap",
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.5,
              ease: "power3.out",
            },
            "-=1",
          )
          .fromTo(
            ".hero-number",
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 0.1, scale: 1, duration: 1.5, ease: "power2.out" },
            "-=1.2",
          );

        // 2. Hero Scroll Parallax (Multi-layer)
        gsap.to(".hero-img-wrap", {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero-text", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero-number", {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // 3. Horizontal Scroll Section
        const horizontalSection = horizontalRef.current;
        const track = horizontalSection?.querySelector(".horizontal-track");
        if (track) {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth) + "px",
            ease: "none",
            scrollTrigger: {
              trigger: horizontalSection,
              start: "top top",
              end: () => `+=${track.scrollWidth}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // 4. General Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });

        // 5. Atlas Interaction
        const atlasItems = gsap.utils.toArray<HTMLElement>(".atlas-item");
        atlasItems.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item.querySelector(".atlas-name"), {
              x: 20,
              duration: 0.4,
              ease: "power3.out",
            });
            gsap.to(item.querySelector(".atlas-num"), {
              color: "#10b981",
              duration: 0.4,
            });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item.querySelector(".atlas-name"), {
              x: 0,
              duration: 0.4,
              ease: "power3.out",
            });
            gsap.to(item.querySelector(".atlas-num"), {
              color: "#ffffff",
              duration: 0.4,
            });
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-title-line",
            ".hero-sub",
            ".hero-img-wrap",
            ".hero-number",
            ".reveal-up",
          ],
          { autoAlpha: 1, y: 0, x: 0, clipPath: "none" },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="bg-white text-neutral-950 overflow-x-hidden"
    >
      {/* 1. EDITORIAL SPLIT-PLANE HERO */}
      <section className="hero-section relative min-h-screen w-full overflow-hidden bg-black text-white">
        {/* Typography Left Zone */}
        <div className="hero-text absolute left-0 top-0 z-20 flex h-full w-full flex-col justify-center p-8 md:w-2/3 md:p-16">
          <p className="hero-sub mb-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-400">
            Real Estate & Land Investment
          </p>
          <h1 className="flex flex-col overflow-hidden text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
            <span className="hero-title-line block">BUILDING</span>
            <span className="hero-title-line block">POSSIBILITIES.</span>
          </h1>
          <div className="hero-sub mt-12 flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Sampan Development Ltd
            </span>
            <span className="h-px w-16 bg-white/30" />
          </div>
        </div>

        {/* Image Right Zone */}
        <div
          className="hero-img-wrap absolute right-0 top-0 z-10 h-full w-full md:w-1/2"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images.jpg"
              alt="SDL Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-70 md:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-black/80 md:via-transparent md:to-transparent" />
          </div>
        </div>

        {/* Giant Editorial Number */}
        <span className="hero-number absolute right-4 top-4 z-30 text-[clamp(8rem,20vw,20rem)] font-bold leading-none text-white/10 md:top-auto md:bottom-4">
          01
        </span>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <FiArrowDown className="animate-bounce" />
        </div>
      </section>

      {/* 2. WHAT WE BUILD (Interactive Index) */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="reveal-up mb-16 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            01 / What We Build
          </p>
          <div className="flex flex-col">
            {buildCategories.map((cat) => (
              <div
                key={cat.title}
                className="group relative flex items-center border-b border-neutral-200 py-12 cursor-pointer overflow-hidden"
              >
                <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight transition-all duration-500 group-hover:text-emerald-600 group-hover:translate-x-8">
                  {cat.title}
                </h2>
                <p className="reveal-up ml-auto hidden text-base leading-7 text-neutral-600 transition-opacity duration-500 group-hover:text-neutral-900 md:block">
                  {cat.desc}
                </p>
                {/* Hover Image Overlay */}
                <div className="pointer-events-none absolute right-0 top-1/2 z-10 h-64 w-64 translate-x-20 -translate-y-1/2 scale-50 opacity-0 overflow-hidden rounded-lg transition-all duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">
                  <Image
                    src="/images.jpg"
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute left-0 bottom-0 h-1 w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SDL STORY (Asymmetric Magazine Layout) */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="reveal-up col-span-12 md:col-span-8 md:col-start-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images.jpg"
                  alt="SDL Development"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 80vw, 100vw"
                />
              </div>
            </div>
            <div className="reveal-up col-span-12 md:col-span-5 md:col-start-2 md:-mt-32 md:bg-[#f8f8f8] md:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                The SDL Story
              </p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
                Land. Development. Opportunity.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
                We don&apos;t just construct buildings; we engineer ecosystems.
                From strategic land acquisition to premium commercial spaces and
                economical housing, SDL builds the foundation for future growth.
              </p>
              <Link
                href="#projects"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900"
              >
                View Atlas{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEVELOPMENT ATLAS (Interactive Portfolio) */}
      <section id="projects" className="bg-[#080808] py-20 text-white lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              02 / Development Atlas
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {/* List 40% */}
            <div className="col-span-12 md:col-span-5">
              {ongoingProjects.map((project, i) => (
                <div
                  key={project.num}
                  className="atlas-item group border-b border-white/10 py-8 cursor-pointer"
                  onMouseEnter={() => setActiveProject(i)}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="atlas-num text-xl font-semibold text-white/40 transition-colors">
                      {project.num}
                    </span>
                    <div>
                      <h3 className="atlas-name text-xl font-semibold tracking-tight transition-transform">
                        {project.name}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
                        <FiMapPin /> {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Image 60% */}
            <div className="hidden col-span-7 md:block">
              <div className="relative sticky top-32 aspect-[4/5] w-full overflow-hidden">
                {ongoingProjects.map((project, i) => (
                  <div
                    key={project.num}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeProject === i
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-95 -translate-x-10 pointer-events-none"
                    }`}
                  >
                    <Image
                      src="/images.jpg"
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE LAND SHARE (Dark Statement) */}
      <section className="relative overflow-hidden bg-neutral-950 py-32 text-white lg:py-40">
        {/* Radial Grid Visual */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative h-[800px] w-[800px]">
            <div
              className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute inset-12 rounded-full border border-emerald-500/20 animate-spin"
              style={{ animationDuration: "30s" }}
            ></div>
            <div className="absolute inset-24 rounded-full border border-emerald-500/20"></div>
            <div className="absolute inset-40 rounded-full border border-emerald-500/10"></div>
            {/* Grid Lines */}
            <div className="absolute top-1/2 left-0 h-px w-full bg-emerald-500/10"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-emerald-500/10"></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 text-center md:px-12">
          <p className="reveal-up mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            03 / Investment Model
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
            LAND <br />
            <span className="text-emerald-500">SHARE</span>
          </h2>
          <p className="reveal-up mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Pioneering fractional ownership in prime real estate. Secure your
            piece of the development with manageable capital.
          </p>
          <div className="reveal-up mt-10">
            <Link
              href="/investment-portfolio"
              className="group inline-flex items-center gap-4 border-b-2 border-emerald-500 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-emerald-400"
            >
              Explore Investment Portfolio{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT IN MOTION (Horizontal Scroll) */}
      <section
        ref={horizontalRef}
        className="relative h-screen overflow-hidden bg-white"
      >
        <div className="absolute top-0 left-0 z-10 p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            04 / The Journey
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
            Development in Motion
          </h2>
        </div>

        <div className="horizontal-track absolute top-1/2 flex -translate-y-1/2 items-center gap-16 pl-24 pr-96">
          {journeySteps.map((step) => (
            <div
              key={step.num}
              className="relative w-[60vw] md:w-[40vw] shrink-0"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/images.jpg"
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <div className="mt-8 flex items-end justify-between border-b border-neutral-300 pb-4">
                <div>
                  <span className="block text-[8rem] font-bold leading-none text-neutral-100">
                    {step.num}
                  </span>
                  <h3 className="-mt-8 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="mb-2 max-w-[200px] text-right text-base leading-7 text-neutral-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REAL ESTATE CATEGORIES (Hover Menu) */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="reveal-up mb-16 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            05 / Categories
          </p>
          <div className="flex flex-col">
            {buildCategories.map((cat) => (
              <div
                key={cat.title}
                className="group relative flex h-32 cursor-pointer items-center border-b border-neutral-300 overflow-hidden md:h-40"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 scale-105 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-20">
                  <Image
                    src="/images.jpg"
                    alt={cat.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="relative z-10 flex w-full items-center justify-between p-4 md:p-8">
                  <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-neutral-400 transition-all duration-300 group-hover:text-neutral-950">
                    {cat.title}
                  </h2>
                  <p className="hidden text-right text-base leading-7 text-neutral-600 md:block">
                    {cat.desc}
                  </p>
                  <FiArrowRight className="z-10 -translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION LAYER (Minimalist Map) */}
      <section className="bg-black py-20 text-white lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                06 / Locations
              </p>
              <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
                Location Layer
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              {/* Abstract Grid Map */}
              <div className="relative h-[400px] w-full border border-white/10 bg-[url('/images/grid-pattern.png')] bg-cover">
                {/* Location Dots */}
                <div className="absolute left-[20%] top-[40%] flex flex-col items-center">
                  <span className="h-3 w-3 animate-ping rounded-full bg-emerald-500"></span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-white/60">
                    Ashulia
                  </span>
                </div>
                <div className="absolute left-[50%] top-[60%] flex flex-col items-center">
                  <span className="h-3 w-3 animate-ping rounded-full bg-emerald-500"></span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-white/60">
                    Mawna
                  </span>
                </div>
                <div className="absolute left-[80%] top-[30%] flex flex-col items-center">
                  <span className="h-3 w-3 animate-ping rounded-full bg-emerald-500"></span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-white/60">
                    Express Highway
                  </span>
                </div>
                {/* Coordinates Typography */}
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-white/30">
                  23.8728° N, 90.3984° E
                </span>
                <span className="absolute bottom-4 right-4 text-[10px] font-mono text-white/30">
                  DEV ZONE 01
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA (Giant Editorial Footer) */}
      <section className="relative min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/images.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 w-full">
          <p className="reveal-up mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Get Started
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
            READY TO <br />
            <span className="text-emerald-500">BUILD</span> VALUE?
          </h2>

          <div className="reveal-up mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-6 text-xl font-semibold border-b border-white/20 pb-4 transition-colors hover:border-emerald-500 hover:text-emerald-400 md:text-2xl"
              >
                PROJECT ENQUIRY
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-emerald-500 group-hover:bg-emerald-500">
                  <FiArrowRight />
                </span>
              </Link>
              <Link
                href="/investment-portfolio"
                className="group flex items-center gap-6 text-xl font-semibold border-b border-white/20 pb-4 transition-colors hover:border-emerald-500 hover:text-emerald-400 md:text-2xl"
              >
                INVESTMENT PORTFOLIO
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-emerald-500 group-hover:bg-emerald-500">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Real Estate & Land Investment
              </p>
              <p className="mt-2 text-xl font-semibold">
                Sampan Development Ltd
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
