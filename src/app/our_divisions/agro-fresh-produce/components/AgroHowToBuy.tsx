"use client";

import { FaTractor, FaTruck, FaStore, FaPhoneAlt, FaCheckCircle, FaFileContract } from "react-icons/fa";

export interface BuyingChannel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: "farmgate" | "truck" | "store" | "b2b";
  recommendedFor: string;
}

export interface AgroHowToBuyProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  channels: BuyingChannel[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroHowToBuy({
  title = "How to Buy — Procurement Channels",
  subtitle = "Whether you are a wholesale distributor, supermarket chain, hotel, or individual shopper — choose your convenient buying channel.",
  concernName,
  channels,
  bgTheme = "divisions-green",
  accentColor = "#15803d",
}: AgroHowToBuyProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  const getIcon = (type: string) => {
    switch (type) {
      case "farmgate": return <FaTractor className="text-emerald-700 text-2xl" />;
      case "truck": return <FaTruck className="text-emerald-700 text-2xl" />;
      case "store": return <FaStore className="text-emerald-700 text-2xl" />;
      case "b2b": return <FaFileContract className="text-emerald-700 text-2xl" />;
      default: return <FaTractor className="text-emerald-700 text-2xl" />;
    }
  };

  return (
    <section id="how-to-buy" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            <FaTractor className="text-xs" />
            <span>Procurement Guide</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Buying Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="border border-neutral-300 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 inline-block">
                  {getIcon(channel.icon)}
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Channel 0{channel.id}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-950">
                    {channel.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-neutral-500 mt-1">
                    {channel.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {channel.description}
                </p>

                <div className="pt-3 border-t border-neutral-100 space-y-2 font-mono text-[11px] text-neutral-700">
                  {channel.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-600 text-xs shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">Best Suited For</span>
                <span className="font-mono text-xs font-bold text-neutral-900 block">
                  {channel.recommendedFor}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
