"use client";

import Image from "next/image";
import { FaMapPin, FaBed, FaGasPump, FaCoffee, FaGlassMartiniAlt, FaDirections } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface NearbyConcern {
  name: string;
  category: string;
  distance: string;
  tagline: string;
  href: string;
  logo: string;
  icon: "hotel" | "fuel" | "cafe" | "club";
}

export interface RetailNearbyModuleProps {
  title?: string;
  subtitle?: string;
  currentStoreName: string;
  locationHubName: string;
  nearbyConcerns: NearbyConcern[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function RetailNearbyModule({
  title = "Nearby at This Location",
  subtitle = "Located within the premier Sampan Highway Hub — experience our sister hospitality and mobility facilities right next door.",
  currentStoreName,
  locationHubName = "Sampan Highway Complex, N1 Highway",
  nearbyConcerns,
  bgTheme = "divisions-green",
  accentColor = "#dc2626",
}: RetailNearbyModuleProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "hotel": return <FaBed className="text-amber-600" />;
      case "fuel": return <FaGasPump className="text-emerald-700" />;
      case "cafe": return <FaCoffee className="text-amber-700" />;
      case "club": return <FaGlassMartiniAlt className="text-purple-700" />;
      default: return <FaMapPin className="text-rose-600" />;
    }
  };

  return (
    <section id="nearby-module" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaMapPin className="text-xs" />
              <span>Location Synergy Hub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Hub Banner Strip */}
        <div className="p-4 bg-white border border-current/15 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs shadow-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-600 animate-pulse" />
            <span>Integrated Location Hub: <strong className="text-current">{locationHubName}</strong></span>
          </div>
          <span className="opacity-75">Cross-Business Member Privileges Active</span>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyConcerns.map((item, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="h-10 w-10 bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-800 border border-amber-500/30 px-2 py-0.5">
                    {item.distance}
                  </span>
                </div>

                <div className="h-8 w-24 relative opacity-90">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <h3 className="text-lg font-bold text-current">{item.name}</h3>
                <p className="text-xs opacity-75 leading-relaxed font-normal">{item.tagline}</p>
              </div>

              <div className="pt-4 border-t border-current/15">
                <a
                  href={item.href}
                  className="w-full inline-flex items-center justify-between text-xs font-mono font-bold uppercase text-current group-hover:text-amber-700 transition-colors"
                >
                  <span>Explore Concern</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
