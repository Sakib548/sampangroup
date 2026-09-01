"use client";

import { FaMapMarkerAlt, FaCompass, FaExternalLinkAlt, FaDirections } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const mapUrl =
  "https://www.google.com/maps?q=Sampan%20Highway%20Motel%20White%20House%20Bangladesh&output=embed";

const distanceHubs = [
  { hub: "Dhaka Central Gateway (Motijheel)", distance: "78 km", time: "1h 08m", via: "via Mayor Hanif Flyover & Expressway" },
  { hub: "Padma Bridge Toll Plaza (Jajira)", distance: "43 km", time: "34m", via: "via 4-Lane N8 South Corridor" },
  { hub: "Bhanga Mega Interchange", distance: "20 km", time: "16m", via: "via Cloverleaf Junction" },
  { hub: "Khulna Divisional Hub", distance: "102 km", time: "1h 30m", via: "via N8 National Highway" },
  { hub: "Barishal Division (via Bhanga)", distance: "56 km", time: "48m", via: "via Bhanga-Barishal Highway" },
];

export default function LocationAndMap() {
  return (
    <section id="location" className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#e8b84b]"></span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
            03 / Location &amp; Live Map
          </span>
        </div>

        <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
          Easy to find. <br />
          <span className="text-[#ca8a04]">Easy to continue from.</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-stretch">
          
          {/* Left Column: Coordinates & Distance Matrix (Square Cards) */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-950 mb-2">
                  Direct Highway Slipway Access
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Located directly on the primary southern corridor with dedicated wide entry and exit deceleration ramps. Zero detour required.
                </p>
              </div>

              {/* Distance Matrix Card */}
              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04] mb-4">
                  Distance Matrix from Key Hubs
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                  {distanceHubs.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0">
                      <div>
                        <span className="font-semibold text-neutral-950">{item.hub}</span>
                        <p className="text-[10px] text-neutral-400 font-mono">{item.via}</p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <span className="font-bold text-neutral-950">{item.distance}</span>
                        <p className="text-[10px] text-[#ca8a04] font-mono font-semibold">{item.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GPS Coordinates Badge */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  Exact GPS:
                </span>
                <span className="rounded-none bg-white border border-neutral-200 px-3 py-1 font-mono text-xs font-bold text-neutral-800 shadow-sm">
                  23.251° N, 89.782° E
                </span>
              </div>
            </div>

            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sampan+Highway+Motel+White+House+Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b-2 border-[#e8b84b] pb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:text-[#ca8a04]"
              >
                <span>Open Google Maps Directions</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map Card (Square) */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-none border border-neutral-200 shadow-md lg:aspect-auto lg:h-full min-h-[380px] bg-white">
            <iframe
              title="Sampan Highway Motel and White House Location Map"
              src={mapUrl}
              className="h-full w-full border-0 grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
