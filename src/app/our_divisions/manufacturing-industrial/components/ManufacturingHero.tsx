"use client";

import Image from "next/image";
import { FaIndustry, FaFileDownload, FaPhoneAlt, FaCogs } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface HeroFact {
  value: string;
  label: string;
}

export interface ManufacturingHeroProps {
  title: string;
  subtitle: string;
  divisionName?: string;
  statusBadge: string;
  statusType?: "active" | "coming-soon" | "flagship";
  description: string;
  image: string;
  facts: HeroFact[];
  accentColor?: string; // e.g. "#047857", "#991b1b", "#ea580c"
  badgeColor?: string;
  onQuoteRequest?: () => void;
  onDownloadCatalog?: () => void;
}

export default function ManufacturingHero({
  title,
  subtitle,
  divisionName = "Manufacturing & Industrial Division",
  statusBadge,
  statusType = "active",
  description,
  image,
  facts,
  accentColor = "#047857",
  badgeColor = "#008f68",
  onQuoteRequest,
  onDownloadCatalog,
}: ManufacturingHeroProps) {

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#090d16] text-white border-b border-white/10">
      
      {/* Background Image with Dark Vignette for Navbar Readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/95 via-[#090d16]/85 to-[#090d16]/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
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
              <FaIndustry className="text-xs" />
              <span>{divisionName}</span>
            </div>
            
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 border backdrop-blur-md flex items-center gap-1.5"
              style={{
                color: statusType === "coming-soon" ? "#f59e0b" : accentColor,
                borderColor: `${statusType === "coming-soon" ? "#f59e0b" : accentColor}40`,
                backgroundColor: `${statusType === "coming-soon" ? "#f59e0b" : accentColor}15`,
              }}
            >
              <FaCogs className="text-[10px]" />
              <span>{statusBadge}</span>
            </span>
          </div>

          {/* Main Headline */}
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

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onQuoteRequest}
              className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              <FaCogs className="text-sm" />
              <span>Request B2B Quote / Samples</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDownloadCatalog}
              className="inline-flex items-center justify-center gap-2 border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-neutral-950"
              style={{
                color: accentColor,
                borderColor: `${accentColor}50`,
                backgroundColor: `${accentColor}15`,
              }}
            >
              <FaFileDownload className="text-xs" />
              <span>Download Product Catalog</span>
            </button>

            <a
              href="tel:+8801929918408"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/40 hover:bg-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300"
            >
              <FaPhoneAlt className="text-xs" style={{ color: accentColor }} />
              <span>Industrial Sales Desk</span>
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
