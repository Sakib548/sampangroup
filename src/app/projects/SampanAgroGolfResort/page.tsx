import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: "play",
    title: "Play",
    copy: "Golf-led recreation",
  },
  {
    id: "grow",
    title: "Grow",
    copy: "Sustainable agro",
  },
  {
    id: "stay",
    title: "Stay",
    copy: "Resort accommodation",
  },
  {
    id: "gather",
    title: "Gather",
    copy: "Dining and events",
  },
] as const;

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SampanAgroGolfFeature() {
  return (
    <section
      aria-labelledby="sampan-golf-title"
      className="relative isolate w-full overflow-hidden bg-[#071b13] text-white min-h-[100svh]"
    >
      <Image
        src="/images/featuredConcerns/sampan-agro-golf-resort.png"
        alt="Aerial concept view of Sampan Agro & Golf Resort in Moulvibazar"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#071b13]/20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,19,0.68)_0%,rgba(7,27,19,0.10)_32%,rgba(7,27,19,0.38)_58%,rgba(7,27,19,0.96)_100%),linear-gradient(90deg,rgba(7,27,19,0.78)_0%,rgba(7,27,19,0.34)_45%,rgba(7,27,19,0.08)_78%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.36)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.36)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-5 pb-10 pt-24 sm:px-10 sm:pb-12 lg:px-16 lg:pt-32">
        {/* Main Content Grid */}
        <div className="mt-auto grid items-end gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-16">
          {/* Text Content */}
          <div className="w-full">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#ef636b]" />
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.23em] text-[#58b9eb]">
                A New Kind of Resort Experience
              </p>
            </div>

            <h2
              id="sampan-golf-title"
              className="max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.86] tracking-[-0.065em] text-balance"
            >
              Sampan Agro &amp;
              <span className="block text-[#58b9eb]">Golf Resort.</span>
            </h2>
          </div>

          {/* Right Column Content */}
          <div className="w-full border-l border-[#58b9eb]/55 pl-5 lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              A redefined family leisure destination combining a championship
              golf course, sustainable agriculture, and resort hospitality in
              one eco-luxury environment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://sampangolfresort.com/"
                className="group inline-flex min-h-12 items-center gap-6 border border-[#00a174]/55] bg-[#00a174]/24 px-5 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:border-[#00a174]/80 hover:bg-[#00a174]/38"
              >
                Membership Offer
                <span className="text-[#58b9eb]">
                  <Arrow />
                </span>
              </Link>
              <Link
                href="/contact?project=sampan-agro-golf-resort"
                className="group inline-flex min-h-12 items-center gap-6 border border-white/16 bg-white/[0.055] px-5 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
              >
                Enquire
                <span className="text-[#58b9eb]">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-2 border-l border-t border-white/16 bg-[#071b13]/42 backdrop-blur-xl sm:grid-cols-4"
          aria-label="Sampan Agro & Golf Resort facilities"
        >
          {features.map((feature) => (
            <article
              key={feature.id}
              className="group relative flex min-h-[8.75rem] flex-col border-b border-r border-white/16 p-4 transition-colors duration-300 hover:bg-white/[0.055] sm:p-5 lg:min-h-[9.5rem]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="h-1.5 w-1.5 bg-[#ef636b]/80 transition-transform duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-5 max-w-[16ch] text-[0.72rem] font-bold uppercase leading-5 tracking-[0.13em] text-white">
                {feature.title}
              </h3>

              {feature.copy && (
                <p className="mt-2 max-w-[23ch] text-xs leading-5 text-white/48">
                  {feature.copy}
                </p>
              )}

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#58b9eb] transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
