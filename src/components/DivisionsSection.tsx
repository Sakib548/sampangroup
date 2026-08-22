import Image from "next/image";
import Link from "next/link";

import { concerns } from "@/data/concerns";
import { divisionGroups } from "@/data/divisions";

const taglines: Record<string, string> = {
  "real-estate": "Own land, not just visit it.",
  hospitality: "Stay, celebrate, and unwind — on the highway and beyond.",
  agro: "From our farm to your table.",
  retail: "Everyday essentials, always nearby.",
  manufacturing: "Built by us, for what we build.",
  mobility: "Everything that keeps you moving.",
  education: "UK-recognized courses, taught close to home.",
  security: "Licensed, regulated, trusted supply.",
};

const initials = (label: string) =>
  label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const findConcern = (label: string) => {
  const normalized = label.toLowerCase().replace(/[^a-z0-9]/g, "");

  return concerns.find((concern) => {
    const name = concern.name.toLowerCase().replace(/[^a-z0-9]/g, "");

    return name.includes(normalized) || normalized.includes(name);
  });
};

export default function DivisionsSection() {
  const visibleDivisions = divisionGroups.filter(
    (division) => division.id !== "maritime",
  );

  return (
    <section className="relative overflow-hidden bg-[#f3f6f2] px-5 py-20 text-[#183b2b] sm:px-10 lg:px-16 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <header className="grid gap-8 border-b border-[#183b2b]/14 pb-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#008f68]">
                Our divisions
              </p>
            </div>

            <h2 className="mt-5 max-w-5xl text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-balance">
              Different industries.
              <span className="block text-[#183b2b]/42">
                One connected vision.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#183b2b]/62 lg:justify-self-end">
            Explore the businesses turning Sampan’s shared ambition into places,
            services, products, and opportunities across Bangladesh.
          </p>
        </header>

        <div>
          {visibleDivisions.map((division, divisionIndex) => (
            <section
              key={division.id}
              className="border-b border-[#183b2b]/14 py-12 lg:py-16"
            >
              <header className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#183b2b]/34">
                      {String(divisionIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-[#ef636b]" />
                  </div>

                  <h3 className="mt-4 max-w-3xl text-[clamp(1.9rem,3vw,3.2rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                    {division.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#183b2b]/56">
                    {taglines[division.id] ??
                      "Part of Sampan Group’s connected portfolio."}
                  </p>
                </div>

                <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#008f68]">
                  {String(division.items.length).padStart(2, "0")} concerns
                </p>
              </header>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {division.items.map((item, itemIndex) => {
                  const concern = findConcern(item.label);
                  const logo = concern?.logo;

                  return (
                    <article
                      key={item.id}
                      className="group relative min-h-[20rem] overflow-hidden border border-[#183b2b]/12 bg-white/76 transition duration-500 hover:-translate-y-1 hover:border-[#00a174]/48 hover:bg-white hover:shadow-[0_22px_60px_rgba(14,47,33,0.10)]"
                    >
                      <Link
                        href={item.href}
                        aria-label={`Explore ${item.label}`}
                        className="flex min-h-[20rem] flex-col p-6 sm:p-7"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="grid h-24 w-48 place-items-center border border-[#183b2b]/9 bg-[#edf2ed] p-3 sm:h-28 sm:w-52 sm:p-4">
                            {logo ? (
                              <div className="relative h-full w-full">
                                <Image
                                  src={logo}
                                  alt={`${item.label} logo`}
                                  fill
                                  sizes="(max-width: 640px) 192px, 208px"
                                  className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                                />
                              </div>
                            ) : (
                              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-2 text-center">
                                <span className="grid h-11 w-11 place-items-center border border-[#00a174]/28 bg-white/70 text-xs font-bold tracking-[0.12em] text-[#007d5b]">
                                  {initials(item.label)}
                                </span>
                                <span className="line-clamp-2 text-[0.62rem] font-bold uppercase leading-4 tracking-[0.1em] text-[#183b2b]/58">
                                  {item.label}
                                </span>
                              </div>
                            )}
                          </div>

                          <span className="font-mono text-[0.58rem] font-bold tracking-[0.14em] text-[#183b2b]/30">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="mt-auto pt-10">
                          <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#008f68]">
                            {division.title}
                          </p>

                          <h4 className="mt-3 max-w-[20ch] text-[clamp(1.3rem,1.65vw,1.65rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                            {item.label}
                          </h4>

                          <p className="mt-3 line-clamp-2 max-w-sm text-sm leading-6 text-[#183b2b]/54">
                            {concern?.tagline ??
                              "Part of Sampan Group’s growing portfolio."}
                          </p>

                          <span className="mt-6 inline-flex w-fit items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#007d5b] transition-colors duration-300 group-hover:text-[#ef636b]">
                            Explore
                            <span
                              aria-hidden="true"
                              className="text-sm text-[#ef636b] transition-transform duration-300 group-hover:translate-x-1.5"
                            >
                              →
                            </span>
                          </span>
                        </div>

                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#00a174] transition-transform duration-500 group-hover:scale-x-100"
                        />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
