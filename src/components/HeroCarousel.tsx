"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import {
  getAnimationPreview,
  getCarouselLayers,
  getNextSlideIndex,
  getPreviousSlideIndex,
  getSwipeDirection,
  resolveTransitionMode,
  type TransitionMode,
} from "../data/carousel-logic";
import styles from "../app/HeroCarousel.module.css";

const AUTO_ADVANCE_MS = 6000;

const transitionOptions: Array<{
  value: TransitionMode;
  label: string;
}> = [
  { value: "crossfade", label: "Original" },
  { value: "parallax", label: "Parallax" },
  { value: "mask", label: "Masked reveal" },
  { value: "split", label: "Split panels" },
  { value: "blur", label: "Blur to sharp" },
  { value: "pan", label: "Slow pan" },
];

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
    cta: "Visit us",
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
    image: "/images/projects/sampan-metro-square.png",
    imagePosition: "center center",
    drift: "driftLeft",
  },
  {
    id: "ehi",
    title: "Express Highway Inn",
    eyebrow: "The Highway, Reimagined at Dhaka-Chattogram highway",
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

type HeroCarouselProps = {
  defaultTransition?: TransitionMode;
  showAnimationPicker?: boolean;
};

const transitionClassNames: Record<TransitionMode, string> = {
  crossfade: styles.modeCrossfade,
  parallax: styles.modeParallax,
  mask: styles.modeMask,
  split: styles.modeSplit,
  blur: styles.modeBlur,
  pan: styles.modePan,
};

export default function HeroCarousel({
  defaultTransition = "crossfade",
  showAnimationPicker = true,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [transitionMode, setTransitionMode] = useState<TransitionMode>(() =>
    resolveTransitionMode(defaultTransition),
  );
  const [transitionRun, setTransitionRun] = useState(0);
  const swipeStart = useRef<{
    x: number;
    y: number;
    pointerId: number;
  } | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex(getNextSlideIndex(activeIndex, slides.length));
      setTransitionRun((run) => run + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const activeSlide = slides[activeIndex];
  const layers = getCarouselLayers(activeIndex, previousIndex, transitionMode);
  const panelSlide =
    layers.panelIndex === null ? null : slides[layers.panelIndex];
  const transitionClassName = transitionClassNames[transitionMode];

  function showSlide(index: number) {
    if (index === activeIndex) return;

    setPreviousIndex(activeIndex);
    setActiveIndex(index);
    setTransitionRun((run) => run + 1);
  }

  function showPreviousSlide() {
    showSlide(getPreviousSlideIndex(activeIndex, slides.length));
  }

  function showNextSlide() {
    showSlide(getNextSlideIndex(activeIndex, slides.length));
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch") return;

    swipeStart.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
    };
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLElement>) {
    const start = swipeStart.current;

    if (!start || start.pointerId !== event.pointerId) return;

    const direction = getSwipeDirection(
      event.clientX - start.x,
      event.clientY - start.y,
    );

    swipeStart.current = null;

    if (direction === "next") showNextSlide();
    if (direction === "previous") showPreviousSlide();
  }

  function handlePointerCancel() {
    swipeStart.current = null;
  }

  function previewAnimation(mode: TransitionMode) {
    const preview = getAnimationPreview(activeIndex, slides.length, mode);

    setPreviousIndex(activeIndex);
    setTransitionMode(preview.transitionMode);
    setActiveIndex(preview.activeIndex);
    setTransitionRun((run) => run + 1);
  }

  return (
    <section
      className={`${styles.hero} ${
        showAnimationPicker ? styles.heroWithPicker : ""
      }`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Sampan Group featured destinations and projects"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <div className={styles.slides} aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = index === layers.baseIndex;

          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${styles[slide.drift]} ${transitionClassName} ${
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

      {panelSlide && (
        <div
          key={`split-${activeSlide.id}-${transitionRun}`}
          className={styles.splitStage}
          aria-hidden="true"
        >
          {[0, 1, 2].map((panel) => (
            <div key={panel} className={styles.splitPanel}>
              <div
                className={styles.splitMedia}
                style={{
                  backgroundImage: `url(${panelSlide.image})`,
                  backgroundPosition: panelSlide.imagePosition,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.shell}>
        {showAnimationPicker && (
          <div className={styles.animationLab}>
            <p className={styles.animationLabLabel}>Animation Lab</p>
            <div
              className={styles.animationOptions}
              aria-label="Choose a carousel animation"
            >
              {transitionOptions.map((option) => {
                const selected = option.value === transitionMode;

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`${styles.animationOption} ${
                      selected ? styles.animationOptionActive : ""
                    }`}
                    aria-pressed={selected}
                    onClick={() => previewAnimation(option.value)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div
          key={activeSlide.id}
          className={styles.content}
          aria-live="off"
          aria-atomic="true"
        >
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <p className={styles.eyebrow}>{activeSlide.eyebrow}</p>
          </div>

          <h1 className={styles.title}>{activeSlide.title}</h1>

          <p className={styles.subhead}>{activeSlide.subhead}</p>

          <Link
            href={activeSlide.href}
            className="site-btn site-btn--green mt-3"
          >
            <span>{activeSlide.cta}</span>
            <span className="site-btn__arrow" aria-hidden="true">
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
                  onClick={() => showSlide(index)}
                >
                  {isActive ? (
                    <span className={styles.progressTrack}>
                      <span
                        key={`${slide.id}-${activeIndex}`}
                        className={styles.progressFill}
                        style={{
                          animationDuration: `${AUTO_ADVANCE_MS}ms`,
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

          <div className={styles.controlEnd}>
            <p className={styles.slidePosition} aria-hidden="true">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className={styles.slidePositionDivider} />
              <span>{String(slides.length).padStart(2, "0")}</span>
            </p>

            <div
              className={styles.navigationArrows}
              role="group"
              aria-label="Carousel navigation"
            >
              <button
                type="button"
                className={styles.arrowButton}
                aria-label="Show previous slide"
                onClick={showPreviousSlide}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.arrowIcon}
                >
                  <path d="M14.5 5 7.5 12l7 7M8 12h10" />
                </svg>
              </button>

              <button
                type="button"
                className={styles.arrowButton}
                aria-label="Show next slide"
                onClick={showNextSlide}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.arrowIcon}
                >
                  <path d="m9.5 5 7 7-7 7M16 12H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className={styles.motto}>The village will be the city.</p>
      </div>
    </section>
  );
}
