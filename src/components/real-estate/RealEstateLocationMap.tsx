"use client";

import { FaMapMarkerAlt, FaCompass, FaClock, FaDirections, FaExternalLinkAlt } from "react-icons/fa";

export interface LandmarkDistance {
  landmark: string;
  distance: string;
  driveTime: string;
}

export interface RealEstateLocationMapProps {
  title?: string;
  subtitle?: string;
  projectName: string;
  address: string;
  gpsCoordinates: string;
  embedMapUrl: string;
  landmarks: LandmarkDistance[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function RealEstateLocationMap({
  title = "Location & Regional Accessibility",
  subtitle = "Strategically positioned along major growth corridors with direct connectivity to commercial and residential hubs.",
  projectName,
  address,
  gpsCoordinates,
  embedMapUrl,
  landmarks,
  bgTheme = "divisions-green",
}: RealEstateLocationMapProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="location-map" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaMapMarkerAlt className="text-xs" />
              <span>Location Advantage</span>
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
          
          {/* Left Column: Location Specs & Landmarks */}
          <div className="lg:col-span-5 border border-current/15 p-8 bg-white flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#ca8a04]">
                <FaCompass className="text-xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Site Coordinates</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-current">{projectName}</h3>
                <p className="text-xs opacity-75 mt-1 leading-relaxed">{address}</p>
              </div>

              <div className="p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs flex justify-between">
                <span className="opacity-60">GPS Position:</span>
                <span className="font-bold text-[#ca8a04]">{gpsCoordinates}</span>
              </div>

              {/* Landmark Distance Matrix */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-bold uppercase block opacity-60 border-b border-current/10 pb-2">
                  Proximity to Key Landmarks
                </span>
                
                {landmarks.map((lm, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-current/10">
                    <span className="opacity-90">{lm.landmark}</span>
                    <span className="font-mono font-bold text-[#ca8a04]">{lm.distance} ({lm.driveTime})</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(gpsCoordinates)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md"
            >
              <FaDirections />
              <span>Get Live Directions</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 border border-current/15 relative min-h-[420px] overflow-hidden bg-neutral-200 shadow-sm">
            <iframe
              title={`${projectName} Location Map`}
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
