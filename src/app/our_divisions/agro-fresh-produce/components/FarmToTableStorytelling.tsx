"use client";

import Image from "next/image";
import { FaSeedling, FaSun, FaWater, FaTruckLoading, FaCheckCircle, FaAward, FaHeartbeat } from "react-icons/fa";

export interface StoryPillar {
  title: string;
  description: string;
  icon: "seed" | "sun" | "water" | "truck";
}

export interface FarmToTableStorytellingProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  storyParagraphs: string[];
  pillars: StoryPillar[];
  farmImage: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function FarmToTableStorytelling({
  title = "Farm-to-Table Storytelling & Our Philosophy",
  subtitle = "Nurturing Bangladesh's soil and waters with sustainable cultivation, zero harmful chemicals, and direct farmgate delivery.",
  concernName,
  storyParagraphs,
  pillars,
  farmImage,
  bgTheme = "divisions-green",
  accentColor = "#15803d",
}: FarmToTableStorytellingProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  const getIcon = (type: string) => {
    switch (type) {
      case "seed": return <FaSeedling className="text-emerald-700 text-lg" />;
      case "sun": return <FaSun className="text-amber-600 text-lg" />;
      case "water": return <FaWater className="text-blue-600 text-lg" />;
      case "truck": return <FaTruckLoading className="text-emerald-800 text-lg" />;
      default: return <FaSeedling className="text-emerald-700 text-lg" />;
    }
  };

  return (
    <section id="farm-story" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(34,197,94,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(234,179,8,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            <FaSeedling className="text-xs" />
            <span>Farm-To-Table Journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Farm Image with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full border border-neutral-300 shadow-xl overflow-hidden group">
              <Image
                src={farmImage}
                alt={`${concernName} Farm Facility`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-6 border border-white/20 bg-black/60 backdrop-blur-md">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-1">
                  100% Traceable Harvest
                </span>
                <p className="text-sm text-white/90 leading-relaxed font-normal">
                  Cultivated across fertile agro-estates and bio-secure fisheries, monitored from seedling to final doorstep dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraphs & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {storyParagraphs.map((para, idx) => (
                <p key={idx} className="text-base text-neutral-700 leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-6 grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-300/80 bg-white p-5 space-y-2 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 border border-emerald-200">
                      {getIcon(pillar.icon)}
                    </div>
                    <h4 className="font-bold text-base text-neutral-950">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
