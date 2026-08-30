import Image from "next/image";
import Link from "next/link";

// --- Asset Placeholders ---
const heroBackground = "/images/projects/express-highway-inn.jpg";
const masterplanImage = "/images/projects/express-highway-inn.png";
const galleryImages = [
  "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
  "/images/express-inn/gallery-2.jpg",
  "/images/express-inn/gallery-3.jpg",
  "/images/express-inn/gallery-4.jpg",
];
const droneFootageThumbnail = "/images/express-inn/drone-thumb.jpg";

// --- Facilities Data ---
const facilities = [
  {
    title: "VVIP Accommodation",
    description:
      "Premium, soundproofed rooms designed for ultimate comfort and privacy.",
    image: "/images/express-inn/facility-vvip.jpg",
  },
  {
    title: "24/7 Highway Restaurant",
    description: "Fresh, hygienic dining options available at any hour.",
    image: "/images/express-inn/facility-restaurant.jpg",
  },
  {
    title: "EV Car Charging",
    description:
      "Fast, reliable charging stations for all major electric vehicles.",
    image: "/images/express-inn/facility-ev.jpg",
  },
  {
    title: "Automatic Car Wash",
    description: "Quick, efficient cleaning while you rest and refresh.",
    image: "/images/express-inn/facility-carwash.jpg",
  },
  {
    title: "Salon & Wellness Spa",
    description: "Premium wellness and grooming services.",
    image: "/images/express-inn/facility-spa.jpg",
  },
  {
    title: "Swimming Pool & Gym",
    description: "State-of-the-art fitness equipment and serene pool.",
    image: "/images/express-inn/facility-pool.jpg",
  },
];

// --- Phased Opening Timeline ---
const phasedTimeline = [
  {
    phase: "Phase 1",
    title: "Foundation & Core Facilities",
    date: "Q1 2025",
    status: "In Progress",
    features: [
      "Main Building Structure",
      "Parking Facilities",
      "Basic Amenities",
    ],
  },
  {
    phase: "Phase 2",
    title: "Hospitality Services",
    date: "Q3 2025",
    status: "Planned",
    features: ["VVIP Rooms", "Restaurant & Dining", "Car Wash & EV Charging"],
  },
  {
    phase: "Phase 3",
    title: "Premium Amenities",
    date: "Q1 2026",
    status: "Planned",
    features: ["Spa & Wellness Center", "Swimming Pool", "Business Lounge"],
  },
];

// --- Membership vs Day Visitor Pricing ---
const membershipPricing = [
  {
    type: "Day Visitor",
    price: "৳2,500",
    period: "per visit",
    benefits: [
      "Access to restaurant & dining",
      "Parking facilities",
      "Basic amenities",
      "EV charging (additional cost)",
    ],
    highlighted: false,
  },
  {
    type: "Founding Member",
    price: "৳50,000",
    period: "one-time",
    benefits: [
      "Priority booking & check-in",
      "20% discount on all services",
      "Complimentary EV charging",
      "Access to exclusive member lounge",
      "Free car wash (monthly)",
      "Guest privileges (2 per month)",
      "Early access to new facilities",
    ],
    highlighted: true,
  },
  {
    type: "Annual Membership",
    price: "25,000",
    period: "per year",
    benefits: [
      "15% discount on services",
      "Priority reservations",
      "Complimentary Wi-Fi",
      "Monthly car wash",
      "Member-only promotions",
    ],
    highlighted: false,
  },
];

// --- Nearby Locations ---
const nearbyLocations = [
  {
    name: "Sampan Trade Emporium",
    distance: "2.5 km",
    type: "Shopping & Commerce",
    description:
      "A premier shopping destination offering diverse retail experiences and commercial services.",
    image: "/images/nearby/trade-emporium.jpg",
  },
  {
    name: "Sampan Tower 1",
    distance: "3.1 km",
    type: "Commercial Complex",
    description:
      "Modern commercial tower featuring office spaces, retail outlets, and business facilities.",
    image: "/images/nearby/tower-1.jpg",
  },
  {
    name: "Sampan Tower 2",
    distance: "3.3 km",
    type: "Mixed-Use Development",
    description:
      "Contemporary mixed-use development with residential and commercial spaces.",
    image: "/images/nearby/tower-2.jpg",
  },
];

