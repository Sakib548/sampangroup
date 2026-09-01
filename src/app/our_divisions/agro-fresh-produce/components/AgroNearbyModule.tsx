"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapPin, FaBed, FaGasPump, FaUtensils, FaGolfBall, FaStore } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export interface AgroNearbyConcern {
  name: string;
  category: string;
  distance: string;
  tagline: string;
  href: string;
  logo: string;
  icon: "resort" | "hotel" | "superstore" | "golf";
}

export interface AgroNearbyModuleProps {
  title?: string;
  subtitle?: string;
  currentStoreName: string;
  locationHubName: string;
  nearbyConcerns: AgroNearbyConcern[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroNearbyModule({
  title = "Nearby Facilities at This Location",
  subtitle = "Located within Sampan Group's integrated agro-tourism & hospitality complex — experience sister resorts, golf, and dining facilities.",
  currentStoreName,
  locationHubName = "Sampan Agro Complex, Moulvibazar",
  nearbyConcerns,
  bgTheme = "divisions-green",
  accentColor = "#15803d",
}: AgroNearbyModuleProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "resort": return <FaBed className="text-emerald-700" />;
      case "golf": return <FaGolfBall className="text-amber-600" />;
      case "superstore": return <FaStore className="text-blue-600" />;
      case "hotel": return <FaUtensils className="text-rose-600" />;
      default: return <FaMapPin className="text-emerald-700" />;
    }
  };

  return (
    <section id="nearby-module" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaMapPin className="text-xs" />
              <span>Location Synergy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-2 font-mono text-xs font-bold uppercase text-emerald-800 tracking-wider">
              Hub Location: {locationHubName}
            </p>
          </div>

          <p className="max-w-md text-xs text-neutral-600 leading-relaxed font-mono">
            {subtitle}
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {nearbyConcerns.map((concern, idx) => (
            <div
              key={idx}
              className="border border-neutral-300 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-14 w-36 bg-[#f8f9fa] border border-neutral-200 p-2 flex items-center justify-center">
                    <Image
                      src={concern.logo}
                      alt={concern.name}
                      width={120}
                      height={40}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 border border-emerald-200">
                    {getIcon(concern.icon)}
                    <span>{concern.distance}</span>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  {concern.category}
                </span>

                <h3 className="text-xl font-bold text-neutral-950">
                  {concern.name}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {concern.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <Link
                  href={concern.href}
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 group-hover:text-emerald-800 transition"
                >
                  <span>Explore Sister Facility</span>
                  <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 text-emerald-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
