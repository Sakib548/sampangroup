import Image from "next/image";
import Link from "next/link";

import { concerns2 } from "@/data/concerns2";
import { divisionGroups } from "@/data/divisions";

export const metadata = {
  title: "Our Divisions | Sampan Group",
  description:
    "Explore every Sampan Group division and the businesses building places, services, products, and opportunities across Bangladesh.",
};

const taglines: Record<string, string> = {
  "real-estate": "Own land, not just visit it.",
  hospitality: "Stay, celebrate, and unwind—on the highway and beyond.",
  golf: "Bangladesh’s new full golf destination is in the making.",
  agro: "From our farm to your table.",
  retail: "Everyday essentials, always nearby.",
  manufacturing: "Built by us, for what we build.",
  mobility: "Everything that keeps you moving.",
  education: "UK-recognized courses, taught close to home.",
  security: "Licensed, regulated, trusted supply.",
  maritime: "Alternative assets shaped by Sampan’s long-term vision.",
};

const concernsById = new Map(
  concerns2.map((concern) => [String(concern.id), concern]),
);

const initials = (label: string) =>
  label
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !["and", "of", "the", "&"].includes(word.toLowerCase()))
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
    >
      {diagonal ? (
        <path d="M7 17 17 7M9 7h8v8" />
      ) : (
        <path d="M5 12h13M13 6l6 6-6 6" />
      )}
    </svg>
  );
}

