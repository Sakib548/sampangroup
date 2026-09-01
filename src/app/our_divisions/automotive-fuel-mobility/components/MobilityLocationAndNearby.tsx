"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaCompass, FaDirections, FaExternalLinkAlt, FaBuilding, FaHotel, FaUtensils, FaGasPump } from "react-icons/fa";

export interface NearbyFacility {
  name: string;
  category: string;
  distance: string;
  link: string;
}

export interface MobilityLocationAndNearbyProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  stationAddress: string;
  gpsCoordinates: string;
  embedMapUrl: string;
  nearbyFacilities?: NearbyFacility[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function MobilityLocationAndNearby({
  title = "Location & Nearby Amenities Hub",
  subtitle = "Conveniently situated along the Express Highway transit corridor with full access to rest stop dining, hotel lodging, and car care services.",
  concernName,
  stationAddress,
  gpsCoordinates,
  embedMapUrl,
  nearbyFacilities = [
    { name: "Express Highway Inn & Resort", category: "Hospitality & Rooms", distance: "Next Door (100m)", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
    { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
    { name: "Sampan LPG & Fuel Station", category: "Multi-Fuel Hub", distance: "Same Complex", link: "/our_divisions/automotive-fuel-mobility/sampan-lpg-filling-station" },
  ],
  bgTheme = "divisions-green",
  accentColor = "#dc2626",
}: MobilityLocationAndNearbyProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="location-nearby" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <span>Transit Hub Location</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Address & Coordinates */}
          <div className="lg:col-span-5 border border-current/15 p-8 bg-white flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3" style={{ color: accentColor }}>
                <FaCompass className="text-xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Station Address</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-current">{concernName}</h3>
                <p className="text-xs opacity-75 mt-1 leading-relaxed">{stationAddress}</p>
              </div>

              <div className="p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs flex justify-between">
                <span className="opacity-60">GPS Position:</span>
                <span className="font-bold" style={{ color: accentColor }}>{gpsCoordinates}</span>
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
              <span>Get Directions</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 border border-current/15 relative min-h-[420px] overflow-hidden bg-neutral-200 shadow-sm">
            <iframe
              title={`${concernName} Location Map`}
              src={embedMapUrl}
              className="w-full h-full min-h-[460px] border-0 filter saturate-90 brightness-95"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

        {/* "Nearby at this location" Module */}
        {nearbyFacilities && nearbyFacilities.length > 0 && (
          <div className="border border-current/15 bg-white p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-current/15 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                <FaBuilding />
                <span>Nearby at this Location Module</span>
              </div>
              <span className="font-mono text-[10px] opacity-60">Integrated Highway Stopover Hub</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
              {nearbyFacilities.map((fac, idx) => (
                <div key={idx} className="p-5 bg-[#f3f6f2] border border-current/10 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-emerald-700 block">{fac.category}</span>
                    <h4 className="font-bold text-current text-sm">{fac.name}</h4>
                    <span className="text-[11px] opacity-60 block">Proximity: {fac.distance}</span>
                  </div>

                  <Link
                    href={fac.link}
                    className="inline-flex items-center justify-between text-white text-[11px] font-bold uppercase px-4 py-2 shadow-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span>View Facility</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
