"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { featuredConcerns } from "@/data/featuredConcerns";

const cinematicStart = Math.max(featuredConcerns.length - 3, 0);

export default function HeroSlider2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hasInitialized = useRef(false);

  const goToSlide = (nextIndex: number) => {
    if (isAnimating.current || nextIndex === activeIndexRef.current) return;
    isAnimating.current = true;
    setActiveIndex(
      (nextIndex + featuredConcerns.length) % featuredConcerns.length,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToSlide(activeIndexRef.current + 1);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const slides = slideRefs.current.filter(
      (slide): slide is HTMLDivElement => slide !== null,
    );
    const incoming = slideRefs.current[activeIndex];
    if (!incoming) return;

    if (!hasInitialized.current) {
      gsap.set(slides, { autoAlpha: 0, zIndex: 0 });
      gsap.set(incoming, { autoAlpha: 1, zIndex: 1 });
      hasInitialized.current = true;
      activeIndexRef.current = activeIndex;
      return;
    }

    const outgoing = slideRefs.current[activeIndexRef.current];
    const image = incoming.querySelector(".hero2-image");
    const text = incoming.querySelectorAll(".hero2-copy > *");

    if (!outgoing || outgoing === incoming) return;

    gsap.killTweensOf(slides);
    gsap.killTweensOf(image);

    const isCinematic = activeIndex >= cinematicStart;

    if (isCinematic && image) {
      gsap.set(image, {
        scale: 1.05,
        xPercent: 0,
        yPercent: 0,
      });
    } else if (image) {
      gsap.set(image, { scale: 1, xPercent: 0, yPercent: 0 });
    }
    gsap.set(text, { autoAlpha: 0, y: 24 });

    const timeline = gsap.timeline({
      onComplete: () => {
        activeIndexRef.current = activeIndex;
        isAnimating.current = false;
      },
      onInterrupt: () => {
        isAnimating.current = false;
      },
    });

    timeline
      .set(incoming, { autoAlpha: 0, zIndex: 2 })
      .to(outgoing, { autoAlpha: 0, duration: 1.8, ease: "power1.inOut" }, 0)
      .to(incoming, { autoAlpha: 1, duration: 1.8, ease: "power1.inOut" }, 0)
      .to(
        image,
        isCinematic
          ? {
              scale: 1.12,
              xPercent: 0,
              yPercent: 0,
              duration: 6.5,
              ease: "none",
            }
          : { scale: 1, xPercent: 0, yPercent: 0, duration: 0.01 },
        0,
      )
      .to(
        text,
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        0.65,
      );

    return () => timeline.kill();
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {featuredConcerns.map((slide, index) => (
          <div
            key={slide.name}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 ${index === activeIndex ? "pointer-events-auto" : "pointer-events-none"}`}
            style={{
              opacity: index === 0 ? 1 : 0,
              visibility: index === 0 ? "visible" : "hidden",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero2-image object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="hero2-copy relative z-10 flex min-h-screen items-end justify-start px-6 pb-16 text-left sm:pb-20 lg:px-20 lg:pb-24">
              <div className="flex w-full max-w-2xl flex-col items-start text-left">
                {/* <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                  {slide.category}
                </p> */}
                <h1 className="mt-4 max-w-2xl text-[clamp(2rem,3.4vw,4rem)] font-semibold leading-[1] tracking-tight Text">
                  <span className="greenText">
                    {slide.name.slice(0, slide.name.indexOf(" "))}
                  </span>
                  <span className="redText">
                    {slide.name.slice(slide.name.indexOf(" "))}
                  </span>
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                  {slide.tagline}
                </p>

                {/* <a
                  href={slide.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex border border-white/70 px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
                >
                  Explore {slide.name}
                </a> */}
                <a
                  href={slide.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex border greenText px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
                >
                  Explore {slide.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 lg:right-16">
        <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous slide" className="text-3xl transition-opacity hover:opacity-60">←</button>
        <span className="text-xs tracking-[0.2em] text-white/70">{String(activeIndex + 1).padStart(2, "0")} / {String(featuredConcerns.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next slide" className="text-3xl transition-opacity hover:opacity-60">→</button>
      </div> */}
    </section>
  );
}
