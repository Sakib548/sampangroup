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
  accentColor?: string; // e.g. "#dc2626" (Red), "#0088cc" (Blue), "#ca8a04" (Gold), "#4c2a85" (Purple), "#25633a" (Green)
  badgeColor?: string;  // e.g. "#00a651"
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
  accentColor = "#ca8a04",
  badgeColor = "#00a651",
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
          className="object-cover object-center brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/95 via-[#090d16]/80 to-[#090d16]/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Status Badges with Custom Logo Colors */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 border px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{
                color: badgeColor,
                borderColor: `${badgeColor}50`,
                backgroundColor: `${badgeColor}18`,
              }}
            >
              <FaBuilding className="text-xs" />
              <span>{divisionName}</span>
            </div>
            
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 border backdrop-blur-md"
              style={{
                color: statusType === "flagship" ? "#38bdf8" : statusType === "coming-soon" ? "#f59e0b" : badgeColor,
                borderColor: `${statusType === "flagship" ? "#38bdf8" : statusType === "coming-soon" ? "#f59e0b" : badgeColor}40`,
                backgroundColor: `${statusType === "flagship" ? "#38bdf8" : statusType === "coming-soon" ? "#f59e0b" : badgeColor}15`,
              }}
            >
              {statusBadge}
            </span>
          </div>

          {/* Main Headline with Custom Accent Color */}
          <h1 className="text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
            {title} <br className="hidden sm:inline" />
            <span className="font-normal" style={{ color: accentColor }}>
              {subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>

          {/* CTAs with Dynamic Logo Accent Colors */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onBookSiteVisit}
              className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              <FaCalendarCheck className="text-sm" />
              <span>Book VIP Site Visit</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDownloadBrochure}
              className="inline-flex items-center justify-center gap-2 border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-neutral-950"
              style={{
                color: accentColor,
                borderColor: `${accentColor}50`,
                backgroundColor: `${accentColor}15`,
              }}
            >
              <FaFileDownload className="text-xs" />
              <span>Download Brochure PDF</span>
            </button>

            <a
              href="tel:+8801929918408"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/40 hover:bg-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300"
            >
              <FaPhoneAlt className="text-xs" style={{ color: accentColor }} />
              <span>Sales Hotline</span>
            </a>
          </div>

          {/* Fact Bar */}
          {facts && facts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="border-l-2 pl-4 space-y-1"
                  style={{ borderColor: idx % 2 === 0 ? accentColor : badgeColor }}
                >
                  <p
                    className="text-2xl font-mono font-bold tracking-tight"
                    style={{ color: idx % 2 === 0 ? accentColor : badgeColor }}
                  >
                    {fact.value}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/70">{fact.label}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
