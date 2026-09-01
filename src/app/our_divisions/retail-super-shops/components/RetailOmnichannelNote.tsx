"use client";

import { FaMobileAlt, FaStore, FaTruck, FaClock, FaCheckCircle, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

export interface RetailOmnichannelNoteProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
}

export default function RetailOmnichannelNote({
  title = "Online Ordering vs. In-Store Experience",
  subtitle = "Choose how you shop — enjoy instant 30-minute doorstep delivery or experience our premium physical store lounge.",
  concernName,
  bgTheme = "divisions-green",
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
}: RetailOmnichannelNoteProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="omnichannel-note" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaExchangeAlt className="text-xs" />
              <span>Omnichannel Shopping</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Dual Cards Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Online Ordering */}
          <div className="border border-current/15 bg-white p-8 sm:p-10 space-y-6 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: accentColor }} />

            <div className="flex items-center justify-between">
              <div
                className="h-12 w-12 flex items-center justify-center font-bold border"
                style={{ color: accentColor, borderColor: `${accentColor}30`, backgroundColor: `${accentColor}10` }}
              >
                <FaMobileAlt className="text-xl" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-emerald-500/15 text-emerald-700 border border-emerald-500/30">
                Express Home Delivery
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                Digital Storefront &amp; Mobile App
              </span>
              <h3 className="text-2xl font-bold text-current">Online Ordering Experience</h3>
              <p className="text-xs opacity-75 leading-relaxed font-normal">
                Order directly from your phone or desktop. Our temperature-controlled delivery fleet ensures your fresh sweets, groceries, and daily essentials reach your doorstep in under 30 minutes.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs border-t border-current/15 pt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>30-Minute Rapid Neighborhood Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Live GPS Order Tracking &amp; Delivery ETA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>bKash, Nagad, Visa, Mastercard &amp; Cash-on-Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Special Festival Gift Box Packaging Included</span>
              </div>
            </div>

            <a
              href="#catalog-inquiry"
              className="w-full inline-flex items-center justify-center gap-2 text-white py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all cursor-pointer hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              <span>Order Online Now</span>
            </a>
          </div>

          {/* Card 2: In-Store Physical Visit */}
          <div className="border border-current/15 bg-white p-8 sm:p-10 space-y-6 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: badgeColor }} />

            <div className="flex items-center justify-between">
              <div
                className="h-12 w-12 flex items-center justify-center font-bold border"
                style={{ color: badgeColor, borderColor: `${badgeColor}40`, backgroundColor: `${badgeColor}15` }}
              >
                <FaStore className="text-xl" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-amber-500/15 text-amber-800 border border-amber-500/30">
                Flagship Physical Store
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: badgeColor }}>
                Visit Our Physical Outlets
              </span>
              <h3 className="text-2xl font-bold text-current">In-Store Shopping Lounge</h3>
              <p className="text-xs opacity-75 leading-relaxed font-normal">
                Immerse yourself in our air-conditioned retail outlets. Taste live artisanal mishti samples, explore curated gourmet displays, and consult our store concierges beside Highway Inn.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs border-t border-current/15 pt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Live Sweet Counter Tasting &amp; Fresh Prep Watch</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Drive-Thru Express Pickup Lanes</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Spacious AC Lounge &amp; Highway Rest Stop Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 shrink-0" />
                <span>Instant Barcode Loyalty Scanner &amp; Cashier Perks</span>
              </div>
            </div>

            <a
              href="#store-locations"
              className="w-full inline-flex items-center justify-center gap-2 border text-current py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all cursor-pointer hover:bg-neutral-950 hover:text-white"
              style={{ borderColor: `${badgeColor}80` }}
            >
              <span>Locate Nearest Store</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
