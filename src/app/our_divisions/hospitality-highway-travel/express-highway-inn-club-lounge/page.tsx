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
  FaStore,
  FaCrown,
  FaDumbbell,
  FaMoneyCheckAlt
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Real Club & Lounge Assets ---
const heroBackground = "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png";
const masterplanImage = "/images/projects/express-highway-inn.png";
const clubLogo = "/images/brand/ecl.png";

const galleryImages = [
  "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
  "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
  "/images/facilities/express_highway_inn/2.Billiards.png",
  "/images/facilities/express_highway_inn/3.Card-Room.png",
  "/images/facilities/express_highway_inn/10.swimming-pool.png",
  "/images/facilities/express_highway_inn/9.GYM.png",
  "/images/facilities/express_highway_inn/8.Salon-&-SPA.1.png",
  "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
  "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
];

// --- Club Facilities Data (12 Dedicated Club & Lounge Amenities) ---
const clubFacilities = [
  {
    id: "club-lounge",
    title: "Highway Club & Executive Lounge",
    category: "Lounge & Leisure",
    description:
      "Exclusive members-only social lounge featuring bespoke leather seating, high-speed fiber internet, gourmet barista bar, and panoramic highway views.",
    image: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    badge: "Members Sanctuary",
  },
  {
    id: "vvip-lounge",
    title: "VVIP Soundproof Private Lounge",
    category: "Lounge & Leisure",
    description:
      "Ultra-private acoustic-dampened suites for executive meetings, confidential discussions, and tranquil relaxation away from travel fatigue.",
    image: "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
    badge: "Confidential & Quiet",
  },
  {
    id: "billiards",
    title: "Billiards & Snooker Room",
    category: "Sports & Fitness",
    description:
      "Championship-grade slate pool tables, vintage scoreboards, cue lockers, and beverage service in a classic gentleman's club ambience.",
    image: "/images/facilities/express_highway_inn/2.Billiards.png",
    badge: "Recreational Suite",
  },
  {
    id: "card-room",
    title: "Executive Card & Chess Room",
    category: "Lounge & Leisure",
    description:
      "Dedicated air-conditioned leisure space tailored for members' bridge, chess tournaments, board gaming, and casual fellowship.",
    image: "/images/facilities/express_highway_inn/3.Card-Room.png",
    badge: "Private Games",
  },
  {
    id: "swimming-pool",
    title: "Temperature-Controlled Swimming Pool",
    category: "Sports & Fitness",
    description:
      "Pristine semi-indoor heated pool featuring lap swim lanes, poolside sun loungers, and private changing cabanas for members and families.",
    image: "/images/facilities/express_highway_inn/10.swimming-pool.png",
    badge: "Heated Leisure Pool",
  },
  {
    id: "gym",
    title: "High-Performance Fitness Gym",
    category: "Sports & Fitness",
    description:
      "State-of-the-art cardiovascular and strength training equipment by world-leading fitness brands, with certified on-site personal trainers.",
    image: "/images/facilities/express_highway_inn/9.GYM.png",
    badge: "24/7 Member Gym",
  },
  {
    id: "spa-salon",
    title: "Luxury Grooming Salon & Spa",
    category: "Wellness",
    description:
      "Rejuvenating head massage, therapeutic reflexology, hydrotherapy, and professional executive grooming before important business arrivals.",
    image: "/images/facilities/express_highway_inn/8.Salon-&-SPA.1.png",
    badge: "Therapeutic Wellness",
  },
  {
    id: "ev-charging",
    title: "Priority 120kW EV Supercharging",
    category: "Mobility & Services",
    description:
      "Reserved DC high-speed charging bays for members. Enjoy club lounge hospitality while your electric vehicle charges in under 25 minutes.",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    badge: "Fast Turnaround",
  },
  {
    id: "car-wash",
    title: "Touchless Automatic Car Detailing",
    category: "Mobility & Services",
    description:
      "Complimentary high-pressure underbody rinse, automated foam wash, and interior vacuuming performed while you dine or relax inside.",
    image: "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
    badge: "Express Detailing",
  },
  {
    id: "mart",
    title: "Sampan Gourmet Mart & Essentials",
    category: "Mobility & Services",
    description:
      "Curated travel pantry featuring organic farm-fresh snacks, artisanal confections, imported beverages, and highway necessities.",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    badge: "24/7 Convenience",
  },
  {
    id: "banking",
    title: "CRM & 24/7 Banking Booth",
    category: "Mobility & Services",
    description:
      "Secure cash deposit and withdrawal machines, multi-bank ATM facilities, and instant digital transaction terminals.",
    image: "/images/facilities/express_highway_inn/12.CRM-Banking-Booth.png",
    badge: "Financial Hub",
  },
  {
    id: "prayer-hall",
    title: "Air-Conditioned Serene Prayer Hall",
    category: "Wellness",
    description:
      "Spotless, temperature-controlled gender-separated prayer spaces with modern marble ablution (wudu) stations.",
    image: "/images/facilities/express_highway_inn/11.Prayers-Room.png",
    badge: "Peaceful Reflection",
  },
];

