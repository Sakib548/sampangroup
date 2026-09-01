"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCompass, FaExpand, FaCompress, FaEye, FaMapPin, FaLeaf, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TourHotspot {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

const hotspots: TourHotspot[] = [
  {
    id: "orchard-zone",
    name: "Organic Fruit Orchards & Berry Fields",
    category: "Agri Zone",
    image: "/images/our_divisions/eco_agro/fruits.jpg",
    description: "50+ acres of organic fruit trees. Walk through rows of chemical-free mangoes, papayas, and guava trees.",
    highlights: ["Pick-your-own harvest pathways", "Compost & soil biology demo stations", "Shaded rest pavilions"],
  },
  {
    id: "lakefront-cottages",
    name: "Lakeside Eco Luxury Cottages",
    category: "Accommodations",
    image: "/images/concerns/3-sampan-eco-agro.png",
    description: "Serene waterfront cottage decks featuring natural wood architecture, air conditioning, and sunset balconies.",
    highlights: ["Private lakeview veranda", "AC climate control", "Private fishing deck access"],
  },
  {
    id: "farm-restaurant",
    name: "Farm-to-Table Garden Dining Deck",
    category: "Dining",
    image: "/images/our_divisions/eco_agro/veg.jpg",
    description: "Open-air wooden dining pavilion serving organic meals prepared fresh from morning farm harvests.",
    highlights: ["Live clay-oven BBQ station", "Organic fresh juice bar", "100% farm-sourced menu"],
  },
  {
    id: "sunset-pier",
    name: "Sunset Fishing Pier & Boat Deck",
    category: "Activities",
    image: "/images/concerns/eco-agro.png",
    description: "Natural freshwater lake stocked with local fish species, equipped with pedal boats and wooden rowboats.",
    highlights: ["Angling spots", "Pedal boats & rowboats", "Sunset photography deck"],
  },
];

export default function VirtualTourViewer() {
  const [activeHotspotIndex, setActiveHotspotIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeHotspot = hotspots[activeHotspotIndex];

  const handleNext = () => {
    setActiveHotspotIndex((prev) => (prev + 1) % hotspots.length);
  };

  const handlePrev = () => {
    setActiveHotspotIndex((prev) => (prev - 1 + hotspots.length) % hotspots.length);
  };

  return (
    <section id="virtual-tour" className="py-24 bg-[#0c1c14] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaCompass className="text-xs" />
              <span>12 • Interactive Virtual Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              360° Virtual <span className="font-semibold text-[#b9e583]">Resort Tour</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed font-normal">
            Take a virtual walk through our organic farm orchards, lakefront cottages, and garden dining pavilions before your visit.
          </p>
        </div>

        {/* 360 Tour Viewer Container */}
        <div className={`border border-[#b9e583]/40 bg-black relative overflow-hidden transition-all ${
          isFullscreen ? "fixed inset-0 z-50 p-6 flex flex-col" : "min-h-[540px] flex flex-col justify-between"
        }`}>
          
          {/* Main Visual Screen */}
          <div className="relative flex-1 min-h-[420px] w-full overflow-hidden">
            <Image
              src={activeHotspot.image}
              alt={activeHotspot.name}
              fill
              className="object-cover transition-all duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

            {/* Top Bar Controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 bg-[#0c1c14]/90 border border-[#b9e583]/50 px-4 py-2 backdrop-blur-md">
                <FaEye className="text-[#b9e583] text-sm animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase text-white">
                  360° Interactive Simulator: {activeHotspot.name}
                </span>
              </div>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="bg-[#0c1c14]/90 border border-white/20 hover:border-white p-2 text-white transition-colors backdrop-blur-md cursor-pointer"
              >
                {isFullscreen ? <FaCompress className="text-base" /> : <FaExpand className="text-base" />}
              </button>
            </div>

            {/* Interactive Hotspot Buttons Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="pointer-events-auto bg-[#b9e583] text-[#0c1c14] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2 animate-bounce">
                <FaMapPin />
                <span>Hotspot: {activeHotspot.name}</span>
              </div>
            </div>

            {/* Arrow Nav Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous Virtual Scene"
              className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/70 border border-white/20 hover:bg-[#b9e583] hover:text-black hover:border-[#b9e583] text-white flex items-center justify-center transition-all cursor-pointer z-10"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Virtual Scene"
              className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/70 border border-white/20 hover:bg-[#b9e583] hover:text-black hover:border-[#b9e583] text-white flex items-center justify-center transition-all cursor-pointer z-10"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>

          {/* Bottom Controls & Hotspot Selector Bar */}
          <div className="bg-[#0c1c14] border-t border-white/15 p-6 relative z-10">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-2">
                <span className="font-mono text-xs text-[#b9e583] uppercase tracking-widest font-bold">
                  {activeHotspot.category} Zone Description
                </span>
                <h3 className="text-lg font-bold text-white">{activeHotspot.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {activeHotspot.description}
                </p>
              </div>

              {/* Selector Buttons */}
              <div className="md:col-span-4 flex flex-wrap gap-2 justify-end">
                {hotspots.map((hs, idx) => (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspotIndex(idx)}
                    className={`px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeHotspotIndex === idx
                        ? "bg-[#b9e583] text-[#0c1c14] shadow-md"
                        : "bg-[#10251b] text-white/60 hover:bg-white/20 hover:text-white border border-white/10"
                    }`}
                  >
                    Scene {idx + 1}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
