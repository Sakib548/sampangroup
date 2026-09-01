"use client";

import { useState } from "react";
import { FaBed, FaBath, FaVectorSquare, FaCompass, FaCheckCircle, FaBuilding } from "react-icons/fa";

export interface UnitTypeItem {
  id: string;
  name: string;
  category: string;
  sizeSqFt: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  priceRange: string;
  orientation: string;
  highlights: string[];
}

export interface UnitTypesAndSizesProps {
  title?: string;
  subtitle?: string;
  units: UnitTypeItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  onSelectUnit?: (unitId: string) => void;
}

export default function UnitTypesAndSizes({
  title = "Apartment Unit Configurations",
  subtitle = "Explore available apartment unit layouts, floor areas, dimensions, and orientation specs.",
  units,
  bgTheme = "divisions-green",
  onSelectUnit,
}: UnitTypesAndSizesProps) {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(units.map((u) => u.category)))];

  const filteredUnits = filterCategory === "all"
    ? units
    : units.filter((u) => u.category === filterCategory);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-[#183b2b] border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="unit-types" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaBuilding className="text-xs" />
              <span>Unit Configurations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-12 border-b border-current/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? "bg-[#183b2b] text-white shadow-md"
                    : "bg-white text-current hover:bg-[#ca8a04] hover:text-neutral-950 border border-current/20"
                }`}
              >
                {cat === "all" ? "All Unit Types" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ca8a04] bg-[#ca8a04]/10 px-2.5 py-1 border border-[#ca8a04]/30">
                    {unit.category}
                  </span>
                  <span className="font-mono text-xs opacity-75 font-bold flex items-center gap-1">
                    <FaCompass className="text-[#ca8a04]" />
                    {unit.orientation}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-current leading-snug">{unit.name}</h3>

                {/* Specs Strip */}
                <div className="grid grid-cols-3 gap-2 p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs text-center">
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Size</span>
                    <span className="font-bold text-[#ca8a04]">{unit.sizeSqFt}</span>
                  </div>
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Bedrooms</span>
                    <span className="font-bold flex items-center justify-center gap-1 text-current">
                      <FaBed className="text-xs" /> {unit.bedrooms}
                    </span>
                  </div>
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Baths</span>
                    <span className="font-bold flex items-center justify-center gap-1 text-current">
                      <FaBath className="text-xs" /> {unit.bathrooms}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 text-xs">
                  {unit.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-90">
                      <FaCheckCircle className="text-[#ca8a04] text-[11px] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-current/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase block opacity-60">Estimated Price</span>
                  <span className="font-mono font-bold text-lg text-[#ca8a04]">{unit.priceRange}</span>
                </div>

                <button
                  onClick={() => onSelectUnit && onSelectUnit(unit.id)}
                  className="bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
