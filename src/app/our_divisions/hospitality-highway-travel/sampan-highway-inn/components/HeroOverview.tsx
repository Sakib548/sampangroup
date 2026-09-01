"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FaRoute, 
  FaBolt, 
  FaBed, 
  FaPhoneAlt, 
  FaStar,
  FaShieldAlt,
  FaClock
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/projects/sampan-highway-inn.png";

export default function HeroOverview({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-32 pb-20 lg:py-0 border-b border-white/10">
      {/* Real Background Image with cinematic dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Highway Inn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.8]"
        />
        {/* Dual-layer dark gradient for text readability and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/75" />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-none blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-none blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Highway Corridor Square Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 border border-emerald-500/50 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 mb-6">
              <span className="h-2 w-2 rounded-none bg-emerald-400" />
              <span>Dhaka – Khulna National Highway • KM 74 Transit Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Sampan <br className="hidden sm:inline" />
              <span className="text-emerald-400">
                Highway Inn
              </span>
            </h1>

            {/* Tagline & Subheading */}
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-normal">
              Where your journey pauses in refined comfort. Luxurious soundproof suites, 
              24/7 gourmet farm-to-table dining, ultra-fast EV supercharging, and dedicated celebration spaces—directly on Bangladesh&apos;s primary southern corridor.
            </p>

            {/* Square Quick Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 cursor-pointer"
              >
                <span>Reserve A Room / Table</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#route-map"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
              >
                <FaRoute className="text-emerald-400" />
                <span>View Route Map</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300 transition-all duration-300 backdrop-blur-sm"
              >
                <FaPhoneAlt className="text-xs text-amber-400" />
                <span>+880 1929-918408</span>
              </a>
            </div>

            {/* Square Quick Value Badges */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">24/7 Service</p>
                <p className="text-[11px] text-white/50 mt-0.5">Always Open</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">EV Charging</p>
                <p className="text-[11px] text-white/50 mt-0.5">Ultra-Fast DC</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">VVIP Rooms</p>
                <p className="text-[11px] text-white/50 mt-0.5">100% Soundproof</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Secure Parking</p>
                <p className="text-[11px] text-white/50 mt-0.5">200+ Vehicles</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Card (Glassmorphic Luxury) */}
          <div className="lg:col-span-4">
            <div className="rounded-none border border-white/15 bg-black/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Top Emerald Line */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-emerald-500" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1">
                  Highway Stopover Pass
                </span>
                <div className="flex items-center gap-1 text-amber-300 text-xs font-bold bg-amber-500/15 border border-amber-500/40 px-2.5 py-1">
                  <FaStar className="text-[10px]" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Transit Rest &amp; Gourmet Dining</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Zero detour off the Dhaka–Khulna Expressway. Direct slipway entrance with full security.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-white/80">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Rest Duration</span>
                    <span className="font-semibold text-white">Hourly, Day-Pass &amp; Overnight</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Restaurant Menu</span>
                    <span className="font-semibold text-emerald-400">Deshi, Continental &amp; Grill</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">EV Station Power</span>
                    <span className="font-semibold text-white">120kW Supercharger</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-white/50">Washrooms &amp; Prayer</span>
                    <span className="font-semibold text-emerald-400">Pristine &amp; Dedicated</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full rounded-none bg-emerald-600 hover:bg-emerald-500 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 cursor-pointer shadow-md shadow-emerald-950/50"
                  >
                    Check Availability Online
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
