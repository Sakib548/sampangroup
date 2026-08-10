"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { highwayInnFacilities } from "@/data/highwayInnFacility";

const mainInnImage = "/images/projects/express-highway-inn.png";
const cardStep = 24;

export default function HighwayInnCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null,
    );
    if (!cards.length) return;

    gsap.set(cards, {
      xPercent: (index) =>
        index === 0 ? 0 : index === 1 ? cardStep : -cardStep,
      yPercent: (index) => (index === 0 ? -8 : index === 1 ? 4 : 9),
      autoAlpha: 1,
      scale: (index) => (index === 0 ? 1.05 : index === 1 ? 0.94 : 0.9),
      zIndex: (index) => (index === 0 ? 30 : index === 1 ? 20 : 10),
    });

    let movement: gsap.core.Tween | undefined;
    let pause: gsap.core.Tween | undefined;
    let currentActive = 0;

    const moveCards = () => {
      const nextActive = (currentActive + 1) % highwayInnFacilities.length;
      const nextRight = (nextActive + 1) % highwayInnFacilities.length;

      cards.forEach((card, index) => {
        card.style.zIndex = String(
          index === nextActive ? 30 : index === nextRight ? 20 : 10,
        );
      });

      movement = gsap.to(cards, {
        xPercent: (index) =>
          index === nextActive ? 0 : index === nextRight ? cardStep : -cardStep,
        yPercent: (index) =>
          index === nextActive ? -8 : index === nextRight ? 4 : 9,
        scale: (index) =>
          index === nextActive ? 1.05 : index === nextRight ? 0.94 : 0.9,
        autoAlpha: 1,
        duration: 1.45,
        ease: "power2.inOut",
        onComplete: () => {
          currentActive = nextActive;
          setActiveIndex(currentActive);
          pause = gsap.delayedCall(3.8, moveCards);
        },
      });
    };

    pause = gsap.delayedCall(3.8, moveCards);

    return () => {
      movement?.kill();
      pause?.kill();
    };
  }, []);

  return (
    <section className="bg-[#080808] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1700px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="relative aspect-[0.82] overflow-hidden rounded-2xl bg-[#211d1a]">
          <Image
            src="/images/featuredConcerns/highway-inn.png"
            alt="Express Highway Inn exterior"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/45 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Sampan Hospitality
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Sampan Highway Inn
            </h2>
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            What we offer
          </p>
          <h3 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need, all in one place.
          </h3>

          <div className="relative mt-10 h-[360px] overflow-hidden sm:h-[430px]">
            {highwayInnFacilities.map((facility, index) => (
              <div
                key={facility.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="absolute left-[19%] top-0 h-full w-[62%] origin-center overflow-hidden rounded-2xl border border-white/15 bg-[#211d1a] shadow-2xl"
              >
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 85vw"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 bg-black/55 p-5 transition-opacity duration-500 sm:p-7 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    0{index + 1}
                  </p> */}
                  <h4 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
                    {facility.title}
                  </h4>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-5">
            <p className="text-sm text-white/55">
              {String(activeIndex + 1).padStart(2, "0")} / 03
            </p>
            <div className="flex gap-2">
              {highwayInnFacilities.map((facility, index) => (
                <span
                  key={facility.id}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-12 bg-red-400"
                      : "w-5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