export default function OurDivisionsPage() {
  const divisionTotal = divisionGroups.length;
  const concernTotal = divisionGroups.reduce(
    (total, division) => total + division.items.length,
    0,
  );

  return (
    <main className="overflow-clip bg-[#f3f6f2] text-[#183b2b]">
      <section className="relative isolate min-h-[68svh] overflow-hidden border-b border-[#183b2b]/14 px-5 pb-16 pt-36 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(0,161,116,0.16),transparent_31%),radial-gradient(circle_at_7%_92%,rgba(239,99,107,0.09),transparent_24%),linear-gradient(135deg,#f3f6f2_0%,#e8efe9_100%)]" />
        <div
          aria-hidden="true"
          className="absolute -right-[0.06em] top-[0.12em] -z-10 hidden text-[clamp(10rem,23vw,25rem)] font-medium leading-none tracking-[-0.09em] text-[#183b2b]/[0.035] xl:block"
        >
          DIVISIONS
        </div>

        <div className="mx-auto flex min-h-[calc(68svh-13rem)] w-full max-w-[1400px] flex-col justify-between gap-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#183b2b]/14 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.27em] text-[#008f68]">
                Sampan Group · Our divisions
              </p>
            </div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#183b2b]/40">
              Bangladesh · One connected portfolio
            </p>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
            <div>
              <p className="mb-5 max-w-xl text-xs font-bold uppercase tracking-[0.25em] text-[#ef636b]">
                The village will be the city
              </p>
              <h1 className="max-w-[14ch] text-[clamp(3.8rem,7.5vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em] text-balance">
                Different industries.
                <span className="block text-[#008f68]">
                  One connected vision.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="border-l-2 border-[#ef636b] pl-5 text-base leading-7 text-[#183b2b]/64">
                Explore the Sampan businesses creating places, services,
                products, education, mobility, and opportunities across
                Bangladesh.
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-[#183b2b]/15 py-5">
                <div className="border-r border-[#183b2b]/14 pr-5">
                  <p className="text-3xl font-medium tracking-[-0.05em]">
                    {String(divisionTotal).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#183b2b]/42">
                    Divisions
                  </p>
                </div>
                <div className="pl-5">
                  <p className="text-3xl font-medium tracking-[-0.05em]">
                    {String(concernTotal).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#183b2b]/42">
                    Concerns
                  </p>
                </div>
              </div>

              <Link
                href="#division-directory"
                className="group mt-7 inline-flex min-h-13 items-center justify-between gap-8 bg-[#183b2b] px-6 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#008f68]"
              >
                Browse the directory
                <span className="text-[#ef9da2] transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="Division categories"
        className="sticky top-20 z-40 border-b border-white/10 bg-[#102f23]/94 text-white shadow-[0_12px_40px_rgba(7,27,19,0.12)] backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-[1400px] items-center overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-10 lg:px-16">
          {divisionGroups.map((division) => (
            <Link
              key={division.id}
              href={`#${division.id}`}
              className="group relative flex min-h-14 shrink-0 items-center px-4 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-white/58 transition-colors duration-300 first:pl-0 hover:text-white sm:min-h-16 sm:px-5"
            >
              {division.title}
              <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#ef636b] transition-transform duration-300 group-hover:scale-x-100 group-first:left-0" />
            </Link>
          ))}
        </div>
      </nav>

      <div id="division-directory">
        {divisionGroups.map((division, divisionIndex) => (
          <section
            id={division.id}
            key={division.id}
            className={`scroll-mt-36 border-b border-[#183b2b]/14 px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 ${
              divisionIndex % 2 === 0 ? "bg-[#f3f6f2]" : "bg-[#eaf0eb]"
            }`}
          >
            <div className="mx-auto max-w-[1400px]">
              <header className="grid gap-5 border-b border-[#183b2b]/14 pb-6 sm:grid-cols-[minmax(0,1fr)_minmax(15rem,0.72fr)] sm:items-end sm:gap-10 sm:pb-7">
                <div>
                  <span className="mb-4 block h-1 w-10 bg-[#ef636b]" />
                  <h2 className="max-w-[22ch] text-[clamp(1.9rem,3.4vw,3.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-balance">
                    <Link
                      href={division.href}
                      className="group/title inline-flex items-end gap-4 transition-colors duration-300 hover:text-[#008f68]"
                    >
                      {division.title}
                      <span className="mb-1 shrink-0 text-[#ef636b] transition-transform duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1">
                        <Arrow diagonal />
                      </span>
                    </Link>
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-6 text-[#183b2b]/56 sm:justify-self-end sm:text-right sm:text-base sm:leading-7">
                  {taglines[division.id] ??
                    "Part of Sampan Group’s connected portfolio."}
                </p>
              </header>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                {division.items.map((concernId) => {
                  const concern = concernsById.get(String(concernId));

                  if (!concern) return null;

                  const logo = concern.logo;
                  const href = concern.href ?? "/";
                  const external = isExternalHref(href);

                  return (
                    <article
                      key={concern.id}
                      className="group/card relative border border-[#183b2b]/11 bg-white/76 transition duration-300 hover:-translate-y-0.5 hover:border-[#008f68]/38 hover:bg-white hover:shadow-[0_16px_40px_rgba(14,47,33,0.08)]"
                    >
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        aria-label={`Explore ${concern.name}`}
                        className="flex h-full min-h-[12.5rem] flex-col p-4 sm:min-h-[13.5rem] sm:p-5"
                      >
                        <div className="flex min-h-14 items-start justify-between gap-3">
                          {logo ? (
                            <div className="relative h-12 w-24 sm:h-14 sm:w-36">
                              <Image
                                src={logo}
                                alt={`${concern.name} logo`}
                                fill
                                sizes="(max-width: 640px) 96px, 144px"
                                className="object-contain object-left transition-transform duration-500 group-hover/card:scale-[1.035]"
                              />
                            </div>
                          ) : (
                            <span className="grid h-11 min-w-11 place-items-center rounded-full bg-[#e3ede7] px-2 text-[0.62rem] font-bold tracking-[0.11em] text-[#007d5b]">
                              {initials(concern.name)}
                            </span>
                          )}

                          <span className="mt-1 text-[#ef636b] transition-transform duration-300 group-hover/card:translate-x-1">
                            <Arrow diagonal={external} />
                          </span>
                        </div>

                        <div className="mt-auto pt-6">
                          <p className="text-[0.66rem] font-semibold leading-5 text-[#008f68] sm:text-xs sm:leading-5">
                            {concern.tagline ??
                              "Part of Sampan Group’s connected portfolio."}
                          </p>

                          <h3 className="mt-3 break-words text-sm font-medium leading-[1.22] tracking-[-0.025em] text-[#183b2b] [hyphens:auto] sm:text-lg sm:leading-[1.18]">
                            {concern.name}
                          </h3>
                        </div>

                        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#008f68] transition-transform duration-500 group-hover/card:scale-x-100" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="relative overflow-hidden bg-[#102f23] px-5 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#008f68]/18 blur-[110px]"
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#ef8d94]">
              Sampan Group
            </p>
            <h2 className="mt-5 max-w-[15ch] text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.93] tracking-[-0.055em] text-balance">
              Looking for a specific
              <span className="block text-[#a8df73]">Sampan business?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
              Tell us what you are looking for and the right Sampan team will
              help you take the next step.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-14 min-w-[15rem] items-center justify-between gap-8 bg-[#ef636b] px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#071b13] transition duration-300 hover:bg-white"
          >
            Contact Sampan Group
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
