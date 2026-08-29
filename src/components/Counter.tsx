"use client";

import { stats } from "../data/stats";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Counter() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!section.current) return;

      // useGSAP automatically scopes this to the section ref
      const valueElements = gsap.utils.toArray<HTMLElement>(".stat-value");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 85%",
          once: true,
          invalidateOnRefresh: true, // ✅ FIX: Recalculates positions if page layout shifts (fonts/images loading)
        },
      });

      // Animate the cards fading in
      timeline.from(".stat-card", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Animate the numbers counting up
      valueElements.forEach((element) => {
        const rawValue = element.dataset.value || "0";
        // ✅ FIX: Safely strip commas/spaces just in case data has formatting
        const targetValue = Number(rawValue.replace(/[^0-9.-]/g, "")) || 0;

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
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-2">
        <div className="flex items-center justify-start gap-4">
          <span className="h-px w-10 bg-emerald-400/70" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-300">
            By the numbers
          </p>
        </div>

        <h2 className="mt-5 max-w-2xl text-left text-3xl font-semibold tracking-tight sm:text-4xl">
          Growing with purpose.
        </h2>

        <div className="mt-10 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card flex flex-col items-center justify-center border-b border-white/10 px-4 py-7 text-center odd:border-r sm:py-8 lg:border-b-0 lg:border-r lg:px-6 lg:py-10 lg:last:border-r-0"
            >
              <p className="tabular-nums text-[clamp(2.25rem,4vw,4rem)] font-semibold tracking-tight text-white">
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
