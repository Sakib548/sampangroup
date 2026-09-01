"use client";

import { FaMapMarkerAlt, FaCompass, FaPhoneAlt, FaClock, FaTractor, FaTruck, FaExternalLinkAlt } from "react-icons/fa";

export interface AgroLocationFacility {
  name: string;
  type: string;
  address: string;
  phone: string;
  operatingHours: string;
  gpsCoordinates: string;
  keyAssets: string[];
}

export interface AgroLocationAndMapProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  facilities: AgroLocationFacility[];
  embedMapUrl: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroLocationAndMap({
  title = "Location & Processing Facilities Map",
  subtitle = "Visit our agro-estates, hatchery hubs, and processing cold-storage centers across Bangladesh.",
  concernName,
  facilities,
  embedMapUrl,
  bgTheme = "divisions-green",
  accentColor = "#15803d",
}: AgroLocationAndMapProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="location-map" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            <FaMapMarkerAlt className="text-xs" />
            <span>Facility Locations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Facility Details + Embedded Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Facilities List */}
          <div className="lg:col-span-6 space-y-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="border border-neutral-300 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {fac.type}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-950 mt-0.5">
                      {fac.name}
                    </h3>
                  </div>
                  <FaTractor className="text-emerald-700 text-xl" />
                </div>

                <div className="space-y-2 font-mono text-xs text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <FaMapMarkerAlt className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                    <span>{fac.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaPhoneAlt className="text-emerald-600 text-xs shrink-0" />
                    <span>{fac.phone}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaClock className="text-emerald-600 text-xs shrink-0" />
                    <span>{fac.operatingHours}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaCompass className="text-emerald-600 text-xs shrink-0" />
                    <span>GPS: {fac.gpsCoordinates}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 font-mono text-[11px] text-neutral-600">
                  <span className="font-bold text-neutral-900 block mb-1">On-Site Infrastructure:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {fac.keyAssets.map((asset, aIdx) => (
                      <span key={aIdx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px]">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-6 border border-neutral-300 bg-white p-2 shadow-lg h-[480px] lg:h-[580px] relative">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${concernName} Location Map`}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
