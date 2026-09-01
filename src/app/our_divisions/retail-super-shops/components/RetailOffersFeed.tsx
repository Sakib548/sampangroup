"use client";

import { useState } from "react";
import { FaTag, FaPercentage, FaClock, FaGift, FaCheckCircle, FaBullhorn } from "react-icons/fa";

export interface OfferItem {
  id: string;
  title: string;
  category: string;
  discountBadge: string;
  validUntil: string;
  description: string;
  promoCode?: string;
  inclusions: string[];
}

export interface RetailOffersFeedProps {
  title?: string;
  subtitle?: string;
  offers: OfferItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
  onClaimOffer?: (offerTitle: string) => void;
}

export default function RetailOffersFeed({
  title = "Weekly Offers & Festival Promotions Feed",
  subtitle = "Save big with daily fresh discounts, festival sweet box bundles, and super shop combo deals.",
  offers,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
  onClaimOffer,
}: RetailOffersFeedProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="weekly-offers" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaBullhorn className="text-xs" />
              <span>Limited Time Deals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Offers Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 font-mono text-xs font-bold uppercase text-white" style={{ backgroundColor: accentColor }}>
                {offer.discountBadge}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaGift className="text-amber-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-70">
                    {offer.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-current leading-snug">{offer.title}</h3>

                <p className="text-xs opacity-75 leading-relaxed font-normal">
                  {offer.description}
                </p>

                {/* Promo Code Box if available */}
                {offer.promoCode && (
                  <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs flex items-center justify-between">
                    <span className="opacity-60 text-[10px] uppercase">Promo Code:</span>
                    <span className="font-bold text-[#090d16] tracking-wider bg-white border border-current/20 px-2.5 py-0.5" style={{ color: accentColor }}>
                      {offer.promoCode}
                    </span>
                  </div>
                )}

                {/* Inclusions */}
                <div className="space-y-1.5 pt-2 text-xs">
                  {offer.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-90">
                      <FaCheckCircle className="text-emerald-700 text-[11px] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-current/15 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5 opacity-70">
                  <FaClock className="text-xs text-amber-600" />
                  <span>Valid: {offer.validUntil}</span>
                </div>

                <button
                  onClick={() => onClaimOffer && onClaimOffer(offer.title)}
                  className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  Claim Offer
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
