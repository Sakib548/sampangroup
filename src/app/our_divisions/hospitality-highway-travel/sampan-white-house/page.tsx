import Image from "next/image";
import Link from "next/link";

const hero = "/images/projects/Sampan-White-House-&-Motel.png";
const motel = "/images/concerns/highway-motel.png";
const facilities = [
  ["Comfortable rooms", "A calm place to rest before the road continues."],
  ["Secure parking", "Convenient parking for guests traveling by car."],
  ["Flexible stays", "Short breaks, day use, and overnight stays."],
  [
    "Family-friendly spaces",
    "Room to pause, refresh, and spend time together.",
  ],
  ["Travel assistance", "Helpful guidance for routes and onward travel."],
  ["On-site hospitality", "A welcoming team and nearby dining."],
];
const packages = ["Short stay", "Day stay", "Overnight stay"];
const gallery = [
  hero,
  motel,
  "/images/facilities/highway_inn/Official-Outing.png",
];
const map =
  "https://www.google.com/maps?q=Sampan%20Highway%20Motel%20White%20House%20Bangladesh&output=embed";

const bookingPackages = [
  {
    price: "৳1,500",
    title: "Quick Rest",
    description: "Perfect for short breaks or travelers needing quick rest",
    features: [
      "Free Wi-Fi access",
      "Stay duration: 1-2 hours",
      "Secure parking facilities",
      "Clean & hygienic restrooms",
      "Comfortable, air-conditioned rooms",
      "On-site restaurant meals*",
      "On-site restaurant drinks*",
    ],
    highlighted: false,
  },
  {
    price: "৳4,000",
    title: "Day Stay",
    description:
      "Ideal for business travelers or family stopovers. Includes up to 6-8 hours of stay, in-room dining, lounge access, and secure parking.",
    features: [
      "Complimentary Wi-Fi",
      "Stay duration: 6-8 hours",
      "Access to family lounge",
      "Safe parking for vehicles",
      "Spacious rooms with in-room dining",
      "On-site restaurant meals*",
      "On-site restaurant drinks*",
    ],
    highlighted: true,
  },
  {
    price: "৳7,000",
    title: "Overnight Stay",
    description:
      "Best for overnight stays or extended travel. Offers 24-hour room access, on-site restaurant meals, Wi-Fi, family-friendly lounge, and travel assistance.",
    features: [
      "High-speed Wi-Fi",
      "Stay duration: 24 hours",
      "24/7 front desk support",
      "On-site restaurant drinks",
      "On-site restaurant meals included",
      "Overnight comfortable accommodation",
      "Family-friendly lounge & travel assistance",
    ],
    highlighted: false,
  },
];

export const metadata = {
  title: "Sampan Highway Motel & White House | Sampan Group",
  description:
    "A comfortable highway stop for rest, refreshment, and onward travel.",
};

