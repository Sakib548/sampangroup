"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaCar,
  FaUtensils,
  FaBed,
  FaSpa,
  FaSwimmer,
  FaMapMarkerAlt,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaChevronRight,
  FaPrayingHands,
  FaStore
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Asset Placeholders & Real Assets ---
const heroBackground = "/images/projects/express-highway-inn.jpg";
const masterplanImage = "/images/projects/express-highway-inn.png";
const galleryImages = [
  "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
  "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
  "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
  "/images/facilities/express_highway_inn/10.swimming-pool.png",
  "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
  "/images/facilities/express_highway_inn/2.Billiards.png",
];

// --- Facilities Data (Enhanced with Categories & Real Images) ---
const facilities = [
  {
    id: "vvip",
    title: "VVIP Accommodation",
    category: "Suites",
    description:
      "Premium, soundproofed rooms designed for ultimate comfort, privacy, and peaceful rest away from highway noise.",
    image: "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
    badge: "Soundproof Suites",
  },
  {
    id: "restaurant",
    title: "24/7 Highway Restaurant & Lounge",
    category: "Dining",
    description: "Fresh, hygienic multi-cuisine dining options and live culinary stations available at any hour.",
    image: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    badge: "24/7 Gourmet",
  },
  {
    id: "ev",
    title: "Ultra-Fast EV Car Charging",
    category: "Mobility",
    description:
      "High-speed DC charging stations compatible with all major electric vehicles for rapid highway turnaround.",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    badge: "DC Fast Charge",
  },
  {
    id: "carwash",
    title: "Automatic Touchless Car Wash",
    category: "Mobility",
    description: "Quick, efficient high-pressure underbody cleaning while you rest and refresh inside the lounge.",
    image: "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
    badge: "Express Detailing",
  },
  {
    id: "spa",
    title: "Salon & Wellness Spa",
    category: "Wellness",
    description: "Premium wellness, grooming, and rejuvenating massage therapy services for tired travelers.",
    image: "/images/facilities/express_highway_inn/8.Salon-&-SPA.1.png",
    badge: "Relaxation",
  },
  {
    id: "pool-gym",
    title: "Swimming Pool & Fitness Gym",
    category: "Wellness",
    description: "State-of-the-art cardiovascular fitness equipment and a serene temperature-controlled swimming pool.",
    image: "/images/facilities/express_highway_inn/10.swimming-pool.png",
    badge: "Health & Leisure",
  },
  {
    id: "billiards",
    title: "Billiards & Card Room",
    category: "Leisure",
    description: "Exclusive indoor recreational lounge and gaming facilities for members and staying guests.",
    image: "/images/facilities/express_highway_inn/2.Billiards.png",
    badge: "Club Lounge",
  },
  {
    id: "mart",
    title: "Sampan Mart & Express Essentials",
    category: "Essentials",
    description: "24/7 highway retail mart stocked with travel necessities, snacks, beverages, and personal care.",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    badge: "24/7 Convenience",
  },
  {
    id: "prayer",
    title: "Air-Conditioned Prayer Hall",
    category: "Essentials",
    description: "Spotless, tranquil gender-separated prayer spaces with modern ablution (wudu) facilities.",
    image: "/images/facilities/express_highway_inn/11.Prayers-Room.png",
    badge: "Serene & Clean",
  },
];

// --- Phased Opening Timeline (Preserved) ---
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

// --- Membership vs Day Visitor Pricing (Preserved) ---
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
    price: "৳25,000",
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

// --- Nearby Locations (Preserved) ---
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

const facilityCategories = ["All", "Suites", "Dining", "Mobility", "Wellness", "Leisure", "Essentials"];

