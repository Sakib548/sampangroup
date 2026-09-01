"use client";

import { FaMoneyBillWave, FaGasPump, FaBolt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export interface RateCardItem {
  fuelOrServiceType: string;
  unitPriceBDT: string;
  unitMeasure: string; // e.g. "Per Litre", "Per kWh", "Base Fee (First 5 KM)"
  availability: "In Stock & Ready" | "Live Available" | "On-Demand Dispatch";
  notes: string;
}

export interface MobilityPricingRateCardProps {
  title?: string;
  subtitle?: string;
  rates: RateCardItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  onRequestClick?: (itemTitle: string) => void;
}

export default function MobilityPricingRateCard({
  title = "Official Pricing & Rate Card",
  subtitle = "Transparent government regulated fuel rates, EV charging tariffs, and emergency towing fee structures.",
  rates,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
  onRequestClick,
}: MobilityPricingRateCardProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="pricing-rate-card" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaMoneyBillWave className="text-xs" />
              <span>Standard Tariffs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rates.map((rate, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-current/15 pb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-current">
                    {rate.fuelOrServiceType}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2.5 py-1">
                    {rate.availability}
                  </span>
                </div>

                <div className="py-2">
                  <span className="text-[10px] font-mono uppercase block opacity-60">Regulated Tariff</span>
                  <div className="text-3xl font-mono font-bold mt-1" style={{ color: accentColor }}>
                    {rate.unitPriceBDT}
                  </div>
                  <span className="text-xs font-mono opacity-70 block">{rate.unitMeasure}</span>
                </div>

                <p className="text-xs opacity-80 leading-relaxed font-normal bg-[#f3f6f2] p-3 border border-current/10 font-mono">
                  {rate.notes}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-current/15">
                <button
                  onClick={() => onRequestClick && onRequestClick(rate.fuelOrServiceType)}
                  className="w-full bg-[#090d16] hover:bg-neutral-800 text-white py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  Request Online Service / Fuel Tokens
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
