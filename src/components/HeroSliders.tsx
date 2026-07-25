"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { featuredConcerns } from "../data/featuredConcerns";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previousIndex = useRef(0);
  const currentIndex = useRef(0);
  const hasInitialized = useRef(false);
  const isAnimating = useRef(false);
  //   useEffect(() => {
  //     const timeline = gsap.timeline();

  //     timeline
  //       .fromTo(
  //         ".hero-image",
  //         { scale: 1.1, opacity: 0 },
  //         { scale: 1, opacity: 1, duration: 1.2 },
  //       )
  //       .fromTo(
  //         ".hero-content",
  //         { y: 40, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 0.7 },
  //         "-=0.7",
  //       );

  //     return () => {
  //       timeline.kill();
  //     };
  //   }, [activeIndex]);

  //   useEffect(() => {
  //     const incomingSlide = slideRefs.current[activeIndex];
  //     const outgoingSlide = slideRefs.current[previousIndex.current];

  //     if (!incomingSlide) return;

  //     const timeline = gsap.timeline();

  //     if (activeIndex === previousIndex.current) {
  //       timeline.fromTo(
  //         incomingSlide,
  //         { autoAlpha: 0 },
  //         {
  //           autoAlpha: 1,
  //           duration: 1.2,
  //           ease: "power2.out",
  //         },
  //       );
  //     } else {
  //       timeline
  //         .set(incomingSlide, { zIndex: 2 })
  //         .set(outgoingSlide, { zIndex: 1 })
  //         .to(
  //           outgoingSlide,
  //           {
  //             autoAlpha: 0,
  //             duration: 1,
  //             ease: "power2.out",
  //           },
  //           0,
  //         )
  //         .fromTo(
  //           incomingSlide,
  //           { autoAlpha: 0 },
  //           {
  //             autoAlpha: 1,
  //             duration: 1.2,
  //             ease: "power2.out",
  //           },
  //           0,
  //         );
  //     }

  //     previousIndex.current = activeIndex;

  //     return () => {
  //       timeline.kill();
  //     };
  //   }, [activeIndex]);
  useLayoutEffect(() => {
    const slides = slideRefs.current.filter(
      (slide): slide is HTMLDivElement => slide !== null,
    );

    const incomingSlide = slideRefs.current[activeIndex];

    const title = incomingSlide?.querySelector(".slide-title");
    const tagline = incomingSlide?.querySelector(".slide-tagline");
    const cta = incomingSlide?.querySelector(".slide-cta");

    const textElements = [title, tagline, cta].filter(Boolean);
    if (!incomingSlide) return;

    // Show the first slide immediately
    if (!hasInitialized.current) {
      gsap.set(slides, {
        autoAlpha: 0,
        zIndex: 0,
      });

      gsap.set(incomingSlide, {
        autoAlpha: 1,
        zIndex: 1,
      });

      hasInitialized.current = true;
      currentIndex.current = activeIndex;

      return;
    }

    const outgoingSlide = slideRefs.current[currentIndex.current];

    if (!outgoingSlide || outgoingSlide === incomingSlide) return;

    gsap.killTweensOf(slides);

    const timeline = gsap.timeline({
      onComplete: () => {
        currentIndex.current = activeIndex;
        isAnimating.current = false;
      },
      onInterrupt: () => {
        isAnimating.current = false;
      },
    });

    gsap.set(textElements, {
      autoAlpha: 0,
      y: 24,
    });

    // timeline
    //   .set(incomingSlide, {
    //     autoAlpha: 0,
    //     zIndex: 2,
    //   })
    //   .to(
    //     outgoingSlide,
    //     {
    //       autoAlpha: 0,
    //       duration: 2.2,
    //       ease: "power1.inOut",
    //     },
    //     0,
    //   )
    //   .to(
    //     incomingSlide,
    //     {
    //       autoAlpha: 1,
    //       duration: 2.2,
    //       ease: "power1.inOut",
    //     },
    //     0,
    //   );
    timeline
      .set(incomingSlide, {
        autoAlpha: 0,
        zIndex: 2,
      })
      .to(
        outgoingSlide,
        {
          autoAlpha: 0,
          duration: 2.2,
          ease: "power1.inOut",
        },
        0,
      )
      .to(
        incomingSlide,
        {
          autoAlpha: 1,
          duration: 2.2,
          ease: "power1.inOut",
        },
        0,
      )
      .to(
        textElements,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.8,
      );
    return () => {
      timeline.kill();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  function nextSlide() {
    const nextIndex = (currentIndex.current + 1) % featuredConcerns.length;

    goToSlide(nextIndex);
  }

  function previousSlide() {
    const previousIndex =
      (currentIndex.current - 1 + featuredConcerns.length) %
      featuredConcerns.length;

    goToSlide(previousIndex);
  }
  function goToSlide(index: number) {
    if (isAnimating.current) return;
    if (index === currentIndex.current) return;

    isAnimating.current = true;
    setActiveIndex(index);
  }
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* image, overlay, content, controls */}

      <div className="absolute inset-0 bg-black/45" />

      <div className=" absolute inset-0">
        {featuredConcerns.map((slide, index) => (
          <div
            key={slide.name}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 ${
              index === activeIndex
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            style={{
              opacity: index === 0 ? 1 : 0,
              visibility: index === 0 ? "visible" : "hidden",
              zIndex: index === 0 ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex min-h-screen items-end px-6 pb-24 text-white lg:px-16">
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold lg:text-5xl slide-title">
                  {slide.title}
                </h1>

                <p className="mt-6 max-w-xl text-lg text-white/80 slide-tagline">
                  {slide.tagline}
                </p>

                <a
                  href={slide.href}
                  target="_blank"
                  className="mt-8 inline-block border border-red px-6 py-3 slide-button"
                  style={{ color: slide.accentColor }}
                >
                  Explore {slide.name}
                </a>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-xl transition hover:bg-white hover:text-black"
              >
                ←
              </button>

              <span
                aria-live="polite"
                className="min-w-16 text-center text-sm tracking-widest"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(featuredConcerns.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-xl transition hover:bg-white hover:text-black"
              >
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
