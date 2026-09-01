"use client";

import { useState } from "react";
import { FaIndustry, FaMapMarkedAlt, FaCheckCircle, FaFileDownload, FaBuilding, FaBolt, FaRoad, FaShieldAlt } from "react-icons/fa";

export interface IndustrialPlot {
  plotNo: string;
  sizeKatha: string;
  zoneType: string;
  powerCapacity: string;
  roadFrontage: string;
  status: "Available" | "Reserved" | "Occupied";
}

export interface ResidentManufacturer {
  name: string;
  sector: string;
  allocatedArea: string;
  status: string;
}

export interface IndustrialParkOverviewProps {
  title?: string;
  subtitle?: string;
  parkConceptDescription: string;
  residentManufacturers: ResidentManufacturer[];
  plots: IndustrialPlot[];
  prospectusUrl?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  onLeasingInquiry?: (plotNo: string) => void;
}

export default function IndustrialParkOverview({
  title = "Sampan Industrial Park Master Concept & Layout",
  subtitle = "A state-of-the-art multi-industry manufacturing zone equipped with high-voltage power substations, effluent treatment, and direct highway freight access.",
  parkConceptDescription,
  residentManufacturers,
  plots,
  prospectusUrl = "#",
  bgTheme = "divisions-green",
  accentColor = "#047857",
  onLeasingInquiry,
}: IndustrialParkOverviewProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredPlots = selectedFilter === "all"
    ? plots
    : plots.filter((p) => p.status === selectedFilter);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="industrial-park" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaMapMarkedAlt className="text-xs" />
              <span>Master Planned Industrial Zone</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>

          <a
            href={prospectusUrl}
            download
            className="inline-flex items-center gap-2 text-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all cursor-pointer hover:opacity-90 shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            <FaFileDownload />
            <span>Download Investment Prospectus PDF</span>
          </a>
        </div>

        {/* Concept Overview Box */}
        <div className="border border-current/15 bg-white p-8 mb-16 shadow-sm space-y-4">
          <h3 className="text-2xl font-bold text-current">Park Concept &amp; Master Utility Infrastructure</h3>
          <p className="text-sm leading-relaxed opacity-85 font-normal">
            {parkConceptDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-current/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <FaBolt style={{ color: accentColor }} />
              <span>Dedicated 33/11kV Substation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRoad style={{ color: accentColor }} />
              <span>60 ft Arterial Freight Roads</span>
            </div>
            <div className="flex items-center gap-2">
              <FaIndustry style={{ color: accentColor }} />
              <span>Central ETP &amp; Waste Management</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt style={{ color: accentColor }} />
              <span>24/7 Gated Perimeter Security</span>
            </div>
          </div>
        </div>

        {/* Resident Manufacturers Grid */}
        <div className="border border-current/15 bg-white p-8 mb-16 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-current/15 pb-4">
            <h3 className="text-xl font-bold text-current flex items-center gap-2">
              <FaBuilding style={{ color: accentColor }} />
              <span>Resident Manufacturers &amp; Anchor Units</span>
            </h3>
            <span className="font-mono text-xs opacity-60">Multi-Industry Park Tenants</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
            {residentManufacturers.map((res, i) => (
              <div key={i} className="p-4 bg-[#f3f6f2] border border-current/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-current text-sm">{res.name}</span>
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2 py-0.5 font-bold">
                    {res.status}
                  </span>
                </div>
                <div className="text-[11px] opacity-75">{res.sector}</div>
                <div className="text-[10px] font-bold" style={{ color: accentColor }}>Footprint: {res.allocatedArea}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Plots / Units Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-current/15 pb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider block" style={{ color: accentColor }}>
                Plot Matrix
              </span>
              <h3 className="text-2xl font-bold text-current">Available Industrial Plots &amp; Factory Units</h3>
            </div>

            <div className="flex gap-2 font-mono text-xs">
              {["all", "Available", "Reserved"].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedFilter(st)}
                  className={`px-4 py-2 border transition-all cursor-pointer ${
                    selectedFilter === st
                      ? "bg-[#090d16] text-white"
                      : "bg-white text-current border-current/20 hover:bg-neutral-100"
                  }`}
                >
                  {st === "all" ? "All Plots" : st}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlots.map((plot, idx) => (
              <div
                key={idx}
                className="border border-current/15 bg-white p-6 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono font-bold text-lg" style={{ color: accentColor }}>{plot.plotNo}</span>
                    <span className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 border ${
                      plot.status === "Available"
                        ? "bg-emerald-500/15 text-emerald-700 border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-700 border-amber-500/30"
                    }`}>
                      {plot.status}
                    </span>
                  </div>

                  <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between opacity-80">
                      <span>Area Size:</span>
                      <span className="font-bold text-current">{plot.sizeKatha}</span>
                    </div>
                    <div className="flex justify-between opacity-80">
                      <span>Zoning Type:</span>
                      <span className="font-bold text-current">{plot.zoneType}</span>
                    </div>
                    <div className="flex justify-between opacity-80">
                      <span>Power Allocation:</span>
                      <span className="font-bold text-current">{plot.powerCapacity}</span>
                    </div>
                    <div className="flex justify-between opacity-80">
                      <span>Road Frontage:</span>
                      <span className="font-bold text-current">{plot.roadFrontage}</span>
                    </div>
                  </div>
                </div>

                {plot.status === "Available" && (
                  <button
                    onClick={() => onLeasingInquiry && onLeasingInquiry(plot.plotNo)}
                    className="w-full bg-[#090d16] hover:bg-neutral-800 text-white py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Inquire Land Lease / Plot Allocation
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
