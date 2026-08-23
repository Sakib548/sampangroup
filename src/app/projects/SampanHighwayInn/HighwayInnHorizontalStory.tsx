"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { highwayInnFacilities } from "@/data/highwayInnFacility";

const panels = [
  [
    "01",
    "The stopover",
    "Rest, refresh, and continue.",
    "Your perfect pause on the Dhaka–Khulna Highway.",
    "/images/projects/sampan-highway-inn.png",
  ],
  [
    "02",
    "Rest",
    "Room to breathe.",
    "Comfortable spaces for travelers, families, and every kind of journey.",
    highwayInnFacilities[0]?.image ?? "/images/projects/sampan-highway-inn.png",
  ],
  [
    "03",
    "Dine",
    "Worth stopping for.",
    "Honest meals, warm hospitality, and time to enjoy the table.",
    highwayInnFacilities[1]?.image ?? "/images/projects/sampan-highway-inn.png",
  ],
  [
    "04",
    "Celebrate",
    "Make the stop memorable.",
    "Official outings, parties, and gatherings made simple by a thoughtful team.",
    highwayInnFacilities[2]?.image ?? "/images/projects/sampan-highway-inn.png",
  ],
  [
    "05",
    "Continue",
    "Leave ready for what comes next.",
    "Find us, plan your stop, and make the journey feel better.",
    "/images/projects/sampan-highway-inn.png",
  ],
] as const;

export default function HighwayInnHorizontalStory() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) return;

    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(min-width: 768px)", () => {
      const track = scope.querySelector<HTMLElement>(".highway-story-track");
      const progress = scope.querySelector<HTMLElement>(
        ".highway-story-progress",
      );

      if (!track || !progress) return;

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.set(progress, { scaleX: 0 });

      const horizontalTween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progress, { scaleX: self.progress });
          },
        },
      });

      const storyPanels = gsap.utils.toArray<HTMLElement>(
        ".highway-story-panel",
        track,
      );

      storyPanels.forEach((panel) => {
        const media = panel.querySelector<HTMLElement>(".highway-story-media");

        if (!media) return;

        gsap.fromTo(
          media,
          { xPercent: -3 },
          {
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    });

    return () => mediaQuery.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-label="Sampan Highway Inn story"
      className="relative left-1/2 -ml-[50vw] w-screen max-w-none overflow-x-clip bg-[#071b13] text-white"
    >
      <div className="highway-story-eyebrow sticky top-24 z-40 h-0 md:absolute md:left-1/2 md:top-24 md:h-auto md:-translate-x-1/2">
        <div className="mx-auto flex w-max items-center gap-3 border border-white/16 bg-[#071b13]/58 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/76 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 bg-[#ef636b]" />
          <span className="text-[#a8df73]">04</span>
          <span className="text-white/30">—</span>
          <span className="text-[#f5c84c]">Sampan Highway Inn</span>
        </div>
      </div>

      <div className="relative overflow-hidden md:h-[100svh]">
        <div className="highway-story-track flex w-full flex-col md:h-full md:w-max md:flex-row">
          {panels.map(([number, label, title, copy, image]) => (
            <article
              key={number}
              className="highway-story-panel group relative flex min-h-[100svh] w-full shrink-0 items-end overflow-hidden border-b border-white/10 md:h-full md:min-h-0 md:w-screen md:border-b-0 md:border-r md:border-white/12"
            >
              <div className="highway-story-media absolute -inset-x-[4%] inset-y-0 scale-[1.06] will-change-transform">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={number === "01"}
                />
              </div>

              <div className="absolute inset-0 bg-[#071b13]/22" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,19,0.15)_0%,rgba(7,27,19,0.08)_30%,rgba(7,27,19,0.86)_100%),linear-gradient(90deg,rgba(7,27,19,0.72)_0%,rgba(7,27,19,0.28)_48%,rgba(7,27,19,0.06)_78%)]" />

              <span
                aria-hidden="true"
                className="absolute -bottom-[0.12em] right-4 font-mono text-[clamp(10rem,24vw,25rem)] font-medium leading-none tracking-[-0.1em] text-white/[0.055] md:right-12"
              >
                {number}
              </span>

              <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 pb-28 pt-40 sm:px-10 md:px-16 md:pb-32 lg:px-24">
                <div className="max-w-[52rem]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.64rem] font-bold tracking-[0.18em] text-[#ef636b]">
                      {number} / {String(panels.length).padStart(2, "0")}
                    </span>
                    <span className="h-px w-9 bg-[#ef636b]/72" />
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#f5c84c]">
                      {label}
                    </p>
                  </div>

                  <h2 className="mt-6 max-w-[14ch] text-[clamp(3rem,6.5vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-balance text-[#f7f4ed]">
                    {title}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                    {copy}
                  </p>

                  {number === "05" && (
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-3 border border-[#00a174]/55 bg-[#00a174]/24 px-5 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:border-[#00a174]/80 hover:bg-[#00a174]/38"
                    >
                      Plan your stop
                      <span
                        aria-hidden="true"
                        className="text-base text-[#ef636b] transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-8 bottom-7 z-20 hidden items-center gap-5 md:flex lg:inset-x-16">
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/42">
            Scroll to explore
          </span>

          <div className="h-px flex-1 bg-white/24">
            <div className="highway-story-progress h-full w-full origin-left scale-x-0 bg-[#ef636b]" />
          </div>

          <span className="font-mono text-[0.58rem] font-bold tracking-[0.16em] text-white/42">
            01 -  05
          </span>
        </div>
      </div>
    </section>
  );
}
