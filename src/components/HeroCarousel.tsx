"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getNextSlideIndex, shouldAutoplay } from "../data/carousel-logic";
import styles from "../app/HeroCarousel.module.css";

const AUTO_ADVANCE_MS = 6500;

type HeroSlide = {
  id: string;
  title: string;
  eyebrow: string;
  subhead: string;
  cta: string;
  href: string;
  image: string;
  imagePosition: string;
  drift: "driftLeft" | "driftRight";
};

const slides: HeroSlide[] = [
  {
    id: "shi",
    title: "Sampan Highway Inn",
    eyebrow: "Your Perfect Stopover on the Dhaka–Khulna Highway",
    subhead:
      "Cozy rooms, honest meals, a place to breathe before the road takes you again.",
    cta: "Book a Stay",
    href: "/sampan-highway-inn-restaurant-party-centre",
    image: "/images/featuredConcerns/highway-inn.png",
    imagePosition: "center center",
    drift: "driftRight",
  },
  {
    id: "sms",
    title: "Sampan Metro Square",
    eyebrow: "Own a Piece of Ashulia’s Next Address",
    subhead:
      "A land-share residential project built for people who want to invest in a home, not just a plot.",
    cta: "Explore Metro Square",
    href: "/sampan-metro-square",
    image: "/images/hero/sampan-metro-square.jpg",
    imagePosition: "center center",
    drift: "driftLeft",
  },
  {
    id: "ehi",
    title: "Express Highway Inn",
    eyebrow: "The Highway, Reimagined",
    subhead:
      "Everything travelers love about Sampan Highway Inn—modernized, elevated, and opening soon.",
    cta: "See What’s Coming",
    href: "/express-highway-inn",
    image: "/images/featuredConcerns/express-highway-inn.png",
    imagePosition: "center center",
    drift: "driftRight",
  },
  {
    id: "lshs",
    title: "London School of Higher Studies",
    eyebrow: "UK-Accredited Courses, Built for Bangladesh",
    subhead:
      "CIPS and CMI qualifications from London School of Higher Studies—study locally, get recognized globally.",
    cta: "Apply to LSHS",
    href: "/london-school-of-higher-studies",
    image: "/images/hero/lshs.jpg",
    imagePosition: "center center",
    drift: "driftLeft",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);

  const autoplaying = shouldAutoplay({
    manuallyPaused,
    hovered: false,
    focused,
    touching,
  });

  useEffect(() => {
    if (!autoplaying) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => getNextSlideIndex(current, slides.length));
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplaying]);

  const activeSlide = slides[activeIndex];

  return (
    <section
      className={styles.hero}
      role="region"
      aria-roledescription="carousel"
      aria-label="Sampan Group featured destinations and projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setTouching(true)}
      onTouchEnd={() => setTouching(false)}
      onTouchCancel={() => setTouching(false)}
      onFocusCapture={(event) => {
        const target = event.target as HTMLElement;

        if (target.dataset.autoplayControl !== "true") {
          setFocused(true);
        }
      }}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;

        if (!event.currentTarget.contains(nextTarget)) {
          setFocused(false);
        }
      }}
    >
      <div className={styles.slides} aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${styles[slide.drift]} ${
                isActive ? styles.slideActive : ""
              }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={styles.media}
                style={{ objectPosition: slide.imagePosition }}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.shell}>
        <p className={styles.motto}>The village will be the city.</p>

        <div
          key={activeSlide.id}
          className={styles.content}
          aria-live={autoplaying ? "off" : "polite"}
          aria-atomic="true"
        >
          <p className={styles.eyebrow}>{activeSlide.eyebrow}</p>

          <h1 className={styles.title}>{activeSlide.title}</h1>

          <p className={styles.subhead}>{activeSlide.subhead}</p>

          <Link href={activeSlide.href} className={styles.cta}>
            <span>{activeSlide.cta}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className={styles.controls}>
          <div className={styles.dots} aria-label="Choose a slide">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  className={styles.dotButton}
                  aria-label={`Show ${slide.title}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  {isActive ? (
                    <span className={styles.progressTrack}>
                      <span
                        key={`${slide.id}-${activeIndex}`}
                        className={styles.progressFill}
                        style={{
                          animationDuration: `${AUTO_ADVANCE_MS}ms`,
                          animationPlayState: autoplaying
                            ? "running"
                            : "paused",
                        }}
                      />
                    </span>
                  ) : (
                    <span className={styles.dot} />
                  )}
                </button>
              );
            })}
          </div>

          {/* <button
            type="button"
            className={styles.autoplayButton}
            data-autoplay-control="true"
            aria-label={manuallyPaused ? "Resume carousel" : "Pause carousel"}
            aria-pressed={manuallyPaused}
            onClick={() => setManuallyPaused((paused) => !paused)}
          >
            <span aria-hidden="true">{manuallyPaused ? "Play" : "Pause"}</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}
