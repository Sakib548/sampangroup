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
      },
    });

    timeline
      .set(incomingSlide, {
        autoAlpha: 0,
        zIndex: 2,
      })
      .to(
        outgoingSlide,
        {
          autoAlpha: 0,
          duration: 2.5,
          ease: "power1.inOut",
        },
        0,
      )
      .to(
        incomingSlide,
        {
          autoAlpha: 1,
          duration: 2.5,
          ease: "power1.inOut",
        },
        0,
      );

    return () => {
      timeline.kill();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === featuredConcerns.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  function nextSlide() {
    setActiveIndex((current) =>
      current === featuredConcerns.length - 1 ? 0 : current + 1,
    );
  }

  function previousSlide() {
    setActiveIndex((current) =>
      current === 0 ? featuredConcerns.length - 1 : current - 1,
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* image, overlay, content, controls */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="pointer-events-none absolute inset-0">
        {featuredConcerns.map((slide, index) => (
          <div
            key={slide.name}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            aria-hidden={index !== activeIndex}
            className="pointer-events-none absolute inset-0 "
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex min-h-screen items-end px-6 pb-24 text-white lg:px-16">
              <div>
                <h1 className="max-w-3xl text-5xl font-semibold lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-6 max-w-xl text-lg text-white/80">
                  {slide.tagline}
                </p>

                <a
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block border border-white px-6 py-3"
                >
                  Explore {slide.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
