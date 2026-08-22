import Image from "next/image";
import Link from "next/link";

const projectFacts = [
  ["12 katha", "Planned site footprint"],
  ["14 storeys", "Proposed residential tower"],
  ["1,300+ sq ft", "Planned apartment size"],
  ["2 roads", "Road 11 and Road 12 access"],
] as const;

const ownershipSteps = [
  {
    number: "01",
    title: "Own your land share",
    copy: "Your proportional share of the project land is transferred through the agreed legal process before construction begins.",
  },
  {
    number: "02",
    title: "Build at actual cost",
    copy: "Construction is funded collectively under the project agreement, removing the conventional developer markup from the model.",
  },
  {
    number: "03",
    title: "Receive your future home",
    copy: "Your share is connected to a planned north–south-facing apartment of more than 1,300 square feet.",
  },
] as const;

const connections = [
  ["Walking distance", "Daffodil International University"],
  ["02 min", "BCDM Conference Venue"],
  ["05 min", "BRAC University Residential Campus"],
  ["20 min", "Uttara Metro Station"],
] as const;

const amenities = [
  {
    title: "Swimming pool",
    image: "/images/metro-square/amenity-pool.webp",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Fitness studio",
    image: "/images/metro-square/amenity-gym.webp",
    className: "",
  },
  {
    title: "Auditorium",
    image: "/images/metro-square/amenity-auditorium.webp",
    className: "",
  },
  {
    title: "Prayer room",
    image: "/images/metro-square/amenity-prayer-room.webp",
    className: "",
  },
  {
    title: "Library",
    image: "/images/metro-square/amenity-library.webp",
    className: "",
  },
  {
    title: "Smart access",
    image: "/images/metro-square/amenity-smart-security.webp",
    className: "md:col-span-2",
  },
  {
    title: "Rooftop helipad",
    image: "/images/metro-square/amenity-helipad.webp",
    className: "md:col-span-2",
  },
] as const;

const homeFeatures = [
  "Generous private bedrooms",
  "Open drawing and dining space",
  "Practical family kitchen",
  "Modern baths",
  "Scenic balconies",
  "Natural cross-ventilation",
] as const;

const Arrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
  >
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default function SampanMetroSquarePage() {
  return (
    <main className="overflow-hidden bg-[#f3f0e5] text-[#123c2b]">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#073b27] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(183,220,74,0.2),transparent_31%),linear-gradient(115deg,#052e20_0%,#073b27_52%,#0b5134_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="pointer-events-none absolute bottom-0 right-[-18rem] z-[1] h-[72%] w-[78rem] sm:right-[-12rem] sm:h-[82%] lg:right-[-5rem] lg:h-[91%] lg:w-[72%]">
          <Image
            src="/images/metro-square/tower-visual.webp"
            alt="Architectural visualization of the proposed Sampan Metro Square tower"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 68vw"
            className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_0%,black_66%,transparent_96%)]"
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#052e20] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col px-6 pb-8 pt-28 sm:px-10 lg:px-16 lg:pb-10 lg:pt-36">
          <div className="flex items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.28em] text-[#c4e560]">
            <span className="h-px w-10 bg-current" />
            Now introducing · Ashulia Model Town
          </div>

          <div className="mt-auto max-w-[58rem] pb-16 sm:pb-20 lg:pb-24">
            <p className="mb-5 text-xs uppercase tracking-[0.38em] text-white/65">
              Sampan Metro Square
            </p>
            <h1 className="text-[clamp(3.7rem,8vw,8.6rem)] font-medium leading-[0.78] tracking-[-0.07em]">
              Own the land.
              <span className="mt-3 block font-normal text-[#c4e560]">
                Build the future.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A new land-share residential opportunity near Uttara Metro—made
              for people who want to invest in a home, not only a plot.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?project=sampan-metro-square"
                className="group inline-flex min-h-14 items-center justify-between gap-8 bg-[#c4e560] px-6 text-xs font-bold uppercase tracking-[0.16em] text-[#073b27] transition hover:bg-white"
              >
                Schedule a site visit
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#ownership"
                className="group inline-flex min-h-14 items-center justify-between gap-8 border border-white/25 bg-white/[0.08] px-6 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-white/50 hover:bg-white/[0.14]"
              >
                Understand the model
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>

          <div className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {projectFacts.map(([value, label]) => (
              <div
                key={value}
                className="border-b border-white/15 py-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="text-xl font-medium tracking-[-0.03em] text-white">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="absolute bottom-4 right-6 z-10 hidden text-[0.6rem] uppercase tracking-[0.2em] text-white/45 lg:block">
          Architectural visualization · final design may vary
        </p>
      </section>

      <section id="ownership" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ef636b]">
                The ownership model
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,5.2vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                More ownership. Less markup.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-[#123c2b]/65">
                Metro Square uses a land-sharing structure. You become a
                proportional landowner and participate in building the project
                at its agreed construction cost.
              </p>
              <div className="mt-10 border-l-2 border-[#c4e560] pl-5">
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  Up to 40%
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#123c2b]/55">
                  Potential saving compared with conventional developer pricing,
                  according to the project brochure. Final cost depends on the
                  signed agreement and construction scope.
                </p>
              </div>
            </div>

            <div className="border-t border-[#123c2b]/20">
              {ownershipSteps.map((step) => (
                <article
                  key={step.number}
                  className="group grid gap-5 border-b border-[#123c2b]/20 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-[#ef636b]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#123c2b]/60 sm:text-base">
                      {step.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a432d] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#c4e560]">
                Connected by what comes next
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(3rem,5.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Close to campus. Closer to the city.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
                Located in Block A of Ashulia Model Town, the project sits among
                established education, conference, retail, and transport links.
              </p>
            </div>
            <div className="grid border-t border-white/20 sm:grid-cols-2">
              {connections.map(([time, place]) => (
                <div
                  key={place}
                  className="border-b border-white/15 py-6 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                >
                  <p className="text-2xl font-medium tracking-[-0.03em] text-[#c4e560]">
                    {time}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {place}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden bg-[#ece9dd] p-3 lg:mt-20 lg:p-5">
            <div className="grid lg:grid-cols-[1fr_20rem]">
              <div className="relative min-h-[25rem] overflow-hidden bg-[#e8e5da] lg:min-h-[34rem]">
                <Image
                  src="/images/metro-square/location-map.webp"
                  alt="Map showing Sampan Metro Square in relation to nearby universities and Uttara Metro stations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain p-4 sm:p-8"
                />
              </div>
              <div className="flex flex-col justify-between bg-[#f8f6ed] p-7 text-[#123c2b] sm:p-9">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ef636b]">
                    Project address
                  </p>
                  <p className="mt-5 text-xl leading-8 tracking-[-0.025em]">
                    Plots 33–36, Roads 11 &amp; 12, Block A, Khagan, Birulia,
                    Ashulia Model Town, Dhaka.
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/UQkr2ooT6sNv6TT98"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-12 inline-flex items-center justify-between border-t border-[#123c2b]/20 pt-5 text-xs font-bold uppercase tracking-[0.16em]"
                >
                  Open in Google Maps
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071b13] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#65afd3]">
                A complete life, planned
              </p>
              <h2 className="mt-5 max-w-4xl text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Everyday essentials become part of the address.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/50">
              The following shared amenities form part of the current project
              vision and remain subject to final design and approvals.
            </p>
          </div>

          <div className="mt-8 grid auto-rows-[18rem] gap-3 md:grid-cols-4 md:auto-rows-[15rem] lg:auto-rows-[17rem]">
            {amenities.map((amenity, index) => (
              <article
                key={amenity.title}
                className={`group relative isolate overflow-hidden ${amenity.className}`}
              >
                <Image
                  src={amenity.image}
                  alt={`Planned ${amenity.title.toLowerCase()} at Sampan Metro Square`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#c4e560]">
                      Planned amenity
                    </p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                      {amenity.title}
                    </h3>
                  </div>
                  <span className="text-xs text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-right text-[0.62rem] uppercase tracking-[0.18em] text-white/35">
            Amenity images are representative
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ef636b]">
                The planned apartment
              </p>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Space to breathe. Room to grow.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#123c2b]/60">
                Homes are planned around family life, practical circulation,
                natural light, and cross-ventilation—not wasted corridors.
              </p>
              <div className="mt-9 grid border-t border-[#123c2b]/20 sm:grid-cols-2">
                {homeFeatures.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex gap-4 border-b border-[#123c2b]/15 py-4 sm:odd:pr-5 sm:even:pl-5"
                  >
                    <span className="text-[0.65rem] font-bold text-[#ef636b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 bg-[#e7e3d5] p-4 sm:p-8 lg:order-2 lg:p-10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/metro-square/floor-plan.webp"
                  alt="Proposed typical floor plan for Sampan Metro Square"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#123c2b]/20 pt-5 text-[0.65rem] font-bold uppercase tracking-[0.18em]">
                <span>Proposed typical floor</span>
                <span className="text-[#123c2b]/45">Final plan may vary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#123c2b]/15 bg-[#e7ead9] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ef636b]">
                Confidence before construction
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.8rem,4.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                A new project, backed by an established group.
              </h2>
            </div>
            <div className="grid border-t border-[#123c2b]/20 md:grid-cols-3">
              {[
                ["Since 2012", "REHAB member", "Membership 1257/2012"],
                [
                  "Legal first",
                  "Transparent ownership",
                  "Land-share documentation before construction",
                ],
                [
                  "Group backed",
                  "Sampan ecosystem",
                  "Materials, delivery experience, and local operations",
                ],
              ].map(([eyebrow, title, copy]) => (
                <article
                  key={title}
                  className="border-b border-[#123c2b]/20 py-7 md:border-r md:px-6 md:last:border-r-0"
                >
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#ef636b]">
                    {eyebrow}
                  </p>
                  <h3 className="mt-5 text-xl font-medium tracking-[-0.025em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#123c2b]/55">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#ef636b] px-6 py-24 text-[#071b13] sm:px-10 lg:px-16 lg:py-32">
        <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[5rem] border-white/10" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.28em]">
            Early-stage opportunity · enquiries now open
          </p>
          <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-[12ch] text-[clamp(3.6rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.07em]">
              Secure your share before the upgrade.
            </h2>
            <div className="w-full max-w-md">
              <p className="text-base leading-7 text-[#071b13]/70">
                Ask for the ownership documents, latest project status, cost
                schedule, and an escorted site visit before making a decision.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?project=sampan-metro-square"
                  className="group inline-flex min-h-14 flex-1 items-center justify-between bg-[#071b13] px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#123c2b]"
                >
                  Request details
                  <Arrow />
                </Link>
                <a
                  href="tel:+8801906896327"
                  className="inline-flex min-h-14 flex-1 items-center justify-center border border-[#071b13]/40 bg-white/10 px-6 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md transition hover:bg-white/25"
                >
                  Call project team
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#071b13]/65">
                <a href="tel:+8801906896327" className="hover:text-[#071b13]">
                  +880 1906-896327
                </a>
                <a href="tel:+8801906896332" className="hover:text-[#071b13]">
                  +880 1906-896332
                </a>
                <a
                  href="mailto:info@sampangroup.com.bd"
                  className="hover:text-[#071b13]"
                >
                  info@sampangroup.com.bd
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
