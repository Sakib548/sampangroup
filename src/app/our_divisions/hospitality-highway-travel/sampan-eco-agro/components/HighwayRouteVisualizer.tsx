"use client";

import { useState } from "react";
import { FaRoute, FaMapPin, FaCar, FaBolt, FaClock, FaCheckCircle, FaCompass, FaChevronRight } from "react-icons/fa";

interface RouteMarker {
  id: string;
  mile: string;
  name: string;
  type: "start" | "exit" | "resort" | "landmark";
  driveTimeFromDhaka: string;
  description: string;
  isSampanEcoAgro?: boolean;
}

const corridorMarkers: RouteMarker[] = [
  {
    id: "dhaka-start",
    mile: "KM 0",
    name: "Dhaka Expressway Entry (Zero Point / Jatrabari)",
    type: "start",
    driveTimeFromDhaka: "0 Mins",
    description: "Start journey along the 8-lane uninterrupted Dhaka–Mawa expressway corridor.",
  },
  {
    id: "postogola-toll",
    mile: "KM 12",
    name: "Postogola Bridge Toll Plaza",
    type: "landmark",
    driveTimeFromDhaka: "12 Mins",
    description: "Smooth fast-track electronic toll lanes.",
  },
  {
    id: "nimtoli-exit",
    mile: "KM 28",
    name: "Nimtoli Expressway Exit Ramp",
    type: "exit",
    driveTimeFromDhaka: "28 Mins",
    description: "Take Exit 4 toward the Green Belt corridor.",
  },
  {
    id: "sampan-eco-agro-marker",
    mile: "KM 35",
    name: "Sampan Eco & Agro Resort",
    type: "resort",
    driveTimeFromDhaka: "35 Mins",
    description: "Dedicated deceleration slip road directly into 50+ acres organic farm, eco-cottages, and garden dining.",
    isSampanEcoAgro: true,
  },
  {
    id: "sampan-highway-inn-marker",
    mile: "KM 42",
    name: "Sampan Highway Inn (KM 74 Hub)",
    type: "landmark",
    driveTimeFromDhaka: "42 Mins",
    description: "Sister hospitality hub with 24/7 motel suites and 120kW EV superchargers.",
  },
  {
    id: "padma-toll",
    mile: "KM 55",
    name: "Padma Bridge Toll Plaza",
    type: "landmark",
    driveTimeFromDhaka: "50 Mins",
    description: "Access to Padma Bridge crossing.",
  },
];

export default function HighwayRouteVisualizer() {
  const [selectedMarker, setSelectedMarker] = useState<RouteMarker>(corridorMarkers[3]);

  return (
    <section id="route-map" className="py-24 bg-[#0c1c14] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaRoute className="text-xs" />
              <span>14 • Dedicated Highway Corridor Map</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Highway-Route Map &amp; <span className="font-semibold text-[#b9e583]">Stopover Guide</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed font-normal">
            Planning a stopover? Track exactly where Sampan Eco &amp; Agro sits along the main Dhaka–Mawa Expressway corridor.
          </p>
        </div>

        {/* Visual Route Corridor Box */}
        <div className="border border-[#b9e583]/40 bg-[#10251b] p-8 relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#b9e583]" />

          {/* Timeline Mile Markers */}
          <div className="relative pt-6">
            
            {/* Horizontal Line across corridor */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
              {corridorMarkers.map((marker) => {
                const isSelected = selectedMarker.id === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarker(marker)}
                    className={`p-4 border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                      marker.isSampanEcoAgro
                        ? "border-[#b9e583] bg-[#b9e583]/20 shadow-lg shadow-[#b9e583]/10"
                        : isSelected
                        ? "border-white bg-white/10"
                        : "border-white/15 bg-black/40 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className={`font-bold ${marker.isSampanEcoAgro ? "text-[#b9e583]" : "text-white/60"}`}>
                          {marker.mile}
                        </span>
                        {marker.isSampanEcoAgro && (
                          <span className="bg-[#b9e583] text-[#0c1c14] text-[9px] font-bold px-1.5 py-0.5">
                            DESTINATION
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs font-bold text-white mt-2 line-clamp-2">
                        {marker.name}
                      </h3>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[#b9e583] text-[9px]" />
                        <span>{marker.driveTimeFromDhaka}</span>
                      </span>
                      <FaChevronRight className="text-[9px] text-[#b9e583]" />
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Detailed Selected Marker Box */}
          <div className="border border-white/15 bg-[#0c1c14] p-6 grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#b9e583] bg-[#b9e583]/15 border border-[#b9e583]/40 px-3 py-1 uppercase">
                  Selected Stop: {selectedMarker.mile}
                </span>
                <span className="font-mono text-xs text-white/70 flex items-center gap-1">
                  <FaCar className="text-[#b9e583]" />
                  <span>{selectedMarker.driveTimeFromDhaka} from Dhaka City</span>
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">{selectedMarker.name}</h4>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                {selectedMarker.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 font-mono text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>8-Lane Smooth Expressway Access</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>Dedicated Deceleration Turning Slip</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>Highway Bus &amp; Private Car Bays</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
