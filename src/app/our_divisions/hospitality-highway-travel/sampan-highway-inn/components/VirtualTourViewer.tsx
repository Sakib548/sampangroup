"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaCompass, 
  FaEye, 
  FaInfoCircle, 
  FaExpand, 
  FaChevronLeft, 
  FaChevronRight,
  FaBed,
  FaUtensils,
  FaBolt,
  FaDoorOpen,
  FaLaptopHouse
} from "react-icons/fa";

const tourZones = [
  {
    id: "lobby",
    name: "Grand Reception & Lobby",
    icon: FaDoorOpen,
    image: "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
    tagline: "Air-conditioned 24/7 check-in and highway concierge desk",
    hotspots: [
      { x: 30, y: 40, title: "24/7 Highway Concierge", desc: "Instant room allocation, travel guidance & EV bay reservation" },
      { x: 75, y: 55, title: "Welcome Refreshments", desc: "Complimentary chilled lemon mint & infused water upon arrival" },
    ],
  },
  {
    id: "suite",
    name: "VVIP Soundproof Deluxe Suite",
    icon: FaBed,
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    tagline: "Triple-glazed acoustic insulation with king orthopaedic bed",
    hotspots: [
      { x: 45, y: 50, title: "King Orthopaedic Bed", desc: "500-thread-count Egyptian cotton with anti-allergy pillows" },
      { x: 80, y: 35, title: "Acoustic Triple Glazing", desc: "99.8% highway traffic noise reduction for uninterrupted sleep" },
      { x: 20, y: 65, title: "Luxury En-Suite Rain Shower", desc: "High-pressure hot & cold water with organic herbal toiletries" },
    ],
  },
  {
    id: "restaurant",
    name: "Highway Multi-Cuisine Restaurant",
    icon: FaUtensils,
    image: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    tagline: "Authentic live kitchen, artisan bakery and family dining spaces",
    hotspots: [
      { x: 35, y: 45, title: "Live Tandoor & Grill Station", desc: "Piping-hot naan, kebabs and grilled meats served within minutes" },
      { x: 68, y: 50, title: "Family Dining Hall", desc: "Spacious air-conditioned seating with baby high-chairs available" },
    ],
  },
  {
    id: "lounge",
    name: "Executive Meeting & Event Suite",
    icon: FaLaptopHouse,
    image: "/images/facilities/highway_inn/Official-Outing.png",
    tagline: "High-tech presentation facilities for business and official outings",
    hotspots: [
      { x: 40, y: 35, title: "High-Definition Projection", desc: "Wireless screen casting and corporate presentation audio" },
      { x: 65, y: 60, title: "Ergonomic Conference Setup", desc: "Comfortable seating up to 30 delegates with power strips" },
    ],
  },
  {
    id: "ev-plaza",
    name: "120kW EV Supercharger Bay",
    icon: FaBolt,
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    tagline: "Canopied dual-gun ultra-fast DC charging with security",
    hotspots: [
      { x: 50, y: 45, title: "120kW Dual DC Fast Charger", desc: "Top up 20% to 80% battery in under 25 minutes" },
      { x: 25, y: 60, title: "Canopied Weather Protection", desc: "Safe illuminated all-weather charging day or night" },
    ],
  },
];

export default function VirtualTourViewer() {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  const currentZone = tourZones[activeZoneIndex];

  const handlePrev = () => {
    setActiveZoneIndex((prev) => (prev > 0 ? prev - 1 : tourZones.length - 1));
    setSelectedHotspot(null);
  };

  const handleNext = () => {
    setActiveZoneIndex((prev) => (prev < tourZones.length - 1 ? prev + 1 : 0));
    setSelectedHotspot(null);
  };

  return (
    <section id="virtual-tour" className="bg-[#050806] py-24 sm:py-32 text-white border-t border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-4">
              <FaCompass />
              <span>12 — Interactive Virtual Tour</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Step inside before <br />
              <span className="text-emerald-400">you even arrive.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Explore our suites, dining rooms, meeting halls, and EV plazas through our interactive walkthrough simulator. Click hotspots to discover amenities.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {tourZones.map((zone, idx) => {
            const Icon = zone.icon;
            return (
              <button
                key={zone.id}
                onClick={() => {
                  setActiveZoneIndex(idx);
                  setSelectedHotspot(null);
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeZoneIndex === idx
                    ? "bg-emerald-500 text-[#070b09] shadow-lg shadow-emerald-500/20 scale-[1.02]"
                    : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className={activeZoneIndex === idx ? "text-[#070b09]" : "text-emerald-400"} />
                <span>{zone.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Virtual Viewport */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl aspect-[16/9] max-h-[680px] min-h-[400px]">
          <Image
            src={currentZone.image}
            alt={currentZone.name}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-700 filter brightness-90 contrast-105"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Zone Title Overlay (Top Left) */}
          <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 max-w-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Virtual Viewport • 360° Preview
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">{currentZone.name}</h3>
            <p className="text-xs text-neutral-300 mt-1">{currentZone.tagline}</p>
          </div>

          {/* Interactive Hotspot Markers */}
          {currentZone.hotspots.map((spot, idx) => (
            <div
              key={idx}
              style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={() => setSelectedHotspot(selectedHotspot === idx ? null : idx)}
                className="group relative flex items-center justify-center cursor-pointer"
              >
                <span className="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-ping" />
                <span className="relative w-6 h-6 rounded-full bg-emerald-400 text-[#070b09] flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-125 transition-transform">
                  +
                </span>
              </button>

              {/* Hotspot Info Popup */}
              {selectedHotspot === idx && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-64 rounded-2xl bg-[#0d1410]/95 border border-emerald-500/40 p-4 text-white shadow-2xl backdrop-blur-xl z-30 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Feature Spotlight
                    </span>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-white">{spot.title}</h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{spot.desc}</p>
                </div>
              )}
            </div>
          ))}

          {/* Navigation Controls (Bottom Right) */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Zone"
              className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <FaChevronLeft />
            </button>

            <span className="bg-black/60 px-4 py-2.5 rounded-full text-xs font-mono font-bold text-neutral-300 border border-white/10 backdrop-blur-sm">
              0{activeZoneIndex + 1} / 0{tourZones.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next Zone"
              className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Bottom Left Hint */}
          <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-2 text-xs text-neutral-400 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <FaInfoCircle className="text-emerald-400" />
            <span>Click on the glowing <strong>+</strong> markers to inspect interior features</span>
          </div>

        </div>

      </div>
    </section>
  );
}
