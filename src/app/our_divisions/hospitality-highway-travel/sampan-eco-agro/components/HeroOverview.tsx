"use client";

import Image from "next/image";
import { 
  FaLeaf, 
  FaRoute, 
  FaPhoneAlt, 
  FaStar
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/concerns/eco-agro.png";

export default function HeroOverview({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="overview" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0c1c14] text-white pt-32 pb-20 lg:py-0 border-b border-white/10">
      {/* Background Image with Dark Nature Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Eco & Agro Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130d]/95 via-[#07130d]/80 to-[#07130d]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c14] via-transparent to-[#07130d]/80" />
      </div>

      {/* Subtle Emerald & Leaf Green Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#2f6b45]/20 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-[#b9e583]/15 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 border border-[#b9e583]/50 bg-[#b9e583]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#b9e583] mb-6">
              <FaLeaf className="text-xs text-[#b9e583]" />
              <span>Sustainable Farming • Agro-Resort &amp; Farm Dining</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
              Sampan Eco &amp; <br className="hidden sm:inline" />
              <span className="font-semibold text-[#b9e583]">
                Agro Resort
              </span>
            </h1>

            {/* Tagline & Subheading */}
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
              A lush, 50+ acre organic farm sanctuary along the highway corridor. Discover organic harvests, 
              lakeview eco-cottages, authentic farm-to-table dining, and revitalizing countryside experiences.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#b9e583] hover:bg-[#a6db6c] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] shadow-lg shadow-[#b9e583]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Book Resort &amp; Tour</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#route-map"
                className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-[#0c1c14] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
              >
                <FaRoute className="text-[#b9e583]" />
                <span>Highway Route</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 hover:bg-[#b9e583]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#b9e583] transition-all duration-300 backdrop-blur-sm"
              >
                <FaPhoneAlt className="text-xs text-[#b9e583]" />
                <span>+880 1929-918408</span>
              </a>
            </div>

            {/* Quick Value Badges */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">50+ Organic Acres</p>
                <p className="text-[11px] text-white/60 mt-0.5">Chemical-Free Cultivation</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Eco-Cottages</p>
                <p className="text-[11px] text-white/60 mt-0.5">Lakefront Bamboo &amp; Wood</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Farm to Table</p>
                <p className="text-[11px] text-white/60 mt-0.5">100% Fresh Daily Harvest</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Expressway Stop</p>
                <p className="text-[11px] text-white/60 mt-0.5">35 Mins from Dhaka City</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Card */}
          <div className="lg:col-span-4">
            <div className="border border-white/15 bg-[#0c1c14]/80 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#b9e583]" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#b9e583] bg-[#b9e583]/15 border border-[#b9e583]/40 px-3 py-1">
                  Resort Spotlight
                </span>
                <div className="flex items-center gap-1 text-[#b9e583] text-xs font-bold bg-[#b9e583]/10 border border-[#b9e583]/30 px-2.5 py-1">
                  <FaStar className="text-[10px]" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Organic Living &amp; Country Retreat</h3>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Experience picking seasonal fruit directly from trees, fishing in natural ponds, and relaxing in luxury lakeview cottages.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-white/80">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Experience Types</span>
                    <span className="font-semibold text-white">Day Long &amp; Overnight Stay</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Meet the Harvest</span>
                    <span className="font-semibold text-[#b9e583]">Organic Pick-Your-Own</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-white/50">Dining Kitchen</span>
                    <span className="font-semibold text-white">Fresh Lake Fish &amp; Agri-Buffet</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-white/50">Travel Distance</span>
                    <span className="font-semibold text-[#b9e583]">35km Dhaka Expressway Exit</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#b9e583] hover:bg-[#a6db6c] py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] transition-all duration-300 cursor-pointer shadow-md shadow-[#b9e583]/20"
                  >
                    Calculate Package Price
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
