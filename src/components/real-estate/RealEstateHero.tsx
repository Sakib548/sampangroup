"use client";

import Image from "next/image";
import { FaBuilding, FaFileDownload, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface HeroFact {
  value: string;
  label: string;
}

export interface RealEstateHeroProps {
  title: string;
  subtitle: string;
  divisionName?: string;
  statusBadge: string;
  statusType?: "ongoing" | "coming-soon" | "flagship";
  description: string;
  image: string;
  facts: HeroFact[];
  theme?: "dark-slate" | "dark-emerald";
  onBookSiteVisit?: () => void;
  onDownloadBrochure?: () => void;
}

export default function RealEstateHero({
  title,
  subtitle,
  divisionName = "Sampan Development Ltd",
  statusBadge,
  statusType = "ongoing",
  description,
  image,
  facts,
  theme = "dark-slate",
  onBookSiteVisit,
  onDownloadBrochure,
}: RealEstateHeroProps) {

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-36 pb-24 bg-[#090d16] text-white border-b border-white/10">
      
      {/* Background Image with Dark Vignette for Navbar Readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/95 via-[#090d16]/80 to-[#090d16]/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ca8a04]">
              <FaBuilding className="text-xs" />
              <span>{divisionName}</span>
            </div>
            
            <span className={`font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 border backdrop-blur-md ${
              statusType === "ongoing"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : statusType === "coming-soon"
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-blue-500/20 text-blue-300 border-blue-500/40"
            }`}>
              {statusBadge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
            {title} <br className="hidden sm:inline" />
            <span className="font-normal text-[#ca8a04]">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onBookSiteVisit}
              className="group inline-flex items-center justify-center gap-3 bg-[#ca8a04] hover:bg-[#b47a03] text-neutral-950 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 cursor-pointer"
            >
              <FaCalendarCheck className="text-sm" />
              <span>Book VIP Site Visit</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDownloadBrochure}
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-950 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <FaFileDownload className="text-xs" />
              <span>Download Brochure PDF</span>
            </button>

            <a
              href="tel:+8801929918408"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/40 hover:bg-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300"
            >
              <FaPhoneAlt className="text-xs text-[#ca8a04]" />
              <span>Sales Hotline</span>
            </a>
          </div>

          {/* Fact Bar */}
          {facts && facts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {facts.map((fact, idx) => (
                <div key={idx} className="border-l-2 border-[#ca8a04] pl-4 space-y-1">
                  <p className="text-2xl font-mono font-bold text-white tracking-tight">{fact.value}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/60">{fact.label}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
