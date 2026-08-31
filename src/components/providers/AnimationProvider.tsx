"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

export default function AnimationProvider({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      overscroll: false,
    });

    // Tell ScrollTrigger to use Lenis's scroll data
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Add Lenis to GSAP's ticker
    gsap.ticker.add(updateLenis);

    // CRITICAL FIX: Disable lag smoothing so background tabs don't freeze Lenis
    gsap.ticker.lagSmoothing(0);

    // Reveal Animations using ScrollTrigger
    const sections = gsap.utils.toArray<HTMLElement>(
      "main section:not([data-no-reveal])",
    );

    sections.forEach((section) => {
      const revealItems = section.querySelectorAll<HTMLElement>(".reveal-item");

      // Set initial states to prevent FOUC
      gsap.set(section, { autoAlpha: 0, y: 28 });
      if (revealItems.length) {
        gsap.set(revealItems, { autoAlpha: 0, y: 18 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      tl.to(section, {
        autoAlpha: 1,
        y: 0,
        duration: 1.05,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
      });

      if (revealItems.length) {
        tl.to(
          revealItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.55",
        );
      }
    });

    // Refresh ScrollTrigger initially
    ScrollTrigger.refresh();

    // CRITICAL FIX: Recalculate positions after all images/fonts load
    // This prevents the scroll from freezing due to layout shifts
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