const mapUrl =
  "https://www.google.com/maps?q=Express+Highway+Inn+Bangladesh&output=embed";

export const metadata = {
  title: "Express Highway Inn | Luxury Highway Hospitality",
  description:
    "Blending relaxation and luxury with modern comfort, fine dining, and unmatched service.",
};

export default function ExpressHighwayInnPage() {
  return (
    <main className="bg-[#faf9f6] text-[#1a1a1a] antialiased">
      {/* ================= 1. OVERVIEW (HERO ONLY) ================= */}
      {/* ================= 1. OVERVIEW (HERO ONLY) ================= */}
      <section className="flex h-screen flex-col lg:flex-row bg-[#1a1a1a] overflow-hidden">
        {/* LEFT SIDE: Text & Membership Card */}
        <div className="relative z-10 flex w-full lg:w-1/2 flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Eyebrow */}
            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#58b9eb] mb-4">
              Ongoing Development
            </p> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-white">
              Express
              <br />
              Highway Inn
            </h1>

            {/* Subheadline */}
            <p className="mt-4 max-w-md text-base leading-7 text-white/70">
              Where relaxation meets luxury. A perfect blend of comfort,
              elegance, and indulgence for the modern traveler.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#waitlist"
                className="bg-[#58b9eb] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a1a] transition-all duration-300 hover:bg-white"
              >
                Join Waitlist
              </Link>
              <Link
                href="#masterplan"
                className="border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#58b9eb] hover:text-[#58b9eb]"
              >
                View Masterplan
              </Link>
            </div>

            {/* Membership Card */}
            <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-[#252525] p-5 transition-all duration-300 hover:border-[#58b9eb]/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#58b9eb]">
                    Founding Member
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    Exclusive Early Access
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    Secure lifetime benefits before our grand opening.
                  </p>
                </div>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#58b9eb]/10">
                  <svg
                    className="h-5 w-5 text-[#58b9eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="text-xs text-white/50">Starting at</p>
                  <p className="text-xl font-bold text-white">৳50,000</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/50">Spots Left</p>
                  <p className="text-base font-semibold text-[#58b9eb]">
                    Only 100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Background Image */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
          <Image
            src={heroBackground}
            alt="Express Highway Inn Building"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= 2. MASTERPLAN OVERVIEW ================= */}
      <section
        id="masterplan"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              02 — Masterplan Overview
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-12">
            Vision for excellence.
          </h2>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#f5f5f5]">
              <Image
                src={masterplanImage}
                alt="Express Highway Inn Masterplan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#1a1a1a]/60">
                  {/* Masterplan Visualization */}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[#58b9eb] pl-6">
                <h3 className="text-xl font-semibold mb-2">Total Area</h3>
                <p className="text-3xl font-bold text-[#1a1a1a]">5.2 Acres</p>
                <p className="text-sm text-[#1a1a1a]/60 mt-1">
                  Comprehensive highway hospitality complex
                </p>
              </div>

              <div className="border-l-2 border-[#58b9eb] pl-6">
                <h3 className="text-xl font-semibold mb-2">
                  Total Built-up Area
                </h3>
                <p className="text-3xl font-bold text-[#1a1a1a]">
                  85,000 sq. ft.
                </p>
                <p className="text-sm text-[#1a1a1a]/60 mt-1">
                  Multi-level hospitality facilities
                </p>
              </div>

              <div className="border-l-2 border-[#58b9eb] pl-6">
                <h3 className="text-xl font-semibold mb-2">Parking Capacity</h3>
                <p className="text-3xl font-bold text-[#1a1a1a]">
                  200+ Vehicles
                </p>
                <p className="text-sm text-[#1a1a1a]/60 mt-1">
                  Including EV charging stations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. LOCATION + MAP ================= */}
      <section
        id="location"
        className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              03 — Location & Accessibility
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-12">
            Strategically positioned.
          </h2>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Highway Access</h3>
                  <p className="text-[#1a1a1a]/60 leading-relaxed">
                    Located directly on the national highway with easy access
                    from both directions. No detours required.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Distance from Major Cities
                  </h3>
                  <ul className="space-y-2 text-[#1a1a1a]/60">
                    <li>Dhaka: 45 km</li>
                    <li>Gazipur: 25 km</li>
                    <li>Mymensingh: 85 km</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Coordinates</h3>
                  <p className="text-[#1a1a1a]/60 font-mono text-sm">
                    23.95° N, 90.42° E
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Express+Highway+Inn+Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 border-b-2 border-[#58b9eb] pb-2 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#1a1a1a]"
              >
                Get Directions ↗
              </a>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm border border-[#1a1a1a]/5">
              <iframe
                title="Express Highway Inn Location"
                src={mapUrl}
                className="h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. ENQUIRY CTA ================= */}
      {/* <section className="bg-[#1a1a1a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              04 — Enquiry
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-8">
            Have questions? We're here to help.
          </h2>
          <p className="max-w-2xl text-lg text-white/70 mb-12">
            Whether you're interested in membership, booking, or learning more
            about our facilities, our team is ready to assist.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-white/20 p-8 rounded-lg hover:border-[#58b9eb] transition-colors">
              <h3 className="text-[#58b9eb] font-semibold mb-2">Phone</h3>
              <p className="text-2xl font-bold mb-2">+880 1XXX-XXXXXX</p>
              <p className="text-sm text-white/60">Sat-Thu: 9AM - 6PM</p>
            </div>

            <div className="border border-white/20 p-8 rounded-lg hover:border-[#58b9eb] transition-colors">
              <h3 className="text-[#58b9eb] font-semibold mb-2">Email</h3>
              <p className="text-lg font-medium mb-2">
                info@expresshighwayinn.com
              </p>
              <p className="text-sm text-white/60">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="border border-white/20 p-8 rounded-lg hover:border-[#58b9eb] transition-colors">
              <h3 className="text-[#58b9eb] font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-white/80">
                National Highway, Bangladesh
              </p>
              <p className="text-sm text-white/60 mt-2">
                Site visits by appointment
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= 5. PHOTO/VIDEO GALLERY ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              05 — Gallery
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-12">
            Visual journey.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg bg-[#f5f5f5] ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
              >
                <Image
                  src={src}
                  alt={`Express Highway Inn gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#1a1a1a]/50">
            More photos and videos coming soon as construction progresses.
          </p>
        </div>
      </section>

      {/* ================= 6. PHASED-OPENING TIMELINE ================= */}
      <section className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              06 — Development Timeline
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-16">
            Phased opening schedule.
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#58b9eb]/30 md:-translate-x-1/2" />

            {phasedTimeline.map((phase, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}
                >
                  <div className="bg-white p-8 rounded-xl border border-[#1a1a1a]/5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#58b9eb]">
                      {phase.phase}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#1a1a1a]/60 mb-4">
                      {phase.date}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        phase.status === "In Progress"
                          ? "bg-[#58b9eb]/20 text-[#58b9eb]"
                          : "bg-[#1a1a1a]/5 text-[#1a1a1a]/60"
                      }`}
                    >
                      {phase.status}
                    </span>
                    <ul className="mt-4 space-y-2">
                      {phase.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-[#1a1a1a]/70 flex items-center gap-2 justify-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#58b9eb]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#58b9eb] border-4 border-[#faf9f6] md:-translate-x-1/2 z-10" />

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. MEMBERSHIP VS DAY-VISITOR PRICING ================= */}
      {/* <section
        id="pricing"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              07 — Membership Options
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-4">
            Choose your access.
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 max-w-2xl mb-16">
            Compare day visitor access with our exclusive membership programs.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {membershipPricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#1a1a1a] text-white shadow-2xl scale-105 lg:-translate-y-4 border-2 border-[#58b9eb]"
                    : "bg-[#faf9f6] border border-[#1a1a1a]/5 hover:shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#58b9eb] text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-[#58b9eb]" : "text-[#1a1a1a]"}`}
                  >
                    {plan.type}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#1a1a1a]"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.highlighted ? "text-white/60" : "text-[#1a1a1a]/60"}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-[#58b9eb]" : "text-[#58b9eb]"}`}
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
                        className={`text-sm ${plan.highlighted ? "text-white/80" : "text-[#1a1a1a]/70"}`}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#waitlist"
                  className={`block text-center px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] transition-all ${
                    plan.highlighted
                      ? "bg-[#58b9eb] text-[#1a1a1a] hover:bg-[#4aa8dc]"
                      : "bg-[#1a1a1a] text-white hover:bg-[#58b9eb] hover:text-[#1a1a1a]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= 8. NEARBY AT THIS LOCATION ================= */}
      <section className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              08 — Nearby at This Location
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-4">
            Explore the neighborhood.
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 max-w-2xl mb-16">
            Discover other Sampan Group developments and amenities in the
            vicinity.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {nearbyLocations.map((location, i) => (
              <article
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-[#1a1a1a]/5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-[#1a1a1a]">
                      {location.distance}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#58b9eb]">
                    {location.type}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-[#58b9eb] transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. INTERACTIVE MASTERPLAN MAP ================= */}
      {/* <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              09 — Interactive Masterplan
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-12">
            Explore the development.
          </h2>

          <div className="relative aspect-[16/9] bg-[#f5f5f5] rounded-2xl overflow-hidden border border-[#1a1a1a]/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#58b9eb]/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#58b9eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-[#1a1a1a]/60 max-w-md">
                  Explore our masterplan with clickable zones showing
                  facilities, parking, dining areas, and more.
                </p>
              </div>
            </div>

         
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#58b9eb] animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-[#58b9eb] animate-pulse delay-75" />
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-[#58b9eb] animate-pulse delay-150" />
          </div>
        </div>
      </section> */}

      {/* ================= 10. PRE-LAUNCH WAITLIST SIGNUP ================= */}
      <section
        id="waitlist"
        className="bg-[#1a1a1a] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-[#58b9eb]"></span>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  10 — Pre-Launch
                </p>
              </div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
                Join the waitlist.
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Be among the first to experience Express Highway Inn. Pre-launch
                members receive exclusive founding member pricing and priority
                access.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Exclusive founding member rates",
                  "Priority booking & facility access",
                  "Early bird discounts up to 30%",
                  "Invitation to grand opening event",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#58b9eb]"
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
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#58b9eb] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#58b9eb] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#58b9eb] transition-colors"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-2"
                  >
                    Interested In
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#58b9eb] transition-colors [&>option]:text-[#1a1a1a]"
                  >
                    <option value="" className="text-[#1a1a1a]">
                      Select an option
                    </option>
                    <option value="founding-member" className="text-[#1a1a1a]">
                      Founding Membership
                    </option>
                    <option value="annual-member" className="text-[#1a1a1a]">
                      Annual Membership
                    </option>
                    <option value="day-visitor" className="text-[#1a1a1a]">
                      Day Visitor Information
                    </option>
                    <option value="corporate" className="text-[#1a1a1a]">
                      Corporate Partnership
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#58b9eb] text-[#1a1a1a] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#4aa8dc] hover:shadow-lg"
                >
                  Join Waitlist
                </button>

                <p className="text-xs text-white/40 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. DRONE FOOTAGE ================= */}
      {/* <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#58b9eb]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              11 — Construction Progress
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-12">
            Watch us grow.
          </h2>

          <div className="relative aspect-video bg-[#f5f5f5] rounded-2xl overflow-hidden border border-[#1a1a1a]/5 group cursor-pointer">
            <Image
              src={droneFootageThumbnail}
              alt="Drone footage thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1a1a1a]/40 group-hover:bg-[#1a1a1a]/30 transition-colors" />

            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#58b9eb] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#1a1a1a] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold text-lg">
                Construction Progress
              </p>
              <p className="text-white/70 text-sm">
                Latest drone footage - Updated monthly
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[#1a1a1a]/50">
            Video content coming soon as construction advances.
          </p>
        </div>
      </section> */}

      {/* ================= 12. FOUNDING MEMBER PRICING ================= */}
      <section className="bg-[#58b9eb] px-6 py-24 text-[#1a1a1a] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#1a1a1a]"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
              12 — Limited Opportunity
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
            Founding Member Exclusive.
          </h2>
          <p className="max-w-2xl text-lg text-[#1a1a1a]/80 mb-12">
            Join before our grand opening and secure lifetime benefits at a
            one-time investment. Only 100 founding memberships available.
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
            <div className="bg-white/50 backdrop-blur p-8 rounded-2xl">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold">50,000</span>
                <span className="text-lg text-[#1a1a1a]/60">one-time</span>
              </div>

              <h3 className="text-xl font-semibold mb-6">
                Founding Member Benefits Include:
              </h3>

              <ul className="space-y-3">
                {[
                  "Lifetime 20% discount on all services",
                  "Priority booking & express check-in",
                  "Complimentary EV charging (unlimited)",
                  "Free car wash (2 per month)",
                  "Access to exclusive member lounge",
                  "Guest privileges (2 complimentary visits/month)",
                  "Early access to new facilities & events",
                  "Invitation to annual member gala",
                  "Transferable membership (one time)",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 text-[#1a1a1a]"
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
                    <span className="text-[#1a1a1a]/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-[#1a1a1a]/20">
                <p className="text-sm text-[#1a1a1a]/60 mb-2">
                  Regular price after launch:
                </p>
                <p className="text-2xl font-bold line-through text-[#1a1a1a]/40">
                  ৳75,000
                </p>
                <p className="text-sm font-semibold text-[#1a1a1a] mt-1">
                  Save 25,000 (33% off)
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-block bg-[#1a1a1a] text-white px-6 py-3 rounded-lg mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Only 100 spots available
                </span>
              </div>

              <p className="text-lg text-[#1a1a1a]/80 mb-8">
                This exclusive founding member rate is only available during our
                pre-launch phase. Once we reach 100 members or officially open,
                pricing will increase.
              </p>

              <Link
                href="#waitlist"
                className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#1a1a1a]/90 hover:shadow-xl"
              >
                Reserve Your Spot
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <p className="mt-6 text-sm text-[#1a1a1a]/60">
                Questions? Call us at{" "}
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="font-semibold hover:underline"
                >
                  +880 1XXX-XXXXXX
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-8">
            Ready to elevate your journey?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#1a1a1a]/60 mb-12">
            Join our waitlist today and be part of the Express Highway Inn
            story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#waitlist"
              className="bg-[#1a1a1a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#faf9f6] transition-all duration-300 hover:bg-[#58b9eb] hover:text-[#1a1a1a]"
            >
              Join Waitlist Now
            </Link>
            <Link
              href="#pricing"
              className="border border-[#1a1a1a]/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1a1a1a] transition-all duration-300 hover:border-[#58b9eb]"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-[#1a1a1a]/5 px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Express Highway Inn</h3>
              <p className="text-[#1a1a1a]/60 leading-relaxed max-w-md">
                Blending relaxation and luxury with modern comfort, fine dining,
                and unmatched service for travelers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#masterplan"
                    className="text-[#1a1a1a]/60 hover:text-[#58b9eb] transition-colors"
                  >
                    Masterplan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-[#1a1a1a]/60 hover:text-[#58b9eb] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#waitlist"
                    className="text-[#1a1a1a]/60 hover:text-[#58b9eb] transition-colors"
                  >
                    Join Waitlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="#location"
                    className="text-[#1a1a1a]/60 hover:text-[#58b9eb] transition-colors"
                  >
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#1a1a1a]/60">
                <li>National Highway, Bangladesh</li>
                <li>+880 1XXX-XXXXXX</li>
                <li>info@expresshighwayinn.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1a1a1a]/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#1a1a1a]/50">
              © {new Date().getFullYear()} Express Highway Inn. A Sampan Group
              Venture.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-[#1a1a1a]/50 hover:text-[#58b9eb] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#1a1a1a]/50 hover:text-[#58b9eb] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
