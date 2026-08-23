"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

type SmoothScrollProps = {
  children: ReactNode
}

export default function AnimationProvider({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      overscroll: true,
    });

    const handleLenisScroll = () => ScrollTrigger.update();

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", handleLenisScroll)
    gsap.ticker.add(updateLenis)
    // Keep GSAP's normal lag handling. Disabling it can make a delayed tab,
    // fast wheel gesture, or bottom-of-page scroll jump unexpectedly.

    // Shared, one-time fade-up reveal for page sections. Components that have
    // their own entrance timeline can opt out with data-no-reveal.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section:not([data-no-reveal])"),
    )
    const revealed = new WeakSet<HTMLElement>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          if (!entry.isIntersecting || revealed.has(section)) return

          revealed.add(section)
          const revealItems = section.querySelectorAll<HTMLElement>(".reveal-item")
          const timeline = gsap.timeline()
          timeline.fromTo(
            section,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.05,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            },
          )
          if (revealItems.length) {
            timeline.fromTo(
              revealItems,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out", clearProps: "transform,opacity,visibility" },
              "-=0.55",
            )
          }
          observer.unobserve(section)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      lenis.off("scroll", handleLenisScroll)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    };
  }, []);

  return <>{children}</>
}
