"use client";

import Image from "next/image";
import Link from "next/link";

const experiences = [
  ["Play", "Golf-led recreation"],
  ["Grow", "Sustainable agro"],
  ["Stay", "Resort accommodation"],
  ["Gather", "Dining and events"],
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:translate-x-1"
    >
      {/* Fixed arrow path */}
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SampanAgroGolfFeature() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#061b12] text-white">
      {/* ── Background ── */}
      <Image
        src="/images/featuredConcerns/sampan-agro-golf-resort.png"
        alt="Aerial concept view of Sampan Agro & Golf Resort in Moulvibazar"
        fill
        priority={false}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center sm:object-[62%_center]"
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-[#061b12]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b12]/95 via-[#061b12]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#061b12]/25 to-[#061b12]/90" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28 xl:py-32">
        
        {/* ── Top Bar ── */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#d7e969]" />
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.4em] text-[#d7e969]">
                Sampan Agro &amp; Golf Resort
              </span>
            </div>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Podunapur · Moulvibazar
            </p>
          </div>
          <div className="hidden self-end sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
              Opening soon
            </p>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-16">
          
          {/* Text */}
          <div className="w-full lg:max-w-xl lg:pb-2">
            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-[#ffc52f]">
              A New Kind of Resort Experience
            </p>

            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white">
              Sampan Agro &amp; Golf Resort
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              A redefined family leisure destination combining a championship
              golf course, sustainable agriculture, and resort hospitality in
              one eco-luxury environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://sampangolfresort.com/"
                className="group inline-flex min-h-[52px] items-center justify-between gap-3 rounded-full bg-[#d7e969] px-7 text-xs font-bold uppercase tracking-[0.15em] text-[#061b12] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_24px_rgba(215,233,153,0.25)]"
              >
                Membership Offer
                <ArrowIcon />
              </Link>
              <Link
                href="/contact?project=sampan-agro-golf-resort"
                className="group inline-flex min-h-[52px] items-center justify-between gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 text-xs font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12]"
              >
                Enquire
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* ── Values Grid ── */}
          {/* Changed to a 2-col grid on mobile to save vertical space, flex on larger screens */}
          <div className="grid w-full grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-1 sm:flex-row sm:gap-8 lg:gap-10 lg:pb-2">
            {experiences.map(([title, copy], index) => (
              <div
                key={title}
                className="border-l-2 border-white/15 pl-5 py-1 transition-colors duration-300 hover:border-[#d7e969]/40"
              >
                <span className="mb-2 block text-[0.6rem] font-bold tracking-[0.18em] text-[#d7e969]">
                  0{index + 1}
                </span>
                <h3 className="text-base font-medium tracking-[-0.02em] text-white/90 sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-white/45 sm:text-sm">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Caption ── */}
        <p className="mt-10 text-right text-[0.55rem] uppercase tracking-[0.17em] text-white/25 sm:mt-12">
          Representative project imagery
        </p>
      </div>
    </section>
  );
}