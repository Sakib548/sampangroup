"use client";

import { useState } from "react";
import Image from "next/image";
import { FaDraftingCompass, FaExpand, FaTimes, FaFileDownload, FaCheckCircle } from "react-icons/fa";

export interface FloorPlanItem {
  id: string;
  name: string;
  category: string;
  sizeSqFt: string;
  image: string;
  description: string;
  features: string[];
}

export interface FloorPlansViewerProps {
  title?: string;
  subtitle?: string;
  plans: FloorPlanItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  onDownloadBlueprint?: (planName: string) => void;
}

export default function FloorPlansViewer({
  title = "Architectural Floor Plans & Plot Layouts",
  subtitle = "Examine precision engineered architectural floor plan layouts, master site plans, and spatial geometry.",
  plans,
  bgTheme = "divisions-green",
  onDownloadBlueprint,
}: FloorPlansViewerProps) {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activePlan = plans[activePlanIndex] || plans[0];

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="floor-plans" className={`py-24 relative ${containerClasses}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaDraftingCompass className="text-xs" />
              <span>Architectural Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Plan Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-current/15 pb-4">
          {plans.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePlanIndex(idx)}
              className={`px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePlanIndex === idx
                  ? "bg-[#183b2b] text-white shadow-md"
                  : "bg-white text-current hover:bg-[#ca8a04] hover:text-neutral-950 border border-current/20"
              }`}
            >
              {p.name} ({p.sizeSqFt})
            </button>
          ))}
        </div>

        {/* Main Display Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center border border-current/15 p-8 bg-white shadow-sm">
          
          {/* Blueprint Image Preview */}
          <div className="lg:col-span-8 relative aspect-[16/10] w-full border border-current/10 overflow-hidden bg-[#f3f6f2] group">
            <Image
              src={activePlan.image}
              alt={activePlan.name}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-102"
            />

            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-4 right-4 bg-[#183b2b] text-white p-3 border border-[#183b2b] hover:bg-[#ca8a04] hover:text-neutral-950 transition-colors shadow-md cursor-pointer"
            >
              <FaExpand className="text-sm" />
            </button>

            <span className="absolute bottom-4 left-4 bg-[#183b2b] font-mono text-[10px] text-white px-3 py-1">
              Blueprint Layout: {activePlan.name}
            </span>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#ca8a04]">
                {activePlan.category}
              </span>
              <h3 className="text-2xl font-bold text-current mt-1">{activePlan.name}</h3>
              <p className="font-mono text-lg font-bold text-[#ca8a04] mt-1">{activePlan.sizeSqFt}</p>
            </div>

            <p className="text-xs opacity-80 leading-relaxed font-normal">
              {activePlan.description}
            </p>

            <div className="space-y-2 border-y border-current/15 py-4">
              <span className="font-mono text-xs font-bold uppercase block opacity-60">Layout Highlights:</span>
              {activePlan.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs opacity-90">
                  <FaCheckCircle className="text-[#ca8a04] text-[11px] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onDownloadBlueprint && onDownloadBlueprint(activePlan.name)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
            >
              <FaFileDownload />
              <span>Download Full Blueprint PDF</span>
            </button>
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div className="relative w-full max-w-6xl h-[85vh] bg-black border border-[#ca8a04]/50 p-6 shadow-2xl flex flex-col justify-between">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-black/60 p-2 border border-white/20"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="relative flex-1 w-full overflow-hidden">
              <Image
                src={activePlan.image}
                alt={activePlan.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between font-mono text-xs text-white">
              <span>{activePlan.name} ({activePlan.sizeSqFt})</span>
              <button
                onClick={() => onDownloadBlueprint && onDownloadBlueprint(activePlan.name)}
                className="bg-[#ca8a04] text-neutral-950 px-4 py-2 font-bold uppercase"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
