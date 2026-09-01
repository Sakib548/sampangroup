"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaCompass, 
  FaExpand, 
  FaInfoCircle, 
  FaBed, 
  FaGlassCheers, 
  FaUtensils, 
  FaCar,
  FaTimes
} from "react-icons/fa";

const zones = [
  {
    id: "white-hall",
    name: "White Hall Grand Ballroom",
    tagline: "300+ Capacity Banquet Center",
    image: "/images/facilities/highway_inn/party_reservation.png",
    description: "High-ceiling grand ballroom designed for lavish weddings, conferences, reunions, and anniversary dinners.",
    hotspots: [
      { id: "stage", x: "48%", y: "40%", title: "Acoustic Stage & Backdrop", desc: "Equipped with professional lighting, audio monitors, and podium." },
      { id: "chandeliers", x: "50%", y: "18%", title: "Crystal Chandelier Illumination", desc: "Regal ambient lighting tailored for high-end photography." },
      { id: "banquet-seating", x: "30%", y: "70%", title: "Round-Table Banquet Layout", desc: "Comfortable seating up to 300+ guests with wide aisles." },
    ],
  },
  {
    id: "motel-suite",
    name: "Soundproof Deluxe Motel Suite",
    tagline: "Restful Sleeping Sanctuary",
    image: "/images/concerns/highway-motel.png",
    description: "Acoustically isolated private room with premium double-cushioned mattress and modern en-suite bathroom.",
    hotspots: [
      { id: "bed", x: "45%", y: "55%", title: "Plush King Bedding", desc: "Fresh, daily sanitized linens with orthopedic spine support." },
      { id: "shower", x: "80%", y: "45%", title: "Hot Rain Shower Restroom", desc: "Pristine marble bathroom with toiletries & high water pressure." },
      { id: "wifi-tv", x: "20%", y: "40%", title: "Smart TV & Fiber Wi-Fi", desc: "Streaming channels and fast internet for business or leisure." },
    ],
  },
  {
    id: "garden-restaurant",
    name: "24/7 Garden Restaurant",
    tagline: "Farm-Fresh Highway Dining",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    description: "Spacious restaurant featuring indoor and outdoor veranda seating with fresh traditional recipes.",
    hotspots: [
      { id: "kitchen", x: "75%", y: "40%", title: "Live Open Kitchen", desc: "Watch master chefs prepare fresh tandoor grills and curries." },
      { id: "veranda", x: "25%", y: "60%", title: "Garden Veranda Seating", desc: "Breathe in fresh open air during highway rest intermissions." },
    ],
  },
  {
    id: "parking-plaza",
    name: "Gated Parking & EV Compound",
    tagline: "150+ Guarded Vehicle Bays",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    description: "Well-lit secure compound with dedicated slipways, wide coach turning radiuses, and charging bays.",
    hotspots: [
      { id: "ev", x: "50%", y: "50%", title: "DC Fast EV Charging Bay", desc: "Top up your electric vehicle battery during your stay." },
      { id: "security", x: "85%", y: "30%", title: "24/7 Guard Post & CCTV", desc: "Continuous security monitoring for all parked vehicles." },
    ],
  },
];

export default function VirtualTourViewer() {
  const [activeZoneId, setActiveZoneId] = useState("white-hall");
  const [selectedHotspot, setSelectedHotspot] = useState<{ title: string; desc: string } | null>(null);

  const currentZone = zones.find((z) => z.id === activeZoneId) || zones[0];

  return (
    <section id="virtual-tour" className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                12 / 360° Virtual Walkthrough
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Explore White House &amp; Motel. <br />
              <span className="text-[#ca8a04]">Interactive simulator.</span>
            </h2>
          </div>
          
          <p className="max-w-md text-sm text-neutral-500 leading-relaxed font-normal">
            Take a virtual tour of our banquet hall, soundproof suites, and garden restaurant before you arrive. Click the interactive pins to discover key amenities.
          </p>
        </div>

        {/* Zone Selector (Square Tabs) */}
        <div className="flex flex-wrap gap-2 pb-4 mb-8 border-b border-neutral-200">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => {
                setActiveZoneId(zone.id);
                setSelectedHotspot(null);
              }}
              className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeZoneId === zone.id
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-white text-neutral-700 hover:bg-[#e8b84b] hover:text-neutral-950 border border-neutral-200"
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* Virtual Tour Screen (Square & High Contrast) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none border border-neutral-300 bg-neutral-950 shadow-lg">
          <Image
            src={currentZone.image}
            alt={currentZone.name}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Interactive Hotspot Pins */}
          {currentZone.hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot)}
              style={{ top: spot.y, left: spot.x }}
              aria-label={spot.title}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
            >
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8b84b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-[#e8b84b] border-2 border-white text-neutral-950 items-center justify-center text-xs font-bold shadow-md">
                  +
                </span>
              </span>
              <span className="hidden group-hover:block absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-950/90 text-white px-3 py-1.5 rounded-none font-mono text-[10px] uppercase tracking-wider border border-white/20 shadow-xl backdrop-blur-md">
                {spot.title}
              </span>
            </button>
          ))}

          {/* Zone Badge Overlay */}
          <div className="absolute bottom-6 left-6 max-w-md z-10">
            <span className="inline-block bg-[#e8b84b] text-neutral-950 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-none mb-2 shadow-sm">
              {currentZone.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentZone.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-2">
              {currentZone.description}
            </p>
          </div>

          {/* Helper Hint */}
          <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-none border border-white/20 text-white text-[11px] font-mono flex items-center gap-2">
            <FaInfoCircle className="text-[#e8b84b]" />
            <span>Click &apos;+&apos; pins to inspect</span>
          </div>

          {/* Hotspot Popup Modal */}
          {selectedHotspot && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-11/12 max-w-sm rounded-none bg-neutral-950/95 border border-[#e8b84b] p-6 text-white shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in">
              <button
                onClick={() => setSelectedHotspot(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <FaTimes />
              </button>
              <h4 className="text-lg font-bold text-[#e8b84b]">{selectedHotspot.title}</h4>
              <p className="mt-2 text-xs text-white/80 leading-relaxed font-normal">
                {selectedHotspot.desc}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
