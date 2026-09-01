"use client";

import Image from "next/image";
import { FaHardHat, FaCheckCircle, FaClock, FaCalendarAlt, FaCamera } from "react-icons/fa";

export interface ProgressMilestone {
  stage: string;
  completionPercent: number;
  status: "Completed" | "In Progress" | "Upcoming";
  targetDate: string;
  notes: string;
}

export interface ConstructionProgressTrackerProps {
  title?: string;
  subtitle?: string;
  overallCompletionPercentage: number;
  expectedHandoverDate: string;
  currentPhase: string;
  milestones: ProgressMilestone[];
  sitePhotos?: string[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function ConstructionProgressTracker({
  title = "Construction Progress & Status Tracker",
  subtitle = "Track live site developments, architectural milestones, and expected handover timelines.",
  overallCompletionPercentage,
  expectedHandoverDate,
  currentPhase,
  milestones,
  sitePhotos = [],
  bgTheme = "divisions-green",
}: ConstructionProgressTrackerProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "white": "bg-white text-[#183b2b] border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="construction-progress" className={`py-24 relative ${containerClasses}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaHardHat className="text-xs" />
              <span>Live Site Status</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#183b2b]">
              {title}
            </h2>
          </div>

          {/* Overall Progress Scorecard */}
          <div className="border border-[#183b2b]/15 bg-white p-6 flex items-center gap-6 shadow-sm">
            <div className="text-center border-r border-[#183b2b]/15 pr-6">
              <span className="text-4xl font-mono font-bold text-[#ca8a04]">
                {overallCompletionPercentage}%
              </span>
              <span className="text-[10px] font-mono uppercase block text-[#183b2b]/60 mt-1">Overall Progress</span>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase text-[#183b2b]">Target Handover</p>
              <p className="text-sm font-bold text-[#ca8a04] mt-0.5">{expectedHandoverDate}</p>
              <p className="text-xs text-[#183b2b]/60 mt-0.5">Current Phase: {currentPhase}</p>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mb-16 border border-[#183b2b]/15 p-6 bg-white space-y-3 shadow-sm">
          <div className="flex justify-between font-mono text-xs font-bold">
            <span className="text-[#183b2b]">Overall Construction Velocity</span>
            <span className="text-[#ca8a04]">{overallCompletionPercentage}% Completed</span>
          </div>
          <div className="h-4 w-full bg-neutral-200 overflow-hidden p-0.5 border border-[#183b2b]/15">
            <div
              className="h-full bg-[#ca8a04] transition-all duration-1000"
              style={{ width: `${overallCompletionPercentage}%` }}
            />
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="border border-[#183b2b]/15 p-6 bg-white flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-[#ca8a04]">Milestone</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                    m.status === "Completed"
                      ? "bg-emerald-500/15 text-emerald-700 font-bold border border-emerald-500/30"
                      : m.status === "In Progress"
                      ? "bg-amber-500/15 text-amber-700 font-bold border border-amber-500/30"
                      : "bg-gray-200 text-gray-700"
                  }`}>
                    {m.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#183b2b] leading-snug">{m.stage}</h3>
                <p className="text-xs text-[#183b2b]/75 leading-relaxed font-normal">{m.notes}</p>
              </div>

              <div className="pt-3 border-t border-[#183b2b]/15 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-[#183b2b]/60">
                  <FaCalendarAlt className="text-[10px]" />
                  <span>Target:</span>
                </span>
                <span className="font-bold text-[#183b2b]">{m.targetDate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Site Photos Gallery if provided */}
        {sitePhotos && sitePhotos.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-[#183b2b]/15">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#ca8a04]">
              <FaCamera />
              <span>Recent On-Site Construction Photography</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sitePhotos.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] border border-[#183b2b]/15 overflow-hidden bg-neutral-200 shadow-sm">
                  <Image
                    src={photo}
                    alt={`Site Photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
