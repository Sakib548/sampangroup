import Image from "next/image";
import Link from "next/link";

const experiences = [
  ["Play", "Golf-led recreation"],
  ["Grow", "Sustainable agro"],
  ["Stay", "Resort accommodation"],
  ["Gather", "Dining and events"],
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

export default function SampanAgroGolfFeature() {
  return (
    <section className="relative left-1/2 isolate min-h-[680px] w-screen -translate-x-1/2 overflow-hidden bg-[#071b13] text-white lg:min-h-[650px]">
      <Image
        src="/images/featuredConcerns/sampan-agro-golf-resort.png"
        alt="Aerial concept view of Sampan Agro & Golf Resort"
        fill
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />

      <div className="absolute inset-0 bg-[#061b12]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b12]/95 via-[#061b12]/62 to-[#061b12]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061b12]/95 via-transparent to-[#061b12]/25" />

      <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1500px] flex-col px-6 py-16 sm:px-10 lg:min-h-[650px] lg:px-16 lg:py-20">
        {/* <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
          <div className="flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.27em] text-[#d7e969]">
            <span className="h-px w-9 bg-current" />
            Sampan Agro &amp; Golf Resort
          </div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/45">
            Podunapur · Moulvibazar
          </p>
        </div> */}

        <div className="my-auto max-w-[53rem] py-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d7e969]">
            A New Family Play Resort Experience
          </p>
          <h2 className="text-[clamp(3rem,5vw,5.75rem)]  font-medium leading-[0.8] tracking-[-0.07em]">
            Sampan Agro & Golf Resort
            {/* <span className="mt-2 block ">becomes the getaway.</span> */}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            A redefined family leisure destination combining golf, agriculture,
            nature, recreation, and resort hospitality in one eco-luxury
            environment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://sampangolfresort.com/"
              className="group inline-flex min-h-14 items-center justify-between gap-8 bg-[#d7e969] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#071b13] transition duration-300 hover:bg-white"
            >
              Membership Offer
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
            {/* <Link
              href="/contact?project=sampan-agro-golf-resort"
              className="group inline-flex min-h-14 items-center justify-between gap-8 border border-white/25 bg-white/[0.08] px-6 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-xl transition duration-300 hover:border-white/45 hover:bg-white/[0.14]"
            >
              Enquire
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link> */}
          </div>
        </div>

        <div className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map(([title, copy]) => (
            <div
              key={title}
              className="border-b border-white/15 py-4 sm:odd:border-r sm:odd:pr-5 sm:even:pl-5 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="text-lg font-medium tracking-[-0.025em]">{title}</p>
              <p className="mt-1 text-xs leading-5 text-white/45">{copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-right text-[0.55rem] uppercase tracking-[0.17em] text-white/30">
          Representative project imagery
        </p>
      </div>
    </section>
  );
}
