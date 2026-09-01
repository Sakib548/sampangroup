"use client";

import Image from "next/image";
import { FaCogs, FaClock, FaCheckCircle, FaCamera, FaSignal, FaShieldAlt } from "react-icons/fa";

export interface OfferedServiceItem {
  title: string;
  description: string;
  icon?: string;
  highlights: string[];
}

export interface MobilityServiceOverviewProps {
  title?: string;
  subtitle?: string;
  operatingHours: string;
  liveStatus: string;
  services: OfferedServiceItem[];
  photoGallery: string[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function MobilityServiceOverview({
  title = "Services Offered & Operational Status",
  subtitle = "Round-the-clock fuel dispensing, EV charging, emergency highway towing, and luxury vehicle imports.",
  operatingHours,
  liveStatus,
  services,
  photoGallery,
  bgTheme = "divisions-green",
  accentColor = "#dc2626",
}: MobilityServiceOverviewProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="services-offered" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header with Hours & Live Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaCogs className="text-xs" />
              <span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>

          <div className="border border-current/15 bg-white p-6 flex items-center gap-6 shadow-sm shrink-0">
            <div className="text-center border-r border-current/15 pr-6">
              <span className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold text-emerald-700 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 uppercase">
                <FaSignal className="animate-pulse" />
                <span>{liveStatus}</span>
              </span>
              <span className="text-[10px] font-mono uppercase block opacity-60 mt-2">Station Status</span>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase text-current flex items-center gap-1">
                <FaClock style={{ color: accentColor }} />
                <span>Hours of Operation</span>
              </p>
              <p className="text-sm font-bold mt-0.5" style={{ color: accentColor }}>{operatingHours}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-current flex items-center gap-1">
                    <FaShieldAlt style={{ color: accentColor }} />
                    Service Option 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-current leading-snug">{srv.title}</h3>

                <p className="text-xs opacity-80 leading-relaxed font-normal">
                  {srv.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 text-xs">
                  {srv.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-90">
                      <FaCheckCircle className="text-emerald-700 text-[11px] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        {photoGallery && photoGallery.length > 0 && (
          <div className="border border-current/15 bg-white p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
              <FaCamera />
              <span>Station &amp; Facility Photography</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {photoGallery.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] border border-current/15 overflow-hidden bg-neutral-200 shadow-sm">
                  <Image
                    src={photo}
                    alt={`Facility Photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
