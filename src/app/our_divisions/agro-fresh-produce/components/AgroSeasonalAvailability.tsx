"use client";

import { useState } from "react";
import { FaSun, FaCloudRain, FaSnowflake, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export interface SeasonalCropItem {
  name: string;
  category: string;
  peakMonths: string;
  status: "Peak Harvest" | "Available" | "Off-Season";
  notes: string;
}

export interface SeasonalData {
  seasonName: string;
  seasonCode: string;
  description: string;
  icon: "sun" | "rain" | "autumn" | "winter";
  items: SeasonalCropItem[];
}

export interface AgroSeasonalAvailabilityProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  seasons: SeasonalData[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroSeasonalAvailability({
  title = "Seasonal Availability & Harvest Calendar",
  subtitle = "Check peak harvest seasons for vegetables, tropical fruits, wild river fish, and livestock yields across Bangladesh's agricultural cycles.",
  concernName,
  seasons,
  bgTheme = "about-ivory",
  accentColor = "#15803d",
}: AgroSeasonalAvailabilityProps) {
  const [activeSeason, setActiveSeason] = useState<string>(seasons[0]?.seasonCode || "summer");

  const currentSeasonData = seasons.find((s) => s.seasonCode === activeSeason) || seasons[0];

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  const getSeasonIcon = (icon: string) => {
    switch (icon) {
      case "sun": return <FaSun className="text-amber-500" />;
      case "rain": return <FaCloudRain className="text-blue-500" />;
      case "winter": return <FaSnowflake className="text-sky-600" />;
      default: return <FaCalendarAlt className="text-emerald-600" />;
    }
  };

  return (
    <section id="seasonal-availability" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaCalendarAlt className="text-xs" />
              <span>Harvest Matrix</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Season Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {seasons.map((season) => (
              <button
                key={season.seasonCode}
                type="button"
                onClick={() => setActiveSeason(season.seasonCode)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeSeason === season.seasonCode
                    ? "bg-emerald-800 text-white border-emerald-900 shadow-md"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-emerald-600 hover:text-emerald-800"
                }`}
              >
                {getSeasonIcon(season.icon)}
                <span>{season.seasonCode}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Season Details Box */}
        <div className="border border-neutral-300 bg-white p-8 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Active Cycle
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 mt-1">
                {currentSeasonData.seasonName}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-600 max-w-md">
              {currentSeasonData.description}
            </p>
          </div>

          {/* Crops Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSeasonData.items.map((crop, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 bg-[#f8f9fa] p-5 space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {crop.category}
                  </span>
                  <span
                    className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 border ${
                      crop.status === "Peak Harvest"
                        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                        : crop.status === "Available"
                        ? "bg-amber-100 text-amber-800 border-amber-300"
                        : "bg-neutral-200 text-neutral-600 border-neutral-300"
                    }`}
                  >
                    {crop.status}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-neutral-950">
                  {crop.name}
                </h4>

                <div className="space-y-1 font-mono text-xs text-neutral-600">
                  <div className="flex items-center justify-between">
                    <span>Peak Months:</span>
                    <span className="font-bold text-neutral-900">{crop.peakMonths}</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-sans pt-1">
                    {crop.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
