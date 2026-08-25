import Image from "next/image";
import Link from "next/link";

const snapshots = [
  {
    title: "Sampan Group",
    type: "The parent group",
    logo: "/images/Sampan-Group.png",
    copy: "From one highway stop to a group spanning real estate, hospitality, education, agriculture, manufacturing, and mobility.",
    href: "/about",
  },
  {
    title: "Sampan Development Ltd",
    type: "Real estate & land",
    logo: "/images/logos/6-sampan-dev-ltd.png",
    copy: "Sampan’s REHAB-member real estate arm, delivering land-share, residential, commercial, and outright-sale projects.",
    href: "/our_divisions/real-estate-land-investment/sampan-development-ltd",
  },
  {
    title: "London School of Higher Studies",
    type: "Professional education",
    logo: "/images/logos/5-lshs.png",
    copy: "CIPS and CMI qualifications taught in Bangladesh through UK-affiliated professional education and recognized internationally.",
    href: "/concerns#professional-education",
  },
] as const;

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#f3f6f2] px-5 py-20 text-[#183b2b] sm:px-10 lg:px-16 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(0,161,116,0.09),transparent_28%),radial-gradient(circle_at_90%_95%,rgba(239,99,107,0.07),transparent_24%)]"
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <header className="grid gap-8  pb-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#008f68]">
                A closer look at Sampan
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.055em] text-balance">
              One group.
              <span className="block text-[#183b2b]/42">
                Three ways to create value.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#183b2b]/62 lg:justify-self-end">
            A snapshot of the group and two concerns helping turn a shared
            vision into opportunity, expertise, and lasting value.
          </p>
        </header>

        <div className="mt-8 border-y border-[#183b2b]/14 lg:grid lg:grid-cols-3">
          {snapshots.map((snapshot, index) => (
            <article
              key={snapshot.title}
              className={`group relative flex min-h-[29rem] flex-col overflow-hidden px-1 py-9 transition-colors duration-500 sm:px-7 lg:min-h-[32rem] lg:px-9 lg:py-10 ${
                index > 0
                  ? "border-t border-[#183b2b]/14 lg:border-l lg:border-t-0"
                  : ""
              } hover:bg-white/48`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#00a174] transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between gap-6">
                <div className="grid h-16 w-44 place-items-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={snapshot.logo}
                      alt={`${snapshot.title} logo`}
                      fill
                      sizes="176px"
                      className="object-contain object-left transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                {/* 
                <span className="font-mono text-[0.63rem] font-bold tracking-[0.18em] text-[#183b2b]/36">
                  {String(index + 1).padStart(2, "0")}
                </span> */}
              </div>

              <div className="mt-auto pt-16">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#ef636b]" />
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#008f68]">
                    {snapshot.type}
                  </p>
                </div>

                <h3 className="max-w-[18ch] text-[clamp(1.75rem,2.3vw,2.55rem)] font-medium leading-[1.03] tracking-[-0.045em]">
                  {snapshot.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#183b2b]/60">
                  {snapshot.copy}
                </p>

                <Link
                  href={snapshot.href}
                  className="mt-8 inline-flex w-fit items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#007d5b] transition-colors duration-300 hover:text-[#ef636b]"
                >
                  Learn more
                  <span
                    aria-hidden="true"
                    className="text-base text-[#ef636b] transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
