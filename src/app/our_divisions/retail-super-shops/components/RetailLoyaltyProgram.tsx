"use client";

import { useState } from "react";
import { FaAward, FaCrown, FaGift, FaQrcode, FaCheckCircle, FaStar, FaCoins } from "react-icons/fa";

export interface LoyaltyTier {
  tierName: string;
  spendThreshold: string;
  pointsRate: string;
  badgeColor: string;
  perks: string[];
}

export interface RetailLoyaltyProgramProps {
  title?: string;
  subtitle?: string;
  programName: string;
  tiers: LoyaltyTier[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
}

export default function RetailLoyaltyProgram({
  title = "Sampan Group Loyalty & Rewards Program",
  subtitle = "Earn points every time you shop! Redeem rewards across our sweet shops, super shops, cafes, and highway inns.",
  programName,
  tiers,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
}: RetailLoyaltyProgramProps) {
  const [spentAmount, setSpentAmount] = useState<number>(5000);

  // Calculation Math: 5 points per 100 BDT
  const earnedPoints = Math.round((spentAmount / 100) * 5);
  const cashbackBDT = Math.round(earnedPoints * 0.5);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="loyalty-program" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaAward className="text-xs" />
              <span>Customer Rewards</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: tier.badgeColor }} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white px-3 py-1 shadow-sm" style={{ backgroundColor: tier.badgeColor }}>
                    {tier.tierName} Tier
                  </span>
                  <FaCrown className="text-amber-500 text-lg" />
                </div>

                <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-1">
                  <div className="flex justify-between opacity-80">
                    <span>Qualification:</span>
                    <span className="font-bold text-current">{tier.spendThreshold}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span>Points Earning:</span>
                    <span className="font-bold text-emerald-700">{tier.pointsRate}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs font-sans">
                  {tier.perks.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-90">
                      <FaCheckCircle className="text-emerald-600 text-[11px] shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-current/15">
                <button
                  className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  Join {tier.tierName} Membership
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Points Calculator */}
        <div className="border border-current/15 bg-white p-8 sm:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-amber-700">
              <FaCoins className="text-base" />
              <span className="font-bold uppercase tracking-wider">Interactive Loyalty Points Calculator</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-current">
                <span>Estimated Monthly Retail Spend:</span>
                <span className="font-bold text-lg" style={{ color: accentColor }}>BDT {spentAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={spentAmount}
                onChange={(e) => setSpentAmount(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] opacity-60">
                <span>BDT 1,000</span>
                <span>BDT 50,000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#f3f6f2] p-6 border border-current/15 text-center space-y-2 font-mono">
            <span className="text-xs uppercase opacity-70 block">Estimated Rewards Earned</span>
            <div className="text-3xl font-bold" style={{ color: accentColor }}>
              {earnedPoints} Points
            </div>
            <p className="text-xs text-emerald-700 font-bold">
              Redeemable for BDT {cashbackBDT} in-store credit or sweet boxes!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
