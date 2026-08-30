"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { highwayInnFacilities } from "@/data/highwayInnFacility";
import {
  getEditorialImageLayers,
  getHighwayInnEditorialLayout,
  getSwipeGalleryAmount,
  getWrappedGalleryIndex,
} from "./highway-inn-editorial-logic";

const AUTO_ADVANCE_MS = 6500;

const galleryImages = [
  {
    id: "highway-inn",
    src: "/images/projects/sampan-highway-inn.png",
    alt: "Sampan Highway Inn",
  },
  ...highwayInnFacilities.slice(0, 4).map((facility, index) => ({
    id: `facility-${index + 1}`,
    src: facility.image,
    alt: `Sampan Highway Inn facility ${index + 1}`,
  })),
];

type TurnDirection = "next" | "previous";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 fill-none stroke-current stroke-[1.8] transition-transform duration-300 ${
        direction === "left" ? "rotate-180" : ""
      }`}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HighwayInnHorizontalStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState<TurnDirection>("next");
  const touchStartX = useRef<number | null>(null);
  const editorialLayout = getHighwayInnEditorialLayout();

  const imageLayers = useMemo(
    () => getEditorialImageLayers(activeIndex, galleryImages.length),
    [activeIndex],
  );

  const hasMultipleImages = galleryImages.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const timer = window.setTimeout(() => {
      setTurnDirection("next");
      setActiveIndex((current) =>
        getWrappedGalleryIndex(current, 1, galleryImages.length),
      );
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, hasMultipleImages]);

  const move = (amount: -1 | 1) => {
    if (!hasMultipleImages) return;

    setTurnDirection(amount > 0 ? "next" : "previous");
    setActiveIndex((current) =>
      getWrappedGalleryIndex(current, amount, galleryImages.length),
    );
  };

  const showImage = (index: number) => {
    if (index === activeIndex) return;

    setTurnDirection(index > activeIndex ? "next" : "previous");
    setActiveIndex(index);
  };

  return (
    <section
      aria-labelledby="highway-inn-title"
      className="relative isolate overflow-hidden bg-[#e8efe9] px-5 py-16 text-[#123b2c] sm:px-10 sm:py-20 lg:h-[100svh] lg:min-h-0 lg:px-16 lg:py-12 xl:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(245,200,76,0.16),transparent_26%),radial-gradient(circle_at_92%_88%,rgba(0,161,116,0.10),transparent_25%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(18,59,44,.75)_1px,transparent_1px),linear-gradient(90deg,rgba(18,59,44,.75)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col lg:h-full">
        <div
          className={`mt-14 grid items-center gap-14 lg:mt-0 lg:min-h-0 lg:flex-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)] lg:gap-24 xl:gap-32 ${editorialLayout.desktopGridAlignment}`}
        >
          <div
            className={`relative mx-auto h-[390px] w-full max-w-[620px] touch-pan-y select-none sm:h-[500px] lg:h-[min(52svh,480px)] xl:h-[min(54svh,510px)] ${editorialLayout.desktopImageAlignment}`}
            onTouchStart={(event) => {
              touchStartX.current =
                event.changedTouches.item(0)?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const startX = touchStartX.current;
              const endX = event.changedTouches.item(0)?.clientX;

              touchStartX.current = null;
              if (startX === null || endX === undefined) return;

              const amount = getSwipeGalleryAmount(startX, endX);
              if (amount !== 0) move(amount);
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -left-4 top-7 h-[76%] w-[72%] border border-[#123b2c]/12 sm:-left-8 sm:top-10 lg:top-0 lg:h-full"
            />

            {imageLayers.map(({ index, offset }) => {
              const image = galleryImages[index];
              const isFront = offset === 0;
              const rotation = offset === -1 ? -6 : offset === 1 ? 5 : 0;
              const translateX =
                offset === -1 ? "-7%" : offset === 1 ? "7%" : "0";
              const translateY =
                offset === -1 ? "2.5%" : offset === 1 ? "4%" : "0";

              return (
                <div
                  key={`${image.id}-${offset}`}
                  aria-hidden={!isFront}
                  className={`absolute inset-x-5 inset-y-4 overflow-hidden rounded-[1.75rem] border border-white/35 bg-[#123b2c] shadow-[0_32px_80px_rgba(9,45,31,0.22)] sm:inset-x-10 sm:inset-y-8 lg:inset-y-0 ${
                    isFront
                      ? `z-20 ${
                          turnDirection === "next"
                            ? "shi-page-turn-next"
                            : "shi-page-turn-previous"
                        }`
                      : "z-10 opacity-75"
                  }`}
                  style={
                    isFront
                      ? undefined
                      : {
                          transform: `translate(${translateX}, ${translateY}) rotate(${rotation}deg) scale(0.94)`,
                        }
                  }
                >
                  <Image
                    src={image.src}
                    alt={isFront ? image.alt : ""}
                    fill
                    priority={isFront && activeIndex === 0}
                    sizes="(max-width: 1024px) 90vw, 48vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#071b13]/52 via-transparent to-black/5"
                  />
                  {isFront && (
                    <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-white/28 pt-4 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/72 sm:inset-x-7 sm:bottom-7">
                      <span>Dhaka–Khulna Highway</span>
                      <span className="text-[#f5c84c]">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(galleryImages.length).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* {hasMultipleImages && (
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Show next Highway Inn image"
                className="group absolute bottom-1 right-1 z-30 grid h-13 w-13 place-items-center rounded-full border border-white/30 bg-[#123b2c] text-white shadow-[0_14px_35px_rgba(7,27,19,0.28)] transition duration-300 hover:bg-[#ef636b] sm:hidden"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </button>
            )} */}
          </div>

          <div
            className={`max-w-[38rem] lg:flex lg:min-h-0 lg:flex-col ${editorialLayout.desktopCopyAlignment}`}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <p
                className="text-[0.66rem] font-bold uppercase tracking-[0.25em]"
                style={{ color: editorialLayout.accentColor }}
              >
                Our Flagship Hospitality &amp; Travel Destination
              </p>
            </div>

            <h2
              id="highway-inn-title"
              className="mt-6 text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.06em] text-balance lg:mt-0"
            >
              Sampan
              <span className="mt-2 block">Highway Inn.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#123b2c]/66 sm:text-lg sm:leading-8">
              One of Sampan&apos;s most recognized flagship projects, a familiar
              name and trusted highway destination known to travelers across
              Bangladesh.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/sampan-highway-inn-restaurant-party-centre"
                className="group inline-flex min-h-14 items-center justify-between gap-10 bg-[#123b2c] px-6 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-white transition duration-300 hover:bg-[#00a174]"
              >
                Explore More
                <span className=" transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>

              {/* {hasMultipleImages && (
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Show next Highway Inn image"
                  className="group hidden h-14 w-14 place-items-center border border-[#123b2c]/30 text-[#123b2c] transition duration-300 hover:border-[#ef636b] hover:bg-[#ef636b] hover:text-white sm:grid"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </button>
              )} */}
            </div>

            {hasMultipleImages && (
              <div
                className={`mt-12 flex items-center gap-4 border-t border-[#123b2c]/16 pt-5 ${editorialLayout.desktopControlsSpacing}`}
              >
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Show previous Highway Inn image"
                  className="group grid h-10 w-10 shrink-0 place-items-center text-[#123b2c]/65 transition hover:text-[#ef636b]"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                    <Arrow direction="left" />
                  </span>
                </button>

                <div
                  className="flex min-w-0 flex-1 items-center gap-2"
                  aria-label="Choose a Highway Inn image"
                >
                  {galleryImages.map((image, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => showImage(index)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative h-1 overflow-hidden transition-[width,background-color] duration-500 ${
                          isActive
                            ? "w-14 bg-[#123b2c]/18"
                            : "w-5 bg-[#123b2c]/22 hover:bg-[#123b2c]/40"
                        }`}
                      >
                        {isActive && (
                          <span
                            key={`progress-${activeIndex}`}
                            aria-hidden="true"
                            className="shi-auto-progress absolute inset-0 origin-left bg-[#ef636b]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <p
                  className="shrink-0 font-mono text-[0.6rem] font-bold tracking-[0.16em] text-[#123b2c]/48"
                  aria-live="polite"
                >
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .shi-page-turn-next {
          animation: shi-page-turn-next 850ms cubic-bezier(0.22, 1, 0.36, 1)
            both;
          backface-visibility: hidden;
          transform-origin: left center;
        }

        .shi-page-turn-previous {
          animation: shi-page-turn-previous 850ms cubic-bezier(0.22, 1, 0.36, 1)
            both;
          backface-visibility: hidden;
          transform-origin: right center;
        }

        .shi-auto-progress {
          animation: shi-auto-progress ${AUTO_ADVANCE_MS}ms linear forwards;
        }

        @keyframes shi-page-turn-next {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateY(-38deg) translateX(-6%)
              scale(0.97);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateY(0deg) translateX(0) scale(1);
          }
        }

        @keyframes shi-page-turn-previous {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateY(38deg) translateX(6%)
              scale(0.97);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateY(0deg) translateX(0) scale(1);
          }
        }

        @keyframes shi-auto-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shi-page-turn-next,
          .shi-page-turn-previous {
            animation: none;
          }

          .shi-auto-progress {
            animation: none;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
