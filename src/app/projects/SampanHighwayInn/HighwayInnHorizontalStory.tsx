"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";

import { highwayInnFacilities } from "@/data/highwayInnFacility";
import {
  getPanelXOffset,
  getPinGuardCorrection,
  getPinGuardScroll,
  getProtectedPinDistance,
  getStoryExitScroll,
  getWheelPanelTarget,
  isScrollInsidePin,
} from "./highway-story-wheel";

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

type MobileSwiperController = {
  activeIndex: number;
  animating: boolean;
  isBeginning: boolean;
  isEnd: boolean;
  slideNext: () => void;
  slidePrev: () => void;
};

const MOBILE_WHEEL_THRESHOLD = 24;
const MOBILE_WHEEL_IDLE_MS = 220;

function MobileHighwayInnCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const swiperController = useRef<MobileSwiperController | null>(null);
  const wheelLocked = useRef(false);
  const accumulatedWheelDelta = useRef(0);
  const wheelIdleTimer = useRef<number | null>(null);

  useEffect(() => {
    const element = viewport.current;

    if (!element) return;

    const clearWheelTimer = () => {
      if (wheelIdleTimer.current !== null) {
        window.clearTimeout(wheelIdleTimer.current);
        wheelIdleTimer.current = null;
      }
    };

    const scheduleWheelUnlock = () => {
      clearWheelTimer();

      const releaseWhenReady = () => {
        if (swiperController.current?.animating) {
          wheelIdleTimer.current = window.setTimeout(releaseWhenReady, 80);
          return;
        }

        wheelLocked.current = false;
        accumulatedWheelDelta.current = 0;
        wheelIdleTimer.current = null;
      };

      wheelIdleTimer.current = window.setTimeout(
        releaseWhenReady,
        MOBILE_WHEEL_IDLE_MS,
      );
    };

    const normalizeWheelDelta = (event: WheelEvent) => {
      if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        return event.deltaY * 16;
      }

      if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        return event.deltaY * window.innerHeight;
      }

      return event.deltaY;
    };

    const captureWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleWheel = (event: WheelEvent) => {
      const swiper = swiperController.current;

      if (!swiper) return;

      const deltaY = normalizeWheelDelta(event);

      if (Math.abs(deltaY) <= Math.abs(event.deltaX) || deltaY === 0) {
        return;
      }

      if (wheelLocked.current) {
        captureWheel(event);
        scheduleWheelUnlock();
        return;
      }

      const direction = deltaY > 0 ? 1 : -1;
      const leavingAtEdge =
        (direction > 0 && swiper.isEnd) ||
        (direction < 0 && swiper.isBeginning);

      // Only a fresh gesture that starts at an outer edge may move the page.
      if (leavingAtEdge) {
        accumulatedWheelDelta.current = 0;
        clearWheelTimer();
        return;
      }

      captureWheel(event);

      if (swiper.animating) {
        wheelLocked.current = true;
        scheduleWheelUnlock();
        return;
      }

      if (
        accumulatedWheelDelta.current !== 0 &&
        Math.sign(accumulatedWheelDelta.current) !== direction
      ) {
        accumulatedWheelDelta.current = 0;
      }

      accumulatedWheelDelta.current += deltaY;
      scheduleWheelUnlock();

      if (Math.abs(accumulatedWheelDelta.current) < MOBILE_WHEEL_THRESHOLD) {
        return;
      }

      wheelLocked.current = true;
      accumulatedWheelDelta.current = 0;

      if (direction > 0) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }

      scheduleWheelUnlock();
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
      clearWheelTimer();
      wheelLocked.current = false;
      accumulatedWheelDelta.current = 0;
    };
  }, []);

  return (
    <div
      ref={viewport}
      className="relative h-[100svh] overflow-hidden bg-[#071b13] md:hidden"
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        speed={850}
        threshold={0}
        resistanceRatio={0}
        touchReleaseOnEdges
        preventInteractionOnTransition
        modules={[A11y]}
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous Highway Inn slide",
          nextSlideMessage: "Next Highway Inn slide",
        }}
        onSwiper={(swiper) => {
          swiperController.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {panels.map(([number, label, title, copy, image]) => (
          <SwiperSlide key={number} className="!h-full">
            {({ isActive }) => (
              <article className="group relative flex h-full w-full items-end overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt=""
                    fill
                    priority={number === "01"}
                    sizes="100vw"
                    className={`object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "scale-[1.045]" : "scale-100"
                    }`}
                  />
                </div>

                <div className="absolute inset-0 bg-[#071b13]/22" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,19,0.22)_0%,rgba(7,27,19,0.08)_30%,rgba(7,27,19,0.92)_100%),linear-gradient(90deg,rgba(7,27,19,0.68)_0%,rgba(7,27,19,0.20)_72%,rgba(7,27,19,0.06)_100%)]" />

                <span
                  aria-hidden="true"
                  className="absolute -bottom-[0.08em] right-3 font-mono text-[clamp(10rem,48vw,15rem)] font-medium leading-none tracking-[-0.1em] text-white/[0.055]"
                >
                  {number}
                </span>

                <div
                  className={`relative z-10 w-full px-6 pb-24 pt-36 transition-all duration-700 ease-out ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#ef636b]">
                        {number} / {String(panels.length).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-[#ef636b]/72" />
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#f5c84c]">
                        {label}
                      </p>
                    </div>

                    <h2 className="mt-5 max-w-[13ch] text-[clamp(2.8rem,13vw,5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-balance text-[#f7f4ed]">
                      {title}
                    </h2>

                    <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
                      {copy}
                    </p>

                    {number === "05" && (
                      <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-3 border border-[#00a174]/55 bg-[#00a174]/24 px-5 py-3.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:bg-[#00a174]/38"
                      >
                        Plan your stop
                        <span
                          aria-hidden="true"
                          className="text-base text-[#ef636b]"
                        >
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute left-1/2 top-24 z-40 -translate-x-1/2">
        <div className="flex w-max items-center gap-2.5 border border-white/16 bg-[#071b13]/58 px-3.5 py-2.5 text-[0.56rem] font-bold uppercase tracking-[0.18em] text-white/76 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 bg-[#ef636b]" />
          <span className="text-white/30">—</span>
          <span className="text-[#f5c84c]">Sampan Highway Inn</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2"
      >
        {panels.map(([number], index) => (
          <span
            key={number}
            className={`w-1 rounded-full transition-all duration-300 ${
              activeIndex === index ? "h-9 bg-[#f5c84c]" : "h-3 bg-white/35"
            }`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-6 z-40 flex items-center gap-3 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-white/45">
        <span>Scroll or swipe</span>
        <span className="text-[#ef636b]">↓</span>
      </div>
    </div>
  );
}

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

      const storyPanels = gsap.utils.toArray<HTMLElement>(
        ".highway-story-panel",
        track,
      );
      let activePanelIndex = 0;
      let gestureLocked = false;
      let trackTween: gsap.core.Tween | null = null;
      let progressTween: gsap.core.Tween | null = null;
      let mediaTween: gsap.core.Tween | null = null;
      let unlockTimer: number | undefined;
      let guardFrame: number | undefined;
      let pinGuardActive = false;
      let guardRepositioning = false;

      const lastPanelIndex = Math.max(0, storyPanels.length - 1);

      const scheduleGestureUnlock = () => {
        window.clearTimeout(unlockTimer);

        unlockTimer = window.setTimeout(() => {
          if (trackTween?.isActive()) {
            scheduleGestureUnlock();
            return;
          }

          gestureLocked = false;
        }, 160);
      };

      const setPanel = (
        panelIndex: number,
        animate: boolean,
        direction: -1 | 0 | 1 = 0,
      ) => {
        activePanelIndex = panelIndex;

        const targetX = getPanelXOffset(
          panelIndex,
          window.innerWidth,
          storyPanels.length,
        );
        const targetProgress =
          lastPanelIndex > 0 ? panelIndex / lastPanelIndex : 0;

        trackTween?.kill();
        progressTween?.kill();
        mediaTween?.kill();

        if (!animate) {
          gsap.set(track, { x: targetX });
          gsap.set(progress, { scaleX: targetProgress });
          return;
        }

        gestureLocked = true;
        scheduleGestureUnlock();

        trackTween = gsap.to(track, {
          x: targetX,
          duration: 0.82,
          ease: "power3.inOut",
          overwrite: true,
          onComplete: () => {
            trackTween = null;
            scheduleGestureUnlock();
          },
        });

        progressTween = gsap.to(progress, {
          scaleX: targetProgress,
          duration: 0.82,
          ease: "power3.inOut",
          overwrite: true,
        });

        const activeMedia = storyPanels[panelIndex]?.querySelector<HTMLElement>(
          ".highway-story-media",
        );

        if (activeMedia && direction !== 0) {
          mediaTween = gsap.fromTo(
            activeMedia,
            { xPercent: direction > 0 ? -2.5 : 2.5 },
            {
              xPercent: 0,
              duration: 1.05,
              ease: "power2.out",
              overwrite: true,
            },
          );
        }
      };

      gsap.set(track, { x: 0 });
      gsap.set(progress, { scaleX: 0 });

      const storyTrigger = ScrollTrigger.create({
        trigger: scope,
        start: "top top",
        end: () =>
          `+=${getProtectedPinDistance(
            window.innerHeight,
            storyPanels.length,
          )}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          pinGuardActive = false;
          setPanel(0, false);
        },
        onEnterBack: () => {
          pinGuardActive = false;
          setPanel(lastPanelIndex, false);
        },
        onRefresh: () => setPanel(activePanelIndex, false),
      });

      const setProtectedScroll = (scrollPosition: number) => {
        guardRepositioning = true;
        storyTrigger.scroll(scrollPosition);
        ScrollTrigger.update();

        if (guardFrame !== undefined) {
          window.cancelAnimationFrame(guardFrame);
        }
        guardFrame = window.requestAnimationFrame(() => {
          guardRepositioning = false;
        });
      };

      const enforcePinGuard = () => {
        if (guardRepositioning) return;

        const safeScroll = getPinGuardScroll(
          storyTrigger.start,
          storyTrigger.end,
        );
        const correction = getPinGuardCorrection(
          pinGuardActive,
          storyTrigger.isActive,
          storyTrigger.scroll() ?? window.scrollY,
          safeScroll,
        );

        if (correction !== null) {
          setProtectedScroll(correction);
        }
      };

      const normalizeWheelDelta = (event: WheelEvent) => {
        if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
          return event.deltaY * 16;
        }

        if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
          return event.deltaY * window.innerHeight;
        }

        return event.deltaY;
      };

      const handleWheel = (event: WheelEvent) => {
        const currentScroll = storyTrigger.scroll() ?? window.scrollY;
        const insideStory = isScrollInsidePin(
          storyTrigger.isActive,
          currentScroll,
          storyTrigger.start,
          storyTrigger.end,
        );

        if (!insideStory) return;

        if (gestureLocked) {
          event.preventDefault();
          event.stopImmediatePropagation();
          scheduleGestureUnlock();
          return;
        }

        const navigation = getWheelPanelTarget(
          activePanelIndex,
          normalizeWheelDelta(event),
          storyPanels.length,
        );

        if (!navigation.capture) {
          event.preventDefault();
          event.stopImmediatePropagation();
          pinGuardActive = false;
          setProtectedScroll(
            getStoryExitScroll(
              storyTrigger.start,
              storyTrigger.end,
              navigation.direction,
            ),
          );
          return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();

        if (navigation.direction === 0) return;

        pinGuardActive = true;
        setProtectedScroll(
          getPinGuardScroll(storyTrigger.start, storyTrigger.end),
        );

        setPanel(navigation.targetIndex, true, navigation.direction);
      };

      window.addEventListener("wheel", handleWheel, {
        passive: false,
        capture: true,
      });
      window.addEventListener("scroll", enforcePinGuard, { passive: true });

      return () => {
        pinGuardActive = false;
        window.removeEventListener("wheel", handleWheel, true);
        window.removeEventListener("scroll", enforcePinGuard);
        trackTween?.kill();
        progressTween?.kill();
        mediaTween?.kill();
        window.clearTimeout(unlockTimer);
        if (guardFrame !== undefined) {
          window.cancelAnimationFrame(guardFrame);
        }
      };
    });

    return () => mediaQuery.revert();
  }, []);
  return (
    <section
      ref={root}
      aria-label="Sampan Highway Inn story"
      className="relative left-1/2 -ml-[50vw] w-screen max-w-none overflow-x-clip bg-[#071b13] text-white"
    >
      <MobileHighwayInnCarousel />

      <div className="hidden md:block">
        <div className="highway-story-eyebrow absolute left-1/2 top-24 z-40 -translate-x-1/2">
          <div className="mx-auto flex w-max items-center gap-3 border border-white/16 bg-[#071b13]/58 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/76 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 bg-[#ef636b]" />
            <span className="text-white/30">—</span>
            <span className="text-[#f5c84c]">Sampan Highway Inn</span>
          </div>
        </div>

        <div className="relative h-[100svh] overflow-hidden">
          <div className="highway-story-track flex h-full w-max flex-row">
            {panels.map(([number, label, title, copy, image]) => (
              <article
                key={number}
                className="highway-story-panel group relative flex h-full min-h-0 w-screen shrink-0 items-end overflow-hidden border-r border-white/12"
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

          <div className="pointer-events-none absolute inset-x-8 bottom-7 z-20 flex items-center gap-5 lg:inset-x-16">
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/42">
              Scroll to explore
            </span>

            <div className="h-px flex-1 bg-white/24">
              <div className="highway-story-progress h-full w-full origin-left scale-x-0 bg-[#ef636b]" />
            </div>

            <span className="font-mono text-[0.58rem] font-bold tracking-[0.16em] text-white/42">
              01 — 05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
