"use client";

import { FaMapMarkerAlt, FaCompass, FaClock, FaDirections, FaPhoneAlt, FaExternalLinkAlt, FaParking, FaCar } from "react-icons/fa";

export interface RetailStoreLocation {
  name: string;
  address: string;
  phone: string;
  hours: string;
  gpsCoordinates: string;
  parkingInfo: string;
}

export interface RetailStoreLocationAndMapProps {
  title?: string;
  subtitle?: string;
  projectName: string;
  locations: RetailStoreLocation[];
  embedMapUrl: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function RetailStoreLocationAndMap({
  title = "Physical Store Locations & Directions",
  subtitle = "Visit our physical outlets for fresh sweet tastings, drive-thru pickups, and in-person retail shopping.",
  projectName,
  locations,
  embedMapUrl,
  bgTheme = "divisions-green",
  accentColor = "#dc2626",
}: RetailStoreLocationAndMapProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="store-locations" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaMapMarkerAlt className="text-xs" />
              <span>Store Network</span>
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
          
          {/* Left Column: Location Cards List */}
          <div className="lg:col-span-5 space-y-6">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="border border-current/15 bg-white p-8 space-y-4 shadow-sm relative overflow-hidden"
              >
                <div className="flex justify-between items-start border-b border-current/15 pb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider block" style={{ color: accentColor }}>
                    Outlet {idx + 1}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2 py-0.5">
                    Open Now
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-current">{loc.name}</h3>
                  <p className="text-xs opacity-75 mt-1 leading-relaxed">{loc.address}</p>
                </div>

                <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between opacity-80">
                    <span className="flex items-center gap-1.5"><FaClock className="text-[10px]" /> Store Hours:</span>
                    <span className="font-bold text-current">{loc.hours}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span className="flex items-center gap-1.5"><FaPhoneAlt className="text-[10px]" /> Hotline:</span>
                    <span className="font-bold text-current">{loc.phone}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span className="flex items-center gap-1.5"><FaParking className="text-[10px]" /> Parking:</span>
                    <span className="font-bold text-current">{loc.parkingInfo}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.gpsCoordinates)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-white py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  <FaDirections />
                  <span>Get Live Directions</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            ))}
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 border border-current/15 relative min-h-[480px] overflow-hidden bg-neutral-200 shadow-sm">
            <iframe
              title={`${projectName} Store Location Map`}
              src={embedMapUrl}
              className="w-full h-full min-h-[520px] border-0 filter saturate-90 brightness-95"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}