// --- Club Categories for Filtering ---
const facilityCategories = ["All", "Lounge & Leisure", "Sports & Fitness", "Wellness", "Mobility & Services"];

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

export default function ExpressHighwayInnClubLoungePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredFacilities =
    activeCategory === "All"
      ? clubFacilities
      : clubFacilities.filter((f) => f.category === activeCategory);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased scroll-smooth selection:bg-[#2563eb]/30 selection:text-neutral-900">
      
      {/* ================= 1. OVERVIEW (HERO WITH REAL BACKGROUND & DARK CONTRAST) ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-32 pb-20 lg:py-0 border-b border-white/10">
        {/* Real Background Image with cinematic dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Express Highway Inn Club & Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.8]"
          />
          {/* Dual-layer dark gradient for high text contrast and seamless transparent navbar */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/75" />
        </div>

        {/* Ambient Royal Sapphire Blue Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-none bg-[#2563eb]/20 blur-[140px] z-0" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-none bg-[#3b82f6]/15 blur-[120px] z-0" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Content */}
            <div className="lg:col-span-7 max-w-2xl">
              
              {/* Eyebrow Square Badge (Royal Sapphire) */}
              <div className="mb-6 inline-flex items-center gap-3 border border-[#3b82f6]/50 bg-[#2563eb]/20 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#60a5fa]">
                <span className="h-2 w-2 rounded-none bg-[#3b82f6]" />
                <span>Private Members&apos; Club &amp; Lounge • Membership Share</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white">
                Express Highway Inn <br />
                <span className="text-[#3b82f6]">
                  Club &amp; Lounge
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75 font-normal">
                An elite private sanctuary engineered for highway travelers, executives, and families. 
                Experience bespoke lounges, recreation suites, wellness facilities, and exclusive membership share privileges.
              </p>

              {/* Square Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#waitlist"
                  className="group inline-flex items-center justify-center gap-2 rounded-none bg-[#2563eb] hover:bg-[#1d4ed8] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-[#2563eb]/25"
                >
                  <span>Join Members Waitlist</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="#club-overview"
                  className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  View Club Privileges
                </Link>

                <Link
                  href="#facilities-gallery"
                  className="inline-flex items-center justify-center rounded-none border border-[#3b82f6]/40 bg-[#2563eb]/10 hover:bg-[#2563eb]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#60a5fa] transition-all duration-300 backdrop-blur-sm"
                >
                  Explore 12+ Facilities
                </Link>
              </div>

              {/* Quick Metrics (Square Cards) */}
              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-xs">
                <div className="border-l-2 border-[#3b82f6] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">Private</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Access Tier</p>
                </div>
                <div className="border-l-2 border-[#3b82f6] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-[#60a5fa]">12+ Suites</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Club Amenities</p>
                </div>
                <div className="border-l-2 border-[#3b82f6] pl-4">
                  <p className="text-xl sm:text-2xl font-bold text-white">Lifetime</p>
                  <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Share Dividend</p>
                </div>
              </div>

            </div>

            {/* Right: Founding Club Shareholder Spotlight Card (Glassmorphic Luxury) */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-none border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-[#3b82f6]/80">
                {/* Top Royal Blue Accent Line */}
                <div className="absolute top-0 left-0 h-[3px] w-full bg-[#2563eb]" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-none bg-[#2563eb]/20 border border-[#3b82f6]/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
                      Founding Club Share
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-white">
                      Lifetime Membership Pass
                    </h3>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      Become a founding shareholder member with guaranteed capital appreciation, priority access, and VIP family privileges.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-none border border-[#3b82f6]/40 bg-[#2563eb]/15 text-[#60a5fa]">
                    <FaCrown className="text-sm" />
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 text-xs text-white/80 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#3b82f6] text-[10px] flex-shrink-0" />
                    <span>Unlimited access to Executive Club &amp; VVIP Lounge</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#3b82f6] text-[10px] flex-shrink-0" />
                    <span>Complimentary Heated Pool, GYM &amp; Billiards Room</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaCheck className="text-[#3b82f6] text-[10px] flex-shrink-0" />
                    <span>Free monthly automated car wash &amp; EV Supercharging</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Founding Share
                    </p>
                    <p className="text-2xl font-extrabold text-white">৳75,000</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Share Pool
                    </p>
                    <span className="inline-block rounded-none border border-[#3b82f6]/60 bg-[#2563eb]/20 px-3 py-1 font-mono text-[10px] font-bold text-[#60a5fa]">
                      Limited 50 Shares
                    </span>
                  </div>
                </div>

                <Link
                  href="#waitlist"
                  className="mt-6 block text-center w-full py-3.5 rounded-none bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md shadow-[#2563eb]/25"
                >
                  Apply For Club Share
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. CLUB PRIVILEGES OVERVIEW ================= */}
      <section
        id="club-overview"
        className="relative bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">
          
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#2563eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              02 / Club &amp; Lounge Masterplan
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            A sanctuary for discerning minds.
            <br />
            <span className="text-neutral-400">Exclusivity on the corridor.</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            
            {/* Masterplan Image Card */}
            <div className="group relative aspect-[16/9] overflow-hidden rounded-none bg-white shadow-md border border-neutral-200">
              <Image
                src={heroBackground}
                alt="Express Highway Inn Club & Lounge Masterplan"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-700 group-hover:w-full" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-none border border-neutral-200 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                Official Club Wing Architecture
              </div>
            </div>

            {/* Club Spec Cards (Square Architecture) */}
            <div className="space-y-4">
              
              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                  Dedicated Club Wing
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  35,000 sq. ft.
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Two-tier architectural complex reserved exclusively for members and invited guests
                </p>
              </div>

              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                  Membership Benefits
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  100% Reciprocal
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Cross-privileges across all upcoming Sampan Group hospitality properties and golf resorts
                </p>
              </div>

              <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2563eb] hover:-translate-y-1">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-500 group-hover:w-full" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                  VIP Parking &amp; Detailing
                </h3>
                <p className="mt-1 text-3xl font-bold text-neutral-950">
                  Dedicated Bays
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Valet parking, private EV supercharging lanes, and complimentary touchless car detailing
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FACILITIES GALLERY SHOWCASE (12 REAL ASSETS) ================= */}
      <section
        id="facilities-gallery"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-[#2563eb]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                  03 / Club Facilities &amp; Amenities
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
                Curated club spaces. <br />
                <span className="text-[#2563eb]">Gallery showcase.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-500 leading-relaxed">
              Every detail is engineered to offer members a refined respite with world-class dining, wellness, sports, and business lounges.
            </p>
          </div>

          {/* Square Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
            {facilityCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-[#2563eb] hover:text-white border border-neutral-200"
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
                className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-[#2563eb] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Top Royal Blue Line Hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-700 group-hover:w-full z-10" />

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
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                    {facility.badge}
                  </div>

                  {/* Expand icon (Square) */}
                  <button
                    onClick={() => setSelectedImage(facility.image)}
                    aria-label="Expand image"
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-none bg-white text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#2563eb] hover:text-white cursor-pointer shadow-sm"
                  >
                    <FaExpand className="text-xs" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#2563eb]">
                      0{i + 1}
                    </span>
                    <span className="text-[11px] text-neutral-300">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">{facility.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#2563eb] transition-colors leading-snug">
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

      {/* ================= 4. LOCATION + LIVE ACCESSIBILITY ================= */}
      <section
        id="location"
        className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">
          
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#2563eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              04 / Strategic Highway Location
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Centrally placed.
            <br />
            <span className="text-neutral-400">Direct highway frontage.</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            
            <div className="flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    Direct Highway Entry Ramps
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Located directly on the primary national arterial corridor with
                    smooth entry and exit deceleration lanes. Zero detour required.
                  </p>
                </div>

                <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2563eb] mb-4">
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
                  className="group inline-flex items-center gap-2 border-b-2 border-[#2563eb] pb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:text-[#2563eb]"
                >
                  <span>Get Live Directions</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-none border border-neutral-200 shadow-md lg:aspect-auto lg:h-full min-h-[380px] bg-white">
              <iframe
                title="Express Highway Inn Club & Lounge Location"
                src={mapUrl}
                className="h-full w-full border-0 grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. PHOTO GALLERY ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#2563eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              05 / Architectural Gallery
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Visual elegance.
            <br />
            <span className="text-neutral-400">Moments across the private club.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className={`group relative overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 shadow-sm cursor-pointer ${
                  i === 0
                    ? "aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto min-h-[340px]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Express Highway Inn Club & Lounge gallery view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#2563eb] transition-all duration-700 group-hover:w-full z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#60a5fa]">
                    Preview Club Wing 0{i + 1}
                  </span>
                  <span className="rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1 font-bold">
                    Zoom
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-mono text-xs text-neutral-400 uppercase tracking-wider">
            High-definition 3D virtual walkthroughs and member lounge previews releasing as construction progresses.
          </p>
        </div>
      </section>

      {/* ================= 6. MEMBERSHIP WAITLIST APPLICATION ================= */}
      <section
        id="waitlist"
        className="bg-white px-6 py-24 text-neutral-950 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#2563eb]"></span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                  06 / Membership Application
                </span>
              </div>

              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 mb-6">
                Join the Private Club.
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 mb-8 font-normal leading-relaxed">
                Experience unparalleled exclusivity, networking with fellow leaders, and lifetime amenities. Pre-launch founding members receive preferred share valuations and lifetime dividend rights.
              </p>

              <ul className="space-y-4 mb-8 text-sm">
                {[
                  "Exclusive founding shareholder valuation and dividend rights",
                  "Priority access to private meeting suites and dining rooms",
                  "Complimentary EV fast charging, pool, gym, and car wash",
                  "Invitation to exclusive private launch gala and networking summits",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700">
                    <div className="w-5 h-5 rounded-none bg-[#2563eb]/20 text-[#2563eb] flex items-center justify-center text-xs flex-shrink-0">
                      <FaCheck className="text-[9px]" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Waitlist Form Card (Square & Crisp) */}
            <div className="bg-[#F5F5F2] p-8 sm:p-10 rounded-none border border-neutral-200 shadow-sm relative">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#2563eb]" />

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
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#2563eb] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#2563eb] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#2563eb] transition-colors"
                      placeholder="+880 1XXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="membership-type" className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 mb-2">
                      Membership Share Category
                    </label>
                    <select
                      id="membership-type"
                      className="w-full px-4 py-3.5 rounded-none bg-white border border-neutral-300 text-neutral-950 focus:outline-none focus:border-[#2563eb] transition-colors cursor-pointer"
                    >
                      <option value="founding-shareholder">Founding Club Shareholder (৳75,000)</option>
                      <option value="executive-annual">Executive Annual Member (৳35,000/yr)</option>
                      <option value="corporate-fleet">Corporate Fleet Partner Pass</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-[#2563eb] text-white px-8 py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    Submit Membership Application
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-none bg-[#2563eb]/20 text-[#2563eb] text-3xl flex items-center justify-center mx-auto border border-[#2563eb]/40">
                    <FaCheck />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">Application Received!</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for applying. Our membership secretary will review your details and contact you with share prospectus materials.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-none bg-neutral-950 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#2563eb]"
                  >
                    Submit Another
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 7. FOUNDING SHARE PRICING (ROYAL SAPPHIRE BANNER) ================= */}
      <section className="bg-[#2563eb] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-white"></span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-white">
              07 / Founding Share Exclusive
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6 text-white">
            Founding Member Share Offering.
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-white/80 mb-12 font-medium">
            Lock in founding share status before our grand opening. Enjoy capital appreciation, lifetime club privileges, and transferable shares.
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
            
            <div className="bg-white p-8 sm:p-10 rounded-none shadow-xl border border-neutral-200 text-neutral-950">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-extrabold text-neutral-950">৳75,000</span>
                <span className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">one-time share</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950 mb-4">
                Founding Shareholder Rights Include:
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                {[
                  "Lifetime 25% discount on all suites, banquets, and dining",
                  "Priority access to private VVIP suites and meeting rooms",
                  "Complimentary EV Supercharging (unlimited)",
                  "Free automated touchless car wash (4 per month)",
                  "Transferable club share with capital appreciation upside",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck className="text-[#2563eb] text-xs mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">Post-launch market value:</p>
                  <p className="text-xl font-bold line-through text-neutral-400">৳100,000</p>
                </div>
                <span className="bg-neutral-950 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none">
                  Save ৳25,000 (25% off)
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-block bg-neutral-950 text-white px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-none mb-6">
                Only 50 Founding Shares
              </div>

              <p className="text-base text-white/90 mb-8 leading-relaxed font-normal">
                This exclusive founding tier is reserved for early patrons during our
                development phase. All privileges and voting rights are protected in perpetuity.
              </p>

              <Link
                href="#waitlist"
                className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white px-8 py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md"
              >
                <span>Apply For Founding Share</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8. NEARBY AT THIS LOCATION ================= */}
      <section className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#2563eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              08 / Nearby at This Location
            </span>
          </div>

          <h2 className="mb-4 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Explore the neighborhood.
          </h2>

          <p className="mb-16 max-w-2xl text-sm sm:text-base text-neutral-500">
            Discover neighboring Sampan Group commercial centers and developments across the regional corridor.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {nearbyLocations.map((location, i) => (
              <article
                key={i}
                className="group flex flex-col overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#2563eb] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
              >
                {/* Top Royal Blue Hover Line */}
                <div className="h-[3px] w-0 bg-[#2563eb] transition-all duration-500 group-hover:w-full" />

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
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                    {location.type}
                  </span>
                  <h3 className="mb-2 mt-1 text-xl font-bold text-neutral-950 transition-colors group-hover:text-[#2563eb]">
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

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 text-center border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6 text-neutral-950">
            Elevate your highway journey.
          </h2>
          <p className="max-w-2xl mx-auto text-base text-neutral-600 mb-10">
            Secure your membership share today and become a founding patron of the Express Highway Inn Club &amp; Lounge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#waitlist"
              className="bg-neutral-950 hover:bg-[#2563eb] text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-sm"
            >
              Apply For Membership
            </Link>
            <Link
              href="#facilities-gallery"
              className="border border-neutral-300 hover:border-[#2563eb] hover:text-[#2563eb] bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 rounded-none transition-all duration-300"
            >
              Explore 12+ Facilities
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
              alt="Club & Lounge Facility Zoom"
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
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Express Highway Inn Club &amp; Lounge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                An exclusive private sanctuary engineered for highway travelers, executives, and families.
                A prestigious concern of Sampan Group.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#club-overview" className="hover:text-[#2563eb] transition-colors">
                    Club Masterplan
                  </Link>
                </li>
                <li>
                  <Link href="#facilities-gallery" className="hover:text-[#2563eb] transition-colors">
                    Facilities Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#waitlist" className="hover:text-[#2563eb] transition-colors">
                    Join Waitlist
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-[#2563eb] transition-colors">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">Concierge Desk</h4>
              <ul className="space-y-2.5 text-xs text-neutral-500">
                <li>National Highway Corridor, Bangladesh</li>
                <li>+880 1929-918408</li>
                <li>club@expresshighwayinn.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Express Highway Inn Club &amp; Lounge. A Sampan Group Concern.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#2563eb] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#2563eb] transition-colors">
                Club Rules &amp; Bylaws
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
