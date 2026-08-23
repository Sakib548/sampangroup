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

const visibleDivisions = divisionGroups.filter(
  (division) => division.id !== "maritime",
);

export default function DivisionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f6f2] px-5 py-16 text-[#183b2b] sm:px-10 lg:px-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <header className="grid gap-8 border-b border-[#183b2b]/14 pb-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
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

        <div className=" border-[#183b2b]/14">
          {visibleDivisions.map((division) => (
            <section key={division.id} className=" first:border-t-0">
              <header className="grid min-h-[5.5rem] gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.85fr)] sm:items-center sm:gap-8 sm:py-5">
                <h3 className="text-[clamp(1.25rem,2vw,2rem)] font-medium leading-tight tracking-[-0.035em]">
                  {division.title}
                </h3>

                <p className="max-w-xl text-xs leading-5 text-[#183b2b]/52 sm:justify-self-end sm:text-right sm:text-sm">
                  {taglines[division.id] ??
                    "Part of Sampan Group’s connected portfolio."}
                </p>
              </header>

              <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {division.items.map((item) => {
                  const concern = findConcern(item.label);
                  const logo = concern?.logo;

                  return (
                    <article
                      key={item.id}
                      className="group/card relative min-h-[10rem] border border-[#183b2b]/10 bg-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-[#008f68]/30 hover:bg-white hover:shadow-[0_14px_35px_rgba(14,47,33,0.07)]"
                    >
                      <Link
                        href={item.href}
                        aria-label={`Explore ${item.label}`}
                        className="flex min-h-[10rem] flex-col p-4 sm:p-5"
                      >
                        <div className="flex items-start gap-4">
                          {logo ? (
                            <div className="relative h-12 w-32 sm:h-14 sm:w-36">
                              <Image
                                src={logo}
                                alt={`${item.label} logo`}
                                fill
                                sizes="(max-width: 640px) 128px, 144px"
                                className="object-contain object-left transition-transform duration-500 group-hover/card:scale-[1.04]"
                              />
                            </div>
                          ) : (
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e5eee8] text-[0.65rem] font-bold tracking-[0.12em] text-[#007d5b]">
                              {initials(item.label)}
                            </span>
                          )}
                        </div>

                        <div className="mt-auto pt-4">
                          <p className="line-clamp-1 text-[0.62rem] font-semibold leading-4 text-[#008f68]">
                            {concern?.tagline ??
                              "Part of Sampan Group’s connected portfolio."}
                          </p>

                          <div className="mt-2 flex items-end justify-between gap-4">
                            <h4 className="line-clamp-2 max-w-[18ch] text-base font-medium leading-[1.25] tracking-[-0.025em] sm:text-lg">
                              {item.label}
                            </h4>
                            <span
                              aria-hidden="true"
                              className="shrink-0 pb-0.5 text-lg text-[#ef636b] transition-transform duration-300 group-hover/card:translate-x-1"
                            >
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/our_divisions"
            className="group inline-flex min-h-12 items-center gap-6 border border-[#183b2b]/18 bg-white/55 px-5 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#183b2b] backdrop-blur transition duration-300 hover:border-[#008f68]/45 hover:bg-white"
          >
            View all divisions
            <span className="text-[#ef636b] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
