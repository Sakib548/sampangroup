"use client";

import { FaMapMarkerAlt, FaCompass, FaTruck, FaDirections, FaExternalLinkAlt } from "react-icons/fa";

export interface LogisticalAccessNote {
  corridor: string;
  distance: string;
  travelTime: string;
}

export interface IndustrialLocationNoteProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  factoryAddress: string;
  gpsCoordinates: string;
  embedMapUrl: string;
  logisticsCorridors: LogisticalAccessNote[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function IndustrialLocationNote({
  title = "Factory Location & Logistical Connectivity",
  subtitle = "Strategically positioned along prime industrial transport corridors for rapid raw material delivery and nationwide finished goods dispatch.",
  concernName,
  factoryAddress,
  gpsCoordinates,
  embedMapUrl,
  logisticsCorridors,
  bgTheme = "divisions-green",
  accentColor = "#047857",
}: IndustrialLocationNoteProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="located-at" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaMapMarkerAlt className="text-xs" />
              <span>Factory Location Note</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Note & Logistical Connections */}
          <div className="lg:col-span-5 border border-current/15 p-8 bg-white flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3" style={{ color: accentColor }}>
                <FaTruck className="text-xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Located At Note</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-current">{concernName} Plant</h3>
                <p className="text-xs opacity-75 mt-1 leading-relaxed">{factoryAddress}</p>
              </div>

              <div className="p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs flex justify-between">
                <span className="opacity-60">GPS Position:</span>
                <span className="font-bold" style={{ color: accentColor }}>{gpsCoordinates}</span>
              </div>

              {/* Logistical Corridors Matrix */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-bold uppercase block opacity-[#183b2b]/60 border-b border-current/10 pb-2">
                  Proximity to Highway Freight Corridors
                </span>
                
                {logisticsCorridors.map((lc, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-current/10">
                    <span className="opacity-90">{lc.corridor}</span>
                    <span className="font-mono font-bold" style={{ color: accentColor }}>{lc.distance} ({lc.travelTime})</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(gpsCoordinates)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 text-white py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              <FaDirections />
              <span>Get Plant Route Directions</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 border border-current/15 relative min-h-[440px] overflow-hidden bg-neutral-200 shadow-sm">
            <iframe
              title={`${concernName} Location Map`}
              src={embedMapUrl}
              className="w-full h-full min-h-[480px] border-0 filter saturate-90 brightness-95"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}
