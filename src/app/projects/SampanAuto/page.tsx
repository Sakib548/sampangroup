"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const values = [
  {
    number: "01",
    title: "Quality Vehicles",
    copy: "A curated selection of reliable vehicles.",
  },
  {
    number: "02",
    title: "Japanese Imports",
    copy: "Trusted Japanese vehicles sourced with quality.",
  },
  {
    number: "03",
    title: "Genuine Auto Parts",
    copy: "Genuine parts and components.",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M5 12h13M13 6l6 6 6 6" />
    </svg>
  );
}

export default function SampanAutoFeature() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07131f] text-white">
      {/* ── Background Image ── */}
      <Image
        src="/images/our_divisions/sampan-auto/sampan-auto.png"
        alt="Sampan Auto showroom with premium vehicles"
        fill
        priority={false}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07131f]/95 via-[#07131f]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#07131f]/30 to-[#07131f]/90" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw] py-20 sm:py-24 lg:py-28 xl:py-32">
        {/* ── Top Bar ── */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#4db7ff]" />
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.4em] text-[#4db7ff]">
                Sampan Auto · Automotive &amp; Mobility
              </span>
            </div>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Reliable · Stylish · Sustainable
            </p>
          </div>
          <div className="hidden sm:block self-end">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              Established since 2009
            </p>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
          {/* Text */}
          <div className="lg:max-w-xl lg:pb-2">
            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-[#ffc52f]">
              Our First & Well-Recognized Business
            </p>

            <h2 className="text-[clamp(3.2rem,6vw,5.5rem)] font-medium leading-[0.82] tracking-[-0.06em] text-white">
              Sampan Auto
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              One of Sampan&apos;s pioneering and well-established businesses,
              offering vehicle sales, imports, and genuine Japanese automotive
              parts.
            </p>

            <Link
              href="https://www.sampangroup.com.bd/sampan-auto"
              className="group mt-8 inline-flex items-center gap-3.5 rounded-full bg-[#ffc52f] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#07131f] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(255,197,0.3)]"
            >
              View Automobiles
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          {/* ── Values ── */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 lg:gap-10 lg:pb-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="flex-1 border-l-2 border-white/15 pl-5 py-3 transition-colors duration-300 hover:border-[#4db7ff]/40"
              >
                <span className="text-[0.6rem] font-bold tracking-[0.18em] text-[#4db7ff] block">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-white/90">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-white/45">
                    {value.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}