import Image from "next/image";
import Link from "next/link";

type Variant = "inn" | "motel" | "golf";
const config = {
  inn: {
    title: "Sampan Highway Inn",
    eyebrow: "Hospitality between journeys",
    intro:
      "A welcoming stop designed for rest, connection and memorable highway moments.",
    hero: "/images/projects/sampan-highway-inn.png",
    accent: "#e0a34b",
    dark: true,
    cards: ["Stay a while", "Dine and gather", "Travel with ease"],
  },
  motel: {
    title: "Sampan Highway Motel & White House",
    eyebrow: "A quieter way to travel",
    intro:
      "Comfortable rooms, flexible stays and warm hospitality when you need it most.",
    hero: "/images/projects/Sampan-White-House-&-Motel.png",
    accent: "#a77b42",
    dark: false,
    cards: ["Flexible stays", "Comfortable rooms", "A peaceful stop"],
  },
  golf: {
    title: "Sampan Agro & Golf Resort",
    eyebrow: "Leisure in the landscape",
    intro:
      "Open skies, green fairways and thoughtful hospitality in one destination.",
    hero: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    accent: "#7b9a63",
    dark: true,
    cards: ["Play outdoors", "Rest deeply", "Gather together"],
  },
};

export default function HospitalityModernPage({
  variant,
}: {
  variant: Variant;
}) {
  const c = config[variant];
  const gallery =
    variant === "golf"
      ? [
          c.hero,
          "/images/concerns/4-sampan-go-lfresort.png",
          "/images/concerns/3-sampan-eco-agro.png",
        ]
      : [c.hero, c.hero, c.hero];
  const background = c.dark
    ? "bg-[#101512] text-white"
    : "bg-[#f3eee5] text-[#24251f]";
  return (
    <main className={background}>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <Image
          src={c.hero}
          alt={c.title}
          fill
          priority
          className="object-cover opacity-65"
        />
        <div
          className={`absolute inset-0 ${c.dark ? "bg-gradient-to-t from-[#101512] via-black/35 to-transparent" : "bg-gradient-to-t from-[#24251f]/70 via-black/15 to-transparent"}`}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p
            className="text-xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: c.accent }}
          >
            {c.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[clamp(4rem,7vw,7.5rem)]">
            {c.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <p className="max-w-md text-base leading-7 opacity-75">{c.intro}</p>
            <Link
              href="#discover"
              className="border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
            >
              Discover more <span className="ml-3">↓</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="discover"
        className={`${c.dark ? "bg-[#101512]" : "bg-[#f3eee5]"} py-24 lg:py-36`}
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28 lg:px-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: c.accent }}
          >
            01 — The experience
          </p>
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              A destination with room for your own pace.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 opacity-60">
              Every detail is designed to make the journey feel easier—from the
              first arrival to the moment you decide to stay a little longer.
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${c.dark ? "bg-[#19251e]" : "bg-[#e7ddce]"} py-24 lg:py-32`}
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={gallery[1]}
              alt={`${c.title} experience`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: c.accent }}
            >
              02 — Make it yours
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Simple comforts. Memorable moments.
            </h2>
            <div className="mt-10 divide-y divide-current/15 border-y border-current/15">
              {c.cards.map((card, i) => (
                <div
                  key={card}
                  className="flex items-center justify-between py-5"
                >
                  <span className="text-lg">{card}</span>
                  <span className="text-sm opacity-50">0{i + 1}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-9 inline-flex border border-current px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-current hover:text-white"
            >
              Plan your visit <span className="ml-4">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={`${c.dark ? "bg-[#101512]" : "bg-[#f3eee5]"} py-24 lg:py-32`}
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: c.accent }}
              >
                03 — A sense of place
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
                See what awaits.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className={`relative overflow-hidden ${i === 1 ? "md:translate-y-12" : ""} ${i === 2 ? "md:-translate-y-4" : ""}`}
              >
                <Image
                  src={src}
                  alt={c.title}
                  width={900}
                  height={700}
                  className="h-[24rem] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-20 lg:py-28"
        style={{
          backgroundColor: c.accent,
          color: c.dark ? "#101512" : "#24251f",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              04 — Begin here
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
              Make the journey part of the destination.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit border border-current px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
          >
            Contact Sampan <span className="ml-4">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
