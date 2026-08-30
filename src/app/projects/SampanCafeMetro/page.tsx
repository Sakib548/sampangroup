import Link from "next/link";

import { getCafeMetroLayout } from "./cafe-metro-layout";

const cafeHighlights = [
  {
    number: "01",
    title: "Modern Showroom",
    copy: "Premium Automotive Experience.",
  },
  {
    number: "02",
    title: "Lifestyle & Wellness",
    copy: "Café, Juice Bar, Pool & Gym.",
  },
  {
    number: "03",
    title: "Complete Car Care",
    copy: "Professional Car Wash.",
  },
] as const;

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SampanCafeMetroFeature() {
  const layout = getCafeMetroLayout();

  return (
    <section
      className={`relative left-1/2 isolate w-[100dvw] max-w-none -translate-x-1/2 overflow-hidden bg-[#071b13] text-white ${layout.mobileHeightClass} ${layout.desktopHeightClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(168,223,115,0.18),transparent_30%),linear-gradient(135deg,#071b13,#123c2b)]" />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/cafe-metro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b13]/65 via-[#071b13]/10 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/95 via-[#071b13]/15 to-black/20" />

      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#a8df73]/10 blur-[120px]"
      />

      <div
        className={`relative z-10 flex w-full flex-col py-12 sm:py-14 lg:py-16 ${layout.mobileHeightClass} ${layout.desktopHeightClass} ${layout.outerPaddingClass}`}
      >
        <div
          className={layout.shellClass}
          style={{ maxWidth: `${layout.contentMaxWidth}px` }}
        >
          <div
            className={`${layout.contentFlowClass} max-w-[52rem] py-14 lg:py-10`}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#a8df73]">
              Our New-Generation Automotive Destination
            </p>

            <h2 className="max-w-[10ch] text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.79] tracking-[-0.072em]">
              Sampan Cafe Metro
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A modern automotive lifestyle destination featuring a contemporary
              car showroom, café, swimming pool, gym, and professional car-wash
              experience, all under one roof.
            </p>

            <Link
              href="https://www.sampangroup.com.bd/sampan-auto"
              className="group mt-8 inline-flex min-h-14 items-center justify-between gap-10 bg-[#a8df73] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#07131f] transition duration-300 hover:bg-white"
            >
              Explore Cafe Metro
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
          </div>

          <div className="grid overflow-hidden border-y border-white/15 bg-[#071b13]/30 backdrop-blur-xl sm:grid-cols-3">
            {cafeHighlights.map((highlight) => (
              <article
                key={highlight.number}
                className="group relative border-b border-white/15 px-5 py-5 last:border-b-0 sm:min-h-[9.5rem] sm:border-b-0 sm:border-r sm:px-6 sm:py-6 sm:last:border-r-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#a8df73] transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[0.58rem] font-bold tracking-[0.16em] text-[#ef636b]"
                    aria-hidden="true"
                  />
                  <span className="h-px w-7 bg-white/25" />
                </div>

                <h3 className="mt-4 text-xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                  {highlight.title}
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                  {highlight.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