export default function ExpressHighwayInnPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredFacilities = activeCategory === "All"
    ? facilities
    : facilities.filter((f) => f.category === activeCategory);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased scroll-smooth selection:bg-[#58b9eb]/30 selection:text-neutral-900">

      {/* ================= 1. OVERVIEW (HERO WITH BACKGROUND IMAGE & DARK CONTRAST) ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-32 pb-20 lg:py-0 border-b border-white/10">
        {/* Real Background Image with cinematic dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Express Highway Inn"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.85]"
          />
          {/* Dual-layer dark gradient for text readability and navbar contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/70" />
        </div>

        {/* Ambient Cyan Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-none bg-[#58b9eb]/15 blur-[140px] z-0" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-none bg-[#58b9eb]/10 blur-[120px] z-0" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Headline & Content */}
            <div className="lg:col-span-7 max-w-2xl">

              {/* Eyebrow Square Badge */}
              <div className="mb-6 inline-flex items-center gap-3 border border-[#58b9eb]/50 bg-[#58b9eb]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#58b9eb]">
                <span className="h-2 w-2 rounded-none bg-[#58b9eb]" />
                <span>Express Highway Inn • Luxury Transit Hub</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white">
                Express <br />
                <span className="text-[#58b9eb]">
                  Highway Inn
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75 font-normal">
                Where relaxation meets luxury. A seamless fusion of comfort,
                elegance, and tailored services engineered for the modern highway traveler.
              </p>

              {/* Square Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#waitlist"
                  className="group inline-flex items-center justify-center gap-2 rounded-none bg-[#58b9eb] hover:bg-[#3aa6df] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 shadow-lg shadow-[#58b9eb]/20"
                >
                  <span>Join Waitlist</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#masterplan"
                  className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  View Masterplan
                </Link>

                <Link
                  href="#facilities-gallery"
                  className="inline-flex items-center justify-center rounded-none border border-[#58b9eb]/40 bg-[#58b9eb]/10 hover:bg-[#58b9eb]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#58b9eb] transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Facilities
                </Link>
              </div>

              {/* Quick Metrics (Square Cards) */}
              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-xs">
                <div className="border-l-2 border-[#58b9eb] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">5.2 Acres</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Total Area</p>
                </div>
                <div className="border-l-2 border-[#58b9eb] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-[#58b9eb]">85K sq. ft.</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Built Complex</p>
                </div>
                <div className="border-l-2 border-[#58b9eb] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">200+ Bays</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">EV &amp; Parking</p>
                </div>
              </div>

            </div>

            {/* Right: Founding Membership Spotlight Card (Glassmorphic Luxury) */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-none border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-[#58b9eb]/80">
                {/* Top Cyan Accent Line */}
                <div className="absolute top-0 left-0 h-[3px] w-full bg-[#58b9eb]" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-none bg-[#58b9eb]/20 border border-[#58b9eb]/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#58b9eb]">
                      Founding Member
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-white">
                      Exclusive Early Access
                    </h3>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      Secure lifetime privileges and priority reservations prior to our grand opening.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-none border border-[#58b9eb]/40 bg-[#58b9eb]/15 text-[#58b9eb]">
                    <FaStar className="text-sm" />
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 text-xs text-white/80 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#58b9eb] text-[10px] flex-shrink-0" />
                    <span>20% Lifetime discount across all services</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#58b9eb] text-[10px] flex-shrink-0" />
                    <span>Complimentary ultra-fast EV charging</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#58b9eb] text-[10px] flex-shrink-0" />
                    <span>Exclusive VIP lounge &amp; private meeting access</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Starting at
                    </p>
                    <p className="text-2xl font-extrabold text-white">৳50,000</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Availability
                    </p>
                    <span className="inline-block rounded-none border border-[#58b9eb]/60 bg-[#58b9eb]/20 px-3 py-1 font-mono text-[10px] font-bold text-[#58b9eb]">
                      Only 100 Spots
                    </span>
                  </div>
                </div>

                <Link
                  href="#waitlist"
                  className="mt-6 block text-center w-full py-3.5 rounded-none bg-[#58b9eb] hover:bg-[#3aa6df] text-neutral-950 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md shadow-[#58b9eb]/20"
                >
                  Claim Founding Pass
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. MASTERPLAN OVERVIEW ================= */}
      <section
        id="masterplan"
        className="relative bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              02 / Masterplan Overview
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Vision for excellence.
            <br />
            <span className="text-neutral-400">Built for seamless transit.</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* Masterplan Image Card */}
            <div className="group relative aspect-[16/9] overflow-hidden rounded-none bg-white shadow-md border border-neutral-200">
              <Image
                src={masterplanImage}
                alt="Express Highway Inn Masterplan"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-none border border-neutral-200 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                Official Masterplan Blueprint
              </div>
            </div>

            {/* Masterplan Spec Cards (Square Architecture) */}
            <div className="space-y-4">

              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                  Total Area
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  5.2 Acres
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Comprehensive high-capacity highway hospitality complex with buffer zones
                </p>
              </div>

              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                  Total Built-up Area
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  85,000 sq. ft.
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Multi-level state-of-the-art hospitality and wellness facilities
                </p>
              </div>

              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                  Parking &amp; EV Capacity
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  200+ Vehicles
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Including high-speed DC charging stations, car detailing, and bus bays
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FACILITIES GALLERY SHOWCASE (SQUARE & SLEEK) ================= */}
      <section
        id="facilities-gallery"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-[#58b9eb]"></span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                  03 / World-Class Facilities
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
                Curated amenities. <br />
                <span className="text-[#3298cb]">Gallery showcase.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-500 leading-relaxed">
              Designed from the ground up to offer travelers, families, and EV drivers an unparalleled sanctuary on the road.
            </p>
          </div>

          {/* Square Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
            {facilityCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-[#58b9eb] hover:text-white border border-neutral-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Facilities Gallery Grid (Square Cards) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFacilities.map((facility, i) => (
              <article
                key={facility.id}
                className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-[#58b9eb] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Top Cyan Line Hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full z-10" />

                {/* Gallery Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                  {/* Square Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-[#2680ad]">
                    {facility.badge}
                  </div>

                  {/* Expand icon (Square) */}
                  <button
                    onClick={() => setSelectedImage(facility.image)}
                    aria-label="Expand image"
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-none bg-white text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#58b9eb] hover:text-white cursor-pointer shadow-sm"
                  >
                    <FaExpand className="text-xs" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#3298cb]">
                      0{i + 1}
                    </span>
                    <span className="text-[11px] text-neutral-300">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">{facility.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#3298cb] transition-colors leading-snug">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed flex-1">
                    {facility.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. LOCATION + MAP ================= */}
      <section
        id="location"
        className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              04 / Location &amp; Accessibility
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Strategically positioned.
            <br />
            <span className="text-neutral-400">Direct highway frontage.</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div className="flex flex-col justify-between space-y-8">

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    Direct Highway Access
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Located directly on the primary national arterial route with
                    direct entry and exit lanes for both directions. Zero
                    detours required.
                  </p>
                </div>

                <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#3298cb] mb-4">
                    Distance from Key Hubs
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                    <li className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                      <span>Dhaka City Center</span>
                      <span className="font-bold text-neutral-950">45 km</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                      <span>Gazipur Intersection</span>
                      <span className="font-bold text-neutral-950">25 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Mymensingh Divisional Hub</span>
                      <span className="font-bold text-neutral-950">85 km</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    GPS Coordinates
                  </h4>
                  <p className="inline-block rounded-none bg-white border border-neutral-200 px-3 py-1 font-mono text-xs font-bold text-neutral-800">
                    23.95° N, 90.42° E
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Express+Highway+Inn+Bangladesh"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b-2 border-[#58b9eb] pb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:text-[#3298cb]"
                >
                  <span>Get Live Directions</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-none border border-neutral-200 shadow-md lg:aspect-auto lg:h-full min-h-[380px] bg-white">
              <iframe
                title="Express Highway Inn Location"
                src={mapUrl}
                className="h-full w-full border-0 grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. PHOTO/VIDEO GALLERY ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              05 / Architectural Gallery
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Visual journey.
            <br />
            <span className="text-neutral-400">Moments across the complex.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className={`group relative overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 shadow-sm cursor-pointer ${i === 0
                    ? "aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto min-h-[340px]"
                    : "aspect-[16/10]"
                  }`}
              >
                <Image
                  src={src}
                  alt={`Express Highway Inn gallery view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#58b9eb]">
                    Preview Space 0{i + 1}
                  </span>
                  <span className="rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1 font-bold">
                    Zoom
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-mono text-xs text-neutral-400 uppercase tracking-wider">
            More architectural photos and immersive renders coming soon as development milestones are reached.
          </p>
        </div>
      </section>

      {/* ================= 6. PHASED-OPENING TIMELINE (PRESERVED COMMENTED OUT) ================= */}
      {/* <section className="bg-[#faf9f6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"> 
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

                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#58b9eb] border-4 border-[#faf9f6] md:-translate-x-1/2 z-10" /> 
                <div className="flex-1 hidden md:block" /> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> */}

      {/* ================= 7. MEMBERSHIP VS DAY-VISITOR PRICING (PRESERVED COMMENTED OUT) ================= */}
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
      <section className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              06 / Nearby at This Location
            </span>
          </div>

          <h2 className="mb-4 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Explore the neighborhood.
          </h2>

          <p className="mb-16 max-w-2xl text-sm sm:text-base text-neutral-500">
            Discover other high-value Sampan Group developments and modern
            infrastructure hubs in the immediate vicinity.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {nearbyLocations.map((location, i) => (
              <article
                key={i}
                className="group flex flex-col overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#58b9eb] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
              >
                {/* Top Cyan Hover Line */}
                <div className="h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />

                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 border border-neutral-200 px-3 py-1 font-mono text-[10px] font-bold text-neutral-950 shadow-sm">
                    {location.distance}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                    {location.type}
                  </span>
                  <h3 className="mb-2 mt-1 text-xl font-bold text-neutral-950 transition-colors group-hover:text-[#3298cb]">
                    {location.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. INTERACTIVE MASTERPLAN MAP (PRESERVED COMMENTED OUT) ================= */}
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
          </div>
        </div>
      </section> */}

      {/* ================= 10. PRE-LAUNCH WAITLIST SIGNUP (LIGHT ARCHITECTURAL) ================= */}
      <section
        id="waitlist"
        className="bg-white px-6 py-24 text-neutral-950 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#58b9eb]"></span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                  07 / Pre-Launch Access
                </span>
              </div>

              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 mb-6">
                Join the waitlist.
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 mb-8 font-normal leading-relaxed">
                Be among the first to experience Express Highway Inn. Pre-launch
                members receive exclusive founding member rates, guaranteed priority reservations, and invitations to private previews.
              </p>

              <ul className="space-y-4 mb-8 text-sm">
                {[
                  "Exclusive founding member rates and lifetime privileges",
                  "Priority booking & dedicated express VIP check-in",
                  "Early access discounts of up to 30% on services",
                  "Invitation to exclusive grand opening gala event",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <div className="w-5 h-5 rounded-none bg-[#58b9eb]/20 text-[#3298cb] flex items-center justify-center text-xs flex-shrink-0">
                      <FaCheck className="text-[9px]" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Waitlist Form Card (Square & Crisp) */}
            <div className="bg-[#F5F5F2] p-8 sm:p-10 rounded-none border border-neutral-200 shadow-sm relative">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#58b9eb]" />

              {!formSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-5 text-xs">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#58b9eb] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#58b9eb] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#58b9eb] transition-colors"
                      placeholder="+880 1XXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Interested In
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 focus:outline-none focus:border-[#58b9eb] transition-colors cursor-pointer"
                    >
                      <option value="founding-member">Founding Membership (Lifetime)</option>
                      <option value="annual-member">Annual Membership</option>
                      <option value="day-visitor">Day Visitor &amp; Transit Rest</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-[#58b9eb] text-white px-8 py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    Join Waitlist Now
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-none bg-[#58b9eb]/20 text-[#3298cb] text-3xl flex items-center justify-center mx-auto border border-[#58b9eb]/40">
                    <FaCheck />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">You are on the list!</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for registering. Our executive concierge will reach out with early founding access codes.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-none bg-neutral-950 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#58b9eb]"
                  >
                    Submit Another
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 11. DRONE FOOTAGE (PRESERVED COMMENTED OUT) ================= */}
      {/* <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        ... (Kept commented out as requested) ...
      </section> */}

      {/* ================= 12. FOUNDING MEMBER PRICING ================= */}
      <section className="bg-[#58b9eb] px-6 py-24 text-neutral-950 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-neutral-950"></span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-950">
              08 / Limited Pre-Launch Window
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6 text-neutral-950">
            Founding Member Exclusive.
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-neutral-900/80 mb-12 font-medium">
            Join before our grand opening and secure lifetime benefits at a
            one-time investment. Only 100 founding memberships available.
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">

            <div className="bg-white p-8 sm:p-10 rounded-none shadow-xl border border-neutral-200">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-extrabold text-neutral-950">৳50,000</span>
                <span className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">one-time</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950 mb-4">
                Founding Member Benefits Include:
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                {[
                  "Lifetime 20% discount on all suites and dining",
                  "Priority booking & express check-in lounge",
                  "Complimentary EV charging (unlimited)",
                  "Free automated car wash (2 per month)",
                  "Access to exclusive executive member lounge",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck className="text-[#3298cb] text-xs mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">Regular price after launch:</p>
                  <p className="text-xl font-bold line-through text-neutral-400">৳75,000</p>
                </div>
                <span className="bg-neutral-950 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none">
                  Save ৳25,000 (33% off)
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-block bg-neutral-950 text-white px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-none mb-6">
                Only 100 spots available
              </div>

              <p className="text-base text-neutral-900/90 mb-8 leading-relaxed font-normal">
                This exclusive founding member rate is only available during our
                pre-launch phase. All perks are guaranteed in perpetuity.
              </p>

              <Link
                href="#waitlist"
                className="group inline-flex items-center gap-3 bg-neutral-950 hover:bg-white text-white hover:text-neutral-950 px-8 py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md"
              >
                <span>Reserve Your Spot</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 text-center border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6 text-neutral-950">
            Ready to elevate your journey?
          </h2>
          <p className="max-w-2xl mx-auto text-base text-neutral-600 mb-10">
            Join our waitlist today and be part of the Express Highway Inn story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#waitlist"
              className="bg-neutral-950 hover:bg-[#58b9eb] text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-sm"
            >
              Join Waitlist Now
            </Link>
            <Link
              href="#facilities-gallery"
              className="border border-neutral-300 hover:border-[#58b9eb] hover:text-[#3298cb] bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 rounded-none transition-all duration-300"
            >
              Explore Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Facility & Gallery Zoom (Square) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <Image
              src={selectedImage}
              alt="Express Highway Inn Facility Zoom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">Express Highway Inn</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Blending relaxation and luxury with modern comfort, fine dining,
                and unmatched service for travelers on the national highway.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#masterplan" className="hover:text-[#3298cb] transition-colors">
                    Masterplan
                  </Link>
                </li>
                <li>
                  <Link href="#facilities-gallery" className="hover:text-[#3298cb] transition-colors">
                    Facilities Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#waitlist" className="hover:text-[#3298cb] transition-colors">
                    Join Waitlist
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-[#3298cb] transition-colors">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">Contact</h4>
              <ul className="space-y-2.5 text-xs text-neutral-500">
                <li>National Highway, Bangladesh</li>
                <li>+880 1929-918408</li>
                <li>info@expresshighwayinn.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Express Highway Inn. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#3298cb] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#3298cb] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
