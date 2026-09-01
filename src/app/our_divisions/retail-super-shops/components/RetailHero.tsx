"use client";

import Image from "next/image";
import { FaShoppingBag, FaStore, FaClock, FaPhoneAlt, FaPercentage, FaCheckCircle, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface HeroFact {
  value: string;
  label: string;
}

export interface RetailHeroProps {
  title: string;
  subtitle: string;
  concernName: string;
  logo: string;
  statusBadge: string;
  statusType?: "operating" | "coming-soon" | "flagship";
  description: string;
  bannerImage: string;
  facts: HeroFact[];
  accentColor?: string;
  badgeColor?: string;
  openingHours?: string;
  onExploreCatalog?: () => void;
  onOrderOnline?: () => void;
}

export default function RetailHero({
  title,
  subtitle,
  concernName,
  logo,
  statusBadge,
  statusType = "operating",
  description,
  bannerImage,
  facts,
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
  openingHours = "07:00 AM - 11:00 PM Daily",
  onExploreCatalog,
  onOrderOnline,
}: RetailHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#090d16] text-white border-b border-white/10">
      
      {/* Background Hero Banner with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/95 via-[#090d16]/80 to-[#090d16]/40" />
      </div>

      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.12),transparent_30%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.1),transparent_25%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badge & Logo Strip */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative h-10 w-28 bg-white/95 border border-white/20 px-3 py-1.5 flex items-center justify-center shadow-md">
                <Image
                  src={logo}
                  alt={concernName}
                  width={100}
                  height={32}
                  className="object-contain max-h-8"
                />
              </div>

              <div
                className="inline-flex items-center gap-2 border px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: badgeColor,
                  borderColor: `${badgeColor}50`,
                  backgroundColor: `${badgeColor}18`,
                }}
              >
                <FaStore className="text-xs" />
                <span>{concernName}</span>
              </div>

              <span
                className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 border backdrop-blur-md"
                style={{
                  color: statusType === "coming-soon" ? "#f59e0b" : "#10b981",
                  borderColor: `${statusType === "coming-soon" ? "#f59e0b" : "#10b981"}40`,
                  backgroundColor: `${statusType === "coming-soon" ? "#f59e0b" : "#10b981"}15`,
                }}
              >
                {statusBadge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white">
              {title} <br className="hidden sm:inline" />
              <span className="font-normal" style={{ color: accentColor }}>
                {subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* Opening Hours Strip */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 px-4 py-2 font-mono text-xs text-white/90">
              <FaClock style={{ color: accentColor }} />
              <span>Store Hours: <strong className="text-white">{openingHours}</strong></span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOrderOnline}
                className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 cursor-pointer hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                <FaShoppingBag className="text-sm" />
                <span>Explore &amp; Order Online</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-neutral-950"
                style={{
                  color: badgeColor,
                  borderColor: `${badgeColor}50`,
                  backgroundColor: `${badgeColor}15`,
                }}
              >
                <FaPercentage className="text-xs" />
                <span>Weekly Deals &amp; Offers</span>
              </button>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/40 hover:bg-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300"
              >
                <FaPhoneAlt className="text-xs" style={{ color: accentColor }} />
                <span>Store Hotline</span>
              </a>
            </div>

            {/* Facts Grid */}
            {facts && facts.length > 0 && (
              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {facts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 pl-4 space-y-1"
                    style={{ borderColor: idx % 2 === 0 ? accentColor : badgeColor }}
                  >
                    <p
                      className="text-2xl sm:text-3xl font-mono font-bold tracking-tight"
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

          {/* Right Column: Featured Logo Showcase Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border border-white/20 bg-white/5 backdrop-blur-md p-8 relative overflow-hidden text-center space-y-6 shadow-2xl">
              <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: accentColor }} />

              <div className="relative h-24 w-full bg-white p-4 flex items-center justify-center shadow-inner">
                <Image
                  src={logo}
                  alt={concernName}
                  width={200}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>

              <div className="space-y-2 text-xs font-mono">
                <span className="text-amber-400 font-bold uppercase tracking-wider block">
                  Sampan Group Retail Division
                </span>
                <h3 className="text-xl font-bold text-white">{concernName}</h3>
                <p className="text-white/70 leading-relaxed font-sans text-xs">
                  Premium quality assurance, daily fresh restocking, and seamless home delivery across Bangladesh.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono opacity-80">
                <span className="flex items-center gap-1 text-emerald-400">
                  <FaCheckCircle /> Verified Fresh
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <FaStar /> 4.9 Super Ratings
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
