"use client";

import { stats } from "../data/stats";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Counter() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const select = gsap.utils.selector(section);

      const timeline = gsap.timeline({ paused: true });

      const valueElements = select(".stat-value") as HTMLElement[];

      timeline.from(select(".stat-card"), {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      valueElements.forEach((element) => {
        const targetValue = Number(element.dataset.value ?? 0);
        const counter = { value: 0 };

        timeline.to(
          counter,
          {
            value: targetValue,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              element.textContent = Math.round(counter.value).toLocaleString();
            },
          },
          0.2,
        );
      });

      const sectionElement = section.current;

      if (!sectionElement) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.disconnect();
          }
        },
        {
          threshold: 0.2,
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
      className="relative overflow-hidden bg-neutral-950 py-24 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-emerald-400/70" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-300">
            By the numbers
          </p>
          <span className="h-px w-10 bg-emerald-400/70" />
        </div>

        <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Growing with purpose.
        </h2>

        <div className="mt-12 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card flex flex-col items-center justify-center border-b border-white/10 px-4 py-8 text-center odd:border-r sm:py-10 lg:border-b-0 lg:border-r lg:px-6 lg:py-12 lg:last:border-r-0"
            >
              <p className="tabular-nums text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="stat-value" data-value={stat.value}>
                  0
                </span>

                <span className="ml-1 text-emerald-300">{stat.suffix}</span>
              </p>

              <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
