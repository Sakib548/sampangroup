"use client";

import Link from "next/link";
import { aboutPreview } from "@/data/aboutPreview";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText"; // 1. Import the plugin
import { useEffect } from "react";

export default function AboutPreview() {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    console.clear();

    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      let split;
      SplitText.create(".split", {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          split = gsap.from(self.lines, {
            duration: 0.6,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out",
          });
          return split;
        },
      });

      //   document.querySelector("button").addEventListener("click", (e) => {
      //     split.timeScale(0.2).play(0);
      //   });
    });
  }, []);
  return (
    <section className="bg-stone-100 px-6 py-24 text-neutral-950 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-800">
            {aboutPreview.eyebrow}
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {aboutPreview.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            {aboutPreview.description}
          </p>

          <Link
            href={aboutPreview.href}
            className="mt-8 inline-flex border border-neutral-950 px-6 py-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-white"
          >
            Learn more
          </Link>
        </div>

        <div className="relative min-h-80 overflow-hidden bg-neutral-950 p-8 text-white sm:p-12">
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
