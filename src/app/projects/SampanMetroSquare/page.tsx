import Link from "next/link";

const facts = [
  ["12 katha", "Site footprint"],
  ["14 storeys", "Planned tower"],
  ["1,300+ sq ft", "Planned homes"],
  ["20 min", "Uttara Metro"],
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

export default function SampanMetroSquareFeature() {
  return (
    <section className="relative left-1/2 isolate w-[100dvw] max-w-none -translate-x-1/2 overflow-hidden bg-[#073b27] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(196,229,96,0.18),transparent_30%),linear-gradient(115deg,#052e20_0%,#073b27_55%,#0b5134_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Full-height, edge-to-edge architectural video panel on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] h-full w-full lg:w-[72%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/metro-square/tower-home.webp"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/metro-square.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark gradient overlays for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#052e20] via-[#052e20]/65 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#052e20] via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[740px] w-full flex-col px-5 py-20 sm:px-10 lg:min-h-[720px] lg:px-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
          <div className="my-auto max-w-3xl py-16 lg:py-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-white/55">
              Sampan Development Ltd
            </p>

            <h2 className="text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.8] tracking-[-0.07em]">
              Sampan
              <span className="mt-2 block">Metro Square.</span>
            </h2>

            <div className="mt-8 grid max-w-2xl gap-6 sm:grid-cols-[1fr_13rem] sm:items-start">
              <p className="text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                Own a piece of Ashulia&apos;s next address—a land-share
                residential project for people who want to invest in a future
                home, not only a plot.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/our_divisions/real-estate-land-investment/sampan-metro-square"
                className="group inline-flex min-h-14 items-center justify-between gap-8 bg-[#ef636b] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#071b13] transition duration-300 hover:bg-white"
              >
                Explore Metro Square
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([value, label]) => (
              <div
                key={value}
                className="border-b border-white/15 py-5 sm:odd:border-r sm:odd:pr-5 sm:even:pl-5 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="text-xl font-medium tracking-[-0.03em] text-white">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/45">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-right text-[0.58rem] uppercase tracking-[0.17em] text-white/30">
            Architectural visualization · planned specifications may change
          </p>
        </div>
      </div>
    </section>
  );
}
