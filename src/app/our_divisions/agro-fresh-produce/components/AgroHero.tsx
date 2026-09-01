"use client";

import Image from "next/image";
import { FaLeaf, FaSeedling, FaTractor, FaPhoneAlt, FaCheckCircle, FaAward } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface AgroHeroFact {
  value: string;
  label: string;
}

export interface AgroHeroProps {
  title: string;
  subtitle: string;
  concernName: string;
  logo: string;
  statusBadge: string;
  statusType?: "operating" | "expanding" | "flagship";
  description: string;
  bannerImage: string;
  facts: AgroHeroFact[];
  accentColor?: string;
  badgeColor?: string;
  onExploreCatalog?: () => void;
  onWholesaleInquiry?: () => void;
}

export default function AgroHero({
  title,
  subtitle,
  concernName,
  logo,
  statusBadge,
  statusType = "operating",
  description,
  bannerImage,
  facts,
  accentColor = "#15803d",
  badgeColor = "#16a34a",
  onExploreCatalog,
  onWholesaleInquiry,
}: AgroHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#06180e] text-white border-b border-white/10">
      
      {/* Background Hero Banner with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06180e]/95 via-[#06180e]/85 to-[#06180e]/45" />
      </div>

      {/* Radial Gradient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(234,179,8,0.12),transparent_35%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: badgeColor, borderColor: `${badgeColor}50`, backgroundColor: `${badgeColor}15` }}
          >
            <FaLeaf className="text-xs" />
            <span>{statusBadge}</span>
          </div>

          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/80 backdrop-blur">
            <FaAward className="text-emerald-400 text-xs" />
            <span>100% Organically Grown &amp; Hygienic</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo + Title */}
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-24 bg-white/95 border border-white/20 p-2 flex items-center justify-center shrink-0 shadow-lg">
                <Image
                  src={logo}
                  alt={`${concernName} logo`}
                  width={80}
                  height={50}
                  className="object-contain max-h-12"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 block">
                  Agro &amp; Fresh Produce Division
                </span>
                <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  {title}
                </h1>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-medium text-emerald-300/90 leading-snug">
              {subtitle}
            </p>

            <p className="text-base text-white/80 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#products-catalog"
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition duration-300 shadow-lg"
              >
                <span>View What&apos;s Sold</span>
                <FiArrowRight className="text-sm" />
              </a>

              <a
                href="#wholesale-inquiry"
                onClick={onWholesaleInquiry}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/30 bg-white/5 hover:bg-white/15 transition duration-300 backdrop-blur"
              >
                <FaPhoneAlt className="text-xs text-amber-400" />
                <span>B2B &amp; Wholesale Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Key Facts Card */}
          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-white/5 backdrop-blur-xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Key Operational Metrics
                </span>
                <FaTractor className="text-emerald-400 text-lg" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {facts.map((fact, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-3xl font-light text-white tracking-tight block">
                      {fact.value}
                    </span>
                    <span className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  <span>Direct Farmgate &amp; Cold-Chain Transport</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  <span>Chemical-Free &amp; Traceable Produce</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