export default function HighwayMotelWhiteHousePage() {
  return (
    <main className="bg-[#faf9f6] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#1a1a1a]">
        <Image
          src={hero}
          alt="Sampan Highway Motel and White House"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Eyebrow - The tagline */}
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#e8b84b] mb-6">
              A softer place to stop
            </p>

            {/* Title - The name, in white */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight text-white">
              Sampan
              <br />
              <span className=""> White House</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              A comfortable pause for travelers—close to the route and ready for
              what comes next.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="group relative overflow-hidden bg-[#e8b84b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#d4a43e]"
              >
                Book Now
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <Link
                href="#location"
                className="border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Find Us ↓
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-16 lg:py-32">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#e8b84b]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
              — Overview
            </p>
          </div>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Rest easy before you continue.
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-2xl leading-relaxed text-[#1a1a1a]/80 sm:text-3xl">
            Not just somewhere you stop. Somewhere you can reset, refresh, and
            make the next part of the journey feel easier.
          </p>
          <p className="mt-8 text-base leading-8 text-[#1a1a1a]/60">
            Flexible stays, dependable hospitality, and a location that keeps
            you close to the highway.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#e8b84b]"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
                02 — Booking & Pricing
              </p>
              <span className="h-px w-12 bg-[#e8b84b]"></span>
            </div>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Choose Your Stay
            </h2>
            <p className="mt-6 text-lg text-[#1a1a1a]/60 max-w-2xl mx-auto">
              Flexible packages designed to fit your journey, whether you need a
              quick break or a comfortable overnight stay.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {bookingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-[#1a1a1a] text-white shadow-2xl scale-105 lg:-translate-y-4"
                    : "bg-[#faf9f6] text-[#1a1a1a] hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#e8b84b] text-black text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold ${pkg.highlighted ? "text-[#e8b84b]" : "text-[#1a1a1a]"}`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-6 ${pkg.highlighted ? "text-white/70" : "text-[#1a1a1a]/60"}`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-5xl font-bold ${pkg.highlighted ? "text-white" : "text-[#1a1a1a]"}`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${pkg.highlighted ? "text-white/60" : "text-[#1a1a1a]/60"}`}
                  >
                    / stay
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-[#e8b84b]" : "text-[#e8b84b]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${pkg.highlighted ? "text-white/80" : "text-[#1a1a1a]/70"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+8801929918408"
                  className={`block text-center px-6 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-[#e8b84b] text-black hover:bg-[#d4a43e]"
                      : "bg-[#1a1a1a] text-white hover:bg-[#e8b84b] hover:text-black"
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#1a1a1a]/50">
            * On-site restaurant meals and drinks are available at additional
            cost unless specified otherwise.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#e8b84b]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
              03 — Facilities & Offerings
            </p>
          </div>
          <h2 className="max-w-2xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Everything you need for a comfortable journey.
          </h2>

          <div className="mt-16 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(([title, description], i) => (
              <article
                key={title}
                className="group bg-[#faf9f6] p-8 transition-all duration-300 hover:bg-white"
              >
                <span className="text-sm font-semibold text-[#e8b84b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-medium transition-colors group-hover:text-[#e8b84b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1a1a1a]/60">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Room & Package Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={motel}
              alt="Sampan Highway Motel White House"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#e8b84b]"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
                04 — Room & Package Overview
              </p>
            </div>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
              Choose the pause that fits your route.
            </h2>

            <div className="mt-12 space-y-0">
              {packages.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-6 border-b border-gray-200 last:border-0 transition-all duration-300 hover:pl-2"
                >
                  <div>
                    <h3 className="text-xl font-medium">{item}</h3>
                    <p className="mt-2 text-sm text-[#1a1a1a]/60">
                      Comfortable accommodation planned around your journey.
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[#e8b84b]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="mt-10 inline-flex items-center gap-2 bg-[#1a1a1a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#e8b84b] hover:text-black"
            >
              View Pricing
              <span className="transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-[#1a1a1a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#e8b84b]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              05 — The Journey
            </p>
          </div>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            A dependable stop between destinations.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              ["Dhaka", "Start your journey"],
              ["Sampan Highway Motel", "Pause, refresh, continue"],
              ["Your destination", "Arrive ready"],
            ].map(([title, detail], i) => (
              <div
                key={title}
                className="relative border-l border-white/20 pl-8 transition-all duration-300 hover:border-[#e8b84b]"
              >
                <span className="text-sm font-semibold text-[#e8b84b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#e8b84b]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
              06 — Inside White House
            </p>
          </div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            A look around.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            {gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-lg ${i === 0 ? "aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[4/3]"}`}
              >
                <Image
                  src={src}
                  alt={`Sampan Highway Motel gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#e8b84b]"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
                07 — Location & Map
              </p>
            </div>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
              Easy to find. Easy to continue from.
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sampan+Highway+Motel+White+House+Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#e8b84b] pb-2 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#1a1a1a]"
            >
              Open Directions
              <span className="transition-transform duration-300">↗</span>
            </a>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Sampan Highway Motel and White House map"
              src={map}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e8b84b] px-6 py-24 text-black sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/60">
              08 — Plan Your Stop
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Make the pause part of the plan.
            </h2>
          </div>
          <a
            href="tel:+8801929918408"
            className="inline-flex w-fit items-center gap-3 border-2 border-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-black hover:text-[#e8b84b]"
          >
            Call +880 1929-918408
          </a>
        </div>
      </section>

      {/* Future Features Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 border-t border-gray-200 pt-12 text-sm text-[#1a1a1a]/60 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Milestone counter",
            "Guest reviews",
            "Virtual tour",
            "Press & media",
          ].map((item) => (
            <div key={item} className="group">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8b84b]">
                {item}
              </p>
              <p className="mt-3 text-2xl font-medium text-[#1a1a1a]">
                Coming soon
              </p>
              <p className="mt-1 text-sm">
                Verified content will be added when supplied.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
