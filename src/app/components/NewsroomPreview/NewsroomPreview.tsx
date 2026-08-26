"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA (Replace with your actual CMS/API data)                       */
/* ------------------------------------------------------------------ */

const posts = [
  {
    id: "post-01",
    type: "PR",
    division: "Real Estate",
    date: "May 12, 2024",
    title:
      "Sampan Development Ltd. announces the handover of Sampan Metro Square Phase 1.",
    excerpt:
      "The first residential units are officially ready for handover, marking a major milestone for the Ashulia corridor.",
    image: "/images.jpg", // Replace with actual image
    href: "#news/post-01",
  },
  {
    id: "post-02",
    type: "Blog",
    division: "Hospitality",
    date: "April 28, 2024",
    title:
      "Redefining highway hospitality: The vision behind Express Highway Inn.",
    excerpt:
      "How Sampan Group is modernizing the traveler experience along the Dhaka-Khulna highway corridor.",
    image: "/images.jpg", // Replace with actual image
    href: "#news/post-02",
  },
  {
    id: "post-03",
    type: "PR",
    division: "Education",
    date: "April 10, 2024",
    title:
      "LSHS enrolls record number of students for UK-accredited CIPS programs.",
    excerpt:
      "London School of Higher Studies sees unprecedented demand for internationally recognized supply chain qualifications.",
    image: "/images.jpg", // Replace with actual image
    href: "#news/post-03",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function NewsroomPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* DESIGN REQUIREMENT: Do not go live empty. Hold back if no posts. */
  if (posts.length === 0) {
    return null;
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".news-header > *", ".news-card"], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* HEADER ENTRANCE */
        gsap.fromTo(
          ".news-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".news-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* CARDS STAGGERED ENTRANCE */
        gsap.fromTo(
          ".news-card",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".news-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        /* SUBTLE CARD IMAGE PARALLAX */
        gsap.utils.toArray<HTMLElement>(".news-card-img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".news-card"),
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2] py-24 lg:py-32"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
        News
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="news-header mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
          <div>            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Stories shaping
              <br />
              <span className="text-neutral-400">the Sampan ecosystem.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
            Updates from across our divisions—from project handovers and
            investments to corporate milestones.
          </p>
        </div>

        {/* ====== NEWS GRID ====== */}
        <div className="news-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="news-card group relative flex flex-col border border-neutral-200 bg-white transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.1)]"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div className="news-card-img absolute inset-0 h-[120%] w-full -top-[10%] will-change-transform">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Light Cinematic Overlay for image depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Type Tag (PR / Blog) */}
                <div className="absolute top-0 left-0 p-6 lg:p-8">
                  <span
                    className={`bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur-sm ${
                      post.type === "PR"
                        ? "text-emerald-700"
                        : "text-neutral-900"
                    }`}
                  >
                    {post.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-grow flex-col p-6 lg:p-8">
                {/* Meta Data */}
                <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  <span className="text-emerald-700">{post.division}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>{post.date}</span>
                </div>

                {/* Headline */}
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-neutral-950 transition-colors duration-500 group-hover:text-emerald-700">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {post.excerpt}
                </p>

                {/* CTA (Pushed to bottom) */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-500 group-hover:text-emerald-700">
                    Read More
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Bottom Emerald Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* ====== BOTTOM STATEMENT ====== */}
        <div className="mt-16 flex flex-col gap-5 border-t border-neutral-300/60 pt-6 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            Read the latest press releases, company announcements, and insights
            from across our nine divisions.
          </p>
          <Link
            href="/newsroom"
            className="group/cta inline-flex items-center gap-5 border-b border-neutral-400 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-900 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-600"
          >
            Visit the Newsroom
            <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
