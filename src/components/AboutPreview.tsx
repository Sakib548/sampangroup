"use client";

import Link from "next/link";
import { aboutPreview } from "@/data/aboutPreview";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutPreview() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const select = gsap.utils.selector(section);
      const timeline = gsap.timeline({ paused: true });

      timeline
        .from(select(".about-eyebrow"), {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          select(".about-title"),
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          select(".about-description"),
          {
            y: 25,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          select(".about-button"),
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          select(".about-visual"),
          {
            x: 35,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        );

      const sectionElement = section.current;
      if (!sectionElement) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.restart();
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -10% 0px",
        },
      );

      observer.observe(sectionElement);

      return () => {
        observer.disconnect();
      };
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="bg-[#E8EFE9] px-6 py-24 text-neutral-950 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
        <div className="box">
          <p className="about-eyebrow mb-5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-800">
            {aboutPreview.eyebrow}
          </p>

          <h2 className="about-title max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="greenTextDark">
              {aboutPreview.title.slice(0, 15)}
            </span>

            <span className="redTextDark"> {aboutPreview.title.slice(15)}</span>
          </h2>

          <p className="about-description mt-6 max-w-2xl text-sm leading-8 text-neutral-600  ">
            {aboutPreview.description}
          </p>
          <div className="about-button">
            <Link
              href={aboutPreview.href}
              className="group relative mt-8 inline-flex items-center gap-4 overflow-hidden border border-neutral-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
            >
              <span className="absolute inset-0 -translate-x-full bg-neutral-900 transition-transform duration-500 ease-out group-hover:translate-x-0" />

              <span className="relative z-10">Learn More</span>

              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-current text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="about-visual relative min-h-80 overflow-hidden bg-neutral-950 p-8 text-white sm:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-emerald-300/30" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-amber-200/20" />

          <div className="relative flex h-full min-h-64 flex-col justify-between">
            <span className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Sampan Group
            </span>

            <p className="max-w-sm text-3xl font-light leading-tight sm:text-4xl">
              The village will be the city.
            </p>

            <div className="flex gap-5 text-xs uppercase tracking-[0.18em] text-white/60">
              <span>Imagine</span>
              <span>Build</span>
              <span>Grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
