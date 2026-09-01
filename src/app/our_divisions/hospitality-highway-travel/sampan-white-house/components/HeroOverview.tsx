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
  FaCrown,
  FaGlassCheers
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/projects/Sampan-White-House-&-Motel.png";

export default function HeroOverview({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-32 pb-20 lg:py-0 border-b border-white/10">
      {/* Real Background Image with cinematic dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Highway Hotel & Motel (White Hall)"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.8]"
        />
        {/* Dual-layer dark gradient for text contrast and seamless transparent navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/75" />
      </div>

      {/* Subtle Warm Amber Gold Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#e8b84b]/15 rounded-none blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-none blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Eyebrow Square Badge */}
            <div className="inline-flex items-center gap-3 border border-[#e8b84b]/50 bg-[#e8b84b]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#e8b84b] mb-6">
              <span className="h-2 w-2 rounded-none bg-[#e8b84b]" />
              <span>A Softer Place to Stop • Highway Motel &amp; White Hall</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Sampan Highway Hotel <br className="hidden sm:inline" />
              <span className="text-[#e8b84b]">
                &amp; Motel (White Hall)
              </span>
            </h1>

            {/* Tagline & Subheading */}
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-normal">
              A serene pause for highway travelers and celebratory gatherings. Soundproof motel suites, 
              the iconic White Hall banquet center, 24/7 garden dining, and dependable highway hospitality close to your route.
            </p>

            {/* Square Quick Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 shadow-lg shadow-[#e8b84b]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Reserve A Room / Hall</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#route-map"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
              >
                <FaRoute className="text-[#e8b84b]" />
                <span>View Route Map</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-[#e8b84b]/40 bg-[#e8b84b]/10 hover:bg-[#e8b84b]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e8b84b] transition-all duration-300 backdrop-blur-sm"
              >
                <FaPhoneAlt className="text-xs text-[#e8b84b]" />
                <span>+880 1929-918408</span>
              </a>
            </div>

            {/* Square Quick Value Badges */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-[#e8b84b] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">White Hall</p>
                <p className="text-[11px] text-white/50 mt-0.5">300+ Capacity</p>
              </div>

              <div className="border-l-2 border-[#e8b84b] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Soundproof Stays</p>
                <p className="text-[11px] text-white/50 mt-0.5">Quiet Motel Suites</p>
              </div>

              <div className="border-l-2 border-[#e8b84b] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Garden Dining</p>
                <p className="text-[11px] text-white/50 mt-0.5">24/7 Highway Kitchen</p>
              </div>

              <div className="border-l-2 border-[#e8b84b] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Secure Parking</p>
                <p className="text-[11px] text-white/50 mt-0.5">150+ Bays &amp; EV</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Card (Glassmorphic Luxury) */}
          <div className="lg:col-span-4">
            <div className="rounded-none border border-white/15 bg-black/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Top Warm Gold Line */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#e8b84b]" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8b84b] bg-[#e8b84b]/15 border border-[#e8b84b]/40 px-3 py-1">
                  Motel &amp; Banquet Pass
                </span>
                <div className="flex items-center gap-1 text-[#e8b84b] text-xs font-bold bg-[#e8b84b]/10 border border-[#e8b84b]/30 px-2.5 py-1">
                  <FaStar className="text-[10px]" />
                  <span>4.8 / 5.0</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Quiet Rest &amp; Celebrations</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Positioned directly on the national arterial highway. Smooth deceleration access with 24/7 security.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-white/80">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Stay Options</span>
                    <span className="font-semibold text-white">Quick Rest, Day Stay &amp; Overnight</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Event Center</span>
                    <span className="font-semibold text-[#e8b84b]">White Hall Grand Banquet</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Dining Kitchen</span>
                    <span className="font-semibold text-white">Traditional Bengali &amp; Grills</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-white/50">Washroom Cleanliness</span>
                    <span className="font-semibold text-[#e8b84b]">100% Hygienic Guarantee</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 cursor-pointer shadow-md shadow-[#e8b84b]/20"
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
