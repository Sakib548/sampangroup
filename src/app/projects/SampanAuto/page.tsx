import Image from "next/image";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Quality Vehicles",
    copy: " A curated selection of reliable vehicles.",
  },
  {
    number: "02",
    title: "Japanese Imports",
    copy: "Trusted Japanese vehicles sourced with quality.",
  },
  {
    number: "03",
    title: "Genuine Auto Parts",
    copy: " Genuine parts and components.",
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

export default function SampanAutoFeature() {
  return (
    <section className="relative left-1/2 min-h-[100svh] w-[100dvw] max-w-none -translate-x-1/2 isolate overflow-hidden bg-[#07131f] text-white">
      <Image
        src="/images/our_divisions/sampan-auto/sampan-auto.png"
        alt="Sampan Auto showroom with three premium vehicles"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(77,183,255,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/95 via-[#06111d]/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/95 via-[#06111d]/5 to-[#06111d]/20" />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        {/* <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
          <div className="flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#4db7ff]">
            <span className="h-px w-9 bg-current" />
            Sampan Auto · Automotive &amp; Mobility
          </div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/45">
            Reliable · Stylish · Sustainable
          </p>
        </div> */}

        <div className="my-auto max-w-[52rem] py-14 lg:py-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#ffc52f]">
            Our First & Well-Recognized Business
          </p>
          <h2 className="max-w-[10ch] text-[clamp(3.8rem,7.4vw,8rem)] font-medium leading-[0.79] tracking-[-0.072em]">
            Sampan Auto
            {/* <span className="mt-2 block text-[#ffc52f]">
              made for what&apos;s next.
            </span> */}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            One of Sampan’s pioneering and well-established businesses, offering
            vehicle sales, imports, and genuine Japanese automotive parts.
          </p>

          <Link
            href="https://www.sampangroup.com.bd/sampan-auto"
            className="group mt-8 inline-flex min-h-14 items-center justify-between gap-10 bg-[#ffc52f] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#07131f] transition duration-300 hover:bg-white"
          >
            View Automobiles
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </div>

        <div className="grid border-t border-white/20 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/15 py-5 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <span className="pt-1 text-[0.62rem] font-bold tracking-[0.18em] text-[#4db7ff]">
                {/* {value.number} */}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-sm text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                  {value.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
